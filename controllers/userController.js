const { User, Thought } = require('../models');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const usersData = await User.find({}).populate('thoughts')
            .select('-__v')
            .populate({path : 'friends', select: 'username'});;
            res.json(usersData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getUserbyId: async (req, res) => {
        try {
            const userData = await User.findOne({ _id: req.params.id })
            .populate('thoughts')
            .select('-__v')
            .populate({path : 'friends', select: 'username'});
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
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

    deleteUser: async (req, res) => {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.id || req.body.userId});
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json("User deleted");
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

    },


    addFriend: async (req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId   } },
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

    deleteFriend: async (req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $pull: { friends:  req.params.friendId} },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json("friend deleted /n"+ userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}