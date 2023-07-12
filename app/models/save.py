from .db import db, environment, SCHEMA, add_prefix_for_prod

class Save(db.Model):
    __tablename__ = "saves"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    pin_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("pin.id")), nullable=False)

    #relationships
    user = db.relationship("User", back_populates="saves")
    pins = db.relationship("Pin", back_populates="saves")


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "pin_id": self.pin_id
        }
