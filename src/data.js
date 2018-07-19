window.computeUsersStats = (users, progress, courses) => {
    const usersWithStats = [];
    const stats = {
        percent: null,
        exercises: {
            total: null,
            completed: null,
            percent: null,
        },
        reads: {
            total: null,
            completed: null,
            percent: null,
        },
        quizzes: {
            total: null,
            completed: null,
            percent: null,
            scoreSum: null,
            scoreAvg: null,
        }
    }
    console.log(courses)
    console.log(users)
    console.log(progress)
};

window.sortUsers = (users, orderBy, orderDirection) => {
};
window.filterUsers = (users, search) => {
};
window.processCohortData = (options) => {
  sortUsers();
  filterUsers();
  const index = options.cohort.map((course)=>{
    const indexArray = course.coursesIndex && Object.keys(course.coursesIndex).toString()
    return indexArray
    })
    computeUsersStats(options.cohortData.users,options.cohortData.progress,noDuplicate(index));
};
