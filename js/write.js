document.querySelectorAll('.write_color_name').forEach((label) => {
    label.addEventListener('click', function () {
        var writeBackground = document.getElementById('write_input_div');

        if (this.innerText === '빨강') {
            writeBackground.style.backgroundColor = 'rgba(238, 200, 200, 0.2)';
        } else if (this.innerText === '주황') {
            writeBackground.style.backgroundColor = 'rgba(255, 229, 202, 0.2)';
        } else if (this.innerText === '노랑') {
            writeBackground.style.backgroundColor = 'rgba(252, 244, 197, 0.2)';
        } else if (this.innerText === '초록') {
            writeBackground.style.backgroundColor = 'rgba(213, 223, 209, 0.2)';
        } else if (this.innerText === '파랑') {
            writeBackground.style.backgroundColor = 'rgba(187, 203, 222, 0.2)';
        } else if (this.innerText === '보라') {
            writeBackground.style.backgroundColor = 'rgba(210, 192, 206, 0.2)';
        }
    });
});

document.getElementById('write_cancel').addEventListener('click', function () {
    const userConfirmed = confirm('정말 취소하시겠습니까? 수정 사항이 저장되지 않습니다.');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 페이지를 나갑니다.
        history.back(); // 여기에 취소 후 이동할 페이지 URL을 넣으세요.
    } else {
        // 사용자가 '취소'를 클릭했을 때 페이지를 유지합니다.
        // 아무 작업도 하지 않습니다.
    }
});
