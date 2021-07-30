var priceInString = "65";
var priceInString2 = "56.66";
var priceInInteger = parseInt(priceInString);
var priceInFloat = parseFloat(priceInString2);
console.log(priceInInteger);
console.log(priceInFloat);

//string addition
var firstName = "Biplob";
var middleName = "Hossain";
var lastName = "Sobuj";
var fullName = firstName + " " + middleName +" " + lastName;
console.log(fullName);

// special one
var fixingDecimalPoint = 4.88483;
console.log(fixingDecimalPoint.toFixed(3));//it gives string  