function getApiUrl() {
    return window.parent.document.getElementById('apiUrl');
}

function getUserId() {
    return window.parent.document.getElementById('userId');
}

function getCardId() {
    return window.parent.document.getElementById('cardId');
}

function callApi(httpMethod, apiEndpoint, requestJson, userIdRequired, cardIdRequired) {
    window.parent.document.getElementById('responseJson').value = 'Processing...';
    window.top.postMessage('httpMethod||' + httpMethod, '*');
    window.top.postMessage('apiEndpoint||' + apiEndpoint, '*');
    window.top.postMessage('requestJson||' + requestJson, '*');
    window.top.postMessage('userIdRequired||' + userIdRequired, '*');
    window.top.postMessage('cardIdRequired||' + cardIdRequired, '*');
    setTimeout(() => window.top.postMessage('send||send', '*'), 200);
}