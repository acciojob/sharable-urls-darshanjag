   document.addEventListener("DOMContentLoaded", function() {
            const urlH3 = document.getElementById("url");
            const form = document.getElementById("urlForm");
            const nameInput = document.getElementById("name");
            const yearInput = document.getElementById("year");
            const submitButton = document.getElementById("button");

            submitButton.addEventListener("click", function() {
	            const nameValue =encodeURIComponent(nameInput.value);
                const yearValue = yearInput.value;
                const queryString = `?name=${nameValue}?year=${yearValue}`;
                urlH3.textContent = `https://localhost:8080/${queryString}`;
            });
        });