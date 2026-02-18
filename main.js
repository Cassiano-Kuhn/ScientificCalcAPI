document.getElementById("igual").addEventListener("click", async () => {
    const expressao = document.getElementById("valor").innerText;

    const resposta = await fetch("http://localhost:3000/calcular", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ expressao })
    });

    const dados = await resposta.json();

    document.getElementById("valor").innerText = dados.resultado;
});
