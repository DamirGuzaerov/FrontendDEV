function GetMinCount(n){
    let banknotes = [1000,500,200,100,50];
    let sum = 0;

    for(let i = 0; i < banknotes.length(); i++){
        for(let j = i;j<banknotes.length();j++){
            if(sum+banknotes[j]>n) continue;
            else sum+=banknotes[j];
        }
    }

    //НЕ УСПЕЛ
}