from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Board
from ..models.db import db
from ..forms.board_form import BoardForm


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
    Query for a board by name and returns that board in a dictionary
    """
    board = Board.query.get(id)
    return board.to_dict()


@board_routes.route('/', methods=['POST'])
@login_required
def post_board():
    """
    Creates a new board and returns it as a dictionary
    """
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_board = Board(
            user_id = data['user_id'],
            name = data['name'],
            description = data['description']
        )
        db.session.add(new_board)
        db.session.commit()

        return new_board.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@board_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_board(id):
    """
    Updates an existing board and returns it as a dictionary
    """

    board = Board.query.get(id)
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        data = form.data

        if data['name']:
            board.name = data['name']
        if data['description']:
            board.description = data['description']

        db.session.commit()
        return board.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}


@board_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_board(id):
    """
    Query for a board by id and deletes board
    """

    board = Board.query.get(id)
    db.session.delete(board)
    db.session.commit()
    return {"message": "Successfully deleted"}



@board_routes.route('/<int:boardId>/remove-pin/<int:pinId>', methods=['DELETE'])
@login_required
def delete_pin_from_board(boardId, pinId):
    """
    Query for a board by id and removes pin from board
    """


    board = Board.query.get(boardId)


    board.pins = [pin for pin in board.pins if pin.id != pinId]



    db.session.commit()
    return {"message": "Successfully deleted"}
