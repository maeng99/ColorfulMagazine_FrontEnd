var API_SERVER_DOMAIN = 'http://3.39.171.235:8000/';

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

function getAccessTokenWithRefreshToken(refreshToken) {
    return fetch(API_SERVER_DOMAIN + 'users/refresh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refreshToken: refreshToken,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }
            return response.json();
        })
        .then((data) => {
            return data.accessToken;
        });
}

function colorInfoPopup() {
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

const title = document.querySelector('.write_form_title').value.trim();
const date = document.querySelector('.write_form_date').value.trim();
const color = document.querySelector('input[name="color"]:checked');
const content = document.querySelector('.write_form_content').value.trim();
const comment = document.querySelector('.write_form_comment').value.trim();

document.querySelectorAll('.write_color_name').forEach((label) => {
    label.addEventListener('click', function () {
        var writeBackground = document.getElementById('write_input_div');

        if (this.innerText === '빨강') {
            writeBackground.style.backgroundColor = 'rgba(238, 200, 200, 0.2)';
        } else if (this.innerText === '주황') {
            writeBackground.style.backgroundColor = 'rgba(255, 229, 202, 0.2)';
        } else if (this.innerText === '노랑') {
            writeBackground.style.backgroundColor = 'rgba(252, 244, 197, 0.2)';
        } else if (this.innerText === '초록') {
            writeBackground.style.backgroundColor = 'rgba(213, 223, 209, 0.2)';
        } else if (this.innerText === '파랑') {
            writeBackground.style.backgroundColor = 'rgba(187, 203, 222, 0.2)';
        } else if (this.innerText === '보라') {
            writeBackground.style.backgroundColor = 'rgba(210, 192, 206, 0.2)';
        }
    });
});

document.getElementById('write_cancel').addEventListener('click', function () {
    const userConfirmed = confirm('정말 취소하시겠습니까? 수정 사항이 저장되지 않습니다.');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 페이지를 나갑니다.
        history.back();
    }
});

function validateForm(event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const title = document.querySelector('.write_form_title').value.trim();
    const date = document.querySelector('.write_form_date').value.trim();
    const color = document.querySelector('input[name="color"]:checked').value;
    const content = document.querySelector('.write_form_content').value.trim();
    const comment = document.querySelector('.write_form_comment').value.trim();

    if (!title || !date || !color || !content || !comment) {
        alert('⚠️ 모든 입력란을 입력해주세요 ⚠️');
        return false;
    }

    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    const colorMap = {
        red: '빨강',
        orange: '주황',
        yellow: '노랑',
        green: '초록',
        blue: '파랑',
        purple: '보라',
    };
    const colorValue = colorMap[color];

    if (accessToken) {
        fetch(API_SERVER_DOMAIN + 'posts/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken,
            },
            body: JSON.stringify({
                title: title,
                content: content,
                comment: comment,
                image: null,
                color: colorValue,
                date: date,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to publish post');
                }

                return response.json();
            })
            .catch((error) => {
                console.error('Failed to publish post:', error);

                if (refreshToken) {
                    getAccessTokenWithRefreshToken(refreshToken)
                        .then((newAccessToken) => {
                            fetch(API_SERVER_DOMAIN + 'posts/posts/', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer ' + newAccessToken,
                                },
                                body: JSON.stringify({
                                    title: title,
                                    content: content,
                                    comment: comment,
                                    color: color,
                                    date: date,
                                }),
                            })
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error('Failed to publish post');
                                    }
                                    return response.json();
                                })
                                .catch((error) => {
                                    console.error('Failed to publish post after refreshing token:', error);
                                    location.href = 'login.html'; // Redirect to login page
                                });
                        })
                        .catch((error) => {
                            console.error('Failed to refresh access token:', error);
                            location.href = 'login.html'; // Redirect to login page
                        });
                } else {
                    location.href = 'login.html'; // Redirect to login page
                }
            });
    } else {
        location.href = 'login.html'; // Redirect to login page
    }

    // 모든 필드가 채워졌을 때 폼 제출
    window.location.href = './search.html';
    return true;
}
