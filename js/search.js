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

const articlesPerPage = 6;
const maxVisiblePages = 5;
let currentPage = 1;
let data = []; // Initialize data as an empty array
let filteredData = data; // Initialize with all data
const totalPages = () => Math.ceil(filteredData.length / articlesPerPage);

document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.bottomTabs');
    const colorFilters = document.querySelectorAll('input[name="color"]');
    const infoContainer = document.getElementById('infoContainer');

    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        getPostInfo()
            .then((data) => {
                filteredData = data; // Initialize filteredData with fetched data
                updatePagination();
                displayArticles(currentPage);
                colorFilters.forEach((filter) => {
                    filter.addEventListener('change', function () {
                        const selectedColor = this.value;
                        console.log(selectedColor);
                        if (selectedColor === 'all') {
                            filteredData = data;
                        } else {
                            filteredData = data.filter(
                                (article) => article.color === getColorKorfromEng(selectedColor)
                            );
                        }
                        currentPage = 1;
                        updatePagination();
                        displayArticles(currentPage);
                    });
                });
                infoContainer.textContent = `#열정 #행동 #사회성 #모험 #행복 #창의성 #균형 #성장 #평온 #지혜 #독창성 #변화`;
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    filteredData = data; // Initialize filteredData with fetched data
                                    updatePagination();
                                    displayArticles(currentPage);
                                    colorFilters.forEach((filter) => {
                                        filter.addEventListener('change', function () {
                                            let infoText = '';

                                            switch (filter.value) {
                                                case 'all':
                                                    infoText =
                                                        '#열정 #행동 #사회성 #모험 #행복 #창의성 #균형 #성장 #평온 #지혜 #독창성 #변화';
                                                    textColor = 'black';

                                                    break;
                                                case 'red':
                                                    infoText = '#열정 #행동';
                                                    textColor = '#D47C7C ';
                                                    break;
                                                case 'orange':
                                                    infoText = '#사회성 #모험';
                                                    textColor = '#FCBF81  ';
                                                    break;
                                                case 'yellow':
                                                    infoText = '#행복 #창의성';
                                                    textColor = 'rgba(209, 209, 0, 0.84) ';
                                                    break;
                                                case 'green':
                                                    infoText = '#균형#성장';
                                                    textColor = '#9CB18E ';
                                                    break;
                                                case 'blue':
                                                    infoText = '#평온#지혜';
                                                    textColor = '#5D83AF ';

                                                    break;
                                                case 'purple':
                                                    infoText = '#독창성 #변화';
                                                    textColor = '#93698B ';
                                                    break;
                                                default:
                                                    infoText = '';
                                            }
                                            // infoContainer의 내용을 선택한 색상에 따라 업데이트합니다
                                            infoContainer.textContent = infoText;
                                            infoContainer.style.color = textColor;

                                            const selectedColor = this.value;
                                            console.log(selectedColor);
                                            if (selectedColor === 'all') {
                                                filteredData = data;
                                            } else {
                                                filteredData = data.filter(
                                                    (article) => article.color === getColorKorfromEng(selectedColor)
                                                );
                                            }
                                            currentPage = 1;
                                            updatePagination();
                                            displayArticles(currentPage);
                                        });
                                    });
                                    infoContainer.textContent = `#열정 #행동 #사회성 #모험 #행복 #창의성 #균형 #성장 #평온 #지혜 #독창성 #변화`;
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
    const articlesToDisplay = filteredData.slice(startIndex, endIndex);

    const container = document.getElementById('search_article_div');
    container.innerHTML = '';

    articlesToDisplay.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('search_article');

        articleDiv.style.backgroundColor = getColorCodefromKor(article.color);

        articleDiv.setAttribute('onclick', `viewArticle(${article.id})`);
        articleDiv.innerHTML = `
            <div class="search_article_title">${article.title}</div>
            <div class="search_article_subtitle">주간 ${article.user.nickname} ${article.user.posts_num}호</div>
        `;
        container.appendChild(articleDiv);
    });
}

function viewArticle(id) {
    localStorage.setItem('post_id', id);
    location.href = `./article.html`;
}

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
