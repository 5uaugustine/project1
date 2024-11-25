const addnumbers=(a,b)=>{
    var sum
    sum=a+b;
    return sum;
    

}
console.log(addnumbers(10,20));
//arrays
const seasons=['winter','summer','rainy']
/*console.log(seasons)
console.log(seasons[1])
for(i=0;i<seasons.length;i++){
    console.log(seasons[i])

}*/
seasons.forEach(myfunction);
function myfunction(i){
console.log(i)
}
let numbers=[10,20,30,40]
let doublenumbers=numbers.map((num)=>num*2)
console.log(doublenumbers)
    

