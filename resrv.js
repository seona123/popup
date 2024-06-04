document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    document.getElementById('confirm-name').textContent = name;
    document.getElementById('confirm-email').textContent = email;
    document.getElementById('confirm-date').textContent = date;

    document.getElementById('reservation-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');

    // 예약 완료 후 3초 뒤에 메인 페이지로 이동
    setTimeout(function() {
        window.location.href = 'one.html';
    }, 3000);
});

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