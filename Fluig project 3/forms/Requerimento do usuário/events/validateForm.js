function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 7) {
        console.log("Validando atividade 9");
        validateActivity7(form);
    } else if (atv_atual == 9) {
        console.log("Validando atividade 9");
        validateActivity9(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("respons_solic") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("desc_equipa") == "") {
        msg += "Campo estufa não foi preenchido\n";
    }
    if (form.getValue("consideracoes_finalidade") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("espaco_dispo") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("material") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("precisao") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("calibracao") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("qualificacao") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("certificado") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("purificado") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("utilizacao") == "") {
        msg += "Campo lote não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("detalhamento_tecnico") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("fornecedor_1") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("inf_instal") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("valor_cotacao_1") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity7(form) {
    var msg = "";

    if (form.getValue("autorizada") == "") {
        msg += "Campo resultado não foi preenchido\n";
    }
    if (form.getValue("pedido_sap") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("data_recebimento") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    
   
    

    if (msg !== "") {
        console.log("Erros na Atividade 9: " + msg);
        throw msg;
    }
}

function validateActivity9(form) {
    var msg = "";

    if (form.getValue("instalado_corretamente") == "") {
        msg += "Campo conforme ou não, não foi preenchido\n";
    }
    if (form.getValue("equipamento_cadastrado") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    
    if (form.getValue("calibracao_2") == "") {
        msg += "Campo aprovado não foi preenchido\n";
    }
    if (form.getValue("qualificacao_2") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("certificacao") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("manual_equipamento") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("modelo") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("treinados") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("liberacao_equipamento") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 11: " + msg);
        throw msg;
    }
}

