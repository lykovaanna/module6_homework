function checkNums(num) {
    if ((num < 2) || (num > 1000)){
      return 'Данные не верны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
            return 'Это составное число';
            }
        } return 'Это простое число';
    }
  }
  
  console.log(checkNums(num));