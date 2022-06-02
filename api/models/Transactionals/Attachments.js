const { model, Schema } = require("mongoose");
const Reactions = require("../Documents/Reactions");
const CustomTag = require("../Masterdata/CustomTags");

const attachmentsSchema = new Schema({
    path: { type: String },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MUser'
    },
    comments:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    refId: { type: mongoose.Schema.Types.ObjectId },
    originCollection: { type: String },
    reactions: [{
        type:Reactions,
    }],
    customTags: [{
        type:CustomTag,
    }]
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("Attachment", attachmentsSchema);
