const url = `https://gnews.io/api/v4/top-headlines?country=in&token=69d8299738b2894e372ffac4c2f84a56`;

async function fetchNews() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const articles = data.articles;

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    articles.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.className = "news-article";

      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;

      container.appendChild(articleDiv);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("news-container").innerHTML = `<p>⚠️ Failed to load news. Try again later.</p>`;
  }
}

fetchNews();
