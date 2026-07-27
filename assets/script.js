fetch("articles.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("article-list");

    if (!container) return;

    if (data.length === 0) {
      container.innerHTML = "<p>No articles available.</p>";
      return;
    }

    // newest first
    data.reverse();

    container.innerHTML = "";

    data.forEach(article => {

      container.innerHTML += `
      <div class="article-card">

        <img src="${article.image}" alt="${article.title}" class="article-image">

        <h3>${article.title}</h3>

        <p>${article.description}</p>

        <a class="btn" href="${article.filename}">
          Read More →
        </a>

      </div>
      `;

    });

  })
  .catch(error => {
    console.log(error);
  });
