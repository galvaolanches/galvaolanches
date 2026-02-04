function fazerPedido(produto) {
  fetch("https://backend-cardapio.onrender.com/pedido", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ produto })
  })
  .then(res => res.json())
  .then(data => alert(data.status))
  .catch(err => console.error(err));
}
