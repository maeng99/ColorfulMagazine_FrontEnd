google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Color', 'Num of article'],
        ['빨강', 11],
        ['주황', 2],
        ['노랑', 2],
        ['초록', 2],
        ['파랑', 7],
        ['보라', 7],
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
                var color = data.getValue(selectedItem.row, 0);
                handlePieSliceClick(color);
            }
        });
    });

    chart.draw(data, options);
}

function handlePieSliceClick(color) {
    var urlMap = {
        빨강: 'mypage_article.html?setting=red',
        주황: 'mypage_article.html?setting=orange',
        노랑: 'mypage_article.html?setting=yellow',
        초록: 'mypage_article.html?setting=green',
        파랑: 'mypage_article.html?setting=blue',
        보라: 'mypage_article.html?setting=purple',
    };

    var url = urlMap[color];
    if (url) {
        window.location.href = url;
    }
}
