
const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

const thoughts = [
    'I love the new update!',
    'I hate the new update!',
    'I am so excited for the new update!',
    'I am so disappointed in the new update!',
    'I am so confused by the new update!',
    'I am so indifferent to the new update!',
]

const reactions = [
    'Happy',
    'Sad',
    'Angry',
    'Confused',
    'Indifferent',
]

const emails = [
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
    '@aol.com',
    '@outlook.com',
    '@icloud.com',
    '@sbcglobal.net',
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () => {
    return `${getRandomArrItem(names) + Math.floor(Math.random() * 100)}`;
}
const getRandomEmail = () => {
    return getRandomArrItem(emails);

}
const getRandomThoughts = () => {
  return getRandomArrItem(thoughts);
}

const getRandomReactions = (int) => {
    const results = [];
  for (let i = 0; i < int; i++) {
    results.push(
    getRandomArrItem(reactions),
    );
  }
  return results;
}

const getRandomFriendsList = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push(
          getRandomUsername()
        );
    }
    return results;
  }
module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions, getRandomEmail, getRandomFriendsList };