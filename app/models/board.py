from .db import db, environment, SCHEMA, add_prefix_for_prod

class Board(db.Model):
    __tablename__ = "boards"

    if environment == "production":
     __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
       add_prefix_for_prod("users.id")), nullable=False)
    name = db.String(50)
    description = db.Text

    # relationships
    user = db.relationship("User", back_populates="boards")
    pins = db.relationship("Pin", back_populates="boards")

    def to_dict(self):
       return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "description": self.description,
       }
