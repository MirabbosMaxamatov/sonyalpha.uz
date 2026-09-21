// ── DATA ──
const PRODUCTS = {
    cameras: [
        { id: 'ilce7c', name: 'Sony ILCE-7C', sub: 'Full-Frame Bezserkallo Kamera', model: 'ILCE-7C · 24.2MP · 4K', price: '20,608,000', badge: 'top', cat: 'cameras', img: 'https://i.ytimg.com/vi/ssKzJ1oQiAU/maxresdefault.jpg' /* rasm yuklang */ },
        { id: 'ilce7sm3', name: 'Sony ILCE-7SM3', sub: 'Video uchun Full-Frame Kamera', model: 'ILCE-7SM3 · 12.1MP · 4K 120fps', price: '34,132,000', badge: 'new', cat: 'cameras', img: 'https://bestphoto.ru/wa-data/public/shop/products/68/17/1768/images/3535/Sony-a7s-iii-10-news.970.jpg' /* rasm yuklang */ },
        { id: 'ilce7rm4', name: 'Sony ILCE-7RM4', sub: '61 Megapiksel Full-Frame', model: 'ILCE-7RM4A · 61MP · 4K', price: '41,538,000', badge: 'top', cat: 'cameras', img: 'https://gd2.alicdn.com/imgextra/i2/860439028/O1CN01SzxcQF2GYsKUVwURg_!!860439028.jpg' /* rasm yuklang */ },
        { id: 'ilce7m4', name: 'Sony ILCE-7M4', sub: 'Yangi avlod Full-Frame', model: 'ILCE-7M4 · 33MP · 4K 60fps', price: '35,420,000', badge: 'new', cat: 'cameras', img: 'https://avatars.mds.yandex.net/get-mpic/5169675/img_id954976922023193003.jpeg/orig' /* rasm yuklang */ },
        { id: 'ilce6600', name: 'Sony ILCE-6600', sub: 'APS-C Bezserkallo Kamera', model: 'ILCE-6600 · 24.2MP · 4K', price: '17,388,000', badge: 'top', cat: 'cameras', img: 'https://cdn.mos.cms.futurecdn.net/RR7mEdrPE8hpwdZsxWZ3Pc.jpg' /* rasm yuklang */ },
        { id: 'ilce7cl', name: 'Sony ILCE-7CL', sub: '28-60mm linza bilan to\'plam', model: 'ILCE-7CL · 24.2MP · Kit', price: '24,472,000', badge: '', cat: 'cameras', img: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2023/08/Sony-Alpha-A7C-II-04-P8232980-acr.jpg' /* rasm yuklang */ },
    ],
    compact: [
        { id: 'rx100vii', name: 'Sony RX100 VII', sub: 'Premium Kompakt Kamera', model: 'DSC-RX100M7 · 20.1MP · 4K', price: '9,800,000', badge: 'top', cat: 'compact', img: 'https://technovybor.ru/wa-data/public/shop/products/10/webp/data/public/shop/img/999999.webp' /* rasm yuklang */ },
        { id: 'rx10iv', name: 'Sony RX10 IV', sub: 'Uzum masofali kompakt', model: 'DSC-RX10M4 · 20.1MP · 4K', price: '8,400,000', badge: '', cat: 'compact', img: 'https://www.sony.co.id/image/715b9cdc7fb7f5fa41807289c7a98f0b?fmt=pjpeg&wid=2000&qlt=85' /* rasm yuklang */ },
    ],
    lenses: [
        { id: 'sel2470gm', name: 'SEL 24-70mm f/2.8 GM', sub: 'Universal G Master Linza', model: 'SEL2470GM · FE Mount', price: '18,032,000', badge: 'top', cat: 'lenses', img: 'https://kaliningrad.technovybor.ru/wa-data/public/shop/img/4444444444444444.jpg' /* rasm yuklang */ },
        { id: 'sel2470gm2', name: 'SEL 24-70mm f/2.8 GM II', sub: 'Yangi avlod G Master', model: 'SEL2470GM2 · FE Mount', price: '23,828,000', badge: 'new', cat: 'lenses', img: 'https://i.ytimg.com/vi/DWzPL84RTtk/maxresdefault.jpg' /* rasm yuklang */ },
        { id: 'sel35f14gm', name: '35mm f/1.4 GM', sub: 'Keng burchakli G Master', model: 'SEL35F14GM · FE Mount', price: '16,100,000', badge: '', cat: 'lenses', img: 'https://www.sony.ru/image/77feb1df44b194f4b4d17d38dbfa31ff?fmt=jpeg&wid=1440&qlt=43' /* rasm yuklang */ },
        { id: 'sel24105g', name: 'SEL 24-105mm F4 G', sub: 'Universal G seriyali linza', model: 'SEL24105G · FE Mount', price: '11,592,000', badge: 'top', cat: 'lenses', img: 'https://i.ytimg.com/vi/YT2WcrxJOfY/maxresdefault.jpg' /* rasm yuklang */ },
        { id: 'sel35f18f', name: 'SEL 35mm f/1.8', sub: 'Ixcham keng burchakli linza', model: 'SEL35F18F · FE Mount', price: '9,016,000', badge: '', cat: 'lenses', img: 'https://kaluga.technovybor.ru/wa-data/public/shop/img/2-107.jpg' /* rasm yuklang */ },
        { id: 'sel1224g', name: 'FE 12-24mm f/4 G', sub: 'Ultra keng burchak', model: 'SEL1224G · FE Mount', price: '18,998,000', badge: '', cat: 'lenses', img: 'https://www.cameralabs.com/wp-content/uploads/2020/11/hero_Sony12-24f4G_15435.jpg' /* rasm yuklang */ },
    ],
    video: [
        { id: 'fdr-ax700', name: 'Sony FDR-AX700', sub: '4K Pro Videokamera', model: 'FDR-AX700 · 4K HDR · 1"', price: '6,200,000', badge: 'top', cat: 'video', img: 'https://avatars.mds.yandex.net/get-mpic/5288539/img_id8054976174556230798.jpeg/orig' /* rasm yuklang */ },
        { id: 'fdr-ax43', name: 'Sony FDR-AX43', sub: 'Kompakt 4K Videokamera', model: 'FDR-AX43 · 4K · BOSS', price: '3,800,000', badge: '', cat: 'video', img: 'https://i.ytimg.com/vi/-D8Wk9CXETA/maxresdefault.jpg' /* rasm yuklang */ },
        { id: 'fx-30', name: 'Sony FX-30', sub: 'Cinema Line Super 35mm', model: 'FX-30 · 4K 120fps · S-Cinetone', price: '15,400,000', badge: 'new', cat: 'video', img: 'https://cdn.mos.cms.futurecdn.net/mFYtpXBkYYsJ3GdjgooDzH.jpg' /* rasm yuklang */ },
    ],
};

const NEWS = [
    {
        id: 'sony-zv-e10-ii',
        productId: 'ilce6600',
        date: '15 Yanvar 2025',
        title: 'Sony ZV-E10 II — Bloggerlar uchun yangi kamera',
        excerpt: 'Sony kompaniyasi ZV-E10 seriyasini yangiladi. Yangi model 4K 60fps, yaxshilangan AF va kattaroq batareya bilan keladi.',
        img: 'https://store.rambler.ru/news/img/b7d0d4b1b21fe501ba8c69692737cc9e' /* rasm yuklang */,
        imgColor: '#1a2535',
        imgIcon: '📷',
        body: `<p>Sony kompaniyasi kontent yaratuvchilar uchun maxsus mo'ljallangan ZV-E10 seriyasining yangi avlodini taqdim etdi. Yangi Sony ZV-E10 II modeli avvalgi versiyasiga nisbatan sezilarli yaxshilanishlarni o'z ichiga oladi.</p>
<h3>Asosiy xususiyatlar</h3>
<p>Yangi modelda 26 megapiksellik APS-C CMOS sensor o'rnatilgan bo'lib, u 4K 60fps formatida video yozib olish imkonini beradi. Bu avvalgi modeldagi 4K 30fps cheklovini bartaraf etadi.</p>
<ul><li>4K 60fps video yozish</li><li>Yaxshilangan avtofokus tizimi (Real-Time Tracking)</li><li>Kattaroq batareya — bir zaryad bilan 570 kadr</li><li>USB-C orqali to'g'ridan-to'g'ri striming</li><li>Yangi mikrofon ulagichi</li></ul>
<h3>Narx va mavjudlik</h3>
<p>Sony ZV-E10 II Toshkentdagi SonyAlpha showroomida mavjud. Narxi haqida ma'lumot olish uchun biz bilan bog'laning.</p>`,
    },
    {
        id: 'gmaster-lenses-2025',
        date: '8 Fevral 2025',
        title: 'G Master linzalar yangi kolleksiyasi — 2025',
        excerpt: "Sony G Master seriyasiga uchta yangi linza qo'shildi. 50mm f/1.2, 85mm f/1.4 va 135mm f/1.8 — portrait fotograflari uchun ideal tanlov.",
        img: 'https://i.pinimg.com/originals/ee/73/95/ee7395700ac7261117febeef8a1d17bc.jpg' /* rasm yuklang */,
        imgColor: '#1a1a2a',
        imgIcon: '🔭',
        body: `<p>2025 yilda Sony G Master seriyasiga uchta yangi ob'ektiv qo'shildi. Bu linzalar professional fotograflar va videograflar uchun mo'ljallangan bo'lib, eng yuqori sifatdagi tasvirni kafolatlaydi.</p>
<h3>Yangi G Master linzalar</h3>
<ul><li><strong>FE 50mm f/1.2 GM</strong> — portrait va street fotografiya uchun</li><li><strong>FE 85mm f/1.4 GM II</strong> — yaxshilangan AF tezligi bilan</li><li><strong>FE 135mm f/1.8 GM</strong> — ultra aniq bokeh effekti</li></ul>
<p>Barcha uchta linza Sony E-mount tizimi bilan to'liq mos keladi va IBIS bilan birgalikda ishlashga optimallashtirilgan.</p>
<h3>Qachon mavjud bo'ladi?</h3>
<p>Linzalar SonyAlpha Toshkent showroomida oldindan buyurtma uchun qabul qilinmoqda. Buyurtma berish uchun bizga qo'ng'iroq qiling.</p>`,
    },
    {
        id: 'trade-in-2025',
        date: '1 Mart 2025',
        title: "Trade-In aksiyasi — eski kamerangizni yangi Sony'ga almashtiring",
        excerpt: "Eski Sony kamerangizni olib keling, biz uning qiymatini yangi kamera narxidan ayiramiz. Chegirma miqdori 500,000 UZS dan 3,000,000 UZS gacha.",
        img: 'https://sonymirrorlesspro.com/wp-content/uploads/2018/11/img_0068-1160x504.jpg' /* rasm yuklang */,
        imgColor: '#1a2a1a',
        imgIcon: '🔄',
        body: `<p>SonyAlpha Toshkent 2025 yilning mart oyidan boshlab Trade-In dasturini ishga tushirdi. Bu dastur orqali siz eski Sony kamerangizni yangi modelga almashtira olasiz.</p>
<h3>Dastur qanday ishlaydi?</h3>
<ul><li>Eski Sony kamerangizni showroomga olib keling</li><li>Mutaxassislarimiz kamerangiz holatini baholaydi</li><li>Baholash natijasiga ko'ra chegirma taqdim etiladi</li><li>Chegirmani yangi Sony kamera xaridida ishlatib oling</li></ul>
<h3>Chegirma miqdori</h3>
<p>Chegirma miqdori kamerangizning holatiga va modeliga qarab 500,000 UZS dan 3,000,000 UZS gacha bo'lishi mumkin. Baholash bepul va hech qanday majburiyatsiz amalga oshiriladi.</p>
<p>Aksiya 2025 yil 31 martgacha davom etadi. Ulgurishga shoshiling!</p>`,
    },
];

// ── SVG HELPERS ──
function camSVG(w = 140, h = 115, className = '') {
    return `<svg class="${className}" width="${w}" height="${h}" viewBox="0 0 140 115" fill="none">
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

function lensSVG(w = 90, h = 115, className = '') {
    return `<svg class="${className}" width="${w}" height="${h}" viewBox="0 0 90 115" fill="none">
<rect x="24" y="6" width="42" height="103" rx="12" fill="#1a1a1a" stroke="#2a2a2a" stroke-width="1.5"/>
<rect x="18" y="16" width="54" height="14" rx="4" fill="#222" stroke="#333"/>
<rect x="18" y="85" width="54" height="14" rx="4" fill="#222" stroke="#333"/>
<ellipse cx="45" cy="58" rx="22" ry="22" fill="#0a0d14" stroke="#1a2030" stroke-width="1.5"/>
<ellipse cx="45" cy="58" rx="14" ry="14" fill="#060810"/>
<ellipse cx="39" cy="52" rx="6" ry="3.5" fill="rgba(100,150,255,.12)" transform="rotate(-20 39 52)"/>
</svg>`;
}

function vidSVG(w = 140, h = 100, className = '') {
    return `<svg class="${className}" width="${w}" height="${h}" viewBox="0 0 140 100" fill="none">
<rect x="14" y="22" width="80" height="56" rx="8" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
<circle cx="52" cy="50" r="20" fill="#111" stroke="#222" stroke-width="1.5"/>
<circle cx="52" cy="50" r="13" fill="#0a0a0a"/>
<polygon points="126,22 94,36 94,64 126,78" fill="#222" stroke="#333" stroke-width="1.5"/>
<circle cx="52" cy="50" r="5" fill="#cc1e1e"/>
<rect x="22" y="28" width="12" height="8" rx="2" fill="#cc1e1e" opacity=".8"/>
</svg>`;
}

function categorySVG(type) {
    if (type === 'lens') return lensSVG(150, 110);
    if (type === 'video') return vidSVG(150, 110);
    return camSVG(260, 200);
}

function productSVG(product) {
    if (product.cat === 'lenses') return lensSVG();
    if (product.cat === 'video') return vidSVG();
    return camSVG();
}

function infoIcon(type) {
    const icons = {
        check: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
        arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    };
    return `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">${icons[type] || icons.check}</svg>`;
}

const CATEGORY_LABELS = {
    cameras: 'Fotokameralar',
    compact: 'Kompakt kameralar',
    lenses: "Ob'ektivlar",
    video: 'Videokameralar',
};

// ── STATIC HOME RENDERERS ──
function renderHero() {
    const hero = SITE_DATA.hero;
    const media = hero.img
        ? `<img class="hero-image" src="${hero.img}" alt="Sony Alpha kamera">`
        : `<div class="hero-camera-bg"></div>${camSVG(320, 260, 'hero-svg')}`;
    document.getElementById('heroSection').innerHTML = `
<div class="hero-left">
    <div class="hero-eyebrow fi">${hero.eyebrow}</div>
    <h1 class="hero-title fi">${hero.title}</h1>
    <p class="hero-desc fi">${hero.description}</p>
    <div class="hero-actions fi">${hero.cta.map(item => `<a class="btn-${item.style}" onclick="goPage('${item.target}')">${item.text}</a>`).join('')}</div>
    <div class="hero-stats fi">${hero.stats.map(stat => `<div><div class="stat-num">${stat.num}<span>${stat.suffix}</span></div><div class="stat-label">${stat.label}</div></div>`).join('')}</div>
</div>
<div class="hero-right fi">${media}${hero.labels.map((label, index) => `<div class="hero-lbl hl${index + 1}">${label}</div>`).join('')}</div>`;
}

function renderMarquee() {
    const items = SITE_DATA.marquee.items.concat(SITE_DATA.marquee.items);
    document.getElementById('marqueeSection').innerHTML = `<div class="marquee-track">${items.map(item => `<div class="marquee-item"><span class="mdot"></span>${item}</div>`).join('')}</div>`;
}

function renderCategories() {
    document.getElementById('catGrid').innerHTML = SITE_DATA.categories.map(category => `
<div class="cat-card" onclick="goPage('${category.key}')">
    <div class="cat-card-bg" style="background:${category.bgGradient}">
        ${category.img ? `<img src="${category.img}" alt="${category.title.replace(/<br>/g, ' ')}">` : categorySVG(category.type)}
    </div>
    <div class="cat-arrow"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="cat-card-inner">
        <div class="cat-num">${category.num}</div>
        <div class="cat-title">${category.title}</div>
        <div class="cat-sub">${category.sub}</div>
    </div>
</div>`).join('');
}

function renderPromo() {
    const promo = SITE_DATA.promo;
    const media = promo.img
        ? `<img class="promo-image" src="${promo.img}" alt="${promo.tag}">`
        : `<div class="promo-bg-text">SONY</div>${camSVG(260, 200)}`;
    document.getElementById('promoSection').innerHTML = `<div class="promo-inner"><div class="promo-left"><span class="promo-tag">${promo.tag}</span><h2 class="promo-title">${promo.title}</h2><p class="promo-desc">${promo.description}</p><a class="btn-primary" href="tel:+99895170-55-22">${promo.phone}</a></div><div class="promo-right">${media}</div></div>`;
}

function renderInfo() {
    document.getElementById('infoSection').innerHTML = SITE_DATA.info.map(item => `<div class="info-card">${item.img ? `<img class="info-card-img" src="${item.img}" alt="${item.title}">` : ''}<div class="info-icon">${infoIcon(item.icon)}</div><h3 class="info-title">${item.title}</h3><p class="info-desc">${item.description}</p></div>`).join('');
}

function renderFooterLink(link) {
    const href = link.href ? ` href="${link.href}"` : ' href="javascript:void(0)"';
    const action = link.onclick ? ` onclick="${link.onclick}"` : '';
    return `<li><a${href}${action}>${link.label}</a></li>`;
}

function renderFooter() {
    const footer = SITE_DATA.footer;
    const brand = footer.brand;
    const brandMarkup = brand.img
        ? `<img class="footer-brand-img" src="${brand.img}" alt="${brand.name}">`
        : `<a class="logo" onclick="goPage('home')"><div class="logo-icon">α</div><span class="logo-text">SONY<span>ALPHA</span></span></a>`;
    document.getElementById('footer').innerHTML = `<div class="footer-top"><div class="footer-brand">${brandMarkup}<p>${brand.desc}</p><div class="footer-social">${brand.social.map(social => `<a class="social-link" href="${social.href}">${social.label}</a>`).join('')}</div></div>${footer.columns.map(column => `<div class="footer-col"><h4>${column.title}</h4><ul>${column.links.map(renderFooterLink).join('')}</ul></div>`).join('')}</div><div class="footer-bottom"><div class="footer-copy">${footer.copyright}</div><div class="footer-loc"><span class="loc-dot"></span>${footer.location}</div></div>`;
}

function renderStaticSections() {
    renderHero();
    renderMarquee();
    renderCategories();
    renderPromo();
    renderInfo();
    renderFooter();
}

// ── PRODUCT RENDERER ──
function renderProdCard(product, clickable = true) {
    const badgeHtml = product.badge ? `<span class="prod-badge ${product.badge === 'new' ? 'badge-new' : 'badge-top'}">${product.badge === 'new' ? 'Yangi' : 'Top'}</span>` : '';
    // Rasm bo'lsa — karta to'liq fon rasmi bilan (background-size: cover)
    // overlay ko'rinishida chiqadi. Rasm bo'lmasa — SVG fallback ko'rsatiladi.
    const bg = product.img
        ? `<div class="prod-bg" style="background-image:url('${product.img}');background-size:cover;background-position:center center;background-color:#0a0a0a;" role="img" aria-label="${product.name}"></div>`
        : `<div class="prod-bg" style="background:var(--g1)">${productSVG(product)}</div>`;
    const action = clickable ? ` onclick="showProdDetail('${product.id}')" tabindex="0"` : '';
    return `<article class="prod-card"${action}>
${bg}
<div class="prod-arrow"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
<div class="prod-inner">
    ${badgeHtml}
    <div class="prod-cat-label">${CATEGORY_LABELS[product.cat] || product.cat}</div>
    <div class="prod-name">${product.name}</div>
    <div class="prod-model">${product.model}</div>
    <div class="prod-footer">
        <div class="prod-price">${product.price} <small>UZS</small></div>
        <button class="prod-add" onclick="event.stopPropagation();addToCart('${product.id}')" aria-label="Savatga qo'shish"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg></button>
    </div>
</div>
</article>`;
}

// ── NEWS RENDERER ──
function renderNewsItem(news, preview = false) {
    const image = news.img
        ? `<img src="${news.img}" alt="${news.title}">`
        : `<div class="img-placeholder" style="background:${news.imgColor};height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">${news.imgIcon}</div>`;
    return `<article class="news-item" onclick="openNews('${news.id}')"><div class="news-item-img">${image}</div><div class="news-item-body"><div class="news-date">${news.date}</div><div class="news-item-title">${news.title}</div><div class="news-item-excerpt">${news.excerpt}</div><div class="news-arrow">Batafsil o'qish <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></div></article>`;
}

// ── PRODUCT FILTERS ──
let currentProductFilter = 'top';

function getHomeProducts(filter = currentProductFilter) {
    const allProducts = [...PRODUCTS.cameras, ...PRODUCTS.compact, ...PRODUCTS.lenses, ...PRODUCTS.video];
    if (filter === 'new') return allProducts.filter(product => product.badge === 'new');
    return [...PRODUCTS.cameras.slice(0, 2), PRODUCTS.lenses[0], PRODUCTS.cameras[4]];
}

function renderHomeProducts(filter = currentProductFilter) {
    document.getElementById('homeProdGrid').innerHTML = getHomeProducts(filter).map(product => renderProdCard(product)).join('');
}

function initProductTabs() {
    const tabs = document.querySelectorAll('.prod-tabs .tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentProductFilter = tab.dataset.filter || 'top';
            tabs.forEach(item => item.classList.toggle('active', item === tab));
            renderHomeProducts(currentProductFilter);
        });
    });
}

