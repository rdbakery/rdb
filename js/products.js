let bulkDiscountRate = 0;
const BULK_DISCOUNT_THRESHOLD = 0;


const BULK_DISCOUNT_PRODUCTS = {
  '[C01] Doll Cake': {
    eligibleSizes: ['2 pounds', '3 pounds'],
    discountRate: 10,
    threshold: 4
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
      desc: '',
      sizes: [
        { label: '1 pound', price: 300 , discount:20},
        { label: '2 pounds', price: 580, discount:50 },
        { label: '3 pounds', price: 850, discount:100 }
      ],
      img: 'img/cake/C01.jpg',
      category: 'Cake'
    },
  
    {
      name: '[C02] Doll Cake',
      desc: '',
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
      desc: '',
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
      desc: '',
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
      desc: '',
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
      desc: '',
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
      desc: '',
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
      desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
        sizes: [
          { label: '3 pounds', price: 750, discount:50 },
          { label: '5 pounds', price: 1200, discount:150 }
        ],
        img: 'img/cake/C12.jpg',
        category: 'Cake'
      },


      {
        name: '[C13] Two tier Cake',
        desc: '',
        sizes: [
          { label: '3 pounds', price: 750 , discount:50 },
          { label: '5 pounds', price: 1200, discount:150 }
        ],
        img: 'img/cake/C13.jpg',
        category: 'Cake'
      },


      {
        name: '[C14] Doraemon Cake',
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:40 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C21.jpg',
        category: 'Cake'
      },


      {
        name: '[C22] Pine Apple',
        desc: '',
        sizes: [
            { label: '1 pound', price: 250, discount:10 },
            { label: '2 pounds', price: 480, discount:30 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C22.jpg',
        category: 'Cake'
      },

      {
        name: '[C23] Pine Apple',
        desc: '',
        sizes: [
            { label: '1 pound', price: 250, discount:10 },
            { label: '2 pounds', price: 480, discount:30 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C23.jpg',
        category: 'Cake'
      },

      {
        name: '[C24] Pine Apple',
        desc: '',
        sizes: [
            { label: '1 pound', price: 250, discount:10 },
            { label: '2 pounds', price: 480, discount:30 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C24.jpg',
        category: 'Cake'
      },

      {
        name: '[C25] Pine Apple',
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:30 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C25.jpg',
        category: 'Cake'
      },

      {
        name: '[C26] Pine Apple',
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:30 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C26.jpg',
        category: 'Cake'
      },

      {
        name: '[C27] Bule Berry',
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:30 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C27.jpg',
        category: 'Cake'
      },

      {
        name: '[C28] Bule Berry',
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:30 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C28.jpg',
        category: 'Cake'
      },


      {
        name: '[C29] Bule Berry',
        desc: '',
        sizes: [
          { label: '1 pound', price: 250, discount:10 },
          { label: '2 pounds', price: 480, discount:30 },
          { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C29.jpg',
        category: 'Cake'
      },

      {
        name: '[C30] Rasmalai Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 300, discount:20 },
            { label: '2 pounds', price: 580, discount:50 },
            { label: '3 pounds', price: 850, discount:80 }
        ],
        img: 'img/cake/C30.jpg',
        category: 'Cake'
      },

      {
        name: '[C31] Rasmalai Cake',
        desc: '',
        sizes: [
          { label: '1 pound', price: 300, discount:20 },
          { label: '2 pounds', price: 580, discount:50 },
          { label: '3 pounds', price: 850, discount:80 }
        ],
        img: 'img/cake/C31.jpg',
        category: 'Cake'
      },

      {
        name: '[C32] Rasmalai Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 350, discount:30 },
            { label: '2 pounds', price: 660, discount:50 },
            { label: '3 pounds', price: 950, discount:100 }
        ],
        img: 'img/cake/C32.jpg',
        category: 'Cake'
      },

      {
        name: '[C33] Rasmalai Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:10 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C33.jpg',
        category: 'Cake'
      },

      {
        name: '[C34] Black Forest',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:20 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 740, discount:70 }
        ],
        img: 'img/cake/C34.jpg',
        category: 'Cake'
      },

      {
        name: '[C35] Black Forest',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:10 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 740, discount:60 }
        ],
        img: 'img/cake/C35.jpg',
        category: 'Cake'
      },


      {
        name: '[C36] Dark Chocolate',
        desc: '',
        sizes: [
            { label: '1 pound', price: 280, discount:20 },
            { label: '2 pounds', price: 550, discount:50 },
            { label: '3 pounds', price: 820, discount:80 }
        ],
        img: 'img/cake/C34.jpg',
        category: 'Cake'
      },


      {
        name: '[C37] Black Forest',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:20 },
            { label: '2 pounds', price: 500, discount:40 },
            { label: '3 pounds', price: 740, discount:70 }
        ],
        img: 'img/cake/C37.jpg',
        category: 'Cake'
      },

      {
        name: '[C38] Dark Chocolate',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:10 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 740, discount:60 }
        ],
        img: 'img/cake/C38.jpg',
        category: 'Cake'
      },


      {
        name: '[C39] 2 Tier Dark Choclate',
        desc: '',
        sizes: [
            { label: '2 pounds', price: 580, discount:50 },
            { label: '3 pounds', price: 850, discount:100 },
        ],
        img: 'img/cake/C39.jpg',
        category: 'Cake'
      },


      {
        name: '[C40] Dark Chocolate',
        desc: '',
        sizes: [
            { label: '1 pound', price: 300, discount:20 },
            { label: '2 pounds', price: 580, discount:50 },
            { label: '3 pounds', price: 850, discount:100 }
        ],
        img: 'img/cake/C40.jpg',
        category: 'Cake'
      },


      {
        name: '[C41] Chocolate Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 280, discount:20 },
            { label: '2 pounds', price: 550, discount:50 },
            { label: '3 pounds', price: 820, discount:100 }
        ],
        img: 'img/cake/C41.jpg',
        category: 'Cake'
      },

      {
        name: '[C42] Chocolate Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 280, discount:20 },
            { label: '2 pounds', price: 550, discount:50 },
            { label: '3 pounds', price: 850, discount:100 }
        ],
        img: 'img/cake/C42.jpg',
        category: 'Cake'
      },


      {
        name: '[C43] Pine Apple',
        desc: '',
        sizes: [
            { label: '1 pound', price: 250, discount:10 },
            { label: '2 pounds', price: 480, discount:30 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C43.jpg',
        category: 'Cake'
      },


      {
        name: '[C44] Chocolate Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:10 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 740, discount:70 }
        ],
        img: 'img/cake/C44.jpg',
        category: 'Cake'
      },


      {
        name: '[C45] Chocolate Cake',
        desc: '',
        sizes: [
            { label: '1 pound', price: 260, discount:10 },
            { label: '2 pounds', price: 500, discount:30 },
            { label: '3 pounds', price: 740, discount:70 }
        ],
        img: 'img/cake/C45.jpg',
        category: 'Cake'
      },


      {
        name: '[C46] Pine Apple',
        desc: '',
        sizes: [
            { label: '1 pound', price: 250, discount:20 },
            { label: '2 pounds', price: 480, discount:50 },
            { label: '3 pounds', price: 720, discount:70 }
        ],
        img: 'img/cake/C46.jpg',
        category: 'Cake'
      },


      // PIZZA
      {
        name: '[P01] MARGARITA PIZZA',
        desc: 'Plain Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 60, discount:0 },
            { label: 'Medium - 7 inch', price: 90 },
            { label: 'Large - 8 inch', price: 130, discount:0 },
            { label: 'Extra Large - 9 inch', price: 180, discount:0 }
        ],
        img: 'img/pizza/P01.jpg',
        category: 'Pizza'
      },

      {
        name: '[P02] SIMPLY VEG PIZZA',
        desc: 'Onion, Capsicum/Tomato, Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 80, discount:0 },
            { label: 'Medium - 7 inch', price: 110 },
            { label: 'Large - 8 inch', price: 150, discount:0 },
            { label: 'Extra Large - 9 inch', price: 200, discount:0 }
        ],
        img: 'img/pizza/P02.jpg',
        category: 'Pizza'
      },

      {
        name: '[P03] GOLDEN CORN PIZZA',
        desc: 'Corn, Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 80, discount:0 },
            { label: 'Medium - 7 inch', price: 110 },
            { label: 'Large - 8 inch', price: 150, discount:0 },
            { label: 'Extra Large - 9 inch', price: 200, discount:0 }
        ],
        img: 'img/pizza/P03.jpg',
        category: 'Pizza'
      },

      {
        name: '[P04] VEGGIE DELIGHT PIZZA',
        desc: 'Onion, Tomato, Corn, Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 90, discount:0 },
            { label: 'Medium - 7 inch', price: 120 },
            { label: 'Large - 8 inch', price: 160, discount:0 },
            { label: 'Extra Large - 9 inch', price: 220, discount:0 }
        ],
        img: 'img/pizza/P04.jpg',
        category: 'Pizza'
      },



      {
        name: '[P05] FARMHOUSE PIZZA',
        desc: 'Onion, Capsicum, Paneer/Mushroom, Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 100, discount:0 },
            { label: 'Medium - 7 inch', price: 140 },
            { label: 'Large - 8 inch', price: 190, discount:0 },
            { label: 'Extra Large - 9 inch', price: 250, discount:0 }
        ],
        img: 'img/pizza/P05.jpg',
        category: 'Pizza'
      },

      {
        name: '[P06] EVERYTHING ON IT PIZZA',
        desc: 'Onion, Capsicum, Corn, Paneer, Mushroom, Olive, Cheese',
        sizes: [
            { label: 'Small - 6 inch', price: 120, discount:0 },
            { label: 'Medium - 7 inch', price: 160 },
            { label: 'Large - 8 inch', price: 220, discount:0 },
            { label: 'Extra Large - 9 inch', price: 280, discount:0 }
        ],
        img: 'img/pizza/P06.jpg',
        category: 'Pizza'
      },


      // Burger
      {
        name: '[B01] SIMPLE VEG BURGER',
        desc: '',
        price: 20,
        img: 'img/burger/B01.jpg',
        category: 'Burger'
      },

      {
        name: '[B02] CHEESE PANEER BURGER',
        desc: '',
        price: 30,
        img: 'img/burger/B02.jpg',
        category: 'Burger'
      },

      // SANDWICH
      {
        name: '[S01] VEG SANDWICH',
        desc: '',
        price: 20,
        img: 'img/sandwich/S01.jpg',
        category: 'Sandwich'
      },

      {
        name: '[S02] VEG GRILLED SANDWICH',
        desc: '',
        price: 25,
        img: 'img/sandwich/S02.jpg',
        category: 'Sandwich'
      },

      // Beverage
      {
        name: '[D01] Coco Cola',
        desc: '',
        sizes: [
          { label: '750 ml', price: 40, discount:0 },
          { label: '2000 ml', price: 99, discount:0 }
      ],
        img: 'img/beverage/D01.jpg',
        category: 'Beverage'
      },

      {
        name: '[D02] Coco Cola Can',
        desc: '300 ml',
        price: 40,
        img: 'img/beverage/D02.jpg',
        category: 'Beverage'
      },

      {
        name: '[D03] Sprite',
        desc: '',
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
        desc: '300 ml',
        price: 40,
        img: 'img/beverage/D04.jpg',
        category: 'Beverage'
      },

      {
        name: '[D05] Pepsi',
        desc: '',
        sizes: [
          //{ label: '400 ml', price: 20, discount:0 },
          { label: '750 ml', price: 40, discount:0 },
          { label: '2250 ml', price: 99, discount:0 }
      ],
        img: 'img/beverage/D05.jpg',
        category: 'Beverage'
      },

      {
        name: '[D06] Thums Up',
        desc: '',
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
        desc: '',
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
        desc: '',
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
        desc: '',
        sizes: [
          { label: '750 ml', price: 40, discount:0 },
          { label: '1250 ml', price: 75, discount:0 },
          //{ label: '1750 ml', price: 99, discount:0 }
      ],
        img: 'img/beverage/D09.jpg',
        category: 'Beverage'
      },

      {
        name: '[D10] Slice',
        desc: '',
        sizes: [
          //{ label: '600 ml', price: 40, discount:0 },
          { label: '1250 ml', price: 75, discount:0 },
          { label: '1750 ml', price: 99, discount:0 }
      ],
        img: 'img/beverage/D10.jpg',
        category: 'Beverage'
      },

      {
        name: '[D11] Mazza',
        desc: '',
        price: 10,
        img: 'img/beverage/D11.jpg',
        category: 'Beverage'
      },
      {
        name: '[D12] Frooti',
        desc: '',
        price: 10,
        img: 'img/beverage/D12.jpg',
        category: 'Beverage'
      },

      {
        name: '[D13] Red Bull',
        desc: '250 ml',
        price: 125,
        img: 'img/beverage/D13.jpg',
        category: 'Beverage'
      },

      {
        name: '[D14] Britannia Cow Milk',
        desc: '180 ml Vanilla',
        price: 40,
        img: 'img/beverage/D14.jpg',
        category: 'Beverage'
      },

      {
        name: '[D15] Britannia Cow Milk',
        desc: '180 ml Choclate',
        price: 40,
        img: 'img/beverage/D15.jpg',
        category: 'Beverage'
      },

      {
        name: '[D16] Britannia Cow Milk',
        desc: '180 ml Strawberry',
        price: 40,
        img: 'img/beverage/D16.jpg',
        category: 'Beverage'
      },

      {
        name: '[D17] Britannia Lassi',
        desc: '180 ml',
        price: 20,
        img: 'img/beverage/D17.jpg',
        category: 'Beverage'
      },

      {
        name: '[D17] Sting',
        desc: '250 ml',
        price: 20,
        img: 'img/beverage/D18.jpg',
        category: 'Beverage'
      },



    // Add other products here...
  ];
  