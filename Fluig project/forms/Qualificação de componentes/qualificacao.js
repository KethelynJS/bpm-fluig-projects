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
        var analiseMicroN1 = getCookie('analiseMicroN1') === 'true';
        var qualificado1 = getCookie('qualificado1') === 'true';

        document.getElementById('qualificacaoSection').style.display = analiseMicroN1 ? 'block' : 'none';
        document.getElementById('observacoesSAP1').style.display = qualificado1 ? 'block' : 'none';

        // Restaurar estados dos rádios
        document.getElementById('analiseMicroS1').checked = getCookie('analiseMicroS1') === 'true';
        document.getElementById('analiseMicroN1').checked = getCookie('analiseMicroN1') === 'true';
        document.getElementById('qualificado1').checked = getCookie('qualificado1') === 'true';
        document.getElementById('naoQualificado1').checked = getCookie('naoQualificado1') === 'true';
        document.getElementById('observacoesSAP1').checked = getCookie('observacoesSAP1') === 'true';
    }

    // Adicionar eventos aos rádios e caixas de texto
    var radiosAnaliseMicro1 = document.getElementsByName('analiseMicro1');
    radiosAnaliseMicro1.forEach(function(radio) {
        radio.addEventListener('change', toggleQualificacaoSection);
    });

    var radiosQualificacao1 = document.getElementsByName('qualificacao1');
    radiosQualificacao1.forEach(function(radio) {
        radio.addEventListener('change', toggleObservacoesSAP1);
    });

    // Restaurar estado inicial com base nos cookies
    restoreVisibility();
});
