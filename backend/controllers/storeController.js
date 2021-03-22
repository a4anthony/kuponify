import asyncHandler from "express-async-handler";
import { validatorErrors } from "../validator.js";
import Store from "../models/storeModel.js";

// @description  Add Store
// @route        PUT /api/stores/create
// @access       Private
const addStore = asyncHandler(async (req, res) => {
  const { store } = req.body;
  const userStores = await Store.findOne({ user: req.user._id });
  if (!store) {
    res.status(422).send({
      message: {
        store: { message: "Store is required" },
      },
    });
  }
  if (store && !store.name) {
    res.status(422).send({
      message: {
        store: { name: { message: "Store name is required" } },
      },
    });
  }
  if (store && store.name) {
    userStores.stores.forEach((userStore) => {
      if (userStore.name === store.name) {
        res.status(422).send({
          message: {
            store: { name: { message: "Store already added" } },
          },
        });
      }
    });
  }
  if (store && !store.briefDescription) {
    res.status(422).send({
      message: {
        store: {
          briefDescription: { message: "Store brief description is required" },
        },
      },
    });
  }
  if (store && store.name && store.briefDescription) {
    try {
      userStores.user = req.user._id;
      userStores.stores.push(store);
      const updatedUserStore = await userStores.save();
      res.json(updatedUserStore);
    } catch (err) {
      console.log(err);
      res.status(422).send({ message: validatorErrors(err) });
    }
  }
});

// @description  Get stores
// @route        GET /api/stores
// @access       Private
const getStores = asyncHandler(async (req, res) => {
  try {
    const userStores = await Store.findOne({ user: req.user._id });
    res.json(userStores);
  } catch (err) {
    console.log(err);
  }
});

export { addStore, getStores };
