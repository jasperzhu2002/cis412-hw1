document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    const locationSection = document.querySelector(".location-section");
    const forecast = document.querySelector(".forecast");

    // Shrinks and expands the search bar
    searchBar.addEventListener("focus", () => {
        locationSection.style.height = "80vh"; // Expands smoothly
        forecast.style.opacity = "0"; // Hides the forecast
        forecast.style.pointerEvents = "none"; // Prevents interaction
    });

    searchBar.addEventListener("blur", () => {
        locationSection.style.height = "21.5vh"; // Shrinks smoothly
        setTimeout(() => {
            forecast.style.opacity = "1";
            forecast.style.pointerEvents = "auto";
        }, 500);
    });

    // Allows the weather tiles to go to the respective pages
    document.querySelectorAll(".location-card").forEach(card => {
        card.addEventListener("click", () => {
            const locationName = card.querySelector("p").textContent.toLowerCase(); // Get location name
            let page = "";

            switch (locationName) {
                case "san francisco":
                    page = "sf.html";
                    break;
                case "hong kong":
                    page = "hk.html";
                    break;
                case "shanghai":
                    page = "sh.html";
                    break;
                default:
                    return; // Do nothing if no match
            }

            window.location.href = page; // Navigate to the respective page
        });
    });
});