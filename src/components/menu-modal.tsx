"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const fullMenuBenselam = [
  {
    category: "Soup & Shorba",
    items: [
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", price: "$5.99/ $6.49" },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic.", price: "$6.99" },
      { name: "Tomato Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting.", price: "$5.99" },
      { name: "Lemon Coriander", description: "Zesty broth with fresh lemon and aromatic coriander.", price: "$5.99" },
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Green Salad", description: "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.", price: "$5.99" },
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried.", price: "$1.99" },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala.", price: "$3.99" },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices.", price: "$6.99" },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch.", price: "$7.99" }
    ]
  },
  {
    category: "Appetizers - Veg",
    items: [
      { name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", description: "Three distinct samosas: cheesy jalapeño, sweet onion, and classic spiced potato." , price: "$5.99"},
      { name: "Palak Chaat", description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight." , price: "$11.99"},
      { name: "Papdi Chaat", description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi." , price: "$9.99"},
      { name: "Dahi Ke Sholay", description: "Crispy- bread rolls filled with a creamy, spiced hung curd and vegetable stuffing." , price: "$9.99"},
      { name: "Panner Bao", description: "Pillowy bao buns stuffed with a tangy, chilli-tossed paneer filling" , price: "$9.99"},
      { name: "Makkai Bhel", description: "Sweet corn and desi Kurkure, tossed with tangy chutneys." , price: "$9.99"},
      { name: "Malai Momo", description: "Steamed/pan-fried dumplings with vegetable filling, tossed in butter garlic malai sauce" , price: "$9.99"},
      { name: "Chatpata Gobi", description: "Crispy cauliflower in a tangy, spicy, Indo-Chinese sauce." , price: "$12.99"},
      { name: "Paneer Fingers", description: "Golden-fried paneer strips with a zesty dip." , price: "$12.99"},
      { name: "Pani Puri - Serving Lamhaa way", description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch." , price: "$8.99"},
      { name: "Paneer Chilly", description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce." , price: "$12.99"},
      { name: "Pakora Platter", description: "Mumbai Style Onion and Potato Bhajji. Crispy, flavorful." , price: "$9.99"}
    ]
  },
  {
    category: "Appetizers - Non-Veg",
    items: [
      { name: "Chicken 65", description: "Fiery South Indian fried chicken, curry leaves, chili kick." , price: "$13.99"},
      { name: "Chicken Malai Momo", description: "Steamed/pan-fried dumplings with minced chicken filling, tossed in butter garlic malai sauce" , price: "$13.99"},
      { name: "Chilli Chicken", description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce." , price: "$13.99"},
      { name: "Chicken Bao", description: "Pillowy bao buns stuffed with a tangy, chilli-tossed chicken filling" , price: "$11.99"},
      { name: "Chicken Lollipop", description: "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce" , price: "$13.99"},
      { name: "Prawns Koliwada", description: "Succulent, spicy fried prawns. A coastal favorite." , price: "$14.99"},
      { name: "Goat Bhuna", description: "Tender goat, slow-cooked in thick, aromatic, rich gravy." , price: "$16.99"},
      { name: "Amritsari Macchi", description: "Crispy fried fish, Amritsari spices, carom seeds. Punjabi favorite." , price: "$16.99"},
      { name: "Crispy Egg Katori Chaat", description: "Edible katoris filled with spiced egg, potatoes, chutneys." , price: "$7.99"}
  ]
  },
  {
    category: "Tandoor Se - Veg",
    items: [
      { name: "Paneer Tikka", description: "Smoky, tender paneer marinated in yogurt and spices." , price: "$13.99"},
      { name: "Chaap Shakahari", description: "Creamy soya chaap, mildly spiced, grilled to perfection." , price: "$13.99"},
      { name: "Tandoori Mushroom", description: "Smoky, flavorful and tender mushrooms, tandoor-kissed." , price: "$13.99"},
      { name: "Tandoori Pineapple", description: "Sweet pineapple, lightly spiced, charred in the tandoor." , price: "$13.99"}
       ]
  },
  {
    category: "Tandoor Se - Non-Veg",
    items: [
      { name: "Traditional Way - Chicken Tikka", description: "Classic tandoori chicken, yogurt & spice marinated." , price: "$15.99"},
      { name: "Malai Kabab", description: "Creamy, melt-in-mouth chicken kebabs, mild spices." , price: "$15.99"},
      { name: "Seekh Kabab", description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy." , price: "$16.99"},
      { name: "Tandoori Tangdi", description: "Smoky, juicy chicken drumsticks from the tandoor." , price: "$16.99"},
      { name: "Kesari Salmon Tikka", description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled." , price: "$16.99"},
      { name: "Tandoori Pomfret", description: "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish" , price: "$16.99"},
      { name: "Mutton Burrah Chaap (Lamb Chops)", description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked." , price: "$21.99"}
      ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Chole Kulcha", description: "Crispy Kulcha with spicy, tangy chickpea curry." , price: "$13.99"},
      { name: "Poori Bhaji", description: "Puffy pooris with comforting, spiced potato curry." , price: "$12.99"}
    ]
  },
  {
    category: "Entrees - Veg",
    items: [
      { name: "Daal Tadka", description: "Rich yellow lentils, tempered with sizzling ghee and spices." , price: "$12.99"},
      { name: "Daal Makhani", description: "Creamy black lentils, slow-cooked with butter and spices. Decadent." , price: "$12.99"},
      { name: "Palak Paneer", description: "Fresh spinach puree with soft paneer cubes. Wholesome." , price: "$15.99"},
      { name: "Paneer Makhanwala", description: "Creamy, rich paneer curry in a luscious tomato-butter gravy." , price: "$15.99"},
      { name: "Paneer Volcano", description: "Explosive, fiery paneer preparation in a vibrant, bold sauce." , price: "$17.99"},
      { name: "Paneer Tikka Masala", description: "Smoky paneer tikka in a rich, creamy tomato gravy." , price: "$15.99"},
      { name: "Methi Mutter Malai", description: "Delicate, creamy fenugreek and green pea curry." , price: "$15.99"},
      { name: "Malai Kofta", description: "Soft paneer dumplings in rich, creamy cashew gravy. Indulgent." , price: "$15.99"},
      { name: "Makhana Masala", description: "Puffed lotus seeds in an aromatic, spiced gravy. Unique." , price: "$15.99"},
      { name: "Bhagara Mirch Baingan", description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy." , price: "$15.99"},
      { name: "Veg Kolhapuri", description: "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut" , price: "$15.99"},
      { name: "Lamhaa Special Veg", description: "Chef's unique seasonal vegetable, panner and fried cashew creation. Fresh and flavorful." , price: "$17.99"}
    ]
  },
  {
    category: "Entrees - Non-Veg",
    items: [
      { name: "Anda Ghotala", description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick." , price: "$15.99"},
      { name: "Butter Chicken", description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite." , price: "$15.99"},
      { name: "Chicken Tikka Masala", description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy." , price: "$15.99"},
      { name: "Mughlai Chicken Handi", description: "Rich, creamy Mughlai chicken with cashews and saffron." , price: "$15.99"},
      { name: "Manglorian Fish Curry", description: "Flaky fish in tangy, sweet mango-coconut curry. Tropical." , price: "$16.99"},
      { name: "Goan Shrimp Curry", description: "Succulent shrimp in vibrant, tangy Goan coconut curry." , price: "$18.99"},
      { name: "Haleem", description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices." , price: "$18.99"},
      { name: "Laal Maas", description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable." , price: "$18.99"},
      { name: "Lamhaa Special : Goat", description: "Our chef's signature goat creation in creamy almond and saffron gravy. Regal." , price: "$18.99"},
      { name: "Lamhaa Special: Chicken", description: "Our chef's signature chicken creation in intensely spice broth with hint of coconut." , price: "$18.99"}
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "Naan - Plain / Butter / Garlic / Bullet", description: "Fresh tandoor-baked naan. Classic to fiery." , price: "$4.49/ $4.99"},
      { name: "Cheese Chilli Naan", description: "Cheesy, spicy naan from the tandoor. Comforting kick." , price: "$5.99"},
      { name: "Bagel Naan", description: "Bagel texture, tandoor smoky flavor. Unique." , price: "$5.99"},
      { name: "Aloo Paratha", description: "Whole wheat flatbread, spiced potato filling. Flaky." , price: "$8.99"},
      { name: "Onion Kulcha", description: "Soft, leavened bread, savory spiced onion stuffing." , price: "$5.49"},
      { name: "Lachha Paratha", description: "Multi-layered, flaky whole wheat paratha. Perfect texture." , price: "$5.49"},
      { name: "Tandoori Roti / Phulka", description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed." , price: "$4.49/ $1.49"}
    ]
  },
  {
    category: "Rice & Noodles",
    items: [
      { name: "Rice - Plain / Jeera", description: "Steamed basmati. Classic plain or fragrant cumin-spiced.", price: "$4.99/ $6.99" },
      { name: "Curd Rice", description: "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering", price: "$9.99" },
      { name: "Veg Dum Pulao", description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.", price: "$14.99" },
      { name: "Chicken Dum Biryani", description: "Layers of basmati and tender chicken, slow-cooked.", price: "$16.99" },
      { name: "Goat Dum Biryani", description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.", price: "$17.99" },
      { name: "Fried Rice - Veg/ Egg / Chicken", description: "Hot and smoky rice, stir-fried with vibrant vegetables, fried egg or crispy chicken.", price: "$11.99/ $12.99" },
      { name: "Hakka Noodles - Veg / Chicken", description: "Fiery and flavorful noodles, stir-fried with crunchy vegetables, fried egg or crispy chicken", price: "$12.99/ $13.99" }
    ]
  },
  {
    category: "Raita",
    items: [
      { name: "Pineapple Raita", description: "Cool yogurt, sweet pineapple, hint of cumin." , price: "$5.99"},
      { name: "Mix Veg Raita", description: "Fresh yogurt, diced mixed veggies, light cumin." , price: "$5.99"},
      { name: "Sanatta Raita", description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice." , price: "$5.99"}
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Tea", description: "", price: "$2.99"},
      { name: "Coffee", description: "" , price: "$2.99"},
       ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Mango Lassi", description: "Creamy, sweet mango and yogurt blend. Indian classic." , price: "$4.99"},
      { name: "Jigarthanda", description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream." , price: "$6.99"},
      { name: "Smoked Chaas", description: "Our traditional buttermilk, infused with a unique smoky aroma." , price: "$4.99"},
      { name: "Strawberry Watermelon Lemonade", description: "Zesty lemonade with fresh strawberry or watermelon." , price: "$4.99"},
      { name: "Orange Pineapple", description: "Tropical blend of fresh orange and pineapple juices." , price: ""},
      { name: "Dry Fruit Margarita", description: "Rich dry fruit mocktail, tangy margarita twist." , price: ""},
      { name: "Death by Chocolate Shake", description: "Decadent, rich chocolate shake. Pure indulgence." , price: "$7.99"}
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Rasmalai Cake", description: "Moist cake with unmistakable taste of classic Rasmalai" , price: "$7.99"},
      { name: "Orange Kulfi", description: "Homemade Indian ice cream, bright zesty orange flavor." , price: "$6.99"},
      { name: "Angoori Jamun with Rabadi", description: "Mini jamuns in syrup, served with rich rabadi. Classic duo." , price: "$8.99"},
      { name: "Khubani ka Meetha", description: "Sweet, tangy dried apricot dessert. Hyderabadi delight." , price: "$8.99"},
      { name: "Gadbad Ice-cream", description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces." , price: "$7.99"},
      { name: "Sizzling Brownie w/Vanilla Ice-cream", description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence." , price: "$9.99"}
    ]
  }
]

const fullMenuHamilton = [
  {
    category: "Soup & Shorba",
    items: [
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", price: "$5.99/ $6.49" },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic.", price: "$6.99" },
      { name: "Tomato Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting.", price: "$5.99" },
      { name: "Lemon Coriander", description: "Zesty broth with fresh lemon and aromatic coriander.", price: "$5.99" },
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Green Salad", description: "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.", price: "$5.99" },
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried.", price: "$1.99" },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala.", price: "$3.99" },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices.", price: "$6.99" },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch.", price: "$7.99" }
    ]
  },
  {
    category: "Appetizers - Veg",
    items: [
      { name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", description: "Three distinct samosas: cheesy jalapeño, sweet onion, and classic spiced potato." , price: "$5.99"},
      { name: "Palak Chaat", description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight." , price: "$11.99"},
      { name: "Papdi Chaat", description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi." , price: "$9.99"},
      { name: "Dahi Ke Sholay", description: "Crispy- bread rolls filled with a creamy, spiced hung curd and vegetable stuffing." , price: "$9.99"},
      { name: "Panner Bao", description: "Pillowy bao buns stuffed with a tangy, chilli-tossed paneer filling" , price: "$9.99"},
      { name: "Makkai Bhel", description: "Sweet corn and desi Kurkure, tossed with tangy chutneys." , price: "$9.99"},
      { name: "Malai Momo", description: "Steamed/pan-fried dumplings with vegetable filling, tossed in butter garlic malai sauce" , price: "$9.99"},
      { name: "Chatpata Gobi", description: "Crispy cauliflower in a tangy, spicy, Indo-Chinese sauce." , price: "$12.99"},
      { name: "Paneer Fingers", description: "Golden-fried paneer strips with a zesty dip." , price: "$12.99"},
      { name: "Pani Puri - Serving Lamhaa way", description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch." , price: "$8.99"},
      { name: "Paneer Chilly", description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce." , price: "$12.99"},
      { name: "Pakora Platter", description: "Mumbai Style Onion and Potato Bhajji. Crispy, flavorful." , price: "$9.99"}
    ]
  },
  {
    category: "Appetizers - Non-Veg",
    items: [
      { name: "Chicken 65", description: "Fiery South Indian fried chicken, curry leaves, chili kick." , price: "$13.99"},
      { name: "Chicken Malai Momo", description: "Steamed/pan-fried dumplings with minced chicken filling, tossed in butter garlic malai sauce" , price: "$13.99"},
      { name: "Chilli Chicken", description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce." , price: "$13.99"},
      { name: "Chicken Bao", description: "Pillowy bao buns stuffed with a tangy, chilli-tossed chicken filling" , price: "$11.99"},
      { name: "Chicken Lollipop", description: "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce" , price: "$13.99"},
      { name: "Prawns Koliwada", description: "Succulent, spicy fried prawns. A coastal favorite." , price: "$14.99"},
      { name: "Goat Bhuna", description: "Tender goat, slow-cooked in thick, aromatic, rich gravy." , price: "$16.99"},
      { name: "Amritsari Macchi", description: "Crispy fried fish, Amritsari spices, carom seeds. Punjabi favorite." , price: "$16.99"},
      { name: "Crispy Egg Katori Chaat", description: "Edible katoris filled with spiced egg, potatoes, chutneys." , price: "$7.99"}
  ]
  },
  {
    category: "Tandoor Se - Veg",
    items: [
      { name: "Paneer Tikka", description: "Smoky, tender paneer marinated in yogurt and spices." , price: "$13.99"},
      { name: "Chaap Shakahari", description: "Creamy soya chaap, mildly spiced, grilled to perfection." , price: "$13.99"},
      { name: "Tandoori Mushroom", description: "Smoky, flavorful and tender mushrooms, tandoor-kissed." , price: "$13.99"},
      { name: "Tandoori Pineapple", description: "Sweet pineapple, lightly spiced, charred in the tandoor." , price: "$13.99"}
       ]
  },
  {
    category: "Tandoor Se - Non-Veg",
    items: [
      { name: "Traditional Way - Chicken Tikka", description: "Classic tandoori chicken, yogurt & spice marinated." , price: "$15.99"},
      { name: "Malai Kabab", description: "Creamy, melt-in-mouth chicken kebabs, mild spices." , price: "$15.99"},
      { name: "Seekh Kabab", description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy." , price: "$16.99"},
      { name: "Tandoori Tangdi", description: "Smoky, juicy chicken drumsticks from the tandoor." , price: "$16.99"},
      { name: "Kesari Salmon Tikka", description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled." , price: "$16.99"},
      { name: "Tandoori Pomfret", description: "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish" , price: "$16.99"},
      { name: "Mutton Burrah Chaap (Lamb Chops)", description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked." , price: "$21.99"}
      ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Chole Kulcha", description: "Crispy Kulcha with spicy, tangy chickpea curry." , price: "$13.99"},
      { name: "Poori Bhaji", description: "Puffy pooris with comforting, spiced potato curry." , price: "$12.99"}
    ]
  },
  {
    category: "Entrees - Veg",
    items: [
      { name: "Daal Tadka", description: "Rich yellow lentils, tempered with sizzling ghee and spices." , price: "$12.99"},
      { name: "Daal Makhani", description: "Creamy black lentils, slow-cooked with butter and spices. Decadent." , price: "$12.99"},
      { name: "Palak Paneer", description: "Fresh spinach puree with soft paneer cubes. Wholesome." , price: "$15.99"},
      { name: "Paneer Makhanwala", description: "Creamy, rich paneer curry in a luscious tomato-butter gravy." , price: "$15.99"},
      { name: "Paneer Volcano", description: "Explosive, fiery paneer preparation in a vibrant, bold sauce." , price: "$17.99"},
      { name: "Paneer Tikka Masala", description: "Smoky paneer tikka in a rich, creamy tomato gravy." , price: "$15.99"},
      { name: "Methi Mutter Malai", description: "Delicate, creamy fenugreek and green pea curry." , price: "$15.99"},
      { name: "Malai Kofta", description: "Soft paneer dumplings in rich, creamy cashew gravy. Indulgent." , price: "$15.99"},
      { name: "Makhana Masala", description: "Puffed lotus seeds in an aromatic, spiced gravy. Unique." , price: "$15.99"},
      { name: "Bhagara Mirch Baingan", description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy." , price: "$15.99"},
      { name: "Veg Kolhapuri", description: "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut" , price: "$15.99"},
      { name: "Lamhaa Special Veg", description: "Chef's unique seasonal vegetable, panner and fried cashew creation. Fresh and flavorful." , price: "$17.99"}
    ]
  },
  {
    category: "Entrees - Non-Veg",
    items: [
      { name: "Anda Ghotala", description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick." , price: "$15.99"},
      { name: "Butter Chicken", description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite." , price: "$15.99"},
      { name: "Chicken Tikka Masala", description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy." , price: "$15.99"},
      { name: "Mughlai Chicken Handi", description: "Rich, creamy Mughlai chicken with cashews and saffron." , price: "$15.99"},
      { name: "Manglorian Fish Curry", description: "Flaky fish in tangy, sweet mango-coconut curry. Tropical." , price: "$16.99"},
      { name: "Goan Shrimp Curry", description: "Succulent shrimp in vibrant, tangy Goan coconut curry." , price: "$18.99"},
      { name: "Haleem", description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices." , price: "$18.99"},
      { name: "Laal Maas", description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable." , price: "$18.99"},
      { name: "Lamhaa Special : Goat", description: "Our chef's signature goat creation in creamy almond and saffron gravy. Regal." , price: "$18.99"},
      { name: "Lamhaa Special: Chicken", description: "Our chef's signature chicken creation in intensely spice broth with hint of coconut." , price: "$18.99"}
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "Naan - Plain / Butter / Garlic / Bullet", description: "Fresh tandoor-baked naan. Classic to fiery." , price: "$4.49/ $4.99"},
      { name: "Cheese Chilli Naan", description: "Cheesy, spicy naan from the tandoor. Comforting kick." , price: "$5.99"},
      { name: "Bagel Naan", description: "Bagel texture, tandoor smoky flavor. Unique." , price: "$5.99"},
      { name: "Aloo Paratha", description: "Whole wheat flatbread, spiced potato filling. Flaky." , price: "$8.99"},
      { name: "Onion Kulcha", description: "Soft, leavened bread, savory spiced onion stuffing." , price: "$5.49"},
      { name: "Lachha Paratha", description: "Multi-layered, flaky whole wheat paratha. Perfect texture." , price: "$5.49"},
      { name: "Tandoori Roti / Phulka", description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed." , price: "$4.49/ $1.49"}
    ]
  },
  {
    category: "Rice & Noodles",
    items: [
      { name: "Rice - Plain / Jeera", description: "Steamed basmati. Classic plain or fragrant cumin-spiced.", price: "$4.99/ $6.99" },
      { name: "Curd Rice", description: "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering", price: "$9.99" },
      { name: "Veg Dum Pulao", description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.", price: "$14.99" },
      { name: "Chicken Dum Biryani", description: "Layers of basmati and tender chicken, slow-cooked.", price: "$16.99" },
      { name: "Goat Dum Biryani", description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.", price: "$17.99" },
      { name: "Fried Rice - Veg/ Egg / Chicken", description: "Hot and smoky rice, stir-fried with vibrant vegetables, fried egg or crispy chicken.", price: "$11.99/ $12.99" },
      { name: "Hakka Noodles - Veg / Chicken", description: "Fiery and flavorful noodles, stir-fried with crunchy vegetables, fried egg or crispy chicken", price: "$12.99/ $13.99" }
    ]
  },
  {
    category: "Raita",
    items: [
      { name: "Pineapple Raita", description: "Cool yogurt, sweet pineapple, hint of cumin." , price: "$5.99"},
      { name: "Mix Veg Raita", description: "Fresh yogurt, diced mixed veggies, light cumin." , price: "$5.99"},
      { name: "Sanatta Raita", description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice." , price: "$5.99"}
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Tea", description: "", price: "$2.99"},
      { name: "Coffee", description: "" , price: "$2.99"},
       ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Mango Lassi", description: "Creamy, sweet mango and yogurt blend. Indian classic." , price: "$4.99"},
      { name: "Jigarthanda", description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream." , price: "$6.99"},
      { name: "Smoked Chaas", description: "Our traditional buttermilk, infused with a unique smoky aroma." , price: "$4.99"},
      { name: "Strawberry Watermelon Lemonade", description: "Zesty lemonade with fresh strawberry or watermelon." , price: "$4.99"},
      { name: "Orange Pineapple", description: "Tropical blend of fresh orange and pineapple juices." , price: ""},
      { name: "Dry Fruit Margarita", description: "Rich dry fruit mocktail, tangy margarita twist." , price: ""},
      { name: "Death by Chocolate Shake", description: "Decadent, rich chocolate shake. Pure indulgence." , price: "$7.99"}
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Rasmalai Cake", description: "Moist cake with unmistakable taste of classic Rasmalai" , price: "$7.99"},
      { name: "Orange Kulfi", description: "Homemade Indian ice cream, bright zesty orange flavor." , price: "$6.99"},
      { name: "Angoori Jamun with Rabadi", description: "Mini jamuns in syrup, served with rich rabadi. Classic duo." , price: "$8.99"},
      { name: "Khubani ka Meetha", description: "Sweet, tangy dried apricot dessert. Hyderabadi delight." , price: "$8.99"},
      { name: "Gadbad Ice-cream", description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces." , price: "$7.99"},
      { name: "Sizzling Brownie w/Vanilla Ice-cream", description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence." , price: "$9.99"}
    ]
  }
]

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const getMenuForLocation = (location: string) => {
    return location === "Benselam" ? fullMenuBenselam : fullMenuHamilton
  }

  const handleClose = () => {
    onClose()
    setSelectedLocation(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-30 bg-background border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Full Menu
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Location Selection */}
        {!selectedLocation && (
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Select a Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => setSelectedLocation("Benselam")}
                className="h-20 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Benselam, Pennsylvania
              </Button>
              <Button
                onClick={() => setSelectedLocation("Hamilton")}
                className="h-20 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Hamilton, New Jersey
              </Button>
            </div>
          </div>
        )}

        {/* Full Menu Content */}
        {selectedLocation && (
          <div className="p-6 pt-0">
            {/* Location Header */}
            <div className="sticky top-[72px] z-20 bg-background border-b border-border flex justify-between items-center px-0 py-4" style={{ minHeight: '64px' }}>
              <h3 className="text-xl font-semibold text-foreground">
                {selectedLocation} Menu
              </h3>
              <Button
                variant="outline"
                onClick={() => setSelectedLocation(null)}
                className="text-sm"
              >
                Change Location
              </Button>
            </div>
            {/* Horizontal Carousel for Full Menu Modal */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {getMenuForLocation(selectedLocation).map((category, categoryIndex) => (
                    <CarouselItem key={categoryIndex} className="flex justify-center">
                      <div className="w-full max-w-2xl relative">
                        {/* Category Header */}
                        <h4 className="text-xl md:text-2xl font-semibold text-foreground border-b border-border pb-2 text-center mt-6 md:mt-8">
                          {category.category}
                        </h4>
                        <div className="space-y-4 pt-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-start py-2">
                              <div className="flex-1">
                                <h5 className="font-semibold text-foreground">{item.name}</h5>
                                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                              </div>
                              <div className="ml-4 text-right">
                                <span className="font-semibold text-foreground">{item.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Arrow buttons at the bottom center */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <CarouselPrevious className="static relative left-0 top-0 translate-y-0" />
                  <CarouselNext className="static relative left-0 top-0 translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuModal 
