import './style.css'

const icon = (name: 'play' | 'music' | 'arrow' | 'bag' | 'game' | 'menu' | 'close') => {
  const paths = {
    play: '<path d="m8 5 11 7-11 7V5Z"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    bag: '<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    game: '<path d="M7 8h10a5 5 0 0 1 4.6 7l-1 2.3a2 2 0 0 1-3.2.7l-2-2H8.6l-2 2a2 2 0 0 1-3.2-.7l-1-2.3A5 5 0 0 1 7 8Z"/><path d="M7 12v4M5 14h4M16 13h.01M19 15h.01"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

const character = (name: string, pose: string, className = '', imageUrl = '') => `
  <div class="character-art ${className} ${imageUrl ? 'has-render' : ''}" role="img" aria-label="${name}: ${pose}">
    <div class="character-glow"></div>
    ${imageUrl ? `<img class="character-render" src="${imageUrl}?v=power3" alt="" draggable="false" />` : `<div class="silhouette">
      <span class="silhouette-head"></span>
      <span class="silhouette-body"></span>
    </div>
    <span class="asset-label">${name}<small>${pose}</small></span>`}
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#main">Skip to the adventure</a>
  <header class="site-header">
    <a class="mini-brand" href="#home" aria-label="The Widgeteers home">
      <img src="/assets/logo-sm.png" alt="" />
    </a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a href="#story">The story</a>
      <a href="#heroes">Heroes</a>
      <a href="#rides">Rides</a>
      <a href="#watch">Watch</a>
      <a href="#games">Games</a>
      <a href="#shop">Shop</a>
    </nav>
    <a class="nav-watch" href="#watch">${icon('play')} Watch now</a>
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button>
  </header>

  <div class="mobile-menu" aria-hidden="true">
    <button class="menu-close" type="button" aria-label="Close menu">${icon('close')}</button>
    <a href="#story">The story</a><a href="#heroes">Heroes</a><a href="#rides">Rides</a>
    <a href="#watch">Watch</a><a href="#games">Games</a><a href="#shop">Shop</a>
  </div>

  <main id="main">
    <section class="logo-section" id="home">
      <span class="eyebrow light logo-eyebrow">Every problem has a solution —</span>
      <div class="logo-stage">
        <div class="logo-fx" data-logo-fx>
          <svg class="electric-defs" aria-hidden="true" focusable="false">
            <defs>
              <filter id="turbulent-displace" color-interpolation-filters="sRGB" x="-40%" y="-80%" width="180%" height="260%">
                <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="8" result="noise1" seed="1" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                  <animate attributeName="dy" values="120;0;120" dur="2.6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="8" result="noise2" seed="1" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                  <animate attributeName="dy" values="0;-120;0" dur="2.6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="8" result="noise3" seed="2" />
                <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
                  <animate attributeName="dx" values="80;0;80" dur="2.2s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="8" result="noise4" seed="2" />
                <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
                  <animate attributeName="dx" values="0;-80;0" dur="2.2s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="16" xChannelSelector="R" yChannelSelector="B" />
              </filter>
              <filter id="turbulent-displace-b" color-interpolation-filters="sRGB" x="-40%" y="-80%" width="180%" height="260%">
                <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="8" result="noise1" seed="5" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                  <animate attributeName="dy" values="0;140;0" dur="2.3s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="8" result="noise2" seed="5" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                  <animate attributeName="dy" values="-140;0;-140" dur="2.3s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="8" result="noise3" seed="8" />
                <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
                  <animate attributeName="dx" values="0;90;0" dur="2s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="8" result="noise4" seed="8" />
                <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
                  <animate attributeName="dx" values="-90;0;-90" dur="2s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>
                <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="14" xChannelSelector="R" yChannelSelector="B" />
              </filter>
            </defs>
          </svg>

          <img
            class="logo-gear"
            data-gear-seq
            src="/assets/gear3/0001.png"
            width="512"
            height="512"
            alt=""
            aria-hidden="true"
            draggable="false"
          />

          <div class="logo-fx-layer logo-fx-neons" aria-hidden="true" data-animate="neons">
            <div class="logo-tube logo-tube-upper">
              <span class="electric-stream electric-stream-a"><i></i></span>
              <span class="electric-stream electric-stream-b"><i></i></span>
            </div>
            <div class="logo-tube logo-tube-lower">
              <span class="electric-stream electric-stream-a"><i></i></span>
              <span class="electric-stream electric-stream-b"><i></i></span>
            </div>
          </div>

          <img
            class="brand-logo-main"
            src="/assets/logo@2x.png"
            srcset="/assets/logo.png 2000w, /assets/logo@2x.png 3600w"
            sizes="min(94vw, 1572px)"
            width="3600"
            height="970"
            alt="The Widgeteers"
          />
        </div>
        <p class="logo-tagline">Big mysteries. Clever inventions. Two best friends who always find a way.</p>
        <div class="logo-start">
          <div class="hero-actions">
            <button class="button primary" data-modal="teaser">${icon('play')} Watch the teaser</button>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section" id="crew">
      <div class="hero-grid"></div>
      <div class="gear-seq gear-a" aria-hidden="true"><img data-gear-seq src="/assets/gear3/0001.png" width="512" height="512" alt="" draggable="false" /></div>
      <div class="gear-seq gear-b" aria-hidden="true"><img data-gear-seq src="/assets/gear3/0001.png" width="512" height="512" alt="" draggable="false" /></div>
      <div class="gear-seq gear-c" aria-hidden="true"><img data-gear-seq src="/assets/gear3/0001.png" width="512" height="512" alt="" draggable="false" /></div>
      <div class="hero-brief">
        <span>Brainpower + bravery</span>
        <p>Meet the team behind every rescue.</p>
      </div>
      <div class="hero-stage" aria-label="Hero character artwork">
        ${character('TANGO', 'Hero suit power pose', 'tango-hero', '/assets/tango-hero.png')}
        ${character('BRAVO', 'Hero suit power pose', 'bravo-hero', '/assets/bravo-hero.png')}
        <div class="pipi-float" role="img" aria-label="PiPi the drone floating above the team">
          <img class="pipi-render" src="/assets/pipi.png" alt="PiPi" draggable="false" />
        </div>
      </div>
      <a class="scroll-cue" href="#story"><span>Scroll to explore</span><i></i></a>
    </section>

    <section class="story-section section" id="story">
      <div class="gear-seq gear-story" aria-hidden="true"><img data-gear-seq src="/assets/gear3/0001.png" width="512" height="512" alt="" draggable="false" /></div>
      <div class="story-visual reveal">
        <div class="lab-window">
          <span class="lab-light"></span>
          <img
            class="lab-photo"
            src="/assets/lab.jpg"
            alt="Bravo and Tango in the secret lab examining a curious invention"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
        <div class="lizard" tabindex="0" role="button" aria-label="A tiny hidden lizard. Click to find out more.">
          <span>🦎</span><small>psst!</small>
        </div>
      </div>
      <div class="story-copy reveal">
        <span class="eyebrow">Welcome to the workshop</span>
        <h2>Heroes don't need all the answers. <em>They find them together.</em></h2>
        <p>When something goes wrong, Bravo brings the ideas and Tango follows the clues. With PiPi watching from above, they turn every rescue into a clever adventure.</p>
        <div class="value-pills"><span>Curiosity</span><span>Teamwork</span><span>Courage</span></div>
      </div>
    </section>

    <section class="suit-up-section" id="suit-up">
      <div class="suit-sticky">
        <div class="suit-heading">
          <span class="eyebrow light">When the mission calls</span>
          <h2>Time to <em>suit up</em></h2>
          <p>Keep scrolling to take Bravo and Tango from everyday problem-solvers to rescue-ready heroes.</p>
        </div>
        <div class="transformation-stage">
          <div class="suit-person tango-suit">
            <div class="suit-layer regular-layer">
              <img
                class="suit-character-render"
                src="/assets/transitions/transition_tango_reg.png"
                alt="Tango in everyday clothes"
                width="646"
                height="1080"
                draggable="false"
                decoding="async"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div class="suit-layer hero-layer" aria-hidden="true">
              <img
                class="suit-character-render suit-hero-img"
                src="/assets/transitions/transition_tango_hero.png"
                alt=""
                width="646"
                height="1080"
                draggable="false"
                decoding="async"
                loading="lazy"
                fetchpriority="low"
              />
            </div>
            <div class="suit-scan" aria-hidden="true"></div>
          </div>
          <div class="suit-core" aria-hidden="true">
            <span class="suit-bolt suit-bolt-a"></span>
            <span class="suit-core-mark">W</span>
            <span class="suit-bolt suit-bolt-b"></span>
            <i class="suit-core-ring"></i>
          </div>
          <div class="suit-person bravo-suit">
            <div class="suit-layer regular-layer">
              <img
                class="suit-character-render"
                src="/assets/transitions/transition_bravo_reg.png"
                alt="Bravo in everyday clothes"
                width="634"
                height="1080"
                draggable="false"
                decoding="async"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div class="suit-layer hero-layer" aria-hidden="true">
              <img
                class="suit-character-render suit-hero-img"
                src="/assets/transitions/transition_bravo_hero.png"
                alt=""
                width="634"
                height="1080"
                draggable="false"
                decoding="async"
                loading="lazy"
                fetchpriority="low"
              />
            </div>
            <div class="suit-scan" aria-hidden="true"></div>
          </div>
        </div>
        <div class="suit-progress" aria-hidden="true"><span></span></div>
        <span class="suit-instruction">Scroll to activate hero mode</span>
      </div>
    </section>

    <section class="watch-section section" id="watch">
      <div class="section-heading reveal">
        <span class="eyebrow light">From Widgeteer HQ</span>
        <h2>See the team <em>in action</em></h2>
      </div>
      <div class="media-grid">
        <button class="feature-media teaser-card reveal" data-modal="teaser">
          <div class="media-placeholder"><span>TEASER VIDEO STILL</span><small>Wide team shot outside Widgeteer HQ</small></div>
          <span class="round-play">${icon('play')}</span>
          <span class="media-meta"><small>Official teaser</small><strong>A strange signal in the city</strong></span>
        </button>
        <button class="feature-media song-card reveal" data-modal="theme">
          <div class="sound-wave" aria-hidden="true">${Array(22).fill('<i></i>').join('')}</div>
          <span class="round-play copper">${icon('music')}</span>
          <span class="media-meta"><small>Opening theme</small><strong>Feel the action now!</strong></span>
        </button>
      </div>
    </section>

    <section class="heroes-section section" id="heroes">
      <div class="section-heading centered reveal">
        <span class="eyebrow">Meet the crew</span>
        <h2>Every hero brings <em>something different</em></h2>
        <p>Swipe, tap, or explore each member of the team.</p>
      </div>
      <div class="character-grid">
        <article class="character-card rust reveal">
          ${character('TANGO', 'Hero suit power pose', '', '/assets/tango-hero.png')}
          <div class="character-copy"><span class="character-number">01</span><h3>Tango</h3><p>Strong, brave, and a natural detective. Tango sees the little clues everyone else misses.</p><span class="skill">Super skill · Detecting</span></div>
        </article>
        <article class="character-card blue reveal">
          ${character('BRAVO', 'Hero suit power pose', '', '/assets/bravo-hero.png')}
          <div class="character-copy"><span class="character-number">02</span><h3>Bravo</h3><p>The brainy inventor. His secret lab is packed with half-finished gadgets and very big ideas.</p><span class="skill">Super skill · Inventing</span></div>
        </article>
        <article class="character-card sky reveal">
          ${character('PiPi', 'Hovering drone with smiling screen', 'drone-card', '/assets/pipi.png')}
          <div class="character-copy"><span class="character-number">03</span><h3>PiPi</h3><p>The team's loyal flying helper. PiPi maps routes, scans trouble, and always has their backs.</p><span class="skill">Super skill · Scanning</span></div>
        </article>
      </div>
    </section>

    <section class="rides-section section" id="rides">
      <div class="section-heading centered reveal">
        <span class="eyebrow">Ready for takeoff</span>
        <h2>Browse the <em>Ride Rack</em></h2>
        <p>Hover bikes, scooters, skateboards, copters, ATVs, and dive drones — swipe through the garage and tap a ride for the full mission sheet.</p>
      </div>
      <div class="ride-rack reveal" data-ride-rack>
        <button class="ride-nav ride-prev" type="button" aria-label="Previous rides">${icon('arrow')}</button>
        <div class="ride-viewport">
          <div class="ride-track" data-ride-track></div>
        </div>
        <button class="ride-nav ride-next" type="button" aria-label="Next rides">${icon('arrow')}</button>
      </div>
      <div class="ride-dots" data-ride-dots aria-hidden="true"></div>
    </section>

    <section class="villains-section section" id="villains">
      <div class="villain-copy reveal">
        <span class="eyebrow light">Trouble is brewing</span>
        <h2>Meet the <em>mischief makers</em></h2>
        <p>Meet Muffin and Churro — the Sweet Fellas. Not every mystery starts by accident. Some are baked, sprinkled, and planned from a very fancy bedroom.</p>
        <button class="text-link" type="button" data-villain-file="muffin">Open the villain files ${icon('arrow')}</button>
      </div>
      <div class="villain-stack reveal">
        <button class="villain-card muffin" type="button" data-villain-file="muffin" aria-label="Open Muffin's villain file">
          <div class="character-art has-render" role="img" aria-label="Muffin">
            <div class="character-glow"></div>
            <img class="character-render" src="/assets/villains/muffin_profile2.jpg" alt="" width="800" height="1000" draggable="false" loading="lazy" decoding="async" />
          </div>
          <strong>Muffin</strong>
          <small>Sweet Fellas · Muscle</small>
        </button>
        <button class="villain-card churro" type="button" data-villain-file="churro" aria-label="Open Churro's villain file">
          <div class="character-art has-render" role="img" aria-label="Churro">
            <div class="character-glow"></div>
            <img class="character-render" src="/assets/villains/churro_profile.jpg" alt="" width="800" height="1000" draggable="false" loading="lazy" decoding="async" />
          </div>
          <strong>Churro</strong>
          <small>Sweet Fellas · Schemer</small>
        </button>
      </div>
      <div class="gear-seq gear-villain" aria-hidden="true"><img data-gear-seq src="/assets/gear3/0001.png" width="512" height="512" alt="" draggable="false" /></div>
    </section>

    <section class="games-section section" id="games">
      <div class="section-heading centered reveal">
        <span class="eyebrow">Ready, Widgeteer?</span>
        <h2>Train your <em>hero skills</em></h2>
      </div>
      <div class="games-grid">
        <article class="game-card game-blue reveal">
          <span class="game-tag">Puzzle</span><div class="game-icon">⚙</div>
          <h3>Gear Grid</h3><p>Connect the cogs and power Bravo's latest invention.</p>
          <button class="button small" data-toast="Gear Grid is being built in the lab!">${icon('game')} Play soon</button>
        </article>
        <article class="game-card game-orange reveal">
          <span class="game-tag">Spot it</span><div class="game-icon">⌕</div>
          <h3>Tango's Clue Hunt</h3><p>Search the scene and spot every hidden clue before time runs out.</p>
          <button class="button small" data-toast="Tango's Clue Hunt is coming soon!">${icon('game')} Play soon</button>
        </article>
        <article class="game-card game-mint reveal">
          <span class="game-tag">Memory</span><div class="game-icon">◉</div>
          <h3>PiPi's Scanner</h3><p>Remember the signal pattern and help PiPi map a safe route.</p>
          <button class="button small" data-toast="PiPi's Scanner is coming soon!">${icon('game')} Play soon</button>
        </article>
      </div>
    </section>

    <section class="shop-section section" id="shop">
      <div class="shop-intro reveal">
        <span class="eyebrow">From the supply room</span>
        <h2>Official <em>hero gear</em></h2>
        <p>Bring a little Widgeteer spirit home. Field-tested for playtime, school days, and secret missions.</p>
        <button class="button dark" data-toast="The Widgeteers shop is opening soon!">Visit the shop ${icon('arrow')}</button>
      </div>
      <div class="products">
        <article class="product-card tilt-left reveal"><div class="product-art shirt"><span>T-SHIRT<br>PRODUCT RENDER</span></div><h3>Team Widgeteer Tee</h3><p>Kids apparel</p><button aria-label="View Team Widgeteer Tee" data-toast="This item will be available soon">${icon('bag')}</button></article>
        <article class="product-card tilt-right reveal"><div class="product-art toy"><span>PiPi PLUSH<br>PRODUCT RENDER</span></div><h3>PiPi Adventure Plush</h3><p>Soft toys</p><button aria-label="View PiPi Adventure Plush" data-toast="This item will be available soon">${icon('bag')}</button></article>
        <article class="product-card tilt-left reveal"><div class="product-art kit"><span>GADGET KIT<br>PRODUCT RENDER</span></div><h3>Junior Inventor Kit</h3><p>Activity sets</p><button aria-label="View Junior Inventor Kit" data-toast="This item will be available soon">${icon('bag')}</button></article>
      </div>
    </section>

    <section class="join-section">
      <div class="join-characters" aria-hidden="true">
        <span class="mini-silhouette one"></span><span class="mini-silhouette two"></span>
      </div>
      <div class="join-copy reveal">
        <span class="eyebrow light">Mission updates</span>
        <h2>Join the <em>crew</em></h2>
        <p>New episodes, games, activities, and shop drops — sent to the grown-ups.</p>
        <form class="signup-form">
          <label class="sr-only" for="email">Grown-up's email address</label>
          <input id="email" type="email" placeholder="Grown-up's email address" required />
          <button type="submit">Sign me up ${icon('arrow')}</button>
        </form>
        <small>For grown-ups only. You can unsubscribe at any time.</small>
      </div>
    </section>

    <section class="studio-section section" id="studio">
      <div class="studio-copy reveal">
        <span class="eyebrow">The makers</span>
        <h2>Made by <em>LA-BROS</em></h2>
        <p>The Widgeteers was created by LA-BROS, a studio founded by brothers Adrian and Łukasz Kasprzak. Together they build worlds full of invention, friendship, and big ideas for kids.</p>
      </div>
      <div class="studio-mark reveal" aria-hidden="true">
        <strong>LA-BROS</strong>
        <span>Adrian &amp; Łukasz Kasprzak</span>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-brand"><img src="/assets/logo-sm.png" alt="The Widgeteers" /><p>Brainpower. Bravery. Better together.</p></div>
    <div class="footer-links"><a href="#story">The story</a><a href="#heroes">Characters</a><a href="#rides">Rides</a><a href="#watch">Watch</a><a href="#games">Games</a><a href="#shop">Shop</a><a href="#studio">Studio</a></div>
    <div class="footer-bottom"><span>© 2026 The Widgeteers · A LA-BROS production</span><span><a href="#">Privacy</a><a href="#">For parents</a></span></div>
  </footer>

  <dialog class="video-modal">
    <button class="modal-close" aria-label="Close video">${icon('close')}</button>
    <div class="video-frame">
      <span>${icon('play')}</span>
      <strong>TEASER VIDEO</strong>
      <small>Replace this frame with your finished teaser</small>
    </div>
    <h2>A strange signal in the city</h2>
  </dialog>
  <dialog class="video-modal theme-modal">
    <button class="modal-close" aria-label="Close opening theme">${icon('close')}</button>
    <div class="video-frame video-embed" data-theme-embed></div>
    <h2>Feel the action now!</h2>
  </dialog>
  <dialog class="ride-modal">
    <button class="ride-modal-close" type="button" aria-label="Close ride details">${icon('close')}</button>
    <div class="ride-modal-art" data-ride-modal-art></div>
    <div class="ride-modal-copy">
      <span class="ride-modal-tag" data-ride-modal-tag></span>
      <h2 data-ride-modal-title></h2>
      <p data-ride-modal-blurb></p>
      <dl class="ride-stats" data-ride-modal-stats></dl>
    </div>
  </dialog>
  <dialog class="villain-file-modal">
    <button class="villain-file-close" type="button" aria-label="Close villain file">${icon('close')}</button>
    <div class="villain-file-switch" role="tablist" aria-label="Villain files">
      <button type="button" role="tab" data-villain-tab="muffin" aria-selected="true">Muffin</button>
      <button type="button" role="tab" data-villain-tab="churro" aria-selected="false">Churro</button>
    </div>
    <div class="villain-file-frame">
      <img data-villain-file-img src="/assets/villains/muffin_files.jpg" alt="Municipal police subject dossier for Muffin" />
    </div>
  </dialog>
  <div class="toast" role="status" aria-live="polite"></div>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu')!
const closeMenu = () => {
  mobileMenu.classList.remove('open')
  mobileMenu.setAttribute('aria-hidden', 'true')
  menuButton.setAttribute('aria-expanded', 'false')
  document.body.classList.remove('menu-open')
}
menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('open')
  mobileMenu.setAttribute('aria-hidden', 'false')
  menuButton.setAttribute('aria-expanded', 'true')
  document.body.classList.add('menu-open')
})
document.querySelector('.menu-close')?.addEventListener('click', closeMenu)
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

let dialogScrollY = 0
const restoreDialogScroll = () => {
  const html = document.documentElement
  const previousBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, dialogScrollY)
  html.style.scrollBehavior = previousBehavior
}
const unlockBodyScroll = () => {
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  restoreDialogScroll()
}
const lockBodyScroll = () => {
  dialogScrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${dialogScrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.width = '100%'
}
const openDialogPreservingScroll = (dialog: HTMLDialogElement, focusSelector = '.modal-close, .ride-modal-close, .villain-file-close') => {
  lockBodyScroll()
  dialog.showModal()
  dialog.querySelector<HTMLElement>(focusSelector)?.focus({ preventScroll: true })
}
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('close', () => {
    unlockBodyScroll()
    requestAnimationFrame(restoreDialogScroll)
  })
})

const modal = document.querySelector<HTMLDialogElement>('.video-modal:not(.theme-modal)')!
document.querySelectorAll<HTMLElement>('[data-modal="teaser"]').forEach((button) =>
  button.addEventListener('click', (event) => {
    event.preventDefault()
    openDialogPreservingScroll(modal)
  }),
)
modal.querySelector('.modal-close')?.addEventListener('click', () => modal.close())
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close()
})

const THEME_YOUTUBE_ID = 'yJMmcwPDJ2Q'
const themeModal = document.querySelector<HTMLDialogElement>('.theme-modal')!
const themeEmbed = themeModal.querySelector<HTMLElement>('[data-theme-embed]')!

const openThemeModal = () => {
  if (themeEmbed && !themeEmbed.querySelector('iframe')) {
    themeEmbed.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${THEME_YOUTUBE_ID}?autoplay=1&rel=0"
        title="The Widgeteers opening theme"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
      ></iframe>`
  }
  openDialogPreservingScroll(themeModal)
}

