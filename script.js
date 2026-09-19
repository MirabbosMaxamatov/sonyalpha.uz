// ── DATA ──
        const PRODUCTS = {
            cameras: [
                { id: 'ilce7c', name: 'Sony ILCE-7C', sub: 'Full-Frame Bezserkallo Kamera', model: 'ILCE-7C · 24.2MP · 4K', price: '20,608,000', badge: 'top', cat: 'cameras' },
                { id: 'ilce7sm3', name: 'Sony ILCE-7SM3', sub: 'Video uchun Full-Frame Kamera', model: 'ILCE-7SM3 · 12.1MP · 4K 120fps', price: '34,132,000', badge: 'new', cat: 'cameras' },
                { id: 'ilce7rm4', name: 'Sony ILCE-7RM4', sub: '61 Megapiksel Full-Frame', model: 'ILCE-7RM4A · 61MP · 4K', price: '41,538,000', badge: 'top', cat: 'cameras' },
                { id: 'ilce7m4', name: 'Sony ILCE-7M4', sub: 'Yangi avlod Full-Frame', model: 'ILCE-7M4 · 33MP · 4K 60fps', price: '35,420,000', badge: 'new', cat: 'cameras' },
                { id: 'ilce6600', name: 'Sony ILCE-6600', sub: 'APS-C Bezserkallo Kamera', model: 'ILCE-6600 · 24.2MP · 4K', price: '17,388,000', badge: 'top', cat: 'cameras' },
                { id: 'ilce7cl', name: 'Sony ILCE-7CL', sub: '28-60mm linza bilan to\'plam', model: 'ILCE-7CL · 24.2MP · Kit', price: '24,472,000', badge: '', cat: 'cameras' },
            ],
            compact: [
                { id: 'rx100vii', name: 'Sony RX100 VII', sub: 'Premium Kompakt Kamera', model: 'DSC-RX100M7 · 20.1MP · 4K', price: '9,800,000', badge: 'top', cat: 'compact' },
                { id: 'rx10iv', name: 'Sony RX10 IV', sub: 'Uzum masofali kompakt', model: 'DSC-RX10M4 · 20.1MP · 4K', price: '8,400,000', badge: '', cat: 'compact' },
            ],
            lenses: [
                { id: 'sel2470gm', name: 'SEL 24-70mm f/2.8 GM', sub: 'Universal G Master Linza', model: 'SEL2470GM · FE Mount', price: '18,032,000', badge: 'top', cat: 'lenses' },
                { id: 'sel2470gm2', name: 'SEL 24-70mm f/2.8 GM II', sub: 'Yangi avlod G Master', model: 'SEL2470GM2 · FE Mount', price: '23,828,000', badge: 'new', cat: 'lenses' },
                { id: 'sel35f14gm', name: '35mm f/1.4 GM', sub: 'Keng burchakli G Master', model: 'SEL35F14GM · FE Mount', price: '16,100,000', badge: '', cat: 'lenses' },
                { id: 'sel24105g', name: 'SEL 24-105mm F4 G', sub: 'Universal G seriyali linza', model: 'SEL24105G · FE Mount', price: '11,592,000', badge: 'top', cat: 'lenses' },
                { id: 'sel35f18f', name: 'SEL 35mm f/1.8', sub: 'Ixcham keng burchakli linza', model: 'SEL35F18F · FE Mount', price: '9,016,000', badge: '', cat: 'lenses' },
                { id: 'sel1224g', name: 'FE 12-24mm f/4 G', sub: 'Ultra keng burchak', model: 'SEL1224G · FE Mount', price: '18,998,000', badge: '', cat: 'lenses' },
            ],
            video: [
                { id: 'fdr-ax700', name: 'Sony FDR-AX700', sub: '4K Pro Videokamera', model: 'FDR-AX700 · 4K HDR · 1"', price: '6,200,000', badge: 'top', cat: 'video' },
                { id: 'fdr-ax43', name: 'Sony FDR-AX43', sub: 'Kompakt 4K Videokamera', model: 'FDR-AX43 · 4K · BOSS', price: '3,800,000', badge: '', cat: 'video' },
            ]
        };

        const NEWS = [
            {
                id: 'sony-zv-e10-ii',
                date: '15 Yanvar 2025',
                title: 'Sony ZV-E10 II — Bloggerlar uchun yangi kamera',
                excerpt: 'Sony kompaniyasi ZV-E10 seriyasini yangiladi. Yangi model 4K 60fps, yaxshilangan AF va kattaroq batareya bilan keladi.',
                imgColor: '#1a2535',
                imgIcon: '📷',
                body: `<p>Sony kompaniyasi kontent yaratuvchilar uchun maxsus mo'ljallangan ZV-E10 seriyasining yangi avlodini taqdim etdi. Yangi Sony ZV-E10 II modeli avvalgi versiyasiga nisbatan sezilarli yaxshilanishlarni o'z ichiga oladi.</p>
<h3>Asosiy xususiyatlar</h3>
<p>Yangi modelda 26 megapiksellik APS-C CMOS sensor o'rnatilgan bo'lib, u 4K 60fps formatida video yozib olish imkonini beradi. Bu avvalgi modeldagi 4K 30fps cheklovini bartaraf etadi.</p>
<ul><li>4K 60fps video yozish</li><li>Yaxshilangan avtofokus tizimi (Real-Time Tracking)</li><li>Kattaroq batareya — bir zaryad bilan 570 kadr</li><li>USB-C orqali to'g'ridan-to'g'ri striming</li><li>Yangi mikrofon ulagichi</li></ul>
<h3>Narx va mavjudlik</h3>
<p>Sony ZV-E10 II Toshkentdagi SonyAlpha showroomida mavjud. Narxi haqida ma'lumot olish uchun biz bilan bog'laning.</p>`
            },
            {
                id: 'gmaster-lenses-2025',
                date: '8 Fevral 2025',
                title: 'G Master linzalar yangi kolleksiyasi — 2025',
                excerpt: "Sony G Master seriyasiga uchta yangi linza qo'shildi. 50mm f/1.2, 85mm f/1.4 va 135mm f/1.8 — portrait fotograflari uchun ideal tanlov.",
                imgColor: '#1a1a2a',
                imgIcon: '🔭',
                body: `<p>2025 yilda Sony G Master seriyasiga uchta yangi ob'ektiv qo'shildi. Bu linzalar professional fotograflar va videograflar uchun mo'ljallangan bo'lib, eng yuqori sifatdagi tasvirni kafolatlaydi.</p>
<h3>Yangi G Master linzalar</h3>
<ul><li><strong>FE 50mm f/1.2 GM</strong> — portrait va street fotografiya uchun</li><li><strong>FE 85mm f/1.4 GM II</strong> — yaxshilangan AF tezligi bilan</li><li><strong>FE 135mm f/1.8 GM</strong> — ultra aniq bokeh effekti</li></ul>
<p>Barcha uchta linza Sony E-mount tizimi bilan to'liq mos keladi va IBIS bilan birgalikda ishlashga optimallashtirilgan.</p>
<h3>Qachon mavjud bo'ladi?</h3>
<p>Linzalar SonyAlpha Toshkent showroomida oldindan buyurtma uchun qabul qilinmoqda. Buyurtma berish uchun bizga qo'ng'iroq qiling.</p>`
            },
            {
                id: 'trade-in-2025',
                date: '1 Mart 2025',
                title: "Trade-In aksiyasi — eski kamerangizni yangi Sony'ga almashtiring",
                excerpt: "Eski Sony kamerangizni olib keling, biz uning qiymatini yangi kamera narxidan ayiramiz. Chegirma miqdori 500,000 UZS dan 3,000,000 UZS gacha.",
                imgColor: '#1a2a1a',
                imgIcon: '🔄',
                body: `<p>SonyAlpha Toshkent 2025 yilning mart oyidan boshlab Trade-In dasturini ishga tushirdi. Bu dastur orqali siz eski Sony kamerangizni yangi modelga almashtira olasiz.</p>
<h3>Dastur qanday ishlaydi?</h3>
<ul><li>Eski Sony kamerangizni showroomga olib keling</li><li>Mutaxassislarimiz kamerangiz holatini baholaydi</li><li>Baholash natijasiga ko'ra chegirma taqdim etiladi</li><li>Chegirmani yangi Sony kamera xaridida ishlatib oling</li></ul>
<h3>Chegirma miqdori</h3>
<p>Chegirma miqdori kamerangizning holatiga va modeliga qarab 500,000 UZS dan 3,000,000 UZS gacha bo'lishi mumkin. Baholash bepul va hech qanday majburiyatsiz amalga oshiriladi.</p>
<p>Aksiya 2025 yil 31 martgacha davom etadi. Ulgurashga shoshiling!</p>`
            }
        ];

        const FAQS = [
            { q: "Kafolat muddati qancha?", a: "Sony kompaniyasining rasmiy do'koni sifatida barcha mahsulotlarga 2 yil rasmiy kafolat beramiz. Kafolat muddati davomida barcha nosozliklar bepul tuzatiladi." },
            { q: "Yetkazib berish xizmati bormi?", a: "Ha, Toshkent bo'ylab 24 soat ichida, boshqa shaharlar uchun 1-3 kun ichida yetkazib beramiz. 5,000,000 UZS dan yuqori xaridlarda yetkazish bepul." },
            { q: "Naqd pulsiz to'lash imkoni bormi?", a: "Ha, plastik karta (Uzcard, Humo), Click, Payme va bank o'tkazmasi orqali to'lashingiz mumkin. Muddatli to'lov (bo'lib to'lash) ham mavjud." },
            { q: "Mahsulotni qaytarish mumkinmi?", a: "Mahsulot 14 kun ichida asl holatida (qadoqda, hujjatlari bilan) qaytarilishi mumkin. Texnik nosozlik bo'lsa, kafolat doirasida almashtiriladi." },
            { q: "Showroom qayerda joylashgan?", a: "Showroomimiz Toshkent sh., Navoiy ko'chasi, 14 manzilida joylashgan. Ish vaqti: Dushanba-Juma, soat 10:00 dan 18:00 gacha." },
            { q: "Buyurtma berish uchun nima qilish kerak?", a: "Sayt orqali yoki +998 95 170 55 22 raqamiga qo'ng'iroq qilib buyurtma berishingiz mumkin. Telegram: @SonyAlphaUZ orqali ham murojaat qilishingiz mumkin." },
        ];

        const SALES = [
            { title: "Sony ILCE-7M3 + 28-70mm Kit", tag: "-15%", desc: "Kamera va linzani birga oling, 15% chegirma bilan. Faqat may oyida!", price: "23,184,000 UZS", svgColor: "#1a1a2a" },
            { title: "G Master Linzalarga Chegirma", tag: "-10%", desc: "Istalgan G Master linzaga 10% chegirma. Kafolat o'z kuchida qoladi.", price: "18,032,000 UZS", svgColor: "#1a2a1a" },
            { title: "Aksessuarlar Bundle", tag: "Bepul", desc: "Kamera xaridida — sumka, SD karta va batareya zaryadlovchi bepul!", price: "9,016,000 UZS", svgColor: "#2a1a1a" },
            { title: "Trade-In Aksiyasi", tag: "-3M UZS", desc: "Eski kamerangizni olib keling — yangi modelga chegirma oling.", price: "20,608,000 UZS", svgColor: "#1a1f2a" },
        ];

        // ── SVG HELPERS ──
        function camSVG(w = 140, h = 115) {
            return `<svg width="${w}" height="${h}" viewBox="0 0 140 115" fill="none">
    <rect x="15" y="28" width="110" height="68" rx="10" fill="#1a1a1a" stroke="#2a2a2a" stroke-width="1.5"/>
    <rect x="15" y="40" width="20" height="56" rx="8" fill="#161616"/>
    <circle cx="78" cy="62" r="28" fill="#111" stroke="#222" stroke-width="1.5"/>
    <circle cx="78" cy="62" r="20" fill="#0d0d0d"/><circle cx="78" cy="62" r="12" fill="#060d1a"/>
    <circle cx="104" cy="46" r="3" fill="#cc1e1e"/>
    <rect x="48" y="22" width="50" height="10" rx="3" fill="#1a1a1a" stroke="#2a2a2a"/>
    <text x="70" y="96" font-family="DM Sans" font-size="6" fill="#333" letter-spacing="2" text-anchor="middle">SONY</text>
    <text x="104" y="99" font-family="DM Sans" font-size="13" fill="#cc1e1e">α</text>
  </svg>`;
        }
        function lensSVG(w = 90, h = 115) {
            return `<svg width="${w}" height="${h}" viewBox="0 0 90 115" fill="none">
    <rect x="24" y="6" width="42" height="103" rx="12" fill="#1a1a1a" stroke="#2a2a2a" stroke-width="1.5"/>
    <rect x="18" y="16" width="54" height="14" rx="4" fill="#222" stroke="#333"/>
    <rect x="18" y="85" width="54" height="14" rx="4" fill="#222" stroke="#333"/>
    <ellipse cx="45" cy="58" rx="22" ry="22" fill="#0a0d14" stroke="#1a2030" stroke-width="1.5"/>
    <ellipse cx="45" cy="58" rx="14" ry="14" fill="#060810"/>
    <ellipse cx="39" cy="52" rx="6" ry="3.5" fill="rgba(100,150,255,.12)" transform="rotate(-20 39 52)"/>
  </svg>`;
        }
        function vidSVG(w = 140, h = 100) {
            return `<svg width="${w}" height="${h}" viewBox="0 0 140 100" fill="none">
    <rect x="14" y="22" width="80" height="56" rx="8" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
    <circle cx="52" cy="50" r="20" fill="#111" stroke="#222" stroke-width="1.5"/>
    <circle cx="52" cy="50" r="13" fill="#0a0a0a"/>
    <polygon points="126,22 94,36 94,64 126,78" fill="#222" stroke="#333" stroke-width="1.5"/>
    <circle cx="52" cy="50" r="5" fill="#cc1e1e"/>
    <rect x="22" y="28" width="12" height="8" rx="2" fill="#cc1e1e" opacity=".8"/>
  </svg>`;
        }

        // ── RENDER PRODUCT CARD ──
        function renderProdCard(p, clickable = true) {
            let svg = p.cat === 'lenses' ? lensSVG() : p.cat === 'video' ? vidSVG() : camSVG();
            let badgeHtml = p.badge ? `<span class="prod-badge ${p.badge === 'new' ? 'badge-new' : 'badge-top'}">${p.badge === 'new' ? 'Yangi' : 'Top'}</span>` : '';
            return `<div class="prod-card" ${clickable ? 'onclick="showProdDetail(\'' + p.id + '\')"' : ''}>
    <div class="prod-img">${badgeHtml}${svg}</div>
    <div class="prod-info">
      <div class="prod-name">${p.name}</div>
      <div class="prod-model">${p.model}</div>
      <div class="prod-footer">
        <div><div class="prod-price-lbl">Narx</div><div class="prod-price">${p.price} <small style="font-size:12px;color:var(--g4)">UZS</small></div></div>
        <button class="prod-add" onclick="event.stopPropagation();addToCart()">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
        </button>
      </div>
    </div>
  </div>`;
        }

        // ── RENDER NEWS ITEM ──
        function renderNewsItem(n, preview = false) {
            return `<div class="news-item" onclick="openNews('${n.id}')">
    <div class="news-item-img">
      <div class="img-placeholder" style="background:${n.imgColor};height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">${n.imgIcon}</div>
    </div>
    <div class="news-item-body">
      <div class="news-date">${n.date}</div>
      <div class="news-item-title">${n.title}</div>
      <div class="news-item-excerpt">${n.excerpt}</div>
      <div class="news-arrow">Batafsil o'qish <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    </div>
  </div>`;
        }

        // ── INIT GRIDS ──
        function initGrids() {
            // Category grids
            document.getElementById('grid-cameras').innerHTML = PRODUCTS.cameras.map(p => renderProdCard(p)).join('');
            document.getElementById('grid-compact').innerHTML = PRODUCTS.compact.map(p => renderProdCard(p)).join('');
            document.getElementById('grid-lenses').innerHTML = PRODUCTS.lenses.map(p => renderProdCard(p)).join('');
            document.getElementById('grid-video').innerHTML = PRODUCTS.video.map(p => renderProdCard(p)).join('');

            // Home: top 4 products
            const top4 = [...PRODUCTS.cameras.slice(0, 2), PRODUCTS.lenses[0], PRODUCTS.cameras[4]];
            document.getElementById('homeProdGrid').innerHTML = top4.map(p => renderProdCard(p)).join('');

            // Home news preview (2)
            document.getElementById('homeNewsPreview').innerHTML = NEWS.slice(0, 2).map(n => renderNewsItem(n, true)).join('');

            // Full news list
            document.getElementById('newsListContainer').innerHTML = NEWS.map(n => renderNewsItem(n)).join('');

            // FAQ
            document.getElementById('faqContainer').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <svg class="faq-chevron" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');

            // Sales
            document.getElementById('salesGrid').innerHTML = SALES.map(s => `
    <div class="sale-card">
      <div class="sale-card-top">
        <div class="sale-img" style="background:${s.svgColor}">${camSVG(120, 100)}</div>
        <div class="sale-body">
          <span class="sale-tag">${s.tag}</span>
          <div class="sale-title">${s.title}</div>
          <div class="sale-desc">${s.desc}</div>
          <div class="sale-price">Dan: ${s.price}</div>
        </div>
      </div>
    </div>`).join('');
        }

        // ── NAVIGATION ──
        function goPage(id) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('page-' + id).classList.add('active');
            window.scrollTo(0, 0);
            // nav highlight
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('nav-active'));
            const navEl = document.getElementById('nav-' + id);
            if (navEl) navEl.classList.add('nav-active');
            // trigger fi
            setTimeout(() => {
                document.querySelectorAll('#page-' + id + ' .fi').forEach((el, i) => {
                    setTimeout(() => el.classList.add('v'), i * 80);
                });
            }, 50);
        }

        // ── NEWS DETAIL ──
        function openNews(id) {
            const n = NEWS.find(x => x.id === id);
            if (!n) return;
            document.getElementById('newsDetailHeroImg').style.background = n.imgColor;
            document.getElementById('newsDetailHeroImg').style.display = 'flex';
            document.getElementById('newsDetailHeroImg').innerHTML = `<div style="font-size:120px">${n.imgIcon}</div>`;
            document.getElementById('newsDetailDate').textContent = n.date;
            document.getElementById('newsDetailTitle').textContent = n.title;
            document.getElementById('newsDetailBody').innerHTML = n.body;
            goPage('news-detail');
        }

        // ── FAQ TOGGLE ──
        function toggleFaq(i) {
            const item = document.getElementById('faq-' + i);
            item.classList.toggle('open');
        }

        // ── CART ──
        let cartCount = 0;
        function addToCart(btn) {
            cartCount++;
            document.getElementById('cartBadge').textContent = cartCount;
        }

        // ── CURSOR ──
        const cursor = document.getElementById('cursor');
        const ring = document.getElementById('cursorRing');
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
        (function anim() {
            cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
            rx += (mx - rx) * .12; ry += (my - ry) * .12;
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
            requestAnimationFrame(anim);
        })();

        // ── INTERSECTION OBSERVER ──
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); });
        }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
        document.querySelectorAll('.fi').forEach(el => obs.observe(el));

        // ── INIT ──
        initGrids();
        setTimeout(() => {
            document.querySelectorAll('#page-home .fi').forEach((el, i) => {
                setTimeout(() => el.classList.add('v'), i * 100);
            });
        }, 100);