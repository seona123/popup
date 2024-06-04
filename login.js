function login() {
    // 로그인 성공 시 바로 메인 페이지로 이동
    window.location.href = 'one.html';
}

function openmain() {
    window.location.href = 'one.html';
}

function openinfo() {
    window.location.href = 'info.html';
}

function openresrv() {
    window.location.href = 'resrv.html';
}

function opencommunity() {
    window.location.href = 'community.html';
}

function openjoinPage() {
    window.location.href = 'member.html';
}

function openLoginPage() {
    window.location.href = 'login.html';
}
function openmemberpage() {
    window.location.href = 'member.html';
}

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