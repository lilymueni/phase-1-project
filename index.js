const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    
    fetch("https://api.quotable.io/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteText.innerText = "Failed to fetch quote. Please try again later.";
            authorName.innerText = "";
        })
        .finally(() => {
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

quoteBtn.addEventListener("click", randomQuote);


// Event listener for key press
quoteBtn.addEventListener("keypress", (event) => {
   
});

