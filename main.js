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
        someworksofmine: "Néhány munkám.."
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
        someworksofmine: "Some of my work..."

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
