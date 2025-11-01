# 🧱 Arquitetura do Projeto — Site ONG

Este documento descreve a arquitetura geral do projeto web desenvolvido para a ONG, abordando a estrutura de diretórios, organização dos arquivos, tecnologias utilizadas e princípios de desenvolvimento adotados.

---

## 📁 Estrutura de Diretórios

A raiz do projeto contém os seguintes diretórios e arquivos:

projeto-ong/
 ├── asset/
 │   ├── audio/      → sons e trilhas usadas no site
 │   ├── css/        → folhas de estilo e configurações de layout
 │   ├── fonts/      → fontes personalizadas
 │   ├── img/        → imagens e ícones
 │   ├── js/         → scripts e interatividade
 │   └── video/      → vídeos institucionais
 ├── docs/           → documentações e arquivos auxiliares
 ├── search.json     → contém todo o texto de todas as páginas HTML
 ├── index.html      → página inicial
 ├── sobre.html      → página com informações da ONG
 ├── projetos.html   → mostra os projetos em andamento
 ├── transparencia.html → página de relatórios e contas
 ├── doacoes.html    → área para incentivar doações
 └── contato.html    → formulário de contato e informações


---

## 🧪 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript Vanilla**: Interatividade e validações
- **Markdown (.md)**: Documentação técnica
- **Visual Studio Code**: Editor de código principal

---

## 🌐 Organização das Páginas

Cada página HTML representa uma seção específica do site:

- `index.html`: Página inicial com visão geral da ONG
- `sobre.html`: Informações institucionais
- `projetos.html`: Detalhes dos projetos em andamento
- `transparencia.html`: Prestação de contas e relatórios
- `doacoes.html`: Formas de contribuir
- `voluntariado.html`: Cadastro e informações para voluntários
- `contato.html`: Formulário de contato
- `blog.html`: Publicações e atualizações

---

## 📱 Responsividade

O site foi desenvolvido com foco em **responsividade**, garantindo boa experiência em:

- Dispositivos móveis (smartphones e tablets)
- Navegadores modernos (Chrome, Firefox, Edge, Safari)
- Resolução mínima recomendada: 360px

---

## 🧭 Navegação e Usabilidade

- Menu principal presente em todas as páginas
- Links internos e externos com feedback visual
- Estrutura semântica para acessibilidade (uso de `<header>`, `<main>`, `<footer>`, etc.)
- Compatível com leitores de tela

---

## 🔒 Boas Práticas Adotadas

- Separação de responsabilidades (HTML, CSS, JS em pastas distintas)
- Nomenclatura clara e padronizada
- Comentários explicativos no código
- Validação de HTML via W3C
- Uso de fontes e imagens otimizadas

---

## 📌 Considerações Finais

A arquitetura do projeto foi pensada para facilitar a manutenção, escalabilidade e colaboração entre desenvolvedores. A estrutura modular permite que novas páginas ou funcionalidades sejam adicionadas com facilidade.

