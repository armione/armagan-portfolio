/* ══════════════════════════════════════
   CASE STUDY — Interactive Scripts
   ══════════════════════════════════════ */

import { inject } from '@vercel/analytics';
inject();

import { PROMPTS } from './case-study-prompts.js';

document.addEventListener('DOMContentLoaded', () => {
    // Populate prompt boxes from data
    const map = {
        'pre-gta-system': PROMPTS.gta_system,
        'pre-gta-tpl1': PROMPTS.gta_template_sercan,
        'pre-gta-tpl2': PROMPTS.gta_template_mehmet,
        'pre-toy-system': PROMPTS.toy_system,
        'pre-nostalgia-system': PROMPTS.nostalgia_system,
        'pre-nostalgia-tpl': PROMPTS.nostalgia_template,
        'pre-coach-gpt': PROMPTS.coach_gpt_system,
        'pre-coach-tpl-s': PROMPTS.coach_gpt_sercan,
        'pre-coach-tpl-m': PROMPTS.coach_gpt_mehmet,
        'pre-coach-kling': PROMPTS.coach_kling,
        'pre-gaming-gpt1': PROMPTS.gaming_gpt_gamer,
        'pre-gaming-gpt2': PROMPTS.gaming_gpt_fight,
        'pre-gaming-kling1': PROMPTS.gaming_kling_gamer,
        'pre-gaming-kling2': PROMPTS.gaming_kling_fight,
        'pre-trex-gpt': PROMPTS.trex_gpt_system,
        'pre-trex-tpl': PROMPTS.trex_gpt_template,
        'pre-trex-kling': PROMPTS.trex_kling,
        'pre-trex-omni': PROMPTS.trex_omni,
    };
    for (const [id, text] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
    // Toy template note
    const toyNote = document.getElementById('toy-template-note');
    if (toyNote) toyNote.textContent = PROMPTS.toy_template_note;

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

    // ── Inject expand button into every vid-card AND img-card
    document.querySelectorAll('.vid-card, .img-card').forEach(card => {
        const btn = document.createElement('button');
        const isVideo = card.classList.contains('vid-card');
        btn.className = isVideo ? 'vid-expand' : 'img-expand';
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
    const lightbox = document.getElementById('media-lightbox');
    const lbVideo = document.getElementById('lightbox-video');
    const lbImage = document.getElementById('lightbox-image');
    const lbMute = document.getElementById('lb-mute');
    const lbClose = document.getElementById('lb-close');
    const lbBackdrop = lightbox.querySelector('.lightbox-backdrop');

    function openLightbox(src, type) {
        if (type === 'video') {
            lbVideo.style.display = 'block';
            lbImage.style.display = 'none';
            lbMute.style.display = 'flex';
            lbVideo.src = src;
            lbVideo.muted = false;
            lbMute.textContent = '🔊';
            lbVideo.play().catch(() => {});
        } else {
            lbImage.style.display = 'block';
            lbVideo.style.display = 'none';
            lbMute.style.display = 'none';
            lbImage.src = src;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lbVideo.pause();
        lbVideo.removeAttribute('src');
        lbImage.removeAttribute('src');
    }

    // Expand button opens lightbox
    document.querySelectorAll('.vid-expand, .img-expand').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.vid-card, .img-card');
            if (card.classList.contains('vid-card')) {
                const video = card.querySelector('video');
                if (video) openLightbox(video.src, 'video');
            } else {
                const img = card.querySelector('img');
                if (img) openLightbox(img.src, 'image');
            }
        });
    });

    // Image click also opens lightbox
    document.querySelectorAll('.img-card img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, 'image'));
        img.style.cursor = 'pointer';
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

    // ── Mouse Glow
    const glow = document.querySelector('.cursor-glow');
    if (glow && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    // ── TOC Navigation
    const tocDots = document.querySelectorAll('.toc-dot');
    const sections = Array.from(tocDots).map(dot => document.getElementById(dot.dataset.target)).filter(Boolean);
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 300) {
                current = sec.getAttribute('id');
            }
        });
        tocDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.target === current) dot.classList.add('active');
        });
    }, { passive: true });

    tocDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.getElementById(dot.dataset.target);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
            }
        });
    });

    // ── Copy to Clipboard
    document.querySelectorAll('.prompt-box').forEach(box => {
        const pre = box.querySelector('pre');
        if (!pre) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.title = 'Kopyala';
        btn.textContent = '📋 Kopyala';
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(pre.textContent).then(() => {
                btn.textContent = '✓ Kopyalandı';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = '📋 Kopyala';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
        box.appendChild(btn);
    });

    // ── Before / After Slider
    document.querySelectorAll('.ba-slider').forEach(slider => {
        const input = slider.querySelector('input');
        const fg = slider.querySelector('.img-fg');
        const handle = slider.querySelector('.handle');
        if (input && fg && handle) {
            input.addEventListener('input', (e) => {
                const val = e.target.value;
                fg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
                handle.style.left = `${val}%`;
            });
        }
    });

    // ── Skeleton Loading
    document.querySelectorAll('.img-card img').forEach(img => {
        if (img.complete) img.classList.add('loaded');
        else img.addEventListener('load', () => img.classList.add('loaded'));
    });
    document.querySelectorAll('.vid-card video').forEach(vid => {
        if (vid.readyState >= 3) vid.classList.add('loaded');
        else vid.addEventListener('loadeddata', () => vid.classList.add('loaded'));
    });
});
