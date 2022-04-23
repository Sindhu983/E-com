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
    price: "5000",
    discountedPrice:2000,
    categoryName: "Jean",
    rating:5  
  },
  {
    _id: uuid(),
    image:images_arr.girlImage,
    title: "Calvin",
    price: "3000",
    discountedPrice:899,
    categoryName: "Jacket",
    rating:3.5
  },
  {
    _id: uuid(),
    image:images_arr.boys,
    title: "Puma",
    price: "1000",
    discountedPrice:199,
    categoryName: "Jean",
    rating:4
  },
  {
    _id: uuid(),
    image:images_arr.baby1,
    title: "Nino",
    price: "1200",
    discountedPrice:499,
    categoryName: "Frock",
    rating:5
  },
  {
    _id: uuid(),
    image:images_arr.baby2,
    title: "Max",
    price: "1500",
    discountedPrice:899,
    categoryName: "Shirt",
    rating:2
  },
  {
    _id: uuid(),
    image:images_arr.baby3,
    title: "Gini",
    price: "2500",
    discountedPrice:500,
    categoryName: "Jacket",
    rating:4.5
  },
  {
  _id: uuid(),
    image:images_arr.baby4,
    title: "Pep",
    price: "4000",
    discountedPrice:1090,
    categoryName: "Frock",
    rating:3
},
{
  _id: uuid(),
    image:images_arr.baby5,
    title: "Justin",
    price: "4500",
    discountedPrice:2999,
    categoryName: "Frock",
    rating:4
},
{
  _id: uuid(),
    image:images_arr.baby6,
    title: "Deedle",
    price: "1000",
    discountedPrice:1000,
    categoryName: "Frock",
    rating:2.5
},
];


