// let colorBox = function checkColor(col1 = "red") {
//   if (col1 == "red") {
//     return;
//   }
//   console.log(col1);
// };
// colorBox();
// colorBox("purple");

// let stringFunc = () => console.log('I am string function!');

// stringFunc();

// let catFunc = function() {
// 	console.log('I am cat function!');
// };

// catFunc();

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("А родители разрешили?");
//   }
// }

// let age = prompt("Сколько вам лет?", 18);

// if (checkAge(age)) {
//   alert("Доступ получен");
// } else {
//   alert("Доступ закрыт");
// }

// let myCar = {
//     drivers: ["Jim", "Jack", 'Petuch', 'BonJovi'],
//     getDriver(currentDriver){
//         console.log('Your driver is - ' + this.drivers[currentDriver])
//     }
// };

// myCar.getDriver(1);

// myCar.getDriver(2);

// myCar.getDriver(3);

// myCar.getDriver(0);

// let user = {
//   name: "Джон",
//   age: 30,
//   sayHi: function() {}
// };



// 'use strict'; // почитати потім про цю тємку

// let fruits = ["Яблоко", "Апельсин"];


// alert(fruits.shift());

// console.log(fruits);



// let styles = ['Jazz', 'Blues'];
// styles.push("Rock'n'roll");
// styles[1] = 'Classic';
// alert(styles.shift());
// styles.unshift('Rap','Reggae');

// console.log(styles);


// let drivers = ['Jack', 'Peter', 'Steve', 'Chris'];

// for (let i = drivers.length - 1; i >= 0 ; i--) {
//     console.log(drivers[i]);
// }


// let i = 5;
// while (i < 15) { 
//   alert( i );
//   i++;
// }




// let sum = 0;

// while (true) {

//     let value = +prompt("Введите число", '');
  
//     if (!value) break; // (*)
  
//     sum = sum + value;
  
//   }
//   alert( 'Сумма: ' + sum );




// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0){
//         alert(i);
//     }
// }


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


//   let i = 0;
//   while(i < 3) {
//       i++;
//       alert(`number ${i}!`);
//   }






// for (;;) {
//     let num = +prompt("Введите число, большее 100?", 0);
//     if (num >= 100 || !num) break;
// }
// alert('Completed');


// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// class Blogger {
//     constructor(channelName, firstName, lastName) {
//         this.channelName = channelName;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     showName() {
//         alert(`${this.channelName} - YouTube channel. Author's name is : ${this.firstName} ${this.lastName}`)
//     }
// }

// let blogger1 = new Blogger('CarambaTV', 'Narkoman', 'Pavlik');
// blogger1.showName();

// let blogger2 = new Blogger('IkakProsto' , 'Stas', 'Vasiliev');
// blogger2.showName();



// let mashynka = {
//     color: 'red',
//     maxSpeed: 300
// }

// function showColor(mashCol = mashynka.color) {
//     console.log(mashCol);
// }

// showColor()