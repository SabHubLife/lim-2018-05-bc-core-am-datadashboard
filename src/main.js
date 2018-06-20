displayArrayUsers = (student) => {
    return `
    <table>
    <tr>
    <td>${student.id}</td>
    <td>${student.start}</td>
    <td>${student.end}</td>
    </tr>  
    </table>
    `;
};


const getJSON = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = _ => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                return callback(new Error(`HTTP error: ${xhr.status}`));
            }
            try {
                callback(null, JSON.parse(xhr.responseText));
            } catch (err) {
                callback(err);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
    console.log(typeof xhr);
    return xhr;
};

const getUsers = getJSON('../data/cohorts/lim-2018-03-pre-core-pw/users.json', (err, json) => {
    if (err) {
        // algo salió mal...
        return console.error(err);
    }
    console.log(json); // => la data!!
    return json;
});

const getProgress = getJSON('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', (err, json) => {
    if (err) {
        // algo salió mal...
        return console.error(err);
    }
    console.log(json); // => la data!!

});

const getCohorts = getJSON('../data/cohorts.json', (err, json) => {
    if (err) {
        // algo salió mal...
        return console.error(err);
    }
    console.log(json); // => la data!!
    document.getElementById('conect').addEventListener('click', () => {
        document.getElementById("showusers").innerHTML = `
        <h1>El arreglo Users tiene ${json.length} objetos</h1>
        <div>${json.map(displayArrayUsers).join('')}</div>
        `;
    });
<<<<<<< HEAD
});

const users = getUsers;
const progress = getProgress;
const courses = getCohorts;
const options = {};
const orderBy = () => {};
const orderDirection = () => {};
const search = () => {};

=======
};

let myRequest2 = new XMLHttpRequest();
myRequest2.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
myRequest2.onload = function() {
    let progress = JSON.parse(myRequest2.responseText);
    //document.getElementById('user').innerHTML = JSON.stringify(progress);
    console.log(progress);
};
>>>>>>> 4660f03feb876bed737c3dbbc22452afbe2c7bb7


console.log(users);
console.log(progress);
console.log(courses);