window.computeUsersStats = (users, progress, courses) => {

};
window.sortUsers = (users, orderBy, orderDirection) => {

}
window.filterUsers = (users, search) => {
    let student = users.filter(user => {
        const getName = user.stats.name;
        return getName.toUpperCase().indexOf(search.toUpperCase()) != -1;
    });
    return student;
}
window.processCohortData = (options) => {
    let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, 'intro');
    students = sortUsers(students, options.orderBy, options.orderDirection);
    if (options.search != '') {
        students = filterUsers(students, options.search);
    } else {
        students = sortUsers(students, options.orderBy, options.orderDirection);
    }
    return students;
}