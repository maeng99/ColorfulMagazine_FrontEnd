const my_data = {
    id: 5,
    nickname: '유세리',
    email: 'asdf@gmail.com',
    gender: '여자',
    age: 44,
    profile_image: null,
    followers_count: 520,
    following_count: 0,
    posts_num: 52,
};

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
    return fetch(API_SERVER_DOMAIN + 'users/refresh/', {
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

function getMyInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + 'users/my', {
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
                createcard(data);
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getMyInfo(newAccessToken)
                                .then((data) => {
                                    createcard(data);
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
    console.log(my_data);
    createcard(my_data);
});

function createcard(user) {
    const profile = document.querySelector('.mypage_profile_img_text');
    var img_src = './img/profile.png';
    if (user.profile_image !== null) {
        img_src = user.profile_image;
    }

    profile.innerHTML = `
        <div>
            <img src="${img_src}" class="mypage_profile_img" />
        </div>
        <div class="mypage_profile_text">
            <span class="mypage_profile_nickname">${user.nickname}</span><br /><br />
            <button type="button" class="mypage_follower_btn" onclick="location.href='follower_list.html'">
                팔로워 <span>${user.followers_count}</span>명</button
            ><br />
            <button type="button" class="mypage_following_btn" onclick="location.href='following_list.html'">
                팔로잉 <span>${user.following_count}</span>명
            </button>
        </div>
        `;
}
