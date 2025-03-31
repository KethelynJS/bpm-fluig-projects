document.getElementById("prazo_atividade").addEventListener("change", function() {
    let dataISO = this.value; // Puxa no formato YYYY-MM-DD
    if (dataISO) {
        let partes = dataISO.split("-");
        let dataBrasileira = `${partes[2]}/${partes[1]}/${partes[0]}`;
        console.log("Data formatada para exibição: ", dataBrasileira);
    }
});