const closeThemeModal = () => {
  themeModal.close()
  if (themeEmbed) themeEmbed.innerHTML = ''
}

document.querySelectorAll<HTMLElement>('[data-modal="theme"]').forEach((button) =>
  button.addEventListener('click', (event) => {
    event.preventDefault()
    openThemeModal()
  }),
)
themeModal.querySelector('.modal-close')?.addEventListener('click', closeThemeModal)
themeModal.addEventListener('click', (event) => {
  if (event.target === themeModal) closeThemeModal()
})
themeModal.addEventListener('close', () => {
  if (themeEmbed) themeEmbed.innerHTML = ''
})

let toastTimer = 0
const showToast = (message: string) => {
  const toast = document.querySelector<HTMLElement>('.toast')!
  toast.textContent = message
  toast.classList.add('show')
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000)
}
document.querySelectorAll<HTMLElement>('[data-toast]').forEach((button) =>
  button.addEventListener('click', () => showToast(button.dataset.toast!)),
)
document.querySelector('.lizard')?.addEventListener('click', () => showToast('You found the little lizard! 🦎'))

const villainFiles: Record<'muffin' | 'churro', { src: string; alt: string }> = {
  muffin: {
    src: '/assets/villains/muffin_files.jpg',
    alt: 'Municipal police subject dossier for Muffin',
  },
  churro: {
    src: '/assets/villains/churro_files.jpg',
    alt: 'Municipal police subject dossier for Churro',
  },
}
const villainFileModal = document.querySelector<HTMLDialogElement>('.villain-file-modal')
const villainFileImg = document.querySelector<HTMLImageElement>('[data-villain-file-img]')

