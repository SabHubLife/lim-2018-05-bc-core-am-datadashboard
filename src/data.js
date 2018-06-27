window.computeUsersStats = (users, progress, courses) => {
    const arrayProgress = Array.from(Object.values(progress))
    for (let i = 0; i < arrayProgress.length; i++) {
        const element = arrayProgress[i].values
        console.log(element)
    }
    users.forEach(element => {
        element.stats=''
    });


   
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
};



window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};
window.processCohortData = (options) => {
    for (option of options){   
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
