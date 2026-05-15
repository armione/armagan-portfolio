# 🎬 Mobiva Case Study: AI-Driven Viral Content Pipeline
> **Author:** Armağan (Design Engineer Candidate)  
> **Date:** May 2026  
> **Tools:** ChatGPT (Image Gen), Kling AI VIDEO 3.0 Omni (Video Gen), CapCut (Post-Production)

---

## 📋 Pipeline Overview

Bu case study, tek bir kişisel fotoğraftan **ölçeklenebilir (scalable), şablonlanabilir (templatable) ve marka entegreli (brand-embedded)** viral içerik üretim hattını belgelemektedir.

### Temel Strateji: "System Prompt → Template → Variation"
1. **System Prompt:** İlk karakter için sıfırdan detaylı bir "master prompt" yazılır
2. **Template Lock:** Çıktı referans görsel olarak kilitlenir
3. **Variation:** Yeni kişi fotoğrafı + referans görsel → sadece yüz değişir, her şey aynı kalır

Bu yaklaşım, bir promptun **3 farklı kişiye** tutarlı şekilde uygulanabildiğini kanıtlar.

---

## 🖼️ IMAGE PART 1: GTA San Andreas — Karakter Seçim Ekranı

**Klasör:** `GTA SA Viral/`  
**Dosyalar:** `ahmet.png`, `mehmet.png`, `sercan.png`, `denemetestahmetvideo.mp4`

### System Prompt (Ahmet — İlk Karakter)
```
Using this person's exact face, hair, and features, create a GTA San Andreas (2004) 
character selection screen. The person must be immediately recognizable but rendered 
in PS2-era low-polygon 3D style.

Style: GTA San Andreas — NOT Vice City. Dark, gritty, street atmosphere. No neon, 
no bright colors. Dominant tones: dark amber, brown, dark green, orange streetlight glow.

Character: Confident wide stance, arms slightly out, classic GTA idle pose. Full body 
visible head to toe. Outfit: black leather jacket over black t-shirt, gold Cuban chain 
necklace, dark denim jeans, black boots. Face shows PS2-style blocky polygon edges, 
waxy skin shading with hard specular highlights.

Environment: Nighttime dark back alley. Red brick wall with large graffiti tags 
(pink, purple, white), metal dumpsters, scattered trash and newspapers on cracked 
concrete, chain-link fence with distant city skyline silhouette. Single amber 
streetlight illuminating from upper left casting long shadows.

HUD — exact San Andreas layout:
- Top left: "CHOOSE YOUR CHARACTER" header in bold white, character list below 
  (Carl Johnson, Claude, Tommy Vercetti, Tony Cipriani, AHMET highlighted in 
  yellow/orange, The Truth). Bottom: X SELECT / △ BACK PlayStation buttons.
- Top right: Clock "21:42", Rockstar fist logo, red health bar with green outline, 
  green "$00000350" money counter, 3/5 gold wanted stars lit.
- Bottom left: Green-lined circular minimap radar, "N" compass, "CJ" label.

Color palette: Dark, warm, gritty. Full CRT television monitor effect: visible 
horizontal scanlines, subtle RGB chromatic aberration, corner vignette, barrel 
distortion. 16:9 landscape. All HUD text crisp and legible. No watermarks.
```

### Template Prompt (Sercan — Varyasyon)
```
First image is my style reference — match it EXACTLY. Same GTA San Andreas PS2 
aesthetic, same camera angle, same HUD layout and positions, same dark gritty color 
palette, same alleyway environment, same lighting, same CRT scanlines effect, same 
character pose and outfit style.

Second image is the new person. Use their exact face, wavy dark brown hair, round 
tortoiseshell glasses, and trimmed beard.

Only changes from reference:
- Character face and body → this new person
- Character list: SERCAN highlighted in yellow/orange (replacing AHMET)
- Everything else stays pixel-perfect identical

16:9 landscape. All HUD text sharp and legible. No watermarks.
```

### Template Prompt (Mehmet — Varyasyon)
```
First image is my style reference — match it EXACTLY. [Same parameters as above]

Second image is the new person. Use their exact face, shaved bald head, and full 
dark beard.

Only changes from reference:
- Character face and body → this new person
- Character list: MEHMET highlighted in yellow/orange (replacing SERCAN)
- Everything else stays pixel-perfect identical
```

---

