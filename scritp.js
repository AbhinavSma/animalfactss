async function searchFact() {
    const query = document.getElementById("searchBox").value.trim();
    const resultDiv = document.getElementById("results");

    if (query === "") {
        resultDiv.innerHTML = "Please enter a topic!";
        return;
    }

    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.extract) {
            resultDiv.innerHTML = `<strong>${data.title}:</strong> ${data.extract}`;
        } else {
            resultDiv.innerHTML = "No fact found. Try another topic!";
        }
    } catch (error) {
        resultDiv.innerHTML = "Error fetching data. Please try again later.";
    }
}
