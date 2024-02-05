const { Thought, User, Reaction } = require('../models');

module.exports = {
    getThoughts: async (res, req) => {
        try {
            const thoughtsData = await Thought.find({});
            res.json(thoughtsData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getThoughtbyId: async (res, req) => {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.id });
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createThought: async (res, req) => {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updateThought: async (res, req) => {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteThought: async (res, req) => {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id });
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    addReaction: async (res, req) => {
        try {
            const reactionData = await Reaction.create(req.body);
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: reactionData._id } },
                { new: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteReaction: async (res, req) => {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: req.params.reactionId } },
                { new: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}