const setVillainFile = (id: 'muffin' | 'churro') => {
  const file = villainFiles[id]
  if (!file || !villainFileImg || !villainFileModal) return
  villainFileImg.src = file.src
  villainFileImg.alt = file.alt
  villainFileModal.querySelectorAll<HTMLButtonElement>('[data-villain-tab]').forEach((tab) => {
    tab.setAttribute('aria-selected', tab.dataset.villainTab === id ? 'true' : 'false')
  })
}

const openVillainFile = (id: 'muffin' | 'churro') => {
  if (!villainFileModal) return
  setVillainFile(id)
  openDialogPreservingScroll(villainFileModal, '.villain-file-close')
}

document.querySelectorAll<HTMLElement>('[data-villain-file]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const id = button.dataset.villainFile
    if (id === 'muffin' || id === 'churro') openVillainFile(id)
  })
})
villainFileModal?.querySelectorAll<HTMLButtonElement>('[data-villain-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.villainTab
    if (id === 'muffin' || id === 'churro') setVillainFile(id)
  })
})
document.querySelector('.villain-file-close')?.addEventListener('click', () => villainFileModal?.close())
villainFileModal?.addEventListener('click', (event) => {
  if (event.target === villainFileModal) villainFileModal.close()
})

document.querySelector<HTMLFormElement>('.signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  showToast('Welcome to the crew! Mission updates are on the way.')
  const form = event.currentTarget as HTMLFormElement
  form.reset()
})

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: 0.12 },
)
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const suitSection = document.querySelector<HTMLElement>('.suit-up-section')
const suitStage = document.querySelector<HTMLElement>('.suit-sticky')
let syncGearsFromScroll = () => {}
let suitWasTransforming = false

