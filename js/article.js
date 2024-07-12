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

function getPostInfo() {
    return fetch(API_SERVER_DOMAIN + '/posts/posts', {
        method: 'GET',
        header: {},
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });
}

function getColorName(colorCode) {
    const colorMap = {
        '#EEC8C8': '빨강',
        '#FFE5CA': '주황',
        '#FCF4C5': '노랑',
        '#D5DFD1': '초록',
        '#BBCBDE': '파랑',
        '#D2C0CE': '보라',
    };
    return colorMap[colorCode];
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedID = localStorage.getItem('post_id');

    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        getPostInfo()
            .then((data) => {
                const selectedData = data.find((data) => data.id == selectedID);
                localStorage.setItem('user_id', selectedData.user.id);
                createcard(selectedData);
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    const selectedData = data.find((data) => data.id == selectedID);
                                    localStorage.setItem('user_id', selectedData.user.id);
                                    createcard(selectedData);
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
    }
});

function getColorCodefromKor(colorName) {
    const colorMap = {
        빨강: '#EEC8C8',
        주황: '#FFE5CA',
        노랑: '#FCF4C5',
        초록: '#D5DFD1',
        파랑: '#BBCBDE',
        보라: '#D2C0CE',
    };
    return colorMap[colorName];
}

function createcard(article) {
    const container = document.querySelector('.article_div');

    container.style.backgroundColor = getColorCodefromKor(article.color);

    container.innerHTML = `
    <div class="article_unit">[${article.color}] 주간&nbsp<a class="article_username" href="./userpage.html">${article.user.nickname}</a>&nbsp${article.user.posts_num}호</div>
    <div class="article_title">${article.title}</div>
    <div class="article_date">${article.date}</div>
    <div class="article_content">${article.content}</div>
    <hr class="artile_hr" />
    <div>
        <div class="article_hrt">
            <i id="article_hrt_state" class="fa-regular fa-heart" onclick="hrtState()"></i>
            <span id="article_hrt_num" class="article_hrt_num">${article.comments_num}</span>
        </div>
        <div class="article_comment">${article.comment}</div>
    </div>
        `;
}

function hrtState() {
    var hrtImg = document.getElementById('article_hrt_state');
    var hrtNum = Number(document.getElementById('article_hrt_num').innerText);

    if (hrtImg.classList.contains('fa-regular')) {
        hrtImg.classList.remove('fa-regular');
        hrtImg.classList.add('fa-solid');
        hrtNum++;
    } else {
        hrtImg.classList.remove('fa-solid');
        hrtImg.classList.add('fa-regular');
        hrtNum--;
    }
    document.getElementById('article_hrt_num').innerText = String(hrtNum);
}
