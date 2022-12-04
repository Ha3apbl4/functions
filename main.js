//function declaration

// feedAnimal('Себек') ДОЗВОЛЯЄТЬСЯ!!!
// Можна викликати функцию до її визначення

// function feedAnimal(animalName = 'Gyf') {
// 	console.log(`Тварина ${animalName} було нагодовано`)
// }
// feedAnimal('Себек')
// ===========================================================================================

//function expression

// feedAnimal()НЕМОЖНА!!!
// Не можна викликати функцию до її визначення

// const feedAnimal = function (animalName = 'Gyf') {
// 	console.log(`Тварина ${animalName} було нагодовано`)
// }
// feedAnimal()
// ==========================================================================================

//стрілочна функция

// feedAnimal() НЕМОЖНА!!!
// Не можна викликати функцию до її визначення

// const feedAnimal = (animalName = 'Gyf') => {
// 	console.log(`Тварина ${animalName} було нагодовано`)
// }
// feedAnimal('себек')
