const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const Circle = require("./lib/circle");


inquirer.prompt([
    {
        type: "input",
        message: "Enter three letters or less:",
        name: "text",
        validate: (text) => (text.length <= 3 ? true : false),
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


])
.then(res => {
    let renderedContent = "";
    let fileName = "";
    if(res.shape === "Triangle") {
        const triangle = new Triangle(res.text, res.textColor, res.shapeColor);
        renderedContent = triangle.render();
        fileName = "./examples/triangle.svg";
    } else if(res.shape === "Square") {
        const square = new Square(res.text, res.textColor, res.shapeColor);
        renderedContent = square.render();
        fileName = "./examples/square.svg";
    } else if(res.shape === "Circle") {
        const circle = new Circle(res.text, res.textColor, res.shapeColor);
        renderedContent = circle.render();
        fileName = "./examples/circle.svg"
    }

    fs.writeFile(fileName, renderedContent, (err)=> err ? console.log(err) : console.log("Generated logo.svg"))
});
