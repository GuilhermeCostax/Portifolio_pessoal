import emailjs from '@emailjs/browser';

// Configurações do EmailJS usando variáveis de ambiente
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

// Função para verificar se as configurações estão definidas
export const isEmailJSConfigured = (): boolean => {
  return !!(EMAILJS_CONFIG.SERVICE_ID && EMAILJS_CONFIG.TEMPLATE_ID && EMAILJS_CONFIG.PUBLIC_KEY);
};

// Interface para os dados do formulário
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Função para enviar email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Verificar se o EmailJS está configurado
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS não está configurado. Verifique as variáveis de ambiente.');
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Guilherme Francisco Costa',
      to_email: 'guilhermefcostadev@gmail.com',
      subject: `Nova mensagem de contato de ${formData.name}`,
      reply_to: formData.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};

// Função para inicializar o EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};