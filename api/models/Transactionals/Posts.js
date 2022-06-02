const { model, Schema } = require("mongoose");

const postSchema = new Schema({
    content: { type: String },
    attachments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attachment',
        default: null
    }],
    comments: [{type:  mongoose.Schema.Types.Object, ref: 'Comment'}],
    reactions:  [{type:  mongoose.Schema.Types.Object, ref: 'Reaction'}],
    isShared: { type: Boolean },
    sharedPostId:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: null
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MUser'
    },
    createdByDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    taggedDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        default: null
    },
    taggedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MUser',
        default: null
    }],
    privacy: { type: String, enum: ['public', 'own_department', 'tagged_department', 'only_me', 'tagged_users']},
    customTags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomTag',
        default: null
    }],

},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model("Post", postSchema);
