document.addEventListener('DOMContentLoaded', function () {
    const stores = Array.from(document.querySelectorAll('.popup-store'));

    stores.forEach(store => {
        store.addEventListener('click', function () {
            const url = store.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            } else {
                console.error("URL이 정의되지 않았습니다.");
            }
        });
    });
});

function openmain() {
    window.location.href = 'one.html';
}

function openjoinPage() {
    window.location.href = 'member.html';
}

function openLoginPage() {
    window.location.href = 'login.html';
}

function openinfo() {
    window.location.href = 'info.html';
}

function openreserv() {
    window.location.href = 'resrv.html';
}

function opencommunity() {
    window.location.href = 'community.html';
}

// JavaScript for showing the header on scroll up
let lastScrollTop = 0;
window.addEventListener(
    'scroll',
    function () {
        let header = document.getElementById('header');
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            header.style.top = '-100px'; // Adjust the value based on header height
        } else {
            header.style.top = '0';
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