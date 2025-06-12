var a=100
var b=20
var c=30
if(a>b && a>c)
{
    console.log("a is the biggest number");

}else if(b>a && b>c){
    console.log("b is the biggest number");
}else{
    
}
var a=10
var b=20
var result=a>b? "a is the biggest number":"b is the biggest number"

var a=10
var b=20
var c=30
var result=a>b && a>c?"a is the biggest number":b>a && b>c?"b is the biggest number":"c is the biggest number"
console.log(result);  

var day="morning"
switch(day){
    case "morning":
       console.log("good morning");
        break;

        case "afternoon":
            console.log("good afternoon");
            break;

            case "evening":
                console.log("good evening");
                break;
    
}