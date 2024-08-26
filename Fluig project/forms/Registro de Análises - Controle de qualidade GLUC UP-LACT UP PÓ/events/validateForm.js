function validateForm(form){
	var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("opcao7") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("lote") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("Resp") == "") {
        msg += "Campo Resp não foi preenchido\n";
    }
    if (form.getValue("dosagem") == "") {
        msg += "Campo dosagem não foi preenchido\n";
    }
    if (form.getValue("prioridade") == "") {
        msg += "Campo validação não foi preenchido\n";
    }
    if (form.getValue("aprovado") == "") {
        msg += "Campo validação não foi preenchido\n";
    }
    if (form.getValue("Respp1") == "") {
        msg += "Campo resp não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }

}