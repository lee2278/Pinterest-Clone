from app.models import db, Pin, Board, environment, SCHEMA
from sqlalchemy.sql import text

def seed_boardpins():
    pass
    # pins seeders
    pin_1 = Pin.query.get(1)
    pin_2 = Pin.query.get(2)
    pin_3 = Pin.query.get(3)
    pin_4 = Pin.query.get(4)
    pin_5 = Pin.query.get(5)
    pin_6 = Pin.query.get(6)
    pin_7 = Pin.query.get(7)
    pin_8 = Pin.query.get(8)
    pin_9 = Pin.query.get(9)
    pin_10 = Pin.query.get(10)
    pin_11 = Pin.query.get(11)
    pin_12 = Pin.query.get(12)
    pin_13 = Pin.query.get(13)
    pin_14 = Pin.query.get(14)
    pin_15 = Pin.query.get(15)
    pin_16 = Pin.query.get(16)
    pin_17 = Pin.query.get(17)
    pin_18 = Pin.query.get(18)
    pin_19 = Pin.query.get(19)
    pin_20 = Pin.query.get(20)
    pin_21 = Pin.query.get(21)
    pin_22 = Pin.query.get(22)
    pin_23 = Pin.query.get(23)
    pin_24 = Pin.query.get(24)
    pin_25 = Pin.query.get(22)
    pin_26 = Pin.query.get(23)
    pin_27 = Pin.query.get(24)

    # board seeders
    board_1 = Board.query.get(1)
    board_2 = Board.query.get(2)
    board_3 = Board.query.get(3)
    board_4 = Board.query.get(4)
    board_5 = Board.query.get(5)
    board_6 = Board.query.get(6)

    # appending pins to boards
    board_1.pins.append(pin_1)
    board_1.pins.append(pin_2)
    board_1.pins.append(pin_3)
    board_1.pins.append(pin_19)

    board_2.pins.append(pin_4)
    board_2.pins.append(pin_5)
    board_2.pins.append(pin_6)
    board_2.pins.append(pin_20)

    board_3.pins.append(pin_7)
    board_3.pins.append(pin_8)
    board_3.pins.append(pin_9)
    board_3.pins.append(pin_21)

    
    board_4.pins.append(pin_10)
    board_4.pins.append(pin_11)
    board_4.pins.append(pin_12)
    board_4.pins.append(pin_22)
    board_4.pins.append(pin_23)
    board_4.pins.append(pin_24)

    board_5.pins.append(pin_13)
    board_5.pins.append(pin_14)
    board_5.pins.append(pin_15)
    board_5.pins.append(pin_25)
    board_5.pins.append(pin_26)
    board_5.pins.append(pin_27)
    
    board_6.pins.append(pin_16)
    board_6.pins.append(pin_17)
    board_6.pins.append(pin_18)



    #appending boards to pins
    pin_1.boards.append(board_1)
    pin_2.boards.append(board_1)
    pin_3.boards.append(board_1)

    pin_4.boards.append(board_2)
    pin_5.boards.append(board_2)
    pin_6.boards.append(board_2)

    pin_7.boards.append(board_3)
    pin_8.boards.append(board_3)
    pin_9.boards.append(board_3)

    pin_10.boards.append(board_4)
    pin_11.boards.append(board_4)
    pin_12.boards.append(board_4)

    pin_13.boards.append(board_5)
    pin_14.boards.append(board_5)
    pin_15.boards.append(board_5)

    pin_16.boards.append(board_6)
    pin_17.boards.append(board_6)
    pin_18.boards.append(board_6)

    pin_19.boards.append(board_1)
    pin_20.boards.append(board_2)
    pin_21.boards.append(board_3)

    pin_22.boards.append(board_4)
    pin_23.boards.append(board_4)
    pin_24.boards.append(board_4)

    pin_25.boards.append(board_5)
    pin_26.boards.append(board_5)
    pin_27.boards.append(board_5)

    #adding boards
    db.session.add(board_1)
    db.session.add(board_2)
    db.session.add(board_3)
    db.session.add(board_4)
    db.session.add(board_5)
    db.session.add(board_6)

    #adding pins
    db.session.add(pin_1)
    db.session.add(pin_2)
    db.session.add(pin_3)
    db.session.add(pin_4)
    db.session.add(pin_5)
    db.session.add(pin_6)
    db.session.add(pin_7)
    db.session.add(pin_8)
    db.session.add(pin_9)
    db.session.add(pin_10)
    db.session.add(pin_11)
    db.session.add(pin_12)
    db.session.add(pin_13)
    db.session.add(pin_14)
    db.session.add(pin_15)
    db.session.add(pin_16)
    db.session.add(pin_17)
    db.session.add(pin_18)
    db.session.add(pin_19)
    db.session.add(pin_20)
    db.session.add(pin_21)
    db.session.add(pin_22)
    db.session.add(pin_23)
    db.session.add(pin_24)
    db.session.add(pin_25)
    db.session.add(pin_26)
    db.session.add(pin_27)

    
    #committing
    db.session.commit()


def undo_boardpins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.board_pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM board_pins"))
        
    db.session.commit()
