let a=25
let c=0
for(let i=1;i<=a;i++){
    if(a%i==0)
        c++
}
if (c==2)
    console.log("The number is a prime number");
else
    console.log("The number is a composite number");