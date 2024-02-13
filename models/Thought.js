const { Schema, model } = require('mongoose');



const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: 'You need to provide a thought!',
        minLength: 1,
        maxLength: 280,
        },
        createdAt: {
        type: Date,
        default: Date.now,
        },
        username: {
        type: String,
        required: 'You need to provide a username!',
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false
    });
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = { Thought};