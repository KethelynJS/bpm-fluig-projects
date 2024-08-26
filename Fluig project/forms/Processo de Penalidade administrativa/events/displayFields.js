function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	
	log.info("atv_atual: " + atv_atual);
    
    
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("painelwarning2", false);
    }

	
	else if(atv_atual == 4){
		form.setVisibleById("painelwarning2", false);
	}

	
	

//Script para preencher a data apenas se estiver vazio
customHTML.append("<script>");
customHTML.append("$(document).ready(function() {");
customHTML.append("console.log('Script para preencher data carregado');");

customHTML.append("if ($('#datacalendario').length && $('#datacalendario').val() === '') {");
customHTML.append("var today = new Date();");
customHTML.append("var day = ('0' + today.getDate()).slice(-2);");
customHTML.append("var month = ('0' + (today.getMonth() + 1)).slice(-2);");
customHTML.append("var year = today.getFullYear();");
customHTML.append("var formattedDate = day + '/' + month + '/' + year;");
customHTML.append("$('#datacalendario').val(formattedDate);");
customHTML.append("}");

customHTML.append("});");
customHTML.append("</script>");
}