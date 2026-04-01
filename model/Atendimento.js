class Atendimento {
  #nome;
  #cpf;
  #data;
  #hora;

  constructor(nome, cpf) {
    this.#nome = nome;
    this.#cpf = cpf;
    // Puxando automaticamente do utils.js conforme a regra
    this.#data = obterDataAtual(); 
    this.#hora = obterHoraAtual(); 
  }

  // Métodos "get" para permitir que o controller leia os dados privados
  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get data() {
    return this.#data;
  }

  get hora() {
    return this.#hora;
  }

  toString() {
    return `Nome: ${this.#nome} \nCPF: ${this.#cpf} \nData: ${this.#data} \nHorário: ${this.#hora}`;
  }
}
