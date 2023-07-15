from app.models import db, Save, environment, SCHEMA
from sqlalchemy.sql import text

def seed_saves():
    save_1 = Save(
        user_id = 1,
        pin_id = 1
    )
    save_2 = Save(
        user_id = 1,
        pin_id = 2
    )
    save_3 = Save(
        user_id = 1,
        pin_id = 3
    )
    save_4 = Save(
        user_id = 1,
        pin_id = 19
    )
    save_5 = Save(
        user_id = 1,
        pin_id = 34
    )
    save_6 = Save(
        user_id = 1,
        pin_id = 35
    )
    save_7 = Save(
        user_id = 1,
        pin_id = 4
    )
    save_8 = Save(
        user_id = 1,
        pin_id = 5
    )
    save_9 = Save(
        user_id = 1,
        pin_id = 6
    )
    save_10 = Save(
        user_id = 1,
        pin_id = 20
    )
    save_11 = Save(
        user_id = 1,
        pin_id = 36
    )
    save_12 = Save(
        user_id = 1,
        pin_id = 37
    )
    save_13 = Save(
        user_id = 1,
        pin_id = 38
    )
    save_14 = Save(
        user_id = 1,
        pin_id = 7
    )
    save_15 = Save(
        user_id = 1,
        pin_id = 8
    )
    save_16 = Save(
        user_id = 1,
        pin_id = 9
    )
    save_17 = Save(
        user_id = 1,
        pin_id = 21
    )
    save_18 = Save(
        user_id = 1,
        pin_id = 39
    )
    save_19 = Save(
        user_id = 1,
        pin_id = 40
    )
    save_20 = Save(
        user_id = 1,
        pin_id = 41
    )
    save_21 = Save(
        user_id = 1,
        pin_id = 42
    )
    save_22 = Save(
        user_id = 1,
        pin_id = 43
    )
    save_23 = Save(
        user_id = 1,
        pin_id = 44
    )
    save_24 = Save(
        user_id = 1,
        pin_id = 45
    )



    save_25 = Save(
        user_id = 2,
        pin_id = 10
    )
    save_26 = Save(
        user_id = 2,
        pin_id = 11
    )
    save_27 = Save(
        user_id = 2,
        pin_id = 12
    )
    save_28 = Save(
        user_id = 2,
        pin_id = 22
    )
    save_29 = Save(
        user_id = 2,
        pin_id = 28
    )
    save_30 = Save(
        user_id = 2,
        pin_id = 29
    )
    save_31 = Save(
        user_id = 2,
        pin_id = 30
    )
    save_32 = Save(
        user_id = 2,
        pin_id = 31
    )
    save_33 = Save(
        user_id = 2,
        pin_id = 13
    )
    save_34 = Save(
        user_id = 2,
        pin_id = 14
    )
    save_35 = Save(
        user_id = 2,
        pin_id = 15
    )
    save_36 = Save(
        user_id = 2,
        pin_id = 23
    )
    save_37 = Save(
        user_id = 2,
        pin_id = 24
    )
    save_38 = Save(
        user_id = 2,
        pin_id = 16
    )
    save_39 = Save(
        user_id = 2,
        pin_id = 17
    )
    save_40 = Save(
        user_id = 2,
        pin_id = 18
    )
    save_41 = Save(
        user_id = 2,
        pin_id = 25
    )
    save_42 = Save(
        user_id = 2,
        pin_id = 26
    )
    save_43 = Save(
        user_id = 2,
        pin_id = 27
    )
    save_44 = Save(
        user_id = 2,
        pin_id = 32
    )
    save_45 = Save(
        user_id = 2,
        pin_id = 33
    )
    save_46 = Save(
        user_id = 2,
        pin_id = 46
    )
    save_47 = Save(
        user_id = 2,
        pin_id = 47
    )
    save_48 = Save(
        user_id = 2,
        pin_id = 48
    )
    save_49 = Save(
        user_id = 3,
        pin_id = 49
    )
    save_50 = Save(
        user_id = 3,
        pin_id = 50
    )


    db.session.add(save_1)
    db.session.add(save_2)
    db.session.add(save_3)
    db.session.add(save_4)
    db.session.add(save_5)
    db.session.add(save_6)
    db.session.add(save_7)
    db.session.add(save_8)
    db.session.add(save_9)
    db.session.add(save_10)
    db.session.add(save_11)
    db.session.add(save_12)
    db.session.add(save_13)
    db.session.add(save_14)
    db.session.add(save_15)
    db.session.add(save_16)
    db.session.add(save_17)
    db.session.add(save_18)
    db.session.add(save_19)
    db.session.add(save_20)
    db.session.add(save_21)
    db.session.add(save_22)
    db.session.add(save_23)
    db.session.add(save_24)
    db.session.add(save_25)
    db.session.add(save_26)
    db.session.add(save_27)
    db.session.add(save_28)
    db.session.add(save_29)
    db.session.add(save_30)
    db.session.add(save_31)
    db.session.add(save_32)
    db.session.add(save_33)
    db.session.add(save_34)
    db.session.add(save_35)
    db.session.add(save_36)
    db.session.add(save_37)
    db.session.add(save_38)
    db.session.add(save_39)
    db.session.add(save_40)
    db.session.add(save_41)
    db.session.add(save_42)
    db.session.add(save_43)
    db.session.add(save_44)
    db.session.add(save_45)
    db.session.add(save_46)
    db.session.add(save_47)
    db.session.add(save_48)
    db.session.add(save_49)
    db.session.add(save_50)

    db.session.commit()


def undo_saves():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.saves RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM saves"))
        
    db.session.commit()
