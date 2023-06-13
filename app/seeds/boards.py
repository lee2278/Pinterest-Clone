from app.models import db, Board, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_boards():
    board_1 = Board(user_id=1, name="Dinner Ideas", description="For when I don't know what to make")
    board_2 = Board(user_id=1, name="Lunch Ideas", description="For when I don't know what to make" )       
    board_3 = Board(user_id=1, name="Breakfast Ideas", description="For when I don't know what to make" )       

    db.session.add(board_1)
    db.session.add(board_2)
    db.session.add(board_3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_boards():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM boards"))
        
    db.session.commit()
