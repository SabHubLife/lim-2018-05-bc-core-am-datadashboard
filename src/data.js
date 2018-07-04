window.computeUsersStats = (users, progress, courses) => {
<<<<<<< HEAD
    const exercisesTotal=(progress,courses) =>{
      const count = 0;
      courses.map(intro=>{
      const unitsProgress= Object


      });
      const cont = 0;
      courses.map(a => {
      const unitsProgress= Object.keys(progress[a].units);
       unitsProgress.map(nameUnits =>{
      //const arrayNameUnits= object.keys(progress[a].units[nameUnits].parts);
      const arrayNameUnits= unitsProgress.nameUnits;
        arrayNameUnits.map(nameParts ={
      const objecttExercises = progress[a].units[nameUnits].parts[nameParts];
          if (objecttExercises.hasOwnProperty('exercises')){
            const nameExercises = objecttExercises.exercises ;
              cont += object.keys(nameExercises).length;
          }
        });
       });
      });return cont
    } 
  } 


    /*const completenessOfExcercises=(progress,courses) =>{
      const cont = 0;
      courses.map(a => {
      const unitsProgress= object.keys(progress[a].units);
       unitsProgress.map(nameUnits =>{
        const arrayNameUnits= object.keys(progress[a].units[nameUnits].parts);
        arrayNameUnits.map(nameParts ={
        const objecttExercises = progress[a].units[nameUnits].parts[nameParts];
          if (objecttExercises.hasOwnProperty('exercises'){
          const exercisesFinished = object.keys(objectExercises.exercises);
          exercisesFinished.map(completenessOfExcercises =>{
            const completenessOfExcercises=objecttExercises.exercises[completenessOfExcercises].completed;
            if(exercises ==1){
              cont +
            }
          )}
          )}
        });
       });
      });return cont*/



    const file = users.map(userWhitStats => {
          try {
            userWhitStats.stats = {
              percent: coursesAverage(progress[userWhitStats.id],intro.percent),
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
          } catch (error) {
            return {};
            }
    })
    return file;
    console.log (file);
/* --------------------------------------------------------------------------------------------
let listUsuarioComputerUser = [];

window.computeUsersStats = (users, progress, courses) => {
    users.map(usuario => {
        const UsuarioNuevo = NuevoUsuarioStats(usuario, progress[usuario.id], courses);
        listUsuarioComputerUser.push(UsuarioNuevo);
    });
    return listUsuarioComputerUser;    
}
//console.log(listUsuarioComputerUser) 

const NuevoUsuarioStats = (usuario, progress, courses) => {
    let nameUser = usuario.name;
    let usersWithStats = {}
    usersWithStats.stats = {
        percent: computerUserPercent(progress, courses),
        exercises: computerExercises(progress, courses),
        reads: computerUsersRead(progress, courses),
        quizzes: computerUserQuizz(progress, courses),
    }
    usersWithStats.name = nameUser;
    return usersWithStats;
}
const computerUserPercent = (progress, courses) => {
    try {
        return progress[courses].percent;
    } catch (error) {
        return 0;
    }
}
const computerExercises = (progress, courses) => {
    let cont = 0;
    let contComplet = 0;
    try {
        courses.map((curso) => {
            const valorUnits = Object.keys(progress[curso].units);
            
            valorUnits.map((nombreUnits) => {
             
                const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
               
                valorParts.map((nombreParts) => {
                    const valorExcercises = progress[curso].units[nombreUnits].parts[nombreParts];
                   
                    if (valorExcercises.hasOwnProperty('exercises')) {
                        const nombreExercises = valorExcercises.exercises;
                        cont += Object.keys(nombreExercises).length;
                        
                        const valorCompletado = Object.keys(valorExcercises.exercises);
                        //console.log(valorCompletado) 
                        valorCompletado.map((nombreExercises) => {
                            //console.log (nombreExercises)
                            const valorCompleted = progress[curso].units[nombreUnits].parts[nombreParts].exercises[nombreExercises].completed;
                            //console.log (valorCompleted)
                            if (valorCompleted == 1) {
                                contComplet += valorCompleted;
                            }
                        });
                    }
                });


            });
        });
    } catch (error) {
        let exercises = {
            total: 0,
            completed: 0,
            percent: 0,
        }

        return exercises;

    }

    let exercises = {
        total: cont,
        completed: contComplet,
        percent: (contComplet / cont) * 100,
    }
    return exercises;


};




*/




    
         // const courses = ["intro"];
        //  const dataInfo = () => {
              //se utiliza fetch - más actualizado  , llamadas sucesivas
             // fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json', {     method: 'GET'
              //  })
               // .then((response) => {
                 // if (response.status == 200) {
                   // return response.json();
                 // } else {
                 //   console.log('Error')
                 // }
                  //}).then((jsonResponse) => {
                  // data1= =  jsonResponse;
                  // return fetch(('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
            //    })
              //  .then((users) => {
                //  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', {
                  //    method: 'GET'
                   // })
                   // .then((response) => {
                    //  if (response.status !== 200) {
                      //  console.log('Error')
                     // }
                     // return response.json();
                   // })
                   // .then((progress) => {
                     // computeUsersStats(users, progress.courses);
                   // })
              //  })




              //};

              //  window.sortUsers = (users, orderBy, orderDirection) => {

              //  };
              //  window.filterUsers = (users, search) => {


              //  };


              //  console.log(computeUsersStats.progress);

              
              //computeUsersStats.courses.forEach(cohorts) => {
                //          console.log(cohorts);

                  //        processCohortData = (options) => {

                    //      };
             // }; 
=======
    //users.forEach(user => { console.log(user.signupCohort) })
    const arrayProgress = Object.values(progress)
    for (let i = 0; i < arrayProgress.length; i++) {
        return arrayProgress[i];
        //console.table(arrayProgress[i])
        // console.table(Object.getOwnPropertyNames(progress))
        // console.table(Object.getOwnPropertyNames(progress))

    }
    users.forEach(element => {
        //element.stats = 'hello'
        //console.table(element)
    });
    courses.forEach(element => {
        //element.stats = 'hello'
        //   console.table(element)
    });
    if (Object.getOwnPropertyNames(progress).values(progress)) {

<<<<<<< HEAD
    }
};
/*
        users.forEach(element => {
            element.stats=arrayProgress.intro
            console.log(arrayProgress[0])
            });
   console.log(users)  
   */
// console.log(Object.values(progress))
/* const container = document.getElementById('test');
    for (const user in users) {
        const list = document.createElement('p');
        list.innerHTML = `${users[user].name}`;
        container.appendChild(list);
    }
*/


window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};
window.processCohortData = (options) => {
    for (option of options) {
        console.log(option.id)
    };
    let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
    students = sortUsers(students, options.orderBy, options.orderDirection);
    if (options.search !== '') {
        students = filterUsers(users.search);
    }
    return students;
};

const search = () => {
    const newUsers = users.filter((user) => {
        return user.id;
    })
    return newUsers;
}
=======
};
>>>>>>> cd52003cd1a61141f46f0261a6fbaaf4f232bb77
>>>>>>> 6283c890b422bc62d6aa532933388640d912a598
