const router = require('express').Router();

const {
    getUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/User/ 
router.route('/').get(getUsers).post(createUser);

// /api/User/:id
router.route('/:id').get(getUserbyId).put(updateUser).delete(deleteUser);

// /api/User/:userId/friends/
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

