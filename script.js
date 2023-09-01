const introText = "Hello, my name is Eva";
const typingTextElement = document.getElementById("typing-text");

function typeText() {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index <= introText.length) {
            typingTextElement.textContent = introText.slice(0, index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

window.addEventListener("load", typeText);

const introSection = document.getElementById('intro');
const skillsSection = document.getElementById('skills');

const aboutLink = document.getElementById('about-link');

function toggleAboutSections() {
    if (introSection.style.display === 'none' || introSection.style.display === '') {
        introSection.style.display = 'block';
        skillsSection.style.display = 'block';
    } else {
        introSection.style.display = 'none';
        skillsSection.style.display = 'none';
    }
}

aboutLink.addEventListener('click', toggleAboutSections);
