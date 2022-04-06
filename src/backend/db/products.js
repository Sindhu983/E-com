import { v4 as uuid } from "uuid";

import {images_arr} from '../../Components/images/index'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:images_arr.boyImage,
    title: "Roadster",
    price: "₹5000",
    categoryName: "Jean",
    rating:5
    
  },
  {
    _id: uuid(),
    image:images_arr.girlImage,
    title: "Calvin",
<<<<<<< Updated upstream
    price: "₹3000",
    categoryName: "Jackets",
=======
    price: "3000",
    categoryName: "Jacket",
    rating:3.5
>>>>>>> Stashed changes
  },
  {
    _id: uuid(),
    image:images_arr.boys,
    title: "Puma",
<<<<<<< Updated upstream
    price: "₹1000",
    categoryName: "shirt",
=======
    price: "1000",
    categoryName: "Jean",
    rating:4
>>>>>>> Stashed changes
  },
  {
    _id: uuid(),
    image:images_arr.baby1,
    title: "Nino",
    price: "₹1200",
    categoryName: "Frock",
    rating:5
  },
  {
    _id: uuid(),
    image:images_arr.baby2,
    title: "Max",
    price: "₹1500",
    categoryName: "Shirt",
    rating:2
  },
  {
    _id: uuid(),
    image:images_arr.baby3,
    title: "Gini",
    price: "₹2500",
    categoryName: "Jacket",
    rating:4.5
  },
  {
  _id: uuid(),
    image:images_arr.baby4,
    title: "Pep",
    price: "₹3000",
    categoryName: "Frock",
    rating:3
},
{
  _id: uuid(),
    image:images_arr.baby5,
    title: "Justin",
    price: "₹4500",
    categoryName: "Frock",
    rating:4
},
{
  _id: uuid(),
    image:images_arr.baby6,
    title: "Deedle",
<<<<<<< Updated upstream
    price: "₹3000",
    categoryName: "Jean frock",
=======
    price: "3000",
    categoryName: "Frock",
    rating:2.5
>>>>>>> Stashed changes
},
];


