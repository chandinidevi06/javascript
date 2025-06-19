const originalCode = `
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("chandu");
`
const clonedCode = originalCode.slice();  
eval(clonedCode); 
