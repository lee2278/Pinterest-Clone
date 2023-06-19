from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.AWS_helpers import ALLOWED_EXTENSIONS


class CreatePinForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description')
    # image_url = StringField('image_url', validators=[DataRequired()])


    image_url = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])


    # image_url = FileField("Image File", validators=[DataRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])


    owner_id = IntegerField('owner_id')
    board_id = IntegerField('board_id')
