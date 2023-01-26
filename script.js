const x = 100;
let text;
if (x>=100){
    text = 'x jest większy lub równy 100';
}
else if (x<100 && x>30){
    text = 'x jest średniakiem';
}
else{
    text = 'x jest mały';
}
console.log(text.toUpperCase());