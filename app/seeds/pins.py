from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pins():
    pin_1 = Pin(
        owner_id = 1,
        board_id = 1,
        title = "Cajun Chicken Pasta",
        description ="Easy, breezy, One Pot Cajun Chicken Pasta! Made with chicken, pasta and veggies that's all coated in a creamy cajun seasoned sauce. So delicious!",
        image_url = "https://i.pinimg.com/564x/3b/63/f6/3b63f6b78fdefee0dbd949b8e489af08.jpg"
    )
    pin_2 = Pin(
        owner_id = 1,
        board_id = 1,
        title = "Garlic Butter Shrimp Pasta",
        description ="Ready to cook a quick fancy dinner? yes, this Garlic butter shrimp pasta is so creamy, has rich flavoring, and 20 minutes prep only!",
        image_url = "https://i.pinimg.com/564x/75/76/af/7576af9583ee7300dd05813c431eeb8b.jpg"
    )
    pin_3 = Pin(
        owner_id = 1,
        board_id = 1,
        title = "Stuffed Shells",
        description ="These Stuffed Shells will become your familys favorite Italian Dinner! Made with a 4-cheese blend of ricotta, mozzarella, Parmesan, and cream cheese! As an added bonus you can make this easy meal ahead of time!",
        image_url = "https://i.pinimg.com/564x/cc/53/e3/cc53e364d90e42a610b4e28cd2ad912d.jpg"
    )
    db.session.add(pin_1)
    db.session.add(pin_2)
    db.session.add(pin_3)
    db.session.commit()
    
def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))
        
    db.session.commit()
