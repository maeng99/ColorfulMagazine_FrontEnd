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

    chart.draw(data, options);
}
