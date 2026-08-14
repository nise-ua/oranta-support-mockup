const donationPanel = document.querySelector("#donation-options");
const donationToggle = document.querySelector("#donation-toggle");

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
  btn.addEventListener("click", () => {
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
  });
});
