# Especificações dos Formulários - Site: ONG Educar para Mudar

Este documento descreve os formulários utilizados no site da ONG, incluindo seus objetivos, campos, validações e boas práticas de implementação.

---

## 📌 Formulários Presentes no Projeto

O site contém os seguintes formulários:

- **Formulário de Contato** (`contato.html`)
- **Formulário de Voluntariado** (`voluntariado.html`)
- **Formulário de Doações** (`doacoes.html`)

---

## 📬 Formulário de Contato
Localizado em `contato.html`, é o principal meio de comunicação entre visitantes e a ONG.

**Objetivo:**  
Permitir que visitantes entrem em contato com a ONG para dúvidas, sugestões ou parcerias.

### Campos
- **Nome completo:** obrigatório.  
- **E-mail:** obrigatório, deve conter formato válido.  
- **Assunto:** opcional, usado para identificar o tipo de mensagem.  
- **Mensagem:** campo de texto livre, mínimo de 10 caracteres.  

### Validações
- Feitas com HTML5 (`required`, `pattern`, etc.) e JavaScript simples.  
- Exibe alertas amigáveis quando algum campo está incorreto.

---

## 🤝 Formulário de Voluntariado

**Objetivo:**  
Cadastrar interessados em atuar como voluntários em projetos da ONG.

**Campos:**
- **Nome completo:** obrigatório.  
- **E-mail:** obrigatório, deve conter formato válido. 
- **Telefone** (opcional)
- **Área de interesse** (obrigatório)
- **Disponibilidade de horário** (obrigatório)
- **Mensagem:** campo de texto livre.  

**Validações:**
- E-mail com formato válido
- Telefone com máscara (formato brasileiro)
- Campos obrigatórios não podem estar vazios

**Comportamento:**
- Dados podem ser armazenados em banco de dados ou enviados por e-mail
- Pode incluir consentimento para uso de dados (LGPD)

---

## 💰 Formulário de Doações
Presente em `doacoes.html`, facilita o contato de possíveis doadores.

**Objetivo:**  
Facilitar o processo de doação por parte dos visitantes.

### Campos
- **Nome:** obrigatório.  
- **E-mail ou telefone:** obrigatório, um dos dois deve ser informado.  
- **Valor da doação:** campo numérico opcional.  
- **Mensagem:** campo livre.  

---

## ✅ Boas Práticas Adotadas

- Uso de `label` e `placeholder` para acessibilidade
- Feedback visual em campos inválidos
- Mensagens de erro claras e objetivas
- Campos agrupados semanticamente com `<fieldset>` e `<legend>`
- Compatibilidade com dispositivos móveis
- Acessibilidade foi considerada com o uso de atributos `aria`.

---

## 🔐 Considerações sobre Privacidade

Todos os formulários seguem os princípios da **Lei Geral de Proteção de Dados (LGPD)**:

- Coleta mínima de dados
- Consentimento explícito quando necessário
- Finalidade clara para cada informação coletada

---

## 📦 Integrações Futuras (Sugestões)

- Integração com Google Sheets ou Airtable para armazenar respostas
- Envio automático de e-mails de confirmação
- Dashboard administrativo para visualizar cadastros



