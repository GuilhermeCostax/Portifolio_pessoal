import { test } from 'node:test';
import assert from 'node:assert/strict';
import { emptyContactValues, normalizeContact, validateContact } from '../src/features/contact/validation.ts';

test('campos vazios e serviço obrigatório são rejeitados', () => {
  assert.deepEqual(Object.keys(validateContact(emptyContactValues, true)), ['name', 'email', 'message', 'service']);
});
test('dados são normalizados sem exigir serviço no contato geral', () => {
  const values = { name: ' Guilherme ', email: ' contato@example.com ', message: ' Olá ', service: '' };
  assert.deepEqual(validateContact(values), {});
  assert.deepEqual(normalizeContact(values), { name: 'Guilherme', email: 'contato@example.com', message: 'Olá', service: '' });
});
test('email inválido e conteúdo excessivo são rejeitados', () => {
  const values = { name: 'a'.repeat(121), email: 'invalido', message: 'a'.repeat(5001), service: 'Sites' };
  assert.deepEqual(Object.keys(validateContact(values, true)), ['name', 'email', 'message']);
});
test('orçamento válido exige um serviço e aceita texto multilinha', () => {
  const values = { name: 'Pessoa', email: 'pessoa@example.com', message: 'Projeto\nDetalhes', service: 'Landing Pages' };
  assert.deepEqual(validateContact(values, true), {});
  assert.equal(normalizeContact(values).message, 'Projeto\nDetalhes');
});
