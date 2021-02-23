function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));


// First, steal some fuel from the shuttle
let dontMindMe = function(fuel) {
  if (checkFuel(fuel) === 'green') {
    return fuel - 100001;
  } else if (checkFuel(fuel) === 'yellow') {
    return fuel - 50001;
  } else {
    return fuel;
  }
};

// Next, liberate some of that glorious cargo.
let justAFriend = function(items) {
  let stolenItems = [];
  stolenItems = cargoHold.splice(1, 4, 'q-tips', 'soil');
  return stolenItems;
}

// Print a receipt for the accountant.
let irs = function(fuelLevel, cargoHold) {
  let pirateBooty = justAFriend(cargoHold);
  let fuelSpoils = dontMindMe(fuelLevel);
  fuelLevel -= dontMindMe(fuelLevel);
  return `Raided ${fuelSpoils} kg of fuel from the tanks, and stole ${pirateBooty[0]} and ${pirateBooty[3]} from the cargo hold.`;
}
let receipt = irs(fuelLevel, cargoHold);
console.log('\n' + receipt);

