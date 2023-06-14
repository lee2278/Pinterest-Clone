from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Pin
from ..models.db import db
from ..forms.create_pin_form import CreatePinForm


from .auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)

@pin_routes.route('/')
@login_required
def get_pins():
    """
    Query for all pins and returns them in a list of pin dictionaries
    """

    pins = Pin.query.all()
    print('pins \n\n\n\n\n\n', pins)

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
        data = form.data
        new_pin = Pin(
            title = data['title'],
            description = data['description'],
            image_url = data['image_url'],
            owner_id = data['owner_id'],
            board_id = data['board_id']
        )
        db.session.add(new_pin)
        db.session.commit()

        return new_pin.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
