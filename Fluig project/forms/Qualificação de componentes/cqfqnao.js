document.addEventListener('DOMContentLoaded', function() {
    // Função para mostrar/ocultar campos adicionais com base na seleção do rádio (primeira etapa)
    function toggleCamposAdicionais() {
        var analiseMicroN = document.getElementById('analiseMicroN').checked;
        var camposAdicionais = document.getElementById('camposAdicionais');
        camposAdicionais.style.display = analiseMicroN ? 'block' : 'none';
        localStorage.setItem('analiseMicroN', analiseMicroN); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campo de motivo com base na seleção do rádio (primeira etapa)
    function toggleMotivoLotePiloto() {
        var lotePilotoS = document.getElementById('lotePilotoS').checked;
        var motivoLotePiloto = document.getElementById('motivoLotePiloto');
        motivoLotePiloto.style.display = lotePilotoS ? 'block' : 'none';
        localStorage.setItem('lotePilotoS', lotePilotoS); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campos de qualificação com base na seleção do rádio (primeira etapa)
    function toggleQualificacaoCampos() {
        var lotePilotoN = document.getElementById('lotePilotoN').checked;
        var qualificacaoCampos = document.getElementById('qualificacaoCampos');
        qualificacaoCampos.style.display = lotePilotoN ? 'block' : 'none';
        localStorage.setItem('lotePilotoN', lotePilotoN); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campos adicionais com base na seleção do rádio (nova etapa)
    function toggleCamposAdicionais2() {
        var analiseAdicionalN = document.getElementById('analiseAdicionalN').checked;
        var camposAdicionais2 = document.getElementById('camposAdicionais2');
        camposAdicionais2.style.display = analiseAdicionalN ? 'block' : 'none';
        localStorage.setItem('analiseAdicionalN', analiseAdicionalN); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campo de motivo com base na seleção do rádio (nova etapa)
    function toggleMotivoLotePiloto2() {
        var lotePiloto2S = document.getElementById('lotePiloto2S').checked;
        var motivoLotePiloto2 = document.getElementById('motivoLotePiloto2');
        motivoLotePiloto2.style.display = lotePiloto2S ? 'block' : 'none';
        localStorage.setItem('lotePiloto2S', lotePiloto2S); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campos de qualificação com base na seleção do rádio (nova etapa)
    function toggleQualificacaoCampos2() {
        var lotePiloto2N = document.getElementById('lotePiloto2N').checked;
        var qualificacaoCampos2 = document.getElementById('qualificacaoCampos2');
        qualificacaoCampos2.style.display = lotePiloto2N ? 'block' : 'none';
        localStorage.setItem('lotePiloto2N', lotePiloto2N); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campo de observações do SAP com base na seleção de qualificação (primeira etapa)
    function toggleObservacoesSAP() {
        var qualificado3 = document.getElementById('qualificado3').checked;
        var observacoesContainer = document.getElementById('observacoesContainer');
        observacoesContainer.style.display = qualificado3 ? 'block' : 'none';
        localStorage.setItem('qualificado3', qualificado3); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campo de qualificação e observações SAP para a nova etapa
    function toggleQualificacaoSection() {
        var analiseMicroN1 = document.getElementById('analiseMicroN1').checked;
        var qualificacaoSection = document.getElementById('qualificacaoSection');
        qualificacaoSection.style.display = analiseMicroN1 ? 'block' : 'none';
        localStorage.setItem('analiseMicroN1', analiseMicroN1); // Salvar estado no localStorage
    }

    // Função para mostrar/ocultar campo de observações SAP com base na seleção de qualificação na nova etapa
    function toggleObservacoesSAP1() {
        var qualificado1 = document.getElementById('qualificado1').checked;
        var observacoesSAP1 = document.getElementById('observacoesSAP1');
        observacoesSAP1.style.display = qualificado1 ? 'block' : 'none';
        localStorage.setItem('qualificado1', qualificado1); // Salvar estado no localStorage
    }

    // Adicionar eventos aos rádios de análise microbiológica (primeira etapa)
    var radiosAnaliseMicro = document.getElementsByName('analiseMicro');
    radiosAnaliseMicro.forEach(function(radio) {
        radio.addEventListener('change', toggleCamposAdicionais);
    });

    // Adicionar eventos aos rádios de lote piloto (primeira etapa)
    var radiosLotePiloto = document.getElementsByName('lotePiloto');
    radiosLotePiloto.forEach(function(radio) {
        radio.addEventListener('change', toggleMotivoLotePiloto);
        radio.addEventListener('change', toggleQualificacaoCampos);
    });

    // Adicionar eventos aos rádios de análise adicional (nova etapa)
    var radiosAnaliseAdicional = document.getElementsByName('analiseAdicional');
    radiosAnaliseAdicional.forEach(function(radio) {
        radio.addEventListener('change', toggleCamposAdicionais2);
    });

    // Adicionar eventos aos rádios de lote piloto (nova etapa)
    var radiosLotePiloto2 = document.getElementsByName('lotePiloto2');
    radiosLotePiloto2.forEach(function(radio) {
        radio.addEventListener('change', toggleMotivoLotePiloto2);
        radio.addEventListener('change', toggleQualificacaoCampos2);
    });

    // Adicionar eventos aos rádios de qualificação (primeira etapa)
    var radiosQualificacao = document.getElementsByName('qualificacao3');
    radiosQualificacao.forEach(function(radio) {
        radio.addEventListener('change', toggleObservacoesSAP);
    });

    // Adicionar eventos aos rádios de análise microbiológica para a nova etapa
    var radiosAnaliseMicro1 = document.getElementsByName('analiseMicro1');
    radiosAnaliseMicro1.forEach(function(radio) {
        radio.addEventListener('change', toggleQualificacaoSection);
    });

    // Adicionar eventos aos rádios de qualificação na nova etapa
    var radiosQualificacao1 = document.getElementsByName('qualificacao1');
    radiosQualificacao1.forEach(function(radio) {
        radio.addEventListener('change', toggleObservacoesSAP1);
    });

    // Restaura a visibilidade dos campos com base nos valores armazenados no localStorage
    function restoreVisibility() {
        var analiseMicroN = localStorage.getItem('analiseMicroN') === 'true';
        var lotePilotoS = localStorage.getItem('lotePilotoS') === 'true';
        var lotePilotoN = localStorage.getItem('lotePilotoN') === 'true';
        var analiseAdicionalN = localStorage.getItem('analiseAdicionalN') === 'true';
        var lotePiloto2S = localStorage.getItem('lotePiloto2S') === 'true';
        var lotePiloto2N = localStorage.getItem('lotePiloto2N') === 'true';
        var qualificado3 = localStorage.getItem('qualificado3') === 'true';
        var analiseMicroN1 = localStorage.getItem('analiseMicroN1') === 'true';
        var qualificado1 = localStorage.getItem('qualificado1') === 'true';

        document.getElementById('camposAdicionais').style.display = analiseMicroN ? 'block' : 'none';
        document.getElementById('motivoLotePiloto').style.display = lotePilotoS ? 'block' : 'none';
        document.getElementById('qualificacaoCampos').style.display = lotePilotoN ? 'block' : 'none';
        document.getElementById('camposAdicionais2').style.display = analiseAdicionalN ? 'block' : 'none';
        document.getElementById('motivoLotePiloto2').style.display = lotePiloto2S ? 'block' : 'none';
        document.getElementById('qualificacaoCampos2').style.display = lotePiloto2N ? 'block' : 'none';
        document.getElementById('observacoesContainer').style.display = qualificado3 ? 'block' : 'none';
        document.getElementById('qualificacaoSection').style.display = analiseMicroN1 ? 'block' : 'none';
        document.getElementById('observacoesSAP1').style.display = qualificado1 ? 'block' : 'none';
    }

    // Restaura a visibilidade dos campos ao carregar a página
    restoreVisibility();
});