## 🧸 IMAGE PART 2: Mobiva Collectibles — Designer Toy Figürleri

**Klasör:** `koleksiyon toy/`  
**Dosyalar:** `koleyksiyonahmet.png`, `koleksiyonmehmet.png`, `koleksiyonsercan.png`

### System Prompt (Ahmet — İlk Karakter)
```
Transform the person in the uploaded photograph into a premium limited-edition 
collectible designer toy figure, photographed as a high-end product shot. The figure 
must be immediately recognizable — capturing exact facial features, short dark hair, 
and light stubble — reinterpreted in cute, stylized high-end vinyl art toy aesthetic.

Classic designer toy proportions: oversized head, compact rounded torso, shorter 
simplified limbs, slightly oversized hands/feet.

Outfit: fitted olive-green MA-1 bomber jacket over white crew-neck t-shirt, slim-fit 
dark navy chinos, miniature white sneakers.

Packaging: Rectangular box with large clear acetate window. Premium matte white 
cardboard. "MOBIVA COLLECTIBLES" in clean black text across top, "LIMITED EDITION" 
in small gold text, "AHMET" prominently on lower front label.

Photography: Professional studio product shot, box at 15-degree angle, soft key light 
upper left. Seamless gradient background. Smooth matte vinyl/PVC texture. Portrait 3:4.
```

### Template Prompts (Mehmet & Sercan)
Aynı "First image is my style reference — match it EXACTLY" yapısı.
- **Mehmet:** Bald head, full dark beard → Box label: MEHMET
- **Sercan:** Wavy hair, round glasses, trimmed beard → Box label: SERCAN

---

## 📸 IMAGE PART 3: Nostalji — 10 Yaş ve 30 Yaş Birlikte Oyun Oynuyor

**Klasör:** `10 yas ve 30 yas oyun oynuyor/`  
**Dosyalar:** `10yasve30yas_ahmet.png`, `10yasve30yas_mehmet.png`, `10yasve30yas_sercan.png`

### System Prompt (Ahmet — İlk Karakter)
```
Create a deeply emotional, highly realistic, cinematic photograph.

Two characters in the same frame:
1. The Adult (Present day): Exact person. Dark grey hoodie.
2. The Child (1990s): 9-year-old younger version. Same facial structure. Retro 
   oversized striped t-shirt.

Action: Side-by-side cross-legged on 90s bedroom carpet. CRT television and PS1 
console in front. Both holding wired controllers. Adult looking lovingly at child. 
Child intensely focused on TV, smiling with joy.

Lighting: Dim room. CRT glow + golden hour window rim light.
Photography: 35mm film, Kodak Portra 400, anamorphic lens. 16:9 cinematic widescreen.
```

### Template Prompt (Sercan)
```
First image is my style reference — match it EXACTLY.

Second image is the new adult. Use exact face, wavy dark brown hair, round 
tortoiseshell glasses, trimmed beard.
Create 9-year-old child version of THIS person (child must also wear round glasses).

Only changes: Adult + Child faces → this new person's likeness.
Everything else stays perfectly identical. 16:9 cinematic widescreen.
```

---

## 🎬 VIDEO PART 1: Futbol Teknik Direktörü — Hakeme Tepki

**Klasör:** `td_hakemetepki/`
**Dosyalar:** `ahmetgpt.png`, `ahmethoca.mp4`, `mehmetgpt.png`, `mehmethoca.mp4`, `sercangpt.png`, `sercanhoca.mp4`

### ChatGPT — System Prompt (Ahmet)
```
Realistic sports broadcast screenshot-style documentary photo. Analyze the uploaded 
image and transform this person into a football head coach on the sideline during a 
heated Galatasaray vs Fenerbahçe derby match at night.

The person is wearing a slim-fit dark navy suit with a white dress shirt, no tie, 
top button open. He is standing at the edge of the technical area on the sideline, 
leaning forward aggressively toward the referee. His face shows intense frustration — 
mouth open mid-shout, eyebrows furrowed, one arm extended pointing at the pitch, 
the other hand gesturing in disbelief. His body language radiates pure fury and passion.

The referee in a black kit is partially visible, standing 2 meters away with his back 
slightly turned, holding a yellow card.

Environment: A packed 50,000-seat stadium at night under bright floodlights. The crowd 
is a blur of red-yellow (Galatasaray) colors in the background. LED advertising boards 
glow along the sideline. The pitch grass is vivid green under the floodlights.

Broadcast overlay UI at the bottom: A realistic Turkish football broadcast scoreboard 
showing "GS 1 - 1 FB" with match clock "78:32". Small channel logo in top-right.

Camera: Telephoto broadcast lens (200mm), shot from opposite sideline. Shallow depth 
of field — coach razor sharp, background beautifully blurred. Realistic TV capture 
quality. 16:9 broadcast frame.
```

