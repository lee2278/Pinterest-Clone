from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Pin
from ..models.db import db


from .auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)

@pin_routes.route('/')
@login_required
def get_pins():
    """
    Query for all pins and returns them in a list of pin dictionaries
    """

    pins = Pin.query.all()
    