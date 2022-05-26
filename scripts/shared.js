let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectBtn = document.querySelectorAll(".plan button");
let modalNegativeBtn = document.querySelector(".modal_action_negative");

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener("click", () => {
    //     backdrop.style.display='block'
    // modal.style.display='block'
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", modalCancel);
modalNegativeBtn.addEventListener("click", modalCancel);

function modalCancel() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}
