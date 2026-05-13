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
      feat_curadoria_h4: "Curadoria Privada",
      feat_curadoria_p: "Selecionamos opções compatíveis com seu estilo de vida, patrimônio e objetivo.",
      feat_juridica_h4: "Segurança Jurídica",
      feat_juridica_p: "Acompanhamento documental para uma negociação transparente e protegida.",
      feat_consultivo_h4: "Atendimento Consultivo",
      feat_consultivo_p: "Uma jornada discreta, personalizada e conduzida por especialistas.",
      feat_posvenda_h4: "Pós-venda Premium",
      feat_posvenda_p: "Suporte após a assinatura para tornar a transição mais simples e elegante.",
      tour_label: "Tour imersivo do imóvel",
      prop_eyebrow: "Portfólio reservado",
      prop_h2: "Selecionados para um <span class='gold-italic'>estilo de vida único.</span>",
      prop_p: "Imóveis com arquitetura, localização e experiência à altura de quem procura algo acima do comum.",
      prop_destaque: "Destaque",
      prop_vistamar: "Vista mar",
      prop_oceanica: "Oceânica",
      btn_detalhes: "Ver detalhes",
      edit_eyebrow: "Imóveis fora do mercado",
      edit_h2: "As melhores oportunidades nem sempre aparecem nos portais.",
      edit_p: "A NobleHaus atua com imóveis públicos e oportunidades privadas, conectando compradores qualificados a proprietários que valorizam discrição, velocidade e segurança.",
      process_eyebrow: "Processo de atendimento",
      process_h2: "Uma jornada simples, discreta e <span class='gold-italic'>bem conduzida.</span>",
      process_01_h4: "Entendimento do perfil",
      process_01_p: "Mapeamos região, orçamento, estilo, prioridade familiar e objetivo de investimento.",
      process_02_h4: "Curadoria privada",
      process_02_p: "Apresentamos apenas imóveis realmente compatíveis, evitando perda de tempo.",
      process_03_h4: "Visita exclusiva",
      process_03_p: "Organizamos uma experiência reservada para avaliar ambientes, acabamento e localização.",
      process_04_h4: "Negociação segura",
      process_04_p: "Suporte total na análise documental e estratégica para uma transação sem surpresas.",
      curadoria_h3: "Receba uma seleção privada antes de tomar qualquer decisão.",
      curadoria_btn: "Solicitar curadoria",
      news_h2: "Acompanhe o <span class='gold-italic'>mercado de luxo.</span>",
      news_p: "Receba em primeira mão lançamentos exclusivos, análises de mercado e oportunidades off-market.",
      news_placeholder: "Seu e-mail profissional",
      news_btn: "Inscrever-se",
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
      feat_curadoria_h4: "Private Curatorship",
      feat_curadoria_p: "We select options compatible with your lifestyle, assets and goals.",
      feat_juridica_h4: "Legal Security",
      feat_juridica_p: "Documentary monitoring for a transparent and protected negotiation.",
      feat_consultivo_h4: "Advisory Service",
      feat_consultivo_p: "A discreet, personalized journey led by specialists.",
      feat_posvenda_h4: "Premium After-sales",
      feat_posvenda_p: "Support after signing to make the transition simpler and more elegant.",
      tour_label: "Immersive property tour",
      prop_eyebrow: "Reserved Portfolio",
      prop_h2: "Selected for a <span class='gold-italic'>unique lifestyle.</span>",
      prop_p: "Properties with architecture, location and experience worthy of those looking for something above the ordinary.",
      prop_destaque: "Featured",
      prop_vistamar: "Sea view",
      prop_oceanica: "Oceanfront",
      btn_detalhes: "View details",
      edit_eyebrow: "Off-market properties",
      edit_h2: "The best opportunities don't always appear on portals.",
      edit_p: "NobleHaus works with public properties and private opportunities, connecting qualified buyers to owners who value discretion, speed and security.",
      process_eyebrow: "Service process",
      process_h2: "A simple, discreet and <span class='gold-italic'>well-conducted journey.</span>",
      process_01_h4: "Profile understanding",
      process_01_p: "We map region, budget, style, family priority and investment objective.",
      process_02_h4: "Private curatorship",
      process_02_p: "We present only truly compatible properties, avoiding time wasting.",
      process_03_h4: "Exclusive visit",
      process_03_p: "We organize a reserved experience to evaluate environments, finishing and location.",
      process_04_h4: "Secure negotiation",
      process_04_p: "Full support in documentary and strategic analysis for a transaction without surprises.",
      curadoria_h3: "Receive a private selection before making any decision.",
      curadoria_btn: "Request curatorship",
      news_h2: "Follow the <span class='gold-italic'>luxury market.</span>",
      news_p: "Get first-hand access to exclusive launches, market analysis, and off-market opportunities.",
      news_placeholder: "Your professional email",
      news_btn: "Subscribe",
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

  // Hero Activation
  const hero = $(".hero");
  if (hero) {
    setTimeout(() => {
      hero.classList.add("in");
    }, 100);
  }

  // Reveal Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  }, { threshold: 0.15 });

  $$(".reveal").forEach(el => revealObserver.observe(el));

  langLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");
      updateLanguage(lang);
    });
  });

  // Load saved language
  const savedLang = localStorage.getItem("noblehaus_lang") || "pt";
  updateLanguage(savedLang);

  function esconderLoader() {
    if (!loader) return;
    loader.classList.add("hidden");
    loader.style.display = "none";
  }

  window.addEventListener("load", esconderLoader);
  setTimeout(esconderLoader, 1200);

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

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    $$("a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
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

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
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

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
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
      fotos: [
        "assets/aphaville.png",
        "assets/aphavillepisina.png",
        "assets/aphavillesuite1.png",
        "assets/aphavillecozinha.png",
        "assets/aplhavillebanheiro.png"
      ],
      nomes: [
        "Fachada premium",
        "Piscina privativa",
        "Suíte master",
        "Cozinha gourmet",
        "Banheiro sofisticado"
      ],
      info: [
        ["Área", "560m²"],
        ["Suítes", "5 suítes"],
        ["Vagas", "6 vagas"],
        ["Lazer", "Piscina privativa"],
        ["Condomínio", "Fechado"],
        ["Diferencial", "Automação"]
      ],
      coords: [-3.8260, -38.4640]
    },

    meireles: {
      titulo: "Apartamento Meireles",
      local: "Meireles, Fortaleza - CE",
      preco: "R$ 4.980.000",
      capa: "assets/apartamentomeireles.png",
      fotos: [
        "assets/apartamentomeireles.png",
        "assets/meirelesvaranda.png",
        "assets/meirelessuite.png",
        "assets/meirelessaladeestar.png",
        "assets/meirelesbanheiro.png"
      ],
      nomes: [
        "Vista principal",
        "Varanda vista mar",
        "Suíte master",
        "Sala de estar",
        "Banheiro premium"
      ],
      info: [
        ["Área", "280m²"],
        ["Suítes", "4 suítes"],
        ["Vagas", "4 vagas"],
        ["Vista", "Mar"],
        ["Localização", "Meireles"],
        ["Diferencial", "Andar alto"]
      ],
      coords: [-3.7280, -38.4970]
    },

    porto: {
      titulo: "Mansão no Porto das Dunas",
      local: "Porto das Dunas, Aquiraz - CE",
      preco: "R$ 12.900.000",
      capa: "assets/praiadunas.png",
      fotos: [
        "assets/praiadunas.png",
        "assets/dunassuite.png",
        "assets/dunassala.png",
        "assets/dunasbanheiro.png"
      ],
      nomes: [
        "Fachada oceânica",
        "Suíte master",
        "Sala ampla",
        "Banheiro premium"
      ],
      info: [
        ["Área", "780m²"],
        ["Suítes", "6 suítes"],
        ["Vagas", "8 vagas"],
        ["Piscina", "Infinity"],
        ["Vista", "Oceânica"],
        ["Projeto", "Assinado"]
      ],
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

    if (detailHeroImage) {
      detailHeroImage.src = imovel.capa;
      detailHeroImage.alt = imovel.titulo;
    }

    if (detailTitle) detailTitle.textContent = imovel.titulo;
    if (detailLocation) detailLocation.textContent = imovel.local;
    if (detailPrice) detailPrice.textContent = imovel.preco;

    if (detailGallery) {
      detailGallery.innerHTML = "";

      imovel.fotos.forEach(function (foto, index) {
        const item = document.createElement("div");
        item.className = "gallery-card" + (index === 0 ? " large" : "");

        item.innerHTML =
          '<img src="' + foto + '" alt="' + imovel.nomes[index] + '" loading="lazy">' +
          '<div class="gallery-label">' + imovel.nomes[index] + '</div>';

        item.style.cursor = "pointer";
        item.addEventListener("click", function () {
          abrirLightbox(index);
        });

        detailGallery.appendChild(item);
      });
    }

    if (detailInfoGrid) {
      detailInfoGrid.innerHTML = "";

      imovel.info.forEach(function (info) {
        const card = document.createElement("div");
        card.className = "detail-info-card";

        card.innerHTML =
          '<div class="info-icon">✦</div>' +
          '<h4>' + info[0] + '</h4>' +
          '<p>' + info[1] + '</p>';

        detailInfoGrid.appendChild(card);
      });
    }

    if (detailMapInfo) {
      detailMapInfo.innerHTML =
        '<div class="map-point"><h4>Endereço premium</h4><p>' + imovel.local + '</p></div>' +
        '<div class="map-point"><h4>Visita exclusiva</h4><p>Agendamento sob consulta</p></div>' +
        '<div class="map-point"><h4>Atendimento</h4><p>Consultor dedicado NobleHaus</p></div>';
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

  $$(".view-details").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      abrirDetalhes(btn.dataset.property);
    });
  });

  if (closePropertyModal) {
    closePropertyModal.addEventListener("click", fecharDetalhes);
  }

  if (propertyBg) {
    propertyBg.addEventListener("click", fecharDetalhes);
  }

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

    if (!propertyModal || !propertyModal.classList.contains("open")) {
      body.classList.remove("modal-open");
    }
  }

  function trocarFoto(delta) {
    if (!galeriaAtual.length || !lightboxImage) return;

    fotoAtual = (fotoAtual + delta + galeriaAtual.length) % galeriaAtual.length;
    lightboxImage.src = galeriaAtual[fotoAtual];
  }

  if (closeLightbox) closeLightbox.addEventListener("click", fecharLightbox);
  if (lightboxBg) lightboxBg.addEventListener("click", fecharLightbox);
  if (prevLightbox) prevLightbox.addEventListener("click", function () { trocarFoto(-1); });
  if (nextLightbox) nextLightbox.addEventListener("click", function () { trocarFoto(1); });

  const tourModal = $("#tourModal");
  const tourVideo = $("#tourVideo");
  const openTour = $("#openTour");
  const closeTour = $("#closeTour");
  const modalBg = $(".modal-bg");
  const detailTourPlay = $(".detail-tour-play");

  function abrirTour(e) {
    if (e) e.preventDefault();
    if (!tourModal) return;

    tourModal.classList.add("open");
    tourModal.style.display = "flex";
    body.classList.add("modal-open");

    if (tourVideo) {
      tourVideo.currentTime = 0;
      tourVideo.play().catch(function () {});
    }
  }

  function fecharTour() {
    if (!tourModal) return;

    tourModal.classList.remove("open");
    tourModal.style.display = "none";

    if (tourVideo) {
      tourVideo.pause();
      tourVideo.currentTime = 0;
    }

    if (!propertyModal || !propertyModal.classList.contains("open")) {
      body.classList.remove("modal-open");
    }
  }

  if (openTour) openTour.addEventListener("click", abrirTour);
  if (detailTourPlay) detailTourPlay.addEventListener("click", abrirTour);
  if (closeTour) closeTour.addEventListener("click", fecharTour);
  if (modalBg) modalBg.addEventListener("click", fecharTour);

  function colocarEstiloMapa() {
    if ($("#mapStyleFix")) return;

    const style = document.createElement("style");
    style.id = "mapStyleFix";
    style.innerHTML =
      '.gold-pin-dot{' +
      'width:18px;height:18px;border-radius:50%;background:#d4af37;border:3px solid #fff;' +
      'box-shadow:0 0 0 8px rgba(212,175,55,.18),0 12px 28px rgba(0,0,0,.25);' +
      'animation:pulseGold 2s infinite;' +
      '}' +
      '@keyframes pulseGold{0%{box-shadow:0 0 0 0 rgba(212,175,55,.35)}70%{box-shadow:0 0 0 18px rgba(212,175,55,0)}100%{box-shadow:0 0 0 0 rgba(212,175,55,0)}}';

    document.head.appendChild(style);
  }

  function iniciarMapa() {
    const mapEl = $("#map");
    const hoodList = $("#hoodList");

    if (!mapEl || !hoodList || !window.L) return;

    colocarEstiloMapa();

    const bairros = [
      { name: "Meireles", coords: [-3.7280, -38.4970] },
      { name: "Aldeota", coords: [-3.7400, -38.5050] },
      { name: "Cocó", coords: [-3.7530, -38.4830] },
      { name: "Guararapes", coords: [-3.7560, -38.4920] },
      { name: "Alphaville Fortaleza", coords: [-3.8260, -38.4640] },
      { name: "Porto das Dunas", coords: [-3.8330, -38.3950] }
    ];

    const map = L.map("map", {
      scrollWheelZoom: false,
      zoomControl: true
    }).setView([-3.78, -38.48], 11);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    const icon = L.divIcon({
      className: "gold-pin",
      html: '<div class="gold-pin-dot"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    hoodList.innerHTML = "";

    bairros.forEach(function (bairro) {
      const marker = L.marker(bairro.coords, { icon: icon })
        .addTo(map)
        .bindPopup("<strong>" + bairro.name + "</strong>");

      const li = document.createElement("li");
      li.innerHTML = '<span class="hood-name">' + bairro.name + '</span>';

      li.addEventListener("click", function () {
        map.flyTo(bairro.coords, 13, { duration: 0.8 });
        setTimeout(function () {
          marker.openPopup();
        }, 500);
      });

      hoodList.appendChild(li);
    });

    setTimeout(function () {
      map.invalidateSize();
    }, 300);
  }

  function iniciarMapaDetalhe(coords) {
    const detailMapEl = $("#detailMap");

    if (!detailMapEl || !window.L || !coords) return;

    colocarEstiloMapa();

    setTimeout(function () {
      const icon = L.divIcon({
        className: "gold-pin",
        html: '<div class="gold-pin-dot"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      if (!detailMap) {
        detailMap = L.map("detailMap", {
          scrollWheelZoom: false,
          zoomControl: false
        }).setView(coords, 13);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution: "© OpenStreetMap"
        }).addTo(detailMap);

        detailMarker = L.marker(coords, { icon: icon }).addTo(detailMap);
      } else {
        detailMap.setView(coords, 13);
        if (detailMarker) detailMarker.setLatLng(coords);
      }

      detailMap.invalidateSize();
    }, 300);
  }

  iniciarMapa();

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;

    if (galleryLightbox && galleryLightbox.classList.contains("open")) {
      fecharLightbox();
      return;
    }

    if (tourModal && tourModal.classList.contains("open")) {
      fecharTour();
      return;
    }

    if (propertyModal && propertyModal.classList.contains("open")) {
      fecharDetalhes();
    }
  });

  // Lottie Animation for Back to Top
  if (document.getElementById("backTopLottie")) {
    lottie.loadAnimation({
      container: document.getElementById("backTopLottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "assets/backtop.json"
    });
  }
});