document.getElementById("search-bar").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".animal-card");

    cards.forEach(card => {
        let animalName = card.getAttribute("data-animal").toLowerCase();
        card.style.display = animalName.includes(filter) ? "block" : "none";
    });
});
