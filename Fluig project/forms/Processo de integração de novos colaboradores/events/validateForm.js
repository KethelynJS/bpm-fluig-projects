function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 13) {
        console.log("Validando atividade 13");
        validateActivity13(form)
    } else if (atv_atual == 16) {
        console.log("Validando atividade 16");
        validateActivity16(form)
    } else if (atv_atual == 18) {
        console.log("Validando atividade 18");
        validateActivity18(form)
        
}


function validateActivity4(form) {
    var msg = "";

    if (form.getValue("novo_colaborador") == "") {
        msg += "Campo específico novo colaborador não foi preenchido\n";
    }
    
    if (form.getValue("setor_atuante") == "") {
        msg += "Campo específico setor não foi preenchido\n";
    }
    
    if (form.getValue("funcao") == "") {
        msg += "Campo específico função não foi preenchido\n";
    }
    
    if (form.getValue("acionar_ti") == "") {
        msg += "Campo específico TI não foi preenchido\n";
    }
    if (form.getValue("n_matricula") == "") {
        msg += "Campo número de matrícula não foi preenchido\n";
    }
    if (form.getValue("hor_trabalho") == "") {
        msg += "Campo horário não foi preenchido\n";
    }
    if (form.getValue("opcao") == "") {
        msg += "Campo opcao não foi preenchido\n";
    }
    if (form.getValue("data_nascimento") == "") {
        msg += "Campo data de nascimento não foi preenchido\n";
    }
    if (form.getValue("email_pessoal") == "") {
        msg += "Campo email não foi preenchido\n";
    }
    if (form.getValue("celular") == "") {
        msg += "Campo celular não foi preenchido\n";
    }
    if (form.getValue("estado_civil") == "") {
        msg += "Campo estado civil não foi preenchido\n";
    }
    if (form.getValue("plano_saude") == "") {
        msg += "Campo plano de saúde não foi preenchido\n";
    }
    if (form.getValue("alergia") == "") {
        msg += "Campo alergia não foi preenchido\n";
    }
    if (form.getValue("contato_emergencia") == "") {
        msg += "Campo contato de emergencia não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}
}

function validateActivity13(form) {
    var msg = "";

    if (form.getValue("pergunta1") == "") {
        msg += "Campo específico pergunta 1 não foi preenchido\n";
    }
    
    if (form.getValue("pergunta2") == "") {
        msg += "Campo específico pergunta 2 não foi preenchido\n";
    }
    if (form.getValue("pergunta3") == "") {
        msg += "Campo específico pergunta 3 não foi preenchido\n";
    }
    if (form.getValue("pergunta4") == "") {
        msg += "Campo específico pergunta 4 não foi preenchido\n";
    }
    if (form.getValue("pergunta5") == "") {
        msg += "Campo específico pergunta 5 não foi preenchido\n";
    }
    if (form.getValue("pergunta6") == "") {
        msg += "Campo específico pergunta 6 não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 13: " + msg);
        throw msg;
    }
}

function validateActivity16(form) {
    var msg = "";

    if (form.getValue("questao1") == "") {
        msg += "Campo específico pergunta 1 não foi preenchido\n";
    }
    
    if (form.getValue("questao2") == "") {
        msg += "Campo específico pergunta 2 não foi preenchido\n";
    }
    if (form.getValue("questao3") == "") {
        msg += "Campo específico pergunta 3 não foi preenchido\n";
    }
    if (form.getValue("questao4") == "") {
        msg += "Campo específico pergunta 4 não foi preenchido\n";
    }
    if (form.getValue("questao5") == "") {
        msg += "Campo específico pergunta 5 não foi preenchido\n";
    }
    if (form.getValue("questao6") == "") {
        msg += "Campo específico pergunta 6 não foi preenchido\n";
    }
    if (form.getValue("questao7") == "") {
        msg += "Campo específico pergunta 7 não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 16: " + msg);
        throw msg;
    }
}

function validateActivity18(form) {
    var msg = "";

    if (form.getValue("questaoA1") == "") {
        msg += "Campo específico pergunta 1 não foi preenchido\n";
    }
    
    if (form.getValue("questaoA2") == "") {
        msg += "Campo específico pergunta 2 não foi preenchido\n";
    }
    if (form.getValue("questaoA4") == "") {
        msg += "Campo específico pergunta 3 não foi preenchido\n";
    }
   

    if (msg !== "") {
        console.log("Erros na Atividade 18: " + msg);
        throw msg;
    }
}