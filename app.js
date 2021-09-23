let mobileMenu = document.querySelector(".nav-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

let liked = document.querySelectorAll(".whats-new-icon");
let productCount = document.querySelectorAll(".icon-i");

liked.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("togled")) {
      item.classList.remove("togled");
      // productCount.textContent = +productCount.textContent - 1;
    } else {
      item.classList.add("togled");
      // productCount.textContent = +productCount.textContent + 1;
      // productCount.forEach(item, function () {
        // console.log(productCount.item);
        // let current = +productCount[i];
        // let next = current + 1;
        // productCount.textContent = next;
      }
    
  })
);
