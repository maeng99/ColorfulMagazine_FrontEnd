const API_SERVER_DOMAIN = 'http://3.39.171.235:8000/';

async function submitSignupForm(event) {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var nickname = document.getElementById('nickname').value;
    var gender = document.querySelector('input[name=gener]:checked').value;
    var age = document.getElementById('age').value;

    console.log(gender + age);

    try {
        // 아이디와 닉네임의 존재 여부를 확인합니다.
        let checkResponse = await fetch(API_SERVER_DOMAIN + 'users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                nickname: nickname,
            }),
        });

        let checkData = await checkResponse.json();

        if (checkData.exists) {
            // 아이디나 닉네임이 존재할 경우
            alert('아이디나 닉네임이 이미 사용중입니다.');
            return;
        }

        // 서버에 회원가입 요청을 보냅니다.
        let signupResponse = await fetch(API_SERVER_DOMAIN + 'users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                username: username,
                nickname: nickname,
                gender: gender,
                age: age,
            }),
        });

        if (!signupResponse.ok) {
            throw new Error('Signup failed');
        }

        let signupData = await signupResponse.json();
        var accessToken = signupData.accessToken;
        var refreshToken = signupData.refreshToken;

        // 토큰을 쿠키에 저장합니다.
        setCookie('accessToken', accessToken, 1);
        setCookie('refreshToken', refreshToken, 1);

        // 회원가입이 성공하면 다음 동작을 수행합니다.
        window.location.href = './login.html';
    } catch (error) {
        alert('회원가입 중 오류가 발생했습니다.', error);
    }
}

document.querySelector('form').addEventListener('submit', submitSignupForm);

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

let elInputUsername = document.querySelector('#username'); // input#username
let availUsername = document.querySelector('.avail_username'); // div.success-message.hide
let noneUsername = document.querySelector('.none_username');
let wrongUsername1 = document.querySelector('.wrong_username1'); // div.failure-message.hide
let wrongUsername2 = document.querySelector('.wrong_username2'); // div.failure-message2.hide

let elInputNickname = document.querySelector('#nickname'); // input#nickname
let availNickname = document.querySelector('.avail_nickname'); // div.success-message.hide
let noneNickname = document.querySelector('.none_nickname');
let wrongNickname1 = document.querySelector('.wrong_nickname1'); // div.failure-message.hide
let wronNickname2 = document.querySelector('.wrong_nickname2'); // div.failure-message2.hide

let elInputPassword = document.querySelector('#password'); // input#password
let nonePassword = document.querySelector('.none_password');
let wrongPassword = document.querySelector('.wrong_password'); // div.strongPassword-message.hide

let elInputPasswordRetype = document.querySelector('#repassword'); // input#password-retype
let availRepassword = document.querySelector('.avail_repassword');
let mismatchRepassword = document.querySelector('.mismatch_repassword'); // div.mismatch-message.hide

let elInputGender = document.querySelector('input[type=radio]:checked');
let noneGender = document.querySelector('.none_gender');

let elInputAge = document.querySelector('#age'); // input#age
let noneAge = document.querySelector('.none_age'); // div.strongPassword-message.hide

function idLength(value) {
    return value.length >= 2 && value.length <= 12;
}

