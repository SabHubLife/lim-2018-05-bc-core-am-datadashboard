let myRequest1 = new XMLHttpRequest();
myRequest1.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
myRequest1.onload = function() {
    let users = JSON.parse(myRequest1.responseText);
    //document.getElementById('user').innerHTML = JSON.stringify(users);
    console.log(users);
};

let myRequest2 = new XMLHttpRequest();
myRequest2.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
myRequest2.onload = function() {
    let progress = JSON.parse(myRequest2.responseText);
    //document.getElementById('user').innerHTML = JSON.stringify(progress);
    console.log(progress);
};

let myRequest3 = new XMLHttpRequest();
myRequest3.open('GET', '../data/cohorts.json');
myRequest3.onload = function() {
    let cohorts = JSON.parse(myRequest3.responseText);
    //document.getElementById('user').innerHTML = JSON.stringify(cohorts);
    console.log(cohorts);
};

myRequest1.send();
myRequest2.send();
myRequest3.send();

let users = myRequest1;
let progress = myRequest2;
let cohorts = myRequest3;

window.onload = () => {
    document.getElementById("showusers").innerHTML = `${myRequest1.onload}`
};
