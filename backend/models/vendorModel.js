const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
    {
        vendorClass: {
            type: String,
            required: true
        },
        vendorBusinessName: {
            type: String,
            required: true
        },
        services: {
            type: Array,
            required: true
        }
    }
)

export const Vendor = mongoose.model("Vendor", { name: String });