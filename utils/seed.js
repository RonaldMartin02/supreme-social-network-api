const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomThoughts , getRandomReactions, getRandomEmail, getRandomFriendsList } = require('./data');

connection.on('error' , (err) => err)
connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('connected');
    const users = []; 
    
    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = `${username + getRandomEmail()}`;
         users.push(new User({
            username,
            email,
        }));  
    } 
        await User.insertMany(users);

        const thoughts = []; 

        await Promise.all(users.map(async user => {
    const userThoughts = [];
    for (let i = 0; i < 2; i++) {
        const thoughtReaction = []; 
        const numReactions = Math.floor(Math.random() * 5);

        for (let i = 0; i < numReactions; i++) {
            thoughtReaction.push({
                reactionBody: getRandomReactions(5)[Math.floor(Math.random() * 5)],
                username: users[Math.floor(Math.random() * users.length)].username
            });
        }

    userThoughts.push(new Thought({
                   thoughtText: getRandomThoughts(),
                   username: user.username,
                   reactions: thoughtReaction
                   // getRandomReactions(5)
               }));

            }
            
            // user.friends = getRandomFriendsList(5);
            const friendAmount = Math.floor(Math.random() * users.length);
            if (friendAmount === 0) {
                return 1;
            }
            console.log(friendAmount);
            for (let i = 0; i < friendAmount; i++) {
               
                var friendsName = users[Math.floor(Math.random() * users.length)].username
                if (user.friends.includes(friendsName) || friendsName === user.username) {
                    i--;
                    continue;
                } else  {
                     user.friends.push(users[Math.floor(Math.random() * users.length)]);
                    // user.friends.push(friendsName);
                }
            }
    // user.friends+= users[Math.floor(Math.random() * users.length)].username;
    thoughts.push(...userThoughts);
    user.thoughts = userThoughts.map(thought => thought._id);
    // user.thoughts=thoughts;
    await user.save();
}));

        await Thought.insertMany(thoughts);


    console.info('Seeding complete! 🌱');
    process.exit(0);
});