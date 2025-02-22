// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.innerHTML = "☰";
menuToggle.style.fontSize = "2em";
menuToggle.style.cursor = "pointer";
menuToggle.style.display = "none";
document.body.prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "1.5em";
backToTop.style.cursor = "pointer";
backToTop.style.border = "none";
backToTop.style.backgroundColor = "#004d00";
backToTop.style.color = "white";
backToTop.style.borderRadius = "5px";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Proprietor Popup
document.querySelector('.proprietor img').addEventListener('click', () => {
    alert("Our esteemed proprietor is dedicated to providing quality education and nurturing young minds for a bright future.");
});
