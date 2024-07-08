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
