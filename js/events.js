// js/events.js
// Menu mobile robusto: toggle, acessibilidade e fechar ao clicar fora

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  if (!menuToggle) {
    console.warn("menuToggle não encontrado (id='menu-toggle'). Verifique o HTML.");
    return;
  }
  if (!menu) {
    console.warn("menu (class='menu') não encontrado. Verifique o HTML.");
    return;
  }

  // Acessibilidade: aria attributes
  menuToggle.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");

  const abrirMenu = () => {
    menu.classList.add("ativo");
    menuToggle.classList.add("ativo");
    menuToggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };

  const fecharMenu = () => {
    menu.classList.remove("ativo");
    menuToggle.classList.remove("ativo");
    menuToggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };

  // Toggle ao clicar no botão
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que o clique suba e acione o listener global
    if (menu.classList.contains("ativo")) fecharMenu();
    else abrirMenu();
  });

  // Fecha o menu se clicar fora (útil em mobile)
  document.addEventListener("click", (e) => {
    // se menu aberto e clique fora do menu e fora do botão, fecha
    if (menu.classList.contains("ativo")) {
      const alvo = e.target;
      if (!menu.contains(alvo) && alvo !== menuToggle) {
        fecharMenu();
      }
    }
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("ativo")) {
      fecharMenu();
    }
  });

  // Opcional: fechar ao clicar em um link do menu (bom em SPA)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      // só fecha em telas pequenas — evita fechar no desktop caso o menu esteja horizontal
      if (window.innerWidth <= 768) fecharMenu();
    });
  });
});

// ========== POPUP AO ENTRAR NO SITE ==========
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const btnClose = document.getElementById("close-popup");

  // mostra o popup 0.5s após entrar no site
  setTimeout(() => {
    popup.classList.add("ativo");
  }, 500);

  // botão fechar
  btnClose.addEventListener("click", () => {
    popup.classList.remove("ativo");
  });

  // fechar clicando fora da caixa
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("ativo");
    }
  });
});
