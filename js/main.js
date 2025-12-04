
document.addEventListener("DOMContentLoaded", () => {
  initSabores();
});

async function initSabores() {
  const container = document.getElementById("lista-sabores") || document.querySelector(".cards-container");
  if (!container) {
    console.error("Container de sabores não encontrado: verifique se existe <div id='lista-sabores' class='cards-container'>");
    return;
  }

  const jsonPath = "./data/sabores.json"; 
  try {
    console.log("Buscando sabores em:", jsonPath);
    const res = await fetch(jsonPath, { cache: "no-store" });
    if (!res.ok) throw new Error(`Erro HTTP ${res.status} ao buscar ${jsonPath}`);
    const sabores = await res.json();
    if (!Array.isArray(sabores)) throw new Error("O JSON retornado não é um array.");

    
    sabores.forEach(sabor => {
      const wrapper = document.createElement("div");
      wrapper.className = "card-sabor";

      
    wrapper.innerHTML = `
  <div class="card">
    <img class="img-sabor" data-src="${sabor.imagem}" alt="${escapeHtml(sabor.nome)}">

    <div class="card-body">
      <h3>${escapeHtml(sabor.nome)}</h3>
      <p>${escapeHtml(sabor.descricao)}</p>
    </div>

    <div class="card-footer">
      <div class="preco">R$ ${Number(sabor.preco).toFixed(2)}</div>
      <button class="btn-comprar">Compre agora</button>
    </div>
  </div>
`;
      container.appendChild(wrapper);
    });

    
    initLazyLoad();
    initAnimacaoCards();

  } catch (err) {
    console.error("Falha ao carregar sabores:", err);
    container.innerHTML = "<p style='color:#fff'>Não foi possível carregar os sabores. Veja o console para detalhes.</p>";
  }
}


function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}


function initLazyLoad() {
  const imgs = document.querySelectorAll("img.img-sabor[data-src]");
  if (!imgs.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        img.src = img.dataset.src;
        
        img.removeAttribute("data-src");
        obs.unobserve(img);
      }
    });
  }, { root: null, threshold: 0.1 });

  imgs.forEach(i => io.observe(i));
}


function initAnimacaoCards() {
  const cards = document.querySelectorAll(".card-sabor");
  if (!cards.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => io.observe(c));
}



document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const btnFechar = document.getElementById("btn-fechar");

  
  const popupVisto = localStorage.getItem("popup_visto");

  if (!popupVisto) {
   
    popup.classList.add("ativo");
  }

  
  btnFechar.addEventListener("click", () => {
    popup.classList.remove("ativo");

    
    localStorage.setItem("popup_visto", "true");
  });
});

