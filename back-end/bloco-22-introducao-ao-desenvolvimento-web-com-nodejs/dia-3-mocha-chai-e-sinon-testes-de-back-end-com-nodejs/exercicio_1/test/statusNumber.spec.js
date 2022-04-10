const { expect } = require('chai');

const statusNumber = require('../exercicio1');

describe('Verifica se a função statusNumber retorna a informação correta', () => {
  describe('Se o número é maior que 0', () => {
    it('retorna "positivo"', () => {
      const result = statusNumber(5);
      expect(result).to.be.equal('positivo');
    });
  });
  describe('Se o número é menor que 0', () => {
    it('retorna "negativo"', () => {
      const result = statusNumber(-5);
      expect(result).to.be.equal('negativo');
    })
  });
  describe('Se o número é igual à 0', () => {
    it('retorna "neutro"', () => {
      const result = statusNumber(0);
      expect(result).to.be.equal('neutro');
    })
  });
  describe('Caso o parâmetro informado não seja um número', () => {
    it('retorna a mensagem: "o valor deve ser um número"', () => {
      const result = statusNumber('jennifer');
      expect(result).to.be.equal('o valor deve ser um número');
    })
  })
});
