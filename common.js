function getElement(id) {
    return window.parent.document.getElementById(id);
}
function getApiUrl() {
    return getElement('apiUrl');
}
function getBasicAuthToken() {
    return getElement('basicAuthToken');
}
function getUserId() {
    return getElement('userId');
}
function getCardId() {
    return getElement('cardId');
}