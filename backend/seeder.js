import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./sampleData/users.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import Store from "./models/storeModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Store.deleteMany();
    const newUsers = await User.insertMany(users);
    let stores = [];
    newUsers.forEach((user) => {
      stores.push({
        user: user._id,
        stores: [],
      });
    });
    await Store.insertMany(stores);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Store.deleteMany();
    console.log("Data Destroyed".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
