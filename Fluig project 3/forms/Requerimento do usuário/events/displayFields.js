function displayFields(form, customHTML) {
    var atv_atual = getValue("WKNumState"); // Obtém a atividade atual
    
    // Controle de visibilidade dos painéis
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
    } else if (atv_atual == 5) {
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
    } else if (atv_atual == 7) {
        form.setVisibleById("panel4", false);
    }
}



