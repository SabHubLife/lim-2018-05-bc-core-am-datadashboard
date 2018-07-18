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

const showUsers = (user, dataUsers) => {
    /*const cohortID = document.getElementById('${cohort.id}')
                      cohortID.addEventListener('change', event => {
                          console.log(event);
                          getData(event.target.id, '../dat/cohorts/lim-2018-03-pre-core-pw/users.json', showUsers)

                      })*/
}

const showCohorts = (city, dataCohorts) => {
    mainSection.innerHTML = `<select class="form-control" id='select'></select>`
    const cohortByCity = dataCohorts.filter(cohort => {
        return cohort.id.indexOf(city) !== -1;
    })
    cohortByCity.forEach(cohort => {
        const options = document.getElementById('select')
        options.innerHTML +=
<<<<<<< HEAD
            `<option id='${cohort.id}'>${cohort.id}</option>`
=======
            `<option id"${cohort.id}"=>${cohort.id}</option>`
>>>>>>> 3f45fc7e6a2dfd0b8d8bbd0e041bed4d95627e8b
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