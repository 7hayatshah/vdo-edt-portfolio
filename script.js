document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. ANIMATE STATISTICS COUNTERS (KEEP THIS)
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumbers = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                if (!el.classList.contains('counted')) {
                    el.classList.add('counted');
                    let current = 0;
                    const increment = target / 45;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            el.innerText = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.innerText = target;
                        }
                    };
                    updateCounter();
                }
                observer.unobserve(el);
            }
        });
    };
    
    const observer = new IntersectionObserver(animateNumbers, { threshold: 0.4 });
    statNumbers.forEach(num => observer.observe(num));

    // ==========================================
    // 2. PORTFOLIO VIDEO THUMBNAIL CLICK (KEEP THIS)
    // ==========================================
    const portfolioItems = document.querySelectorAll('.portfolio-item .video-thumb');
    portfolioItems.forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            const toast = document.createElement('div');
            toast.innerText = '🎬 Opening YouTube video...';
            toast.style.position = 'fixed';
            toast.style.bottom = '30px';
            toast.style.left = '20px';
            toast.style.backgroundColor = '#FF5E5E';
            toast.style.color = '#0A0A0F';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '60px';
            toast.style.fontWeight = '600';
            toast.style.zIndex = '1000';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 1500);
        });
    });

    // ==========================================
    // 3. SMOOTH SCROLL FOR NAVIGATION (KEEP THIS)
    // ==========================================
    const viewWorkBtn = document.querySelector('a[href="#work"]');
    const contactBtn = document.querySelector('a[href="#contact"]');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ==========================================
    // 4. FORM HANDLER - DELETED/REMOVED
    // Let FormSubmit handle the form natively
    // ==========================================
});