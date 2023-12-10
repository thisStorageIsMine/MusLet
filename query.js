
const currentURL = document.URL,
      url = new URL(currentURL),
      searchParams = url.searchParams,
      paramValue = searchParams.get("id");

const content = document.querySelector(".article-container > pre");
const title = document.querySelector(".dasscord-add");
title.textContent = articles[paramValue].title;
content.textContent = articles[paramValue].content;