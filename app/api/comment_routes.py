from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment
from ..models.db import db
from ..forms.comment_form import CommentForm


from .auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
@login_required
def get_comments():
    """
    Query for all comments and returns them in a list of comment dictionaries
    """

    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/', methods=['POST'])
@login_required
def post_comment():
    """
    Creates a new comment and returns it as a dictionary
    """
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_comment = Comment(
            user_id = data['user_id'],
            pin_id = data['pin_id'],
            comment = data['comment']
        )
        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_comment(id):
    """
    Updates an existing comment and returns it as a dictionary
    """

    comment = Comment.query.get(id)
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        data = form.data

        if data['user_id']:
            comment.user_id = data['user_id']
        if data['pin_id']:
            comment.pin_id = data['pin_id']
        if data['comment']:
            comment.comment = data['comment']

        db.session.commit()
        return comment.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    """
    Query for a comment by id and deletes comment
    """

    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Successfully deleted"}
