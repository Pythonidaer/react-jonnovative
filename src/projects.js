const portfolioInfo = [
    {
        name: "Stretch-n-Strengthen",
        picture: "./images/stretchnstrengthen.png",
        description: "A web source for finding free exercises by body part, to stay fit and healthy in the middle of a coding bootcamp/pandemic. My primary responsibilities were to learn how to use the Handlebars templating engine and plug them into mock Sequelize models to connect the back end to the front end. I also created a custom utility helper function for overlapping two images together to create an overlay of the bodypart utilized over a generic anatomical figure.",
        tools: ["Express Handlebars", "MySQL", "Sequelize", "Bcrypt", "Node.js", "Express", "Dotenv"],
        deployedLink: "http://stretch-n-strengthen.herokuapp.com/",
        codeLink: "https://github.com/crrmarchese/stretch-n-strengthen",
    },
    {
        name: "Easy Recipeazy",
        picture: "./images/easyrecipeazy.png",
        description: "Ever find yourself at home with no clue what to make, but a few ingredients here and there to use? Easy Recipeazy allows you to search for recipes for both meals and alcoholic beverages by ingredient. There are additional features, such as the ability to dislike ingredients so that recipes containing those items are avoided. Or, you can hit our 'Feeling Lucky' button and automatically generate your choice of random meal, beverage, or both.",
        tools: ["3rd Party APIs", "Bulma CSS", "Owl Carousel 2", "JavaScript", "Regex"],
        deployedLink: "https://www.tonipow3ll.com/drinks-and-dinner/",
        codeLink: "https://github.com/tonipow3ll/drinks-and-dinner",
    },
    {
        name: "JavaScript Password Generator",
        picture: "./images/passwordgenerator.png",
        description: "This tool may be used to generator a random password between 8 and 128 characters. You can select between lowercase, uppercase, numeric and special characters. This was my first venture into array methods and conditional shorthand, but I was able to finish early. My favorite accomplishment from this project was using Materialize for the first time, as well as creating a Dark Mode feature that allowed users to toggle the data-theme attribute into light or dark theme.",
        tools: ["JavaScript", "Github", "Materialize", "Lighthouse"],
        deployedLink: "https://pythonidaer.github.io/JavaScriptPasswordGenerator/",
        codeLink: "https://github.com/Pythonidaer/JavaScriptPasswordGenerator",
    },
    {
        name: "Coding Quiz",
        picture: "./images/codingquiz.png",
        description: "This marginally challenging coding quiz can be used to educate those beginning JavaScript. The idea can be expanded to include more challenging questions, as well as a more fleshed out High-Scoreboard.",
        tools: ["JavaScript", "setTimeout", "clearTimeout", "Storage", "JSON.stringify"],
        deployedLink: "https://fearmichael.github.io/giftastic/",
        codeLink: "https://github.com/FearMichael/giftastic",
    },
    {
        name: "Employee Card Generator",
        picture: "./images/employeecardgenerator.png",
        description: "This was a great introduction into JavaScript's Class objects, as well as the usage of npm package 'Inquirer'. I wrote a script that prompted a manager to input company and employee information. This input would be stored in a Promise the npassed through into an object. Lastly, I used switch statements to ensure that management could add as many employees as they wanted to, in whichever order they desired.",
        tools: ["ES6", "npm Inquirer", "Classes", "Node.js", "Promises"],
        deployedLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        codeLink: "https://github.com/Pythonidaer/team-profile-generator",
    },
    {
        name: "April Portfolio",
        picture: "./images/aprilportfolio.png",
        description: "This fun portfolio project allowed me to put some of my new skills to the test. I was able to use the Bulma CSS framework for the first time that I advised my team to use in our first project. I also was able to use Intersection Observer to transition objects into view on scroll, as well as scrollTo code that made for smoother link-click transitions and overall a better User Experience.",
        tools: ["Bulma CSS", "Intersection Observer", "Coolors.co", "Lighthouse"],
        deployedLink: "https://pythonidaer.github.io/april-2021-portfolio/",
        codeLink: "https://github.com/Pythonidaer/april-2021-portfolio"
    },
]
export default portfolioInfo;