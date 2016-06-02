/**
 * Created by shoo7830 on 2016. 5. 26..
 */
var kbValues = {
    projectName: 'kittenbook',
    versionNumber: '0.0.1',
    areaCodes: {
        '408': 'Silicon Valley',
        '702': 'Las Vegas',
        '801': 'Utah',
        '765': 'West Lafayette',
        '901': 'Memphis'
    }
};

function getAreaCodes() {
    return kbValues.areaCodes;
}

/**
 * Created by shoo7830 on 2016. 5. 25..
 */

// 사용자 이름 얻기
function getUserName() {
    var userName = prompt('Hello, what\'s your name?!');

    // 이름이 입력되지 않은 경우 다시 묻기
    if (!userName) {
        userName = prompt('You didn\'t enter a name. Really, what\'s your name?!');
    }
    return userName;
}

// 사용자 전화번호 얻기
function getPhoneNumber(userName) {
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    if (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt('Please enter a valid phone number.');
    }
    return phoneNumber;
}

/**
 * Check the validity of a phone number
 * @method
 * @param {string} phoneNumber The phone number to be validated *
 * @return {boolean}
 */

function validatePhoneNumber(phoneNumber) {
    return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-d{4}/);
}

// 전화번호 지역 확인하기
function getLocation(phoneNumber) {
    // 전화번호 패턴 만들기
    var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-d{4}/;
    // 전화번호에서 찾아낸 값 구하기
    var phoneMatches = phoneNumberPattern.exec(phoneNumber);
    var areaCodes, areaCode, locationName;
    if (phoneMatches) {
        areaCode = phoneMatches[1];
        areaCodes = getAreaCodes();
        locationName = areaCodes[areaCode];
    }

    // 삼항 연산자가 사용되었다
    // locationName 이 있으면 리턴 아니면 somewhere 리턴

    return locationName ? locationName : 'somewhere';
}



document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewd on : ' + kbValues.currentTime + '</p>';

/**
 * Created by shoo7830 on 2016. 5. 26..
 */
var image = document.querySelectorAll('div.userContentWrapper img');

for (var i = 0; i < image.length; i++) {
    console.log(image[i]);
}