// ── INIT GRIDS ──
// Xavfsiz yozuvchi: bitta element topilmasa ham qolgan bo'limlar render bo'lib qoladi
function setHTML(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = html;
    return element;
}

function initGrids() {
    renderStaticSections();
    // Kategoriya sahifalari — PRODUCTS massivlaridan dinamik to'ldiriladi
    setHTML('grid-cameras', PRODUCTS.cameras.map(product => renderProdCard(product)).join(''));
    setHTML('grid-compact', PRODUCTS.compact.map(product => renderProdCard(product)).join(''));
    setHTML('grid-lenses', PRODUCTS.lenses.map(product => renderProdCard(product)).join(''));
    setHTML('grid-video', PRODUCTS.video.map(product => renderProdCard(product)).join(''));
    // Bosh sahifadagi "Top sotuvlar / Yangiliklar" grid'i
    renderHomeProducts();
    initProductTabs();
    // Yangiliklar (bosh sahifa preview + to'liq ro'yxat sahifasi)
    setHTML('homeNewsPreview', NEWS.slice(0, 2).map(news => renderNewsItem(news, true)).join(''));
    setHTML('newsListContainer', NEWS.map(news => renderNewsItem(news)).join(''));
    // FAQ (savol-javoblar sahifasi)
    setHTML('faqContainer', (SITE_DATA.faqs || []).map((faq, index) => `<div class="faq-item" id="faq-${index}"><button class="faq-q" onclick="toggleFaq(${index})"><span>${faq.q}</span><svg class="faq-chevron" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button><div class="faq-a"><p>${faq.a}</p></div></div>`).join(''));
    // Aksiyalar sahifasi
    setHTML('salesGrid', (SITE_DATA.sales || []).map(sale => `<div class="sale-card"><div class="sale-card-top"><div class="sale-img">${sale.img ? `<img src="${sale.img}" alt="${sale.title}">` : camSVG(120, 100)}</div><div class="sale-body"><span class="sale-tag">${sale.tag}</span><div class="sale-title">${sale.title}</div><div class="sale-desc">${sale.desc}</div><div class="sale-price">Dan: ${sale.price}</div></div></div></div>`).join(''));
}

