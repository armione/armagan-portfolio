/* ══════════════════════════════════════
   CASE STUDY — Interactive Scripts
   ══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // ── Nav scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── Scroll fade-in (IntersectionObserver)
    const fadeObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

    // ── Video autoplay on scroll
    const vidObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            const v = e.target.querySelector('video');
            if (!v) return;
            if (e.isIntersecting) {
                v.play().catch(() => {});
            } else {
                v.pause();
                v.currentTime = 0;
            }
        });
    }, { threshold: 0.35 });

    document.querySelectorAll('.vid-card').forEach(el => vidObs.observe(el));

    // ── Video click → play/pause toggle
    document.querySelectorAll('.vid-card video').forEach(v => {
        v.loop = true;
        v.addEventListener('click', () => {
            if (v.paused) v.play(); else v.pause();
        });
    });

    // ── Prompt expand/collapse toggle
    document.querySelectorAll('.prompt-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const box = btn.closest('.prompt-box');
            const isCollapsed = box.classList.contains('collapsed');
            box.classList.toggle('collapsed');
            btn.textContent = isCollapsed ? '▲ Kapat' : '▼ Devamını Gör';
        });
    });

    // ── Animated counter for hero stats
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            const target = parseInt(el.dataset.count, 10);
            if (isNaN(target)) return;
            let current = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const interval = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(interval); }
                el.textContent = current;
            }, 40);
            counterObs.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat .num').forEach(el => counterObs.observe(el));
});
