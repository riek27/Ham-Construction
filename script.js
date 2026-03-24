// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('translate-x-full');
        document.body.style.overflow = menu.classList.contains('translate-x-full') ? 'auto' : 'hidden';
    }
}

// Navbar scroll effect and back to top button
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const topBtn = document.getElementById('backToTop');
    if (window.scrollY > 80) {
        nav?.classList.add('glass-nav');
        topBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        nav?.classList.remove('glass-nav');
        topBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
});

// Back to top click
document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Smooth scroll for anchor links (internal)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});

// Custom cursor (desktop only)
if (window.innerWidth >= 1024) {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (dot && outline) {
        document.addEventListener('mousemove', (e) => {
            dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            outline.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        });
        const interactive = document.querySelectorAll('a, button, .btn-luxury');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', () => {
                outline.style.width = '56px';
                outline.style.height = '56px';
                outline.style.borderColor = '#D4AF37';
            });
            el.addEventListener('mouseleave', () => {
                outline.style.width = '40px';
                outline.style.height = '40px';
                outline.style.borderColor = 'rgba(212,175,55,0.5)';
            });
        });
    }
}

// Trigger scroll event on load
window.dispatchEvent(new Event('scroll'));
