const listVenues = document.querySelector('#venues');
const mainSection = document.getElementById('cohorts');



const getData = (str, url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.addEventListener('load', event => {
        if (event.target.readyState === 4) {
            if (event.target.status !== 200) {
                return console.error(new Error(`HTTP error: ${event.target.status}`))
            } else {
                const response = JSON.parse(event.target.responseText);
                callback(str, response);
            }
        }
    });
    xhr.send();
};


const showCohorts = (city, dataCohorts) => {
    mainSection.innerHTML = `<select class="form-control" id="select"></select>`
    const cohortByCity = dataCohorts.filter(cohort => {
        return cohort.id.indexOf(city) !== -1;
    })
    cohortByCity.forEach(cohort => {
        const options = document.getElementById('select')
        options.innerHTML +=
            `<option id"${cohort.id}"=>${cohort.id}</option>`
    });
};

const showProgress = (cohortName,dataProgress)=>{

};

const showUsers = (cohortName, dataUsers)=>{

};


listVenues.addEventListener('click', event => {
    mainSection.innerHTML = '';
    getData(event.target.id, '../data/cohorts.json', showCohorts);
});

mainSection.addEventListener('change', event =>{
    debugger
    getData(event.target.id, '../data/cohorts/lim-2018-03-pre-core-pw/users.json', showUsers);
});