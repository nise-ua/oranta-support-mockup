const donationPanel = document.querySelector("#donation-options");
const donationToggle = document.querySelector("#donation-toggle");

const translations = {
  en: {
    nav: ["About", "Projects", "Request Help", "Reports"],
    donate: "Donate",
    thankYou: {
      heading: "Thank You",
      paragraphs: [
        "for visiting Oranta’s donation page and considering supporting our mission!",
        "Every day, because of people like you, we are able to provide help where it is needed most. Your trust in our organization means more to us than financial support. It represents hope, compassion, and tangible help for those facing the challenges of war and humanitarian crises.",
        "At Oranta, we focus on three critical areas: Tactical Medicine, Pharmacology & General Medicine, and Animal Rescue & Care.",
        "We invite you to choose the project that speaks most to you. Every contribution, regardless of its size, makes a real difference. Every donation matters, because each gift becomes part of something larger and helps us continue our work.",
        "If you would like to make an even greater impact, please consider becoming a recurring donor. Monthly support allows us to plan ahead, respond quickly to urgent needs, and sustain long-term humanitarian efforts.",
        "By supporting Oranta, you become part of a community united by compassion, action, and the belief that every life matters.",
        "Thank you for standing with us.<br>Thank you for your trust.<br>Thank you for being part of our mission.<br>Together, we can bring help where it is needed most."
      ],
      signoff: "With gratitude,<br>The Oranta Team"
    },
    donation: {
      title: "Donation Options",
      intro: "We are grateful for every contribution and strive to make donating as convenient as possible. Oranta currently accepts donations using several methods:",
      methods: [
        "Zelle: <a href=\"mailto:Oranta.UA.USA@gmail.com\">Oranta.UA.USA@gmail.com</a>",
        "<a href=\"https://www.paypal.com/ncp/payment/AL9WVEHG4SNW2\" target=\"_blank\" rel=\"noopener noreferrer\">PayPal donate secure link</a>",
        "Personal or business checks payable to Oranta (please write “Donation” in the memo line)",
        "Cash donations at our community events and fundraisers",
        "In addition, we are currently working on establishing options for direct bank transfers, which we hope will be available soon. No matter how you choose to give, your support helps us provide medical aid, humanitarian assistance, and animal rescue services where they are needed most. Thank you once again for your generosity, trust, and belief in our mission. Together, we are making a difference."
      ]
    },
    irs: {
      title: "IRS Information",
      paragraphs: [
        "Oranta is a nonprofit organization dedicated to providing humanitarian aid through tactical medicine support, medical and pharmaceutical assistance for civilians, and animal rescue efforts. Our employer identification number (EIN) is: 39-2800449.",
        "We have submitted our application for federal tax-exempt status and are currently awaiting approval from the IRS. Once our tax-exempt status is approved, donations made after the effective date may be tax-deductible to the extent permitted by law. We will update our donors and supporters as soon as the determination process is complete. Thank you for supporting our mission and helping us make a meaningful impact in the lives of people and animals in need."
      ]
    },
    ticker: "YOUR DONATIONS ARE SAVING LIVES",
    campaigns: [
      ["Tactical Medicine", "Providing lifesaving medical supplies, training, and equipment to people working in high-risk environments and responding to emergencies."],
      ["Pharmacology & General Medicine", "Delivering medications, medical supplies, and healthcare support to civilians who may otherwise go without essential treatment and care."],
      ["Animal Rescue & Care", "Helping animals affected by war and displacement by providing food, veterinary care, transportation, and shelter support."]
    ],
    support: "Support",
    footer: {
      brand: "Humanitarian aid through tactical medicine, medical support, and animal rescue.",
      explore: "Explore",
      contact: "Contact Us",
      difference: "Make a Difference",
      differenceText: "Your support helps us reach people and animals who need our help most.",
      privacy: "Privacy Policy"
    }
  },
  ua: {
    nav: ["Про нас", "Проєкти", "Запит на допомогу", "Звіти"],
    donate: "Пожертвувати",
    thankYou: {
      heading: "Дякуємо",
      paragraphs: [
        "що завітали на сторінку пожертв Oranta та розглядаєте можливість підтримати нашу місію!",
        "Щодня завдяки таким людям, як ви, ми можемо допомагати там, де це найбільше потрібно. Ваша довіра до нашої організації означає для нас більше, ніж фінансова підтримка. Це надія, співчуття та реальна допомога людям, які стикаються з викликами війни й гуманітарних криз.",
        "В Oranta ми зосереджуємося на трьох важливих напрямах: тактичній медицині, фармакології та загальній медицині, а також порятунку й догляді за тваринами.",
        "Запрошуємо вас обрати проєкт, який найбільше відгукується. Кожен внесок, незалежно від розміру, справді має значення. Важлива кожна пожертва, адже кожен внесок стає частиною більшої справи та допомагає нам продовжувати роботу.",
        "Якщо ви хочете зробити ще більший внесок, розгляньте можливість стати постійним благодійником. Щомісячна підтримка дає змогу планувати наперед, швидко реагувати на нагальні потреби та підтримувати довгострокові гуманітарні ініціативи.",
        "Підтримуючи Oranta, ви стаєте частиною спільноти, об’єднаної співчуттям, діями та вірою в те, що кожне життя має значення.",
        "Дякуємо, що ви з нами.<br>Дякуємо за вашу довіру.<br>Дякуємо, що ви є частиною нашої місії.<br>Разом ми можемо допомагати там, де це найбільше потрібно."
      ],
      signoff: "З вдячністю,<br>Команда Oranta"
    },
    donation: {
      title: "Варіанти пожертв",
      intro: "Ми вдячні за кожен внесок і прагнемо зробити пожертву якомога зручнішою. Наразі Oranta приймає пожертви кількома способами:",
      methods: [
        "Zelle: <a href=\"mailto:Oranta.UA.USA@gmail.com\">Oranta.UA.USA@gmail.com</a>",
        "<a href=\"https://www.paypal.com/ncp/payment/AL9WVEHG4SNW2\" target=\"_blank\" rel=\"noopener noreferrer\">PayPal: безпечне посилання для пожертви</a>",
        "Особисті або корпоративні чеки на ім’я Oranta (у полі призначення платежу вкажіть «Donation»)",
        "Готівкові пожертви під час наших громадських заходів і благодійних зборів",
        "Крім того, ми працюємо над можливістю прямих банківських переказів і сподіваємося запустити її найближчим часом. Незалежно від способу пожертви, ваша підтримка допомагає нам надавати медичну й гуманітарну допомогу та рятувати тварин там, де це найбільше потрібно. Ще раз дякуємо за вашу щедрість, довіру та віру в нашу місію. Разом ми робимо важливу справу."
      ]
    },
    irs: {
      title: "Податковий статус у США (IRS)",
      paragraphs: [
        "Oranta — неприбуткова організація, що надає гуманітарну допомогу у сфері тактичної медицини, медичну та фармацевтичну допомогу цивільним, а також займається порятунком тварин. Наш ідентифікаційний номер організації в США (EIN): 39-2800449.",
        "Ми подали заявку на отримання федерального статусу звільнення від оподаткування та наразі очікуємо на рішення IRS. Після затвердження цього статусу пожертви, зроблені після дати набуття чинності, можуть бути податково вирахуваними для донора в межах, дозволених законом США. Ми повідомимо донорів і прихильників одразу після завершення розгляду. Дякуємо, що підтримуєте нашу місію та допомагаєте людям і тваринам, які цього потребують."
      ]
    },
    ticker: "ВАШІ ПОЖЕРТВИ РЯТУЮТЬ ЖИТТЯ",
    campaigns: [
      ["Тактична медицина", "Надаємо життєво необхідні медичні засоби, навчання й обладнання людям, які працюють у небезпечних умовах і реагують на надзвичайні ситуації."],
      ["Фармакологія та загальна медицина", "Передаємо ліки, медичні засоби та медичну допомогу цивільним, які інакше могли б залишитися без необхідного лікування й допомоги."],
      ["Порятунок і догляд за тваринами", "Допомагаємо тваринам, які постраждали від війни та вимушеного переміщення, забезпечуючи їх їжею, ветеринарною допомогою, перевезенням і прихистком."]
    ],
    support: "Підтримати",
    footer: {
      brand: "Гуманітарна допомога через тактичну медицину, медичну підтримку та порятунок тварин.",
      explore: "Розділи",
      contact: "Зв’язатися з нами",
      difference: "Зробіть свій внесок",
      differenceText: "Ваша підтримка допомагає людям і тваринам, які найбільше цього потребують.",
      privacy: "Політика конфіденційності"
    }
  }
};

