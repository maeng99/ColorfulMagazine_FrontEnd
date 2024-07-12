const ex_data = [
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
    {
        id: 400,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#EEC8C8',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '고양이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 200,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FFE5CA',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '햄스터',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 10000,
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
            nickname: '남자',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 200,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FFE5CA',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '햄스터',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 10000,
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
            nickname: '남자',
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

var API_SERVER_DOMAIN = 'http://127.0.0.1:8000/';

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

function getCurrentUserInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/users/profile/', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user info');
        }
        return response.json();
    });
}

function getNewPostInfo() {
    return fetch(API_SERVER_DOMAIN + '/posts/posts', {
        method: 'GET',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });
}

function getFollowingPostInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/posts/my', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    /*
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');
    
    if (accessToken) {
        getNewPostInfo()
            .then((data) => {
                displayNewArticles();
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    displayArticles();
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
    displayNewArticles();
    displayFollowingArticles();
});

function displayNewArticles() {
    const articlesToDisplay = ex_data.slice(0, 5);

    const container = document.getElementById('main_new_article_div');
    container.innerHTML = '';

    articlesToDisplay.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('main_article_content');

        articleDiv.setAttribute('onclick', `viewArticle(${article.id})`);
        articleDiv.innerHTML = `
            <span class="main_article_title">${article.title}<br /></span>
            <span class="main_article_subtitle">주간 ${article.user.nickname} ${article.user.posts_num}호</span>
            <hr class="main_hr" />
        `;
        container.appendChild(articleDiv);
    });
}

function displayFollowingArticles() {
    const articlesToDisplay = ex_data.slice(0, 5);

    const container = document.getElementById('main_follow_article_div');
    container.innerHTML = '';

    articlesToDisplay.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('main_article_content');

        articleDiv.setAttribute('onclick', `viewArticle(${article.id})`);
        articleDiv.innerHTML = `
            <span class="main_article_title">${article.title}<br /></span>
            <span class="main_article_subtitle">주간 ${article.user.nickname} ${article.user.posts_num}호</span>
            <hr class="main_hr" />
        `;
        container.appendChild(articleDiv);
    });
}

function viewArticle(id) {
    localStorage.setItem('id', id);
    location.href = `./article.html`;
}

const articlesPerPage = 5;
let data = []; // Initialize data as an empty array

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
