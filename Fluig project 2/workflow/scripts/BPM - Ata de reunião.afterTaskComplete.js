function afterTaskComplete(colleagueId, nextSequenceId, userList) {
    var emails = [
        "suporteti@newprov.com.br",
        "email2@dominio.com",
        "email3@dominio.com"
    ];
    
    var subject = "Formulário preenchido no Fluig";
    var message = "O formulário foi concluído. Por favor, verifique os detalhes no sistema.";

    for (var i = 0; i < emails.length; i++) {
        var destinatario = emails[i];
        
        // Envio de e-mail diretamente sem usar o template do Fluig
        try {
            var parametros = new java.util.HashMap();
            parametros.put("subject", subject);
            parametros.put("message", message);
            parametros.put("to", destinatario);

            // Envia o e-mail usando a função de envio direto
            hAPI.sendEmail("suporteti@newprov.com.br", "Assunto teste", "Corpo da mensagem de teste");
        } catch (e) {
            log.error("Erro ao enviar e-mail para: " + destinatario + " - " + e);
        }
    }
}
