const profileDataArgs = process.argv.slice(2, process.argv.length);

// const generatePage = (userName, githubName) => {
//     return `
//         name: ${userName}
//         github: ${githubName}
//     `;
// };
// console.log(generatePage('asia', 'asiajcrew'));






const printProfileData= profileDataArr => {
    for (let i=0; i< profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
console.log("==============")
profileDataArr.forEach(profileItem => console.log(profileItem));
}
printProfileData(profileDataArgs);