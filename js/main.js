function readResponseAsText(response) {
    return response.text();
}

function showText(responseAsText) {
    // Assuming the DOM has a div with id 'message'
    var message = document.getElementById('words');
    message.textContent = responseAsText;
}

function fetchText(pathToResource) {
    fetch(pathToResource)
        .then(validateResponse)
        .then(readResponseAsText)
        .then(showText)
        .catch(logError);
}

fetchText('../words.txt');