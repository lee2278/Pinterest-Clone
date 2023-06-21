from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError


class EditPinForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description')

    image_url = StringField('image_url', validators=[DataRequired()])

    owner_id = IntegerField('owner_id')

