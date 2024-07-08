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

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 제출 동작 방지

    // 유효성 검사
    let isValid = true;

    // 아이디 검사
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (!/^[a-zA-Z0-9!@#$%^&*]{2,20}$/.test(username)) {
        usernameError.textContent = '아이디는 영문, 숫자, 특수문자 2-20자여야 합니다.';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // 닉네임 검사
    const nickname = document.getElementById('nickname').value;
    const nicknameError = document.getElementById('nicknameError');
    if (!/^[가-힣0-9]{2,10}$/.test(nickname)) {
        nicknameError.textContent = '닉네임은 한글, 숫자 2-10자여야 합니다.';
        nicknameError.style.display = 'block';
        isValid = false;
    } else {
        nicknameError.style.display = 'none';
    }

    // 비밀번호 검사
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(password)) {
        passwordError.textContent = '비밀번호는 영문, 숫자, 특수문자가 모두 들어간 8-20자여야 합니다.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // 비밀번호 확인 검사
    const repassword = document.getElementById('repassword').value;
    const repasswordError = document.getElementById('repasswordError');
    if (password !== repassword) {
        repasswordError.textContent = '비밀번호가 일치하지 않습니다.';
        repasswordError.style.display = 'block';
        isValid = false;
    } else {
        repasswordError.style.display = 'none';
    }

    // 나이 검사
    const age = document.getElementById('age').value;
    const ageError = document.getElementById('ageError');
    if (!age) {
        ageError.textContent = '나이를 선택해 주세요.';
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }

    if (isValid) {
        // 유효성 검사가 모두 통과되면 폼 제출
        this.submit();
        console.log(isVaild);
        alert('정보 입력 완료. 반갑습니다.');
        window.location.href = 'login.html';
    }
});
