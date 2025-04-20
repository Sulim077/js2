function calculateSavings() {
  let total = 0;
  let receivingMoney = 1000;

  for (let age = 13; age <= 25; age++) {
    total += receivingMoney;
    receivingMoney += 1000;
  }
  return total;
}

const result = calculateSavings();
console.log(`Василий накопит: ${result} руб.`);

function isPalindrome(str) {
  const amendmentString = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, "");
  let box = "";
  for (let i = amendmentString.length - 1; i >= 0; i--) {
    box += amendmentString[i];
  }
  return box === amendmentString;
}
console.log(isPalindrome("Поезд"));
console.log(isPalindrome("Топот"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Имя"));
