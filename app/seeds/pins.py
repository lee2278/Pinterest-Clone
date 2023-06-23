from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pins():
    pin_1 = Pin(
        owner_id = 1,
        title = "Cajun Chicken Pasta",
        description ="Easy, breezy, One Pot Cajun Chicken Pasta! Made with chicken, pasta and veggies that's all coated in a creamy cajun seasoned sauce. So delicious!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/d60b617c01ee40708ea3cdd93345c814.jpg"
    )
    pin_2 = Pin(
        owner_id = 1,
        
        title = "Garlic Butter Shrimp Pasta",
        description ="Ready to cook a quick fancy dinner? yes, this Garlic butter shrimp pasta is so creamy, has rich flavoring, and 20 minutes prep only!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/6bbfa4378759492c9f6bb5ce2faef816.jpg"
    )
    pin_3 = Pin(
        owner_id = 1,
        
        title = "Sesame Beef and Broccoli",
        description ="Sesame Beef and Broccoli! Full of protein, green broccoli goodness, and sticky-sweet garlic and ginger flavor. Perfect at-home takeout!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/71a6878909f84dffab5a396884d0fbcd.jpg"
    )
    pin_4 = Pin(
        owner_id = 1,
        
        title = "Honey Mustard Chicken",
        description ="Ingredients: Chicken breast, asparagus, broccoli, potatoes, red onion, honey, mustard, brown sugar, olive oil",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/4d487612d52b4a4c9420f060c4202a39.jpg"
    )
    pin_5 = Pin(
        owner_id = 1,
        
        title = "Chicken Pesto Pasta with Roasted Tomatoes",
        description ="Summer pasta idea",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/6f6d5e7f6a5e4a01b87c4374a41916dc.jpg"
)
    pin_6 = Pin(
        owner_id = 1,
        
        title = "Spicy Salmon Sushi Bowls",
        description ="These spicy salmon sushi bowls are the perfect no-cook recipe for summer! Fresh salmon tossed in a spicy mayo sauce on top of seasoned sushi rice with cucumbers, edamame, avocado, and nori.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/40d771fdbbfd4efa854747ea11b388c2.jpg"
    )
    pin_7 = Pin(
        owner_id = 1,
        
        title = "Turkish Eggs",
        description ="Easy to prepare and delicious brunch or breakfast idea. Turkish eggs are the perfect way to start your day. This dish is something that is made when you don't have many ingredients in the fridge and want to prepare something quick, healthy and delicious for your family. It uses simple ingredients that many people have already at home, specially in Middle Eastern or Mediterranean countries",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/8e812716483c427bb341ec05d49691e2.jpg"
)
    pin_8 = Pin(
        owner_id = 1,
        
        title = "French Toast Casserole",
        description ="French Toast Casserole - easy sweet breakfast and brunch for the holidays! Make ahead overnight! Baked french toast and egg mixture topped with berries make for a yummy sweet breakfast - perfect for the Christmas and Thanksgiving holidays.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/a32e0c71707c4eec920923bfe4780b23.jpg"
)
    pin_9 = Pin(
        owner_id = 1,
        
        title = "Breakfast Fruit Tarts",
        description ="Breakfast Fruit Tarts are granola tart shells filled with yogurt, lemon curd and fresh fruit. They're a fun, delicious breakfast or brunch!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/29ef12a1d09e414dad9f72b0053ec6ac.jpg"
)
    pin_10 = Pin(
        owner_id = 2,
        
        title = "Strawberry Blueberry Spinach Salad",
        description ="30-Minute Strawberry Spinach Salad with Blueberries, Pecans, Feta cheese, and a simple Balsamic glaze. Perfect SUMMER SALAD! this salad is a perfect side dish for any weeknight dinner. It is also a crowd-pleaser for many holiday occasions, picnics, potlucks, and other friends and family gatherings!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/b85ad7e3483543e38e14e72c5d8afc3e.jpg"
)
    pin_11 = Pin(
        owner_id = 2,
        
        title = "Spicy Grilled Shrimp Salad with Jalapeno Lime Vinaigrette",
        description ="a fresh, spicy grilled shrimp salad with arugula, grilled pineapple, avocado, cherry tomatoes, and jalapeño lime vinaigrette servings: 2-4",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/afaaa2f161e0448e8b98d24a9f2cac8a.jpg"
)
    pin_12 = Pin(
        owner_id = 2,
        
        title = "30-Minute SUMMER SALAD - Berry Spinach Salad with Blueberries, Raspberries, Mandarin Oranges, Pecans, and Feta",
        description ="Very easy to make",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/8cf289a2dc7d4bf685405f190ca6da86.jpg"
)
    pin_13 = Pin(
        owner_id = 2,
        
        title = "10 Minute Air Fryer Chicken and Veggies",
        description ="This is an AMAZING air fryer recipe. You can make this with chicken breast or chicken thighs and it comes out perfectly! It is super simple with herbs, spices, and olive oil, and has vibrant vegetables! It is full of protein, keto friendly, low-carb, gluten-free, whole 30, and weight watchers.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/ea690f1183d44edfbc4b7816a67b0f2d.jpg"
)
    pin_14 = Pin(
        owner_id = 2,
        
        title = "Low Carb Greek Chicken Bowls",
        description ="Low Carb Greek Chicken Bowls packed with everyone's favorite greek flavors! Delicious in a bowl with cucumber and tomato salad, onions, homemade tzatziki, and feta cheese.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/0908df19f9d44edbad3d2b3c2eb530d4.jpg"
)
    pin_15 = Pin(
        owner_id = 2,
        
        title = "Chicken Salad Lettuce Wraps",
        description ="BLTA made into a hearty and delicious chicken salad! Perfect wrapped in a lettuce for a lower carb version or serve with bread.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/d9ce9b1f79c948eaa399059f30cf2fe2.jpg"
)
    pin_16 = Pin(
        owner_id = 2,
        
        title = "Lemon Blueberry Avocado Smoothie",
        description ="This lemon blueberry avocado smoothie is such a delicious, easy, and filling breakfast idea! Touches of lemon zest, vanilla, and cinnamon add so much incredible flavour, while avocado and yogurt make the texture super creamy. Recipe is gluten-free, naturally sweetened only with fruit, and can be made vegan if needed.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/c036ee7083f14a55afd634300eca6ccc.jpg"
)
    pin_17 = Pin(
        owner_id = 2,
        
        title = "Mango Pineapple Cucumber Smoothie",
        description ="This light, bright, and refreshing Cucumber Pineapple Mango Smoothie is the perfect no-cook breakfast to start your morning. It blends cucumber, with pineapple and mango chunks (fresh or frozen work well), spinach, plain Greek yogurt, and almond milk. Creamy and nourishing, with the perfect level of sweetness! Ready in 5 minutes.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/e4bb16b64c5648afbb64bfac91df2112.jpg"
)
    pin_18 = Pin(
        owner_id = 2,
        
        title = "Orange Creamsicle Smoothie",
        description ="This sweet and refreshing orange creamsicle smoothie is perfect for an easy breakfast or healthy snack! It's so flavorful, and totally delicious!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/3bd3f7659adc4cccb94f4261019de9d8.jpg"
)
    pin_19 = Pin (
        owner_id = 1,
        title = "Pineapple Pizza",
        description = "Pineapple pizza, also known as Hawaiian pizza, is a contentious combination of flavors that elicits strong opinions. It features a traditional pizza base topped with tomato sauce, cheese, and chunks of juicy pineapple, along with other optional ingredients like ham or bacon. Loved by some for its unique blend of sweet and savory tastes, while despised by others who argue that fruit has no place on a pizza, pineapple pizza continues to spark lively debates among pizza enthusiasts worldwide.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/33f04c45962d456aa11b805d0ddb30dd.jpg"
    )
    pin_20 = Pin (
        owner_id = 1,
        title = 'Homemade ramen',
        description = "Spice up your instant ramen with some eggs, veggies, and chicken. A little dash of sesame seeds can make a difference!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/72a3d961654d4740be4fdd7dd531cd85.jpg"
    )
    pin_21 = Pin (
        owner_id = 1,
        title = 'Vanilla Bean and Blueberry Waffles',
        description = "Perfect way to start the morning. A quick and easy breakfast idea.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/a4712fabfea740cc911194f697cabfdf.jpg"
    )
    pin_22 = Pin (
        owner_id = 2,
        title = 'Shrimp Avocado Salad (Low Carb)',
        description = 'This low-carb/keto Shrimp Avocado Salad is made with only a few simple ingredients with a zesty lime olive oil dressing that adds a burst of fresh flavor!',
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/b43fab6b5b7a4ccda612a27c4b373dfc.jpg"
    )
    pin_23 = Pin (
        owner_id = 2,
        title = 'Pan-Seared Steak with Garlic Butter',
        description = "This Pan-Seared Steak has a garlic butter that makes it taste like a steakhouse quality meal. You'll be impressed at how easy it is to make the perfect steak that's seared on the outside, and perfectly tender inside.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/ee191228b0d048968963071148c1440f.jpg"
    )
    pin_24 = Pin (
        owner_id =2,
        title = 'The Best Chicken Tinga Tacos',
        description = "To make these delicious meat tacos, shred 3 cups of cooked chicken and set aside. Slice 2 ripe avocados and finely chop 1/4 cup of fresh cilantro. Mince 2 cloves of garlic and cut a lime into wedges. In a small bowl, combine 1 teaspoon dried oregano, 1/2 cup red onion, 1 cup sweet onion, 3/4 cup canned fire-roasted tomatoes, 1/4 cup chicken stock, 1 chipotle pepper in adobo sauce, 1/2 teaspoon kosher salt, 1 tablespoon olive oil, and 1/2 teaspoon ground cumin to create a sauce. Warm 10 (6-inch) corn tortillas, then assemble the tacos by placing shredded chicken on each tortilla and topping with sliced/cubed avocados, minced garlic, and fresh cilantro. Drizzle the prepared sauce over the fillings and sprinkle with 1/4 cup crumbled cotija cheese. Serve with lime wedges. Enjoy!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/efcb3d3d33dd4b6faf25739406ee6ccd.jpg"
    )
    pin_25 = Pin (
        owner_id =2,
        title = 'Watermelon Smoothie',
        description = "Refreshing layered Watermelon Smoothie filled with healthy ingredients for the hot summer days",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/6f078fb43dad4a8e87718dfcfeed7fca.jpg"
    )
    pin_26 = Pin (
        owner_id =2,
        title = 'Blueberry Pineapple Smoothie',
        description = "Blueberry Pineapple Smoothie - A sweet and fresh healthy smoothie to grab when you think you may miss eating your daily serving of fresh fruits! Made with Greek yogurt, banana and almond milk…",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/ec6183bef35a4774b8d5980b5abdfc09.jpg"
    )
    pin_27 = Pin (
        owner_id =2,
        title = 'Immune Boosting Strawberry Orange Smoothie (Vegan, Protein Packed)',
        description = "This refreshing and light strawberry orange smoothie is full of immune boosting ingredients, protein packed, and entirely vegan for a creamy and delicious easy healthy breakfast!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/c89230d3ff5b4c58b78b04159f08e79d.jpg"
    )
    pin_28 = Pin (
        owner_id =2,
        title = 'Loaded Cobb Salad',
        description = "The Best Cobb Salad Recipe will never let you down! This salad is absolutely LOADED with treasure ingredients (you know, the ones you're always hunting for) like chicken, bacon, hard boiled eggs, and cheese.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/04dee79029a64ba898712eddc3ff86d8.jpg"
    )
    pin_29 = Pin (
        owner_id =2,
        title = 'Chicken Blueberry Feta Salad',
        description = "With grilled chicken, blueberries, feta and a balsamic vinaigrette over mixed greens, this Chicken Blueberry Feta Salad is a filling and nutritious salad. Perfect for hot summer days when you need something light, healthy and easy. I’m totally in love with all the flavors!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/758ad2fb7a92423a994d7939a355f0d1.jpg"
    )
    pin_30 = Pin (
        owner_id =2,
        title = 'Summer Fruit Caprese Salad',
        description = "Summer Fruit Caprese Salad is made with favorite summer fruit and berries. Add mozzarella, tomatoes, basil; drizzle with balsamic glaze!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/025e7e447b3a48dd974f0ad38ed40f2f.jpg"
    )
    pin_31 = Pin (
        owner_id =2,
        title = 'Peach Salad',
        description = "This simple and delicious Peach Salad is loaded with texture and flavor.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/d3951f36c72846728fcc6abf86d04395.jpg"
    )
    pin_32 = Pin (
        owner_id =2,
        title = 'Raspberry Lemonade',
        description = "This sweet raspberry lemonade is made from scratch and so refreshing! The delicious fresh raspberries make it the perfect summer treat!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/b902817ad9b04e1cad66ad71fb2c8fec.jpg"
    )
    pin_33 = Pin (
        owner_id =2,
        title = 'Peach Strawberry Lemonade',
        description = "Cool & refreshing Peach Strawberry Lemonade is simple to make & oh so delicious. Perfect for all your summer gatherings or when you just need a cool down in the backyard.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/e17b0bf6f2e94c4a828852f522e7a2e7.jpg"
    )
    pin_34 = Pin (
        owner_id =1,
        title = 'Japchae (Stir-fried Glass Noodles)',
        description = "Japchae is a classic Korean dish everyone loves! Find out how to make authentic, delicious japchae with this time tested recipe!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/6d34c80b6ed546b383552d87eadf1afb.jpg"
    )
    pin_35 = Pin (
        owner_id =1,
        title = 'Bibimbap!(Korean Rice Bowl)',
        description = "One of Korea's most famous food exports! The key here is the Bibimbap Sauce - feel free to switch the veg and meat, whatever you use is going to be amazing once mixed up with that Sauce. There's a lot of components here but there's repeat ingredients and it's an easy recipe - and it's MEANT to be served at room temp so don't rush!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/2eb43285e98d4672b02e60689ae07cd0.jpg"
    )
    pin_36 = Pin (
        owner_id =1,
        title = 'Vegetable Potstickers',
        description = "The potstickers are packed with a tofu and veggie filling! These vegetable dumplings are pan-fried to get that really nice golden brown crust before being cooked with a little water to steam and evenly cook the wrappers.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/040dc67da8a84221acad9dca56bc81b5.jpg"
    )
    pin_37 = Pin (
        owner_id =1,
        title = 'Chicken Spaghetti',
        description = "Chicken Spaghetti with Burrata Cheese, Cherry Tomatoes, Lemon Butter Garlic Sauce, and Pine Nuts.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/49650129c10c4fbba9fa14fe9d04c80b.jpg"
    )
    pin_38 = Pin (
        owner_id =1,
        title = 'Steak Korean Tacos with Asian Pear Mango Slaw',
        description = "These Korean Tacos are insanely delicious! Piled with juicy, caramelized Beef Bulgogi, topped with vibrant, refreshing Asian Pear Mango Slaw and drizzled with silky, cool Gochujang Crema.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/1cab7fd664be4556a9a631b5bfd5dbf6.jpg"
    )
    pin_39 = Pin (
        owner_id =1,
        title = 'Avocado Toast',
        description = "Craving for a fancy breakfast or brunch? Make avocado toast!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/f63c619c47d2450080d215cef5065704.jpg"
    )
    pin_40 = Pin (
        owner_id =1,
        title = 'Lemon Cheesecake Mousse',
        description = "Soft, light and delicious this lemon mousse is the ultimate spring summer dessert. Made with a graham cracker base and cheesecake topping.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/677c8b38b67d461ea71661fd06c19a03.jpg"
    )
    pin_41 = Pin (
        owner_id =1,
        title = 'Triple Matcha Mousse Cake',
        description = "Making mousse cake is pretty easy , you need a base , either a sponge cake or any store-bought biscuits , the mousse itself , which is made of whipped cream , milk , sugar , meringue or sabayon and gelatin . Fresh fruits or jelly are two popular toppings but who can resist matcha-infused white chocolate ganache ?",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/6f8c9ca065614b69bd8f415d5c909526.jpg"
    )
    pin_42 = Pin (
        owner_id =1,
        title = 'Coconut Pandan Cendol Cake',
        description = "Delicious coconut pandan cendol cake",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/a9fd53cd53084d4c80c40c8ff953d726.jpg"
    )
    pin_43 = Pin (
        owner_id =1,
        title = 'Blueberry Maqui Berry Chocolate Cake',
        description = "We can't stop raving about this Blueberry Maqui Berry Chocolate Cake with its radiant purples and exquisite chocolate flavor. This cake may be small but it packs a punch and these beautiful purples make it hard to resist in indulging in this marvelous cake! End that perfect dinner with the perfect dessert and your stomach will be so satisfied!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/d4c06e350b144a1dbbb8a7c7af4cb542.jpg"
    )
    pin_44 = Pin (
        owner_id =1,
        title = 'Strawberry Honey Custard Tarts with Lemon Curd',
        description = "A yogurt based custard sweetened with honey and fresh strawberries in a flaky, golden pie crust and then topped with a drizzle of homemade lemon curd.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/e2c8e2d1baa04a96af1ec9417827cea4.jpg"
    )
    pin_45 = Pin (
        owner_id =1,
        title = 'Italian Tiramisu',
        description = "This Classic Italian Tiramisu for a Crowd is always a hit! Made with a creamy mascarpone mixture, coffee soaked ladyfingers, and a dusting of dark cocoa powder, this is heaven in a baking dish!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/12ff61e76e794cfaa605f527b328cf25.jpg"
    )
    pin_46 = Pin (
        owner_id =2,
        title = 'Muffin Tin Granola Cups',
        description = "Enjoy your granola on-the-go with a quick-fix recipe for Muffin Tin Granola Cups loaded with your choice of yogurt and fresh fruit.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/b169fccd20ed4a5388fdef8cce507d6c.jpg"
    )
    pin_47 = Pin (
        owner_id =2,
        title = 'No Bake Cranberry Brie Bites',
        description = "Whether you are looking for last-minute appetizer recipes or quick and easy party food, we’ve got you covered with these no bake 10-minute cranberry brie bites!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/3aa6a79305064fc4a89a2f33bed06e58.jpg"
    )
    pin_48 = Pin (
        owner_id =2,
        title = 'Kimbap',
        description = "Kimbap (or gimbap) is the most popular on-the-go meal in Korea!",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/054be28b869c47168abda96df6e920ee.jpg"
    )
    pin_49 = Pin (
        owner_id =3,
        title = 'Ma Po Tofu',
        description = "Ma Po Tofu is a popular Chinese dish from Sichuan province, China. It consists of spicy sauce, tofu and minced meat.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/b13c1a10690e484e8b16ef4bb783ee10.jpg"
    )
    pin_50 = Pin (
        owner_id =3,
        title = 'Curry Roast Chicken',
        description = "Succulent Roasted Chicken cooked together in one pan with tender potatoes and vegetables in a creamy coconut curry sauce.",
        image_url = "https://capstone-pin.s3.us-west-1.amazonaws.com/d8cb4aac02db4feb81afc2bcdc9ebff7.jpg"
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

    db.session.commit()
    
def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))
        
    db.session.commit()
