

function login() {

    var url = 'https://allowme.appeligo.com/api/v1/login';
    var init = {
        headers: {"Content-type": "application/json"},
        body: '{"user":"dhecking@gmail.com","password":"ch@PT3r4"}',
        method: "POST"
    };
    fetch(url, init)
        .then(data => { return data.json() })
        .then(res => { console.log(res) })
        .catch(error => console.error(error));
}

login();