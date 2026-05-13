document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));
  const body = document.body;

  const loader = $("#loader");
  const header = $("#header");
  const backTop = $("#backTop");
  const menuToggle = $("#menuToggle");
  const nav = $("#nav");
  const langLinks = $$(".language-switcher a");

  const translations = {
    pt: {
      nav_inicio: "Início",
      nav_imoveis: "Imóveis",
      nav_experiencia: "Experiências",
      nav_servicos: "Serviços",
      nav_sobre: "Sobre nós",
      nav_contato: "Contato",
      btn_consultor: "Fale com um consultor",
      hero_eyebrow: "Curadoria privada em Fortaleza",
      hero_title: "Exclusividade <span class='gold-italic'>que se vive.</span>",
      hero_sub: "Imóveis únicos apresentados com sofisticação absoluta e atendimento consultivo reservado para clientes que valorizam patrimônio, conforto e discrição.",
      btn_conheca: "Conheça nossos imóveis",
      btn_especialista: "Falar com especialista",
      stat_exclusive: "Imóveis exclusivos",
      stat_offmarket: "Oportunidades privadas",
      stat_personalized: "Atendimento Personalizado",
      stat_privacy: "Total discrição",
      exp_eyebrow: "Experiência NobleHaus",
      exp_h2: "Não vendemos apenas imóveis. Entregamos uma <span class='gold-italic'>decisão segura.</span>",
      exp_p: "Cada imóvel passa por uma curadoria criteriosa de localização, liquidez, acabamento, documentação e potencial de valorização.",
      nav_estilo: "Mais que um endereço, um <span class='gold-italic'>estilo de vida.</span>",
      about_p: "A NobleHaus nasceu para elevar o padrão da experiência imobiliária em Fortaleza. Atuamos com discrição, repertório de mercado e uma curadoria pensada para clientes que buscam patrimônio, conforto e excelência.",
      feat_curadoria_h4: "Curadoria Privada",
      feat_curadoria_p: "Selecionamos imóveis que atendem rigorosos critérios de qualidade e exclusividade.",
      feat_juridica_h4: "Segurança Jurídica",
      feat_juridica_p: "Acompanhamento completo para garantir transações seguras e transparentes.",
      feat_posvenda_h4: "Pós-venda Premium",
      feat_posvenda_p: "Suporte contínuo após a aquisição para uma transição perfeita.",
      tour_label: "Tour imersivo do imóvel",
      prop_eyebrow: "Portfólio reservado",
      prop_h2: "Selecionados para um <span class='gold-italic'>estilo de vida único.</span>",
      prop_p: "Curadoria criteriosa de imóveis com arquitetura e localização à altura de quem procura o extraordinário.",
      btn_detalhes: "Ver detalhes",
      process_eyebrow: "A Jornada NobleHaus",
      process_h2: "Atendimento consultivo em <span class='gold-italic'>cada detalhe.</span>",
      process_01_h4: "Perfil & Alinhamento",
      process_01_p: "Mapeamos suas expectativas, estilo de vida e objetivos patrimoniais de forma reservada.",
      process_02_h4: "Curadoria Privada",
      process_02_p: "Filtramos oportunidades on e off-market, apresentando apenas o que é extraordinário.",
      process_03_h4: "Experiência Imobiliária",
      process_03_p: "Visitas agendadas com foco absoluto em análise técnica, acabamento e localização.",
      process_04_h4: "Negociação & Sigilo",
      process_04_p: "Suporte estratégico e jurídico para garantir uma transação segura, discreta e eficiente.",
      curadoria_h3: "Curadoria imobiliária feita para clientes exigentes.",
      news_eyebrow: "Assinatura Exclusiva",
      news_h2: "Receba o <span class='gold-italic'>Invisível.</span>",
      news_p: "Oportunidades off-market e análises de mercado para o círculo restrito da NobleHaus.",
      news_placeholder: "Seu e-mail de negócios",
      news_btn: "Inscrever-se →",
      footer_about: "Curadoria privada de imóveis de alto padrão em Fortaleza. Atendimento consultivo, discrição e exclusividade em cada negociação.",
      footer_links_title: "Navegação",
      footer_contact_title: "Contato",
      footer_dev: "Desenvolvido por",
      footer_rights: "Todos os direitos reservados."
    },
    en: {
      nav_inicio: "Home",
      nav_imoveis: "Properties",
      nav_experiencia: "Experience",
      nav_servicos: "Services",
      nav_sobre: "About Us",
      nav_contato: "Contact",
      btn_consultor: "Talk to a consultant",
      hero_eyebrow: "Private curatorship in Fortaleza",
      hero_title: "Exclusivity <span class='gold-italic'>to be lived.</span>",
      hero_sub: "Unique properties presented with absolute sophistication and reserved advisory service for clients who value heritage, comfort and discretion.",
      btn_conheca: "Explore our properties",
      btn_especialista: "Talk to a specialist",
      stat_exclusive: "Exclusive properties",
      stat_offmarket: "Off-market opportunities",
      stat_personalized: "Personalized Service",
      stat_privacy: "Total privacy",
      exp_eyebrow: "NobleHaus Experience",
      exp_h2: "We don't just sell properties. We deliver a <span class='gold-italic'>safe decision.</span>",
      exp_p: "Each property undergoes careful curatorship of location, liquidity, finishing, documentation and appreciation potential.",
      nav_estilo: "More than an address, a <span class='gold-italic'>lifestyle.</span>",
      about_p: "NobleHaus was born to elevate the standard of the real estate experience in Fortaleza. We act with discretion, market repertoire and a curation designed for clients seeking heritage, comfort and excellence.",
      feat_curadoria_h4: "Private Curatorship",
      feat_curadoria_p: "We select properties that meet rigorous quality and exclusivity criteria.",
      feat_juridica_h4: "Legal Security",
      feat_juridica_p: "Full monitoring to ensure secure and transparent transactions.",
      feat_posvenda_h4: "Premium After-sales",
      feat_posvenda_p: "Continuous support after the acquisition for a perfect transition.",
      tour_label: "Immersive property tour",
      prop_eyebrow: "Reserved Portfolio",
      prop_h2: "Selected for a <span class='gold-italic'>unique lifestyle.</span>",
      prop_p: "Careful curation of properties with architecture and location worthy of those seeking the extraordinary.",
      btn_detalhes: "View details",
      process_eyebrow: "The NobleHaus Journey",
      process_h2: "Consultative service in <span class='gold-italic'>every detail.</span>",
      process_01_h4: "Profile & Alignment",
      process_01_p: "We map your expectations, lifestyle and wealth goals privately.",
      process_02_h4: "Private Curatorship",
      process_02_p: "We filter on and off-market opportunities, presenting only what is extraordinary.",
      process_03_h4: "Real Estate Experience",
      process_03_p: "Scheduled visits with an absolute focus on technical analysis, finishing and location.",
      process_04_h4: "Negotiation & Secrecy",
      process_04_p: "Strategic and legal support to ensure a safe, discreet and efficient transaction.",
      curadoria_h3: "Real estate curatorship made for demanding clients.",
      news_eyebrow: "Exclusive Subscription",
      news_h2: "Receive the <span class='gold-italic'>Invisible.</span>",
      news_p: "Off-market opportunities and market analysis for the NobleHaus inner circle.",
      news_placeholder: "Your business email",
      news_btn: "Subscribe →",
      footer_about: "Private curatorship of high-end properties in Fortaleza. Advisory service, discretion, and exclusivity in every negotiation.",
      footer_links_title: "Navigation",
      footer_contact_title: "Contact",
      footer_dev: "Developed by",
      footer_rights: "All rights reserved."
    }
  };

  function updateLanguage(lang) {
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    langLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("noblehaus_lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }

  function esconderLoader() {
    if (!loader) return;
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    setTimeout(() => {
      loader.style.display = "none";
      const hero = $(".hero");
      if (hero) hero.classList.add("in");
    }, 600);
  }

  window.addEventListener("load", esconderLoader);
  setTimeout(esconderLoader, 2000);

  langLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");
      updateLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem("noblehaus_lang") || "pt";
  updateLanguage(savedLang);

  function handleScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 30);
    if (backTop) backTop.classList.toggle("show", window.scrollY > 600);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const mobileMenu = $("#mobileMenu");
  const closeMenu = $("#closeMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    if (closeMenu) {
      closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    }

    $$("a", mobileMenu).forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.setProperty("--d", delay + "ms");
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("in"));
  }

  const counters = $$(".stat-num");
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1600;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterObserver.observe(c));
  }

  $$(".fav").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const active = btn.textContent.trim() === "♡";
      btn.textContent = active ? "♥" : "♡";
      btn.style.color = active ? "#d4af37" : "";
    });
  });

  const imoveis = {
    alphaville: {
      titulo: "Casa Alphaville Fortaleza",
      local: "Alphaville Fortaleza, CE",
      preco: "R$ 8.750.000",
      capa: "assets/aphaville.png",
      fotos: ["assets/aphaville.png", "assets/aphavillepisina.png", "assets/aphavillesuite1.png", "assets/aphavillecozinha.png", "assets/aplhavillebanheiro.png"],
      nomes: ["Fachada premium", "Piscina privativa", "Suíte master", "Cozinha gourmet", "Banheiro sofisticado"],
      info: [["Área", "560m²"], ["Suítes", "5 suítes"], ["Vagas", "6 vagas"], ["Lazer", "Piscina privativa"], ["Condomínio", "Fechado"], ["Diferencial", "Automação"]],
      coords: [-3.8260, -38.4640]
    },
    meireles: {
      titulo: "Apartamento Meireles",
      local: "Meireles, Fortaleza - CE",
      preco: "R$ 4.980.000",
      capa: "assets/apartamentomeireles.png",
      fotos: ["assets/apartamentomeireles.png", "assets/meirelesvaranda.png", "assets/meirelessuite.png", "assets/meirelessaladeestar.png", "assets/meirelesbanheiro.png"],
      nomes: ["Vista principal", "Varanda vista mar", "Suíte master", "Sala de estar", "Banheiro premium"],
      info: [["Área", "280m²"], ["Suítes", "4 suítes"], ["Vagas", "4 vagas"], ["Vista", "Mar"], ["Localização", "Meireles"], ["Diferencial", "Andar alto"]],
      coords: [-3.7280, -38.4970]
    },
    porto: {
      titulo: "Mansão no Porto das Dunas",
      local: "Porto das Dunas, Aquiraz - CE",
      preco: "R$ 12.900.000",
      capa: "assets/praiadunas.png",
      fotos: ["assets/praiadunas.png", "assets/dunassuite.png", "assets/dunassala.png", "assets/dunasbanheiro.png"],
      nomes: ["Fachada oceânica", "Suíte master", "Sala ampla", "Banheiro premium"],
      info: [["Área", "780m²"], ["Suítes", "6 suítes"], ["Vagas", "8 vagas"], ["Piscina", "Infinity"], ["Vista", "Oceânica"], ["Projeto", "Assinado"]],
      coords: [-3.8330, -38.3950]
    }
  };

  const propertyModal = $("#propertyModal");
  const closePropertyModal = $("#closePropertyModal");
  const propertyBg = $(".property-modal-bg");
  const detailHeroImage = $("#detailHeroImage");
  const detailTitle = $("#detailTitle");
  const detailLocation = $("#detailLocation");
  const detailPrice = $("#detailPrice");
  const detailGallery = $("#detailGallery");
  const detailInfoGrid = $("#detailInfoGrid");
  const detailMapInfo = $("#detailMapInfo");

  const galleryLightbox = $("#galleryLightbox");
  const lightboxImage = $("#lightboxImage");
  const closeLightbox = $("#closeLightbox");
  const lightboxBg = $(".lightbox-bg");
  const prevLightbox = $("#prevLightbox");
  const nextLightbox = $("#nextLightbox");

  let galeriaAtual = [];
  let fotoAtual = 0;
  let detailMap = null;
  let detailMarker = null;

  function abrirDetalhes(id) {
    const imovel = imoveis[id];
    if (!imovel || !propertyModal) return;
    galeriaAtual = imovel.fotos;
    fotoAtual = 0;
    if (detailHeroImage) { detailHeroImage.src = imovel.capa; detailHeroImage.alt = imovel.titulo; }
    if (detailTitle) detailTitle.textContent = imovel.titulo;
    if (detailLocation) detailLocation.textContent = imovel.local;
    if (detailPrice) detailPrice.textContent = imovel.preco;
    if (detailGallery) {
      detailGallery.innerHTML = "";
      imovel.fotos.forEach((foto, index) => {
        const item = document.createElement("div");
        item.className = "gallery-card" + (index === 0 ? " large" : "");
        item.innerHTML = `<img src="${foto}" alt="${imovel.nomes[index]}" loading="lazy"><div class="gallery-label">${imovel.nomes[index]}</div>`;
        item.style.cursor = "pointer";
        item.addEventListener("click", () => abrirLightbox(index));
        detailGallery.appendChild(item);
      });
    }
    if (detailInfoGrid) {
      detailInfoGrid.innerHTML = "";
      imovel.info.forEach(info => {
        const card = document.createElement("div");
        card.className = "detail-info-card";
        card.innerHTML = `<div class="info-icon">✦</div><h4>${info[0]}</h4><p>${info[1]}</p>`;
        detailInfoGrid.appendChild(card);
      });
    }
    if (detailMapInfo) {
      detailMapInfo.innerHTML = `<div class="map-point"><h4>Endereço premium</h4><p>${imovel.local}</p></div><div class="map-point"><h4>Visita exclusiva</h4><p>Agendamento sob consulta</p></div><div class="map-point"><h4>Atendimento</h4><p>Consultor dedicado NobleHaus</p></div>`;
    }
    propertyModal.classList.add("open");
    propertyModal.style.display = "flex";
    body.classList.add("modal-open");
    iniciarMapaDetalhe(imovel.coords);
  }

  function fecharDetalhes() {
    if (!propertyModal) return;
    propertyModal.classList.remove("open");
    propertyModal.style.display = "none";
    body.classList.remove("modal-open");
  }

  $$(".view-details").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      abrirDetalhes(btn.dataset.property);
    });
  });

  if (closePropertyModal) closePropertyModal.addEventListener("click", fecharDetalhes);
  if (propertyBg) propertyBg.addEventListener("click", fecharDetalhes);

  function abrirLightbox(index) {
    if (!galleryLightbox || !lightboxImage || !galeriaAtual.length) return;
    fotoAtual = index;
    lightboxImage.src = galeriaAtual[fotoAtual];
    galleryLightbox.classList.add("open");
    galleryLightbox.style.display = "flex";
    body.classList.add("modal-open");
  }

  function fecharLightbox() {
    if (!galleryLightbox) return;
    galleryLightbox.classList.remove("open");
    galleryLightbox.style.display = "none";
    if (!propertyModal || !propertyModal.classList.contains("open")) body.classList.remove("modal-open");
  }

  function trocarFoto(delta) {
    if (!galeriaAtual.length || !lightboxImage) return;
    fotoAtual = (fotoAtual + delta + galeriaAtual.length) % galeriaAtual.length;
    lightboxImage.src = galeriaAtual[fotoAtual];
  }

  if (closeLightbox) closeLightbox.addEventListener("click", fecharLightbox);
  if (lightboxBg) lightboxBg.addEventListener("click", fecharLightbox);
  if (prevLightbox) prevLightbox.addEventListener("click", () => trocarFoto(-1));
  if (nextLightbox) nextLightbox.addEventListener("click", () => trocarFoto(1));

  function iniciarMapa() {
    const mapEl = $("#map");
    if (!mapEl || !window.L) return;
    const map = L.map("map", { scrollWheelZoom: false }).setView([-3.78, -38.48], 11);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png").addTo(map);
    const bairros = [
      { name: "Meireles", coords: [-3.7280, -38.4970] },
      { name: "Aldeota", coords: [-3.7400, -38.5050] },
      { name: "Cocó", coords: [-3.7530, -38.4830] },
      { name: "Guararapes", coords: [-3.7560, -38.4920] },
      { name: "Alphaville Fortaleza", coords: [-3.8260, -38.4640] },
      { name: "Porto das Dunas", coords: [-3.8330, -38.3950] }
    ];
    bairros.forEach(b => {
      L.marker(b.coords, { icon: L.divIcon({ className: "gold-pin", html: '<div class="gold-pin-dot"></div>', iconSize: [18, 18] }) }).addTo(map);
    });
  }

  function iniciarMapaDetalhe(coords) {
    const detailMapEl = $("#detailMap");
    if (!detailMapEl || !window.L || !coords) return;
    if (!detailMap) {
      detailMap = L.map("detailMap", { scrollWheelZoom: false, zoomControl: false }).setView(coords, 13);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png").addTo(detailMap);
      detailMarker = L.marker(coords, { icon: L.divIcon({ className: "gold-pin", html: '<div class="gold-pin-dot"></div>', iconSize: [18, 18] }) }).addTo(detailMap);
    } else {
      detailMap.setView(coords, 13);
      if (detailMarker) detailMarker.setLatLng(coords);
    }
  }

  iniciarMapa();

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    fecharLightbox();
    fecharDetalhes();
  });

  const backTopLottie = document.getElementById("backTopLottie");
  if (backTopLottie && typeof lottie !== "undefined") {
    lottie.loadAnimation({ container: backTopLottie, renderer: "svg", loop: true, autoplay: true, path: "assets/backtop.json" });
  }
});