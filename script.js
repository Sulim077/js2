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
console.log(
  `Слово 'Поезд' ${
    isPalindrome("Поезд") ? "является" : "не является"
  } палиндромом`
);
console.log(
  `Слово 'Топот' ${
    isPalindrome("Топот") ? "является" : "не является"
  } палиндромом`
);
console.log(
  `Число '12321' ${
    isPalindrome("12321") ? "является" : "не является"
  } палиндромом`
);
console.log(
  `Слово 'Имя' ${isPalindrome("Имя") ? "является" : "не является"} палиндромом`
);