const resetSuitProgress = () => {
  if (!suitStage) return
  suitStage.classList.remove('is-transforming')
  suitStage.style.setProperty('--suit-reveal', '100%')
  suitStage.style.setProperty('--suit-opacity', '0')
  suitStage.style.setProperty('--regular-opacity', '1')
  suitStage.style.setProperty('--suit-rotation', '0deg')
  suitStage.style.setProperty('--suit-width', '0%')
  suitWasTransforming = false
}

const updateScroll = () => {
  document.documentElement.style.setProperty('--scroll-turn', `${window.scrollY * 0.08}deg`)
  document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 40)
  if (suitSection && suitStage) {
    // Progress starts only after the sticky section has pinned — never while still above it.
    // Finish the wipe before sticky unpins so the line can reach the top of the image.
    const scrollRange = Math.max(suitSection.offsetHeight - window.innerHeight, 1)
    const scrolledInto = window.scrollY - suitSection.offsetTop
    const wipeRange = scrollRange * 0.82
    const progress = Math.min(1, Math.max(0, scrolledInto / wipeRange))
    const transforming = progress > 0.01

    if (!transforming) {
      if (suitWasTransforming) resetSuitProgress()
    } else {
      suitWasTransforming = true
      suitStage.classList.add('is-transforming')
      // Bottom-up wipe: clip top inset shrinks from 100% → 0%.
      const reveal = ((1 - progress) * 100).toFixed(2)
      suitStage.style.setProperty('--suit-reveal', `${reveal}%`)
      suitStage.style.setProperty('--suit-opacity', '1')
      suitStage.style.setProperty('--regular-opacity', Math.max(0.18, 1 - progress * 0.6).toFixed(3))
      suitStage.style.setProperty('--suit-rotation', `${progress * 180}deg`)
      suitStage.style.setProperty('--suit-width', `${(progress * 100).toFixed(2)}%`)
    }
  }
  syncGearsFromScroll()
}
window.addEventListener('scroll', updateScroll, { passive: true })
window.addEventListener('resize', updateScroll, { passive: true })
window.addEventListener('pageshow', () => {
  resetSuitProgress()
  updateScroll()
})
resetSuitProgress()
updateScroll()

