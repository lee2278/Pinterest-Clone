from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class SaveForm(FlaskForm):
    user_id = IntegerField('user_id')
    pin_id = IntegerField('user_id')
