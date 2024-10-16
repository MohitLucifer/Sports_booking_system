const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  sports: [
    {
      name: { type: String, required: true },
      courts: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Center", centerSchema);
