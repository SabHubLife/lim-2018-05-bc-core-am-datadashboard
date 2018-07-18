const listVenues = document.querySelector('#venues');
const mainSection = document.getElementById('cohorts');

const options = {
  cohort: null,
  orderBy: '',
  orderDirection: 'ASC',
  search: '',
  cohortData: {
    users: null,
    progress: null,
  },
};


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

const showProgress=(prog,dataProg)=>{
  options.cohortData.progress=dataProg;
  console.log(dataProg)
  console.log(prog)
};

const showUsers = (user, dataUsers) => {
options.cohortData.users=dataUsers;
mainSection.innerHTML = '';
dataUsers.forEach(userData=>{
mainSection.innerHTML+=`<div class='col-md-4'>${userData.name}</div>`
});
getData(user,'../data/cohorts/lim-2018-03-pre-core-pw/progress.json', showProgress);
};

const showCohorts = (city, dataCohorts) => {
  mainSection.innerHTML = `<select style ="border-color:  rgb(0, 0, 0); box-shadow: 0.2em 0.2em  rgb(0, 0, 0);" class="form-control" id='select' name='select'></select>`
  const cohortByCity = dataCohorts.filter(cohort => {
    return cohort.id.indexOf(city) !== -1;
  })
  cohortByCity.forEach(cohort => {
    const optionsView = document.getElementById('select')
    optionsView.innerHTML +=
      `<option style ="background: rgb(255, 229, 33);"=>${cohort.id}</option>`
  });
  const selectedCohort = document.getElementById('select');
  selectedCohort.addEventListener('change', event => {
  getData(event.target.value,'../data/cohorts/lim-2018-03-pre-core-pw/users.json',showUsers)
  })
};

listVenues.addEventListener('click', event => {
  mainSection.innerHTML = '';
  getData(event.target.id, '../data/cohorts.json', showCohorts);
});


