// Getter function for the current time
function getTime() {
    let date = new Date();
    hrs = date.getHours();
    min = date.getMinutes();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (min < 10) {
        min = "0" + min;
    }

    let time = hrs + ":" + min;
    return time;
}

// initialize the program
function init() {
    let time = getTime();
    let firstMessage = "Hey there, glad you’re here. Welcome to my interactive portfolio chatbot. The following are commands that you can use to learn more about me! \n \n “Tell me about yourself” \n “Tell me about your projects” \n  “What are your hobbies?” \n “What are your goals for the future?” \n “Tell me a joke” \n "
    document.getElementById("starting-message").innerText = firstMessage;
    document.getElementById("timestamp").innerText = time;
}

init();

function getResponse(message) {
    let response = fetchResponseFromData(message);
    let autoHtml = '<p class="bot-text">' + response + '</p>';

    $("#chatbox").append(autoHtml);

    // auto scroll to bottom of div when new message is added to the chatbox
    var elem = document.getElementById("chatbox");
    elem.scrollTop = elem.scrollHeight;
}

function getUserInput() {
    let userInput = $("#text-input").val();

    if (userInput == "") {
        return;
    }

    let selfHtml = '<p class="self-text">' + userInput + '</p>';
    $("#chatbox").append(selfHtml);
    $("#text-input").val("");

    setTimeout(() => {
        getResponse(userInput);
    }, 500);

    // auto scroll to bottom of div when new message is added to the chatbox
    var elem = document.getElementById("chatbox");
    elem.scrollTop = elem.scrollHeight;
}

function send() {
    getUserInput();
}

$("#text-input").keypress(function(key) {
    if (key.which == 13) {
        getUserInput();
    }
});

let button = document.getElementById("send-button");
button.addEventListener('click', event => {
    getUserInput();
});