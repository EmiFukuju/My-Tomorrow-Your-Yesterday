// 1. 페이지 이동 함수 (단순 알림창)
function movePage(pageName) {
    alert(pageName + " 페이지로 이동합니다! (준비 중)");
}

// 2. 로그인 버튼 기능
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function() {
    // 현재 텍스트가 '로그인'이면 -> '로그아웃'으로 변경
    if (loginBtn.innerText === "로그인") {
        let userId = prompt("아이디를 입력하세요:");
        if (userId) {
            alert("환영합니다, " + userId + "님!");
            loginBtn.innerText = "로그아웃 (" + userId + ")";
        }
    } 
    // 현재 텍스트가 '로그아웃'이면 -> 다시 '로그인'으로 변경
    else {
        alert("로그아웃 되었습니다.");
        loginBtn.innerText = "로그인";
    }
});