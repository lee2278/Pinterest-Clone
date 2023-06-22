from .db import db, environment, SCHEMA, add_prefix_for_prod
from .board_pin import board_pins

class Board(db.Model):
   __tablename__ = "boards"

   if environment == "production":
      __table_args__ = {'schema': SCHEMA}

   id = db.Column(db.Integer, primary_key=True)
   user_id = db.Column(db.Integer, db.ForeignKey(
      add_prefix_for_prod("users.id")))
   name = db.Column(db.String(50))
   description = db.Column(db.Text)


   # relationships
   user = db.relationship("User", back_populates="boards")
   pins = db.relationship("Pin", secondary=board_pins, back_populates="boards")

   def to_dict(self):


      return {
         "id": self.id,
         "user_id": self.user_id,
         "name": self.name,
         "description": self.description,
         "pins": [pin.to_dict_without_boards() for pin in self.pins]
      }

   def to_dict_without_pins(self):
      return {
         "id": self.id,
         "user_id": self.user_id,
         "name": self.name,
         "description": self.description,
      }
