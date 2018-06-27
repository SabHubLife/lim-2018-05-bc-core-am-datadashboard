window.computeUsersStats = (users, progress, courses) => {
    const container = document.getElementById('test');
    for (const user in users) {
        const list = document.createElement('p');
        list.innerHTML = `${users[user].name}`;
        container.appendChild(list);
    }

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
console.log(search())