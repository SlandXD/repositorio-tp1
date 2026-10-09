function mostrarMensagem() {
  const input = document.getElementById('inputMensagem');
  const output = document.getElementById('outputMensagem');
  const valor = input.value.trim();

  if (valor === '') {
    output.textContent = 'Digite algo antes de exibir.';
    return;
  }

  output.textContent = valor;
  input.value = '';
}

function alterarTamanhoFonte(acao) {
  const elemento = document.getElementById('textoFonte');
  const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);

  if (acao === 'aumentar') {
    elemento.style.fontSize = (tamanhoAtual + 2) + 'px';
  } else if (acao === 'diminuir' && tamanhoAtual > 8) {
    elemento.style.fontSize = (tamanhoAtual - 2) + 'px';
  }
}

const imagens = [
  'https://picsum.photos/seed/gato/200/120',
  'https://picsum.photos/seed/cachorro/200/120',
  'https://picsum.photos/seed/floresta/200/120',
  'https://picsum.photos/seed/cidade/200/120',
];
let imagemAtual = 0;

function trocarImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  document.getElementById('imagem').src = imagens[imagemAtual];
}

function adicionarElemento() {
  const input = document.getElementById('inputItem');
  const lista = document.getElementById('lista');
  const texto = input.value.trim();

  if (texto === '') return;

  const novoItem = document.createElement('li');
  novoItem.textContent = texto;
  lista.appendChild(novoItem);
  input.value = '';
}

let cliques = 0;

function contarCliques() {
  cliques++;
  document.getElementById('outputCliques').textContent = 'Cliques: ' + cliques;
}

function destacarTexto() {
  const paragrafo = document.getElementById('textoDestaque');
  paragrafo.classList.toggle('destaque');
}

function validarFormulario(evento) {
  evento.preventDefault();

  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const output   = document.getElementById('outputFormulario');

  document.getElementById('erroNome').textContent     = '';
  document.getElementById('erroEmail').textContent    = '';
  document.getElementById('erroTelefone').textContent = '';
  output.textContent = '';

  let valido = true;

  if (nome.length < 3) {
    document.getElementById('erroNome').textContent = 'Nome deve ter ao menos 3 caracteres.';
    valido = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    document.getElementById('erroEmail').textContent = 'E-mail inválido.';
    valido = false;
  }

  const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  if (!regexTelefone.test(telefone)) {
    document.getElementById('erroTelefone').textContent = 'Telefone inválido. Ex: (11) 99999-9999';
    valido = false;
  }

  if (valido) {
    output.textContent = 'Formulário enviado com sucesso!';
    output.className = 'sucesso';
    document.getElementById('formulario').reset();
  } else {
    output.textContent = 'Corrija os erros acima antes de enviar.';
    output.className = 'falha';
  }
}
