const tellMe = "For sure!" + '<br />' + '<br />' + "I’m Edwin, a third year Computer Science Major at the University of British Columbia. I enjoy learning new things, from building small tools that make life easier, to full-stack web apps. The opportunity to learn and create virtually anything through software is invaluable to me. Outside of programming, I enjoy media creation and entrepreneurship. I create visual representations of data and analytics on my YouTube channel FlareTV with over two million subscribers, and own an automotive ceramic coating and detailing company in Vancouver, Canada." + '<br />' + '<br />' + "Feel free to message me if you have any questions, or if you want to chat about anything! You can contact me on LinkedIn, Instagram @edw.chow or by email (edwinchow1110@gmail.com)!";
const projects = "Sure! I’m always working on something new, but here are the projects that I’m most proud of. All of these projects are on my Github!" + '<br />' + '<br />' + "iPortfolio - June 2022" + '<br />' + "Inspired by Apple’s iMessage, iPortfolio is a “chatbot” that tells you more about myself, in an interactive and unique way. This web-app is currently written in HTML, CSS and JavaScript, though I am planning on modifying it to implement a Python backend to handle more complicated responses." + '<br />' + '<br />' + "WeatherYes - June 2022" + '<br />' + "WeatherYes is a simple weather web-app, created using Angular 2 and TypeScript. It obtains real-time data from the OpenWeatherMap API, providing users with live weather info from around the world." + '<br />' + '<br />' + "Grounded - February 2022 - Awarded “Best UI/UX Design” at StormHacks 2022" + '<br />' + "Grounded is a web-app that guides users through grounding exercises such as guided breathing, during panic attacks. It was developed in HTML/CSS and JavaScript for text, styling, and animations, with the back-end in Python and Flask for linking the pages, deployed on Heroku." + '<br />' + '<br />' + "E-Commerce Business Expense Tracker - December 2021" + '<br />' + "As an e-commerce business owner, I created a Java desktop app that tracks e-commerce business expenses and transactions. The user interface was created fully using the Java Swing library, and save/load functionality implemented using JSON. This app utilizes exception handling, was tested using JUnit 5, and achieved 100% JUnit code coverage.";
const hobbies = "I enjoy working out, playing soccer, skiing, spending time with my friends and family, working on entrepreneurial (or programming!) projects, and participating in hackathons. I always find myself finding new things to do, such as a sport that I’ve been playing a lot recently, spikeball!";
const goals = "As someone who has always been focused on customer engagement, my goal is to become a full-time software engineer, working on systems that have the ability to benefit a vast number of people. I’m a huge Vancouver Canucks fan, and I’ve recently been learning to play ice hockey. A long-time goal of mine is to play at an outdoor ice rink on Canada’s east coast. Oh, and I hope the Canucks will win a Stanley Cup in the near future :)";
const joke = "To the person who stole my copy of Microsoft Office, I will find you." + '<br />' + '<br />' + '<br />' +"You have my word.";

function fetchResponseFromData(message) {
    if (message.toUpperCase() == "TELL ME ABOUT YOURSELF") {
        return tellMe;
    } else if (message.toUpperCase() == "TELL ME ABOUT YOUR PROJECTS") {
        return projects;
    } else if (message.toUpperCase() == "WHAT ARE YOUR HOBBIES?") {
        return hobbies;
    } else if (message.toUpperCase() == "WHAT ARE YOUR GOALS FOR THE FUTURE?") {
        return goals;
    } else if (message.toUpperCase() == "TELL ME A JOKE") {
        return joke;
    } else {
        return "I don't quite understand, please try again."
    }
}