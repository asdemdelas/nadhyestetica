// Configurações editáveis
const WHATSAPP = "5575982790490";
const MSG_PADRAO = "Olá! Vim pelo site da Nadhy Estética e gostaria de agendar um horário.";

document.querySelectorAll("[data-wa]").forEach(a=>{
  const msg = a.dataset.msg || MSG_PADRAO;
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank"; a.rel = "noopener";
});

// Fotos: usa o arquivo de data-img se existir; senão mantém o degradê
document.querySelectorAll("[data-img]").forEach(el=>{
  const img = new Image();
  img.onload = ()=> el.style.backgroundImage = `url(${img.src})`;
  img.src = el.dataset.img;
});

// Menu mobile
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
btn.addEventListener("click",()=>{const o=menu.classList.toggle("aberto");btn.setAttribute("aria-expanded",o)});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("aberto");btn.setAttribute("aria-expanded",false)}));

// Animação ao rolar
const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.getElementById("ano").textContent = new Date().getFullYear();
