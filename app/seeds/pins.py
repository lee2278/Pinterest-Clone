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
    pin_4 = Pin(
        owner_id = 1,
        board_id = 2,
        title = "Honey Mustard Chicken",
        description ="Ingredients: Chicken breast, asparagus, broccoli, potatoes, red onion, honey, mustard, brown sugar, olive oil",
        image_url = "https://i.pinimg.com/564x/47/ad/15/47ad15bcca02b6b4010d7f6a8f17e405.jpg"
    )
    pin_5 = Pin(
        owner_id = 1,
        board_id = 2,
        title = "Chicken Pesto Pasta with Roasted Tomatoes",
        description ="Summer pasta idea",
        image_url = "https://i.pinimg.com/564x/c1/93/1a/c1931aa23653925f40bd49ddca02ed72.jpg"
)
    pin_6 = Pin(
        owner_id = 1,
        board_id = 2,
        title = "Chicken Spaghetti with Lemon Button Garlic Sauce",
        description ="Chicken Spaghetti with Burrata Cheese, Cherry Tomatoes, and Lemon Butter Garlic Sauce is a comfort food dinner that a whole family will love! Cherry tomatoes are roasted in olive oil and garlic.",
        image_url = "https://i.pinimg.com/564x/e6/5c/3c/e65c3c894f47069cbee25ea0977cd08a.jpg"
    )
    pin_7 = Pin(
        owner_id = 1,
        board_id = 3,
        title = "Turkish Eggs",
        description ="Easy to prepare and delicious brunch or breakfast idea. Turkish eggs are the perfect way to start your day. This dish is something that is made when you don't have many ingredients in the fridge and want to prepare something quick, healthy and delicious for your family. It uses simple ingredients that many people have already at home, specially in Middle Eastern or Mediterranean countries",
        image_url = "https://i.pinimg.com/564x/f0/5e/9f/f05e9fb6524bb4c2d8877ac54c5deabe.jpg"
)
    pin_8 = Pin(
        owner_id = 1,
        board_id = 3,
        title = "French Toast Casserole",
        description ="French Toast Casserole - easy sweet breakfast and brunch for the holidays! Make ahead overnight! Baked french toast and egg mixture topped with berries make for a yummy sweet breakfast - perfect for the Christmas and Thanksgiving holidays.",
        image_url = "https://i.pinimg.com/564x/ea/ec/d7/eaecd723d798e83b4d3194de8ad92a4f.jpg"
)
    pin_9 = Pin(
        owner_id = 1,
        board_id = 3,
        title = "Breakfast Fruit Tarts",
        description ="Breakfast Fruit Tarts are granola tart shells filled with yogurt, lemon curd and fresh fruit. They're a fun, delicious breakfast or brunch!",
        image_url = "https://i.pinimg.com/564x/44/b7/82/44b782260e63e28abae556ba3e297c6c.jpg"
)
    pin_10 = Pin(
        owner_id = 2,
        board_id = 4,
        title = "Strawberry Blueberry Spinach Salad",
        description ="30-Minute Strawberry Spinach Salad with Blueberries, Pecans, Feta cheese, and a simple Balsamic glaze. Perfect SUMMER SALAD! this salad is a perfect side dish for any weeknight dinner. It is also a crowd-pleaser for many holiday occasions, picnics, potlucks, and other friends and family gatherings!",
        image_url = "https://i.pinimg.com/564x/94/74/6b/94746b53477da9d3828ba06e2473f4e4.jpg"
)
    pin_11 = Pin(
        owner_id = 2,
        board_id = 4,
        title = "Spicy Grilled Shrimp Salad with Jalapeno Lime Vinaigrette",
        description ="a fresh, spicy grilled shrimp salad with arugula, grilled pineapple, avocado, cherry tomatoes, and jalapeño lime vinaigrette servings: 2-4",
        image_url = "https://i.pinimg.com/564x/16/36/60/16366091b4aad3e115a03d6018b25514.jpg"
)
    pin_12 = Pin(
        owner_id = 2,
        board_id = 4,
        title = "30-Minute SUMMER SALAD - Berry Spinach Salad with Blueberries, Raspberries, Mandarin Oranges, Pecans, and Feta",
        description ="Very easy to make",
        image_url = "https://i.pinimg.com/564x/eb/9e/3f/eb9e3f45fedbfc0f241a63c52ec3abe1.jpg"
)
    pin_13 = Pin(
        owner_id = 2,
        board_id = 5,
        title = "10 Minute Air Fryer Chicken and Veggies",
        description ="This is an AMAZING air fryer recipe. You can make this with chicken breast or chicken thighs and it comes out perfectly! It is super simple with herbs, spices, and olive oil, and has vibrant vegetables! It is full of protein, keto friendly, low-carb, gluten-free, whole 30, and weight watchers.",
        image_url = "https://i.pinimg.com/564x/5a/e7/ad/5ae7ad0b1b27acfdd5268c878bb9c1bd.jpg"
)
    pin_14 = Pin(
        owner_id = 2,
        board_id = 5,
        title = "Low Carb Greek Chicken Bowls",
        description ="Low Carb Greek Chicken Bowls packed with everyone's favorite greek flavors! Delicious in a bowl with cucumber and tomato salad, onions, homemade tzatziki, and feta cheese.",
        image_url = "https://i.pinimg.com/564x/20/8b/87/208b871dee1dcbb98548155e6e357231.jpg"
)
    pin_15 = Pin(
        owner_id = 2,
        board_id = 5,
        title = "Low Carb Creamy Tuscan Chicken",
        description ="Low Carb Creamy Tuscan Chicken is so rich and creamy with lots of sun-dried tomatoes and spinach in a parmesan cream sauce. It is one of my very favorite low carb meals and it is perfect for the keto diet.",
        image_url = "https://i.pinimg.com/564x/77/19/ea/7719ea469e2dc050a5fef377b6c765d0.jpg"
)
    pin_16 = Pin(
        owner_id = 2,
        board_id = 6,
        title = "Lemon Blueberry Avocado Smoothie",
        description ="This lemon blueberry avocado smoothie is such a delicious, easy, and filling breakfast idea! Touches of lemon zest, vanilla, and cinnamon add so much incredible flavour, while avocado and yogurt make the texture super creamy. Recipe is gluten-free, naturally sweetened only with fruit, and can be made vegan if needed.",
        image_url = "https://i.pinimg.com/564x/22/42/c9/2242c90def38df15da0920f4879eccee.jpg"
)
    pin_17 = Pin(
        owner_id = 2,
        board_id = 6,
        title = "Mango Pineapple Cucumber Smoothie",
        description ="This light, bright, and refreshing Cucumber Pineapple Mango Smoothie is the perfect no-cook breakfast to start your morning. It blends cucumber, with pineapple and mango chunks (fresh or frozen work well), spinach, plain Greek yogurt, and almond milk. Creamy and nourishing, with the perfect level of sweetness! Ready in 5 minutes.",
        image_url = "https://i.pinimg.com/564x/dd/91/94/dd9194d7f09aba4e4fe2dfbdd98305ec.jpg"
)
    pin_18 = Pin(
        owner_id = 2,
        board_id = 6,
        title = "Orange Creamsicle Smoothie",
        description ="This sweet and refreshing orange creamsicle smoothie is perfect for an easy breakfast or healthy snack! It's so flavorful, and totally delicious!",
        image_url = "https://i.pinimg.com/564x/64/7c/a3/647ca39354bdf5b22a5aa3a82d959c46.jpg"
)
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
    

    db.session.commit()
    
def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))
        
    db.session.commit()
