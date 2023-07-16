from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Pin, Board
from ..models.db import db
from ..forms.create_pin_form import CreatePinForm, AddToPinsForm
from ..forms.edit_pin_form import EditPinForm
from .AWS_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

from .auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)

@pin_routes.route('/')
@login_required
def get_pins():
    """
    Query for all pins and returns them in a list of pin dictionaries
    """

    pins = Pin.query.all()



    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/', methods=['POST'])
@login_required
def post_pin():
    """
    Creates a new pin and returns it as a dictionary
    """
    form = CreatePinForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        image = form.data['image_url']
 
        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)

        print('working upload \n\n\n\n\n\n\n', upload)

        if "url" not in upload:
            # return render_template("post_form.html", type="post" form=form, errors=[upload])

            return upload['errors'], 400



        new_pin = Pin(
            title = form.data['title'],
            description = form.data['description'],
            image_url = upload["url"],
            owner_id = form.data['owner_id'],
        )

        db.session.add(new_pin)

        board = Board.query.get(form.data['boards'])
        new_pin.boards.append(board)

        db.session.commit()

        return {"newPin": new_pin.to_dict()}
    
    return {'errors': validation_errors_to_error_messages(form.errors)}



@pin_routes.route('/<int:id>')
@login_required
def get_particular_pin(id):
    """
    Query for a pin by id and returns that pin in a dictionary
    """
    pin = Pin.query.get(id)
    return pin.to_dict()



@pin_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_pin(id):
    """
    Updates an existing pin and returns it as a dictionary
    """

    pin = Pin.query.get(id)
    form = EditPinForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        data = form.data

        if data['title']:
            pin.title = data['title']
        if data['description']:
            pin.description = data['description']


        db.session.commit()
        return pin.to_dict()
    

    return {'errors': validation_errors_to_error_messages(form.errors)}


@pin_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_pin(id):
    """
    Query for a pin by id and deletes pin
    """

    pin = Pin.query.get(id)
    db.session.delete(pin)
    db.session.commit()
    return {"message": "Successfully deleted"}


@pin_routes.route('/<int:id>/add-board', methods=['PUT'])
@login_required
def add_board_to_pin(id):
    """
    Query for a pin by id and appends a board to that pin
    """

    pin = Pin.query.get(id)
    form = AddToPinsForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if form.data['boards']:
            boardToBeAdded = Board.query.get(form.data['boards'])
            pin.boards.append(boardToBeAdded)
        db.session.commit()

        return {"newPinBoard": pin.to_dict()}



@pin_routes.route('/search/<search>')
@login_required
def search_pins(search):
    """
    Query for pins that match a search
    """

    pins_that_match = Pin.query.filter(
        Pin.title.contains(search)).all() or Pin.query.filter(Pin.description.contains(search)).all()


    pins_that_match3 = []
    for search_word in search.split():
        pins_that_match2 = Pin.query.filter(Pin.title.contains(search_word)).all() or Pin.query.filter(Pin.description.contains(search_word)).all()

        for pinObj in pins_that_match2:
            pins_that_match3.append(pinObj)

    pins_that_match.extend(pins_that_match3)



    db.session.commit()
    return {'matchedPins': [match_pin.to_dict() for match_pin in pins_that_match]}
