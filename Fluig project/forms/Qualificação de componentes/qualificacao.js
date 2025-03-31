document.addEventListener('DOMContentLoaded', function() {
    // Função para salvar dados no localStorage
    function setLocalStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    // Função para obter dados do localStorage
    function getLocalStorage(name) {
        var value = localStorage.getItem(name);
        return value ? JSON.parse(value) : null;
    }

    // Funções para mostrar/ocultar campos e salvar estado no localStorage
    function toggleQualificacaoSection() {
        var analiseMicroN1 = document.getElementById('analiseMicroN1').checked;
        var qualificacaoSection = document.getElementById('qualificacaoSection');
        qualificacaoSection.style.display = analiseMicroN1 ? 'block' : 'none';
        setLocalStorage('analiseMicroN1', analiseMicroN1);
    }

    function toggleObservacoesSAP1() {
        var qualificado1 = document.getElementById('qualificado1').checked;
        var observacoesSAP1 = document.getElementById('observacoesSAP1');
        observacoesSAP1.style.display = qualificado1 ? 'block' : 'none';
        setLocalStorage('qualificado1', qualificado1);
    }

    // Função para restaurar a visibilidade dos campos e valores com base no localStorage
    function restoreVisibility() {
        var analiseMicroN1 = getLocalStorage('analiseMicroN1');
        var qualificado1 = getLocalStorage('qualificado1');

        document.getElementById('qualificacaoSection').style.display = analiseMicroN1 ? 'block' : 'none';
        document.getElementById('observacoesSAP1').style.display = qualificado1 ? 'block' : 'none';

        // Restaurar estados dos rádios
        document.getElementById('analiseMicroS1').checked = getLocalStorage('analiseMicroS1') === true;
        document.getElementById('analiseMicroN1').checked = getLocalStorage('analiseMicroN1') === true;
        document.getElementById('qualificado1').checked = getLocalStorage('qualificado1') === true;
        document.getElementById('naoQualificado1').checked = getLocalStorage('naoQualificado1') === true;
        document.getElementById('observacoesSAP1').checked = getLocalStorage('observacoesSAP1') === true;
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

    // Restaurar estado inicial com base no localStorage
    restoreVisibility();
});
