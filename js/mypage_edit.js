function mypageImgPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// 클릭 이벤트가 팝업 외부에서 발생하면 팝업을 닫음
window.onclick = function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};

function changeImgFile(input) {
    var file = input.files[0]; //선택된 파일 가져오기

    //새로운 이미지 div 추가
    var newImage = document.createElement('img');
    newImage.setAttribute('class', 'mypage_profile_new_img');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);

    newImage.style.width = '100px';
    newImage.style.height = '100px';
    newImage.style.objectFit = 'cover';
    newImage.style.borderRadius = '40px';

    //팝업 닫기
    mypageImgPopup();

    //기존 요소 삭제
    var container = document.getElementById('mypage_profile_img_div');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //이미지를 image-show div에 추가
    container.appendChild(newImage);
}

document.getElementById('mypage_deleteImg').addEventListener('click', function () {
    const userConfirmed = confirm('정말 삭제하시겠습니까?');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 삭제 함수 실행
        deleteImgFile();
    } else {
        // 사용자가 '취소'를 클릭했을 때 페이지를 유지
    }
});

function deleteImgFile() {
    //새로운 이미지 div 추가
    var baseImage = document.createElement('img');
    baseImage.setAttribute('src', './img/profile.png');
    baseImage.setAttribute('class', 'mypage_profile_img');

    //이미지 source 가져오기
    baseImage.style.width = '80px';
    baseImage.style.height = '80px';

    //팝업 닫기
    mypageImgPopup();

    //기존 요소 삭제
    var container = document.getElementById('mypage_profile_img_div');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //이미지를 image-show div에 추가
    container.appendChild(baseImage);
}

document.getElementById('mypage_edit_cancel').addEventListener('click', function () {
    const userConfirmed = confirm('정말 취소하시겠습니까? 수정 사항이 저장되지 않습니다.');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 페이지를 나갑니다.
        window.location.href = 'mypage.html'; // 여기에 취소 후 이동할 페이지 URL을 넣으세요.
    } else {
        // 사용자가 '취소'를 클릭했을 때 페이지를 유지합니다.
        // 아무 작업도 하지 않습니다.
    }
});

//유효성 검사

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

//닉네임
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