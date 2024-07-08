function mypageImgPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// 클릭 이벤트가 팝업 외부에서 발생하면 팝업을 닫음
window.onclick = function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};

function changeImgFile(input) {
    var file = input.files[0]; //선택된 파일 가져오기

    //새로운 이미지 div 추가
    var newImage = document.createElement('img');
    newImage.setAttribute('class', 'mypage_profile_new_img');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);

    newImage.style.width = '100px';
    newImage.style.height = '100px';
    newImage.style.objectFit = 'cover';
    newImage.style.borderRadius = '40px';

    //팝업 닫기
    mypageImgPopup();

    //기존 요소 삭제
    var container = document.getElementById('mypage_profile_img_div');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //이미지를 image-show div에 추가
    container.appendChild(newImage);
}

document.getElementById('mypage_deleteImg').addEventListener('click', function () {
    const userConfirmed = confirm('정말 삭제하시겠습니까?');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 삭제 함수 실행
        deleteImgFile();
    } else {
        // 사용자가 '취소'를 클릭했을 때 페이지를 유지
    }
});

function deleteImgFile() {
    //새로운 이미지 div 추가
    var baseImage = document.createElement('img');
    baseImage.setAttribute('src', './img/profile.png');
    baseImage.setAttribute('class', 'mypage_profile_img');

    //이미지 source 가져오기
    baseImage.style.width = '80px';
    baseImage.style.height = '80px';

    //팝업 닫기
    mypageImgPopup();

    //기존 요소 삭제
    var container = document.getElementById('mypage_profile_img_div');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //이미지를 image-show div에 추가
    container.appendChild(baseImage);
}

document.getElementById('mypage_edit_cancel').addEventListener('click', function () {
    const userConfirmed = confirm('정말 취소하시겠습니까? 수정 사항이 저장되지 않습니다.');

    if (userConfirmed) {
        // 사용자가 '확인'을 클릭했을 때 페이지를 나갑니다.
        window.location.href = 'mypage.html'; // 여기에 취소 후 이동할 페이지 URL을 넣으세요.
    } else {
        // 사용자가 '취소'를 클릭했을 때 페이지를 유지합니다.
        // 아무 작업도 하지 않습니다.
    }
});
