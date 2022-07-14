// 1. Write code to get array of names from given array of users.
// 2. Get back only active users.
// 3. Sort users based on age in accending order

const users = [
    {
        id : 1,
        name : 'Guru',
        isActive : true,
        age : 26,
    },
    {
        id : 2,
        name : 'Nitu',
        isActive : true,
        age : 27,
    },
    {
        id : 3,
        name : 'Aarav',
        isActive : false,
        age : 3,
    },
];

// best method

const userName = users.sort((user1, user2) => user1.age > user2.age ? 1 : -1)
                      .filter((user) => user.isActive )
                      .map((user) => user.name);

//2nd method - forEach

// const userName = [];
// users.forEach((user) => userName.push(user.name));

// 1st method
// const userName = [];
// for(let i = 0; i < users.length; i++) {
//     userName.push(users[i].name);
// }
console.log(userName);