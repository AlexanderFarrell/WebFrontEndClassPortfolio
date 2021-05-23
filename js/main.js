let tableOfContents = document.getElementById('TableOfContents');

const links = [
    {
        label: "Week1 Notes",
        url: "week1\\index.html"
    },
    {
        label: "Week3 Notes",
        url: "week3\\index.html"
    },
    {
        label: "Week5 Notes",
        url: "week5\\index.html"
    }
]

links.forEach(link => {
    let item = document.createElement("li");
    item.innerHTML = `<a class="TableOfContentsItem" href="${link.url}">${link.label}</a>`;
    tableOfContents.appendChild(item);
});