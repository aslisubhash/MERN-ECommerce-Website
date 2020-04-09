const mongoose = require("mongoose");
const crypto = require("crypto");
//https://www.npmjs.com/package/uuid#create-version-1-timestamp-uuids
import { v1 as uuidv1 } from "uuid";
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    //TODO: Come back here
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (plainpassword) {
    this._password = password;

    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.method = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      //direcly from https://nodejs.org/api/crypto.html#crypto_determining_if_crypto_support_is_unavailable
      return crypto
        .createHmac("sha256", secret)
        .update("I love cupcakes")
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
