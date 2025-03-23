const mongoose = require("mongoose");
const arrayDocumentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  arrayField: [
    {
      type: String,
    },
  ],
});
const ArrayField = mongoose.model.arrayField || mongoose.model("arrayfield", arrayDocumentSchema)

module.exports = ArrayField;
