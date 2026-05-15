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

    // ── Inject expand button into every vid-card
    document.querySelectorAll('.vid-card').forEach(card => {
        const btn = document.createElement('button');
        btn.className = 'vid-expand';
        btn.innerHTML = '⛶';
        btn.title = 'Tam Ekran';
        card.appendChild(btn);
    });

    // ── Video click → play/pause toggle (on the video itself)
    document.querySelectorAll('.vid-card video').forEach(v => {
        v.loop = true;
        v.addEventListener('click', () => {
            if (v.paused) v.play(); else v.pause();
        });
    });

    // ── Lightbox logic
    const lightbox = document.getElementById('video-lightbox');
    const lbVideo = document.getElementById('lightbox-video');
    const lbMute = document.getElementById('lb-mute');
    const lbClose = document.getElementById('lb-close');
    const lbBackdrop = lightbox.querySelector('.lightbox-backdrop');

    function openLightbox(src) {
        lbVideo.src = src;
        lbVideo.muted = false;
        lbMute.textContent = '🔊';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        lbVideo.play().catch(() => {});
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lbVideo.pause();
        lbVideo.removeAttribute('src');
    }

    // Expand button opens lightbox
    document.querySelectorAll('.vid-expand').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const video = btn.closest('.vid-card').querySelector('video');
            if (video) openLightbox(video.src);
        });
    });

    // Mute toggle
    lbMute.addEventListener('click', () => {
        lbVideo.muted = !lbVideo.muted;
        lbMute.textContent = lbVideo.muted ? '🔇' : '🔊';
    });

    // Close lightbox
    lbClose.addEventListener('click', closeLightbox);
    lbBackdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
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
