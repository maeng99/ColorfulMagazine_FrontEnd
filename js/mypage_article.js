/*
파이차트에서 넘어올 때 - default값 조정으로 시도해봐도 될듯?
function applySetting(setting) {
    var content = document.getElementById('content');
    switch (setting) {
        case 'red':
            content.style.backgroundColor = '#EEC8C8';
            content.innerHTML = '<p>빨강 설정</p>';
            break;
        case 'orange':
            content.style.backgroundColor = '#FFE5CA';
            content.innerHTML = '<p>주황 설정</p>';
            break;
        case 'yellow':
            content.style.backgroundColor = '#FCF4C5';
            content.innerHTML = '<p>노랑 설정</p>';
            break;
        case 'green':
            content.style.backgroundColor = '#D5DFD1';
            content.innerHTML = '<p>초록 설정</p>';
            break;
        case 'blue':
            content.style.backgroundColor = '#BBCBDE';
            content.innerHTML = '<p>파랑 설정</p>';
            break;
        case 'purple':
            content.style.backgroundColor = '#D2C0CE';
            content.innerHTML = '<p>보라 설정</p>';
            break;
        default:
            content.innerHTML = '<p>기본 설정</p>';
            break;
    }
}
*/

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.bottomTab');
    if (tabs.length > 0) {
        tabs[2].classList.add('active');
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            tabs.forEach((t) => t.classList.remove('active'));
            this.classList.add('active');

            if (
                this.innerText === '<<' ||
                this.innerText === '<' ||
                this.innerText === '>' ||
                this.innerText === '>>'
            ) {
                const clickedTab = this;
                setTimeout(() => {
                    clickedTab.classList.remove('active');
                }, 200);
            }
        });
    });
});
