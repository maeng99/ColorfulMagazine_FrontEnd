/*
나이 드롭다운
https://choiiis.github.io/web/toy-project-sign-up-and-in-page-2/

// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#birth-year')
// option 목록 생성 여부 확인
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= 2022; i++) {
      // option element 생성
      const YearOption = document.createElement('option')
      YearOption.setAttribute('value', i)
      YearOption.innerText = i
      // birthYearEl의 자식 요소로 추가
      this.appendChild(YearOption);
    }
  }
});
// Month, Day도 동일한 방식으로 구현
*/

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
