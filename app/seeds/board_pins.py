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
    pin_25 = Pin.query.get(25)
    pin_26 = Pin.query.get(26)
    pin_27 = Pin.query.get(27)
    pin_28 = Pin.query.get(28)
    pin_29 = Pin.query.get(29)
    pin_30 = Pin.query.get(30)
    pin_31 = Pin.query.get(31)
    pin_32 = Pin.query.get(32)
    pin_33 = Pin.query.get(33)
    pin_34 = Pin.query.get(34)
    pin_35 = Pin.query.get(35)
    pin_36 = Pin.query.get(36)
    pin_37 = Pin.query.get(37)
    pin_38 = Pin.query.get(38)
    pin_39 = Pin.query.get(39)
    pin_40 = Pin.query.get(40)
    pin_41 = Pin.query.get(41)
    pin_42 = Pin.query.get(42)
    pin_43 = Pin.query.get(43)
    pin_44 = Pin.query.get(44)
    pin_45 = Pin.query.get(45)
    pin_46 = Pin.query.get(46)
    pin_47 = Pin.query.get(47)
    pin_48 = Pin.query.get(48)
    pin_49 = Pin.query.get(49)
    pin_50 = Pin.query.get(50)

    # board seeders
    board_1 = Board.query.get(1)
    board_2 = Board.query.get(2)
    board_3 = Board.query.get(3)
    board_4 = Board.query.get(4)
    board_5 = Board.query.get(5)
    board_6 = Board.query.get(6)
    board_7 = Board.query.get(7)
    board_8 = Board.query.get(8)
    board_9 = Board.query.get(9)

    # appending pins to boards
    board_1.pins.append(pin_1)
    board_1.pins.append(pin_2)
    board_1.pins.append(pin_3)
    board_1.pins.append(pin_19)
    board_1.pins.append(pin_34)
    board_1.pins.append(pin_35)



    board_2.pins.append(pin_4)
    board_2.pins.append(pin_5)
    board_2.pins.append(pin_6)
    board_2.pins.append(pin_20)
    board_2.pins.append(pin_36)
    board_2.pins.append(pin_37)
    board_2.pins.append(pin_38)


    board_3.pins.append(pin_7)
    board_3.pins.append(pin_8)
    board_3.pins.append(pin_9)
    board_3.pins.append(pin_21)
    board_3.pins.append(pin_39)

    
    board_4.pins.append(pin_10)
    board_4.pins.append(pin_11)
    board_4.pins.append(pin_12)
    board_4.pins.append(pin_22)
    board_4.pins.append(pin_28)
    board_4.pins.append(pin_29)
    board_4.pins.append(pin_30)
    board_4.pins.append(pin_31)


    board_5.pins.append(pin_13)
    board_5.pins.append(pin_14)
    board_5.pins.append(pin_15)
    board_5.pins.append(pin_23)
    board_5.pins.append(pin_24)

    
    board_6.pins.append(pin_16)
    board_6.pins.append(pin_17)
    board_6.pins.append(pin_18)
    board_6.pins.append(pin_25)
    board_6.pins.append(pin_26)
    board_6.pins.append(pin_27)
    board_6.pins.append(pin_32)
    board_6.pins.append(pin_33)

    board_7.pins.append(pin_46)
    board_7.pins.append(pin_47)
    board_7.pins.append(pin_48)

    board_8.pins.append(pin_40)
    board_8.pins.append(pin_41)
    board_8.pins.append(pin_42)
    board_8.pins.append(pin_43)
    board_8.pins.append(pin_44)
    board_8.pins.append(pin_45)

    board_9.pins.append(pin_49)
    board_9.pins.append(pin_50)


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
    pin_23.boards.append(board_5)
    pin_24.boards.append(board_5)

    pin_25.boards.append(board_6)
    pin_26.boards.append(board_6)
    pin_27.boards.append(board_6)

    pin_28.boards.append(board_4)
    pin_29.boards.append(board_4)
    pin_30.boards.append(board_4)
    pin_31.boards.append(board_4)

    pin_32.boards.append(board_6)
    pin_33.boards.append(board_6)

    pin_34.boards.append(board_1)
    pin_35.boards.append(board_1)

    pin_36.boards.append(board_2)
    pin_37.boards.append(board_2)
    pin_38.boards.append(board_2)

    pin_39.boards.append(board_3)

    pin_40.boards.append(board_8)
    pin_41.boards.append(board_8)
    pin_42.boards.append(board_8)
    pin_43.boards.append(board_8)
    pin_44.boards.append(board_8)
    pin_45.boards.append(board_8)

    pin_46.boards.append(board_7)
    pin_47.boards.append(board_7)
    pin_48.boards.append(board_7)

    pin_49.boards.append(board_9)
    pin_50.boards.append(board_9)


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

    db.session.add(pin_28)
    db.session.add(pin_29)
    db.session.add(pin_30)
    db.session.add(pin_31)
    db.session.add(pin_32)
    db.session.add(pin_33)
    db.session.add(pin_34)
    db.session.add(pin_35)
    db.session.add(pin_36)
    db.session.add(pin_37)
    db.session.add(pin_38)
    db.session.add(pin_39)
    db.session.add(pin_40)
    db.session.add(pin_41)
    db.session.add(pin_42)
    db.session.add(pin_43)
    db.session.add(pin_44)
    db.session.add(pin_45)
    db.session.add(pin_46)
    db.session.add(pin_47)
    db.session.add(pin_48)
    db.session.add(pin_49)
    db.session.add(pin_50)

    
    #committing
    db.session.commit()


def undo_boardpins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.board_pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM board_pins"))
        
    db.session.commit()
