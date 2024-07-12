var data = {
    result: {
        빨강: 11,
        주황: 6,
        노랑: 7,
        초록: 4,
        파랑: 9,
        보라: 10,
    },
};

var resultData = {};

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

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

function getPostInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/posts/mycolors', {
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
        getPostInfo(accessToken)
            .then((data) => {
                resultData = data;
            })
            .catch((error) => {
                console.error('Failed to fetch posts:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(accessToken, refreshToken)
                        .then((newAccessToken) => {
                            getPostInfo(newAccessToken)
                                .then((data) => {
                                    resultData = data;
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
    resultData = data;
});

function drawChart() {
    var colorData = google.visualization.arrayToDataTable([
        ['Color', 'Num of article'],
        ['빨강', resultData.result.빨강],
        ['주황', resultData.result.주황],
        ['노랑', resultData.result.노랑],
        ['초록', resultData.result.초록],
        ['파랑', resultData.result.파랑],
        ['보라', resultData.result.보라],
    ]);

    var options = {
        legend: 'none',
        backgroundColor: '#f9f5ef',
        pieSliceTextStyle: { color: 'rgb(0,0,0)', opacity: '0.7' },
        slices: {
            0: { color: '#EEC8C8' },
            1: { color: '#FFE5CA' },
            2: { color: '#FCF4C5' },
            3: { color: '#D5DFD1' },
            4: { color: '#BBCBDE' },
            5: { color: '#D2C0CE' },
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('mypage_piechart'));

    google.visualization.events.addListener(chart, 'ready', function () {
        var chartContainer = document.getElementById('mypage_piechart');
        chartContainer.addEventListener('dblclick', function (event) {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                var color = colorData.getValue(selectedItem.row, 0);
                localStorage.setItem('selectedColor', color);
                window.location.href = 'mypage_article.html';
            }
        });
    });

    chart.draw(colorData, options);
}
