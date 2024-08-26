function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 5: " + returnFromActivity5);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panelwarning2", atv_atual == 4 && returnFromActivity5 == 'true');
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity5", 'true');
        }
	
	else if(atv_atual == 5){
		form.setVisibleById("panelwarning3", false);
		form.setVisibleById("panelwarning3", false);
		form.setVisibleById("documents", false);
		form.setValue("returnFromActivity5", 'true');
	}
	


// Script para preencher a data apenas se estiver vazio
customHTML.append("<script>");
customHTML.append("$(document).ready(function() {");
customHTML.append("console.log('Script para preencher data carregado');");

// Preencher datacalendario
customHTML.append("if ($('#datacalendario').length && $('#datacalendario').val() === '') {");
customHTML.append("var today = new Date();");
customHTML.append("var day = ('0' + today.getDate()).slice(-2);");
customHTML.append("var month = ('0' + (today.getMonth() + 1)).slice(-2);");
customHTML.append("var year = today.getFullYear();");
customHTML.append("var formattedDate = day + '/' + month + '/' + year;");
customHTML.append("$('#datacalendario').val(formattedDate);");
customHTML.append("}");

// Preencher datacalendario2
customHTML.append("if ($('#datacalendario2').length && $('#datacalendario2').val() === '') {");
customHTML.append("var today2 = new Date();");
customHTML.append("var day2 = ('0' + today2.getDate()).slice(-2);");
customHTML.append("var month2 = ('0' + (today2.getMonth() + 1)).slice(-2);");
customHTML.append("var year2 = today2.getFullYear();");
customHTML.append("var formattedDate2 = day2 + '/' + month2 + '/' + year2;");
customHTML.append("$('#datacalendario2').val(formattedDate2);");
customHTML.append("}");

customHTML.append("});");
customHTML.append("</script>");
}
