function compoundInterest(principle, time, rateOfInterest) {
  let interest = (principle * time * rateOfInterest) / 100;
  return interest;
}

let principle = 15000;
let time = 4;
let rateOfInterest = 12;
let interest = compoundInterest(principle, time, rateOfInterest);
console.log(interest);