// ── NAVIGATION ──
function goPage(id) {
    const page = document.getElementById(`page-${id}`);
    if (!page) {
        console.warn(`[goPage] Sahifa topilmadi: #page-${id}`);
        return;
    }

    // Ochiq drawer/modal bo'lsa yopiladi (aks holda body overflow qulflanadi)
    closeProdDrawer();
    toggleCart(false);
    toggleSearch(false);

    // 1) Barcha sahifa bo'limlarini yashiramiz (.page va .page-section)
    document.querySelectorAll('.page, .page-section').forEach(section => section.classList.remove('active'));

    // 2) Faqat tanlangan sahifani ko'rsatamiz
    page.classList.add('active');

    // 3) Navigatsiya holatini yangilaymiz
    document.querySelectorAll('nav a').forEach(item => item.classList.remove('nav-active'));
    const navElement = document.getElementById(`nav-${id}`);
    if (navElement) navElement.classList.add('nav-active');

    // 4) Deep-link: URL hash sahifani eslab qoladi (#cameras, #faq, ...)
    if (window.location.hash.slice(1) !== id) {
        history.replaceState(null, '', `#${id}`);
    }

    // 5) Sahifa boshiga silliq o'tamiz
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6) Yangi sahifadagi fade-in elementlarni qayta ishga tushuramiz
    setTimeout(() => {
        document.querySelectorAll(`#page-${id} .fi`).forEach((element, index) => setTimeout(() => element.classList.add('v'), index * 80));
    }, 50);
}

