# Validação HTML - Site: ONG Educar para Mudar

# ✅ Validação HTML — Site ONG

Este documento apresenta os testes de validação realizados nas páginas HTML do projeto da ONG, com foco na conformidade com os padrões da web, acessibilidade e boas práticas de desenvolvimento.

---

## 🧪 Ferramentas Utilizadas

- **W3C Markup Validation Service**  
  Validador oficial de HTML da W3C: [https://validator.w3.org](https://validator.w3.org)

- **Google Lighthouse**  
  Ferramenta de auditoria para performance, acessibilidade e SEO.

- **HTMLHint**  
  Linter para análise de código HTML em tempo real.

---

## 📄 Páginas Validadas

As seguintes páginas foram submetidas à validação:

- `index.html`
- `sobre.html`
- `projetos.html`
- `transparencia.html`
- `doacoes.html`
- `voluntariado.html`
- `contato.html`
- `blog.html`

---

## 🛠️ Erros Corrigidos

Durante o processo de validação, foram identificados e corrigidos os seguintes problemas:

- **Tags não fechadas corretamente**  
  Exemplo: `<img>` sem barra final (`/>`) em HTML5.

- **Atributos obsoletos**  
  Remoção de `align`, `bgcolor`, e outros atributos depreciados.

- **Falta de atributos obrigatórios**  
  Adição de `alt` em imagens para acessibilidade.

- **Estrutura semântica incorreta**  
  Substituição de `<div>` por `<section>`, `<article>`, `<header>`, `<footer>` onde apropriado.

- **IDs duplicados**  
  Correção de elementos com o mesmo `id` em uma única página.

---

## ♿ Acessibilidade

- Uso de `aria-label` e `role` em elementos interativos
- Contraste de cores verificado via Lighthouse
- Navegação por teclado testada manualmente
- Títulos (`<h1>` a `<h6>`) organizados hierarquicamente

---

## 📈 Resultados no Lighthouse

Média dos resultados obtidos nas auditorias:

| Métrica         | Pontuação Média |
|-----------------|-----------------|
| Performance     | 85/100          |
| Acessibilidade  | 95/100          |
| Boas práticas   | 100/100         |
| SEO             | 90/100          |

---

## 📌 Recomendações Futuras

- Implementar testes automatizados com Jest ou Cypress
- Adicionar sitemap.xml e arquivo robots.txt
- Verificar acessibilidade com ferramentas como Axe ou Wave

---

## ✅ Conclusão

Todas as páginas do projeto foram validadas com sucesso e estão em conformidade 