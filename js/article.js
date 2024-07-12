const data = [
    {
        id: 1,
        title: '색깔이 우리에게 주는 힘',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#BBCBDE',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 5,
            nickname: '아기사자',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 22,
        },
    },
    {
        id: 55,
        title: '비가 오는 날',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#D5DFD1',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 6,
            nickname: '수뭉이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 22,
        },
    },
    {
        id: 30,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FCF4C5',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 7,
            nickname: '춘식이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 400,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#EEC8C8',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 8,
            nickname: '고양이',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 200,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FFE5CA',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 9,
            nickname: '햄스터',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
    {
        id: 10000,
        title: '지피티의 하루',
        content:
            '오늘은 아침에 일어나서 운동을 갔다. 산책을 하며 시원한 바람을 느끼고, 주변의 아름다운 자연경관을 감상했다. 점심에는 친구들과 함께 맛있는 피자를 먹었고, 오랜만에 만나서 즐거운 시간을 보냈다. 오후에는 카페에 가서 책을 읽으며 시간을 보냈고, 저녁에는 가족과 함께 저녁식사를 하며 하루를 마무리했다. 오늘 하루도 평화롭고 행복하게 보낸 것 같다.',
        comment: '삐빅',
        color: '#FCF4C5',
        image: null,
        date: '2024-07-05',
        created_at: '2024-07-07T21:04:09.597236Z',
        comments_num: 1,
        user: {
            id: 10,
            nickname: '남자',
            email: 'asdf@gmail.com',
            gender: '남자',
            age: 47,
            profile_image: null,
            followers_count: 0,
            following_count: 0,
            posts_num: 2,
        },
    },
];

function getColorName(colorCode) {
    const colorMap = {
        '#EEC8C8': '빨강',
        '#FFE5CA': '주황',
        '#FCF4C5': '노랑',
        '#D5DFD1': '초록',
        '#BBCBDE': '파랑',
        '#D2C0CE': '보라',
    };
    return colorMap[colorCode];
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedID = localStorage.getItem('post_id');
    const selectedData = data.find((data) => data.id == selectedID);
    localStorage.setItem('user_id', selectedData.user.id);
    createcard(selectedData);
});

function createcard(article) {
    const container = document.querySelector('.article_div');

    container.style.backgroundColor = article.color;

    container.innerHTML = `
    <div class="article_unit">[${getColorName(
        article.color
    )}] 주간&nbsp<a class="article_username" href="./userpage.html">${article.user.nickname}</a>&nbsp${
        article.user.posts_num
    }호</div>
    <div class="article_title">${article.title}</div>
    <div class="article_date">${article.date}</div>
    <div class="article_content">${article.content}</div>
    <hr class="artile_hr" />
    <div>
        <div class="article_hrt">
            <i id="article_hrt_state" class="fa-regular fa-heart" onclick="hrtState()"></i>
            <span id="article_hrt_num" class="article_hrt_num">${article.comments_num}</span>
        </div>
        <div class="article_comment">${article.comment}</div>
    </div>
        `;
}

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
