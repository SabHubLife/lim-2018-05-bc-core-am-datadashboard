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
            `<option id='${cohort.id}'>${cohort.id}</option>`
    });
};

listVenues.addEventListener('click', event => {
    mainSection.innerHTML = '';
    getData(event.target.id, '../data/cohorts.json', showCohorts);
});