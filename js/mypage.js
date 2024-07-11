var API_SERVER_DOMAIN = 'https://likelionshop.shop';

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

function getAccessTokenWithRefreshToken(accessToken, refreshToken) {
    return fetch(API_SERVER_DOMAIN + '/auth/reissue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            accessToken: accessToken,
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

function getUserInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/user', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('User info request failed');
            }
            return response.json();
        })
        .then((data) => {
            return data.name;
        });
}

function getOrderList(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/order/orders', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch order list');
        }
        return response.json();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // 페이지 로드 시 실행되는 코드

    // 쿠키에서 accessToken 가져오기
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        // accessToken이 있는 경우, 서버에 사용자 정보 요청
        getUserInfo(accessToken)
            .then((name) => {
                var userNameSpans = document.querySelectorAll('.user-name');
                userNameSpans.forEach((span) => {
                    span.textContent = name;
                    span.classList.remove('d-none');
                });
            })
            .catch((error) => {
                console.error('User info error:', error);
                // accessToken이 만료된 경우 refresh 토큰을 사용하여 새로운 accessToken을 가져옴
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            // 새로운 accessToken으로 사용자 정보 요청
                            getUserInfo(newAccessToken)
                                .then((name) => {
                                    var userNameSpans = document.querySelectorAll('.user-name');
                                    userNameSpans.forEach((span) => {
                                        span.textContent = name;
                                        span.classList.remove('d-none');
                                    });
                                })
                                .catch((error) => {
                                    console.error('User info error after refreshing token:', error);
                                });
                        })
                        .catch((error) => {
                            console.error('Failed to refresh access token:', error);
                        });
                }
            });
    }
});
