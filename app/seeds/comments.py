from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text

def seed_comments():
    comment_1 = Comment(
        user_id = 1,
        pin_id = 49,
        comment = 'Ma Po Tofu is the best!'
    )
    comment_2 = Comment(
        user_id = 1,
        pin_id = 50,
        comment = 'Curry looks delicious!'
    )
    comment_3 = Comment(
        user_id = 1,
        pin_id = 31,
        comment = 'I want to learn how to make this salad!'
    )
    comment_4 = Comment(
        user_id = 2,
        pin_id = 49,
        comment = 'Goes great with rice'
    )
    comment_5 = Comment(
        user_id = 2,
        pin_id = 50,
        comment = 'Mmm this looks like a great dinner idea!'
    )
    comment_6 = Comment(
        user_id = 3,
        pin_id = 31,
        comment = 'Looks simple'
    )
    comment_7 = Comment(
        user_id = 2,
        pin_id = 43,
        comment = 'I want to make this dessert!'
    )
    comment_8 = Comment(
        user_id = 3,
        pin_id = 43,
        comment = 'I want to make this too'
    )
    comment_9 = Comment(
        user_id = 1,
        pin_id = 43,
        comment = 'The recipe is not too hard'
    )
    comment_10 = Comment(
        user_id = 2,
        pin_id = 9,
        comment = 'What a great breakfast idea! I think I will try making it'
    )
    comment_11 = Comment(
        user_id = 1,
        pin_id = 25,
        comment = 'This looks like a great drink for the summer'
    )
    comment_12 = Comment(
        user_id = 1,
        pin_id = 24,
        comment = 'Ooh, I gotta try making this some time'
    )
    comment_13 = Comment(
        user_id = 3,
        pin_id = 24,
        comment = 'Yeah, this looks great!'
    )
    comment_14 = Comment(
        user_id = 3,
        pin_id = 25,
        comment = 'Watermelon is my favorite!'
    )
    comment_15 = Comment(
        user_id = 3,
        pin_id = 19,
        comment = 'I like pineapple pizza'
    )


    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    db.session.add(comment_5)
    db.session.add(comment_6)
    db.session.add(comment_7)
    db.session.add(comment_8)
    db.session.add(comment_9)
    db.session.add(comment_10)
    db.session.add(comment_11)
    db.session.add(comment_12)
    db.session.add(comment_13)
    db.session.add(comment_14)
    db.session.add(comment_15)

    db.session.commit() 

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))
        
    db.session.commit()
