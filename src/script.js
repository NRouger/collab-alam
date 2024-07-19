// document.addEventListener("DOMContentLoaded", function() {
//   const renglon = document.querySelectorAll(".renglon");

//   renglon.addEventListener("click", function() {
//     this.classList.toggle("active");
//   })
// })

document.querySelectorAll('.renglon').forEach(renglon => {
  renglon.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});

function showContent(id) {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.content-view').forEach(function(view) {
    view.style.display = 'none';
  });
  document.getElementById('main-content').style.display = 'grid';
}

const sec3 = document.querySelector(".sec3")

const date = new Date().toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"short" })

const element = document.createElement("h2");
element.textContent = `${date}`;

sec3.replaceChildren(element);
