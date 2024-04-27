
  // Verifica se o navegador suporta a API Web Speech
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();

    // Defina o idioma para a pesquisa por voz (exemplo: 'pt-BR' para Português do Brasil)
    recognition.lang = 'pt-BR';

    // Defina se o reconhecimento continuará ouvindo mesmo após o usuário parar de falar
    recognition.continuous = false;

    // Quando o usuário terminar de falar, este evento será acionado
    recognition.onresult = function (event) {
      const speechResult = event.results[0][0].transcript;
      // Aqui você pode fazer o que quiser com o resultado da fala
      // Por exemplo, exibir em uma caixa de texto ou realizar uma pesquisa
      alert('Você disse: ' + speechResult);
    };

    // Trate possíveis erros
    recognition.onerror = function (event) {
    };

    // Evento para iniciar o reconhecimento de fala quando o botão for clicado
    document.getElementById('start-listening-btn').addEventListener('click', function () {
      recognition.start();
    });
  } else {
    // Se o navegador não suportar a API Web Speech, exiba uma mensagem de erro
    alert('O reconhecimento de fala não é suportado neste navegador.');
  }
