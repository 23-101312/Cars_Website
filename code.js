window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const navWrapper = document.getElementById('navWrapper');

  if (burgerMenu && navWrapper) {
    burgerMenu.addEventListener('click', () => {
      navWrapper.classList.toggle('nav_active');
    });

    navWrapper.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navWrapper.classList.remove('nav_active');
      });
    });
  }

  const filterButtons = document.querySelectorAll('.filter_btn');
  const modelCards = document.querySelectorAll('.model_card');

  if (filterButtons.length > 0) {
    modelCards.forEach(card => {
      const cardCategories = card.getAttribute('data-category');
      if (cardCategories) card.style.display = 'none';
    });

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');

        modelCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category');
          if (category === 'all') {
            card.style.display = !cardCategories ? 'block' : 'none';
          } else {
            card.style.display = (cardCategories && cardCategories.includes(category)) ? 'block' : 'none';
          }
        });
      });
    });
  }

  if (!document.body.classList.contains('product_page')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const modelId = urlParams.get('model') || 'porsche_911_gt3';

  const MODELS = {
    'porsche_911_gt3': {
      name: "Porsche 911 GT3",
      price: "$29,900",
      path: "assets/porsche_911_gt3.glb",
      colors: {
        white: "#D0D0D0",
        black: "#000000",
        red: "#C10801",
        blue: "#00040D"
      },
      defaultColor: 'red',
      defaultWheel: 1,
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["paint_material", "paint"],
        interior: ["interior", "seat", "cage", "belt"],
        wheels: ["wheel", "rim"]
      },
      cameraViews: {
        full: { orbit: "90deg 85deg 0.9m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 0.9m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 1.5m", fov: "40deg" }
      }
    },
    '2019_mclaren_senna': {
      name: "McLaren Senna",
      price: "$1,000,000",
      path: "assets/2019_mclaren_senna.glb",
      colors: {
        white: "#C5BFBF",
        black: "#000000",
        red: "#B30000",
        blue: "#00040D"
      },
      defaultColor: 'black',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["2019_mclaren_senna_ext_black", "paint"],
        interior: ["2019_mclaren_senna_cab", "interior"],
        wheels: ["2019_mclaren_senna_wheel", "rim", "car_tyre_tread"]
      },
      cameraViews: {
        full: { orbit: "90deg 85deg 18m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 15m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 15m", fov: "45deg" }
      }
    },
    '2024_byd_seal_06_gt': {
      name: "BYD Seal 06 GT",
      price: "$45,000",
      path: "assets/2024_byd_seal_06_gt.glb",
      colors: {
        white: "#D0D0D0",
        black: "#000000",
        red: "#AA0000",
        blue: "#1E3120"
      },
      defaultColor: 'blue',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["bMAT_HaiBao06GT_CarPaint_025", "CarPaint"],
        interior: ["bMAT_Details_INT1", "interior"],
        wheels: ["bMAT_Tire_Hub1", "rim", "tire", "wheel"]
      },
      cameraViews: {
        full: { orbit: "90deg 85deg 30m", fov: "23deg" },
        wheel: { orbit: "35deg 85deg 15m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 15m", fov: "45deg" }
      }
    },
    '2015_bugatti_atlantic_concept': {
      name: "Bugatti Atlantic Concept",
      price: "$2,500,000",
      path: "assets/2015_bugatti_atlantic_-_concept_car.glb",
      colors: {
        white: "#D0D0D0",
        black: "#000000",
        red: "#B30000",
        blue: "#00040D"
      },
      defaultColor: 'black',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["Bugatti_AtlanticConcept_2015Paint_Material"],
        interior: ["Bugatti_AtlanticConcept_2015Interior_Material"],
        wheels: ["Bugatti_AtlanticConcept_2015_Wheel1A_3D_3DWheel1A_Material"]
      },
      cameraViews: {
        full: { orbit: "91.18deg 87.24deg 30m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 15m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 15m", fov: "45deg" }
      }
    },
    '2019_mclaren_600lt': {
      name: "McLaren 600LT",
      price: "$250,000",
      path: "assets/2019_mclaren_600lt.glb",
      colors: {
        white: "#D4D4D4",
        black: "#000000",
        red: "#B30000",
        blue: "#D86612"
      },
      defaultColor: 'blue',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["2019_mclaren_600lt_ext_orange"],
        interior: ["2019_mclaren_600lt_cab"],
        wheels: ["2019_mclaren_600lt_wheel", "car_tyre_tread"]
      },
      cameraViews: {
        full: { orbit: "95.53deg 86.45deg 20m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 15m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 15m", fov: "45deg" }
      }
    },
    '2022_mercedes_amg_sl63': {
      name: "Mercedes-AMG SL63",
      price: "$180,000",
      path: "assets/2022_mercedes-benz_amg_sl63.glb",
      colors: {
        white: "#A0A0A0",
        black: "#000000",
        red: "#7A0000",
        blue: "#4A4A4A"
      },
      defaultColor: 'blue',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["2022_Mercedes-AMG_SL63_Selenite_Grey"],
        interior: ["2022_Mercedes-AMG_SL63_alck10__sec_spec"],
        wheels: ["2022_Mercedes-AMG_SL63_vehicle_generic_tyrewallblack__spec"]
      },
      cameraViews: {
        full: { orbit: "93.55deg 78.55deg 24.71m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 25m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 25m", fov: "50deg" }
      }
    },
    '2022_byd_song_plus_ev': {
      name: "BYD Song Plus EV",
      price: "$35,000",
      path: "assets/2022_byd_song_plus_ev.glb",
      colors: {
        white: "#D4D4D4",
        black: "#000000",
        red: "#B30000",
        blue: "#00040D"
      },
      defaultColor: 'red',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["CarPaint"],
        interior: ["Leather_Normal", "Interior_1"],
        wheels: ["tire"]
      },
      cameraViews: {
        full: { orbit: "93.16deg 78.95deg 9.721m", fov: "25deg" },
        wheel: { orbit: "35deg 85deg 10m", fov: "25deg" },
        interior: { orbit: "-45deg 80deg 10m", fov: "45deg" }
      }
    },
    '2021_ferrari_sf90_spider': {
      name: "Ferrari SF90 Spider",
      price: "$45,000",
      path: "assets/2021_ferrari_sf90_spider.glb",
      colors: {
        white: "#D4D4D4",
        black: "#000000",
        red: "#B30000",
        blue: "#4A4A4A"
      },
      defaultColor: 'blue',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["Ferrari_SF90SpiderRewardRecycled_2021Paint_Material"],
        interior: ["Ferrari_SF90SpiderRewardRecycled_2021InteriorA_Material"],
        wheels: ["Ferrari_SF90SpiderReward_2021_Wheel1A_3D_3DWheel1C_Material"]
      },
      cameraViews: {
        full: { orbit: "90deg 79.34deg 0.09523m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 1m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 1m", fov: "45deg" }
      }
    },
    '2014_varis_kamikaze_r_circuit_ver_nissan_gt_r': {
      name: "Nissan GT-R Varis Kamikaze-R",
      price: "$38,000",
      path: "assets/2014_varis_kamikaze-r_circuit_ver_nissan_gt-r.glb",
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: "#FF0000",
        blue: "#00040D"
      },
      defaultColor: 'black',
      interiorTextures: {
        "black": { path: "assets/interior1.png" },
        "beige": { path: "assets/interior2.png" },
        "white": { path: "assets/interior3.png" }
      },
      materialNames: {
        paint: ["baseM_CarPaint_Max1"],
        interior: ["baseM_Interior_Max1"],
        wheels: ["NNissan_GTRNismoNRewardRecycled_2017_Wheel1A_3D_3DWheel1_d95be4f1"]
      },
      cameraViews: {
        full: { orbit: "90deg 80deg 10m", fov: "20deg" },
        wheel: { orbit: "35deg 85deg 10m", fov: "20deg" },
        interior: { orbit: "-45deg 80deg 10m", fov: "45deg" }
      }
    }
  };

  const currentConfig = MODELS[modelId] || MODELS['porsche_911_gt3'];

  const modelViewer = document.querySelector('model-viewer');
  if (!modelViewer) return;

  modelViewer.src = currentConfig.path;

  const designModel = document.getElementById('design_model');
  if (designModel) {
    designModel.src = currentConfig.path;
  }

  const titleEl = document.querySelector('.product_hero_title');
  if (titleEl) titleEl.textContent = currentConfig.name.toUpperCase();

  const hexToRgba = (hex) => {
    hex = hex.replace(/^#/, '');

    let r, g, b, a = 1;

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16) / 255;
      g = parseInt(hex[1] + hex[1], 16) / 255;
      b = parseInt(hex[2] + hex[2], 16) / 255;
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16) / 255;
      g = parseInt(hex.substring(2, 4), 16) / 255;
      b = parseInt(hex.substring(4, 6), 16) / 255;
    } else if (hex.length === 8) {
      r = parseInt(hex.substring(0, 2), 16) / 255;
      g = parseInt(hex.substring(2, 4), 16) / 255;
      b = parseInt(hex.substring(4, 6), 16) / 255;
      a = parseInt(hex.substring(6, 8), 16) / 255;
    } else {
      return [1, 1, 1, 1];
    }
    return [r, g, b, a];
  };

  const findMaterials = (model, potentialNames) => {
    if (!model || !model.materials) return [];
    return model.materials.filter(mat => {
      const matName = (mat.name || "").toLowerCase();
      return potentialNames.some(name => matName.includes(name.toLowerCase()));
    });
  };

  const logMaterials = () => {
    if (modelViewer.model && modelViewer.model.materials) {
      console.log("Available Materials:", modelViewer.model.materials.map(m => m.name));
    }
  };

  const applyCameraView = (viewName) => {
    const view = currentConfig.cameraViews[viewName];
    if (view && modelViewer) {
      modelViewer.cameraOrbit = view.orbit;
      modelViewer.fieldOfView = view.fov;
    }
  };

  const applyWheelTexture = async (texturePath) => {
    if (!modelViewer.model) return;
    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.wheels);

    if (materials.length > 0) {
      try {
        const texture = await modelViewer.createTexture(texturePath);
        materials.forEach(material => {
          material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
          if (material.pbrMetallicRoughness.baseColorTexture) {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
          } else {
            material.pbrMetallicRoughness.baseColorTexture = { texture: texture };
          }
        });
      } catch (e) {
        console.error("Error loading wheel texture:", e);
      }
    } else {
      console.warn("Could not find wheel material.", currentConfig.materialNames.wheels);
    }
  };

  const applyExteriorColor = (colorId) => {
    if (!modelViewer.model) return;
    const colorHex = currentConfig.colors[colorId];
    if (!colorHex) return;

    const color = hexToRgba(colorHex);
    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.paint);

    if (materials.length > 0) {
      materials.forEach(material => {
        console.log("Applying color to material:", material.name);
        material.pbrMetallicRoughness.setBaseColorFactor(color);

        if (material.pbrMetallicRoughness.baseColorTexture) {
          material.pbrMetallicRoughness.baseColorTexture.setTexture(null);
        }
      });
    } else {
      console.warn("Could not find paint material:", currentConfig.materialNames.paint);
    }
  };

  const applyInteriorTexture = async (interiorId) => {
    if (!modelViewer.model) return;
    const config = currentConfig.interiorTextures[interiorId];
    if (!config) return;

    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.interior);

    if (materials.length > 0) {
      try {
        const texture = await modelViewer.createTexture(config.path);
        materials.forEach(material => {
          material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
          if (material.pbrMetallicRoughness.baseColorTexture) {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
          } else {
            material.pbrMetallicRoughness.baseColorTexture = { texture: texture };
          }
        });
      } catch (e) {
        console.error("Error loading interior texture:", e);
      }
    } else {
      console.warn("Could not find interior material:", currentConfig.materialNames.interior);
    }
  };

  if (currentConfig.defaultColor) {
    document.querySelectorAll(".product_option_body_colors .color_dot").forEach(btn => {
      btn.classList.remove("color_dot_active");
      if (btn.dataset.color === currentConfig.defaultColor) {
        btn.classList.add("color_dot_active");
      }
    });
  }

  if (currentConfig.defaultWheel !== undefined) {
    const wheelChips = document.querySelectorAll(".product_option_body_wheels .product_chip");
    wheelChips.forEach(btn => btn.classList.remove("product_chip_active"));
    if (wheelChips[currentConfig.defaultWheel]) {
      wheelChips[currentConfig.defaultWheel].classList.add("product_chip_active");
    }
  }

  const blueDot = document.querySelector('.color_dot[data-color="blue"]');
  if (blueDot && currentConfig.colors.blue && currentConfig.colors.blue !== "#00040D") {
    blueDot.style.background = currentConfig.colors.blue;
  }

  const applyWheelTextureToModel = async (modelViewer, texturePath) => {
    if (!modelViewer.model) return;
    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.wheels);
    if (materials.length > 0) {
      try {
        const texture = await modelViewer.createTexture(texturePath);
        materials.forEach(material => {
          material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
          if (material.pbrMetallicRoughness.baseColorTexture) {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
          } else {
            material.pbrMetallicRoughness.baseColorTexture = { texture: texture };
          }
        });
      } catch (e) {
        console.error("Error loading wheel texture:", e);
      }
    }
  };

  const applyExteriorColorToModel = (modelViewer, colorId) => {
    if (!modelViewer.model) return;
    const colorHex = currentConfig.colors[colorId];
    if (!colorHex) return;
    const color = hexToRgba(colorHex);
    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.paint);
    if (materials.length > 0) {
      materials.forEach(material => {
        material.pbrMetallicRoughness.setBaseColorFactor(color);
        if (material.pbrMetallicRoughness.baseColorTexture) {
          material.pbrMetallicRoughness.baseColorTexture.setTexture(null);
        }
      });
    }
  };

  const applyInteriorTextureToModel = async (modelViewer, interiorId) => {
    if (!modelViewer.model) return;
    const config = currentConfig.interiorTextures[interiorId];
    if (!config) return;
    const materials = findMaterials(modelViewer.model, currentConfig.materialNames.interior);
    if (materials.length > 0) {
      try {
        const texture = await modelViewer.createTexture(config.path);
        materials.forEach(material => {
          material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
          if (material.pbrMetallicRoughness.baseColorTexture) {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
          } else {
            material.pbrMetallicRoughness.baseColorTexture = { texture: texture };
          }
        });
      } catch (e) {
        console.error("Error loading interior texture:", e);
      }
    }
  };

  document.querySelectorAll(".product_option_body_wheels .product_chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".product_option_body_wheels .product_chip").forEach(b => b.classList.remove("product_chip_active"));
      btn.classList.add("product_chip_active");

      const texture = btn.dataset.wheelTexture;
      if (texture) {
        applyWheelTexture(texture);
        if (designModel) applyWheelTextureToModel(designModel, texture);
      }
      applyCameraView('wheel');
    });
  });

  document.querySelectorAll(".product_option_body_colors .color_dot").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".product_option_body_colors .color_dot").forEach(b => b.classList.remove("color_dot_active"));
      btn.classList.add("color_dot_active");

      const color = btn.dataset.color;
      if (color) {
        applyExteriorColor(color);
        if (designModel) applyExteriorColorToModel(designModel, color);
      }
      applyCameraView('full');
    });
  });

  document.querySelectorAll(".product_option_body_interior .product_chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".product_option_body_interior .product_chip").forEach(b => b.classList.remove("product_chip_active"));
      btn.classList.add("product_chip_active");

      const interiorId = btn.dataset.interior;
      if (interiorId) {
        applyInteriorTexture(interiorId);
        if (designModel) applyInteriorTextureToModel(designModel, interiorId);
      }
      applyCameraView('interior');
    });
  });

  modelViewer.addEventListener("load", () => {
    logMaterials();
    applyCameraView('full');

    const activeWheel = document.querySelector(".product_option_body_wheels .product_chip_active");
    if (activeWheel && activeWheel.dataset.wheelTexture) applyWheelTexture(activeWheel.dataset.wheelTexture);

    const activeColor = document.querySelector(".product_option_body_colors .color_dot_active");
    if (activeColor && activeColor.dataset.color) applyExteriorColor(activeColor.dataset.color);

    const activeInterior = document.querySelector(".product_option_body_interior .product_chip_active");
    if (activeInterior && activeInterior.dataset.interior) applyInteriorTexture(activeInterior.dataset.interior);
  });

  if (designModel) {
    designModel.addEventListener("load", () => {
      const activeWheel = document.querySelector(".product_option_body_wheels .product_chip_active");
      if (activeWheel && activeWheel.dataset.wheelTexture) applyWheelTextureToModel(designModel, activeWheel.dataset.wheelTexture);

      const activeColor = document.querySelector(".product_option_body_colors .color_dot_active");
      if (activeColor && activeColor.dataset.color) applyExteriorColorToModel(designModel, activeColor.dataset.color);

      const activeInterior = document.querySelector(".product_option_body_interior .product_chip_active");
      if (activeInterior && activeInterior.dataset.interior) applyInteriorTextureToModel(designModel, activeInterior.dataset.interior);
    });
  }
});

