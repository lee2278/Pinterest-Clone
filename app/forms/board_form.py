from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Board


class BoardForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description')
    user_id = IntegerField('user_id')
