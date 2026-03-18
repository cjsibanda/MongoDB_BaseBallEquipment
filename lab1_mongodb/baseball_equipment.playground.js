//use("baseballDB");
//db.createCollection("baseballEquipment");

//to delete collection
//db.baseballEquipment.drop();

/* global use, db */

use("baseballEquipment");   //  correct database

//  If the collection already exists, drop it first
// db.baseballEquipment.drop();

// Insert documents
db.baseballEquipment.insertMany([
  {
    _id: 1,
    name: "Baseball Glove",
    brand: "Rawlings",
    price: 129.99,
    weight_oz: 22,
    category: "Fielding",
    releaseDate: new Date("2021-03-15")
  },
  {
    _id: 2,
    name: "Wooden Bat",
    brand: "Louisville Slugger",
    price: 89.99,
    weight_oz: 30,
    category: "Batting",
    releaseDate: new Date("2022-01-20")
  },
  {
    _id: 3,
    name: "Batting Helmet",
    brand: "Easton",
    price: 49.99,
    weight_oz: 15,
    category: "Safety",
    releaseDate: new Date("2020-07-11")
  },
  {
    _id: 4,
    name: "Catcher’s Mask",
    brand: "All-Star",
    price: 99.99,
    weight_oz: 18,
    category: "Safety",
    releaseDate: new Date("2021-09-02")
  },
  {
    _id: 5,
    name: "Baseball Cleats",
    brand: "Nike",
    price: 119.99,
    weight_oz: 12,
    category: "Footwear",
    releaseDate: new Date("2023-04-22")
  },
  {
    _id: 6,
    name: "Pitching Net",
    brand: "Rukket",
    price: 149.99,
    weight_oz: 500,
    category: "Training",
    releaseDate: new Date("2019-05-05")
  },
  {
    _id: 7,
    name: "Baseball",
    brand: "Wilson",
    price: 12.99,
    weight_oz: 5,
    category: "Game Ball",
    releaseDate: new Date("2022-10-10"),
    material: "Leather" // extra key
  }
]);

// Show documents
db.baseballEquipment.find().toArray();

// Searching by category
db.baseballEquipment.find({ category: "Safety" }).toArray();

//Finding items cheaper that $100
db.baseballEquipment.find({ price: { $lt: 100 } }).toArray();

//Find a specific brand
db.baseballEquipment.find({ brand: "Nike" });

//Returning only some key/value pairs (projection)
db.baseballEquipment.find(
  {},
  { name: 1, price: 1, _id: 0 }
);



