const cardapioDiv = document.getElementById("cardapio");
const abaBtns = document.querySelectorAll(".aba-btn");

// Array de produtos
const produtos = [
  { id: 1, categoria: "Lanches", nome: "X-Burger", preco: 15, imagem: "imagens/xb.jpg" },
  { id: 2, categoria: "Lanches", nome: "X-Salada", preco: 17, imagem: "imagens/xsalada.jpg" },
  { id: 3, categoria: "Lanches", nome: "Cheddar Bacon", preco: 20, imagem: "imagens/cheddar.jpg" },
  { id: 4, categoria: "Bebidas", nome: "Refrigerante", preco: 5, imagem: "imagens/refri.jpg" },
  { id: 5, categoria: "Bebidas", nome: "Suco Natural", preco: 6, imagem: "imagens/suco.jpg" },
  { id: 6, categoria: "Sobremesas", nome: "Sorvete", preco: 8, imagem: "imagens/sorvete.jpg" }
];

// Mostrar produtos de uma categoria
function mostrarCategoria(categoria) {
  cardapioDiv.innerHTML = "";
  produtos.filter(p => p.categoria === categoria).forEach(prod => {
    const prodDiv = document.createElement("div");
    prodDiv.className = "produto";
    prodDiv.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <span class="nome-produto">${prod.nome}</span>
      <span class="preco-produto">R$${prod.preco}</span>
      <button onclick="pedirWhatsApp('${prod.nome}', ${prod.preco})">Pedir</button>
    `;
    cardapioDiv.appendChild(prodDiv);
  });
}

// Função WhatsApp
function pedirWhatsApp(produto, preco) {
  const numero = "5511999999999"; // Coloque aqui o WhatsApp da lancheria
  const texto = `Olá! Quero pedir: ${produto} - R$${preco}`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
}

// Inicializa mostrando Lanches
mostrarCategoria("Lanches");

// Troca de abas
abaBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    abaBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mostrarCategoria(btn.dataset.categoria);
  });
});
