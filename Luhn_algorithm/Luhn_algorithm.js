function isValidLuhnNumber(string) {
  return validateLuhnNumber(removeSpace(string));
}

// remove spaces, .replace()
function removeSpace(string) {
  return string.replace(/\s/g, "");
}

function validateLuhnNumber(string) {
  // .split()
  let array = string.split("");
  // Validating the string,
  // length > 1;
  if (array.length < 2) {
    return false;
  }
  // check if no non numeric
  let parseArray = [];
  for (let index = 0; index < array.length; index++) {
    const parseValue = parseInt(array[index]);
    if (isNaN(parseValue)) {
      return false;
    }
    parseArray.push(parseValue);
  }
  // double the compute the sum
  for (let i = parseArray.length - 2; i >= 0; i = i - 2) {
    let doubleValue = parseArray[i] * 2;
    if (doubleValue > 9) {
      doubleValue -= 9;
    }
    parseArray[i] = doubleValue;
  }
  let sum = 0;
  for (let index = 0; index < parseArray.length; index++) {
    sum += parseArray[index];
  }
  console.log(sum);
  // check the sum is dividable by 10
  if (sum % 10 != 0) {
    return false;
  }
  return true;
}

// console.log(isValidLuhnNumber("h   el lo1"));
// console.log(isValidLuhnNumber("12345"));
// console.log(isValidLuhnNumber("1"));
// console.log(isValidLuhnNumber("4539 3195 0343 6467"));
// console.log(isValidLuhnNumber("8273 1232 7352 0569"));

/** using reduce */
function neatWay(string) {
    // remove spaces
  let spaceRemoved = string.replace(/\s/g, "");
  // check length and if there is non numeric characters
  if (spaceRemoved.length < 2 || spaceRemoved.match(/\D+/g)) {
    return false;
  }

  let sum = spaceRemoved
    .split("")
    .reverse()
    .reduce((total, value, index) => {
      const parseValue = parseInt(value);
      if (index % 2 == 1) {
        const doubleValue = parseValue * 2;
        return total + (doubleValue > 9 ? doubleValue - 9 : doubleValue);
      } else {
        return total + parseValue;
      }
    }, 0);
  console.log(sum);
  if (sum % 10 != 0) {
    return false;
  }
  return true;
}
console.log(neatWay("h   el lo1"));
console.log(neatWay("12345"));
console.log(neatWay("4539 3195 0343 6467"));
console.log(neatWay("8273 1232 7352 0569"));
