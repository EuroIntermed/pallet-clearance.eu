(function () {
  const root = document.querySelector(".pc-root");
  if (!root) return;

  const storageKey = "palletclearance-language";
  const titles = {
    en: root.getAttribute("data-title-en"),
    ro: root.getAttribute("data-title-ro")
  };
  const langToggle = root.querySelector("[data-pc-lang-toggle]");
  const langCurrent = root.querySelector("[data-pc-lang-current]");
  const langNext = root.querySelector("[data-pc-lang-next]");
  let lang = localStorage.getItem(storageKey) || "en";

  function apply(next) {
    lang = next === "ro" ? "ro" : "en";
    document.documentElement.lang = lang;
    localStorage.setItem(storageKey, lang);
    if (titles[lang]) document.title = titles[lang];
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();
    if (langNext) langNext.textContent = lang === "en" ? "RO" : "EN";
    root.querySelectorAll("[data-en][data-ro]").forEach((node) => {
      node.textContent = node.getAttribute("data-" + lang) || node.textContent;
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => apply(lang === "en" ? "ro" : "en"));
  }

  apply(lang);
})();
