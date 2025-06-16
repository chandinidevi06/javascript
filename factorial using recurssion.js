function factotrial(num){
    if(num==0){
        return 1
    }else{
        return num+factotrial(num-1)
    }
}
console.log(factotrial(5));