// Warm hero frames once the suit-up section is near the viewport (regular stays eager).
if (suitSection) {
  const warmHeroFrames = () => {
    document.querySelectorAll<HTMLImageElement>('.suit-hero-img').forEach((img) => {
      if (img.dataset.warmed === '1') return
      img.dataset.warmed = '1'
      img.loading = 'eager'
      if (!img.complete) img.decode().catch(() => {})
    })
  }
  const heroWarmObserver = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      warmHeroFrames()
      heroWarmObserver.disconnect()
    },
    { rootMargin: '120% 0px' },
  )
  heroWarmObserver.observe(suitSection)
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (prefersReducedMotion) {
  document.querySelectorAll('.electric-defs animate').forEach((node) => node.remove())
}

/** Cropped-logo placement mapped from 4K coords (4096x2160). */
const logoFxMap = {
  gear: { left: 0.315764, top: 0.075812, width: 0.097632, height: 0.362214 },
  upper: { left: 0.475187, top: 0.143201, width: 0.112553, height: 0.077016 },
  lower: { left: 0.554979, top: 0.844765, width: 0.083036, height: 0.063779 },
}

const placeLogoFx = () => {
  const fx = document.querySelector<HTMLElement>('.logo-fx')
  const logo = document.querySelector<HTMLImageElement>('.brand-logo-main')
  if (!fx || !logo) return
  const w = logo.clientWidth
  const h = logo.clientHeight
  if (w < 2 || h < 2) return

  const apply = (el: HTMLElement | null, box: { left: number; top: number; width: number; height: number }) => {
    if (!el) return
    el.style.left = `${box.left * w}px`
    el.style.top = `${box.top * h}px`
    el.style.width = `${box.width * w}px`
    el.style.height = `${box.height * h}px`
  }

  apply(fx.querySelector('.logo-gear'), logoFxMap.gear)
  apply(fx.querySelector('.logo-tube-upper'), logoFxMap.upper)
  apply(fx.querySelector('.logo-tube-lower'), logoFxMap.lower)

  const eyebrow = document.querySelector<HTMLElement>('.logo-eyebrow')
  const tagline = document.querySelector<HTMLElement>('.logo-tagline')
  if (eyebrow && tagline) {
    const gap = Math.round(logo.getBoundingClientRect().top - eyebrow.getBoundingClientRect().bottom)
    tagline.style.marginTop = `${Math.max(32, gap)}px`
  }
}

