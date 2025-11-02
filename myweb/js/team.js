// js/team.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("playerSearchForm");
  const input = document.getElementById("playerSearchInput");
  const playerCards = document.querySelectorAll(".player-card");

  if (!form || !input || playerCards.length === 0) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (value === "") {
      alert("선수나 코치 이름을 입력해주세요.");
      input.focus();
      return;
    }

    const regex = /^[ㄱ-ㅎ가-힣\s]+$/;
    if (!regex.test(value)) {
      alert("이름에는 특수문자나 숫자를 입력할 수 없습니다.");
      input.focus();
      return;
    }

    let found = false;
    playerCards.forEach((card) => {
      const nameElement = card.querySelector(".player-info .name");
      const nameText = nameElement ? nameElement.textContent.trim() : "";

      if (nameText.includes(value)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      alert(`'${value}' 선수는 목록에 없습니다. 다시 입력해주세요.`);
      input.value = "";
      input.focus();
      playerCards.forEach((card) => (card.style.display = "block")); // 전체 복귀
    }
  });

  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      playerCards.forEach((card) => (card.style.display = "block"));
    }
  });
});
