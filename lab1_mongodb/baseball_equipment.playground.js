// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
//use('BaseballEquipment');

// 1. List all databases
db.adminCommand({ listDatabases: 1 });

use('baseballEquipment');

//Return an array of all collection names in baseballEquipment
db.getCollectionNames();

//drop: before demo
db.baseballEquipment.drop();

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
    
    // EXTRA FIELD ONLY IN DOCUMENT #7
    material: "Leather"
  }
]);

//running a check query to show everything I just inserted
//This will show you everything you just inserted
db.baseballEquipment.find().pretty();
db.baseballEquipment.find();

//Searching by category
db.baseballEquipment.find({ category: "Safety"});

//Finding items cheaper than $100
db.baseballEquipment.find({price: {$lt: 100 }});

//Find a specific brand
db.baseballEquipment.find({brand: "Nike"});

db.baseballEquipment.find(
  {},
  { name: 1, price: 1, _id: 0}
);

//Removing a single document
db.equipment.deleteOne({_id: 3});

//to verify/double check
db.equipment.find();

///////////////////////////////////////////
// Putting the deleted document back without _id
// Storing a document in a variable
// Insert it using that variable
// MongoDB will auto-generte an _id
////////////////////////////////////////////
let deletedDoc = {
    name: "Batting Helmet",
    brand: "Easton",
    price: 49.99,
    weight_oz: 15,
    category: "Safety",
    releaseDate: new Date("2020-07-11")
};

//inserting the variable
db.equipment.insertOne(deletedDoc);

//to show only the without an _id you created
// no need for .toArray();
db.equipment.find({name: "Batting Helmet"});

///////////////////////////////////
//Removing all documents, then re-inserting with embedded docus
// including an embedded document inside each
///////////////////////////////////////////////

//removing all documents
db.equipment.deleteMany({});

//Reinserting all 7 with embedded documents:
db.equipment.insertMany([
  {
    _id: 1,
    name: "Baseball Glove",
    brand: "Rawlings",
    price: 129.99,
    weight_oz: 22,
    category: "Fielding",
    releaseDate: new Date("2021-03-15"),
    dimensions: { height: 10, width: 8 }
  },
  {
    _id: 2,
    name: "Wooden Bat",
    brand: "Louisville Slugger",
    price: 89.99,
    weight_oz: 30,
    category: "Batting",
    releaseDate: new Date("2022-01-20"),
    dimensions: { height: 34, width: 3 }
  },
  {
    _id: 3,
    name: "Batting Helmet",
    brand: "Easton",
    price: 49.99,
    weight_oz: 15,
    category: "Safety",
    releaseDate: new Date("2020-07-11"),
    dimensions: { height: 12, width: 9 }
  },
  {
    _id: 4,
    name: "Catcher’s Mask",
    brand: "All-Star",
    price: 99.99,
    weight_oz: 18,
    category: "Safety",
    releaseDate: new Date("2021-09-02"),
    dimensions: { height: 11, width: 8 }
  },
  {
    _id: 5,
    name: "Baseball Cleats",
    brand: "Nike",
    price: 119.99,
    weight_oz: 12,
    category: "Footwear",
    releaseDate: new Date("2023-04-22"),
    dimensions: { height: 5, width: 4 }
  },
  {
    _id: 6,
    name: "Pitching Net",
    brand: "Rukket",
    price: 149.99,
    weight_oz: 500,
    category: "Training",
    releaseDate: new Date("2019-05-05"),
    dimensions: { height: 60, width: 60 }
  },
  {
    _id: 7,
    name: "Baseball",
    brand: "Wilson",
    price: 12.99,
    weight_oz: 5,
    category: "Game Ball",
    releaseDate: new Date("2022-10-10"),
    material: "Leather",
    dimensions: { height: 3, width: 3 }
  }
]);

//Finding all documents where embedded width = 8
db.equipment.find({"dimensions.width": 8});

//Find all where height > 10
db.equipment.find({ "dimensions.height": {$gt: 10} });

//Finding documents where BOTH height and width match
db.equipment.find({
    "dimensions.height": 12,
    "dimensions.width": 9
});

//Nested Forloops to create (x, y) pairs
// New collection : My loops

use("baseballEquipment");

//Drop the collection if it already exists
db.MyLoops.drop();

//Nested loops
for (let x = 1; x <= 5; x++) {
    for (let y =3; y >= 1; y--) {
        db.MyLoops.insertOne({x:x, y: y});
    }
}

//to show the results
db.MyLoops.find();

