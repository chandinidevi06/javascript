function naturalnumber(num){
    if(num>0){
        return num+naturalnumber(num-1)
    }else{
        return num
    }
}
console.log(naturalnumber(5));

