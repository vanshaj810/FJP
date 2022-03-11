// OBJECTS IS NOTHING BUT A PAIR OF KEY AND VALUE JUST LIKE DICTONARY IN PYTHON
// EMPTY OBJECT CREATION
let obj = {};
console.log(obj);
// KEY SHOULD BE UNIQUE
// WE CAN RIGHT KEY WITHOUT QUOTES LIKE THIS "Name"
// BECAUSE EVERY KEY INSIDE OBJECT IT TAKES AS A STRING SO DOESN'T MATTER IF WE RIGHT USING QUOTES OR NOT
let objVansh = {
  Name: "Vanshaj Bhardwaj",
  Age: 24,
  Phone_no: 8076153645,
  Last_name: "Bhardwaj",
};
console.log(objVansh);
let capAmerica = {
  Name: "Steve Rogers",
  Age: 9999,
  Friends: ["Natasha", "Thor", "Tony", "Bruce", "Bucky"],
  Address: {
    State: "New York",
    Country: "America",
  },
  SayHi: function () {
    console.log("Cap America says hi");
  },
  IsAvenger: false,
};
// WHOLE ObJECT
console.log(capAmerica);
// NAME KEY OF capAmerica OBJECT
console.log(capAmerica.Name);
// FRIENDS KEY OF capAmerica OBJECT AND INSIDE THIS KEY IS AN ARRAY
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
// ADDRESS KEY OF capAmerica OBJECT AND INSIDE THIS KEY IS AN NESTED OBJECT
console.log(capAmerica.Address);
console.log(capAmerica.Address.State);
console.log(capAmerica.Address.Country);
// console.log(capAmerica.SayHi());
// SAYHI KEY OF capAmerica OBJECT AND INSIDE THIS KEY IS AN FUNCTION
capAmerica.SayHi();
// ADDING A NEW KEY
console.log("Before updation of the Object: ", capAmerica);
capAmerica.Movies = ["The First Avenger", "Avengers", "Civil War", "End Game"];
console.log("After updation of the Object: ", capAmerica);
// DELETING A NEW KEY
delete capAmerica.Movies;
console.log(capAmerica);
// MODIFYING AN EXISTING KEY
capAmerica.IsAvenger = true;
console.log(capAmerica);
capAmerica.Address.State = "Boston";
console.log(capAmerica);
// SECOND WAY TO ACCESS A KEY
console.log(capAmerica.Name);
console.log(capAmerica['Name']);