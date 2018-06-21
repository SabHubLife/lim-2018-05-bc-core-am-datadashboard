const getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const reqObj = JSON.parse(request.response);
            callback(reqObj);
        }
    };
    request.open('GET', url, true);
    request.send();
};


const getUsers = () => {
    getData('../data/cohorts/lim-2018-03-pre-core-pw/users.json', callback = (data) => {
        document.getElementById('conect users').addEventListener('click', () => {
            document.getElementById('test').innerHTML = `
            <h1>El arreglo Users tiene ${data.length} objetos</h1>
            <div>${data.map(displayArrayUsers).join('')}</div>
            `;
        });
        console.log(data);
        return data;
    });
};

const getProgress = () => {
    getData('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', callback = (data) => {
        console.log(data);
        return data;
    });
};

const getCohorts = () => {
    getData('../data/cohorts.json', callback = (data) => {
        console.log(data);
        return data;
    });
};
getUsers();
getProgress();
getCohorts();

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



//getData('../data/cohorts/lim-2018-03-pre-core-pw/progress.json',callback);
//getData('../data/cohorts.json',callback);

/*

//segunda parte

displayArrayCohorts = (student) => {
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

const getJSON = (url, callback) => {
    const request = new XMLHttpRequest();

    request.onload = _ => {
        if (request.readyState === 4) {
            if (request.status !== 200) {
                return callback(new Error(`HTTP error: ${request.status}`));
            }
            try {
                callback(null, JSON.parse(request.responseText));
            } catch (err) {
                callback(err);
            }
        }
    };

    request.open('GET', url, true);
    request.send(null);
    return request;
};




const getUsers = getJSON('../data/cohorts/lim-2018-03-pre-core-pw/users.json', (err, json) => {
    if (err) {
        return console.error(err);
    }
    console.log(json);
    document.getElementById('conect users').addEventListener('click', () => {
        document.getElementById('test').innerHTML = `
        <h1>El arreglo Users tiene ${json.length} objetos</h1>
        <div>${json.map(displayArrayUsers).join('')}</div>
        `;
    });
});


const getCohorts = getJSON('../data/cohorts.json', (err, json) => {
    if (err) {
        return console.error(err);
    }
    console.log(json);
    document.getElementById('conect cohorts').addEventListener('click', () => {
        document.getElementById('test').innerHTML = `
        <h1>El arreglo Cohorts tiene ${json.length} objetos</h1>
        <div>${json.map(displayArrayCohorts).join('')}</div>
        `;
    });
});

const getProgress = getJSON('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', (err, json) => {
    if (err) {
        return console.error(err);
    }
    console.log(json);
    document.getElementById('conect progress').addEventListener('click', () => {
        document.getElementById('test').innerHTML = `
        <h1>El objeto Progress tiene ${json.length} objetos</h1>
        <div>${json.map(displayArrayUsers).join('')}</div>
        `;
    });
});
const users = getUsers;
const progress = getProgress;
const courses = getCohorts;
const options = {};
const orderBy = () => {};
const orderDirection = () => {};
const search = () => {};

<<<<<<< HEAD


<<<<<<< HEAD
console.log(users);
console.log(progress);
console.log(courses);
=======
myRequest1.send();
myRequest2.send();
myRequest3.send();
>>>>>>> 14719e8e6c864875a56b1c2c4c1943d26e36db0f
=======
const keyProgress = Object.keys(getProgress);
console.log(keyProgress);
*/