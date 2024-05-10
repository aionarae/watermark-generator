import inquirer from "inquirer";
import colors from "colors";
import chalk from "chalk";
let colorFunction;

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
  
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(response.textColor)) {
      colorFunction = chalk.hex(response.textColor);
    } else {
      // If it's not a hexadecimal, assume it's a keyword
      colorFunction = chalk.keyword(response.textColor);
    }
  
    console.log(colorFunction(response.text));
  });
