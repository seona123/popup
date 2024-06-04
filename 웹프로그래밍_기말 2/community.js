document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.box');
    const writeButton = document.querySelector('.write-button');
    const writeForm = document.querySelector('.write-form');
    const mainContent = document.querySelector('.main-content');

    function getCurrentDate() {
        const now = new Date();
        const year = String(now.getFullYear()).slice(2);
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    const boards = {
        '자유게시판': [
            {제목: '커뮤니티 이용 안내', 글쓴이: '관리자', 작성일: getCurrentDate(), 조회수: 1, 추천수: 1, 내용: '커뮤니티 이용 안내에 대한 내용입니다.'},
            {제목: '안녕하세요', 글쓴이: 'asdf', 작성일: getCurrentDate(), 조회수: 3, 추천수: 1, 내용: '안녕하세요, 반갑습니다!'},
            {제목: '팝업스토어 후기', 글쓴이: 'user1', 작성일: getCurrentDate(), 조회수: 5, 추천수: 2, 내용: '팝업스토어 방문 후기입니다.'}
        ],
        '홍보 게시판': [
            {제목: '이벤트 안내', 글쓴이: 'promoter', 작성일: getCurrentDate(), 조회수: 10, 추천수: 5, 내용: '이벤트 안내에 대한 내용입니다.'}
        ],
        '후기 게시판': [
            {제목: '팝업스토어 방문 후기', 글쓴이: 'reviewer', 작성일: getCurrentDate(), 조회수: 8, 추천수: 3, 내용: '팝업스토어 방문 후기입니다.'}
        ]
    };

    function renderTable() {
        const tbody = document.querySelector('.table tbody');
        tbody.innerHTML = '';

        Object.keys(boards).forEach(boardName => {
            boards[boardName].forEach((item, index) => {
                const row = document.createElement('tr');
                const numberCell = document.createElement('th');
                numberCell.textContent = index + 1;
                numberCell.className = 'th';
                row.appendChild(numberCell);

                const titleCell = document.createElement('th');
                titleCell.textContent = item.제목;
                titleCell.className = 'th';
                titleCell.style.cursor = 'pointer';
                titleCell.addEventListener('click', function () {
                    openPost(item);
                });
                row.appendChild(titleCell);

                Object.values(item).forEach((value, i) => {
                    if (i !== 0 && i !== Object.keys(item).length - 1) { // Skip 제목 and 내용
                        const cell = document.createElement('th');
                        cell.textContent = value;
                        cell.className = 'th';
                        row.appendChild(cell);
                    }
                });

                row.setAttribute('data-board', boardName);
                tbody.appendChild(row);
            });
        });
    }

    function filterTable(boardName) {
        const rows = document.querySelectorAll('.table tbody tr');
        rows.forEach(row => {
            if (boardName === 'all' || row.getAttribute('data-board') === boardName) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function openPost(post) {
        const postWindow = window.open('', '_blank', 'width=600,height=400');
        postWindow.document.write(`<html><head><title>${post.제목}</title></head><body>`);
        postWindow.document.write(`<h2>${post.제목}</h2>`);
        postWindow.document.write(`<p><strong>글쓴이:</strong> ${post.글쓴이}</p>`);
        postWindow.document.write(`<p><strong>작성일:</strong> ${post.작성일}</p>`);
        postWindow.document.write(`<p>${post.내용}</p>`);
        postWindow.document.write('</body></html>');
        postWindow.document.close();
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const boardName = tab.getAttribute('data-board');
            filterTable(boardName);
        });
    });

    writeButton.addEventListener('click', function () {
        mainContent.classList.add('hidden');
        writeForm.classList.remove('hidden');
    });

    window.submitPost = function () {
        const boardSelect = document.getElementById('board-select').value;
        const titleInput = document.getElementById('title-input').value;
        const contentInput = document.getElementById('content-input').value;

        if (titleInput && contentInput) {
            const newPost = {
                제목: titleInput,
                글쓴이: '익명',
                작성일: getCurrentDate(),
                조회수: 0,
                추천수: 0,
                내용: contentInput
            };
            boards[boardSelect].push(newPost);
            renderTable();
            filterTable(boardSelect);
            mainContent.classList.remove('hidden');
            writeForm.classList.add('hidden');
        } else {
            alert('제목과 내용을 모두 입력해 주세요.');
        }
    };

    window.cancelPost = function () {
        mainContent.classList.remove('hidden');
        writeForm.classList.add('hidden');
    };

    renderTable();
    tabs[0].click();
});

function openjoinPage() {
    window.location.href =
        'member.html';
}

function openLoginPage() {
    window.location.href =
        'login.html';
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

function openmain() {
    window.location.href = 'one.html';
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