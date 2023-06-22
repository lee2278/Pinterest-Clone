from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pins():
    pin_1 = Pin(
        owner_id = 1,
        title = "Cajun Chicken Pasta",
        description ="Easy, breezy, One Pot Cajun Chicken Pasta! Made with chicken, pasta and veggies that's all coated in a creamy cajun seasoned sauce. So delicious!",
        image_url = "https://i.pinimg.com/564x/3b/63/f6/3b63f6b78fdefee0dbd949b8e489af08.jpg"
    )
    pin_2 = Pin(
        owner_id = 1,
        
        title = "Garlic Butter Shrimp Pasta",
        description ="Ready to cook a quick fancy dinner? yes, this Garlic butter shrimp pasta is so creamy, has rich flavoring, and 20 minutes prep only!",
        image_url = "https://i.pinimg.com/564x/75/76/af/7576af9583ee7300dd05813c431eeb8b.jpg"
    )
    pin_3 = Pin(
        owner_id = 1,
        
        title = "Stuffed Shells",
        description ="These Stuffed Shells will become your familys favorite Italian Dinner! Made with a 4-cheese blend of ricotta, mozzarella, Parmesan, and cream cheese! As an added bonus you can make this easy meal ahead of time!",
        image_url = "https://i.pinimg.com/564x/cc/53/e3/cc53e364d90e42a610b4e28cd2ad912d.jpg"
    )
    pin_4 = Pin(
        owner_id = 1,
        
        title = "Honey Mustard Chicken",
        description ="Ingredients: Chicken breast, asparagus, broccoli, potatoes, red onion, honey, mustard, brown sugar, olive oil",
        image_url = "https://i.pinimg.com/564x/47/ad/15/47ad15bcca02b6b4010d7f6a8f17e405.jpg"
    )
    pin_5 = Pin(
        owner_id = 1,
        
        title = "Chicken Pesto Pasta with Roasted Tomatoes",
        description ="Summer pasta idea",
        image_url = "https://i.pinimg.com/564x/c1/93/1a/c1931aa23653925f40bd49ddca02ed72.jpg"
)
    pin_6 = Pin(
        owner_id = 1,
        
        title = "Chicken Spaghetti with Lemon Button Garlic Sauce",
        description ="Chicken Spaghetti with Burrata Cheese, Cherry Tomatoes, and Lemon Butter Garlic Sauce is a comfort food dinner that a whole family will love! Cherry tomatoes are roasted in olive oil and garlic.",
        image_url = "https://i.pinimg.com/564x/e6/5c/3c/e65c3c894f47069cbee25ea0977cd08a.jpg"
    )
    pin_7 = Pin(
        owner_id = 1,
        
        title = "Turkish Eggs",
        description ="Easy to prepare and delicious brunch or breakfast idea. Turkish eggs are the perfect way to start your day. This dish is something that is made when you don't have many ingredients in the fridge and want to prepare something quick, healthy and delicious for your family. It uses simple ingredients that many people have already at home, specially in Middle Eastern or Mediterranean countries",
        image_url = "https://i.pinimg.com/564x/f0/5e/9f/f05e9fb6524bb4c2d8877ac54c5deabe.jpg"
)
    pin_8 = Pin(
        owner_id = 1,
        
        title = "French Toast Casserole",
        description ="French Toast Casserole - easy sweet breakfast and brunch for the holidays! Make ahead overnight! Baked french toast and egg mixture topped with berries make for a yummy sweet breakfast - perfect for the Christmas and Thanksgiving holidays.",
        image_url = "https://i.pinimg.com/564x/ea/ec/d7/eaecd723d798e83b4d3194de8ad92a4f.jpg"
)
    pin_9 = Pin(
        owner_id = 1,
        
        title = "Breakfast Fruit Tarts",
        description ="Breakfast Fruit Tarts are granola tart shells filled with yogurt, lemon curd and fresh fruit. They're a fun, delicious breakfast or brunch!",
        image_url = "https://i.pinimg.com/564x/44/b7/82/44b782260e63e28abae556ba3e297c6c.jpg"
)
    pin_10 = Pin(
        owner_id = 2,
        
        title = "Strawberry Blueberry Spinach Salad",
        description ="30-Minute Strawberry Spinach Salad with Blueberries, Pecans, Feta cheese, and a simple Balsamic glaze. Perfect SUMMER SALAD! this salad is a perfect side dish for any weeknight dinner. It is also a crowd-pleaser for many holiday occasions, picnics, potlucks, and other friends and family gatherings!",
        image_url = "https://i.pinimg.com/564x/94/74/6b/94746b53477da9d3828ba06e2473f4e4.jpg"
)
    pin_11 = Pin(
        owner_id = 2,
        
        title = "Spicy Grilled Shrimp Salad with Jalapeno Lime Vinaigrette",
        description ="a fresh, spicy grilled shrimp salad with arugula, grilled pineapple, avocado, cherry tomatoes, and jalapeño lime vinaigrette servings: 2-4",
        image_url = "https://i.pinimg.com/564x/16/36/60/16366091b4aad3e115a03d6018b25514.jpg"
)
    pin_12 = Pin(
        owner_id = 2,
        
        title = "30-Minute SUMMER SALAD - Berry Spinach Salad with Blueberries, Raspberries, Mandarin Oranges, Pecans, and Feta",
        description ="Very easy to make",
        image_url = "https://i.pinimg.com/564x/eb/9e/3f/eb9e3f45fedbfc0f241a63c52ec3abe1.jpg"
)
    pin_13 = Pin(
        owner_id = 2,
        
        title = "10 Minute Air Fryer Chicken and Veggies",
        description ="This is an AMAZING air fryer recipe. You can make this with chicken breast or chicken thighs and it comes out perfectly! It is super simple with herbs, spices, and olive oil, and has vibrant vegetables! It is full of protein, keto friendly, low-carb, gluten-free, whole 30, and weight watchers.",
        image_url = "https://i.pinimg.com/564x/5a/e7/ad/5ae7ad0b1b27acfdd5268c878bb9c1bd.jpg"
)
    pin_14 = Pin(
        owner_id = 2,
        
        title = "Low Carb Greek Chicken Bowls",
        description ="Low Carb Greek Chicken Bowls packed with everyone's favorite greek flavors! Delicious in a bowl with cucumber and tomato salad, onions, homemade tzatziki, and feta cheese.",
        image_url = "https://i.pinimg.com/564x/20/8b/87/208b871dee1dcbb98548155e6e357231.jpg"
)
    pin_15 = Pin(
        owner_id = 2,
        
        title = "Chicken Salad Lettuce Wraps",
        description ="BLTA made into a hearty and delicious chicken salad! Perfect wrapped in a lettuce for a lower carb version or serve with bread.",
        image_url = "https://i.pinimg.com/564x/d2/ed/c9/d2edc94ca4a9fc3a93ac0166230b0f77.jpg"
)
    pin_16 = Pin(
        owner_id = 2,
        
        title = "Lemon Blueberry Avocado Smoothie",
        description ="This lemon blueberry avocado smoothie is such a delicious, easy, and filling breakfast idea! Touches of lemon zest, vanilla, and cinnamon add so much incredible flavour, while avocado and yogurt make the texture super creamy. Recipe is gluten-free, naturally sweetened only with fruit, and can be made vegan if needed.",
        image_url = "https://i.pinimg.com/564x/22/42/c9/2242c90def38df15da0920f4879eccee.jpg"
)
    pin_17 = Pin(
        owner_id = 2,
        
        title = "Mango Pineapple Cucumber Smoothie",
        description ="This light, bright, and refreshing Cucumber Pineapple Mango Smoothie is the perfect no-cook breakfast to start your morning. It blends cucumber, with pineapple and mango chunks (fresh or frozen work well), spinach, plain Greek yogurt, and almond milk. Creamy and nourishing, with the perfect level of sweetness! Ready in 5 minutes.",
        image_url = "https://i.pinimg.com/564x/dd/91/94/dd9194d7f09aba4e4fe2dfbdd98305ec.jpg"
)
    pin_18 = Pin(
        owner_id = 2,
        
        title = "Orange Creamsicle Smoothie",
        description ="This sweet and refreshing orange creamsicle smoothie is perfect for an easy breakfast or healthy snack! It's so flavorful, and totally delicious!",
        image_url = "https://i.pinimg.com/564x/64/7c/a3/647ca39354bdf5b22a5aa3a82d959c46.jpg"
)
    pin_19 = Pin (
        owner_id = 1,
        title = "Pineapple Pizza",
        description = "Pineapple pizza, also known as Hawaiian pizza, is a contentious combination of flavors that elicits strong opinions. It features a traditional pizza base topped with tomato sauce, cheese, and chunks of juicy pineapple, along with other optional ingredients like ham or bacon. Loved by some for its unique blend of sweet and savory tastes, while despised by others who argue that fruit has no place on a pizza, pineapple pizza continues to spark lively debates among pizza enthusiasts worldwide.",
        image_url = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"
    )
    pin_20 = Pin (
        owner_id = 1,
        title = 'Homemade ramen',
        description = "Spice up your instant ramen with some eggs, veggies, and shrimp. A little dash of sesame seeds can make a difference!",
        image_url = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
    )
    pin_21 = Pin (
        owner_id = 1,
        title = 'Blueberry Waffles',
        description = "Perfect way to start the morning. A quick and easy breakfast idea.",
        image_url = "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    )
    pin_22 = Pin (
        owner_id = 2,
        title = 'Sushi Platter',
        description = 'Sushi is great for any time',
        image_url = "https://images.unsplash.com/photo-1676037150294-837ff0c29599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    )
    pin_23 = Pin (
        owner_id = 2,
        title = 'Pan-Seared Steak with Garlic Butter',
        description = "This Pan-Seared Steak has a garlic butter that makes it taste like a steakhouse quality meal. You'll be impressed at how easy it is to make the perfect steak that's seared on the outside, and perfectly tender inside.",
        image_url = "https://i.pinimg.com/564x/6d/ba/91/6dba91c1fdb5d4939c7e9d65420cbd4c.jpg"
    )
    pin_24 = Pin (
        owner_id =2,
        title = 'The Best Chicken Tinga Tacos',
        description = "To make these delicious meat tacos, shred 3 cups of cooked chicken and set aside. Slice 2 ripe avocados and finely chop 1/4 cup of fresh cilantro. Mince 2 cloves of garlic and cut a lime into wedges. In a small bowl, combine 1 teaspoon dried oregano, 1/2 cup red onion, 1 cup sweet onion, 3/4 cup canned fire-roasted tomatoes, 1/4 cup chicken stock, 1 chipotle pepper in adobo sauce, 1/2 teaspoon kosher salt, 1 tablespoon olive oil, and 1/2 teaspoon ground cumin to create a sauce. Warm 10 (6-inch) corn tortillas, then assemble the tacos by placing shredded chicken on each tortilla and topping with sliced/cubed avocados, minced garlic, and fresh cilantro. Drizzle the prepared sauce over the fillings and sprinkle with 1/4 cup crumbled cotija cheese. Serve with lime wedges. Enjoy!",
        image_url = "https://i.pinimg.com/564x/94/34/ad/9434ad0f6de508d27e8f3cea42d51376.jpg"
    )
    pin_25 = Pin (
        owner_id =2,
        title = 'Coconut Key Lime Pie Smoothie',
        description = "Creamy coconut key lime pie smoothie made with simple ingredients and luscious hints of coconut. This incredible key lime pie smoothie recipe tastes just like a slice of your favorite dessert but is packed with protein and a boost of sneaky veggies! Enjoy the perfect breakfast, snack or even healthy dessert.",
        image_url = "https://i.pinimg.com/564x/bf/1d/7e/bf1d7ebeeea4456220ab76c238cf248d.jpg"
    )
    pin_26 = Pin (
        owner_id =2,
        title = 'Blueberry Pineapple Smoothie',
        description = "Blueberry Pineapple Smoothie - A sweet and fresh healthy smoothie to grab when you think you may miss eating your daily serving of fresh fruits! Made with Greek yogurt, banana and almond milk…",
        image_url = "https://i.pinimg.com/564x/39/8a/ec/398aec3787146eeafcc047fd0cbc90ce.jpg"
    )
    pin_27 = Pin (
        owner_id =2,
        title = 'Avocado Mango Smoothie',
        description = "This creamy and delicious avocado mango smoothie is the only green smoothie recipe you need! Naturally sweet, gluten free, vegan, and even kid approved. It's the perfect light and refreshing drink.",
        image_url = "https://i.pinimg.com/564x/43/d5/18/43d518443cf13c75eae6d7c9d57d5a38.jpg"
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
    db.session.add(pin_19)
    db.session.add(pin_20)
    db.session.add(pin_21)
    db.session.add(pin_22)
    db.session.add(pin_23)
    db.session.add(pin_24)
    db.session.add(pin_25)
    db.session.add(pin_26)
    db.session.add(pin_27)


    db.session.commit()
    
def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))
        
    db.session.commit()
