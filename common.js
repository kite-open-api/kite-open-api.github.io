function getApiUrl() {
    //return window.parent.document.getElementById('apiUrl');
    return 'http://openqa.tab.kitecash.in';
}

function getBasicAuthToken() {
    //return window.parent.document.getElementById('basicAuthToken');
    return 'dW5vY29pbjpEbnowIWFkbW4lOCMy';
}

function getUserId() {
    return window.parent.document.getElementById('userId');
}

function getCardId() {
    return window.parent.document.getElementById('cardId');
}

function callApi(httpMethod, apiEndpoint, requestJson) {
    window.top.postMessage('httpMethod||' + httpMethod, '*');
    window.top.postMessage('apiEndpoint||' + apiEndpoint, '*');
    window.top.postMessage('requestJson||' + requestJson, '*');
    setTimeout(() => window.top.postMessage('send||send', '*'), 200);
}