const logoMain = document.querySelector<HTMLImageElement>('.brand-logo-main')
if (logoMain) {
  if (logoMain.complete) placeLogoFx()
  else logoMain.addEventListener('load', placeLogoFx, { once: true })
}
window.addEventListener('resize', placeLogoFx, { passive: true })

const GEAR_FRAME_COUNT = 90
/** Decorative gears still scrub with scroll. */
const GEAR_PX_PER_FRAME = 40
const gearSrc = (frame: number) => `/assets/gear3/${String(frame).padStart(4, '0')}.png`
const logoGear = document.querySelector<HTMLImageElement>('.logo-gear')
const scrollGearNodes = [...document.querySelectorAll<HTMLImageElement>('[data-gear-seq]')].filter(
  (node) => node !== logoGear,
)
let lastScrollGearFrame = -1

for (let i = 1; i <= GEAR_FRAME_COUNT; i += 1) {
  const preload = new Image()
  preload.src = gearSrc(i)
}

if (logoGear && !prefersReducedMotion) {
  let logoGearFrame = 1
  window.setInterval(() => {
    logoGearFrame = logoGearFrame >= GEAR_FRAME_COUNT ? 1 : logoGearFrame + 1
    logoGear.src = gearSrc(logoGearFrame)
  }, 1000 / 20)
}

