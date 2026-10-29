const produtos = [
  { nome: "Fossora", preco: 259 },
  { nome: "Utopia", preco: 249 },
  { nome: "Vulnicura", preco: 229 },
  { nome: "Biophilia", preco: 229 },
  { nome: "Volta", preco: 219 },
  { nome: "Vespertine", preco: 219 },
  { nome: "Selmasongs", preco: 199 },
  { nome: "Homogenic", preco: 199 },
  { nome: "Post", preco: 199 },
  { nome: "Debut", preco: 189 },
];

function simularCompra() {
  let resumo = "Resumo da compra\n\n";
  let total = 0;

  for (const produto of produtos) {
    const qtd = Number(prompt("Quantos vinis " + produto.nome + " (" + formatar(produto.preco) + ")? Digite 0 para nenhum."));

    if (!Number.isInteger(qtd) || qtd < 0) {
      alert("Quantidade inválida. Digite apenas números inteiros (0 ou mais).");
      return;
    }

    const valor = produto.preco * qtd;
    resumo += produto.nome + ": " + qtd + " un. = " + formatar(valor) + "\n";
    total += valor;
  }

  if (total === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  alert(resumo + "\nTotal: " + formatar(total));
}

function formatar(valor) {
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
