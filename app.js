const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25,
  quantity: 0

}, {
  name: 'Peanuts',
  image: 'https://images.unsplash.com/photo-1546545584-c03ac781caaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhbnV0c3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
  price: .25,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}, {
  name: 'Cup',
  image: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlJTIwY3JlYW0lMjBjdXB8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60',
  price: 3,
  quantity: 0
}]
// SECTION functions for toppings
function addSprinklesToOrder() {
  console.log('added sprinkles to order');
  let sprinkle = toppings.find(toppingItem => toppingItem.name == 'Sprinkles')
  sprinkle.quantity++
  console.log(sprinkle);
}
function addChocolateToOrder() {
  console.log('added chocolate to order');
  let chocolate = toppings.find(toppingItem => toppingItem.name == 'Chocolate Chips')
  chocolate.quantity++
  console.log(chocolate);
}
function addPeanutsToOrder() {
  console.log('added peanuts to order');
  let nuts = toppings.find(toppingItem => toppingItem.name == 'Peanuts')
  nuts.quantity++
  console.log(nuts);
}

// SECTION functions for containers
function addCupToOrder() {
  console.log('added cup');
  let cup = containers.find(container => container.name == 'Cup')
  cup.quantity++
  console.log(cup);
}
function addConeToOrder() {
  console.log('added cone');
  let cone = containers.find(container => container.name == 'Waffle Cone')
  cone.quantity
  console.log(cone);
}
function addWaffleBowlToOrder() {
  console.log('added waffle bowl');
  let bowl = containers.find(container => container.name == 'Waffle Bowl')
  bowl.quantity++
  console.log(bowl);
}

// SECTION functions for flavors
function addCookieDough() {
  console.log('scoop of cookie dough');
  let flavor = iceCream.find(theFlavor => theFlavor.name == 'Cookie Dough')
  flavor.quantity++
  console.log(flavor);
}
function addVanilla() {
  console.log('scoop of vanilla');
  let flavor = iceCream.find(theFlavor => theFlavor.name == 'Vanilla')
  flavor.quantity++
  console.log(flavor);
}
function addStrawberry() {
  console.log('scoop of strawberry');
  let flavor = iceCream.find(theFlavor => theFlavor.name == 'Strawberry')
  flavor.quantity++
  console.log(flavor);
}
function drawCart() {
  let nameElement = document.getElementById('name')
  iceCream.forEach(theName => {

  })

}