### ChatGPT — Template Prompts
**Sercan:** "First image is my style reference — match it EXACTLY. Same Turkish football broadcast aesthetic... Second image is the new person. Use his exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard."
**Mehmet:** Same template. "Use his exact face, shaved bald head, and full dark beard."

### Kling AI — Video Prompt (Tüm Karakterler İçin Aynı)
```
single continuous live sports broadcast shot, 4-5s, 16:9, 1080p, no cuts. 
SUBJECT: A football head coach in a dark navy suit standing on the sideline.
ACTION (4-5s): 
[0-1s] Coach stands tense, jaw clenched, staring at the referee. 
[1-3s] He erupts — takes two aggressive steps forward, arms spread wide in 
disbelief, mouth opens shouting passionately, pointing forcefully at the pitch.
[3-4s] He turns to the fourth official, both hands up in a "what are you doing?" 
gesture, shaking his head. 
[4-5s] He puts one hand on his hip, the other rubs his forehead in frustration.
ENVIRONMENT: Packed stadium at night. Blurred crowd in red-yellow jerseys. 
LED advertising boards. Vivid green pitch grass.
CAMERA: Telephoto broadcast lens (120-200mm). Shallow depth of field. 
Subtle micro-shake from broadcast camera stabilization.
MOOD: Raw, unstaged, real broadcast moment. Pure live TV capture energy.
```

---

## 🎬 VIDEO PART 2: Gaming Kısa Film (2 Sahne + CapCut Kurgu)

**Klasör:** `2 video birleştirimi/`
**Dosyalar:** `gpt1.png`, `gpt2.png`, `video1oynuyor.mp4`, `video2tekken.mp4`, `video1vevideo2armagankurgu.mp4`
**Post-Production:** CapCut for PC — Zoom-In geçişi ile 2 video birleştirildi

### ChatGPT — Sahne 1: Gamer Portresi (Sercan)
```
Transform the person into a passionate gamer captured in a candid, cinematic moment 
during an intense gaming session. Use his exact face, wavy dark brown hair, round 
tortoiseshell glasses, and trimmed beard with complete fidelity.

POSE: Sitting at edge of premium gaming chair, leaning forward, elbows on knees. 
Grips PS5 DualSense controller tightly. Expression: pure concentrated intensity.

ENVIRONMENT: Dark gaming den. 32-inch curved ultrawide monitor, RGB keyboard, 
wireless gaming mouse, energy drink can. LED light panels (purple-to-cyan gradient) 
on wall behind. A neon LED sign on the wall reads "MOBIVA" in white glow. The 
mousepad has a subtle "MOBIVA" logo watermark. A small "MOBIVA" sticker on the 
monitor bezel.

CAMERA: Sony A7 IV, 35mm f/1.4 at f/1.8. Medium shot, 30-degree angle. 
Shallow depth of field. Moody color grade with lifted blacks. 16:9 widescreen.
```

### ChatGPT — Sahne 2: Dövüş Oyunu Ekranı (Ahmet vs Mehmet)
```
Create an ultra-detailed screenshot of a premium AAA fighting game (Tekken 8 / 
Street Fighter 6 quality) photographed directly off a gaming monitor.

LEFT FIGHTER (from first photo): Short dark hair, light stubble → Red karate gi, 
boxing guard stance. Name label: "AHMET", health bar ~65%.

RIGHT FIGHTER (from second photo): Shaved bald head, full dark beard → Blue 
sleeveless martial arts vest with gold trim, mid-punch with blue lightning energy. 
Name label: "MEHMET", health bar ~40%.

GAME UI: Health bars, "ROUND 2" timer showing "38", super meters, 
"7 HIT COMBO!" floating text.

ARENA: Japanese temple rooftop at golden sunset. Cherry blossom petals, 
paper lanterns, volumetric god-rays. Impact shockwave effects.
Subtle curved monitor screen effect with faint room reflection. 16:9 widescreen.
```