// ── NEWS DETAIL ──
function openNews(id) {
    const news = NEWS.find(item => item.id === id);
    if (!news) return;
    const heroImage = document.getElementById('newsDetailHeroImg');
    heroImage.style.background = news.imgColor;
    heroImage.style.display = 'flex';
    heroImage.innerHTML = news.img ? `<img src="${news.img}" alt="${news.title}">` : `<div style="font-size:120px">${news.imgIcon}</div>`;
    document.getElementById('newsDetailDate').textContent = news.date;
    document.getElementById('newsDetailTitle').textContent = news.title;
    document.getElementById('newsDetailBody').innerHTML = news.body;
    goPage('news-detail');
}

// ── FAQ TOGGLE ──
function toggleFaq(index) {
    const item = document.getElementById(`faq-${index}`);
    if (item) item.classList.toggle('open');
}

// ── CART ──
let cart = [];

function addToCart(productId) {
    const allProducts = [...PRODUCTS.cameras, ...PRODUCTS.compact, ...PRODUCTS.lenses, ...PRODUCTS.video];
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartBadge();
    renderCart();
    toggleCart(true);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = totalItems;
}

function renderCart() {
    const content = document.getElementById('cartContent');
    const footer = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    if (!content) return;

    if (cart.length === 0) {
        content.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
                <p>Savatingiz bo'sh</p>
                <button class="btn-primary" onclick="goPage('cameras')">Xaridni boshlash</button>
            </div>
        `;
        if (footer) footer.style.display = 'none';
        return;
    }

    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/,/g, ''), 10);
        return sum + price * item.qty;
    }, 0);

    content.innerHTML = cart.map(item => {
        const price = parseInt(item.price.replace(/,/g, ''), 10);
        return `
            <div class="cart-item">
                <div class="cart-item-img" style="background-image:url('${item.img}')"></div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-model">${item.model}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} UZS</div>
                    <div class="cart-item-qty">
                        <button onclick="updateCartQty('${item.id}', -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="updateCartQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
            </div>
        `;
    }).join('');

    if (footer) footer.style.display = 'block';
    if (totalEl) totalEl.textContent = total.toLocaleString() + ' UZS';
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartBadge();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartBadge();
    renderCart();
}

function toggleCart(forceOpen) {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    const isOpen = drawer.classList.contains('open');
    const shouldOpen = forceOpen === true || (!isOpen && forceOpen !== false);
    if (shouldOpen) {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderCart();
    } else {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
    }
    const trigger = document.querySelector('.cart-btn');
    if (trigger) trigger.setAttribute('aria-expanded', String(shouldOpen));
}

// ── SEARCH ──
function getSearchableProducts() {
    return [...PRODUCTS.cameras, ...PRODUCTS.compact, ...PRODUCTS.lenses, ...PRODUCTS.video];
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[char]));
}

function toggleSearch(forceOpen) {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    if (!modal) return;
    const isOpen = modal.classList.contains('open');
    const shouldOpen = forceOpen === true || (!isOpen && forceOpen !== false);
    if (shouldOpen) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (input) {
            input.value = '';
            input.focus();
        }
        renderSearchResults('');
    } else {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
    const trigger = document.querySelector('.search-btn');
    if (trigger) trigger.setAttribute('aria-expanded', String(shouldOpen));
}

// Real vaqtda filtrlash — foydalanuvchi yozishi bilan natijalar yangilanadi
function renderSearchResults(query = '') {
    const container = document.getElementById('searchResults');
    if (!container) return;

    const term = String(query).trim().toLowerCase();
    const allProducts = getSearchableProducts();
    const filtered = term
        ? allProducts.filter(product => [
            product.name,
            product.model,
            product.sub,
            CATEGORY_LABELS[product.cat] || product.cat,
        ].join(' ').toLowerCase().includes(term))
        : allProducts;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="search-empty">"${escapeHTML(query)}" bo'yicha mahsulot topilmadi</div>`;
        return;
    }

    container.innerHTML = filtered.map(product => `
        <div class="search-result-item" onclick="showProdDetail('${product.id}'); toggleSearch(false)">
            <div class="search-result-img"${product.img ? ` style="background-image:url('${product.img}')"` : ''}></div>
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-model">${product.model}</div>
                <div class="search-result-price">${product.price} UZS</div>
            </div>
            <button class="search-result-add" aria-label="Savatga qo'shish"
                onclick="event.stopPropagation(); addToCart('${product.id}'); toggleSearch(false);">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
            </button>
        </div>
    `).join('') + `<div class="search-meta">${filtered.length} / ${allProducts.length} mahsulot</div>`;
}

