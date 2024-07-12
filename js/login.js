var API_SERVER_DOMAIN = 'http://3.39.171.235:8000/';

function submitLoginForm(event) {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(location.origin);
    console.log(username, password);

    // 서버에 로그인 요청을 보냅니다.
    fetch('https://cors-anywhere.herokuapp.com/' + API_SERVER_DOMAIN + 'users/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var accessToken = data.token;
            setCookie('accessToken', accessToken, 1);

            /*
            var refreshToken = data.refreshToken;
            setCookie('refreshToken', refreshToken, 1);
            */

            // 로그인이 성공하면 다음 동작을 수행합니다.
            window.location.replace('/index.html');
        })
        .catch((error) => {
            console.log(error);
            alert('아이디나 비밀번호를 다시 확인해주세요', error);
            // 로그인 실패 시 사용자에게 메시지를 표시하는 등의 동작을 수행할 수 있습니다.
        });
}

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
