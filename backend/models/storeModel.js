import mongoose from "mongoose";

const storeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    stores: [
      {
        name: { type: String, required: true },
        briefDescription: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

export default Store;
