function validateForm(form){
	
	var msg="";
	
	/*solicitante*/
	if(form.getValue("solicitante") == ""){
		msg += "Campo solicitante não foi preenchido";
	}
	if(form.getValue("setor") == ""){
		msg += "Campo setor não foi preenchido";
	}
	if(form.getValue("produto") == ""){
		msg += "Campo produto não foi preenchido";
	}
	if(form.getValue("datacalendario") == ""){
		msg += "Campo data não foi preenchido";
	}
	
	/*motivo*/
	if(form.getValue("tipomotivo") == ""){
		msg += "Campo motivo não foi selecionado";
	}
	if(form.getValue("informacao") == ""){
		msg += "Campo informação não foi preenchido";
	}
	
	
	if (msg !=""){
		throw msg;
	}
		
}