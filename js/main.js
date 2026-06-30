(function () {
  const root = document.querySelector(".pc-root");
  if (!root) return;

  const storageKey = "palletclearance-language";
  const routeConfigs = {
    "sell-overstock": {
      route: "seller-flow",
      targetChannel: "palletclearance-seller",
      title: { en: "Seller flow selected", ro: "Proces de vânzător selectat" },
      helper: {
        en: "Stock details stay private. We only ask for enough information to qualify the opportunity.",
        ro: "Detaliile stocului rămân private. Cerem doar informațiile necesare pentru calificarea oportunității."
      },
      whatsappLabel: { en: "Send seller details on WhatsApp", ro: "Trimite detaliile de vânzător pe WhatsApp" },
      whatsappHelper: {
        en: "Prepared for category, quantity, location and confidentiality.",
        ro: "Pregătit pentru categorie, cantitate, locație și confidențialitate."
      },
      whatsappText: {
        en: "Hello. I want to sell overstock / clearance stock. Category: ___ · Quantity: ___ · Location: ___ · Confidential handling: yes/no",
        ro: "Bună ziua. Vreau să vând stoc în surplus / de clearance. Categorie: ___ · Cantitate: ___ · Locație: ___ · Confidențial: da/nu"
      }
    },
    "buy-clearance": {
      route: "buyer-flow",
      targetChannel: "palletclearance-buyer",
      title: { en: "Buyer flow selected", ro: "Proces de cumpărător selectat" },
      helper: {
        en: "Tell us what you buy so opportunities can be routed only when relevant.",
        ro: "Spune-ne ce cumperi, ca oportunitățile să fie direcționate doar când sunt relevante."
      },
      whatsappLabel: { en: "Send buying profile on WhatsApp", ro: "Trimite profilul de cumpărător pe WhatsApp" },
      whatsappHelper: {
        en: "Prepared for categories, volume, delivery market and near-expiry tolerance.",
        ro: "Pregătit pentru categorii, volum, piața de livrare și acceptarea termenului scurt."
      },
      whatsappText: {
        en: "Hello. I am looking for clearance stock. Categories: ___ · Usual volume: ___ · Delivery market: ___ · Near-expiry accepted: yes/no/depends",
        ro: "Bună ziua. Caut marfă de clearance. Categorii: ___ · Volum obișnuit: ___ · Piața de livrare: ___ · Accept termen scurt: da/nu/depinde"
      }
    },
    "romania-market-entry": {
      route: "market-entry-flow",
      targetChannel: "euro-intermed-market-entry",
      title: { en: "Romania market-entry flow selected", ro: "Proces de intrare pe piața din România selectat" },
      helper: {
        en: "Euro Intermed can review product category, current markets and possible Romania routes.",
        ro: "Euro Intermed poate analiza categoria, piețele actuale și rutele posibile pentru România."
      },
      whatsappLabel: { en: "Discuss Romania entry on WhatsApp", ro: "Discută intrarea pe piața din România pe WhatsApp" },
      whatsappHelper: {
        en: "Prepared for product category, current markets and stock type.",
        ro: "Pregătit pentru categorie, piețe actuale și tip de stoc."
      },
      whatsappText: {
        en: "Hello. I am a European supplier and want to explore the Romanian market. Product category: ___ · Current markets: ___ · Regular or clearance stock: ___",
        ro: "Bună ziua. Sunt furnizor european și vreau să intru pe piața din România. Categorie produs: ___ · Piețe actuale: ___ · Stoc standard sau de clearance: ___"
      }
    },
    "other-b2b": {
      route: "other-b2b-flow",
      targetChannel: "euro-intermed-triage",
      title: { en: "Other B2B opportunity selected", ro: "Altă oportunitate B2B selectată" },
      helper: {
        en: "The request will be manually routed to the most relevant Euro Intermed channel.",
        ro: "Cererea va fi direcționată manual către canalul Euro Intermed potrivit."
      },
      whatsappLabel: { en: "Contact the team on WhatsApp", ro: "Contactează echipa pe WhatsApp" },
      whatsappHelper: {
        en: "Prepared for a mixed B2B clearance or stock opportunity.",
        ro: "Pregătit pentru o oportunitate B2B mixtă de clearance sau stoc."
      },
      whatsappText: {
        en: "Hello. I have a B2B clearance / stock opportunity and would like to discuss it with your team.",
        ro: "Bună ziua. Am o oportunitate B2B de clearance / stoc și vreau să discut cu echipa."
      }
    }
  };

  const whatsappDefault = {
    label: { en: "Contact on WhatsApp", ro: "Contact pe WhatsApp" },
    helper: {
      en: "Choose a route to prepare the correct message.",
      ro: "Alege o rută pentru a pregăti mesajul corect."
    },
    text: {
      en: "Hello. I have a B2B clearance / stock enquiry and would like to discuss it with your team.",
      ro: "Bună ziua. Am o întrebare B2B legată de clearance / stoc și vreau să discut cu echipa."
    }
  };

  const messages = {
    en: {
      chooseRoute: "Please choose what best describes your request.",
      company: "Add the company name.",
      country: "Add the country.",
      contactPerson: "Add the contact person.",
      contactMethod: "Add either an email address or phone/WhatsApp number.",
      invalidEmail: "Add a valid email address.",
      routeField: "Required for the selected route.",
      consent: "Please confirm B2B activity and contact consent.",
      validationStatus: "Please check the required fields and try again.",
      fileProtocol: "The form is valid, but real submission requires running through a PHP server.",
      sending: "Sending...",
      submit: "Send request",
      fallback: "The form could not be sent. Please try again or contact us on WhatsApp/email.",
      aiFallback: "The assistant is not available yet. You can still use the classic form or WhatsApp.",
      noRouteTitle: "No route selected",
      noRouteHelper: "Choose seller, buyer, Romania market-entry or other B2B opportunity."
    },
    ro: {
      chooseRoute: "Te rugăm să alegi ce descrie cel mai bine cererea ta.",
      company: "Adaugă numele companiei.",
      country: "Adaugă țara.",
      contactPerson: "Adaugă persoana de contact.",
      contactMethod: "Adaugă fie o adresă de email, fie un număr de telefon/WhatsApp.",
      invalidEmail: "Adaugă o adresă de email validă.",
      routeField: "Câmp obligatoriu pentru ruta selectată.",
      consent: "Confirmă activitatea B2B și acordul pentru a fi contactat.",
      validationStatus: "Te rugăm să verifici câmpurile obligatorii și să încerci din nou.",
      fileProtocol: "Formularul este valid, dar trimiterea efectivă necesită rularea printr-un server PHP.",
      sending: "Se trimite...",
      submit: "Trimite cererea",
      fallback: "Formularul nu a putut fi trimis. Te rugăm să încerci din nou sau să ne contactezi pe WhatsApp/email.",
      aiFallback: "Asistentul nu este disponibil încă. Poți folosi formularul clasic sau WhatsApp.",
      noRouteTitle: "Nicio rută selectată",
      noRouteHelper: "Alege vânzător, cumpărător, intrare pe piața din România sau altă oportunitate B2B."
    }
  };

  const nav = root.querySelector("[data-pc-nav]");
  const menu = root.querySelector("[data-pc-menu]");
  const menuToggle = root.querySelector("[data-pc-menu-toggle]");
  const langToggle = root.querySelector("[data-pc-lang-toggle]");
  const langCurrent = root.querySelector("[data-pc-lang-current]");
  const langNext = root.querySelector("[data-pc-lang-next]");
  const form = root.querySelector("[data-pc-form]");
  const intentSelect = root.querySelector("[data-pc-intent-select]");
  const routeInput = root.querySelector("[data-pc-route-input]");
  const intentInput = root.querySelector("[data-pc-intent-input]");
  const targetChannelInput = root.querySelector("[data-pc-target-channel]");
  const languageInput = root.querySelector("[data-pc-language-input]");
  const whatsappLinks = root.querySelectorAll("[data-pc-whatsapp-link]");
  const whatsappHelper = root.querySelector("[data-pc-whatsapp-helper]");
  const routeSummaryTitle = root.querySelector("[data-pc-route-summary-title]");
  const routeSummaryText = root.querySelector("[data-pc-route-summary-text]");
  const aiWidgetContainer = root.querySelector("#ai-widget-container");
  const formStatus = root.querySelector("[data-pc-form-status]");
  const submitButton = root.querySelector("[data-pc-submit]");
  const mobileCta = root.querySelector("[data-pc-mobile-cta]");
  let currentLanguage = localStorage.getItem(storageKey) || "en";
  let currentIntent = "";

  function t(key) {
    return messages[currentLanguage][key];
  }

  function setMenu(open) {
    if (!menu || !menuToggle) return;
    menu.classList.toggle("pc-is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  }

  function updateNavState() {
    if (!nav) return;
    nav.classList.toggle("pc-is-scrolled", window.scrollY > 18);
  }

  function scrollToForm() {
    const target = root.querySelector("#b2b-form");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function applyLanguage(language) {
    currentLanguage = language === "ro" ? "ro" : "en";
    document.documentElement.lang = currentLanguage;
    localStorage.setItem(storageKey, currentLanguage);
    if (languageInput) languageInput.value = currentLanguage;
    if (aiWidgetContainer) aiWidgetContainer.dataset.language = currentLanguage;
    if (langCurrent) langCurrent.textContent = currentLanguage.toUpperCase();
    if (langNext) langNext.textContent = currentLanguage === "en" ? "RO" : "EN";

    root.querySelectorAll("[data-en][data-ro]").forEach((node) => {
      node.textContent = node.getAttribute(`data-${currentLanguage}`) || node.textContent;
    });
    root.querySelectorAll("[data-placeholder-en][data-placeholder-ro]").forEach((node) => {
      node.placeholder = node.getAttribute(`data-placeholder-${currentLanguage}`) || "";
    });
    updateWhatsApp(currentIntent);
    updateRouteSummary(currentIntent);
    resetSubmitState();
  }

  function clearErrors() {
    root.querySelectorAll(".pc-has-error").forEach((field) => field.classList.remove("pc-has-error"));
    root.querySelectorAll("[data-error-for]").forEach((error) => {
      error.textContent = "";
    });
  }

  function setError(fieldName, message) {
    const field = root.querySelector(`[data-field="${fieldName}"]`);
    const error = root.querySelector(`[data-error-for="${fieldName}"]`);
    if (field) field.classList.add("pc-has-error");
    if (error) error.textContent = message;
  }

  function setStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.remove("pc-is-success", "pc-is-error");
    if (type) formStatus.classList.add(`pc-is-${type}`);
  }

  function setFieldsetState(intent) {
    root.querySelectorAll("[data-route-fields]").forEach((group) => {
      const isActive = group.getAttribute("data-route-fields") === intent;
      group.hidden = !isActive;
      group.querySelectorAll("input, select, textarea").forEach((field) => {
        field.disabled = !isActive;
        if (field.hasAttribute("data-route-required")) {
          field.required = isActive;
        }
      });
    });
  }

  function updateRouteButtons(intent) {
    root.querySelectorAll("[data-intent]").forEach((button) => {
      const isSelected = button.getAttribute("data-intent") === intent;
      button.classList.toggle("pc-is-selected", isSelected);
      if (button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", String(isSelected));
      }
    });
  }

  function updateRouteSummary(intent) {
    const config = routeConfigs[intent];
    if (!routeSummaryTitle || !routeSummaryText) return;
    if (!config) {
      routeSummaryTitle.textContent = t("noRouteTitle");
      routeSummaryText.textContent = t("noRouteHelper");
      return;
    }
    routeSummaryTitle.textContent = config.title[currentLanguage];
    routeSummaryText.textContent = config.helper[currentLanguage];
  }

  function updateWhatsApp(intent) {
    const config = routeConfigs[intent];
    const label = config ? config.whatsappLabel[currentLanguage] : whatsappDefault.label[currentLanguage];
    const text = config ? config.whatsappText[currentLanguage] : whatsappDefault.text[currentLanguage];
    const helper = config ? config.whatsappHelper[currentLanguage] : whatsappDefault.helper[currentLanguage];
    const href = `https://wa.me/40765934455?text=${encodeURIComponent(text)}`;
    whatsappLinks.forEach((link) => {
      link.href = href;
      if (link.hasAttribute("data-pc-whatsapp-link")) {
        link.textContent = label;
      }
    });
    if (whatsappHelper) whatsappHelper.textContent = helper;
  }

  function selectIntent(intent, options = {}) {
    const config = routeConfigs[intent];
    if (!config) return;
    currentIntent = intent;
    clearErrors();
    setStatus("", "");
    if (intentSelect) intentSelect.value = intent;
    if (routeInput) routeInput.value = config.route;
    if (intentInput) intentInput.value = intent;
    if (targetChannelInput) targetChannelInput.value = config.targetChannel;
    if (aiWidgetContainer) aiWidgetContainer.dataset.defaultRoute = config.route;
    root.querySelectorAll("[data-pc-ai-trigger]").forEach((button) => {
      button.dataset.route = config.route;
      button.dataset.intent = intent;
    });
    updateRouteButtons(intent);
    setFieldsetState(intent);
    updateRouteSummary(intent);
    updateWhatsApp(intent);
    if (options.scroll) scrollToForm();
  }

  function fieldValue(name) {
    const field = form ? form.elements[name] : null;
    if (!field) return "";
    return String(field.value || "").trim();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    if (!form) return false;
    clearErrors();
    setStatus("", "");
    let valid = true;
    const intent = fieldValue("pc_intent") || fieldValue("request_type");
    const email = fieldValue("email");
    const phone = fieldValue("phone");

    if (!intent || !routeConfigs[intent]) {
      setError("intent", t("chooseRoute"));
      valid = false;
    }

    [
      ["company_name", t("company")],
      ["company_country", t("country")],
      ["contact_person", t("contactPerson")]
    ].forEach(([name, message]) => {
      if (!fieldValue(name)) {
        setError(name, message);
        valid = false;
      }
    });

    if (!email && !phone) {
      setError("phone", t("contactMethod"));
      setError("email", t("contactMethod"));
      valid = false;
    }

    if (email && !validateEmail(email)) {
      setError("email", t("invalidEmail"));
      valid = false;
    }

    if (intent) {
      root.querySelectorAll(`[data-route-fields="${intent}"] [data-route-required]`).forEach((field) => {
        if (!String(field.value || "").trim()) {
          const wrapper = field.closest("[data-field]");
          const fieldName = wrapper ? wrapper.getAttribute("data-field") : field.name;
          setError(fieldName, t("routeField"));
          valid = false;
        }
      });
    }

    const b2bConfirmed = form.elements.b2b_confirmed;
    const contactConsent = form.elements.contact_consent;
    if (!b2bConfirmed || !b2bConfirmed.checked || !contactConsent || !contactConsent.checked) {
      setError("consent", t("consent"));
      valid = false;
    }

    return valid;
  }

  function resetSubmitState() {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = t("submit");
    }
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!validateForm()) {
      setStatus(t("validationStatus"), "error");
      const firstError = root.querySelector(".pc-has-error input, .pc-has-error select, .pc-has-error textarea");
      if (firstError) firstError.focus();
      return;
    }

    if (window.location.protocol === "file:") {
      setStatus(t("fileProtocol"), "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = t("sending");
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Submit failed.");
      }
      setStatus(data.message || "", "success");
      form.reset();
      currentIntent = "";
      updateRouteButtons("");
      setFieldsetState("");
      updateRouteSummary("");
      if (routeInput) routeInput.value = "";
      if (intentInput) intentInput.value = "";
      if (targetChannelInput) targetChannelInput.value = "";
      if (languageInput) languageInput.value = currentLanguage;
      updateWhatsApp("");
    } catch (error) {
      setStatus(t("fallback"), "error");
    } finally {
      resetSubmitState();
    }
  }

  function initFaq() {
    root.querySelectorAll(".pc-faq__question").forEach((button) => {
      button.addEventListener("click", () => {
        const target = root.querySelector(`#${button.getAttribute("aria-controls")}`);
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        if (target) target.hidden = open;
      });
    });
  }

  function initMobileCtaObserver() {
    if (!mobileCta || !("IntersectionObserver" in window)) return;
    const formSection = root.querySelector("#b2b-form");
    if (!formSection) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          mobileCta.classList.toggle("pc-is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(formSection);
  }

  window.addEventListener("scroll", updateNavState, { passive: true });
  updateNavState();

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (menu) {
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLanguage === "en" ? "ro" : "en");
    });
  }

  root.querySelectorAll("[data-intent]").forEach((button) => {
    button.addEventListener("click", () => {
      selectIntent(button.getAttribute("data-intent"), { scroll: true });
    });
  });

  if (intentSelect) {
    intentSelect.addEventListener("change", () => {
      selectIntent(intentSelect.value, { scroll: false });
    });
  }

  root.querySelectorAll("[data-pc-ai-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      selectIntent(button.dataset.intent || currentIntent || "sell-overstock", { scroll: true });
      setStatus(t("aiFallback"), "error");
    });
  });

  if (form) form.addEventListener("submit", submitForm);

  setFieldsetState("");
  applyLanguage(currentLanguage);
  initFaq();
  initMobileCtaObserver();
})();
