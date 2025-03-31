function displayFields(form, customHTML) {
	var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
    var atv_atual = getValue("WKNumState");
var returnFromActivity55 = form.getValue("returnFromActivity55");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 62: " + returnFromActivity55);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("validacao_anexoo", atv_atual == 4 && returnFromActivity55 == 'true');
        
        form.setVisibleById("panelcqfq1", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity55", 'true');
        }
	
	else if(atv_atual == 5){
		form.setVisibleById("panelcqfq1", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
		
	}

    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Ocultar outros painéis
        form.setVisibleById("panelalmox", false);
        form.setVisibleById("panelcqfq1", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        
        }
    

    // Atividade 62
    else if (atv_atual == 62) {
       
        // Ocultar outros painéis
        form.setVisibleById("panelalmox", false);
        form.setVisibleById("panelcqfq1", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setValue("returnFromActivity55", 'true');
    }



    
	else if(atv_atual == 15){
		form.setVisibleById("validacao_anexoo", false);
		form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
	}
	
    
	else if(atv_atual == 19){
		
		form.setVisibleById("panelcqfq2", false);
		form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
		}
	    
	else if(atv_atual == 21){
		form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
	    
	else if(atv_atual == 25){
        form.setVisibleById("panelpcp", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
	else if(atv_atual == 30){
		form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
	else if(atv_atual == 51){
		form.setVisibleById("panelcomprasNotify", false);
        form.setVisibleById("panelproducao", false);
        form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
	else if(atv_atual == 33){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
		}
    
	else if(atv_atual == 53){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcqfq3", false);
        form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
		}
	    
	else if(atv_atual == 36){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcqm2", false);
		form.setVisibleById("panelcqm1", false);
        form.setVisibleById("panelcqfq2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
	else if(atv_atual == 55){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcqm2", false);
        form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
else if(atv_atual == 45){
	form.setVisibleById("panelcomprasNotify", false);
	form.setVisibleById("validacao_anexoo", false);
	}
    
else if(atv_atual == 58){
	form.setVisibleById("panelcomprasNotify", false);
	form.setVisibleById("panelcqfqqualify", false);
	form.setVisibleById("panelcqm2", false);
	form.setVisibleById("validacao_anexoo", false);
}
	    
	else if(atv_atual == 40){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcqfqqualify", false);
        form.setVisibleById("panelcomprasnotify2", false);
        form.setVisibleById("validacao_anexoo", false);
	}
    
	else if(atv_atual == 42){
		form.setVisibleById("panelcomprasNotify", false);
		form.setVisibleById("panelcomprasnotify2", false);
		
	}
}