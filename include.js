document.addEventListener("DOMContentLoaded", () => {
  const includes = [
    { selector: "header", file: "header.html" },
    { selector: "aside", file: "aside.html" },
    { selector: "footer", file: "footer.html" }
  ];

  includes.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      fetch(item.file)
        .then(response => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${item.file}:`, err));
    }
  });
});