function onlyNumberAndEnglish(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

function onlyKoreanAndNumber(str) {
    return /^[가-힣0-9][가-힣0-9]*$/.test(str);
}

function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function isMatch(password1, password2) {
    return password1 === password2;
}

elInputUsername.onkeyup = function () {
    // 값을 입력한 경우
    if (elInputUsername.value.length !== 0) {
        // 영어 또는 숫자 외의 값을 입력했을 경우
        if (onlyNumberAndEnglish(elInputUsername.value) === false) {
            availUsername.classList.add('hide');
            noneUsername.classList.add('hide');
            wrongUsername1.classList.add('hide');
            wrongUsername2.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
        }
        // 글자 수가 4~12글자가 아닐 경우
        else if (idLength(elInputUsername.value) === false) {
            availUsername.classList.add('hide'); // 성공 메시지가 가려져야 함
            noneUsername.classList.add('hide');
            wrongUsername1.classList.remove('hide'); // 아이디는 4~12글자이어야 합니다
            wrongUsername2.classList.add('hide'); // 실패 메시지2가 가려져야 함
        }
        // 조건을 모두 만족할 경우
        else if (idLength(elInputUsername.value) || onlyNumberAndEnglish(elInputUsername.value)) {
            availUsername.classList.remove('hide'); // 사용할 수 있는 아이디입니다
            noneUsername.classList.add('hide');
            wrongUsername1.classList.add('hide'); // 실패 메시지가 가려져야 함
            wrongUsername2.classList.add('hide'); // 실패 메시지2가 가려져야 함
        }
    }
    // 값이 입력되지 않았을 경우
    // 모든 메시지를 가린다.
    else {
        availUsername.classList.add('hide'); // 성공 메시지가 가려져야 함
        noneUsername.classList.remove('hide');
        wrongUsername1.classList.add('hide'); // 아이디는 4~12글자이어야 합니다
        wrongUsername2.classList.add('hide'); // 실패 메시지2가 가려져야 함
    }
};

elInputNickname.onkeyup = function () {
    // 값을 입력한 경우
    if (elInputNickname.value.length !== 0) {
        // 영어 또는 숫자 외의 값을 입력했을 경우
        if (onlyKoreanAndNumber(elInputNickname.value) === false) {
            availNickname.classList.add('hide');
            noneNickname.classList.add('hide');
            wrongNickname1.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
            wrongNickname2.classList.add('hide');
        }
        // 글자 수가 4~12글자가 아닐 경우
        else if (idLength(elInputNickname.value) === false) {
            availNickname.classList.add('hide'); // 성공 메시지가 가려져야 함
            noneNickname.classList.remove('hide'); // 아이디는 4~12글자이어야 합니다
            wrongNickname1.classList.add('hide'); // 실패 메시지2가 가려져야 함
            wrongNickname2.classList.add('hide');
        }
        // 조건을 모두 만족할 경우
        else if (idLength(elInputNickname.value) || onlyNumberAndEnglish(elInputUsername.value)) {
            availNickname.classList.remove('hide'); // 사용할 수 있는 아이디입니다
            noneNickname.classList.add('hide'); // 실패 메시지가 가려져야 함
            wrongNickname1.classList.add('hide'); // 실패 메시지2가 가려져야 함
            wrongNickname2.classList.add('hide');
        }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
        availNickname.classList.add('hide');
        noneNickname.classList.remove('hide');
        wrongNickname1.classList.add('hide');
        wrongNickname2.classList.add('hide');
    }
};

elInputPassword.onkeyup = function () {
    // console.log(elInputPassword.value);
    // 값을 입력한 경우
    if (elInputPassword.value.length !== 0) {
        if (strongPassword(elInputPassword.value)) {
            nonePassword.classList.add('hide');
            wrongPassword.classList.add('hide'); // 실패 메시지가 가려져야 함
        } else {
            nonePassword.classList.add('hide');
            wrongPassword.classList.remove('hide'); // 실패 메시지가 보여야 함
        }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
        nonePassword.classList.remove('hide');
        wrongPassword.classList.add('hide');
    }
};

elInputPasswordRetype.onkeyup = function () {
    // console.log(elInputPasswordRetype.value);
    if (elInputPasswordRetype.value.length !== 0) {
        if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
            availRepassword.classList.remove('hide');
            mismatchRepassword.classList.add('hide'); // 실패 메시지가 가려져야 함
        } else {
            availRepassword.classList.add('hide');
            mismatchRepassword.classList.remove('hide'); // 실패 메시지가 보여야 함
        }
    } else {
        elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
};

elInputAge.onchange = function () {
    // 나이 선택값을 가져옴
    if (elInputAge.value === '나이 선택') {
        noneAge.classList.remove('hide'); // 실패 메시지가 보여야 함
    } else {
        noneAge.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
};
