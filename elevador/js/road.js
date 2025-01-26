(function () {
  function criarFaixas() {
    const elementosFaixas = document.querySelectorAll("[faixas]");
    elementosFaixas.forEach((el) => {
      const quantidade = +el.getAttribute("faixas");
      for (let i = 0; i < quantidade; i++) {
        const faixa = document.createElement("div");
        faixa.classList.add("faixa");
        el.appendChild(faixa);
      }
    });
  }

  criarFaixas();
})();
