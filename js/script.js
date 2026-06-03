const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (event) {

    if (event.key !== "Enter") return;

    const searchText = searchInput.value.trim();

    if (!searchText) return;

    const elements = document.querySelectorAll("h1, h2, h3, p");

    let firstMatch = null;
    let found = false;

    elements.forEach(element => {

        const originalText = element.textContent;

        if (
            originalText.toLowerCase().includes(searchText.toLowerCase())
        ) {

            found = true;

            if (!firstMatch) {
                firstMatch = element;
            }

            const regex = new RegExp(`(${searchText})`, "gi");

            element.innerHTML = originalText.replace(
                regex,
                '<span class="highlight-word">$1</span>'
            );
        }
    });

    if (firstMatch) {
        firstMatch.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    setTimeout(() => {

        document.querySelectorAll(".highlight-word").forEach(span => {
            span.outerHTML = span.innerText;
        });

    }, 3000);

    if (!found) {
        alert("Нічого не знайдено");
    }
});

const joinBtn = document.getElementById("joinBtn");
const popup = document.getElementById("popup");
const popupResult = document.getElementById("popup-result");
const closePopup = document.getElementById("closePopup");

joinBtn.addEventListener("click", () => {

    const percent = Math.floor(Math.random() * 101);

    popupResult.textContent =
        `Вітаємо! Ви на ${percent}% cooked`;

    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});