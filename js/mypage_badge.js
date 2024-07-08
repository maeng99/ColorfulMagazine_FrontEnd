document.addEventListener('DOMContentLoaded', function () {
    // 모든 팝업을 토글하는 함수
    function badgePopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }

    // 이벤트 위임을 통해 question-icon 클릭 이벤트 처리
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('mypage_badge_img')) {
            const popupId = event.target.getAttribute('data-popup');
            badgePopup(popupId);
        }

        if (event.target.classList.contains('close')) {
            const popupId = event.target.getAttribute('data-popup');
            badgePopup(popupId);
        }
    });

    // 클릭 이벤트가 팝업 외부에서 발생하면 팝업을 닫음
    window.onclick = function (event) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    };
});
