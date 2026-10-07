import { useId } from 'react';
import { Loader2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { profile } from '@/data/profile';
import { useContactForm } from './useContactForm';

interface ContactFormProps {
  services?: readonly { id: string; title: string }[];
}
export default function ContactForm({ services }: ContactFormProps) {
  const id = useId();
  const { values, errors, configured, isSubmitting, handleChange, handleSubmit } = useContactForm(Boolean(services));
  const emailBody = [
    values.name.trim() && `Nome: ${values.name.trim()}`,
    values.email.trim() && `Email: ${values.email.trim()}`,
    values.service && `Serviço: ${values.service}`,
    values.message.trim(),
  ].filter(Boolean).join('\n\n');
  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent('Contato pelo portfólio')}&body=${encodeURIComponent(emailBody)}`;
  const fieldProps = (name: keyof typeof values) => ({
    id: `${id}-${name}`, name, value: values[name], onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${id}-${name}-error` : undefined,
    disabled: isSubmitting, required: true,
  });
  const error = (name: keyof typeof values) => errors[name] ? (
    <p id={`${id}-${name}-error`} className="text-sm text-destructive" role="alert">{errors[name]}</p>
  ) : null;
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label={services ? 'Solicitar orçamento' : 'Formulário de contato'}>
      {!configured && <p className="rounded-xl border border-border bg-muted p-4 text-sm text-foreground">Preencha sua mensagem e use o botão abaixo para abrir seu aplicativo de email.</p>}
      <div className="space-y-2">
        <label htmlFor={`${id}-name`} className="text-sm font-medium text-foreground">Nome</label>
        <Input {...fieldProps('name')} autoComplete="name" maxLength={120} placeholder="Seu nome completo" />
        {error('name')}
      </div>
      <div className="space-y-2">
        <label htmlFor={`${id}-email`} className="text-sm font-medium text-foreground">Email</label>
        <Input {...fieldProps('email')} type="email" autoComplete="email" maxLength={254} placeholder="seu@email.com" />
        {error('email')}
      </div>
      {services && <div className="space-y-2">
        <label htmlFor={`${id}-service`} className="text-sm font-medium text-foreground">Serviço de interesse</label>
        <select {...fieldProps('service')} className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Selecione um serviço</option>
          {services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}
          <option value="Outro">Outro</option>
        </select>
        {error('service')}
      </div>}
      <div className="space-y-2">
        <label htmlFor={`${id}-message`} className="text-sm font-medium text-foreground">Mensagem</label>
        <Textarea {...fieldProps('message')} rows={5} maxLength={5000} placeholder="Conte-me sobre seu projeto ou oportunidade..." />
        {error('message')}
      </div>
      {configured ? <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button> : <Button asChild className="w-full">
        <a href={emailHref}><Mail className="mr-2 h-4 w-4" aria-hidden="true" />Entrar em contato por email</a>
      </Button>}
    </form>
  );
}
