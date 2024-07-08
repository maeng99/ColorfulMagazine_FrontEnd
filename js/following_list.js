document.querySelectorAll('.follower_state').forEach((button) => {
    button.addEventListener('click', function () {
        var followers = document.getElementById('follower_list_div');
        if (confirm('정말 취소하시겠습니까?')) {
            alert('취소되었습니다.');
            this.closest('.followers').remove();
        } else {
        }
    });
});
