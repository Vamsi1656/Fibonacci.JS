/*let n=10
let fibonacci = [0, 1];
let i = 2;
while (i < n) {
    fibonacci [i] = fibonacci [i - 2] + fibonacci [i - 1];
    i++;
}
console.log (fibonacci); 

let n=20
let fibonacci =[0,1]
for(i=2;i<=n;i++){
     fibonacci[i]=fibonacci[i-2] + fibonacci[i-1]
}
console.log(fibonacci)*/

function printFibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
printFibonacci(10);