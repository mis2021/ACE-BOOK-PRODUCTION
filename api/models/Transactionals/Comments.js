const { model, Schema, mongoose } = require("mongoose");
const Reaction = require("../Documents/Reactions");

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
    reactions: [{type:  mongoose.Schema.Types.Object, ref: 'Reaction'}],
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("Comment", commentSchema);
