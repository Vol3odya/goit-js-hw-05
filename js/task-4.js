const getTotalBalanceByGender=(users, gender) => {
  let arr = users.filter(elem => {
    if (elem.gender ==gender) {
      return true;
    } else {
      return false;
	  }
  });
  const rez = arr.reduce((sum, amount) => sum + amount.balance,0);
//    for (let i = 0; i < users.length; i += 1){
//        if (users[i].gender == gender) {
//            rez += users[i].balance;   
//        }
//    }
  return rez;
};

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863