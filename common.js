function getApiUrl() {
    return window.parent.document.getElementById('userId');
}

function getUserId() {
    return window.parent.document.getElementById('userId');
}

function getCardId() {
    return window.parent.document.getElementById('cardId');
}

function callApi(httpMethod, apiEndpoint, requestJson) {
    window.parent.document.getElementById('responseJson').value = 'Processing...';
    window.top.postMessage('httpMethod||' + httpMethod, '*');
    window.top.postMessage('apiEndpoint||' + apiEndpoint, '*');
    window.top.postMessage('requestJson||' + requestJson, '*');
    setTimeout(() => window.top.postMessage('send||send', '*'), 200);
}