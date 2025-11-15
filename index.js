// const array = [20, 22, 110, 12, 10, 20, 33, 40];
// Array methods :
// find()
// findIndex()
// some()
// every()
// slice()
// splice()
// map()
// forEach()
// sort()
// filter()
// console.log(array.find((value) => value > 30));
// console.log(array.find((value) => console.log(value > 70)));
// // find method iterates each array value and if the condition satisfies it returns the satisfied return value
// console.log(array);
// console.log(array.findIndex((i) => console.log(i > 70)));
// console.log(array.every((value) => value > 30));
// console.log(array.some((value) => value > 30));
// console.log(array.splice(1, 3, 20, 20));
// console.log(array);
// console.log(
//   array.map((value, i) => {
//     console.log(value);
//     console.log(i);
//     return value;
//   })
// );
// // console.log(array);
// console.log(
//   array.forEach((value, i) => {
//     console.log(value);
//     console.log(i);
//     return value;
//   })
// );
// // console.log(array);
// console.log(array.filter((value) => console.log(value > 30)));
// console.log(array.filter((value) => value < 10));
// console.log(array.sort((a, b) => a - b));

// Food is prepared
// Food is completed
// Went to school

function isFoodPreapred() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food is prepared  ");
      //   isf();
    }, 3000);
  });
}

function isFoodCompleted() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food is completed ");
      //   wts();
    }, 2000);
  });
}

function wentToSchool() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Went to school ");
    }, 1000);
  });
}
// isFoodPreapred()
//   .then((value) => {
//     console.log(value);
//     return isFoodCompleted();
//   })
//   .then((value) => {
//     console.log(value);
//     return wentToSchool();
//   })
//   .then((value) => {
//     console.log(value);
//   });
async function call() {
  try {
    const food = await isFoodPreapred();
    console.log(food);
    const eat = await isFoodCompleted();
    console.log(eat);
    const school = await wentToSchool();
    console.log(school);
  } catch (err) {
    console.log(err);
  }
}
call();
