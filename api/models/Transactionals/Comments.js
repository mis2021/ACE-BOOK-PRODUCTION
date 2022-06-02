const { model, Schema } = require("mongoose");
const Reactions = require("../Documents/Reactions");

const commentSchema = new Schema({
    message: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MUser'
    },
    comments:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    reactions: [{
        type:Reactions,
    }],
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("Comment", commentSchema);
