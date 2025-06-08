const translations = {
    hu: {
        enflag: "Angol zászló",
        huflag: "Magyar zászló",
        home: "Főoldal",
        work: "Munkáim",
        about: "Rólam",
        blog: "Blog",
        welcome: "Hello, <span class='name'>Teodóra</span> vagyok.",
        divider:"Színátmenetes elválasztó vonal",
        shortAbout1: "Kezdő frontend fejlesztő, grafikus és UX designer.",
        shortAbout2: "Szabadidőmben amatőr fotós, könyvmoly és macskásnéni.",
        vector: "Egy vektorkép rólam.",
        myprojects: "Munkáim",
        graphic: "Grafika",
        other: "Egyéb",
        aboutmeTitle: "Néhány szó rólam...",
        aboutmetext1: "<b>Teo</b> vagyok, 29 éves és jelenleg azon dolgozom, hogy megtaláljam azt a munkát, amelyben <strong> hosszú távon fejlődhetek és kiteljesedhetek</strong>.",
        aboutmetext2: "Bár évek óta fizikai munkát végzek, idővel egyértelművé vált számomra, hogy a <b>kreatív, technológiai területek</b> állnak igazán közel hozzám. Ezért kezdtem el komolyabban foglalkozni grafikával és frontend fejlesztéssel.",
        aboutmetext3: "Szabadidőm nagy részét tanulásra és gyakorlásra fordítom – online kurzusokon keresztül és önálló projekteken dolgozva bővítem a tudásom. A maradék időben pedig szívesen olvasok, lehetőleg egy jó kávé mellett.",
        study: "Tanulmányok",
        vasvari: "<span class='blue-text'>- Szegedi SZC Vasvári Pál Gazdasági és Informatikai Technikum</span><br />szoftverfejlesztő és tesztelő képzés (első év befejezve)",
        webler: "<span class='pink-text'>- Webler Oktató Studio </span><br />grafikus OKJ képzés",
        mixer: "<span class='blue-text'>- Best Mixer</span><br />barista, mester barista",
        bethlen: "<span class='pink-text'>- Bethlen Gábor Református Gimnázium</span><br />érettségi",
        extra: "A fentieken túl, több kisebb-nagyobb tanfolyamot is elvégeztem, hogy növeljem a tudásomat. Ebből néhány:",
        bright: "- The Bright Academy - Grafikus és Webdesigner tanfolyam",
        programknowledge:"Program és egyéb ismeretek",
        licence: "- B kategóriás jogosítvány",
        language: "- B2 középszintű angol nyelvvizsga",
        ux: "- UX design alapismeretek",
        dataanalysis: "- adatelemzés alapismeretek",
        graphicdesign: "- grafikai alapismeretek",
        someworksofmine: "Néhány munkám..",
        myprojects1:"Még nem dolgoztam hivatalosan IT területen, és grafikusként is csak rövid időre volt lehetőségem kipróbálni magam, ennek ellenére a digitális alkotás mindig is közel állt hozzám, és az elmúlt években egyre tudatosabban kezdtem el fejleszteni magam ezen a területen.",
        myprojects2:"Fontosnak tartom, hogy ne csak elméletből, hanem gyakorlati projekteken keresztül tanuljak, ezért igyekszem rendszeresen kisebb-nagyobb webes vagy grafikai munkákat készíteni — ezekből válogattam néhányat az alábbiakban.",
        myprojects3:"Ezek a munkák tükrözik, hol tartok most, és azt is, hogy nyitott vagyok a fejlődésre. Nem tökéletesek, de minden egyes darab mögött tanulás, kitartás és érdeklődés áll.",
        myprojects4:"A célom, hogy idővel egy olyan munkakörbe kerülhessek, ahol nemcsak használhatom, hanem tovább is fejleszthetem a megszerzett tudásomat.",
    },

    en:{
        enflag: "UK flag",
        huflag: "Hungarian flag",
        home: "Home",
        work: "Projects",
        about: "About me",
        blog: "Blog",
        welcome: "Hello, my name is <span class='name'>Teodóra</span>.",
        divider: "Gradient divider",
        shortAbout1: "Aspiring frontend developer with a passion for graphic design and UX.",
        shortAbout2: "In my free time, I'm an amateur photographer, bookworm, and a proud cat lady.",
        vector: "A vector illustration about me.",
        myprojects: "My projects",
        aboutmeTitle:"Some words about me...",
        graphic: "Graphic design",
        other: "Other",
        aboutmetext1: "My name is <b>Teo</b>, I'm 29 years old, and currently working towards finding a job where I can <strong>grow and thrive in the long term</strong>.",
        aboutmetext2: "Although I’ve been doing physical work for years, it has become clear to me over time that I’m truly drawn to <b>creative and technological fields</b>. That’s why I started focusing more seriously on graphic design and frontend development.",
        aboutmetext3: "I spend most of my free time learning and practicing – expanding my skills through online courses and personal projects. The rest of the time, I enjoy reading, preferably with a good cup of coffee.",
        study: "Education",
        vasvari: "<span class='blue-text'>- Szegedi SZC Vasvári Pál Gazdasági és Informatikai Technikum</span><br />software development and testing (first year completed)",
        webler: "<span class='pink-text'>- Webler Oktató Studio </span><br />graphic design OKJ course",
        mixer: "<span class='blue-text'>- Best Mixer</span><br />barista, master barista",
        bethlen: "<span class='pink-text'>- Bethlen Gábor Református Gimnázium</span><br />high school diploma",
        extra: "In addition to the above, I have completed several smaller and larger courses to enhance my knowledge. Here are a few of them:",
        bright: "- The Bright Academy - Graphic and Web design course",
        programknowledge: "Technical and Other Competencies",
        licence: "- Category B driving licence",
        language: "- B2 intermediate level English language exam",
        ux: "- Basic knowledge of UX design",
        dataanalysis: "- Basic knowledge of data analysis",
        graphicdesign: "- Basic knowledge of graphic design",
        someworksofmine: "Some of my work...",
        myprojects1:"I haven't officially worked in the IT field yet, and I only had a short opportunity to try myself as a graphic designer, still, digital creation has always been close to my heart, and in recent years, I’ve started to consciously develop my skills in this area.",
        myprojects2:"I believe it’s important to learn not only from theory but through hands-on projects as well, so I regularly try to create smaller or larger web and graphic works — I've selected a few of these below.",
        myprojects3:"These works reflect where I am right now and also show that I’m open to growth. They’re not perfect, but behind each one is learning, perseverance, and curiosity.",
        myprojects4:"My goal is to eventually find a role where I can not only use but also further develop the knowledge I’ve gained.",

    }
}

function setLanguage(language) {
  localStorage.setItem('language', language);

  const trans = translations[language];

  const elements = document.querySelectorAll('[data-id]');

  elements.forEach(function(element) {
    const id = element.getAttribute('data-id');
    if (trans[id]) {
      element.innerHTML = trans[id];
    }
  });
}

window.onload = function() {
  const savedLanguage = localStorage.getItem('language') || 'hu'; // 
  setLanguage(savedLanguage);
};
