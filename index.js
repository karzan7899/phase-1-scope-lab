var customerName = 'bob';
var bestCustomer;
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = "james"
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not james";
}