function fizzyDrink(canSize) {
    let a = 3;
    let b = 5;
    if (canSize % a == 0 && canSize % b == 0) {
      console.log("fizzyDrink", (canSize), "--> Semi-Fizzy");
      return;
    }
    else if (canSize % a == 0) {
      console.log("fizzyDrink", (canSize), "--> Fizzy");
      return;
    }
    else if (canSize % b == 0) {
      console.log("fizzyDrink", (canSize), "--> Non-Fizzy");
      return;
    }
    else {
      console.log("fizzyDrink", (canSize), "-->", (canSize));
      return;
    }
}
fizzyDrink(process.argv[2] || Math.floor(Math.random() * 10001));