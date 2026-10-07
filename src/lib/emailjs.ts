import { profile } from '@/data/profile';

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
};
export const isEmailJSConfigured = (): boolean =>
  Object.values(config).every(value => value.length > 0 && !value.startsWith('seu_') && !value.startsWith('sua_'));

export interface ContactFormData { name: string; email: string; message: string; }

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  if (!isEmailJSConfigured()) throw new Error('O envio de mensagens está indisponível.');
  const { default: emailjs } = await import('@emailjs/browser');
  const response = await emailjs.send(config.serviceId, config.templateId, {
    from_name: data.name, from_email: data.email, message: data.message,
    to_name: profile.name, to_email: profile.email,
    subject: `Nova mensagem de contato de ${data.name}`, reply_to: data.email,
  }, config.publicKey);
  if (response.status !== 200) throw new Error('Não foi possível enviar a mensagem.');
};
