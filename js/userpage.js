const post_data = [
    {
        id: 1,
        title: '색깔이 우리에게 주는 힘',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#BBCBDE',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '아기사자',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 22,
        },
    },
    {
        id: 55,
        title: '비가 오는 날',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#D5DFD1',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '수뭉이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 22,
        },
    },
    {
        id: 30,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FCF4C5',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '춘식이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
];
const ex_data = [
    {
        id: 5,
        nickname: '아기사자',
        email: 'asdf@gmail.com',
        gender: '남자',
        age: 47,
        profile_image: null,
        followers_count: 200,
        following_count: 134,
        posts_num: 22,
    },
    {
        id: 6,
        nickname: '수뭉이',
        email: 'asdf@gmail.com',
        gender: '남자',
        age: 47,
        profile_image: null,
        followers_count: 0,
        following_count: 0,
        posts_num: 22,
    },
    {
        id: 7,
        nickname: '춘식이',
        email: 'asdf@gmail.com',
        gender: '남자',
        age: 47,
        profile_image: null,
        followers_count: 0,
        following_count: 0,
        posts_num: 2,
    },
];

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

function getUserInfo() {
    return fetch(API_SERVER_DOMAIN + '/users', {
        method: 'GET',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });
}

function getPostInfo() {
    return fetch(API_SERVER_DOMAIN + '/posts/posts', {
        method: 'GET',
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

    /*
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');
    
    if (accessToken) {
        getPostInfo(accessToken)
            .then((data) => {
                filteredData = data; // Initialize filteredData with fetched data
                updatePagination();
                displayArticles(currentPage);
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    filteredData = data; // Initialize filteredData with fetched data
                                    updatePagination();
                                    displayArticles(currentPage);
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

    const selectedUser = localStorage.getItem('user_id');
    const selectedColor = localStorage.getItem('selectedColor');

    if (selectedColor) {
        const colorMap = {
            빨강: 'red',
            주황: 'orange',
            노랑: 'yellow',
            초록: 'green',
            파랑: 'blue',
            보라: 'purple',
        };
        const colorValue = colorMap[selectedColor];
        if (colorValue) {
            document.getElementById(colorValue).checked = true;
        }
        filteredData = post_data.filter((article) => article.color === getColorCode(colorValue));
        localStorage.removeItem('selectedColor');
    }

    colorFilters.forEach((filter) => {
        filter.addEventListener('change', function () {
            const selectedColor = this.value;
            if (selectedColor === 'all') {
                filteredData = post_data;
            } else {
                filteredData = post_data.filter((article) => article.color === getColorCode(selectedColor));
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

    createcard(selectedUser);
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
    const articlesToDisplay = filteredData.slice(startIndex, endIndex);

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
let filteredData = post_data; // Initialize with all data
const totalPages = () => Math.ceil(filteredData.length / articlesPerPage);

document.getElementById('sumung_follow_state').addEventListener('click', function () {
    if (this.innerText === '팔로우 취소') {
        if (confirm('정말 취소하시겠습니까?')) {
            alert('취소되었습니다.');
            this.innerText = '팔로우';
            this.style.backgroundColor = '#bdc6dc';
        } else {
        }
    } else if (this.innerText === '팔로우') {
        this.innerText = '팔로우 취소';
        this.style.backgroundColor = '#fff';
    }
});

function createcard(user) {
    const profile = document.querySelector('.mypage_profile');

    profile.innerHTML = `
        <div class="mypage_profile_img_text">
            <div>
                <img src="./img/profile.png" class="mypage_profile_img" />
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
                id="sumung_follow_state"
                class="mypage_main_btn follow"
                style="width: 50%; padding: 10px; background-color: #bdc6dc"
            >
                팔로우
            </button>
        </div>
        `;
}