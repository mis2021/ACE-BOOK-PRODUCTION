const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, default: null },
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  position: { type: String },
  isActive: { type: Boolean },
  isApprover: { type: Boolean },
  contact: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: {type : String},
  token: { type: String },
  departmentOnDuty:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  department:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }],
   restrictionCode:{ type: String },
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("Muser", userSchema);
