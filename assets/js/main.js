// Main JavaScript file to load partials

function loadPartial(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = html;
      }
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('header', 'partials/header.html');
  loadPartial('footer', 'partials/footer.html');
});
