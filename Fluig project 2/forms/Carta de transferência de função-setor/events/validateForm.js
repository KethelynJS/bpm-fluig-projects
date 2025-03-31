function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
}     else if (atv_atual == 11) {
        console.log("Validando atividade 11");
        validateActivity11(form);
}    else if (atv_atual == 13) {
        console.log("Validando atividade 13");
        validateActivity13(form);
}


function validateActivity(form) {
    var msg = "";

    if (form.getValue("colaborador") == "") {
        msg += "Campo específico colaborador não foi preenchido\n";
    }
    
    if (form.getValue("funcao_atual") == "") {
        msg += "Campo específico função atual não foi preenchido\n";
    }
    
    if (form.getValue("setor_atual") == "") {
        msg += "Campo específico setor atual não foi preenchido\n";
    }
    if (form.getValue("funcao_nova") == "") {
        msg += "Campo específico função nova não foi preenchido\n";
    }
    if (form.getValue("setor_novo") == "") {
        msg += "Campo específico setor novo não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}


function validateActivity5(form) {
    var msg = "";

    if (form.getValue("validacao") == "") {
        msg += "Campo específico validação não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
    
}
    function validateActivity11(form) {
        var msg = "";

        if (form.getValue("exame_medico") == "") {
            msg += "Campo específico exame não foi preenchido\n";
        }
        
        if (form.getValue("dados_contabilidade") == "") {
            msg += "Campo específico dados não foi preenchido\n";
        }
        
        if (form.getValue("horario_dia") == "") {
            msg += "Campo específico horario e dia não foi preenchido\n";
        }

        if (msg !== "") {
            console.log("Erros na Atividade 11: " + msg);
            throw msg;
        }
    }
    
    function validateActivity13(form) {
        var msg = "";

        if (form.getValue("contabilidade") == "") {
            msg += "Campo específico contabilidade não foi preenchido\n";
        }
        
        
        if (msg !== "") {
            console.log("Erros na Atividade 13: " + msg);
            throw msg;
        }
    }
}


