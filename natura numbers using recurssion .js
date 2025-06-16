function show(a){
    if(a > 0){
        return a + show(a - 1);
    } else {
        return a;
    }
}

console.log(show(1));