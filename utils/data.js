const { getRandomName } = require("../../CONN-VIRT-FSF-PT-09-2023-U-LOLC/18-NoSQL/01-Activities/28-Stu_Mini-Project/Main/utils/data");

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
    '😆',
    '😂',
    '😢',
    '😡',
    '🤔',
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => {
    return `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
}

const getRandomThought = () => {
    return getRandomArrItem(thoughts);
}

const getRandomReaction = () => {
    return getRandomArrItem(reactions);
}

module.exports = { getRandomName, getRandomThought, getRandomReaction };