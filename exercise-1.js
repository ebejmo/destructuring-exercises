// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: "Nissan",
  model: "Skyline GT-R",
  country: "Japan",
  coupe: true,
};

// const manufacturer = car.manufacturer;
// const model = car.model;
// const country = car.country;
// const coupe = car.coupe;

// console.log(manufacturer, model, country, coupe);

const { country, coupe, manufacturer, model } = car;

console.log(country, coupe, manufacturer, model);

// Destructure the first, second and fifth value from
// the array. You are free to call the variables whatever
// you would like. Once you have destructured the values,
// log the variables so you know that you have destructured
// them correctly.

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [first, second, , , fifth] = values;
console.log(first, second, fifth);
