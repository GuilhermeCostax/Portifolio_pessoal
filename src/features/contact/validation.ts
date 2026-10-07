export interface ContactValues {
  name: string;
  email: string;
  message: string;
  service: string;
}
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export const emptyContactValues: ContactValues = { name: '', email: '', message: '', service: '' };

export const normalizeContact = (values: ContactValues): ContactValues => ({
  name: values.name.trim(), email: values.email.trim(), message: values.message.trim(), service: values.service.trim(),
});

export const validateContact = (values: ContactValues, requireService = false): ContactErrors => {
  const data = normalizeContact(values);
  const errors: ContactErrors = {};
  if (!data.name) errors.name = 'Informe seu nome.';
  else if (data.name.length > 120) errors.name = 'Use até 120 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Informe um email válido.';
  else if (data.email.length > 254) errors.email = 'Use até 254 caracteres.';
  if (!data.message) errors.message = 'Escreva sua mensagem.';
  else if (data.message.length > 5000) errors.message = 'Use até 5.000 caracteres.';
  if (requireService && !data.service) errors.service = 'Selecione um serviço.';
  return errors;
};
