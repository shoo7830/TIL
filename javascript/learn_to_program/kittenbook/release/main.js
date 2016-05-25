/**
 * Created by shoo7830 on 2016. 5. 26..
 */
var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();

var currentTime = currentDate.getFullYear() + '-' +
    (currentDate.getMonth() + 1) + '-' +
        currentDate.getDate() + ' at ' +
        currentDate.getHours() + ':' +
        currentDate.getMinutes() + ':' +
        currentDate.getSeconds();
/**
 * Created by shoo7830 on 2016. 5. 25..
 */
var userName = prompt('Hello, what\'s your name?!');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
'<p>' + projectName + ' ' + versionNumber + ' accessed on : ' + currentTime + '</p>';
