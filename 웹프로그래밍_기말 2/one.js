function refreshPage() {
    location.reload();
}

function openLoginPage() {
    window.location.href = 'login.html';
}

function openjoinPage() {
    window.location.href = 'member.html';
}

function openinfo(url) {
    window.location.href = 'info.html';
}

function openresrv(url) {
    window.location.href = 'resrv.html';
}

function opencommunity(url) {
    window.location.href = 'community.html';
}

function openPopupStoreDetails1(url) {
    window.location.href = 'two1.html';
}

function openPopupStoreDetails2(url) {
    window.location.href = 'two2.html';
}

function openPopupStoreDetails3(url) {
    window.location.href = 'two3.html';
}

function openPopupStoreDetails4(url) {
    window.location.href = 'two4.html';
}

function openPopupStoreDetails5(url) {
    window.location.href = 'two5.html';
}

function openPopupStoreDetails6(url) {
    window.location.href = 'two5_2.html';
}

let slideIndex = 0;
showSlides(slideIndex);
setInterval(() => {
    showSlides(++slideIndex);
}, 5000); // 5초마다 슬라이드 변경

function changeSlide(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slider .slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex].style.display = 'block';
}

// 상단바 스크롤 감지하여 보이게 하는 기능
let lastScrollTop = 0;
window.addEventListener(
    'scroll',
    function () {
        let header = document.getElementById('header');
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            header.style.top = '-80px'; // 스크롤 내릴 때 상단바 숨기기
        } else {
            header.style.top = '0'; // 스크롤 올릴 때 상단바 보이기
        }
        lastScrollTop = st <= 0 ? 0 : st;
    },
    false
);

$(document).ready(function () {
    var pointerSize = $('.pointer').width() / 2;
    $(document).on('mousemove', function (e) {
        $('.pointer').css('top', e.pageY - pointerSize);
        $('.pointer').css('left', e.pageX - pointerSize);
        $('.pointer').fadeIn();
    });

    // Basic
    $(".btn, input, a, textarea").on("mouseover", function () {
        $('.pointer').addClass('large');
    }); // Hover

    $(".btn, input, a, textarea").on("mouseout", function () {
        $('.pointer').removeClass('large');
    }); // Mouseout
});

function searchPopupStores() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const popupStores = document.querySelectorAll('.popup-store');

    let found = false;

    popupStores.forEach(store => {
        const storeTitle = store.querySelector('.popup-store-title').innerText.toLowerCase();
        if (storeTitle.includes(query)) {
            store.style.display = 'flex'; // 검색어와 일치하는 팝업스토어를 표시합니다.
            found = true;
        } else {
            store.style.display = 'none'; // 검색어와 일치하지 않는 팝업스토어를 숨깁니다.
        }
    });

    if (!found) {
        const noResult = document.createElement('div');
        noResult.classList.add('no-result');
        noResult.innerText = '일치하는 결과가 없습니다.';
        document.querySelector('.popup-stores').appendChild(noResult);
    }

    return false; // 폼 제출을 방지합니다.
}
