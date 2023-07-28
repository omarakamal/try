const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const carSchema = new Schema(
  {
    make: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    model: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    }
   
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