if (scrollGearNodes.length) {
  syncGearsFromScroll = () => {
    if (prefersReducedMotion) return
    const frame = (Math.floor(window.scrollY / GEAR_PX_PER_FRAME) % GEAR_FRAME_COUNT) + 1
    if (frame === lastScrollGearFrame) return
    lastScrollGearFrame = frame
    const src = gearSrc(frame)
    for (const node of scrollGearNodes) node.src = src
  }
  syncGearsFromScroll()
}

const pipi = document.querySelector<HTMLElement>('.pipi-float')
if (pipi && !prefersReducedMotion) {
  const rand = (min: number, max: number) => min + Math.random() * (max - min)
  const movePipi = () => {
    const x = rand(-28, 28)
    const y = rand(-6, 20)
    const rot = rand(-10, 10)
    const duration = rand(1.8, 3.4)
    pipi.style.transition = `transform ${duration}s cubic-bezier(.4,.05,.2,1)`
    pipi.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`
    window.setTimeout(movePipi, duration * 1000)
  }
  movePipi()
}

type RideStat = { label: string; value: string; wide?: boolean }
type Ride = {
  id: string
  name: string
  tag: string
  blurb: string
  imageFront: string
  imageBack: string
  stats: RideStat[]
}

const rides: Ride[] = [
  {
    id: 'jetbike',
    name: 'Hover Jet Bike',
    tag: 'Sky chase',
    blurb: 'The team’s go-to zip machine for rooftop chases and last-second leaps.',
    imageFront: '/assets/vehicles/jetbike_front.jpg',
    imageBack: '/assets/vehicles/jetbike_back.jpg',
    stats: [
      { label: 'Top speed', value: '180 km/h' },
      { label: 'Size', value: 'Compact' },
      { label: 'Crew', value: '1 rider' },
      { label: 'Range', value: '42 km' },
      { label: 'Power', value: 'Turbo battery' },
      { label: 'Best for', value: 'City pursuits' },
      { label: 'Widget perk', value: 'Boost burst + hover lock', wide: true },
    ],
  },
  {
    id: 'scooter',
    name: 'Turbo Scooter',
    tag: 'Street zip',
    blurb: 'Quiet, quick, and perfect for weaving through crowded sidewalks.',
    imageFront: '/assets/vehicles/scooter_front.jpg',
    imageBack: '/assets/vehicles/scooter_back.jpg',
    stats: [
      { label: 'Top speed', value: '55 km/h' },
      { label: 'Size', value: 'Pocketable' },
      { label: 'Crew', value: '1 rider' },
      { label: 'Range', value: '28 km' },
      { label: 'Power', value: 'Swap cell' },
      { label: 'Best for', value: 'Stealth patrols' },
      { label: 'Widget perk', value: 'Silent mode + fold-away frame', wide: true },
    ],
  },
  {
    id: 'hover-board',
    name: 'Hover Skateboard',
    tag: 'Trick transit',
    blurb: 'A floating deck for rails, ramps, and wild getaways.',
    imageFront: '/assets/vehicles/hoover_skateboard_front.jpg',
    imageBack: '/assets/vehicles/hoover_skateboard_back.jpg',
    stats: [
      { label: 'Top speed', value: '70 km/h' },
      { label: 'Size', value: 'Ultra light' },
      { label: 'Crew', value: '1 rider' },
      { label: 'Range', value: '18 km' },
      { label: 'Power', value: 'Magnetic pads' },
      { label: 'Best for', value: 'Parkour escapes' },
      { label: 'Widget perk', value: 'Wall cling + trick thrusters', wide: true },
    ],
  },
  {
    id: 'rescue-copter',
    name: 'Rescue Copter',
    tag: 'Air support',
    blurb: 'PiPi’s favorite sky taxi — lifts teammates and gadgets in one go.',
    imageFront: '/assets/vehicles/rescue_copter_front.jpg',
    imageBack: '/assets/vehicles/rescue_copter_back.jpg',
    stats: [
      { label: 'Top speed', value: '210 km/h' },
      { label: 'Size', value: 'Large' },
      { label: 'Crew', value: '3 seats' },
      { label: 'Range', value: '120 km' },
      { label: 'Power', value: 'Dual rotor' },
      { label: 'Best for', value: 'High rescues' },
      { label: 'Widget perk', value: 'Cargo claw + night scanner', wide: true },
    ],
  },
  {
    id: 'atv',
    name: 'All-Terrain Widget ATV',
    tag: 'Rough rider',
    blurb: 'Mud, dunes, rocky shortcuts — this chunky ATV keeps the mission rolling.',
    imageFront: '/assets/vehicles/atv_front.jpg',
    imageBack: '/assets/vehicles/atv_back.jpg',
    stats: [
      { label: 'Top speed', value: '90 km/h' },
      { label: 'Size', value: 'Chunky' },
      { label: 'Crew', value: '2 seats' },
      { label: 'Range', value: '55 km' },
      { label: 'Power', value: 'Trail cell' },
      { label: 'Best for', value: 'Off-road ops' },
      { label: 'Widget perk', value: 'Grip tires + gadget rack', wide: true },
    ],
  },
  {
    id: 'dpv-drone',
    name: 'Underwater DPV Drone',
    tag: 'Deep dive',
    blurb: 'A sleek dive scooter for canal chases, sunken clues, and splashy rescues.',
    imageFront: '/assets/vehicles/under_water_dpv_drone_front.jpg',
    imageBack: '/assets/vehicles/under_water_dpv_drone_back.png',
    stats: [
      { label: 'Top speed', value: '40 km/h' },
      { label: 'Size', value: 'Streamlined' },
      { label: 'Crew', value: '1 diver' },
      { label: 'Range', value: '22 km' },
      { label: 'Power', value: 'Sealed cell' },
      { label: 'Best for', value: 'Underwater missions' },
      { label: 'Widget perk', value: 'Sonar ping + glow fins', wide: true },
    ],
  },
]

const rideTrack = document.querySelector<HTMLElement>('[data-ride-track]')
const rideDots = document.querySelector<HTMLElement>('[data-ride-dots]')
const rideModal = document.querySelector<HTMLDialogElement>('.ride-modal')
let rideIndex = 0

const renderRideCards = () => {
  if (!rideTrack || !rideDots) return
  rideTrack.innerHTML = rides
    .map(
      (ride, index) => `
    <button class="ride-card" type="button" data-ride-index="${index}" aria-label="Open ${ride.name} details">
      <div class="ride-card-art">
        <img src="${ride.imageFront}" alt="" width="640" height="480" loading="lazy" decoding="async" draggable="false" />
      </div>
      <div class="ride-card-copy">
        <small>${ride.tag}</small>
        <strong>${ride.name}</strong>
        <p>${ride.blurb}</p>
      </div>
    </button>`,
    )
    .join('')
  rideDots.innerHTML = rides
    .map((_, index) => `<button type="button" data-ride-dot="${index}" aria-label="Go to ride ${index + 1}"></button>`)
    .join('')
}

const syncRideCarousel = () => {
  if (!rideTrack || !rideDots) return
  const total = rides.length
  const visibleSpan = 2
  rideTrack.querySelectorAll<HTMLElement>('.ride-card').forEach((card, index) => {
    let offset = index - rideIndex
    offset = ((offset % total) + total) % total
    if (offset > total / 2) offset -= total

    const abs = Math.abs(offset)
    const visible = abs <= visibleSpan
    card.style.setProperty('--ride-offset', visible ? `${offset}` : '0')
    card.style.setProperty('--ride-tilt', visible ? `${offset * 10}` : '0')
    card.style.setProperty('--ride-lift', visible ? `${abs * 16}` : '0')
    card.classList.toggle('is-active', abs === 0)
    card.classList.toggle('is-near', abs === 1)
    card.classList.toggle('is-mid', abs === 2)
    card.classList.toggle('is-far', !visible)
    card.setAttribute('aria-hidden', visible ? 'false' : 'true')
    card.tabIndex = abs === 0 ? 0 : -1
  })
  rideDots.querySelectorAll<HTMLElement>('button').forEach((dot, index) => {
    dot.classList.toggle('is-active', index === rideIndex)
  })
}

const openRideModal = (ride: Ride) => {
  if (!rideModal) return
  const art = rideModal.querySelector('[data-ride-modal-art]')
  const tag = rideModal.querySelector('[data-ride-modal-tag]')
  const title = rideModal.querySelector('[data-ride-modal-title]')
  const blurb = rideModal.querySelector('[data-ride-modal-blurb]')
  const stats = rideModal.querySelector('[data-ride-modal-stats]')
  if (art) {
    art.innerHTML = `
      <figure>
        <img src="${ride.imageFront}" alt="${ride.name} front view" width="900" height="700" decoding="async" />
        <figcaption>Front</figcaption>
      </figure>
      <figure>
        <img src="${ride.imageBack}" alt="${ride.name} back view" width="900" height="700" decoding="async" />
        <figcaption>Back</figcaption>
      </figure>`
  }
  if (tag) tag.textContent = ride.tag
  if (title) title.textContent = ride.name
  if (blurb) blurb.textContent = ride.blurb
  if (stats) {
    stats.innerHTML = ride.stats
      .map(
        (stat) => `
      <div${stat.wide ? ' class="wide"' : ''}>
        <dt>${stat.label}</dt>
        <dd>${stat.value}</dd>
      </div>`,
      )
      .join('')
  }
  openDialogPreservingScroll(rideModal, '.ride-modal-close')
}

if (rideTrack && rideDots) {
  renderRideCards()
  syncRideCarousel()

  const stepRide = (delta: number) => {
    rideIndex = (rideIndex + delta + rides.length) % rides.length
    syncRideCarousel()
  }

  document.querySelector('.ride-prev')?.addEventListener('click', () => stepRide(-1))
  document.querySelector('.ride-next')?.addEventListener('click', () => stepRide(1))
  rideDots.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null
    const index = target?.dataset.rideDot
    if (index == null) return
    rideIndex = Number(index)
    syncRideCarousel()
  })
  rideTrack.addEventListener('click', (event) => {
    const card = (event.target as HTMLElement | null)?.closest<HTMLElement>('.ride-card')
    if (!card) return
    const index = Number(card.dataset.rideIndex)
    if (index !== rideIndex) {
      rideIndex = index
      syncRideCarousel()
      return
    }
    openRideModal(rides[index])
  })

  let touchStartX = 0
  rideTrack.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0
    },
    { passive: true },
  )
  rideTrack.addEventListener(
    'touchend',
    (event) => {
      const endX = event.changedTouches[0]?.clientX ?? 0
      const delta = endX - touchStartX
      if (Math.abs(delta) < 40) return
      stepRide(delta < 0 ? 1 : -1)
    },
    { passive: true },
  )
}

document.querySelector('.ride-modal-close')?.addEventListener('click', () => rideModal?.close())
rideModal?.addEventListener('click', (event) => {
  if (event.target === rideModal) rideModal.close()
})