function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero_text', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.hero_car', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.4
  });

  gsap.utils.toArray('.section_header, .section_text, .models_header, .product_section_head').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  if (document.querySelector('.design_images')) {
    gsap.from('.design_image', {
      scrollTrigger: {
        trigger: '.design_images',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  if (document.querySelector('.innovation_content')) {
    gsap.from('.innovation_text', {
      scrollTrigger: {
        trigger: '.innovation_content',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -30,
      duration: 0.7,
      ease: 'power2.out'
    });

    gsap.from('.innovation_display', {
      scrollTrigger: {
        trigger: '.innovation_content',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: 30,
      duration: 0.7,
      ease: 'power2.out'
    });
  }

  if (document.querySelector('.stats_grid')) {
    gsap.from('.stat_item', {
      scrollTrigger: {
        trigger: '.stats_grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  if (document.querySelector('.sustainable_content')) {
    gsap.from('.sustainable_image', {
      scrollTrigger: {
        trigger: '.sustainable_content',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: 'power2.out'
    });

    gsap.from('.sustainable_text', {
      scrollTrigger: {
        trigger: '.sustainable_content',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: 40,
      duration: 0.7,
      ease: 'power2.out'
    });
  }

  if (document.querySelector('.footer')) {
    gsap.from('.footer', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  if (document.body.classList.contains('product_page')) {
    gsap.from('.product_hero_top', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.2
    });

    gsap.from('.product_hero_car', {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.4
    });

    gsap.from('.product_option_card', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.6
    });

    if (document.querySelector('.product_callouts')) {
      gsap.from('.product_callout', {
        scrollTrigger: {
          trigger: '.product_design_stage',
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(1.2)'
      });
    }

    if (document.querySelector('.product_pricing_grid')) {
      gsap.from('.price_card', {
        scrollTrigger: {
          trigger: '.product_pricing_grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out'
      });
    }

    if (document.querySelector('.product_feature_grid')) {
      gsap.from('.product_feature_img', {
        scrollTrigger: {
          trigger: '.product_feature_grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: 'power2.out'
      });

      gsap.from('.product_feature_text', {
        scrollTrigger: {
          trigger: '.product_feature_grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: 'power2.out'
      });
    }

    if (document.querySelector('.product_booking_grid')) {
      gsap.from('.product_booking_text', {
        scrollTrigger: {
          trigger: '.product_booking_grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out'
      });

      gsap.from('.product_booking_form_wrap', {
        scrollTrigger: {
          trigger: '.product_booking_grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 30,
        duration: 0.7,
        ease: 'power2.out'
      });
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGSAPAnimations);
} else {
  initGSAPAnimations();
}