// Qidiruv inputini ulash (real-time + klaviatura)
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    searchInput.addEventListener('input', event => renderSearchResults(event.target.value));
    searchInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            const firstResult = document.querySelector('#searchResults .search-result-item');
            if (firstResult) firstResult.click();
        } else if (event.key === 'Escape') {
            toggleSearch(false);
        }
    });
}

// ── PRODUCT DRAWER ──
function showProdDetail(id) {
    const product = [...PRODUCTS.cameras, ...PRODUCTS.compact, ...PRODUCTS.lenses, ...PRODUCTS.video].find(item => item.id === id);
    if (!product) return;
    const mediaPreview = document.getElementById('prodMediaPreview');
    document.getElementById('drawerCategory').textContent = CATEGORY_LABELS[product.cat] || product.cat;
    document.getElementById('drawerTitle').textContent = product.name;
    document.getElementById('drawerModel').textContent = product.model;
    document.getElementById('drawerPrice').textContent = `${product.price} UZS`;
    document.getElementById('drawerDesc').textContent = product.sub;
    if (product.img) {
        mediaPreview.innerHTML = `<img src="${product.img}" alt="${product.name}">`;
    } else {
        if (!mediaPreview.dataset.svg) mediaPreview.dataset.svg = mediaPreview.innerHTML;
        mediaPreview.innerHTML = mediaPreview.dataset.svg;
    }
    // Store current product ID for addToCart button
    window.currentProductId = product.id;
    document.getElementById('prodDrawer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProdDrawer() {
    const drawer = document.getElementById('prodDrawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeProdDrawer();
        const cartDrawer = document.getElementById('cartDrawer');
        const searchModal = document.getElementById('searchModal');
        if (cartDrawer?.classList.contains('open')) toggleCart(false);
        if (searchModal?.classList.contains('open')) toggleSearch(false);
    }
});

