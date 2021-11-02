function isAnnagrams(first,second){
    firstArr = first.split("").sort();
    secondArr = second.split("").sort();
    for (i = 0; i < y.length; i++) {
      if(firstArr.length == secondArr.length) 
        if (firstArr[i] == secondArr[i]) return true;
        else return false;
      else {
          return false;
      }
    }
}