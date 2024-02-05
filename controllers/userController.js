const { User } = require('../models');

module.exports = {
    getUsers: async (res, req) => {
        try {
            const usersData = await User.find({});
            res.json(usersData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getUserbyId: async (res, req) => {
        try {
            const userData = await User.findOne({ _id: req.params.id });
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createUser: async (res, req) => {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updateUser: async (res, req) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteUser: async (res, req) => {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.id });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

    },


    addFriend: async (res, req) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $push: { friends: req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteFriend: async (res, req) => {
        try {
            const userData = await User.findOneAndUpdate({
                _id: req.params.id
            },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}