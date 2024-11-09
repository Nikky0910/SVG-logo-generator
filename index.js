const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Enter three letters:",
        name: "text",
        validate: (text) => (text.length == 3 ? true : false),
    },

    {
        type: "input",
        message: "Enter a text color:",
        name: "textColor"
    },

    {
        type: "input",
        message: "Enter a shape color:",
        name: "shapeColor"
    },

    {
        type: "list",
        message: "Choose your favorite shape:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape"
    },


]);
