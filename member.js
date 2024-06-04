function toggleInfo() {
    var infoBox = document.getElementById('info-box');
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}

function togglePassword() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('password-confirm').value;
    var agree = document.getElementById('agree').checked;

    if (name && email && username && password && passwordConfirm && agree) {
        if (password === passwordConfirm) {
            alert('회원가입이 완료되었습니다.');
            window.location.href = 'login.html';  // 회원가입 완료 후 로그인 페이지로 이동
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    } else {
        alert('모든 필수 항목을 입력해 주세요.');
    }
}

function openmain() {
    window.location.href = 'one.html';
}

function openLoginPage() {
    window.location.href = 'login.html';
}

function openjoinPage() {
    window.location.href = 'member.html';
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

function openinfo(url) {
    window.location.href = 'info.html';
}

function openresrv(url) {
    window.location.href = 'resrv.html';
}

function opencommunity(url) {
    window.location.href = 'community.html';
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