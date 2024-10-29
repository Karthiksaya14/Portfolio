document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Additional animation for skills section
const skillElements = document.querySelectorAll('.skills-list li');
skillElements.forEach((el, index) => {
    el.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
});

// CSS animations
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);