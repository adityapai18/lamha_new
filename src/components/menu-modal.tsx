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
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors." },
      { name: "Tamatar Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting." },
      { name: "Lemon Corriender (Veg/Chicken)", description: "Zesty broth with fresh lemon and aromatic coriander." },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic." }
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried." },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala." },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices." },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch." }
    ]
  },
  {
    category: "Appetizers - Veg",
    items: [
      { name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", description: "Three distinct samosas: cheesy jalapeño, sweet onion, and classic spiced potato." },
      { name: "Palak Chaat", description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight." },
      { name: "Papdi Chaat", description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi." },
      { name: "Dahi Ke Kebab", description: "Melt-in-mouth hung yogurt kebabs, subtly spiced." },
      { name: "Sabudana Tikki Chat", description: "Crispy sago patties, crushed, topped with dahi and chutneys." },
      { name: "Makkai Bhel", description: "Sweet corn and puffed rice, tossed with tangy chutneys." },
      { name: "Paneer Momo", description: "Steamed/pan-fried dumplings with spiced paneer filling." },
      { name: "Chatpata Gobi", description: "Crispy cauliflower in a tangy, spicy, Indo-Chinese sauce." },
      { name: "Paneer Fingers", description: "Golden-fried paneer strips with a zesty dip." },
      { name: "Pani Puri - Serving Lamhaa way", description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch." },
      { name: "Paneer Chilly", description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce." },
      { name: "Pakora Platter", description: "Assorted seasonal veggie fritters. Crispy, flavorful." }
    ]
  },
  {
    category: "Appetizers - Non-Veg",
    items: [
      { name: "Chicken 65", description: "Fiery South Indian fried chicken, curry leaves, chili kick." },
      { name: "Chicken Momo", description: "Steamed/pan-fried dumplings with seasoned minced chicken." },
      { name: "Chilli Chicken", description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce." },
      { name: "Chicken Sukkha", description: "Coastal dry preparation. Chicken, roasted coconut, bold spices." },
      { name: "Prawns Koliwada", description: "Succulent, spicy fried prawns. A coastal favorite." },
      { name: "Goat Bhuna", description: "Tender goat, slow-cooked in thick, aromatic, rich gravy." },
      { name: "Amritsari Macchi", description: "Crispy fried fish, Amritsari spices, carom seeds. Punjabi favorite." },
      { name: "Crispy Egg Katori Chaat", description: "Edible katoris filled with spiced egg, potatoes, chutneys." }
    ]
  },
  {
    category: "Tandoor Se... - Veg",
    items: [
      { name: "Paneer Tikka", description: "Smoky, tender paneer marinated in yogurt and spices." },
      { name: "Malai Gobi Aloo", description: "Creamy cauliflower and potato, mildly spiced, tandoor-kissed." },
      { name: "Tandoori Pineapple", description: "Sweet pineapple, lightly spiced, charred in the tandoor." }
    ]
  },
  {
    category: "Tandoor Se... - Non-Veg",
    items: [
      { name: "Traditional Way - Chicken Tikka", description: "Classic tandoori chicken, yogurt & spice marinated." },
      { name: "Malai Kabab", description: "Creamy, melt-in-mouth chicken kebabs, mild spices." },
      { name: "Seekh Kabab", description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy." },
      { name: "Tandoori Tangdi", description: "Smoky, juicy chicken drumsticks from the tandoor." },
      { name: "Kesari Salmon Tikka", description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled." },
      { name: "Mutton Burrah Chaap (Lamb Chops)", description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked." }
    ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Chole Bhature", description: "Fluffy bhature with spicy, tangy chickpea curry. Hearty." },
      { name: "Poori Bhaji", description: "Puffy pooris with comforting, spiced potato curry." }
    ]
  },
  {
    category: "Entrees - Veg",
    items: [
      { name: "Daal Sultani (Daal Tadka)", description: "Rich yellow lentils, tempered with sizzling ghee and spices." },
      { name: "Daal Makhani", description: "Creamy black lentils, slow-cooked with butter and spices. Decadent." },
      { name: "Palak Paneer", description: "Fresh spinach puree with soft paneer cubes. Wholesome." },
      { name: "Paneer Makhanwala", description: "Creamy, rich paneer curry in a luscious tomato-butter gravy." },
      { name: "Paneer Volcano", description: "Explosive, fiery paneer preparation in a vibrant, bold sauce." },
      { name: "Paneer Tikka Masala", description: "Smoky paneer tikka in a rich, creamy tomato gravy." },
      { name: "Methi Mutter Malai", description: "Delicate, creamy fenugreek and green pea curry." },
      { name: "Malai Kofta", description: "Soft paneer dumplings in rich, creamy cashew gravy. Indulgent." },
      { name: "Makhana Masala", description: "Puffed lotus seeds in an aromatic, spiced gravy. Unique." },
      { name: "Bhagara Mirch Baingan", description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy." },
      { name: "Lamha Special Veg", description: "Chef's unique seasonal vegetable creation. Fresh and flavorful." }
    ]
  },
  {
    category: "Entrees - Non-Veg",
    items: [
      { name: "Butter Chicken", description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite." },
      { name: "Chicken Tikka Masala", description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy." },
      { name: "Mughlai Chicken Handi", description: "Rich, creamy Mughlai chicken with cashews and saffron." },
      { name: "Mango Fish Curry", description: "Flaky fish in tangy, sweet mango-coconut curry. Tropical." },
      { name: "Goan Shrimp Curry", description: "Succulent shrimp in vibrant, tangy Goan coconut curry." },
      { name: "Haleem", description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices." },
      { name: "Laal Maas", description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable." },
      { name: "Royal Almond Goat Curry", description: "Tender goat in a rich, creamy almond and saffron gravy. Regal." },
      { name: "Anda Ghotala", description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick." },
      { name: "Lamha Special Non-Veg", description: "Our chef's signature non-veg creation. Distinctive and delicious." }
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "Naan - Plain / Butter / Garlic / Bullet", description: "Fresh tandoor-baked naan. Classic to fiery." },
      { name: "Cheese Chilli Naan", description: "Cheesy, spicy naan from the tandoor. Comforting kick." },
      { name: "Bagel Naan", description: "Bagel texture, tandoor smoky flavor. Unique." },
      { name: "Aloo Paratha", description: "Whole wheat flatbread, spiced potato filling. Flaky." },
      { name: "Onion Kulcha", description: "Soft, leavened bread, savory spiced onion stuffing." },
      { name: "Lachha Paratha", description: "Multi-layered, flaky whole wheat paratha. Perfect texture." },
      { name: "Tandoori Roti / Phulka", description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed." }
    ]
  },
  {
    category: "Rice",
    items: [
      { name: "Rice - Plain / Jeera", description: "Steamed basmati. Classic plain or fragrant cumin-spiced." },
      { name: "Veg Dum Pulao", description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style." },
      { name: "Chicken Dum Biryani", description: "Layers of basmati and tender chicken, slow-cooked. Aromatic, rich." },
      { name: "Goat Dum Biryani", description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece." }
    ]
  },
  {
    category: "Raita",
    items: [
      { name: "Pineapple Raita", description: "Cool yogurt, sweet pineapple, hint of cumin. Refreshing." },
      { name: "Mix Veg Raita", description: "Fresh yogurt, diced mixed veggies, light cumin." },
      { name: "Sanatta Raita", description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice." }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Mango Lassi", description: "Creamy, sweet mango and yogurt blend. Indian classic." },
      { name: "Jigarthanda", description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream." },
      { name: "Smoked Chaas", description: "Our traditional buttermilk, infused with a unique smoky aroma." },
      { name: "Strawberry Watermelon Lemonade", description: "Zesty lemonade with fresh strawberry or watermelon." },
      { name: "Orange Pineapple", description: "Tropical blend of fresh orange and pineapple juices." },
      { name: "Dry Fruit Margarita", description: "Rich dry fruit mocktail, tangy margarita twist." },
      { name: "Death by Chocolate Shake", description: "Decadent, rich chocolate shake. Pure indulgence." }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Saffron Rasmalai", description: "Spongy cottage cheese in fragrant saffron milk. Delicate." },
      { name: "Orange Kulfi", description: "Homemade Indian ice cream, bright zesty orange flavor." },
      { name: "Angoori Jamun with Rabadi", description: "Mini jamuns in syrup, served with rich rabadi. Classic duo." },
      { name: "Khubani ka Meetha", description: "Sweet, tangy dried apricot dessert. Hyderabadi delight." },
      { name: "Gadbad Ice-cream", description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces." },
      { name: "Sizzling Brownie w/Vanilla Ice-cream", description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence." }
    ]
  }
]

const fullMenuHamilton = [
  {
    category: "Soup & Shorba",
    items: [
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors." },
      { name: "Tamatar Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting." },
      { name: "Lemon Corriender (Veg/Chicken)", description: "Zesty broth with fresh lemon and aromatic coriander." },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic." }
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried." },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala." },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices." },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch." }
    ]
  },
  {
    category: "Appetizers - Veg",
    items: [
      { name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", description: "Three distinct samosas: cheesy jalapeño, sweet onion, and classic spiced potato." },
      { name: "Palak Chaat", description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight." },
      { name: "Papdi Chaat", description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi." },
      { name: "Dahi Ke Kebab", description: "Melt-in-mouth hung yogurt kebabs, subtly spiced." },
      { name: "Sabudana Tikki Chat", description: "Crispy sago patties, crushed, topped with dahi and chutneys." },
      { name: "Makkai Bhel", description: "Sweet corn and puffed rice, tossed with tangy chutneys." },
      { name: "Paneer Momo", description: "Steamed/pan-fried dumplings with spiced paneer filling." },
      { name: "Chatpata Gobi", description: "Crispy cauliflower in a tangy, spicy, Indo-Chinese sauce." },
      { name: "Paneer Fingers", description: "Golden-fried paneer strips with a zesty dip." },
      { name: "Pani Puri - Serving Lamhaa way", description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch." },
      { name: "Paneer Chilly", description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce." },
      { name: "Pakora Platter", description: "Assorted seasonal veggie fritters. Crispy, flavorful." }
    ]
  },
  {
    category: "Appetizers - Non-Veg",
    items: [
      { name: "Chicken 65", description: "Fiery South Indian fried chicken, curry leaves, chili kick." },
      { name: "Chicken Momo", description: "Steamed/pan-fried dumplings with seasoned minced chicken." },
      { name: "Chilli Chicken", description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce." },
      { name: "Chicken Sukkha", description: "Coastal dry preparation. Chicken, roasted coconut, bold spices." },
      { name: "Prawns Koliwada", description: "Succulent, spicy fried prawns. A coastal favorite." },
      { name: "Goat Bhuna", description: "Tender goat, slow-cooked in thick, aromatic, rich gravy." },
      { name: "Amritsari Macchi", description: "Crispy fried fish, Amritsari spices, carom seeds. Punjabi favorite." },
      { name: "Crispy Egg Katori Chaat", description: "Edible katoris filled with spiced egg, potatoes, chutneys." }
    ]
  },
  {
    category: "Tandoor Se... - Veg",
    items: [
      { name: "Paneer Tikka", description: "Smoky, tender paneer marinated in yogurt and spices." },
      { name: "Malai Gobi Aloo", description: "Creamy cauliflower and potato, mildly spiced, tandoor-kissed." },
      { name: "Tandoori Pineapple", description: "Sweet pineapple, lightly spiced, charred in the tandoor." }
    ]
  },
  {
    category: "Tandoor Se... - Non-Veg",
    items: [
      { name: "Traditional Way - Chicken Tikka", description: "Classic tandoori chicken, yogurt & spice marinated." },
      { name: "Malai Kabab", description: "Creamy, melt-in-mouth chicken kebabs, mild spices." },
      { name: "Seekh Kabab", description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy." },
      { name: "Tandoori Tangdi", description: "Smoky, juicy chicken drumsticks from the tandoor." },
      { name: "Kesari Salmon Tikka", description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled." },
      { name: "Mutton Burrah Chaap (Lamb Chops)", description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked." }
    ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Chole Bhature", description: "Fluffy bhature with spicy, tangy chickpea curry. Hearty." },
      { name: "Poori Bhaji", description: "Puffy pooris with comforting, spiced potato curry." }
    ]
  },
  {
    category: "Entrees - Veg",
    items: [
      { name: "Daal Sultani (Daal Tadka)", description: "Rich yellow lentils, tempered with sizzling ghee and spices." },
      { name: "Daal Makhani", description: "Creamy black lentils, slow-cooked with butter and spices. Decadent." },
      { name: "Palak Paneer", description: "Fresh spinach puree with soft paneer cubes. Wholesome." },
      { name: "Paneer Makhanwala", description: "Creamy, rich paneer curry in a luscious tomato-butter gravy." },
      { name: "Paneer Volcano", description: "Explosive, fiery paneer preparation in a vibrant, bold sauce." },
      { name: "Paneer Tikka Masala", description: "Smoky paneer tikka in a rich, creamy tomato gravy." },
      { name: "Methi Mutter Malai", description: "Delicate, creamy fenugreek and green pea curry." },
      { name: "Malai Kofta", description: "Soft paneer dumplings in rich, creamy cashew gravy. Indulgent." },
      { name: "Makhana Masala", description: "Puffed lotus seeds in an aromatic, spiced gravy. Unique." },
      { name: "Bhagara Mirch Baingan", description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy." },
      { name: "Lamha Special Veg", description: "Chef's unique seasonal vegetable creation. Fresh and flavorful." }
    ]
  },
  {
    category: "Entrees - Non-Veg",
    items: [
      { name: "Butter Chicken", description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite." },
      { name: "Chicken Tikka Masala", description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy." },
      { name: "Mughlai Chicken Handi", description: "Rich, creamy Mughlai chicken with cashews and saffron." },
      { name: "Mango Fish Curry", description: "Flaky fish in tangy, sweet mango-coconut curry. Tropical." },
      { name: "Goan Shrimp Curry", description: "Succulent shrimp in vibrant, tangy Goan coconut curry." },
      { name: "Haleem", description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices." },
      { name: "Laal Maas", description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable." },
      { name: "Royal Almond Goat Curry", description: "Tender goat in a rich, creamy almond and saffron gravy. Regal." },
      { name: "Anda Ghotala", description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick." },
      { name: "Lamha Special Non-Veg", description: "Our chef's signature non-veg creation. Distinctive and delicious." }
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "Naan - Plain / Butter / Garlic / Bullet", description: "Fresh tandoor-baked naan. Classic to fiery." },
      { name: "Cheese Chilli Naan", description: "Cheesy, spicy naan from the tandoor. Comforting kick." },
      { name: "Bagel Naan", description: "Bagel texture, tandoor smoky flavor. Unique." },
      { name: "Aloo Paratha", description: "Whole wheat flatbread, spiced potato filling. Flaky." },
      { name: "Onion Kulcha", description: "Soft, leavened bread, savory spiced onion stuffing." },
      { name: "Lachha Paratha", description: "Multi-layered, flaky whole wheat paratha. Perfect texture." },
      { name: "Tandoori Roti / Phulka", description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed." }
    ]
  },
  {
    category: "Rice",
    items: [
      { name: "Rice - Plain / Jeera", description: "Steamed basmati. Classic plain or fragrant cumin-spiced." },
      { name: "Veg Dum Pulao", description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style." },
      { name: "Chicken Dum Biryani", description: "Layers of basmati and tender chicken, slow-cooked. Aromatic, rich." },
      { name: "Goat Dum Biryani", description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece." }
    ]
  },
  {
    category: "Raita",
    items: [
      { name: "Pineapple Raita", description: "Cool yogurt, sweet pineapple, hint of cumin. Refreshing." },
      { name: "Mix Veg Raita", description: "Fresh yogurt, diced mixed veggies, light cumin." },
      { name: "Sanatta Raita", description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice." }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Mango Lassi", description: "Creamy, sweet mango and yogurt blend. Indian classic." },
      { name: "Jigarthanda", description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream." },
      { name: "Smoked Chaas", description: "Our traditional buttermilk, infused with a unique smoky aroma." },
      { name: "Strawberry Watermelon Lemonade", description: "Zesty lemonade with fresh strawberry or watermelon." },
      { name: "Orange Pineapple", description: "Tropical blend of fresh orange and pineapple juices." },
      { name: "Dry Fruit Margarita", description: "Rich dry fruit mocktail, tangy margarita twist." },
      { name: "Death by Chocolate Shake", description: "Decadent, rich chocolate shake. Pure indulgence." }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Saffron Rasmalai", description: "Spongy cottage cheese in fragrant saffron milk. Delicate." },
      { name: "Orange Kulfi", description: "Homemade Indian ice cream, bright zesty orange flavor." },
      { name: "Angoori Jamun with Rabadi", description: "Mini jamuns in syrup, served with rich rabadi. Classic duo." },
      { name: "Khubani ka Meetha", description: "Sweet, tangy dried apricot dessert. Hyderabadi delight." },
      { name: "Gadbad Ice-cream", description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces." },
      { name: "Sizzling Brownie w/Vanilla Ice-cream", description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence." }
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
                        <h4 className="text-xl md:text-2xl font-semibold text-foreground border-b border-border pb-2 text-center">
                          {category.category}
                        </h4>
                        <div className="space-y-4 pt-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-start py-2">
                              <div className="flex-1">
                                <h5 className="font-semibold text-foreground">{item.name}</h5>
                                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
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