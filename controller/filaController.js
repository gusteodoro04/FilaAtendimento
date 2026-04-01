const minhaFila = new Fila(5);

function adicionarElemento() {
  const inputNome = document.getElementById("txtnovoNome");
  const inputCpf = document.getElementById("txtcpf"); // ID do campo de CPF

  // Validação simples para não adicionar vazio
  if (inputNome.value.trim() === "" || inputCpf.value.trim() === "") {
    alert("Por favor, preencha o Nome e o CPF!");
    return;
  }

  // Cria o objeto Atendimento (a data e hora serão inseridas sozinhas pelo constructor)
  const novoAtendimento = new Atendimento(inputNome.value.trim(), inputCpf.value.trim());

  // Tenta inserir na fila
  if (minhaFila.enqueue(novoAtendimento)) {
    mostrarFila(); 
    inputNome.value = ""; // Limpa os campos
    inputCpf.value = ""; 
    inputNome.focus();
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = "";
  
  for (let item of minhaFila) {
    const listItem = document.createElement("li");
    
    // Como a classe tem um método toString(), podemos usá-lo e trocar o \n por <br> para quebrar linha no HTML
    listItem.innerHTML = item.toString().replace(/\n/g, "<br>");
    
    filaElemento.appendChild(listItem);
  }
}

function removerElemento() {
  let removido = minhaFila.dequeue();
  
  if (removido === null) {
    alert("Fila vazia");
  } else {
    // Exibe os dados do objeto removido usando o toString() da classe
    alert("Atendido: \n" + removido.toString());
    mostrarFila();
  }
}

function buscarElemento() {
  const buscaCpf = document.getElementById("txtcpf").value.trim();
  const buscaNome = document.getElementById("txtnovoNome").value.trim();
  
  if (buscaCpf === "" && buscaNome === "") {
    alert("Digite o Nome ou CPF para buscar.");
    return;
  }

  let encontrado = false;
  let posicao = 1;
  
  for (let item of minhaFila) {
    // Acessa os atributos usando os métodos "get" da classe (item.cpf e item.nome)
    if (item.cpf === buscaCpf || item.nome.toLowerCase() === buscaNome.toLowerCase()) {
      alert(`Pessoa encontrada na posição [${posicao}]: \n\n` + item.toString());
      encontrado = true;
      break;
    }
    posicao++;
  }
  
  if (!encontrado) {
    alert("Pessoa não está na fila");
  }
}
