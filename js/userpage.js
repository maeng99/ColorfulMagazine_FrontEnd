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

function getUserInfo() {
    return fetch(API_SERVER_DOMAIN + '/users/profile', {
        method: 'GET',
        header: {},
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });
}

var resultData = {};

document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.bottomTabs');
    const colorFilters = document.querySelectorAll('input[name="color"]');

    const selectedUser = localStorage.getItem('user_id');

    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        getPostInfo(accessToken)
            .then((data) => {
                const selectedUserData = data.find((data) => data.id == selectedUser);
                colorFilters.forEach((filter) => {
                    filter.addEventListener('change', function () {
                        const selectedColor = this.value;

                        if (selectedColor === 'all') {
                            userFilteredData = data.filter((article) => article.user.id === selectedUser);
                        } else {
                            userFilteredData = data.filter(
                                (article) =>
                                    article.user.id === selectedUser &&
                                    article.color === getColorKorfromEng(selectedColor)
                            );
                        }
                        currentPage = 1;
                        updatePagination();
                        displayArticles(currentPage);
                    });
                });
                createcard(selectedUserData);
            })
            .catch((error) => {
                alert(error);
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    const selectedUserData = data.find((data) => data.id == selectedUser);
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

    function getColorKorfromEng(colorName) {
        const colorMap = {
            red: '빨강',
            orange: '주황',
            yellow: '노랑',
            green: '초록',
            blue: '파랑',
            purple: '보라',
        };
        return colorMap[colorName];
    }

    tabsContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('bottomTab')) {
            if (target.innerText === '<<') {
                currentPage = 1;
            } else if (target.innerText === '<') {
                if (currentPage > 1) currentPage--;
            } else if (target.innerText === '>') {
                if (currentPage < totalPages()) currentPage++;
            } else if (target.innerText === '>>') {
                currentPage = totalPages();
            } else {
                currentPage = parseInt(target.innerText);
            }
            updatePagination();
            displayArticles(currentPage);
        }
    });

    updatePagination();
    displayArticles(currentPage);
});

function updatePagination() {
    const tabsContainer = document.querySelector('.bottomTabs');
    tabsContainer.innerHTML = '';

    const createButton = (text, isActive = false) => {
        const button = document.createElement('button');
        button.classList.add('bottomTab');
        if (isActive) button.classList.add('active');
        button.innerText = text;
        return button;
    };

    tabsContainer.appendChild(createButton('<<'));
    tabsContainer.appendChild(createButton('<'));

    let startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
    let endPage = Math.min(totalPages(), startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
        tabsContainer.appendChild(createButton(i, i === currentPage));
    }

    tabsContainer.appendChild(createButton('>'));
    tabsContainer.appendChild(createButton('>>'));
}

function displayArticles(page) {
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToDisplay = userFilteredData.slice(startIndex, endIndex);

    const container = document.getElementById('mypage_article_div');
    container.innerHTML = '';

    articlesToDisplay.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('mypage_article');
        articleDiv.style.backgroundColor = article.color;

        articleDiv.setAttribute('onclick', `viewArticle(${article.id})`);
        articleDiv.innerHTML = `
            <div class="mypage_article_title">${article.title}</div>
            <div class="mypage_article_subtitle">주간 ${article.user.nickname} ${article.user.posts_num}호</div>
        `;
        container.appendChild(articleDiv);
    });
}

function viewArticle(id) {
    localStorage.setItem('id', id);
    location.href = `./article.html`;
}

function getColorCode(colorName) {
    const colorMap = {
        red: '#EEC8C8',
        orange: '#FFE5CA',
        yellow: '#FCF4C5',
        green: '#D5DFD1',
        blue: '#BBCBDE',
        purple: '#D2C0CE',
    };
    return colorMap[colorName];
}

const articlesPerPage = 5;
const maxVisiblePages = 5;
let currentPage = 1;
let data = []; // Initialize data as an empty array
let userFilteredData = []; // Initialize as an empty array
const totalPages = () => Math.ceil(userFilteredData.length / articlesPerPage);

document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.bottomTabs');
    const colorFilters = document.querySelectorAll('input[name="color"]');

    const selectedUser = localStorage.getItem('user_id');
    const selectedUserData = data.find((data) => data.id == selectedUser);

    // Initialize userFilteredData after DOM is loaded
    userFilteredData = post_data.filter((article) => article.user.id == selectedUser);
    console.log(userFilteredData);

    colorFilters.forEach((filter) => {
        filter.addEventListener('change', function () {
            const selectedColor = this.value;
            if (selectedColor === 'all') {
                userFilteredData = post_data.filter((article) => article.user.id == selectedUser);
            } else {
                userFilteredData = post_data.filter(
                    (article) => article.user.id == selectedUser && article.color === getColorCode(selectedColor)
                );
            }
            currentPage = 1;
            updatePagination();
            displayArticles(currentPage);
        });
    });

    tabsContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('bottomTab')) {
            if (target.innerText === '<<') {
                currentPage = 1;
            } else if (target.innerText === '<') {
                if (currentPage > 1) currentPage--;
            } else if (target.innerText === '>') {
                if (currentPage < totalPages()) currentPage++;
            } else if (target.innerText === '>>') {
                currentPage = totalPages();
            } else {
                currentPage = parseInt(target.innerText);
            }
            updatePagination();
            displayArticles(currentPage);
        }
    });

    createcard(selectedUserData);
    updatePagination();
    displayArticles(currentPage);
});

function isFollow() {
    var follow_btn = document.querySelector('#follow_state');
    if (follow_btn.innerText === '팔로우 취소') {
        if (confirm('정말 취소하시겠습니까?')) {
            alert('취소되었습니다.');
            follow_btn.innerText = '팔로우';
            follow_btn.style.backgroundColor = '#bdc6dc';
        } else {
        }
    } else if (follow_btn.innerText === '팔로우') {
        follow_btn.innerText = '팔로우 취소';
        follow_btn.style.backgroundColor = '#fff';
    }
}

function createcard(user) {
    const profile = document.querySelector('.mypage_profile');
    var img_src = './img/profile.png';
    if (user.profile_image !== null) {
        img_src = user.profile_image;
    }

    profile.innerHTML = `
        <div class="mypage_profile_img_text">
            <div>
                <img src="${img_src}" class="mypage_profile_img" />
            </div>
            <div class="mypage_profile_text">
                <span class="mypage_profile_nickname">${user.nickname}</span><br /><br />
                <button type="button" class="mypage_follower_btn" onclick="location.href='follower_list.html'">
                    팔로워 <span id="follower_num">${user.followers_count}</span>명</button
                ><br />
                <button type="button" class="mypage_following_btn" onclick="location.href='following_list.html'">
                    팔로잉 <span id="following_num">${user.following_count}</span>명
                </button>
            </div>
        </div>

        <div class="mypage_main_btn_div">
            <button
                type="button"
                id="follow_state"
                class="mypage_main_btn follow"
                style="width: 50%; padding: 10px; background-color: #bdc6dc"
                onclick="isFollow()"
            >
                팔로우
            </button>
        </div>
        `;
}
