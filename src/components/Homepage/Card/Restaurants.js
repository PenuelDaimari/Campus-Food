// src/data/canteens.js
import CCD from "./ccd.jpg";
import Subway from "./subway.jpg"; 
import PFC from "./pfc.jpg";
import Billoos from "./billoos.jpg";
import Miomore from "./miomore.jpg";
import Vegies from "./vegies.jpg";
import FoodCity from "./foodcity.jpg";
import Sahara from "./sahara.jpg";
import Dreamland from "./dreamland.jpg";

const restaurants = [
  {
    image: CCD,
    title: "CCD",
    cuisine: "Rich Brews",
    hours: "9am-9pm"
  },
  {
    image: Subway,
    title: "SubWay",
    cuisine: "Savory Subs",
    hours: "8am-10pm"
  },
  {
    image: PFC,
    title: "PFC",
    cuisine: "Sizzling Services",
    hours: "9am-10pm"
  },
  {
    image: Sahara,
    title: "Sahara",
    cuisine: "Spicy Delights",
    hours: "10am-10pm"
  },
  {
    image: Dreamland,
    title: "DreamLand",
    cuisine: "Delicious Deli",
    hours: "10am-10pm"
  },
  {
    image: FoodCity,
    title: "Food City",
    cuisine: "Food Frenzy",
    hours: "9am-10pm"
  },
  {
    image: Vegies,
    title: "Vegies",
    cuisine: "Spicy Delights",
    hours: "10am-9pm"
  },
  {
    image: Billoos,
    title: "Billoos",
    cuisine: "Spicy Delights",
    hours: "10am-8pm"
  },
  {
    image: Miomore,
    title: "Miomore",
    cuisine: "Sweet Delights",
    hours: "10am-8pm"
  },
];

export default restaurants;