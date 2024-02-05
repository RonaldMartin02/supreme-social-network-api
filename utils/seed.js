const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const { getRandomName, getRandomThought , getRandomReaction } = require('./data');

connection.on('error' , (err) => err)
connection.once('open', async () => {
    console.log('connected');
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    let reactionCheck = await connection.db.listCollections({ name: 'reactions' }).toArray();
    if (reactionCheck.length) {
        await connection.dropCollection('reactions');
    }
    const users = [];
    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${getRandomName()}@gmail.com`;
        const thoughts = getRandomThought(20);
        users.push({
            username,
            email,
            thoughts,
            friends: []
        });
    }

});