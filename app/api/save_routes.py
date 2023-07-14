from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Save
from ..models.db import db
from .auth_routes import validation_errors_to_error_messages
from ..forms.save_form import SaveForm

save_routes = Blueprint('saves', __name__)

@save_routes.route('/')
@login_required
def get_saves():
    """
    Query for all saves and returns them in a list of save dictionaries
    """

    saves = Save.query.all()

    return {'saves': [save.to_dict() for save in saves]}


@save_routes.route('/', methods=['POST'])
@login_required
def create_save():
    """
    Creates a new save and returns it as a dictionary
    """
    form = SaveForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_save = Save(
            user_id = data['user_id'],
            pin_id = data['pin_id']
        )
        db.session.add(new_save)
        db.session.commit()

        return new_save.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@save_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_save(id):
    """
    Query for a save by id and deletes save
    """

    save = Save.query.get(id)
    db.session.delete(save)
    db.session.commit()
    return {"message": "Successfully deleted"}
