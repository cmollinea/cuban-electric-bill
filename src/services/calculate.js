export const calculate = (consumption) => {
  let n = consumption;
  let bill = 0;
  if (n > 5000) {
    bill += (n - 5000) * 20;
    n = 5000;
    console.log(bill);
  }
  if (n > 4200) {
    bill += (n - 4200) * 15;
    n = 4200;
    console.log(bill);
  }
  if (n > 3400) {
    bill += (n - 3400) * 13.95;
    n = 3400;
    console.log(bill);
  }
  if (n > 2600) {
    bill += (n - 2600) * 12.9;
    n = 2600;
    console.log(bill);
  }
  if (n > 1800) {
    bill += (n - 1800) * 11.8;
    n = 1800;
    console.log(bill);
  }
  if (n > 1000) {
    bill += (n - 1000) * 10.8;
    n = 1000;
    console.log(bill);
  }
  if (n > 700) {
    bill += (n - 700) * 9.85;
    n = 700;
    console.log(bill);
  }
  if (n > 600) {
    bill += (n - 600) * 9.45;
    n = 600;
    console.log(bill);
  }
  if (n > 500) {
    bill += (n - 500) * 9.2;
    n = 500;
    console.log(bill);
  }
  if (n > 450) {
    bill += (n - 450) * 7;
    n = 450;
    console.log(bill);
  }
  if (n > 400) {
    bill += (n - 400) * 6;
    n = 400;
    console.log(bill);
  }
  if (n > 350) {
    bill += (n - 350) * 5;
    n = 350;
    console.log(bill);
  }
  if (n > 300) {
    bill += (n - 300) * 4;
    n = 300;
    console.log(bill);
  }
  if (n > 250) {
    bill += (n - 250) * 3;
    n = 250;
    console.log(bill);
  }
  if (n > 200) {
    bill += (n - 200) * 2.46;
    n = 200;
    console.log(bill);
  }
  if (n > 150) {
    bill += (n - 150) * 1.43;
    n = 150;
    console.log(bill);
  }
  if (n > 100) {
    bill += (n - 100) * 1.07;
    n = 100;
    console.log(bill);
  }
  if (n <= 100) {
    bill += n * 0.33;
    console.log(bill);
  }

  return bill;
};
