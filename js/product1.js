let bulkDiscountRate = 0;
const BULK_DISCOUNT_THRESHOLD = 0;


const BULK_DISCOUNT_PRODUCTS = {
  '[C01] Doll Cake': {
    eligibleSizes: ['2 pounds', '3 pounds'],
    discountRate: 10,
    threshold: 2
  },
  '[C02] Doll Cake': {
    eligibleSizes: ['3 pounds'],
    discountRate: 12,
    threshold: 2
  },
  '[P05] FARMHOUSE PIZZA': {
    eligibleSizes: ['Extra Large - 9 inch'],
    discountRate: 5,
    threshold: 2
  }
  ,
  '[P06] EVERYTHING ON IT PIZZA': {
    eligibleSizes: ['Extra Large - 9 inch'],
    discountRate: 5,
    threshold: 2
  }
};

const products = [
  {
    name: '[C01] Doll Cake',
    desc: 'Make her birthday magical with this princess-style doll cake, perfect for celebrations!',
    sizes: [
      { label: '1 pound', price: 300 , discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C01.jpg',
    category: 'Cake'
  },
  {
    name: '[C02] Doll Cake',
    desc: 'Delight little ones with this elegant doll cake—beautiful outside, delicious inside!',
    sizes: [
      { label: '1 pound', price: 300, discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C02.jpg',
    category: 'Cake'
  },
  {
    name: '[C03] Doll Cake',
    desc: 'A stunning doll cake that’s as tasty as it is adorable—perfect for kids’ parties.',
    sizes: [
      { label: '1 pound', price: 300, discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C03.jpg',
    category: 'Cake'
  },
  {
    name: '[C04] Doll Cake',
    desc: 'Surprise your little angel with a fairytale-inspired doll cake!',
    sizes: [
      { label: '1 pound', price: 300, discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C04.jpg',
    category: 'Cake'
  },
  {
    name: '[C05] Doll Cake',
    desc: 'Sweeten birthdays with this charming and creamy doll-shaped cake.',
    sizes: [
      { label: '1 pound', price: 300, discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C05.jpg',
    category: 'Cake'
  },
  {
    name: '[C06] Doll Cake',
    desc: 'Treat your princess to this beautifully decorated doll cake—crafted with love.',
    sizes: [
      { label: '1 pound', price: 300, discount:20 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 850, discount:100 }
    ],
    img: 'img/cake/C06.jpg',
    category: 'Cake'
  },
  {
    name: '[C07] Photo Cake',
    desc: 'Customize your cake with a photo! Perfect for birthdays, anniversaries, and surprises.',
    sizes: [
      { label: '1 pound', price: 450, discount:50 },
      { label: '2 pounds', price: 680, discount:80 },
      { label: '3 pounds', price: 920, discount:120 }
    ],
    img: 'img/cake/C07.jpg',
    category: 'Cake'
  },
  {
    name: '[C08] Photo Cake',
    desc: 'Capture sweet memories on cake—add your favorite photo and let the flavors shine.',
    sizes: [
      { label: '1 pound', price: 450, discount:50 },
      { label: '2 pounds', price: 680, discount:80 },
      { label: '3 pounds', price: 920, discount:120 }
    ],
    img: 'img/cake/C08.jpg',
    category: 'Cake'
  },
  {
    name: '[C09] 3 Tier Chocolate Cake',
    desc: 'Celebrate big moments with this rich and stunning 3-tier chocolate masterpiece!',
    sizes: [
      { label: '3 pound', price: 780, discount:80 },
      { label: '4 pounds', price: 1040, discount:120 },
      { label: '5 pounds', price: 1250, discount:200 }
    ],
    img: 'img/cake/C09.jpg',
    category: 'Cake'
  },
  {
    name: '[C10] Butterscotch',
    desc: 'Classic butterscotch flavor layered with love—perfect for every sweet occasion.',
    sizes: [
      { label: '2 pound', price: 550, discount:50 },
      { label: '3 pounds', price: 750, discount:100 },
      { label: '5 pounds', price: 1200, discount:150 }
    ],
    img: 'img/cake/C10.jpg',
    category: 'Cake'
  },
  {
    name: '[C11] Doll Cake',
    desc: 'Celebrate with this adorable doll cake that’s sure to bring joy to any party!',
    sizes: [
      { label: '1 pound', price: 300, discount:10 },
      { label: '2 pounds', price: 580, discount:50 },
      { label: '3 pounds', price: 870, discount:100 }
    ],
    img: 'img/cake/C11.jpg',
    category: 'Cake'
  },
  {
    name: '[C12] 2 Tier Cake',
    desc: 'Elegant and rich—this 2-tier cake is ideal for weddings, engagements, and big events.',
    sizes: [
      { label: '3 pounds', price: 750, discount:50 },
      { label: '5 pounds', price: 1200, discount:150 }
    ],
    img: 'img/cake/C12.jpg',
    category: 'Cake'
  },
  {
    name: '[C13] Two tier Cake',
    desc: 'Make every celebration grand with this two-tier cake loaded with flavor and beauty.',
    sizes: [
      { label: '3 pounds', price: 750 , discount:50 },
      { label: '5 pounds', price: 1200, discount:150 }
    ],
    img: 'img/cake/C13.jpg',
    category: 'Cake'
  },
  {
    name: '[C14] Doraemon Cake',
    desc: 'Bring your child’s favorite cartoon to life with this fun-filled Doraemon cake!',
    sizes: [
      { label: '1 pound', price: 270, discount:20 },
      { label: '2 pounds', price: 520, discount:50 },
      { label: '3 pounds', price: 700, discount:80 }
    ],
    img: 'img/cake/C14.jpg',
    category: 'Cake'
  },
  {
    name: '[C15] Red Velvet',
    desc: 'Indulge in the luxurious taste of red velvet—soft, moist, and unforgettable.',
    sizes: [
      { label: '1 pound', price: 550, discount:50 },
      { label: '2 pounds', price: 1050, discount:100 },
      { label: '3 pounds', price: 1550, discount:200 }
    ],
    img: 'img/cake/C15.jpg',
    category: 'Cake'
  },
  {
    name: '[C16] Teddy Bear Cake',
    desc: 'Super cute teddy bear cake that melts hearts and satisfies sweet cravings.',
    sizes: [
      { label: '1 pound', price: 270, discount:20 },
      { label: '2 pounds', price: 520, discount:50 },
      { label: '3 pounds', price: 700, discount:100 }
    ],
    img: 'img/cake/C16.jpg',
    category: 'Cake'
  },
  {
    name: '[C17] ButterScotch',
    desc: 'Deliciously soft and creamy butterscotch cake for every mood and moment.',
    sizes: [
      { label: '1 pound', price: 250, discount:10 },
      { label: '2 pounds', price: 480, discount:30 },
      { label: '3 pounds', price: 720, discount:70 }
    ],
    img: 'img/cake/C17.jpg',
    category: 'Cake'
  },
  {
    name: '[C18] ButterScotch',
    desc: 'A delightful blend of caramel and vanilla—this butterscotch cake is a crowd favorite.',
    sizes: [
      { label: '1 pound', price: 250, discount:10 },
      { label: '2 pounds', price: 480, discount:30 },
      { label: '3 pounds', price: 720, discount:70 }
    ],
    img: 'img/cake/C18.jpg',
    category: 'Cake'
  },
  {
    name: '[C19] ButterScotch',
    desc: 'Fluffy, moist and irresistibly sweet—your perfect butterscotch indulgence.',
    sizes: [
      { label: '1 pound', price: 260, discount:20 },
      { label: '2 pounds', price: 500, discount:50 },
      { label: '3 pounds', price: 750, discount:80 }
    ],
    img: 'img/cake/C19.jpg',
    category: 'Cake'
  },
  {
    name: '[C20] ButterScotch',
    desc: 'Golden butterscotch layers that promise to melt in your mouth—order now!',
    sizes: [
      { label: '1 pound', price: 250, discount:10 },
      { label: '2 pounds', price: 480, discount:30 },
      { label: '3 pounds', price: 720, discount:80 }
    ],
    img: 'img/cake/C20.jpg',
    category: 'Cake'
  },
  {
    name: '[C21] ButterScotch',
    desc: 'Classic butterscotch delight topped with crunchy caramel and smooth cream.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 40 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C21.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C22] Pine Apple',
    desc: 'Tropical pineapple flavor with a juicy twist and creamy layers.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C22.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C23] Pine Apple',
    desc: 'A refreshing choice with real pineapple essence and soft sponge.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C23.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C24] Pine Apple',
    desc: 'Delicious pineapple cake perfect for light celebrations and summer vibes.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C24.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C25] Pine Apple',
    desc: 'Fluffy pineapple cake layered with cream and fruity richness.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C25.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C26] Pine Apple',
    desc: 'Soft, tangy pineapple sponge cake with melt-in-mouth goodness.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C26.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C27] Blue Berry',
    desc: 'Indulgent blueberry cake with real berry compote and silky cream.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C27.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C28] Blue Berry',
    desc: 'Juicy blueberry explosion with smooth frosting and rich base.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C28.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C29] Blue Berry',
    desc: 'Velvety cream and blueberry bursts in every bite of this moist cake.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C29.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C30] Rasmalai Cake',
    desc: 'Fusion of traditional rasmalai and soft cake layers – a creamy desi treat.',
    sizes: [
      { label: '1 pound', price: 300, discount: 20 },
      { label: '2 pounds', price: 580, discount: 50 },
      { label: '3 pounds', price: 850, discount: 80 }
    ],
    img: 'img/cake/C30.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C31] Rasmalai Cake',
    desc: 'Perfect blend of cardamom-flavored cream and rasmalai pieces.',
    sizes: [
      { label: '1 pound', price: 300, discount: 20 },
      { label: '2 pounds', price: 580, discount: 50 },
      { label: '3 pounds', price: 850, discount: 80 }
    ],
    img: 'img/cake/C31.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C32] Rasmalai Cake',
    desc: 'A festive rasmalai dessert cake that melts in your mouth.',
    sizes: [
      { label: '1 pound', price: 350, discount: 30 },
      { label: '2 pounds', price: 660, discount: 50 },
      { label: '3 pounds', price: 950, discount: 100 }
    ],
    img: 'img/cake/C32.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C33] Rasmalai Cake',
    desc: 'Loaded with rasmalai syrup and saffron cream, it’s irresistible.',
    sizes: [
      { label: '1 pound', price: 260, discount: 10 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C33.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C34] Black Forest',
    desc: 'A classic favorite with chocolate sponge, cherries, and whipped cream.',
    sizes: [
      { label: '1 pound', price: 260, discount: 20 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 740, discount: 70 }
    ],
    img: 'img/cake/C34.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C35] Black Forest',
    desc: 'Decadent layers of dark cocoa and cherry filling in every bite.',
    sizes: [
      { label: '1 pound', price: 260, discount: 10 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 740, discount: 60 }
    ],
    img: 'img/cake/C35.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C36] Dark Chocolate',
    desc: 'Intense dark chocolate layers with a rich, fudgy finish.',
    sizes: [
      { label: '1 pound', price: 280, discount: 20 },
      { label: '2 pounds', price: 550, discount: 50 },
      { label: '3 pounds', price: 820, discount: 80 }
    ],
    img: 'img/cake/C34.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C37] Black Forest',
    desc: 'Creamy, chocolatey indulgence with a hint of cherry liqueur.',
    sizes: [
      { label: '1 pound', price: 260, discount: 20 },
      { label: '2 pounds', price: 500, discount: 40 },
      { label: '3 pounds', price: 740, discount: 70 }
    ],
    img: 'img/cake/C37.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C38] Dark Chocolate',
    desc: 'Perfect for choco-lovers – smooth, bold and rich in flavor.',
    sizes: [
      { label: '1 pound', price: 260, discount: 10 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 740, discount: 60 }
    ],
    img: 'img/cake/C38.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C39] 2 Tier Dark Chocolate',
    desc: 'Layered chocolate bliss in a grand two-tier celebration design.',
    sizes: [
      { label: '2 pounds', price: 580, discount: 50 },
      { label: '3 pounds', price: 850, discount: 100 }
    ],
    img: 'img/cake/C39.jpg',
    category: 'Cake'
  },
  
  {
    name: '[C40] Dark Chocolate',
    desc: 'Rich, moist chocolate cake topped with smooth ganache frosting.',
    sizes: [
      { label: '1 pound', price: 300, discount: 20 },
      { label: '2 pounds', price: 580, discount: 50 },
      { label: '3 pounds', price: 850, discount: 100 }
    ],
    img: 'img/cake/C40.jpg',
    category: 'Cake'
  },
  {
    name: '[C41] Chocolate Cake',
    desc: 'Classic rich chocolate flavor with soft sponge layers, perfect for all chocolate lovers.',
    sizes: [
      { label: '1 pound', price: 280, discount: 20 },
      { label: '2 pounds', price: 550, discount: 50 },
      { label: '3 pounds', price: 820, discount: 100 }
    ],
    img: 'img/cake/C41.jpg',
    category: 'Cake'
  },
  {
    name: '[C42] Chocolate Cake',
    desc: 'Deliciously moist and creamy chocolate cake with a silky finish. Best for birthdays!',
    sizes: [
      { label: '1 pound', price: 280, discount: 20 },
      { label: '2 pounds', price: 550, discount: 50 },
      { label: '3 pounds', price: 850, discount: 100 }
    ],
    img: 'img/cake/C42.jpg',
    category: 'Cake'
  },
  {
    name: '[C43] Pine Apple',
    desc: 'A tropical delight with juicy pineapple chunks and fluffy cream – light and refreshing.',
    sizes: [
      { label: '1 pound', price: 250, discount: 10 },
      { label: '2 pounds', price: 480, discount: 30 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C43.jpg',
    category: 'Cake'
  },
  {
    name: '[C44] Chocolate Cake',
    desc: 'Soft, rich and indulgent chocolate cake made for your sweet moments.',
    sizes: [
      { label: '1 pound', price: 260, discount: 10 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 740, discount: 70 }
    ],
    img: 'img/cake/C44.jpg',
    category: 'Cake'
  },
  {
    name: '[C45] Chocolate Cake',
    desc: 'A melt-in-mouth chocolate dream topped with choco chips – perfect for all ages.',
    sizes: [
      { label: '1 pound', price: 260, discount: 10 },
      { label: '2 pounds', price: 500, discount: 30 },
      { label: '3 pounds', price: 740, discount: 70 }
    ],
    img: 'img/cake/C45.jpg',
    category: 'Cake'
  },
  {
    name: '[C46] Pine Apple',
    desc: 'A fresh burst of pineapple with creamy layers – a fruity twist to your celebrations.',
    sizes: [
      { label: '1 pound', price: 250, discount: 20 },
      { label: '2 pounds', price: 480, discount: 50 },
      { label: '3 pounds', price: 720, discount: 70 }
    ],
    img: 'img/cake/C46.jpg',
    category: 'Cake'
  },
  
  // PIZZA
  {
    name: '[P01] MARGARITA PIZZA',
    desc: 'Classic cheesy goodness on a thin crust – simplicity at its best.',
    sizes: [
      { label: 'Small - 6 inch', price: 60, discount: 0 },
      { label: 'Medium - 7 inch', price: 90 },
      { label: 'Large - 8 inch', price: 130, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 180, discount: 0 }
    ],
    img: 'img/pizza/P01.jpg',
    category: 'Pizza'
  },
  {
    name: '[P02] SIMPLY VEG PIZZA',
    desc: 'Topped with fresh onion, capsicum, tomato, and lots of cheese – simple yet tasty.',
    sizes: [
      { label: 'Small - 6 inch', price: 80, discount: 0 },
      { label: 'Medium - 7 inch', price: 110 },
      { label: 'Large - 8 inch', price: 150, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 200, discount: 0 }
    ],
    img: 'img/pizza/P02.jpg',
    category: 'Pizza'
  },
  {
    name: '[P03] GOLDEN CORN PIZZA',
    desc: 'Sweet corn over a bed of gooey cheese and tangy sauce – perfect for corn lovers.',
    sizes: [
      { label: 'Small - 6 inch', price: 80, discount: 0 },
      { label: 'Medium - 7 inch', price: 110 },
      { label: 'Large - 8 inch', price: 150, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 200, discount: 0 }
    ],
    img: 'img/pizza/P03.jpg',
    category: 'Pizza'
  },
  {
    name: '[P04] VEGGIE DELIGHT PIZZA',
    desc: 'Colorful and crunchy mix of onion, tomato, corn, and cheese on every bite.',
    sizes: [
      { label: 'Small - 6 inch', price: 90, discount: 0 },
      { label: 'Medium - 7 inch', price: 120 },
      { label: 'Large - 8 inch', price: 160, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 220, discount: 0 }
    ],
    img: 'img/pizza/P04.jpg',
    category: 'Pizza'
  },
  {
    name: '[P05] FARMHOUSE PIZZA',
    desc: 'Loaded with paneer or mushroom, onion, capsicum, and cheese – full farmhouse flavor.',
    sizes: [
      { label: 'Small - 6 inch', price: 100, discount: 0 },
      { label: 'Medium - 7 inch', price: 140 },
      { label: 'Large - 8 inch', price: 190, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 250, discount: 0 }
    ],
    img: 'img/pizza/P05.jpg',
    category: 'Pizza'
  },
  {
    name: '[P06] EVERYTHING ON IT PIZZA',
    desc: 'The ultimate pizza with all toppings – onion, capsicum, corn, paneer, mushroom, olive & cheese.',
    sizes: [
      { label: 'Small - 6 inch', price: 120, discount: 0 },
      { label: 'Medium - 7 inch', price: 160 },
      { label: 'Large - 8 inch', price: 220, discount: 0 },
      { label: 'Extra Large - 9 inch', price: 280, discount: 0 }
    ],
    img: 'img/pizza/P06.jpg',
    category: 'Pizza'
  },
  
  // BURGER
  {
    name: '[B01] SIMPLE VEG BURGER',
    desc: 'Crispy aloo patty with fresh veggies and creamy mayo – a true street-style delight.',
    price: 20,
    img: 'img/burger/B01.jpg',
    category: 'Burger'
  },
  {
    name: '[B02] CHEESE PANEER BURGER',
    desc: 'Chunky paneer tikki with melted cheese – juicy, tasty, and fulfilling.',
    price: 30,
    img: 'img/burger/B02.jpg',
    category: 'Burger'
  },
  
  // SANDWICH
  {
    name: '[S01] VEG SANDWICH',
    desc: 'Fresh and crunchy veggies layered between buttered bread slices – simple and tasty.',
    price: 20,
    img: 'img/sandwich/S01.jpg',
    category: 'Sandwich'
  },
  {
    name: '[S02] VEG GRILLED SANDWICH',
    desc: 'Toasted sandwich with veggies, cheese, and spices – hot, crispy, and flavorful.',
    price: 25,
    img: 'img/sandwich/S02.jpg',
    category: 'Sandwich'
  },
  {
    name: '[D01] Coco Cola',
    desc: 'Classic Coca-Cola taste to refresh your mood. Available in 750ml and 2L.',
    sizes: [
      { label: '750 ml', price: 40, discount:0 },
      { label: '2000 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D01.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D02] Coco Cola Can',
    desc: 'Chilled 300ml Coca-Cola can – perfect for on-the-go refreshment!',
    price: 40,
    img: 'img/beverage/D02.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D03] Sprite',
    desc: 'Lemon-lime flavored Sprite – fizzy and refreshing. Multiple sizes available.',
    sizes: [
      { label: '250 ml', price: 20, discount:0 },
      { label: '750 ml', price: 40, discount:0 },
      { label: '1000 ml', price: 50 },
      { label: '2000 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D03.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D04] Sprite Can',
    desc: '300ml fizzy Sprite – zesty lemon freshness in a can!',
    price: 40,
    img: 'img/beverage/D04.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D05] Pepsi',
    desc: 'Bold Pepsi flavor to quench your thirst. Available in 750ml and 2.25L.',
    sizes: [
      { label: '750 ml', price: 40, discount:0 },
      { label: '2250 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D05.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D06] Thums Up',
    desc: 'Strong cola punch with Thums Up. Ideal for spicy snacks.',
    sizes: [
      { label: '250 ml', price: 20, discount:0 },
      { label: '750 ml', price: 40, discount:0 },
      { label: '1000 ml', price: 50, discount:0 },
      { label: '2000 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D06.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D07] Dev',
    desc: 'Chilled local favorite drink to cool you instantly.',
    sizes: [
      { label: '250 ml', price: 20, discount:0 },
      { label: '750 ml', price: 40, discount:0 },
      { label: '2250 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D07.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D08] Mazza',
    desc: 'Mango drink with rich pulp – enjoy the taste of real mango.',
    sizes: [
      { label: '600 ml', price: 40, discount:0 },
      { label: '1000 ml', price: 60, discount:0 },
      { label: '1750 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D08.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D09] Frooti',
    desc: 'India’s beloved mango drink – Frooti, always fresh & fruity!',
    sizes: [
      { label: '750 ml', price: 40, discount:0 },
      { label: '1250 ml', price: 75, discount:0 }
    ],
    img: 'img/beverage/D09.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D10] Slice',
    desc: 'Thick and juicy mango Slice to satisfy your fruit cravings.',
    sizes: [
      { label: '1250 ml', price: 75, discount:0 },
      { label: '1750 ml', price: 99, discount:0 }
    ],
    img: 'img/beverage/D10.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D11] Mazza',
    desc: 'Small-sized Mazza (₹10) for a quick mango treat.',
    price: 10,
    img: 'img/beverage/D11.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D12] Frooti',
    desc: 'Pocket-size Frooti for instant mango joy – just ₹10.',
    price: 10,
    img: 'img/beverage/D12.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D13] Red Bull',
    desc: 'Premium energy drink (250ml) – gives you wings!',
    price: 125,
    img: 'img/beverage/D13.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D14] Britannia Cow Milk',
    desc: '180ml Vanilla flavored nourishing milk – tasty and healthy.',
    price: 40,
    img: 'img/beverage/D14.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D15] Britannia Cow Milk',
    desc: '180ml Chocolate flavored milk – rich and satisfying treat.',
    price: 40,
    img: 'img/beverage/D15.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D16] Britannia Cow Milk',
    desc: '180ml Strawberry milk – a sweet delight kids love!',
    price: 40,
    img: 'img/beverage/D16.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D17] Britannia Lassi',
    desc: 'Classic chilled lassi (180ml) – smooth and refreshing.',
    price: 20,
    img: 'img/beverage/D17.jpg',
    category: 'Beverage'
  },
  
  {
    name: '[D17] Sting',
    desc: 'Energy drink (250ml) packed with bold flavor and power.',
    price: 20,
    img: 'img/beverage/D18.jpg',
    category: 'Beverage'
  }
    
  
];

  