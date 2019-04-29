function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.error(error);
}

function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function readResponseAsText(response) {
    return response.text();
}

function readResponseAsJson(response) {
    return response.json();
}

function showText(responseAsText) {
    var message = document.getElementById('message');
    message.textContent = responseAsText;
}

function showJson(json){
    var message = document.getElementById('message');

    var idx = Math.floor(Math.random() * json.quotes.length);
    var quote = json.quotes[idx];
    
    message.textContent = quote.text;
}

function fetchText(pathToResource) {
    fetch(pathToResource)
        .then(validateResponse)
        .then(readResponseAsText)
        .then(showText)
        .catch(logError);
}

function fetchJson(pathToResource) {
    fetch(pathToResource)
        .then(validateResponse)
        .then(readResponseAsJson)
        .then(showJson)
        .catch(logError);
}

//fetchText('/features.txt');
fetchJson('/pwa/data/quotes.json');

fetchProspects('/pwa/data/prospects.json'){

}