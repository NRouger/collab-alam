document.getElementById('seccion1').addEventListener('click', function() {
  showContent('seccion1-content')
});

document.getElementById('seccion2').addEventListener('click', function() {
  showContent('seccion2-content')
});

document.getElementById('seccion3').addEventListener('click', function() {
  showContent('seccion3-content')
});

document.getElementById('seccion4').addEventListener('click', function() {
  showContent('seccion4-content')
});

function showContent(id) {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.content-view').forEach(function(view) {
    view.style.display = 'none';
  })
  document.getElementById('main-content').style.display = 'grid';
}