### Kling AI — Video 1: Gamer Tepki (Sercan)
```
A single continuous cinematic shot of a man with glasses sitting in a dark gaming 
room, gripping a PS5 controller. A glowing white "MOBIVA" neon sign behind him.

[0.0-0.5s] TENSION: He sits perfectly still, jaw clenched, eyes narrowed.
[0.5-1.5s] INTENSIFIES: Thumbs flicking analog sticks rapidly. Shoulders tense. 
Monitor glow shifts blue → orange-yellow.
[1.5-2.5s] CRITICAL MOMENT: Eyes go WIDE. Monitor reflections flash white in 
his glasses. Grip tightens, knuckles whitening. RGB keyboard pulses purple → red.
[2.5-3.5s] ERUPTION: SLAMS back against chair. Arms fly up in victory gesture. 
Mouth opens in primal shout. MOBIVA neon creates backlight halo.
[3.5-4.5s] CELEBRATION: Fist pump, huge genuine smile, confident nod.
[4.5-5.0s] SETTLING: Exhales, settles back, thumbs return to sticks. 
Monitor glow resets to cool blue.

CAMERA: Extremely slow push-in (dolly forward). 25-degree angle. Photorealistic.
```

### Kling AI — Video 2: Dövüş Oyunu Maçı (Ahmet vs Mehmet)
```
A high-quality 3D arcade fighting game match on a Japanese temple rooftop at sunset.

[0.0-0.8s] STANDOFF: Both fighters circling. Red gi vs blue vest. Timer 38→37.
[0.8-1.8s] RED FIGHTER ATTACKS: Left jab → right cross → spinning roundhouse kick. 
Red energy shockwave. "3 HIT COMBO!" text appears. Cherry blossoms scatter.
[1.8-2.8s] BLUE FIGHTER RECOVERS: Staggers back, catches himself, blue aura flares. 
Super meter glows brighter. Shifts to aggressive new stance.
[2.8-4.0s] COUNTER ATTACK: Blue fighter charges with devastating straight punch 
engulfed in blue lightning. Enormous blue-red energy explosion. Screen shakes. 
Stone debris flies up. "7 HIT COMBO!" text shatters.
[4.0-4.6s] AFTERMATH: Both push off to neutral distance. Battered but ready.
[4.6-5.0s] RESET: Camera returns to center. Timer shows 34. Cherry blossoms resume.

CAMERA: Standard 2D fighting game side-view with subtle 3D camera movements. 
AAA quality. Smooth 60fps animation. Consistent game UI throughout.
```

**Post-Production (CapCut for PC):** Video 1 (Sercan oyun oynarken) ve Video 2 (Ahmet vs Mehmet dövüş) **Zoom-In geçişiyle** birleştirildi → `video1vevideo2armagankurgu.mp4`

---

## 🎬 VIDEO PART 2.5: T-Rex — Kling 3.0 Omni Multi-Shot (Sercan Özel)

**Klasör:** `trex sercan özel/`
**Dosyalar:** `10sn3farklıshot.mp4`
**Model:** Kling VIDEO 3.0 Omni — 1080p, 10s, Multi-Shot

### Kling AI Omni — Multi-Shot Prompt
```
Shot 1 (4s): Ultra-wide GoPro selfie perspective. @Image1 is holding the camera 
with one hand, walking slowly forward through a modern glass-walled tech office. 
He is holding a white coffee mug in his other hand. His facial expression is 
completely deadpan, calm, and unbothered. He stares blankly into the camera.

Shot 2 (3s): Cut to a dramatic wide shot from the side. A massive, hyper-realistic 
T-Rex dinosaur violently crashes through the office windows directly behind @Image1! 
The dinosaur roars, smashing desks and throwing office papers into the air. 
Dust falls from the ceiling.

Shot 3 (3s): Cut back to the GoPro selfie perspective. The T-Rex is actively 
destroying the office in the background, roaring silently. @Image1 completely 
ignores the apocalyptic chaos, slowly raises his coffee mug to his mouth, and 
takes a sip while maintaining his deadpan stare into the lens.
```

> **Not:** Bu video, Kling 3.0 Omni'nin "Element" + "Multi-Shot Storyboard" özelliklerini kullanan ilk denememizdir. Sercan'ın fotoğrafı `@Image1` olarak yüklendi, model kendi sahneleri (shots) arasında karakter tutarlılığını korudu.

