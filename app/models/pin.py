from .db import db, environment, SCHEMA, add_prefix_for_prod
from .board_pin import board_pins

class Pin(db.Model):
    __tablename__ = "pins"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.Text)

    #relationships
    owner = db.relationship("User", back_populates="pins")
    boards = db.relationship("Board", secondary=board_pins, back_populates="pins") 

    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "title": self.title,
            "description": self.description,
            "image_url": self.image_url
        }
