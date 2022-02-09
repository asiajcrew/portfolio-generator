const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-templates.js');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
     
//     console.log('Portfolio complete! Check out index.html to see the output!');
//  });

const promptUser= () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please neter your github username');
                    return false
                }
            }
        },
        {
            type: 'inout',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ===================
    Add a new project
    ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true
                } else {
                    console.log('Please enter the project name');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true
                } else {
                    console.log('Please provide a description for the project');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHUb link to your project. (required)',
            validate: projectGithubLink => {
                if (projectGithubLink) {
                    return true
                } else {
                    console.log('Please enter the link to the github project');
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
    });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
   console.log(portfolioData);
});