<img src="https://github.com/user-attachments/assets/d6b0c422-310c-4cbe-9cc0-f9d9943454a6" width="100%"/>

# 📒멋사 대학 12기 교내 해커톤 - "색다른 주간지": 색깔로 힐링하는 주간지 서비스 (교내톤 5팀)📒
- 연합동아리 "멋쟁이사자처럼 대학 12기 교내 해커톤"에서 진행한 프로젝트
<br/>

## 1. Project Overview
- 프로젝트 이름: **"색다른 주간지"**
- 프로젝트 주제: 셀프 주간지를 작성하면서 그 주간에 어떠한 색깔로 살아왔는지 공유할 수 있는 서비스
- 프로젝트 기간: 2024.06. ~ 2024.07. (1개월)
<br/>

## 2. Team Members
Team: **"교내톤 5팀"** (7명)
| 맹의현 | 유세리 | 안세빈 | 김다연 | 서현석 | 고명은 | 이서진 |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| PM/FE | FE | FE | BE | BE | Design | Design |
<br/>

## 3. Key Points
- **색과의 연관성**:
  - 주간지 작성 시에 색을 선택
  <br />
  <img src="https://github.com/user-attachments/assets/c9f3a111-48ba-4306-9c6c-8d4dc586d124" width="300px"/>

- **팔로우 기능**:
  - 팔로우를 통해 다른 사람들의 주간지를 서로 공유하고 공감할 수 있는 기회 제공
  <br />

- **뱃지 기능**:
  - 업적 달성을 통해 뱃지 획득
  <br />
  <img src="https://github.com/user-attachments/assets/caf2790e-cd41-4eae-b457-12f21c516323" width="400px"/>
<br/>
<br/>

## 4. Technology Stack
- **Design:** Figma
  
- **FrontEnd:** HTML, CSS, JS
  
- **BackEnd:** django
  
- **Database:** MySQL

- **Cooperation:** Git, Notion
<br/>

## 5. Project Structure(FE)
```plaintext
─ColorfulMagazine_FrontEnd/
│  article.html
│  follower_list.html
│  following_article.html
│  following_list.html
│  index.html
│  info_source.txt
│  login.html
│  mypage.html
│  mypage_article.html
│  mypage_badge.html
│  mypage_color.html
│  mypage_edit.html
│  README.md
│  search.html
│  signup.html
│  userpage.html
│  write.html
│  색다른 주간지_PDF.pdf
│
├─components/
│      article_list.css
│      bottomTabs.css
│      nav.css
│
├─css/
│  │  login.css
│  │  reset.css
│  │  signup.css
│  │  styles.css
│  │
│  └─screens/
│          article.css
│          follower_list.css
│          following_list.css
│          index.css
│          login.css
│          mypage.css
│          mypage_article.css
│          mypage_badge.css
│          mypage_color.css
│          mypage_edit.css
│          search.css
│          signup.css
│          write.css
│
├─img/
│  │ ...
│  │
│  ├─badges/
│  │      ...
│  │
│  └─best_colors/
│          ...
│
└─js/
    │  article.js
    │  follower_list.js
    │  following_article.js
    │  following_list.js
    │  index.js
    │  login.js
    │  mypage.js
    │  mypage_article.js
    │  mypage_badge.js
    │  mypage_color.js
    │  mypage_edit.js
    │  search.js
    │  signup.js
    │  userpage.js
    │  write.js
    │
    └─components/
            article_list.js
            pasination.js
            validation.js
```
<br/>

## 6. 발표 PDF
- 프로젝트 자세히 알아보기<br />[📄 ColorfulMagazine_PDF](https://github.com/maeng99/ColorfulMagazine_FrontEnd/blob/main/%EC%83%89%EB%8B%A4%EB%A5%B8%20%EC%A3%BC%EA%B0%84%EC%A7%80_PDF.pdf)
