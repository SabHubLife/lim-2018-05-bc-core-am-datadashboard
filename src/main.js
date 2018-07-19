const optionObj = {
  orderBy: '',
  orderDirection: 'ASC',
  search: '',
  cohort: null,
  cohortData: {
    users: null,
    progress: null,
  },
};

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

const showProgress = (prog, dataProg) => {
  optionObj.cohortData.progress = dataProg;
  processCohortData(optionObj);
};

const showUsers = (user, dataUsers) => {
  optionObj.cohortData.users = dataUsers;
  /* mainSection.innerHTML = '';
  dataUsers.forEach(userData=>{
  mainSection.innerHTML+=`<div class='col-md-4'><div>${userData.name}</div><div id='${userData.id}'></div></div>`
  }); */
  getData(user, '../data/cohorts/lim-2018-03-pre-core-pw/progress.json', showProgress);
};

const showCohorts = (city, dataCohorts) => {
  optionObj.cohort = dataCohorts;
  mainSection.innerHTML = `<select style ="border-color:  rgb(0, 0, 0); box-shadow: 0.2em 0.2em  rgb(0, 0, 0);" class="form-control" id='select' name='select'></select>`
  const cohortByCity = dataCohorts.filter(cohort => {
    return cohort.id.indexOf(city) !== -1;
  })
  cohortByCity.forEach(cohort => {
    const optionObjView = document.getElementById('select')
    optionObjView.innerHTML +=
      `<option style ="background: rgb(255, 229, 33);"=>${cohort.id}</option>`
  });
  const selectedCohort = document.getElementById('select');
  selectedCohort.addEventListener('change', event => {
    getData(event.target.value, '../data/cohorts/lim-2018-03-pre-core-pw/users.json', showUsers)
  })
};

listVenues.addEventListener('click', event => {
  mainSection.innerHTML = '';
  getData(event.target.id, '../data/cohorts.json', showCohorts);
});

const noDuplicate = (arr) => {
  return arr.filter((item, index) => {
    return item && arr.indexOf(item) === index;
  });
};


