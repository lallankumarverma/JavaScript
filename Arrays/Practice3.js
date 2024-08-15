let companyList = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companyList);
companyList.shift();
console.log("company list after first delete = ", companyList);
companyList.splice(1,1,"Ola");
console.log("company list after Uber replace with Ola = ", companyList);
companyList.push("Amazon");
console.log("company list after push Amazon = ", companyList);