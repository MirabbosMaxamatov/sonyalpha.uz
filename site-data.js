// ──────────────────────────────────────────────────────────────
// SITE_DATA — Barcha statik (o'zgarmas) home sahifa elementlari
//
// Ushbu modulda faqat STATIK kontent saqlanadi:
//   • hero banner
//   • marquee (yuqori harakatlanuvchi qator)
//   • kategoriya kartalari (BEZSERKALLO KAMERALAR, KOMPAKT
//     KAMERALAR, OB'EKTIVLAR, VIDEO KAMERALAR)
//   • promo bo'limi
//   • info kartalari
//   • footer
//   • FAQ va aksiyalar (sales)
//
// Rasm qabul qiladigan HAR BIR bo'limda `img: ''` maydoni mavjud.
// Rasm qo'shish uchun shu maydonga fayl yo'lini yozing, masalan:
//     img: 'images/hero-camera.jpg'
//
// IMPORTANT: Dinamik mahsulot ma'lumotlari (PRODUCTS) va yangiliklar
// (NEWS) script.js faylida saqlanadi — bu yerga ko'chirilmaydi.
// ──────────────────────────────────────────────────────────────

const SITE_DATA = {
    hero: {
        eyebrow: 'Rasmiy Sony Do\'koni — Toshkent',
        title: 'BE<br><span class="r">MOVED   </span><br><span class="g"> </span>',
        description: 'Sony Alpha bezserkallo kameralari, ob\'ektivlar va aksessuarlar — rasmiy kafolat bilan. Toshkentdagi yagona showroom.',
        img: '' /* rasm yuklang: e.g., 'images/hero-camera.jpg' */,
        stats: [
            { num: '50', suffix: '+', label: 'Mahsulot' },
            { num: '2', suffix: 'y', label: 'Kafolat' },
            { num: '24', suffix: 'h', label: 'Yetkazish' },
        ],
        labels: [
            'Full-Frame Sensor',
            '4K 120fps Video',
            'Real-Time AF',
        ],
        cta: [
            { text: 'Mahsulotlar', target: 'cameras', style: 'primary' },
            { text: 'Showroom', target: 'contact', style: 'ghost' },
        ],
    },

    marquee: {
        items: [
            'Sony Alpha Series',
            'Rasmiy Kafolat',
            'Toshkent Showroom',
            'G Master Linzalar',
            '4K Video',
            'Full Frame',
            'Sony Alpha Series',
            'Rasmiy Kafolat',
            'Toshkent Showroom',
            'G Master Linzalar',
            '4K Video',
            'Full Frame',
        ],
    },

    categories: [
        {
            num: '01 / 05',
            title: 'Bezserkallo<br>Kameralar',
            sub: 'Alpha series — ILCE-7, ILCE-6000',
            key: 'cameras',
            bgGradient: 'linear-gradient(135deg,#1a1a1a,#0a0a0a)',
            type: 'camera',
            img: 'https://media.wired.com/photos/6961d754b0cdf98f77975b35/master/w_2560%2Cc_limit/Sony%2520A7V%2520front%2520SOURCE%2520Scott%2520Gilbertson.jpg' /* rasm yuklang: e.g., 'images/category-cameras.jpg' */,
        },
        {
            num: '02 / 05',
            title: 'Kompakt<br>Kameralar',
            sub: 'Kichik, yengil, professional',
            key: 'compact',
            bgGradient: '#141414',
            type: 'camera',
            img: 'https://www.dpreview.com/wp-content/uploads/2020/11/6080469284-Sony-RX100-VII-front.jpeg' /* rasm yuklang: e.g., 'images/category-compact.jpg' */,
        },
        {
            num: '03 / 05',
            title: 'Ob\'ektivlar',
            sub: 'G Master, Zeiss linzalar',
            key: 'lenses',
            bgGradient: '#121212',
            type: 'lens',
            img: 'https://spb.shop.foto-one.com/upload/iblock/4d1/2gno14mv5llwh4j05kkuq1jav0s0azrk.jpg' /* rasm yuklang: e.g., 'images/category-lenses.jpg' */,
        },
        {
            num: '04 / 05',
            title: 'Video & CINEMA<br>Kameralar',
            sub: '4K, slow-motion, cinema',
            key: 'video',
            bgGradient: '#111',
            type: 'video',
            img: 'https://kursk.technovybor.ru/wa-data/public/shop/img/101-1.jpg' /* rasm yuklang: e.g., 'images/category-video.jpg' */,
        },
    ],

    promo: {
        tag: 'Showroom Toshkent',
        title: 'NAVOIY<br>KO\'CHASI<br><em>14</em>',
        description: 'Barcha Sony mahsulotlarini jonli ko\'ring, sinab ko\'ring. Mutaxassislarimiz sizga yordam beradi.',
        phone: '+998 95 170 55 22',
        img: 'https://www.spot.uz/media/img/2020/07/pUYZXn15940396284398_b.jpg' /* rasm yuklang: e.g., 'images/promo-showroom.jpg' */,
    },

    info: [
        {
            icon: 'check',
            title: 'Rasmiy Kafolat',
            description: 'Sony kompaniyasidan 2 yil rasmiy kafolat. Har qanday muammo bo\'lsa, biz javobgarmiz.',
            img: '' /* rasm yuklang: e.g., 'images/info-warranty.jpg' */,
        },
        {
            icon: 'arrow',
            title: 'Tez Yetkazish',
            description: 'Toshkent bo\'ylab 24 soat ichida yetkazib beramiz. Boshqa shaharlar ham — eng tez yo\'l bilan.',
            img: '' /* rasm yuklang: e.g., 'images/info-delivery.jpg' */,
        },
        {
            icon: 'home',
            title: 'Showroom',
            description: 'Navoiy ko\'chasi 14 — barcha mahsulotlarini jonli ko\'ring, professional maslahat oling.',
            img: '' /* rasm yuklang: e.g., 'images/info-showroom.jpg' */,
        },
    ],

    footer: {
        brand: {
            name: 'SONY ALPHA',
            desc: 'Toshkentdagi rasmiy Sony Alpha do\'koni. Fotokameralar, ob\'ektivlar va aksessuarlar — rasmiy kafolat bilan.',
            img: '' /* rasm yuklang: e.g., 'images/footer-logo.png' */,
            social: [
                { label: 'TG', href: 'https://t.me/SonyAlphaUZ' },
                { label: 'IG', href: 'https://instagram.com/SonyAlphaUz' },
                { label: 'FB', href: 'https://facebook.com/SonyAlphaUz' },
            ],
        },
        columns: [
            {
                title: 'Mahsulotlar',
                links: [
                    { label: 'Bezserkallo kameralar', onclick: 'goPage(\'cameras\')' },
                    { label: 'Kompakt kameralar', onclick: 'goPage(\'compact\')' },
                    { label: 'Ob\'ektivlar', onclick: 'goPage(\'lenses\')' },
                    { label: 'Videokameralar', onclick: 'goPage(\'video\')' },
                ],
            },
            {
                title: 'Ma\'lumot',
                links: [
                    { label: 'Yetkazib berish', onclick: 'goPage(\'faq\')' },
                    { label: 'Kafolat', onclick: 'goPage(\'faq\')' },
                    { label: 'Qaytarish', onclick: 'goPage(\'faq\')' },
                    { label: 'Aksiyalar', onclick: 'goPage(\'sales\')' },
                ],
            },
            {
                title: 'Aloqa',
                links: [
                    { label: '+998 95 170 55 22', href: 'tel:+99895170-55-22' },
                    { label: 'info@nmp-d.com', href: 'mailto:info@nmp-d.com' },
                    { label: 'Navoiy ko\'chasi, 14', onclick: 'goPage(\'contact\')' },
                    { label: 'Du–Ju: 10:00–18:00', onclick: '' },
                ],
            },
        ],
        copyright: '© 2025 SonyAlpha.uz — Barcha huquqlar himoyalangan',
        location: 'Toshkent, O\'zbekiston',
    },

    faqs: [
        { q: "Kafolat muddati qancha?", a: "Sony kompaniyasining rasmiy do'koni sifatida barcha mahsulotlarga 2 yil rasmiy kafolat beramiz. Kafolat muddati davomida barcha nosozliklar bepul tuzatiladi." },
        { q: "Yetkazib berish xizmati bormi?", a: "Ha, Toshkent bo'ylab 24 soat ichida, boshqa shaharlar uchun 1-3 kun ichida yetkazib beramiz. 5,000,000 UZS dan yuqori xaridlarda yetkazish bepul." },
        { q: "Naqd pulsiz to'lash imkoni bormi?", a: "Ha, plastik karta (Uzcard, Humo), Click, Payme va bank o'tkazmasi orqali to'lashingiz mumkin. Muddatli to'lov (bo'lib to'lash) ham mavjud." },
        { q: "Mahsulotni qaytarish mumkinmi?", a: "Mahsulot 14 kun ichida asl holatida (qadoqda, hujjatlari bilan) qaytarilishi mumkin. Texnik nosozlik bo'lsa, kafolat doirasida almashtiriladi." },
        { q: "Showroom qayerda joylashgan?", a: "Showroomimiz Toshkent sh., Navoiy ko'chasi, 14 manzilida joylashgan. Ish vaqti: Dushanba-Juma, soat 10:00 dan 18:00 gacha." },
        { q: "Buyurtma berish uchun nima qilish kerak?", a: "Sayt orqali yoki +998 95 170 55 22 raqamiga qo'ng'iroq qilib buyurtma berishingiz mumkin. Telegram: @SonyAlphaUZ orqali ham murojaat qilishingiz mumkin." },
    ],

    sales: [
        { title: "Sony ILCE-7M3 + 28-70mm Kit", tag: "-15%", desc: "Kamera va linzani birga oling, 15% chegirma bilan. Faqat may oyida!", price: "23,184,000 UZS", svgColor: "#1a1a2a", img: '' /* rasm yuklang: e.g., 'images/sale-ilce7m3.jpg' */ },
        { title: "G Master Linzalarga Chegirma", tag: "-10%", desc: "Istalgan G Master linzaga 10% chegirma. Kafolat o'z kuchida qoladi.", price: "18,032,000 UZS", svgColor: "#1a2a1a", img: '' /* rasm yuklang: e.g., 'images/sale-gmaster.jpg' */ },
        { title: "Aksessuarlar Bundle", tag: "Bepul", desc: "Kamera xaridida — sumka, SD karta va batareya zaryadlovchi bepul!", price: "9,016,000 UZS", svgColor: "#2a1a1a", img: '' /* rasm yuklang: e.g., 'images/sale-accessories.jpg' */ },
        { title: "Trade-In Aksiyasi", tag: "-3M UZS", desc: "Eski kamerangizni olib keling — yangi modelga chegirma oling.", price: "20,608,000 UZS", svgColor: "#1a1f2a", img: '' /* rasm yuklang: e.g., 'images/sale-tradein.jpg' */ },
    ],
};
