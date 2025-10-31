// Animate projects on scroll
const cards = document.querySelectorAll('.project-card');
const timelineItems = document.querySelectorAll('.timeline-item');
const skillLevels = document.querySelectorAll('.skill-level');

function animateOnScroll() {
  const windowBottom = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < windowBottom - 50) card.style.opacity = 1, card.style.transform = 'translateY(0)';
  });
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < windowBottom - 50) item.style.opacity = 1, item.style.transform = 'translateX(0)';
  });
  skillLevels.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < windowBottom - 50) skill.style.width = skill.dataset.width;
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
