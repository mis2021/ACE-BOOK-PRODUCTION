const { model, Schema } = require("mongoose");

const FBCategorySchema = new Schema({
  name: { type: String, unique: true },
  description: { type: String, default: null },
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("FBCategory", FBCategorySchema);
