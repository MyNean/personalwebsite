// Select all buttons and the popup elements
const buttons = document.querySelectorAll('.btn');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeButton = document.getElementById('close');

// Get the audio element
const backgroundMusic = document.getElementById('background-music');

// Function to load sections dynamically
function navigateTo(section) {
    const content = document.getElementById('content');

    // Load content dynamically (replace with actual AJAX or content loading logic)
    content.innerHTML = `<h1>${section} Section</h1>`;

    // Control music playback for specific sections
    if (section === 'gallery') {
        // Stop background music and replace it with gallery-specific music
        backgroundMusic.pause();
        backgroundMusic.src = 'image/gallery-music.m4a';
        backgroundMusic.play();
    } else {
        // Ensure the default background music plays
        if (backgroundMusic.src !== 'image/audiohome.m4a') {
            backgroundMusic.src = 'image/audiohome.m4a';
            backgroundMusic.play();
        }
    }
}

// Add event listeners to each button to show the popup
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Customize popup text based on button action (optional)
        popupText.innerHTML = `
            <p>Welcome to the personal website! Feel free to explore.</p>
        `;
        popup.classList.remove('hidden'); // Show the popup
    });
});

// Add event listener to close button
closeButton.addEventListener('click', () => {
    popup.classList.add('hidden'); // Hide the popup
});

// Clock update function
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Set the clock initially
updateClock();

// Dynamic Content Loading for Sections
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const content = document.querySelector(".content");

    // Simulate dynamic content loading
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const section = link.getAttribute("href").substring(1);
            loadSection(section);
        });
    });

    function loadSection(section) {
        // Example of dynamic content loading
        switch (section) {
            case "education":
                content.innerHTML = `
                    <h2>Education</h2>
                    <div id="education"></div> <!-- Container for Education Data -->
                `;
                loadEducationData(); // Function to load education data
                break;
            case "skills":
                content.innerHTML = `
                    <h2>Skills & Experience</h2>
                `;
                break;
            default:
                content.innerHTML = `
                    <h2>Welcome</h2>
                `;
        }
    }
});

// Education data and function to load it dynamically
const educationData = [
    "SK......",
    "SMK Tan Sri Mohammad Yaacob",
    "Universiti Teknologi MARA (UiTM) | Cawangan Kelantan"
];

function loadEducationData() {
    const container = document.getElementById('education');
    educationData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'education-item';
        div.innerHTML = `<div class="card"><p>${item}</p></div>`;
        container.appendChild(div);
    });
}
