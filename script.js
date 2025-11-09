const addBtn = document.getElementById('add-btn');
const newsSection = document.getElementById('news-section');

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    const article = document.createElement('article');
    article.classList.add('news-article');
    article.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
      <button class="remove-btn">Remove</button>
    `;

    newsSection.appendChild(article);

    // Reset fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Add remove functionality
    article.querySelector('.remove-btn').addEventListener('click', () => {
      article.remove();
    });
  } else {
    alert('Please enter both a title and content.');
  }
});

// Add remove functionality for existing articles
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.remove();
  });
});
