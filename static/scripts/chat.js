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
    let firstMessage = "poo!"
    document.getElementById("starting-message").innerText = "ASdfsdfasD";
    document.getElementById("timestamp").innerText = time;
}

init();

function getResponse(message) {
    let response = fetchResponseFromData(message);
    let autoHtml = '<p class="bot-text">' + response + '</p>';

    $("#chatbox").append(autoHtml);
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
    }, 2000);
}

function send() {
    getUserInput();
}

$("#text-input").keypress(function(key) {
    if (key.which == 13) {
        getUserInput();
    }
})