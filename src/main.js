/*let myRequest = new XMLHttpRequest();
myRequest.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
myRequest.onload = function () {
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData);
};
myRequest.send();
*/
let myRequest1 = new XMLHttpRequest();
myRequest1.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
let users = JSON.parse(myRequest1.responseText);
console.log(users);