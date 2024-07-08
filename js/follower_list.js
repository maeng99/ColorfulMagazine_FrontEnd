document.querySelectorAll('.follower_state').forEach((button) => {
    button.addEventListener('click', function () {
        var followers = document.getElementById('follower_list_div');

        if (this.innerText === '삭제') {
            if (confirm('정말 삭제하시겠습니까?')) {
                alert('삭제되었습니다.');
                this.closest('.followers').remove();
            } else {
            }
        } else if (this.innerText === '팔로우') {
            this.innerText = '삭제';
            this.style.backgroundColor = '';
        }
    });
});
