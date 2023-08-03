function loadNumsWithTimer(a, b) {
    let timer = setInterval(function() {
      console.log(a);
      if ( a === b) {
        clearInterval(timer);
      }
      a++;
    }, 1000);
  }
  
  loadNumsWithTimer(5,15);