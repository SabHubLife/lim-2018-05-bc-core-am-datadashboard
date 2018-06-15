/*
const callData= ()=> {
    let users = JSON.parse(req.responseText);
    document.getElementById("showusers").innerHTML = `El arreglo tiene ${users.length} objetos`;
};

const req = (URL, callData)=>{
    const req= new XMLHttpRequest();
    req.open('GET',URL,true);
    req.onload = callData;
    req.send();
};

const req1 = ()=>{req('../data/cohorts/lim-2018-03-pre-core-pw/users.json',callBack)};
*/




/*
req.open('GET', URL, true);
req.onload = ()=> {
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(req.responseText);
     else
      console.log("Error loading page\n");
  }
};
req.send(null);
req.open('GET','../data/cohorts/lim-2018-03-pre-core-pw/users.json');

document.getElementById("showusers").innerHTML = `El arreglo tiene ${req.length} objetos`
*/


displayArrayUsers = (student) => {
    return `
    <table>
    <tr>
    <td>${student.name}</td>
    <td>${student.signupCohort}</td>
    <td>${student.timezone}</td>
    </tr>  
    </table>
    `;
};

const myRequest1 = new XMLHttpRequest();
myRequest1.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
myRequest1.onload = () => {
    const users = JSON.parse(myRequest1.responseText);
    console.log(users);
    document.getElementById('conect').addEventListener('click', () => {
        document.getElementById("showusers").innerHTML = `
        <h1>El arreglo Users tiene ${users.length} objetos</h1>
        <div>${users.map(displayArrayUsers).join('')}</div>
        `;
    });
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