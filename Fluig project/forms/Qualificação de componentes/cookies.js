document.addEventListener('DOMContentLoaded', function() {
    // Função para definir um cookie com data de expiração
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Função para obter o valor de um cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Funções para mostrar/ocultar campos e salvar estado nos cookies
    function toggleCamposAdicionais() {
        var analiseMicroN = document.getElementById('analiseMicroN').checked;
        var camposAdicionais = document.getElementById('camposAdicionais');
        camposAdicionais.style.display = analiseMicroN ? 'block' : 'none';
        setCookie('analiseMicroN', analiseMicroN, 7);
    }

    function toggleMotivoLotePiloto() {
        var lotePilotoS = document.getElementById('lotePilotoS').checked;
        var motivoLotePiloto = document.getElementById('motivoLotePiloto');
        motivoLotePiloto.style.display = lotePilotoS ? 'block' : 'none';
        setCookie('lotePilotoS', lotePilotoS, 7);
    }

    function toggleQualificacaoCampos() {
        var lotePilotoN = document.getElementById('lotePilotoN').checked;
        var qualificacaoCampos = document.getElementById('qualificacaoCampos');
        qualificacaoCampos.style.display = lotePilotoN ? 'block' : 'none';
        setCookie('lotePilotoN', lotePilotoN, 7);
    }

    function toggleCamposAdicionais2() {
        var analiseAdicionalN = document.getElementById('analiseAdicionalN').checked;
        var camposAdicionais2 = document.getElementById('camposAdicionais2');
        camposAdicionais2.style.display = analiseAdicionalN ? 'block' : 'none';
        setCookie('analiseAdicionalN', analiseAdicionalN, 7);
    }

    function toggleMotivoLotePiloto2() {
        var lotePiloto2S = document.getElementById('lotePiloto2S').checked;
        var motivoLotePiloto2 = document.getElementById('motivoLotePiloto2');
        motivoLotePiloto2.style.display = lotePiloto2S ? 'block' : 'none';
        setCookie('lotePiloto2S', lotePiloto2S, 7);
    }

    function toggleQualificacaoCampos2() {
        var lotePiloto2N = document.getElementById('lotePiloto2N').checked;
        var qualificacaoCampos2 = document.getElementById('qualificacaoCampos2');
        qualificacaoCampos2.style.display = lotePiloto2N ? 'block' : 'none';
        setCookie('lotePiloto2N', lotePiloto2N, 7);
    }

    function toggleObservacoesSAP() {
        var qualificado3 = document.getElementById('qualificado3').checked;
        var observacoesContainer = document.getElementById('observacoesContainer');
        observacoesContainer.style.display = qualificado3 ? 'block' : 'none';
        setCookie('qualificado3', qualificado3, 7);
    }

    function toggleQualificacaoSection() {
        var analiseMicroN1 = document.getElementById('analiseMicroN1').checked;
        var qualificacaoSection = document.getElementById('qualificacaoSection');
        qualificacaoSection.style.display = analiseMicroN1 ? 'block' : 'none';
        setCookie('analiseMicroN1', analiseMicroN1, 7);
    }

    function toggleObservacoesSAP1() {
        var qualificado1 = document.getElementById('qualificado1').checked;
        var observacoesSAP1 = document.getElementById('observacoesSAP1');
        observacoesSAP1.style.display = qualificado1 ? 'block' : 'none';
        setCookie('qualificado1', qualificado1, 7);
    }

    // Função para restaurar a visibilidade dos campos e valores das caixas de texto com base nos cookies
    function restoreVisibility() {
        var analiseMicroN = getCookie('analiseMicroN') === 'true';
        var lotePilotoS = getCookie('lotePilotoS') === 'true';
        var lotePilotoN = getCookie('lotePilotoN') === 'true';
        var analiseAdicionalN = getCookie('analiseAdicionalN') === 'true';
        var lotePiloto2S = getCookie('lotePiloto2S') === 'true';
        var lotePiloto2N = getCookie('lotePiloto2N') === 'true';
        var qualificado3 = getCookie('qualificado3') === 'true';
        var analiseMicroN1 = getCookie('analiseMicroN1') === 'true';
        var qualificado1 = getCookie('qualificado1') === 'true';

        document.getElementById('camposAdicionais').style.display = analiseMicroN ? 'block' : 'none';
        document.getElementById('motivoLotePiloto').style.display = lotePilotoS ? 'block' : 'none';
        document.getElementById('qualificacaoCampos').style.display = lotePilotoN ? 'block' : 'none';
        document.getElementById('camposAdicionais2').style.display = analiseAdicionalN ? 'block' : 'none';
        document.getElementById('motivoLotePiloto2').style.display = lotePiloto2S ? 'block' : 'none';
        document.getElementById('qualificacaoCampos2').style.display = lotePiloto2N ? 'block' : 'none';
        document.getElementById('observacoesContainer').style.display = qualificado3 ? 'block' : 'none';
        document.getElementById('qualificacaoSection').style.display = analiseMicroN1 ? 'block' : 'none';
        document.getElementById('observacoesSAP1').style.display = qualificado1 ? 'block' : 'none';

        // Restaurar valores das caixas de texto
        document.getElementById('campoAdicional1').value = getCookie('campoAdicional1') || '';
        document.getElementById('motivoLotePiloto').value = getCookie('motivoLotePiloto') || '';
        document.getElementById('motivoLotePiloto2').value = getCookie('motivoLotePiloto2') || '';
        
        // Restaurar estados dos rádios
        document.getElementById('analiseMicroS1').checked = getCookie('analiseMicroS1') === 'true';
        document.getElementById('analiseMicroN1').checked = getCookie('analiseMicroN1') === 'true';
        document.getElementById('qualificado1').checked = getCookie('qualificado1') === 'true';
        document.getElementById('naoQualificado1').checked = getCookie('naoQualificado1') === 'true';
        document.getElementById('observacoesSAP1').checked = getCookie('observacoesSAP1') === 'true';
    }

    // Adicionar eventos aos rádios e caixas de texto
    var radiosAnaliseMicro = document.getElementsByName('analiseMicro');
    radiosAnaliseMicro.forEach(function(radio) {
        radio.addEventListener('change', toggleCamposAdicionais);
    });

    var radiosLotePiloto = document.getElementsByName('lotePiloto');
    radiosLotePiloto.forEach(function(radio) {
        radio.addEventListener('change', toggleMotivoLotePiloto);
        radio.addEventListener('change', toggleQualificacaoCampos);
    });

    var radiosAnaliseAdicional = document.getElementsByName('analiseAdicional');
    radiosAnaliseAdicional.forEach(function(radio) {
        radio.addEventListener('change', toggleCamposAdicionais2);
    });

    var radiosLotePiloto2 = document.getElementsByName('lotePiloto2');
    radiosLotePiloto2.forEach(function(radio) {
        radio.addEventListener('change', toggleMotivoLotePiloto2);
        radio.addEventListener('change', toggleQualificacaoCampos2);
    });

    var radiosQualificacao = document.getElementsByName('qualificacao3');
    radiosQualificacao.forEach(function(radio) {
        radio.addEventListener('change', toggleObservacoesSAP);
    });

    var radiosAnaliseMicro1 = document.getElementsByName('analiseMicro1');
    radiosAnaliseMicro1.forEach(function(radio) {
        radio.addEventListener('change', toggleQualificacaoSection);
    });

    var radiosQualificacao1 = document.getElementsByName('qualificacao1');
    radiosQualificacao1.forEach(function(radio) {
        radio.addEventListener('change', toggleObservacoesSAP1);
    });

    var textInputs = document.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            setCookie(input.id, input.value, 7);
        });
    });

    // Restaurar estado inicial com base nos cookies
    restoreVisibility();
});
