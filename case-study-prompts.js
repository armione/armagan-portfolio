// ══════════════════════════════════════════════════
// CASE STUDY — All Prompt Data
// Loaded by case-study.html, rendered into prompt boxes
// ══════════════════════════════════════════════════

export const PROMPTS = {

  // ─── IMAGE PART 1: GTA San Andreas ───
  gta_system: `Using this person's exact face, hair, and features, create a GTA San Andreas (2004) character selection screen. The person must be immediately recognizable but rendered in PS2-era low-polygon 3D style.

Style: GTA San Andreas — NOT Vice City. Dark, gritty, street atmosphere. No neon, no bright colors. Dominant tones: dark amber, brown, dark green, orange streetlight glow.

Character: Confident wide stance, arms slightly out, classic GTA idle pose. Full body visible head to toe. Outfit: black leather jacket over black t-shirt, gold Cuban chain necklace, dark denim jeans, black boots. Face shows PS2-style blocky polygon edges, waxy skin shading with hard specular highlights. The person's short dark hair and light stubble must be clearly recognizable.

Environment: Nighttime dark back alley. Red brick wall with large graffiti tags (pink, purple, white), metal dumpsters, scattered trash and newspapers on cracked concrete, chain-link fence with distant city skyline silhouette. Single amber streetlight illuminating from upper left casting long shadows.

HUD — exact San Andreas layout:
- Top left: "CHOOSE YOUR CHARACTER" header in bold white, character list below (Carl Johnson, Claude, Tommy Vercetti, Tony Cipriani, AHMET highlighted in yellow/orange, The Truth). Bottom: X SELECT / △ BACK PlayStation buttons.
- Top right: Clock "21:42", Rockstar fist logo, red health bar with green outline, green "$00000350" money counter, 3/5 gold wanted stars lit.
- Bottom left: Green-lined circular minimap radar, "N" compass, "CJ" label.

Color palette: Dark, warm, gritty. Full CRT television monitor effect: visible horizontal scanlines, subtle RGB chromatic aberration, corner vignette, barrel distortion. 16:9 landscape. All HUD text crisp and legible. No watermarks.`,

  gta_template_sercan: `First image is my style reference — match it EXACTLY. Same GTA San Andreas PS2 aesthetic, same camera angle, same HUD layout and positions, same dark gritty color palette, same alleyway environment, same lighting, same CRT scanlines effect, same character pose and outfit style.

Second image is the new person. Use their exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard.

Only changes from reference:
- Character face and body → this new person
- Character list: SERCAN highlighted in yellow/orange (replacing AHMET)
- Everything else stays pixel-perfect identical

16:9 landscape. All HUD text sharp and legible. No watermarks.`,

  gta_template_mehmet: `First image is my style reference — match it EXACTLY. Same GTA San Andreas PS2 aesthetic, same camera angle, same HUD layout and positions, same dark gritty color palette, same alleyway environment, same lighting, same CRT scanlines effect, same character pose and outfit style.

Second image is the new person. Use their exact face, shaved bald head, and full dark beard.

Only changes from reference:
- Character face and body → this new person
- Character list: MEHMET highlighted in yellow/orange (replacing SERCAN)
- Everything else stays pixel-perfect identical

16:9 landscape. All HUD text sharp and legible. No watermarks.`,

  // ─── IMAGE PART 2: Designer Toy ───
  toy_system: `Transform the person in the uploaded photograph into a premium limited-edition collectible designer toy figure, photographed as a high-end product shot. The figure must be immediately recognizable — capturing exact facial features, short dark hair, and light stubble — reinterpreted in cute, stylized high-end vinyl art toy aesthetic.

Classic designer toy proportions: oversized head, compact rounded torso, shorter simplified limbs, slightly oversized hands/feet.

Outfit: fitted olive-green MA-1 bomber jacket over white crew-neck t-shirt, slim-fit dark navy chinos, miniature white sneakers.

Packaging: Rectangular box with large clear acetate window. Premium matte white cardboard. "MOBIVA COLLECTIBLES" in clean black text across top, "LIMITED EDITION" in small gold text, "AHMET" prominently on lower front label.

Photography: Professional studio product shot, box at 15-degree angle, soft key light upper left. Seamless gradient background. Smooth matte vinyl/PVC texture. Portrait 3:4.`,

  toy_template_note: `Aynı "First image is my style reference — match it EXACTLY" yapısı kullanıldı.
- Mehmet: Bald head, full dark beard → Box label: MEHMET
- Sercan: Wavy hair, round glasses, trimmed beard → Box label: SERCAN`,

  // ─── IMAGE PART 3: Nostalji ───
  nostalgia_system: `Create a deeply emotional, highly realistic, cinematic photograph.

Two characters in the same frame:
1. The Adult (Present day): Exact person. Dark grey hoodie.
2. The Child (1990s): 9-year-old younger version. Same facial structure. Retro oversized striped t-shirt.

Action: Side-by-side cross-legged on 90s bedroom carpet. CRT television and PS1 console in front. Both holding wired controllers. Adult looking lovingly at child. Child intensely focused on TV, smiling with joy.

Lighting: Dim room. CRT glow + golden hour window rim light.
Photography: 35mm film, Kodak Portra 400, anamorphic lens. 16:9 cinematic widescreen.`,

  nostalgia_template: `First image is my style reference — match it EXACTLY.

Second image is the new adult. Use exact face, wavy dark brown hair, round tortoiseshell glasses, trimmed beard.
Create 9-year-old child version of THIS person (child must also wear round glasses).

Only changes: Adult + Child faces → this new person's likeness.
Everything else stays perfectly identical. 16:9 cinematic widescreen.`,

  // ─── VIDEO PART 1: Football Coach ───
  coach_gpt_system: `Realistic sports broadcast screenshot-style documentary photo. Analyze the uploaded image and transform this person into a football head coach on the sideline during a heated Galatasaray vs Fenerbahçe derby match at night.

The person is wearing a slim-fit dark navy suit with a white dress shirt, no tie, top button open. He is standing at the edge of the technical area on the sideline, leaning forward aggressively toward the referee. His face shows intense frustration — mouth open mid-shout, eyebrows furrowed, one arm extended pointing at the pitch, the other hand gesturing in disbelief. His body language radiates pure fury and passion.

The referee in a black kit is partially visible, standing 2 meters away with his back slightly turned, holding a yellow card.

Environment: A packed 50,000-seat stadium at night under bright floodlights. The crowd is a blur of red-yellow (Galatasaray) colors in the background. LED advertising boards glow along the sideline. The pitch grass is vivid green under the floodlights.

Broadcast overlay UI at the bottom of the screen: A realistic Turkish football broadcast scoreboard showing "GS 1 - 1 FB" with a match clock reading "78:32". Small channel logo in the top-right corner.

Camera: Telephoto broadcast lens (200mm), shot from the opposite sideline camera position. Shallow depth of field — coach razor sharp, background crowd beautifully blurred. Slight broadcast compression artifacts. Realistic TV capture quality, not cinematic.

Output ratio: 16:9 broadcast frame.`,

  coach_gpt_sercan: `First image is my style reference — match it EXACTLY. Same Turkish football broadcast aesthetic, same sideline camera angle, same stadium environment, same navy suit and white shirt outfit, same broadcast overlay style with scoreboard and beIN Sports logo, same telephoto lens compression and shallow depth of field.

Second image is the new person. Use his exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard. He must be immediately recognizable as this person, wearing the same coach outfit.

He is standing on the sideline, arms spread wide in furious disbelief, mouth open shouting at the referee. Same raw emotional intensity as the reference.

Only changes: face/body → this new person (with glasses). Everything else identical. 16:9 broadcast frame.`,

  coach_gpt_mehmet: `First image is my style reference — match it EXACTLY. Same Turkish football broadcast aesthetic, same sideline camera angle, same stadium environment, same navy suit and white shirt outfit, same broadcast overlay style with scoreboard and beIN Sports logo, same telephoto lens compression and shallow depth of field.

Second image is the new person. Use his exact face, shaved bald head, and full dark beard. He must be immediately recognizable as this person, wearing the same coach outfit.

He is standing on the sideline, arms spread wide in furious disbelief, mouth open shouting at the referee. Same raw emotional intensity as the reference.

Only changes: face/body → this new person (bald with beard). Everything else identical. 16:9 broadcast frame.`,

  coach_kling: `single continuous live sports broadcast shot, 4-5s, 16:9, 1080p, no cuts. SUBJECT: A football head coach in a dark navy suit standing on the sideline of a packed stadium at night. ACTION (4-5s): [0-1s] Coach stands tense, jaw clenched, staring at the referee. [1-3s] He erupts — takes two aggressive steps forward, arms spread wide in disbelief, mouth opens shouting passionately, pointing forcefully at the pitch with his right hand. His suit jacket flares with the sudden movement. [3-4s] He turns to the fourth official, both hands up in a "what are you doing?" gesture, shaking his head. [4-5s] He puts one hand on his hip, the other rubs his forehead in frustration, slowly turning back toward the bench. ENVIRONMENT: Packed football stadium at night. Bright white floodlights overhead. Blurred crowd in red-yellow jerseys behind him. LED advertising boards glowing along the sideline. Vivid green pitch grass. CAMERA: Telephoto broadcast lens (120-200mm). Shot from opposite sideline. Strong compression, shallow depth of field. Eye-level. Subtle micro-shake from broadcast camera stabilization. MOOD: Raw, unstaged, real broadcast moment. Pure live TV capture energy. No cinematic drama — this is a real match broadcast. DETAILS: Skin texture realistic, no smoothing. Slight motion blur on fast arm movements. Faint broadcast scoreboard UI visible at bottom. Crowd noise atmosphere implied through crowd movement in background.`,

  // ─── VIDEO PART 2: Gaming Short Film ───
  gaming_gpt_gamer: `Transform the person in the uploaded photograph into a passionate gamer captured in a candid, cinematic moment during an intense gaming session. Use his exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard with complete fidelity — he must be instantly recognizable.

POSE & EXPRESSION: He is sitting at the edge of a premium matte-black ergonomic gaming chair, leaning forward with his entire upper body tilted toward the screen. His elbows rest on his knees. He grips a matte-black PlayStation 5 DualSense controller tightly in both hands — his thumbs pressing the analog sticks with urgency, index fingers hovering over the triggers. His facial expression is pure concentrated intensity — eyebrows furrowed, jaw slightly clenched, eyes laser-focused and wide behind his glasses. His lips are parted just enough to suggest he is about to shout something. The glow from the monitor reflects across both lenses of his glasses, creating two small rectangular catch-lights.

ENVIRONMENT: A meticulously detailed, atmospheric gaming den. The room is dark — the only light sources are the monitor and ambient RGB lighting. A large 32-inch curved ultrawide gaming monitor sits on a deep matte-black desk directly in front of him. The monitor displays a vibrant, colorful fighting game (the screen content is visible as colored light reflecting off his face and glasses, but the actual screen faces away from camera). A mechanical RGB keyboard with per-key rainbow backlighting sits on the desk to one side. A wireless gaming mouse with a red LED glow sits on a large dark mousepad. A half-empty matte-black energy drink can (generic, no brand) with condensation droplets sits near the monitor base. A gaming headset with RGB ear cups hangs on a headset stand to the right of the monitor. Behind him on the wall, two LED light panels glow in a gradient from deep electric purple to cyan blue, casting colored rim light on his hair and the edges of the gaming chair. A small potted plant (subtle, realistic) sits on a floating shelf. Cable management is clean and minimal. A small neon LED sign on the wall behind the monitor reads "MOBIVA" in a clean white glow. On the desk, the large mousepad has a subtle "MOBIVA" logo watermark printed in dark grey on black. A small "MOBIVA" branded sticker is visible on the bottom-right corner of the monitor bezel.

CLOTHING: He wears a relaxed-fit vintage washed black graphic t-shirt (no visible brand or text) and comfortable dark grey jogger pants. His feet are in black athletic socks (no shoes — he is at home).

LIGHTING BREAKDOWN:
- KEY LIGHT: The curved gaming monitor directly in front, casting a dynamic warm orange-to-cool-blue gradient across his face, shifting based on the game's on-screen action.
- RIM LIGHT: The wall-mounted LED panels behind him create a purple-cyan gradient edge light along his hair, shoulders, and the top of the gaming chair.
- FILL LIGHT: The RGB keyboard provides a very faint rainbow underlight on his forearms and the desk surface.
- ACCENT: A single small red LED power indicator on the monitor base creates a tiny bokeh dot in the lower frame.

CAMERA & LENS: Shot on a Sony A7 IV with a 35mm f/1.4 prime lens at f/1.8. Medium shot — framed from approximately his knees up, capturing his full seated posture, both hands on the controller, and enough of the desk/monitor setup to establish the environment. The camera is positioned at his eye level, slightly to his right at about a 30-degree angle. Shallow depth of field — his face and hands are razor-sharp, the monitor and background elements fall into a creamy, smooth bokeh with the RGB colors becoming beautiful soft circles of light.

POST-PROCESSING: Rich, moody color grade with lifted blacks (never pure black — always a hint of deep blue in the shadows). High local contrast on his face and hands. Subtle film grain (ISO 1600 look). A barely perceptible vignette darkening the corners. Overall tone: cinematic, intimate, immersive.

OUTPUT: 16:9 widescreen landscape ratio. Photorealistic. No watermarks, no text overlays, no UI elements other than what's described in the scene.`,

  gaming_gpt_fight: `Create an ultra-detailed, photorealistic screenshot of a premium AAA-quality 3D arcade fighting video game, as if photographed directly off a high-end gaming monitor during active gameplay. This must look like a real, commercially released fighting game (quality level of Tekken 8 or Street Fighter 6) being played right now.

LEFT FIGHTER — based on the FIRST uploaded photo:
Use this person's exact facial features, short dark hair, and light stubble, translated into a high-polygon, real-time 3D game character model with realistic skin shading and subsurface scattering. He is in a wide, low fighting stance — left foot forward, knees deeply bent, both fists raised to chin height in a classic boxing guard. His body is coiled, ready to strike. He wears a traditional deep-red karate gi with the top open revealing a white undershirt, a black belt tied at the waist, and bare feet with white ankle wraps. Red cloth bandages are wrapped around both forearms. A faint red energy aura shimmers around his fists. His expression is fierce — teeth gritted, eyes locked on his opponent.

RIGHT FIGHTER — based on the SECOND uploaded photo:
Use this person's exact facial features, shaved bald head, and full dark beard, translated into the same high-quality 3D game model style. He is captured mid-attack — his right fist is extended forward in a devastating straight punch aimed at the left fighter. His left arm is pulled back for a follow-up strike. His body is rotated into the punch with full commitment. He wears a deep-blue sleeveless martial arts vest with gold trim, black fitted combat pants, and black martial arts shoes. Blue cloth wraps on his knuckles. A burst of electric-blue energy particles and motion-blur streaks emanate from his extended fist, colliding with a stylized impact shockwave between the two fighters. His expression is aggressive — mouth open in a battle cry.

GAME UI OVERLAY:
- TOP LEFT: Health bar labeled "AHMET" ~65% green-to-yellow. Portrait icon of left fighter.
- TOP RIGHT: Health bar labeled "MEHMET" ~40% yellow-to-red. Portrait icon of right fighter.
- TOP CENTER: Circular timer "38". "ROUND 2" in metallic gold. Fading "FIGHT!" text.
- BOTTOM LEFT: Super meter for AHMET — 2/3 segments filled red.
- BOTTOM RIGHT: Super meter for MEHMET — 1/3 segments filled blue.
- FLOATING TEXT: "7 HIT COMBO!" in dynamic orange font with motion lines.

ARENA/STAGE: Japanese temple rooftop at golden hour sunset. Dark wooden temple architecture. Polished dark stone platform. Misty mountains and massive orange sun. Hundreds of cherry blossom petals frozen mid-air. Paper lanterns glowing amber. Volumetric god-rays from upper right.

VISUAL EFFECTS: Radial impact shockwave, motion blur on punching arm, stone debris particles, heat-distortion shimmer, dynamic rim lighting from sunset.

SCREEN PRESENTATION: Subtle curved monitor screen effect. Faint ghostly reflection of a dark room. Slightly over-saturated gaming monitor colors.

OUTPUT: 16:9 widescreen. Maximum detail. Photorealistic game graphics. No watermarks.`,

  gaming_kling_gamer: `A single continuous cinematic shot of a man with glasses sitting in a dark gaming room, gripping a PlayStation 5 controller. A glowing white "MOBIVA" neon sign illuminates the wall behind him. RGB keyboard and curved monitor create colored light on his face.

SECOND-BY-SECOND ACTION BREAKDOWN:
[0.0-0.5s] ESTABLISHING TENSION: He sits perfectly still in his gaming chair, leaning forward, elbows on knees. His jaw is clenched. His thumbs rest on the controller sticks. His eyes are narrowed behind his glasses, locked on the screen. The monitor casts a steady cool blue glow across the left side of his face. His chest rises slowly with one deep breath. Total stillness — the calm before the storm.
[0.5-1.5s] GAMEPLAY INTENSIFIES: His right thumb begins flicking the analog stick in rapid micro-movements. His left thumb joins — both thumbs now moving with precision and urgency. His shoulders tense up visibly, rising slightly. He starts subtly rocking his upper body forward, inching closer to the screen. The monitor glow shifts from blue to a warmer orange-yellow. His eyebrows furrow deeper. His lips press together tightly.
[1.5-2.5s] THE CRITICAL MOMENT: His eyes suddenly go WIDE — pupils dilating behind his glasses. Both rectangular monitor reflections in his lenses flash bright white for a split second. His mouth falls open. He inhales sharply. His grip on the controller tightens — knuckles whitening. He leans his entire torso forward another 10 degrees. The monitor glow rapidly flickers between orange and white. The RGB keyboard behind him pulses from purple to red in sync.
[2.5-3.5s] EMOTIONAL ERUPTION: He SLAMS his back against the chair backrest in a burst of adrenaline. His arms fly up — controller still in both hands — raised above his head in a victory gesture. His mouth opens wide in a primal shout of triumph. His head tilts back slightly. The gaming chair rocks backward from the force. The MOBIVA neon sign behind him provides a perfect backlight halo around his silhouette during this peak moment. Monitor glow shifts to bright victorious gold/white.
[3.5-4.5s] CELEBRATION: He brings the controller back down to chest level, pumping his fist once with his right hand while his left hand keeps the controller. He looks slightly left as if addressing an imaginary friend or stream chat, his face breaking into a huge, genuine smile of pure satisfaction. His glasses catch the warm golden monitor glow. He nods his head once — a confident, self-assured "Yeah, I did that" nod.
[4.5-5.0s] SETTLING BACK: He exhales deeply, shoulders dropping as the tension releases. He settles back into his chair, repositioning the controller in both hands. His expression shifts from celebration back to focused determination — ready for the next round. The monitor glow transitions back to cool blue, resetting the cycle. His thumbs return to the analog sticks.

CAMERA: Starts as a medium shot (chest up) at eye level, positioned at a 25-degree angle to his right. Throughout the entire 5 seconds, the camera performs an extremely slow, barely perceptible push-in (dolly forward). The movement is so gradual it is felt rather than seen, creating subconscious tension.
LIGHTING DYNAMICS: Monitor glow shifts: blue (calm) → orange (tension) → white flashes (climax) → gold (victory) → blue (reset). MOBIVA neon remains constant white backlight. RGB keyboard shifts purple → red during climax, then back.
ATMOSPHERE: Photorealistic. No stylization. Subtle film grain. Natural skin texture. Realistic cloth physics.`,

  gaming_kling_fight: `A high-quality 3D arcade fighting game match displayed on a gaming monitor. Two muscular fighters face each other on a Japanese temple rooftop arena at golden sunset. Health bars, round counter, and timer are visible at the top of the screen. Cherry blossom petals float in the air.

SECOND-BY-SECOND ACTION BREAKDOWN:
[0.0-0.8s] STANDOFF: Both fighters in stances, circling slowly. Left fighter in red gi shifts weight, fists raised. Right fighter in blue vest bounces lightly, bald head catching sunset light. Cherry blossom petals drift between them. Standard side-view angle. Timer 38→37.
[0.8-1.8s] FIRST ATTACK — RED FIGHTER (AHMET): Dashes forward explosively. Left jab (white spark) → right cross (orange spark) → spinning roundhouse kick with fabric motion blur. Massive red energy shockwave. "3 HIT COMBO!" in orange text. Cherry blossoms scatter violently. Blue fighter's health drops.
[1.8-2.8s] STAGGER AND RECOVERY — BLUE FIGHTER (MEHMET): Staggers back three steps. Catches himself with hand on ground. Shakes head once. Blue energy aura flares around fists. Super meter glows brighter. Straightens into aggressive stance. Camera rotates 10 degrees toward blue fighter.
[2.8-4.0s] COUNTER ATTACK: Blue fighter charges with battle cry. Devastating straight right punch engulfed in blue lightning. Punch connects with guard — enormous blue-red energy explosion. Screen shakes. Stone debris flies. Cherry blossoms blown everywhere. "7 HIT COMBO!" text shatters. Left fighter's health drops significantly.
[4.0-4.6s] CLASH AFTERMATH: Both push off to neutral distance. More battered — red gi disheveled, blue fighter has cut effect. Heavy breathing visible. Energy particles fade into golden sunset. Cherry blossoms resume gentle drift.
[4.6-5.0s] RESET: Camera returns to centered angle. Both circle again. Timer shows 34. Health bars show damage (red ~50%, blue ~30%). New wave of cherry blossoms enters from right.

CAMERA: Standard 2D fighting game side-view with subtle 3D movements — slight orbit on impacts, minor zoom-ins, barely perceptible shake on hits. Always returns to center.
VISUAL EFFECTS: Every hit produces sparks, energy bursts, motion blur. Red energy for left, blue for right. Cherry blossoms react to every shockwave.
QUALITY: AAA fighting game footage. Smooth 60fps animation. Consistent game UI throughout.`,

  // ─── VIDEO PART 2.5: T-Rex Omni Multi-Shot ───
  trex_omni: `Shot 1 (4s): Ultra-wide GoPro selfie perspective. @Image1 is holding the camera with one hand, walking slowly forward through a modern glass-walled tech office. He is holding a white coffee mug in his other hand. His facial expression is completely deadpan, calm, and unbothered. He stares blankly into the camera.

Shot 2 (3s): Cut to a dramatic wide shot from the side. A massive, hyper-realistic T-Rex dinosaur violently crashes through the office windows directly behind @Image1! The dinosaur roars, smashing desks and throwing office papers into the air. Dust falls from the ceiling.

Shot 3 (3s): Cut back to the GoPro selfie perspective. The T-Rex is actively destroying the office in the background, roaring silently. @Image1 completely ignores the apocalyptic chaos, slowly raises his coffee mug to his mouth, and takes a sip while maintaining his deadpan stare into the lens.`,

  // ─── VIDEO PART 3: T-Rex Office Selfie ───
  trex_gpt_system: `Transform the person in the uploaded photograph into the subject of a chaotic action-comedy selfie. Use his exact face, wavy dark brown hair, round tortoiseshell glasses, and trimmed beard — 100% likeness.

PERSPECTIVE & POSE: Shot from an ultra-wide "GoPro" fisheye lens perspective, as if he is holding the camera with his right arm extended out of frame. He is in the very close foreground. His expression is completely deadpan, calm, and hilariously unbothered. He is holding a white ceramic coffee mug in his left hand, near his chest. He wears a casual plain grey hoodie.

ENVIRONMENT (THE CHAOS): He is standing inside a modern, glass-walled tech office, but absolute apocalyptic chaos is happening directly behind him. A massive, terrifying, hyper-realistic T-Rex dinosaur is actively crashing through the office walls. The dinosaur's mouth is open in a roar. Desks are shattered, computer monitors are sparking, and hundreds of white office papers are fluttering chaotically in the air. Dust and debris are falling from the ceiling.

VIBE & LIGHTING: Despite the Jurassic disaster happening 10 feet behind him, he looks like he's just checking in for a normal Monday meeting. Bright, high-contrast cinematic lighting with dust particles illuminated in the air. Photorealistic, maximum detail. 16:9 widescreen.`,

  trex_gpt_template: `I am providing two images:
Image 1: The cinematic selfie with the T-Rex in the background (The Template).
Image 2: A reference photo of a new person.

Recreate Image 1 EXACTLY. Keep the exact same background, the same T-Rex crashing through the glass, the flying papers, the lighting, the coffee mug, the grey hoodie, and the exact same GoPro selfie perspective.

The ONLY change is the person holding the camera: Replace him with the person from Image 2. Ensure a 100% accurate facial likeness, matching his specific hair and facial features perfectly, while keeping the deadpan, unbothered expression.`,

  trex_kling: `A shaky handheld GoPro selfie video. The man in the foreground stays relatively still, but the camera shakes realistically with his subtle arm movements. He maintains a completely deadpan, unbothered expression, slowly raising the coffee mug to his mouth to take a sip. Behind him, absolute cinematic chaos unfolds: the massive T-Rex violently thrashes its head and roars silently. Countless office papers flutter chaotically through the air, dust falls continuously from the shattered ceiling, and sparks fly from the broken computers. Ultra-realistic, cinematic action, 16:9.`

};
