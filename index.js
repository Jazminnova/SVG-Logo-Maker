//Imports
const inquirer = Require("inquirer");
const {shape} = require("./lib/shapes")

const response = await inquirer.prompt([{

    type: "input",
    message:"Choose a shape",
    name:"shape",
    Choices:["circle","square","triangle"]

{
    type:"input",
    message:"what shape color would you like",
    name:"shape color"

    }
    
}


}])

