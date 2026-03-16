'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const moveHandler = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', moveHandler);

    let rafId: number;
    const animCursor = () => {
      (cursor as HTMLElement).style.left = mx + 'px';
      (cursor as HTMLElement).style.top = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      (ring as HTMLElement).style.left = rx + 'px';
      (ring as HTMLElement).style.top = ry + 'px';
      rafId = requestAnimationFrame(animCursor);
    };
    animCursor();

    const hoverTargets = document.querySelectorAll(
      'a, button, .service-card, .port-card, .filter-btn'
    );
    const enter = () => {
      (cursor as HTMLElement).style.width = '20px';
      (cursor as HTMLElement).style.height = '20px';
      (ring as HTMLElement).style.width = '56px';
      (ring as HTMLElement).style.height = '56px';
    };
    const leave = () => {
      (cursor as HTMLElement).style.width = '12px';
      (cursor as HTMLElement).style.height = '12px';
      (ring as HTMLElement).style.width = '36px';
      (ring as HTMLElement).style.height = '36px';
    };
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    const mq = window.matchMedia('(max-width: 900px)');
    const handleMQ = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.body.style.cursor = 'auto';
        (cursor as HTMLElement).style.display = 'none';
        (ring as HTMLElement).style.display = 'none';
      } else {
        document.body.style.cursor = 'none';
        (cursor as HTMLElement).style.display = 'block';
        (ring as HTMLElement).style.display = 'block';
      }
    };
    handleMQ(mq);
    mq.addEventListener('change', handleMQ as any);

    return () => {
      document.removeEventListener('mousemove', moveHandler);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      mq.removeEventListener('change', handleMQ as any);
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const scrollHandler = () => {
      if (!navbar) return;
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] =
      [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 9999,
        y: Math.random() * 9999,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.4 + 0.05,
      });
    }

    let rafId: number;
    const animParticles = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.a})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(animParticles);
    };
    animParticles();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    function countUp(el: HTMLElement, target: number) {
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        const suffix = target >= 100 ? '+' : '';
        el.textContent = Math.floor(current) + suffix;
      }, 25);
    }

    const statNums = document.querySelectorAll<HTMLElement>('[data-count]');
    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const target = parseInt(el.dataset.count || '0', 10);
            countUp(el, target);
            statObs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNums.forEach((n) => statObs.observe(n));
    return () => statObs.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  useEffect(() => {
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document
              .querySelectorAll<HTMLElement>('.exp-fill')
              .forEach((fill) => fill.classList.add('animated'));
            barObs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    const barsSection = document.querySelector('.expertise-bars');
    if (barsSection) barObs.observe(barsSection);
    return () => barObs.disconnect();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const handler = (btn: HTMLButtonElement) => () => {
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    };
    btns.forEach((btn) => btn.addEventListener('click', handler(btn)));
    return () => {
      btns.forEach((btn) => btn.replaceWith(btn.cloneNode(true)));
    };
  }, []);

  useEffect(() => {
    const hero3d = document.querySelector<HTMLElement>('.hero-3d');
    if (!hero3d) return;
    const moveHandler = (e: MouseEvent) => {
      const xRot = (e.clientY / window.innerHeight - 0.5) * 12;
      const yRot = (e.clientX / window.innerWidth - 0.5) * -12;
      hero3d.style.transform = `translateY(-50%) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
    };
    document.addEventListener('mousemove', moveHandler);
    return () => document.removeEventListener('mousemove', moveHandler);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handler = (a: HTMLAnchorElement) => (e: MouseEvent) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    anchors.forEach((a) => a.addEventListener('click', handler(a)));
    return () => {
      anchors.forEach((a) => a.replaceWith(a.cloneNode(true)));
    };
  }, []);

  return (
    <main>
      <canvas id="particles" />
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      <nav id="navbar">
        <a className="nav-logo" href="#home">
          <svg className="nav-logo-bolt" viewBox="0 0 40 50" fill="none">
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5E070" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B6914" />
              </linearGradient>
            </defs>
            <polygon
              points="22,2 6,28 18,28 18,48 34,22 22,22"
              fill="url(#ng)"
            />
          </svg>
          <span className="nav-logo-text">THOTH SPARKZ</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a className="nav-cta" href="#contact">
          Ignite Your Brand
        </a>
      </nav>

      <section id="home">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-badge">Digital Excellence Agency</div>
            <h1 className="hero-h1">
              We Don&apos;t Just
              <br />
              <span className="gold-text">Ignite Legends.</span>
            </h1>
            <p className="hero-p">
              Inspired by the ancient god of wisdom, we fuse timeless intellect
              with modern innovation to craft brands that transcend the ordinary
              — from the lush hills of Wayanad to the world.
            </p>
            <div className="hero-btns">
              <a className="btn-primary" href="#portfolio">
                View Our Work
              </a>
              <a className="btn-secondary" href="#contact">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-3d">
            <div className="logo-3d-wrap">
              <div className="logo-orb" />
              <div className="logo-ring logo-ring-1" />
              <div className="logo-ring logo-ring-2" />
              <svg
                className="logo-img-center"
                viewBox="0 0 200 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF0A0" />
                    <stop offset="30%" stopColor="#F0D060" />
                    <stop offset="70%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#7A5C0A" />
                  </linearGradient>
                  <linearGradient id="bolt-shine" x1="0" y1="0" x2="0.3" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <polygon
                  points="100,10 180,55 180,145 100,190 20,145 20,55"
                  fill="none"
                  stroke="url(#bolt-grad)"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <polygon
                  points="115,20 55,130 95,130 85,260 145,150 105,150"
                  fill="url(#bolt-grad)"
                  filter="url(#glow)"
                />
                <polygon
                  points="115,20 55,130 80,130 100,80"
                  fill="url(#bolt-shine)"
                />
                <rect
                  x="22"
                  y="115"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="url(#bolt-grad)"
                  opacity="0.7"
                />
                <rect
                  x="22"
                  y="100"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="url(#bolt-grad)"
                  opacity="0.5"
                />
                <rect
                  x="22"
                  y="130"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="url(#bolt-grad)"
                  opacity="0.5"
                />
                <rect
                  x="138"
                  y="115"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="url(#bolt-grad)"
                  opacity="0.7"
                />
                <rect
                  x="138"
                  y="100"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="url(#bolt-grad)"
                  opacity="0.5"
                />
                <circle
                  cx="100"
                  cy="140"
                  r="30"
                  fill="none"
                  stroke="url(#bolt-grad)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num" data-count="250">
              0
            </span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="120">
              0
            </span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="15">
              0
            </span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="5">
              0
            </span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-inner">
          <div className="services-header">
            <div>
              <div className="section-label reveal">What We Do</div>
              <h2 className="section-h2 reveal reveal-delay-1">
                Comprehensive Digital
                <br />
                Solutions
              </h2>
              <div className="gold-divider" />
              <p className="section-sub reveal reveal-delay-2">
                We provide end-to-end digital services that help your business
                thrive in an ever-evolving landscape.
              </p>
            </div>
          </div>
          <div className="services-grid reveal">
            {[
              {
                icon: '⚡',
                num: '01',
                title: 'Digital Branding',
                copy: 'We craft compelling brand identities that resonate with your target audience and establish a strong digital presence across all platforms.',
              },
              {
                icon: '🖥',
                num: '02',
                title: 'Web Design',
                copy: 'We create stunning, responsive websites that captivate your audience and drive conversions with intuitive user experiences.',
              },
              {
                icon: '⚙️',
                num: '03',
                title: 'Web Development',
                copy: 'Our expert developers build robust, scalable web applications using cutting-edge technologies and best practices.',
              },
              {
                icon: '📡',
                num: '04',
                title: 'Digital Marketing',
                copy: 'We develop strategic marketing campaigns that increase your online visibility and drive qualified traffic to your business.',
              },
              {
                icon: '📱',
                num: '05',
                title: 'Mobile App Development',
                copy: 'We create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
              },
              {
                icon: '🛒',
                num: '06',
                title: 'E-Commerce Solutions',
                copy: 'We build secure, scalable online stores that provide seamless shopping experiences and drive sales for your business.',
              },
              {
                icon: '✦',
                num: '07',
                title: 'UI/UX Design',
                copy: 'We design intuitive interfaces and seamless user experiences that engage your audience and increase conversion rates.',
              },
            ].map((s) => (
              <div className="service-card" key={s.num}>
                <div className="service-icon">{s.icon}</div>
                <span className="service-num">{s.num}</span>
                <h3 className="service-h3">{s.title}</h3>
                <p className="service-p">{s.copy}</p>
                <a className="service-link" href="#">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="section-inner">
          <div className="section-label reveal">Our Work</div>
          <h2 className="section-h2 reveal reveal-delay-1">Recent Projects</h2>
          <div className="gold-divider" />
          <div className="portfolio-filter reveal reveal-delay-2">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Web Design</button>
            <button className="filter-btn">Mobile Apps</button>
            <button className="filter-btn">Branding</button>
          </div>
          <div className="portfolio-grid reveal reveal-delay-3">
            {[
              {
                icon: '📊',
                cat: 'Web Design',
                title: 'TechVision Dashboard',
                desc: 'Analytics platform with dark theme and data visualization.',
              },
              {
                icon: '💪',
                cat: 'Mobile App',
                title: 'FitTrack App',
                desc: 'Fitness tracking with progress charts and workout stats.',
              },
              {
                icon: '👗',
                cat: 'Branding',
                title: 'Luxe Fashion Branding',
                desc: 'Minimalist luxury brand identity with premium packaging.',
              },
              {
                icon: '🛍',
                cat: 'Web Design',
                title: 'ElectroShop E-commerce',
                desc: 'Electronics store with seamless shopping experience.',
              },
              {
                icon: '🍔',
                cat: 'Mobile App',
                title: 'QuickBite Delivery',
                desc: 'Food delivery app with real-time order tracking.',
              },
              {
                icon: '🏢',
                cat: 'Branding',
                title: 'NexTech Corporate Identity',
                desc: 'Full corporate branding for tech startup.',
              },
            ].map((p) => (
              <div className="port-card" key={p.title}>
                <div className="port-card-inner">
                  <div className="port-placeholder-icon">{p.icon}</div>
                  <div className="port-bar-1" />
                  <div className="port-bar-2" />
                </div>
                <div className="port-line" />
                <div className="port-overlay">
                  <div className="port-cat">{p.cat}</div>
                  <div className="port-title">{p.title}</div>
                  <div className="port-desc">{p.desc}</div>
                  <a className="port-link" href="#">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-orb-glow" />
              <div className="about-3d-box">
                <div className="box-face front" />
                <div className="box-face back" />
                <div className="box-face left" />
                <div className="box-face right" />
                <div className="box-face top" />
                <div className="box-face bottom" />
              </div>
              <svg
                className="about-logo-center"
                viewBox="0 0 200 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="al-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF0A0" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#7A5C0A" />
                  </linearGradient>
                </defs>
                <polygon
                  points="115,20 55,130 95,130 85,260 145,150 105,150"
                  fill="url(#al-grad)"
                />
                <rect
                  x="22"
                  y="115"
                  width="40"
                  height="2.5"
                  rx="1.25"
                  fill="url(#al-grad)"
                  opacity="0.6"
                />
                <rect
                  x="138"
                  y="115"
                  width="40"
                  height="2.5"
                  rx="1.25"
                  fill="url(#al-grad)"
                  opacity="0.6"
                />
                <circle
                  cx="100"
                  cy="140"
                  r="28"
                  fill="none"
                  stroke="url(#al-grad)"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
            </div>
            <div>
              <div className="section-label reveal">Our Story</div>
              <h2 className="section-h2 reveal reveal-delay-1">
                Thoth Sparkz —
                <br />
                Where Wisdom Meets Spark
              </h2>
              <div className="gold-divider" />
              <p className="section-sub reveal reveal-delay-2 max-w-full">
                Before the internet was born, before the first spark of digital
                light, there was a god who wielded the power of knowledge,
                wisdom, and creation — Thoth. Inspired by this timeless force, a
                new kind of spark was kindled in the lush hills of Wayanad,
                Kerala.
              </p>
              <p className="section-sub reveal reveal-delay-3 max-w-full mt-4">
                We don&apos;t settle for ordinary. Every campaign, every pixel,
                every line of code we craft is charged with purpose — to make
                your brand not just visible, but unforgettable.
              </p>
              <div className="expertise-bars reveal mt-10">
                {[
                  ['Web Design & Development', '95%'],
                  ['Mobile App Development', '85%'],
                  ['UI/UX Design', '90%'],
                  ['Digital Marketing', '80%'],
                ].map(([label, pct]) => (
                  <div className="exp-item" key={label as string}>
                    <div className="exp-top">
                      <span>{label}</span>
                      <span className="exp-pct">{pct}</span>
                    </div>
                    <div className="exp-track">
                      <div className="exp-fill" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-9 reveal">
                <a className="btn-primary" href="#contact">
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="section-inner">
          <div className="section-label reveal">Client Stories</div>
          <h2 className="section-h2 reveal reveal-delay-1">
            What Our Clients Say
          </h2>
          <div className="gold-divider" />
          <div className="testimonials-grid">
            {[
              {
                initials: 'MR',
                name: 'Michael Richardson',
                role: 'CEO, TechNova',
                text: 'Thoth Sparkz transformed our online presence with a stunning website that perfectly captures our brand identity. Their team was professional, responsive, and delivered beyond our expectations.',
              },
              {
                initials: 'JC',
                name: 'Jennifer Chen',
                role: 'Marketing Director, StyleHouse',
                text: 'Working with Thoth Sparkz on our e-commerce platform was a game-changer for our business. Their attention to detail and user-focused approach resulted in a significant increase in our online sales.',
              },
              {
                initials: 'DJ',
                name: 'David Johnson',
                role: 'Founder, FitLife',
                text: 'The mobile app developed by Thoth Sparkz exceeded our expectations. Their team understood our vision and delivered a user-friendly app that our customers absolutely love.',
              },
            ].map((t, i) => (
              <div
                className={`test-card reveal ${
                  i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''
                }`}
                key={t.name}
              >
                <div className="test-quote">"</div>
                <div className="test-stars">★★★★★</div>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <div className="test-avatar">{t.initials}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-text reveal">
            <h3>Stay in the Light</h3>
            <p>
              Subscribe for latest projects, insights, and digital trends from
              Thoth Sparkz.
            </p>
          </div>
          <div className="newsletter-form reveal reveal-delay-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="btn-primary newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <section id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="section-label reveal">Let&apos;s Connect</div>
              <h2 className="section-h2 reveal reveal-delay-1">
                Start a Project
                <br />
                With Us
              </h2>
              <div className="gold-divider" />
              <p className="section-sub reveal reveal-delay-2">
                Have a vision? Let&apos;s ignite it together. Reach out and
                we&apos;ll create something unforgettable.
              </p>
              <div style={{ marginTop: 48 }}>
                <div className="contact-info-item reveal">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-val">
                      Wayanad, Kerala, India
                    </div>
                  </div>
                </div>
                <div className="contact-info-item reveal reveal-delay-1">
                  <div className="contact-icon">✉</div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-val">
                      info@thothsparkz.com
                      <br />
                      support@thothsparkz.com
                    </div>
                  </div>
                </div>
                <div className="contact-info-item reveal reveal-delay-2">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-val">
                      +91 (000) 000-0000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="contact-form neu-flat contact-card">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button className="btn-primary contact-btn">
                  Send Message ⚡
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="nav-logo" href="#home">
              <svg width="32" height="32" viewBox="0 0 40 50" fill="none">
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F5E070" />
                    <stop offset="100%" stopColor="#8B6914" />
                  </linearGradient>
                </defs>
                <polygon
                  points="22,2 6,28 18,28 18,48 34,22 22,22"
                  fill="url(#fg)"
                />
              </svg>
              <span className="nav-logo-text">THOTH SPARKZ</span>
            </a>
            <p>
              We create stunning digital experiences that captivate audiences
              and drive results for businesses worldwide.
            </p>
          </div>
          <div>
            <div className="footer-h">Services</div>
            <ul className="footer-links">
              <li>
                <a href="#">Digital Branding</a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile App Dev</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Quick Links</div>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Contact</div>
            <ul className="footer-links">
              <li>
                <a href="#">Wayanad, Kerala, India</a>
              </li>
              <li>
                <a href="#">info@thothsparkz.com</a>
              </li>
              <li>
                <a href="#">+91 (000) 000-0000</a>
              </li>
              <li>
                <a href="#">Mon–Fri: 9AM – 6PM</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Thoth Sparkz LLP. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
