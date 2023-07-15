from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Comment


class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    pin_id = IntegerField('pin_id', validators=[DataRequired()])
    comment = StringField('comment')
