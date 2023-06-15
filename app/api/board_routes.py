from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Board
from ..models.db import db



from .auth_routes import validation_errors_to_error_messages

board_routes = Blueprint('boards', __name__)

@board_routes.route('/')
@login_required
def get_boards():
    """
    Query for all boards and returns them in a list of board dictionaries
    """

    boards = Board.query.filter(Board.user_id == current_user.id).all()
    
    return {'boards': [board.to_dict() for board in boards]}


@board_routes.route('/<int:id>')
@login_required
def get_particular_board(id):
    """
    Query for a board by name adn returns that board in a dictionary
    """
    board = Board.query.get(id)
    return board.to_dict()


@board_routes.route('/', methods=['POST'])
@login_required
def post_board():
    """
    Creates a new board and returns it as a dictionary
    """

    
