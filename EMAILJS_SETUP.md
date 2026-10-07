# Configuração do EmailJS

Este guia te ajudará a configurar o EmailJS para que o formulário de contato funcione corretamente de forma segura.

## Configuração pública do frontend

Os IDs do serviço/template e a chave pública do EmailJS são configurados por variáveis de ambiente. Variáveis `VITE_*` são incorporadas no JavaScript entregue ao navegador: não coloque senhas, tokens privados ou outros segredos nelas. Configure as restrições de domínio e controles de uso na sua conta EmailJS.

## Passo 1: Criar uma conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie sua conta gratuita
3. Confirme seu email

## Passo 2: Configurar um serviço de email

1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** gerado

## Passo 3: Criar um template de email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com o seguinte conteúdo:

### Assunto do Email:
```
Nova mensagem de contato de {{from_name}}
```

### Corpo do Email:
```
Olá Guilherme,

Você recebeu uma nova mensagem através do seu portfólio:

De: {{from_name}} ({{from_email}})
Para: {{to_name}} ({{to_email}})
Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
Você pode responder diretamente para: {{reply_to}}
```

4. Salve o template e anote o **Template ID**

## Passo 4: Obter a chave pública

1. Vá para "Account" > "General"
2. Encontre a seção "Public Key"
3. Anote sua **Public Key**

## Passo 5: Configurar variáveis de ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Abra o arquivo `.env.local` e preencha com suas credenciais:
   ```env
   VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
   ```

3. **IMPORTANTE**: O arquivo `.env.local` já está no `.gitignore` e não será commitado no repositório

## 6. Testar o Formulário

1. Execute o projeto: `npm run dev`
2. Acesse a seção de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o email chegou na sua caixa de entrada

## Variáveis do Template

O sistema envia as seguintes variáveis para o template:

- `from_name`: Nome do remetente
- `from_email`: Email do remetente
- `message`: Mensagem enviada
- `to_name`: Seu nome (Guilherme Francisco Costa)
- `to_email`: Seu email (guilhermefcostadev@gmail.com)
- `subject`: Assunto automático
- `reply_to`: Email para resposta

## Troubleshooting

- Verifique se as credenciais estão corretas
- Confirme que o serviço de email está ativo
- Teste o template no painel do EmailJS
- Verifique o console do navegador para erros