console.log("Do While Loop");

count = 1;

do{
    console.log("count is ", count);
    count++;
} while(count <= 5);

count = 1;
sum = 0;

do{
    sum = sum + count;
    count++;
}while(count <= limit);

console.log("Sum of first ", limit, " number is = ", sum);