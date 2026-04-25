// ===========================
// DriveEasy — Main JavaScript
// ===========================

// --- Mobile Menu Toggle ---
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });
});

// --- Fleet Filter (cars.html only) ---
function filterCars(category, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide cards
  const cards = document.querySelectorAll('.fleet-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// --- Navbar scroll effect ---
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.padding = '12px 40px';
  } else {
    nav.style.padding = '';
  }
});

// --- Scroll reveal animation ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.feature-card, .car-card, .fleet-card, .info-block');
  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
});

console.log('DriveEasy loaded ✓');
