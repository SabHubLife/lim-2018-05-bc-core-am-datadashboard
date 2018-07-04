window.computeUsersStats = (users, progress, courses) => {
    //users.forEach(user => { console.log(user.signupCohort) })
    const arrayProgress = Object.values(progress)
    for (let i = 0; i < arrayProgress.length; i++) {

        // console.table(arrayProgress[i])
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