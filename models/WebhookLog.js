const mongoose = require("mongoose");


const WebhookLogSchema = new mongoose.Schema({
method: String,
headers: Object,
body: Object,
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("WebhookLog", WebhookLogSchema);