---

## 🎬 VIDEO PART 3: T-Rex Ofis Baskını — GoPro Selfie Vlog

**Klasör:** `trexindaofis/`
**Dosyalar:** `sercanofisgpt.png`, `sercanofisvideo.mp4`, `ahmetofisgpt.png`, `ahmetofisvideo.mp4`, `mehmetofisgpt.png`, `mehmetofisvideo.mp4`

### ChatGPT — System Prompt (Sercan)
```
Transform the person into the subject of a chaotic action-comedy selfie. Use his 
exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard.

PERSPECTIVE: Ultra-wide "GoPro" fisheye lens, selfie angle. He is in very close 
foreground. Expression: completely deadpan, calm, hilariously unbothered. Holding 
white ceramic coffee mug. Wearing casual plain grey hoodie.

ENVIRONMENT: Modern glass-walled tech office. Absolute apocalyptic chaos behind him. 
A massive T-Rex dinosaur crashing through office walls, mouth open in a roar. 
Desks shattered, monitors sparking, papers fluttering, dust and debris falling.

VIBE: Despite Jurassic disaster, he looks like he's checking in for a normal 
Monday meeting. Bright, high-contrast cinematic lighting. Photorealistic. 16:9.
```

### ChatGPT — Template Prompts (Ahmet & Mehmet)
```
I am providing two images:
Image 1: The cinematic selfie with the T-Rex in the background (The Template).
Image 2: A reference photo of a new person.

Recreate Image 1 EXACTLY. Keep the exact same background, the same T-Rex crashing 
through the glass, the flying papers, the lighting, the coffee mug, the grey hoodie, 
and the exact same GoPro selfie perspective.

The ONLY change is the person holding the camera: Replace him with the person from 
Image 2. Ensure a 100% accurate facial likeness, matching his specific hair and 
facial features perfectly, while keeping the deadpan, unbothered expression.
```

### Kling AI — Video Prompt (Tüm Karakterler İçin Aynı)
```
A shaky handheld GoPro selfie video. The man in the foreground stays relatively 
still, but the camera shakes realistically with his subtle arm movements. He 
maintains a completely deadpan, unbothered expression, slowly raising the coffee 
mug to his mouth to take a sip. Behind him, absolute cinematic chaos unfolds: 
the massive T-Rex violently thrashes its head and roars silently. Countless office 
papers flutter chaotically through the air, dust falls continuously from the 
shattered ceiling, and sparks fly from the broken computers. Ultra-realistic, 
cinematic action, 16:9.
```

---

## 🏗️ Pipeline Mimarisi

```
┌─────────────────────────────────────────────────────┐
│                PROMPT ENGINEERING                    │
│                                                     │
│  1. System Prompt    ──→  İlk karakter (Master)     │
│  2. Template Lock    ──→  Çıktı = Referans görsel   │
│  3. Variation Prompt ──→  Yeni yüz + aynı şablon   │
│     └── × N kişi (Ahmet, Sercan, Mehmet)            │
├─────────────────────────────────────────────────────┤
│              IMAGE → VIDEO PIPELINE                  │
│                                                     │
│  ChatGPT Görseli ──→ Kling AI (Image-to-Video)     │
│                      ├── 5s tek sahne (klasik)      │
│                      └── 10-15s Multi-Shot (Omni)   │
├─────────────────────────────────────────────────────┤
│              POST-PRODUCTION                         │
│                                                     │
│  CapCut ──→ Sahne birleştirme (Zoom-In geçiş)      │
│         ──→ Ses efektleri ve müzik ekleme           │
│         ──→ Final export (1080p, 30fps, MP4)        │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 Marka Entegrasyonu (Brand Placement)

- **"MOBIVA COLLECTIBLES"** — Designer Toy kutularında marka logosu
- **"MOBIVA" Neon Tabela** — Gaming videosundaki odada
- Tüm içeriklerde kurumsal kimliğin organik entegrasyonu

---

## 📝 Notlar

- **Ahmet** ve **Mehmet** takma isimlerdir (gerçek isimler bilinmemektedir)
- **Sercan** gerçek isimdir
- Tüm görseller ChatGPT ile, tüm videolar Kling AI ile üretilmiştir
- Video post-production CapCut for PC üzerinde yapılmıştır
