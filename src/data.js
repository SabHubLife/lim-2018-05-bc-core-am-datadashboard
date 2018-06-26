window.computeUsersStats = (users, progress, courses) => {
    // for (const user of users) { console.log(user.name);}
    let file = users.map(userWhitStats => {
          try {
            userWhitStats.stats = {
              percent: coursesAverage(progress[userWhitStats.id], courses),
              exercises: {
                total: exercisesTotal(progress[userWhitStats.id], courses),
                completed: completenessOfExcercises(progress[userWhitStats.id], courses),
                percent: completenessOfExcercises(progress[userWhitStats.id], courses) / exercisesTotal(progress[userWhitStats.id], courses) * 100,
              },
              reads: {
                total: readingTotal(progress[userWhitStats.id], courses),
                completed: completenessOfReadings(progress[userWhitStats.id], courses),
                percent: completenessOfReadings(progress[userWhitStats.id], courses) / readingTotal(progress[userWhitStats.id], courses) * 100,
              },
              quizzes: {
                total: quizzesTotal(progress[userWhitStats.id], courses),
                completed: completenessOfQuizzes(progress[userWhitStats.id], courses),
                percent: completenessOfQuizzes(progress[userWhitStats.id], courses) / quizzesTotal(progress[userWhitStats.id], courses) * 100,
                scoreSum: sumScore(progress[userWhitStats.id], courses),
                scoreAvg: scoreAverage(progress[userWhitStats.id], courses) / completenessOfQuizzes(progress[userWhitStats.id], courses) * 100,
              }
            }
            return userWhitStats;
          } catch (error) {
            return {};
          }
        
          })


          const courses = ["intro"];
          const dataInfo = () => {
              //se utiliza fetch - más actualizado  , llamadas sucesivas
              fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json', {
                  method: 'GET'
                })
                .then((response) => {
                  if (response.status == 200) {
                    return response.json();
                  } else {
                    console.log('Error')
                  }
                  //}).then((jsonResponse) => {
                  // data1= =  jsonResponse;
                  // return fetch(('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                })
                .then((users) => {
                  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', {
                      method: 'GET'
                    })
                    .then((response) => {
                      if (response.status !== 200) {
                        console.log('Error')
                      }
                      return response.json();
                    })
                    .then((progress) => {
                      computeUsersStats(users, progress.courses);
                    })
                })




              //};

              //  window.sortUsers = (users, orderBy, orderDirection) => {

              //  };
              //  window.filterUsers = (users, search) => {


              //  };


              //  console.log(computeUsersStats.progress);

              /*
              computeUsersStats.courses.forEach(cohorts) => {
                          console.log(cohorts);

                          processCohortData = (options) => {

                          };
              };
              */
