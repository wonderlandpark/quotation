document.addEventListener('DOMContentLoaded', function () {

document.body.innerHTML = document.body.innerHTML.replace(/“|”/gi, '"');
document.body.innerHTML = document.body.innerHTML.replace(/‘|’/gi, '\'');

})