function applyLanguage(language) {
  const copy = translations[language];
  const hero = document.querySelector(".thank-you");
  const donation = document.querySelector("#donation-options");
  const irs = document.querySelector("#irs-body");
  const footer = document.querySelector(".site-footer");

  document.documentElement.lang = language === "ua" ? "uk" : "en";
  document.querySelectorAll(".nav-item").forEach((item, index) => { item.textContent = copy.nav[index]; });
  document.querySelectorAll(".donate-btn").forEach((button) => { button.textContent = copy.donate; });
  hero.querySelector("h1").textContent = copy.thankYou.heading;
  hero.querySelectorAll("p:not(.signoff)").forEach((paragraph, index) => { paragraph.innerHTML = copy.thankYou.paragraphs[index]; });
  hero.querySelector(".signoff").innerHTML = copy.thankYou.signoff;
  donation.querySelector("#donation-toggle span:first-child").textContent = copy.donation.title;
  donation.querySelector(".accordion-body p").textContent = copy.donation.intro;
  donation.querySelectorAll(".methods li").forEach((item, index) => { item.innerHTML = copy.donation.methods[index]; });
  irs.parentElement.querySelector("#irs-toggle span:first-child").textContent = copy.irs.title;
  irs.querySelector("p:first-child").textContent = copy.irs.paragraphs[0];
  irs.querySelector("p:last-child").textContent = copy.irs.paragraphs[1];
  document.querySelectorAll(".ticker-track span").forEach((item) => { item.textContent = copy.ticker; });
  document.querySelectorAll(".card").forEach((card, index) => {
    card.querySelector("h3").textContent = copy.campaigns[index][0];
    card.querySelector("p").textContent = copy.campaigns[index][1];
    card.querySelector(".support-btn").textContent = copy.support;
  });
  footer.querySelector(".footer-brand p").textContent = copy.footer.brand;
  footer.querySelector(".footer-nav h2").textContent = copy.footer.explore;
  footer.querySelector(".footer-contact h2").textContent = copy.footer.contact;
  footer.querySelector(".footer-action h2").textContent = copy.footer.difference;
  footer.querySelector(".footer-action p").textContent = copy.footer.differenceText;
  footer.querySelector(".footer-bottom a").textContent = copy.footer.privacy;
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function openDonationOptions({ scroll = false } = {}) {
  if (donationToggle.getAttribute("aria-expanded") !== "true") {
    donationToggle.click();
  }

  if (scroll) {
    donationPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    donationToggle.focus({ preventScroll: true });
  }
}

document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
  const body = document.getElementById(toggle.getAttribute("aria-controls"));
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    body.hidden = open;
    toggle.querySelector(".plus").textContent = open ? "+" : "−";
  });
});

document.querySelectorAll('a[href="#donation-options"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    history.replaceState(null, "", "#donation-options");
    openDonationOptions({ scroll: true });
  });
});

if (window.location.hash === "#donation-options") {
  openDonationOptions();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

applyLanguage("en");
