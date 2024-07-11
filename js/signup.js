// 1. 아이디 입력창 정보 가져오기
let elInputUsername = document.querySelector('#username'); // input#username
// 2. 성공 메시지 정보 가져오기
let elSuccessMessage = document.querySelector('.success-message'); // div.success-message.hide
// 3. 실패 메시지 정보 가져오기 (글자수 제한 4~12글자)
let elFailureMessage = document.querySelector('.failure-message'); // div.failure-message.hide
// 4. 실패 메시지2 정보 가져오기 (영어 또는 숫자)
let elFailureMessageTwo = document.querySelector('.failure-message2'); // div.failure-message2.hide

// 1. 닉네임 입력창 정보 가져오기
let elInputNickname = document.querySelector('#nickname'); // input#nickname
// 2. 성공 메시지 정보 가져오기
let elSuccessMessageNickname = document.querySelector('.success-message-nic'); // div.success-message.hide
// 3. 실패 메시지 정보 가져오기 (글자수 제한 4~12글자)
let elFailureMessageNickname = document.querySelector('.failure-message-nic'); // div.failure-message.hide
// 4. 실패 메시지2 정보 가져오기 (영어 또는 숫자)
let elFailureMessageTwoNickname = document.querySelector('.failure-message2-nic'); // div.failure-message2.hide


// 1. 비밀번호 입력창 정보 가져오기
let elInputPassword = document.querySelector('#password'); // input#password
// 2. 비밀번호 확인 입력창 정보 가져오기
let elInputPasswordRetype = document.querySelector('#repassword'); // input#password-retype
// 3. 실패 메시지 정보 가져오기 (비밀번호 불일치)
let elMismatchMessage = document.querySelector('.mismatch-message'); // div.mismatch-message.hide
// 4. 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
let elStrongPasswordMessage = document.querySelector('.strongPassword-message'); // div.strongPassword-message.hide

// 1. 나이선택 입력창 정보 가져오기
let elInputAge = document.querySelector('#age'); // input#age
// 4. 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
let elStrongAgeMessage = document.querySelector('.strongAge-message'); // div.strongPassword-message.hide



//아이디 길이
function idLength(value) {
    return value.length >= 4 && value.length <= 12
}
//영어랑 숫자만 가능
function onlyNumberAndEnglish(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}
//한국어랑 숫자만 가능
function onlyKoreanAndNumber(str) {
    return /^[가-힣0-9][가-힣0-9]*$/.test(str);
}
//8글자 이상이면서 영문,숫자,특수문자 사용
function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}
//비밀번호와 비밀번호 확인 일치
function isMatch (password1, password2) {
    return password1 === password2;
}


elInputUsername.onkeyup = function () {
    // 값을 입력한 경우
    if (elInputUsername.value.length !== 0) {
      // 영어 또는 숫자 외의 값을 입력했을 경우
      if(onlyNumberAndEnglish(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.add('hide');
        elFailureMessageTwo.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
      }
      // 글자 수가 4~12글자가 아닐 경우
      else if(idLength(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide'); // 성공 메시지가 가려져야 함
        elFailureMessage.classList.remove('hide'); // 아이디는 4~12글자이어야 합니다
        elFailureMessageTwo.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
      // 조건을 모두 만족할 경우
      else if(idLength(elInputUsername.value) || onlyNumberAndEnglish(elInputUsername.value)) {
        elSuccessMessage.classList.remove('hide'); // 사용할 수 있는 아이디입니다
        elFailureMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
        elFailureMessageTwo.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.add('hide');
    }
}

elInputNickname.onkeyup = function () {
    // 값을 입력한 경우
    if (elInputNickname.value.length !== 0) {
      // 영어 또는 숫자 외의 값을 입력했을 경우
      if(onlyKoreanAndNumber(elInputNickname.value) === false) {
        elSuccessMessageNickname.classList.add('hide');
        elFailureMessageNickname.classList.add('hide');
        elFailureMessageTwoNickname.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
      }
      // 글자 수가 4~12글자가 아닐 경우
      else if(idLength(elInputNickname.value) === false) {
        elSuccessMessageNickname.classList.add('hide'); // 성공 메시지가 가려져야 함
        elFailureMessageNickname.classList.remove('hide'); // 아이디는 4~12글자이어야 합니다
        elFailureMessageTwoNickname.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
      // 조건을 모두 만족할 경우
      else if(idLength(elInputNickname.value) || onlyNumberAndEnglish(elInputUsername.value)) {
        elSuccessMessageNickname.classList.remove('hide'); // 사용할 수 있는 아이디입니다
        elFailureMessageNickname.classList.add('hide'); // 실패 메시지가 가려져야 함
        elFailureMessageTwoNickname.classList.add('hide'); // 실패 메시지2가 가려져야 함
      }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.add('hide');
    }
}

elInputPassword.onkeyup = function () {

    // console.log(elInputPassword.value);
    // 값을 입력한 경우
    if (elInputPassword.value.length !== 0) {
      if(strongPassword(elInputPassword.value)) {
        elStrongPasswordMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
      }
      else {
        elStrongPasswordMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
      }
    }
    // 값을 입력하지 않은 경우 (지웠을 때)
    // 모든 메시지를 가린다.
    else {
      elStrongPasswordMessage.classList.add('hide');
    }
};

elInputPasswordRetype.onkeyup = function () {

    // console.log(elInputPasswordRetype.value);
    if (elInputPasswordRetype.value.length !== 0) {
      if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
        elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
      }
      else {
        elMismatchMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
      }
    }
    else {
      elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
};

elInputAge.onchange = function () {
    // 나이 선택값을 가져옴
    if (elInputAge.value === "나이 선택") {
        elStrongAgeMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
    } else {
        elStrongAgeMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
};