// ── HASH ROUTING (deep-link: #cameras, #faq, #contact ...) ──
function goPageFromHash() {
    const hashPage = window.location.hash.replace('#', '').trim();
    if (!hashPage) return false;
    if (!document.getElementById(`page-${hashPage}`)) return false;
    goPage(hashPage);
    return true;
}

window.addEventListener('hashchange', () => {
    const hashPage = window.location.hash.replace('#', '').trim();
    if (hashPage && document.getElementById(`page-${hashPage}`)) goPage(hashPage);
});

// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', event => { mx = event.clientX; my = event.clientY; });
(function animateCursor() {
    cursor.style.left = `${mx}px`;
    cursor.style.top = `${my}px`;
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(animateCursor);
})();

// ── INTERSECTION OBSERVER ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('v');
    });
}, { threshold: .1, rootMargin: '0px 0px -30px 0px' });

function observeFadeElements() {
    document.querySelectorAll('.fi:not(.v)').forEach(element => observer.observe(element));
}

// ── INIT ──
function initSite() {
    initGrids();
    initSearch();
    updateCartBadge();
    if (!goPageFromHash()) {
        // Hash yo'q — joriy sahifadagi fade-in elementlarni ko'rsatamiz
        observeFadeElements();
        setTimeout(() => {
            document.querySelectorAll('.page.active .fi, .page-section.active .fi').forEach((element, index) => setTimeout(() => element.classList.add('v'), index * 100));
        }, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}
