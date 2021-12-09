//  ! Методы массивов (forEach, map, filter, reduce, indexOf, includes, every, some)\\

// ===================-- ! callback function это функция которая передаеться в аргументы другой функции!


// ! forEach Данный метод перебирает массив и нечего не возвращает!

// let arr = [1, 10, 20, 30, 40]
// arr.forEach((item, index, array) => {
//     if (item > 25) {
//         console.log(item);
//     }
// })


// let names = ["Maksat", "Atai", "Beksultan", "Erjan"];
// names.forEach((item, index, array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })

// let nums = [-10, 20, -55, 146, 212, -99];9
// let positiveNums = []
// nums.forEach((item) => {
//     if (item > 0) {
//         positiveNums.push(item)
//     }
// })
// console.log(positiveNums);

// nums.filter((item) => {
//     if (item > 0)
//         console.log(item);
// })


// ! map Данный метод перебирает массив и возвращает в новый массив

// let countries = ["Kyrgyzstan", "Russia", "China", "Uzbekistan"]

// let newCountries = countries.map((item, index, array) => {
//     // console.log(item.length);
//     // console.log(index);
//     // console.log(array);
//     return item.length


// })
// console.log(newCountries);

// let nums = [4, 2, 9, 6, 5];

// let newNums = nums.map((item) => {
//     return item ** 2;
// })
// console.log(newNums);

// ! filter Данный метод перебирает массив. Если в return условия выдает true, то данный item возвращает в новый массив в если false, то не возвращает

// let frameworks = ["React", "Django", "Node.JS", "Flutter"];

// frameworks.filter((item, index, array) => {
//     console.log(item);
// })



// let nums = [-10, 20, -55, 200, -42, 12]
// let negative = nums.filter((item) => {
//     return item < 0
// })
// console.log(negative);


// let shoes = [
//     {
//         name: "Nike AF-1",
//         price: 4000,

//     },
//     {
//         name: "Li-ning KX-12",
//         price: 9000,
//     },
//     {
//         name: "Adidas",
//         price: 6650,
//     },
//     {
//         name: "Puma",
//         price: 6200
//     }

// ]

// let price = shoes.filter((item) => {
//     return item.price > 6000 && item.price < 8000;
// })
// console.log(price);

// ! indexOf находит индекс первого совподающего элемента

// let arr = ["number", 10, 20, 20]

// let index = arr.indexOf(30)
// console.log(index);

// ! includes если находит то возвращает true если не найдет то false

// let data = [true, 30, false];

// let result = data.includes(30);
// console.log(result);

// ! some  
// ! every 

// let arr = [10, 20, 30, -40];

// let result = arr.every((item) => {
//     return item > 0;
// });
// console.log(result);



// ! reduce Данный метод применяет в себе callback функцию u initeValue , а функция принимает prevValue, item, index, array.

// ! Если нет второго аргумента, то prevValue равен первому аргументу а item второму. Начиная со второго круга prevValue равен тому. что вернули на предыдущем круге.Если есть второй аргумент то (initeValue), то prevValue равен initeValue, а item первому элементу массива!
// let nums = [10, 5, 22, 49];

// let sum = nums.reduce((prevValue, item, index, array) => {
//     console.log("prevValue", prevValue);
//     console.log("item", item);
//     return prevValue + item;
// })
// console.log(sum);

// let nums = [10, 2, 3];

// let sum = nums.reduce((prev, item) => {
//     return prev * item
// }, 100);
// console.log(sum);


// В массиве есть градусы по цельсию. Нужно вернуть массив с градусами по фаренгейту
let celsius = [-15, 10, 24, 36, 0, 35];

let fa = celsius.map((item) => {
    return item * 1.8 + 32
})
console.log(fa);








