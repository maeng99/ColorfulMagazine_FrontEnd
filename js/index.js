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
