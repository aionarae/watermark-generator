import inquirer from "inquirer";
import chalk from 'chalk';
import fs from "fs";
import shapes from "./lib/shapes.js";

inquirer
  .prompt([
    {
      type: "input",
      message: "What text would you like to log?",
      name: "text"
    },
    {
      type: "input",
      message: "Enter a color keyword or hexadecimal for the text:",
      name: "textColor",
      validate: function(value) {
        var pass = value.match(
          /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^([a-zA-Z]+)$/
        );
        if (pass) {
          return true;
        }
    
        return 'Please enter a valid color keyword (like "red") or hexadecimal (like "#FF0000").';
      }
    },
    {
      type: "list",
      message: "What shape would you like to use?",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Enter a color keyword or hexadecimal for the shape:",
      name: "shapeColor",
      validate: function(value) {
        var pass = value.match(
          /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^([a-zA-Z]+)$/
        );
        if (pass) {
          return true;
        }
        return 'Please enter a valid color keyword (like "red") or hexadecimal (like "#FF0000").';
      }
    }

  ])
  .then((response) => {
    let colorFunction;
    let {
      text,
      textColor,
      shape,
      shapeColor
    } = response;
    
    // if hexidecimal, use chalk.hex
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(response.textColor)) {
      colorFunction = chalk.hex(response.textColor);
    } else if (/^([a-zA-Z]+)$/.test(textColor)) {
      // If it's not a hexadecimal, assume it's a keyword
      colorFunction = chalk[textColor];
    } else {
       // If it's not a hexadecimal or a keyword
      console.log('Invalid color input');
    }

    if (shape === "circle") {
      shape = "circle";
      shape = new shapes.Circle(shape, 100, 100, 150, 100, 80, shapeColor).createCircle();
    } else if (shape === "triangle") {
      shape = new shapes.Triangle(shape, '150,20 100,180 200,180', shapeColor).createTriangle();
      shape = "polygon points='150,20 100,180 200,180'";
    } else if (shape === "square") {
      shape = new shapes.Square(shape, 50, 50, 0, 0, 100, 100, shapeColor).createSquare();
      shape = "rect x='50' y='50' width='100' height='100'";
    }

    const content = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    // <${shape} cx="150" cy="100" r="80" fill="${shapeColor}"/>

    fs.writeFile("logo.svg", content, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });

  });
