document.addEventListener("DOMContentLoaded", function() {
  const renglon = document.querySelector(".renglon");

  renglon.addEventListener("click", function() {
    this.classList.toggle("active");
  })
})
