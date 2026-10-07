import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { isEmailJSConfigured, sendContactEmail } from '@/lib/emailjs';
import { emptyContactValues, normalizeContact, validateContact, type ContactErrors, type ContactValues } from './validation';

export const useContactForm = (requireService: boolean) => {
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pending = useRef(false);
  const { toast } = useToast();
  const configured = isEmailJSConfigured();
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name as keyof ContactValues;
    const value = event.target.value;
    setValues(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const nextErrors = validateContact(values, requireService);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstInvalid = Object.keys(nextErrors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (!configured) return;
    pending.current = true;
    setIsSubmitting(true);
    try {
      const data = normalizeContact(values);
      await sendContactEmail({ ...data, message: requireService ? `Serviço: ${data.service}\n\n${data.message}` : data.message });
      toast({ title: 'Mensagem enviada!', description: 'Obrigado pelo contato. Retornarei em breve.' });
      setValues(emptyContactValues);
    } catch {
      toast({ title: 'Não foi possível enviar', description: 'Tente novamente ou use o email direto. Sua mensagem foi preservada.', variant: 'destructive' });
    } finally {
      pending.current = false;
      setIsSubmitting(false);
    }
  };
  return { values, errors, isSubmitting, configured, handleChange, handleSubmit };
};
