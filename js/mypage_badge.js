var API_SERVER_DOMAIN = '';

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
    return fetch(API_SERVER_DOMAIN + '/users/refresh/', {
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

function getMyInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + 'users/profile/', {
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
            return data.JSON();
        });
}

function getMyBadgeInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + 'users/achievements_profile/', {
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
            return data.JSON();
        });
}

document.addEventListener('DOMContentLoaded', function () {
    /*
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');
    
    if (accessToken) {
        getMyInfo(accessToken)
            .then((data) => {
                completeBadge1(data);
                completeBadge2(data);
                completeBadge3(data);
                completeBadge4();
                completeBadge5();
                completeBadge6();
                completeBadge7();
                completeBadge8();
                completeBadge9(data);
                completeBadge10(data);
                completeBadge11(data);
                completeBadge12(data);
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    completeBadge1(data);
                                        completeBadge2(data);
                                        completeBadge3(data);
                                        completeBadge4(data);
                                        completeBadge5();
                                        completeBadge6();
                                        completeBadge7();
                                        completeBadge8();
                                        completeBadge9(data);
                                        completeBadge10(data);
                                        completeBadge11(data);
                                        completeBadge12(data);
                                })
                                .catch((error) => {
                                    console.error('Failed to fetch posts after refreshing token:', error);
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
    }*/

    completeBadge1(my_data);
    completeBadge2(my_data);
    completeBadge3(my_data);
    completeBadge4();
    completeBadge5();
    completeBadge6();
    completeBadge7();
    completeBadge8();
    completeBadge9(my_data);
    completeBadge10(my_data);
    completeBadge11(my_data);
    completeBadge12(my_data);

    // 모든 팝업을 토글하는 함수
    function badgePopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }

    // 이벤트 위임을 통해 question-icon 클릭 이벤트 처리
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('mypage_badge_img')) {
            const popupId = event.target.getAttribute('data-popup');
            badgePopup(popupId);
        }

        if (event.target.classList.contains('close')) {
            const popupId = event.target.getAttribute('data-popup');
            badgePopup(popupId);
        }
    });

    // 클릭 이벤트가 팝업 외부에서 발생하면 팝업을 닫음
    window.onclick = function (event) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    };

    function completeBadge1(user_data) {
        if (user_data.posts_num >= 1) {
            document.getElementById('progress1').style.width = 100 + '%';
        }
    }
    function completeBadge2(user_data) {
        if (user_data.posts_num >= 4) {
            document.getElementById('progress2').style.width = 100 + '%';
        } else {
            document.getElementById('progress2').style.width = (user_data.posts_num / 4) * 100 + '%';
        }
    }
    function completeBadge3(user_data) {
        if (user_data.posts_num >= 8) {
            document.getElementById('progress3').style.width = 100 + '%';
        } else {
            document.getElementById('progress3').style.width = (user_data.posts_num / 8) * 100 + '%';
        }
    }
    function completeBadge4() {}
    function completeBadge5() {}
    function completeBadge6() {}
    function completeBadge7() {}
    function completeBadge8() {}
    function completeBadge9(user_data) {
        if (user_data.followings_count >= 1) {
            document.getElementById('progress9').style.width = 100 + '%';
        }
    }
    function completeBadge10(user_data) {
        if (user_data.followers_count >= 1) {
            document.getElementById('progress10').style.width = 100 + '%';
        }
    }
    function completeBadge11(user_data) {
        if (user_data.followers_count >= 50) {
            document.getElementById('progress11').style.width = 100 + '%';
        } else {
            document.getElementById('progress11').style.width = (user_data.posts_num / 50) * 100 + '%';
        }
    }
    function completeBadge12(user_data) {
        if (user_data.followers_count >= 100) {
            document.getElementById('progress12').style.width = 100 + '%';
        } else {
            document.getElementById('progress12').style.width = (user_data.posts_num / 100) * 100 + '%';
        }
    }

    // 뱃지 보유/미보유 라디오 버튼 클릭 이벤트 처리
    document.querySelector('input[name="badge_list"][value="owned"]').addEventListener('change', function () {
        document.querySelectorAll('.mypage_badge_img').forEach((badge) => {
            if (badge.classList.contains('open')) {
                badge.style.display = 'inline';
            } else {
                badge.style.display = 'none';
            }
        });
    });

    document.querySelector('input[name="badge_list"][value="not_owned"]').addEventListener('change', function () {
        document.querySelectorAll('.mypage_badge_img').forEach((badge) => {
            if (badge.classList.contains('open')) {
                badge.style.display = 'none';
            } else {
                badge.style.display = 'inline';
            }
        });
    });
});
