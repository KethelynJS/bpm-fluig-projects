function displayFields(form, customHTML) {
    var atv_atual = getValue("WKNumState");
var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 5: " + returnFromActivity5);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panelalmox", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("validacao_anexoo", false);
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
            form.setValue("returnFromActivity5", 'true');
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
		form.setValue("returnFromActivity5", 'true');
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