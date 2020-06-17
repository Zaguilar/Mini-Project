let fs = require("fs");
let inquirer = require("inquirer");
const util = requier("util");

const writeFileAsync = util.promisify(fs.writeFile);
// name, location, bio, linkedIn url, and github url
// job 

function promptUser(){
    return inquirer.prompt(
        [
            {
                type: "input",
                message: "What's your name?",
                name: "name"
            },
            {
                type: "input",
                message: "Where did you grow up?",
                name: "location"
            },
            {
                type: "input",
                message: "What's your favorite film?",
                name: "favFilm"
            },
            {
              type: "input",
              message: "What's your favorite hobby?",
              name: "favHobby" 
            },
            {
              type: "input",
              message: "What's your LinkedIn URL?",
              name: "linkedInUrl"  
            },
            {
                type: "input",
                message: "What's your Github URL?",
                name: "gitHubUrl"
            }
        ]
    );
}

inqPromise = promptUser();
inqPromise.then(function(userInput) {

})