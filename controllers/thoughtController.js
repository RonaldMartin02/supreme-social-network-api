const { Thought, User } = require('../models');

module.exports = {
    getThoughts: async (req, res) => {
        try {
            const thoughtsData = await Thought.find({})
            res.json(thoughtsData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getThoughtbyId: async (req, res) => {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.id });
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createThought: async (req, res) => {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updateThought: async (req, res) => {
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

    deleteThought: async (req, res) => {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id });
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json("Thought deleted!");
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    addReaction: async (req, res) => {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
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

    deleteReaction: async (req, res) => {
        
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: {_id: req.body._id} } },
                { new: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(`Item Deleted: \n`+ thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}