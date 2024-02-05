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
        get: (createdAtVal) => dateFormat(createdAtVal)
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
        getters: true,
        },
    });

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
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
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    }, 
    {
        toJSON: {
            getters: true
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
const Reaction = model('Reaction', reactionSchema);

module.exports = { Thought, Reaction };

// module.exports = Thought;
// module.exports = Reaction;
// Path: supreme-social-network-api/models/index.js
