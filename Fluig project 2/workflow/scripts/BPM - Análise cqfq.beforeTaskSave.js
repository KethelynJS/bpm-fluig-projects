function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    // Captura o número da solicitação
    var numSolicitacao = getValue("WKNumProces");

    // Verifica se o número da solicitação foi obtido
    if (numSolicitacao) {
        // Preenche o campo com o número da solicitação
        hAPI.setCardValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
}
