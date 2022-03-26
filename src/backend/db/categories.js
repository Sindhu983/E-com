import { v4 as uuid } from "uuid";
import { images_arr } from "../../Components/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image:images_arr.boyImage,
    title: "Roadster",
    price: "₹5000",
    categoryName: "Jean",
  },
  {
    _id: uuid(),
    image:images_arr.girlImage,
    title: "Calvin",
    price: "₹3000",
    categoryName: "Jackets",
  },
  {
    _id: uuid(),
    image:images_arr.boys,
    title: "Puma",
    price: "₹1000",
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    image:images_arr.baby1,
    title: "Nino",
    price: "₹1200",
    categoryName: "Frock",
  },
  {
    _id: uuid(),
    image:images_arr.baby2,
    title: "Max",
    price: "₹1500",
    categoryName: "Shirt",
  },
  {
    _id: uuid(),
    image:images_arr.baby3,
    title: "Gini",
    price: "₹2500",
    categoryName: "Jacket",
  },
  {
  _id: uuid(),
    image:images_arr.baby4,
    title: "Pep",
    price: "₹3000",
    categoryName: "Frock",
},
{
  _id: uuid(),
    image:images_arr.baby5,
    title: "Justin",
    price: "₹4500",
    categoryName: "Frock",
},
{
  _id: uuid(),
    image:images_arr.baby6,
    title: "Deedle",
    price: "₹3000",
    categoryName: "Jean frock",
},
];
