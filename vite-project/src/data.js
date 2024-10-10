import Fruits from "./assets/fruit.jpg";
import Vegetables from "./assets/vegitables.png";

//CardCarosuel Component Data here.......!!
export const user = [
  {
    id: 1,
    email: "sailesh@gmail.com",
    pass: "112233",
    cart: [
      {
        productId: 2,
        quantity: 2,
      },
    ],
  },
  {
    id: 1,
    email: "sailesh@gmail.com",
    pass: "112233",
  },
];
export const cardsCarouselData = [
  {
    id: 1,
    title: "Fruits",
    image: Fruits,
  },
  {
    id: 2,
    title: "toys",
    image: Fruits,
  },
  {
    id: 3,
    title: "Snacks",
    image: Fruits,
  },
  {
    id: 4,
    title: "Oil",
    image: Fruits,
  },
  {
    id: 5,
    title: "Vegetables",
    image: Fruits,
  },
  {
    id: 6,
    title: "Dairy",
    image: Fruits,
  },
];
// CardData here ...!!
export const AllcardsData = [
  {
    id: 1,
    category: "Toys",
    title: "Car",
    img: Vegetables,
    h1: "Fully fun with this Car",
    para: "Enjoy the Card ride while you singing..",
    options: [
      { quantity: 1, price: 100 },
      { quantity: 2, price: 200 },
      { quantity: 3, price: 300 },
    ],
    unit: "pieces", // Example unit
    price: 100, // Price per toy
  },
  {
    id: 2,
    category: "Fruits",
    title: "Banana",
    img: Vegetables,
    h1: "Sweet and Soft Bananas",
    para: "A great source of energy, bananas are perfect for on-the-go snacking.",
    options: [
      { quantity: "100g", price: 50 },
      { quantity: "500g", price: 200 },
      { quantity: "1kg", price: 400 },
    ],
    unit: "g", // Example unit
    price: 400, // Price per kg or per unit
  },
  {
    id: 3,
    category: "Fruits",
    title: "Orange",
    img: Vegetables,
    h1: "Juicy Oranges",
    para: "Citrusy and refreshing, oranges are rich in vitamin C.",
    price: 125,
  },
  {
    id: 4,
    category: "Fruits",
    title: "Grapes",
    img: Vegetables,
    h1: "Sweet and Succulent Grapes",
    para: "Enjoy a handful of grapes for a burst of sweetness.",
    price: 250,
  },
  {
    id: 5,
    category: "Fruits",
    title: "Strawberries",
    img: Vegetables,
    h1: "Delicious Strawberries",
    para: "Perfect for desserts or snacking, these berries are a favorite!",
    price: 300,
  },
  {
    id: 6,
    category: "Fruits",
    title: "Watermelon",
    img: Vegetables,
    h1: "Refreshing Watermelon",
    para: "Stay hydrated with the juicy sweetness of fresh watermelon.",
    price: 450,
  },
  {
    id: 7,
    category: "Fruits",
    title: "Pineapple",
    img: Vegetables,
    h1: "Tropical Pineapple",
    para: "Enjoy the sweet and tangy flavor of ripe pineapple.",
    price: 600,
  },
  {
    id: 8,
    category: "Fruits",
    title: "Mango",
    img: Vegetables,
    h1: "Ripe and Sweet Mango",
    para: "Indulge in the tropical sweetness of fresh mangoes.",
    price: 700,
  },
  {
    id: 9,
    category: "Vegetables",
    title: "Mango",
    img: Vegetables,
    h1: "Ripe and Sweet Mango",
    para: "Indulge in the tropical sweetness of fresh mangoes.",
    price: 700,
  },
];
