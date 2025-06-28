var str="ajay"
var vowels=["a","e","i","o","u"]
var count=0
for(let i=0; i<str.length; i++)
{
    for (j=0; i<vowels.length; j++)
    {
        if(str[i]==vowels[j])
        {
            count++
            console.log(str[i],vowels[j]);
        }
    }
}
console.log(count); 