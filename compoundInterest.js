function compoundInterest(principle, time, rateOfInterest) {
  let interest = principle * (Math.pow((1 + (rateOfInterest / 100)), time) - 1);
  return interest;
}

let principle = 2000;
let time = 3;
let rateOfInterest = 5;
let interest = compoundInterest(principle, time, rateOfInterest);

console.log(interest.toFixed(2));
