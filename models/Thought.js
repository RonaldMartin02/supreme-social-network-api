const { Schema, model } = require('mongoose');

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
        reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        },
        ],
    },
    {
        toJSON: {
        virtuals: true,
        },

    }
    );