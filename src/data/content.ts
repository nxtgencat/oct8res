export interface BbqItem {
  name: string;
  desc: string;
  price: string;
}

export interface Dish {
  img: string;
  name: string;
  old: string;
  price: string;
}

export interface Expert {
  img: string;
  role: string;
  name: string;
}

export const hero = {
  titleA: "The Perfect Space to",
  titleB: "Enjoy Fantastic Food",
  sub: "Festive dining at Farthings where we are strong believers in using the very best produce.",
  price: "$90.85",
  dish: "Sicilian Pizza",
  thumb: "/images/feat-1.png",
};

export const about = {
  eyebrow: "About The Food Restaurant",
  title: ["New Ground with", "Dishes to be Enjoyed"],
  text: "Nisl quam nestibulum ac quam nec odio elementum ceisue the miss varieties of food and drinks and enjoy the food.",
  name: "Willimes James",
  role: "Director and Chief Operations Officer",
  cards: [
    { img: "/images/card-restaurant.png", label: "Restaurant" },
    { img: "/images/card-cocktail.png", label: "Coctail Bar" },
    { img: "/images/card-private.png", label: "Private Dining" },
  ],
};

export const categories = ["Dessert", "Steak", "Coffee", "Burger"];

export const bbqTitle = "BBQ";
export const bbqImage = "/images/bbq.png";

export const bbqItems: BbqItem[] = [
  { name: "Sake BBQ sauce", desc: "radish, black sesame seeds, coriander", price: "$9.00" },
  { name: "BBQ baby back ribs", desc: "sticky Asian glaze, charred lime, chilli cashews", price: "$16.00" },
  { name: "Half smoked chicken", desc: "miso butter glaze, charred lime wedge, sake bbq", price: "$34.00" },
  { name: "Dusted chicken wings", desc: "tossed in Korean hot sauce, pickled radish", price: "$40.00" },
];

export const promos = [
  { img: "/images/promo-steak.png", title: "Steaks & BBQ", text: "canonical classics to obscure tiki drinks", price: "$120", per: "person" },
  { img: "/images/promo-cocktail.png", title: "Cocktails", text: "canonical classics to obscure tiki drinks", price: "$120", per: "person" },
];

export const reserveFields = ["No of Guest", "Date", "Time", "Full Name", "Phone No"];

export const dishes: Dish[] = [
  { img: "/images/feat-1.png", name: "Crispy Fried Chicken", old: "$14.85", price: "$10.85" },
  { img: "/images/feat-2.png", name: "Shroom Bacon Burger", old: "$21.76", price: "$11.76" },
  { img: "/images/feat-3.png", name: "Delicious Black Coffee", old: "$21.76", price: "$11.76" },
];

export const testimonial = {
  eyebrow: "Testimonials & Reviews",
  title: ["Our Customar", "Feedbacks"],
  quote:
    "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts.",
  name: "Bratlee Hamint",
  imgs: ["/images/testi-1.png", "/images/testi-2.png", "/images/testi-3.png"],
};

export const experts: Expert[] = [
  { img: "/images/chef-1.png", role: "Dessert specialist", name: "Thomas Walim" },
  { img: "/images/chef-2.png", role: "Chef Master", name: "James Jhonson" },
  { img: "/images/chef-3.png", role: "Dessert specialist", name: "Room Minal" },
];

export const appPoints = ["Higher Reach - Minimal Effort", "Showcase your Brand", "Exclusive offers & discounts"];

export const news = [
  { img: "/images/news-1.png", date: "April 6, 2023", title: "Creamy Chicken Alfredo", author: "Willimes Thomas" },
  { img: "/images/news-2.png", date: "April 6, 2023", title: "Air Fryer Salmon", author: "Willimes Thomas" },
];

export const gallery = [
  "/images/testi-1.png",
  "/images/feat-2.png",
  "/images/testi-3.png",
  "/images/feat-3.png",
  "/images/card-private.png",
  "/images/testi-2.png",
  "/images/feat-1.png",
  "/images/promo-steak.png",
];

export const footerAboutLinks = ["Fredoka One", "Special Dish", "Reservation", "Contact"];
export const footerMenuLinks = ["Steaks", "Burgers", "Coctails", "Bar B Q", "Desserts"];
export const navLinks = ["Home", "About Us", "Shop", "Blog", "Pages"];
