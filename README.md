# 🍦 Ice Cream - Portfólio

Um projeto web responsivo e moderno de sorveteria artesanal, desenvolvido como portfólio para demonstrar habilidades em desenvolvimento front-end.

## ✨ Características

- **Design Responsivo**: Adapta-se perfeitamente a qualquer tamanho de tela (desktop, tablet e mobile)
- **Catálogo Dinâmico**: Sabores carregados dinamicamente de um arquivo JSON
- **Animações Suaves**: Transições e efeitos visuais para melhor experiência do usuário
- **Menu Navegável**: Barra de navegação com menu hambúrguer para dispositivos móveis
- **Seções Bem Organizadas**: Início, Sabores, Sobre e Contato

## 🏗️ Estrutura do Projeto

```
ice-cream/
├── index.html              # Arquivo HTML principal
├── css/
│   ├── style.css          # Estilos principais
│   ├── animations.css     # Animações CSS
│   └── responsive.css     # Media queries para responsividade
├── js/
│   ├── main.js            # Lógica principal e carregamento de dados
│   └── events.js          # Manipulação de eventos
├── data/
│   └── sabores.json       # Base de dados com sabores de sorvete
└── assets/                # Imagens e recursos
    ├── baunilha-premium.jpg
    ├── chocolate-belga.jpg
    ├── cookies-cream.jpg
    └── morango-leite-condensado.jpg
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos, animações e layout responsivo
- **JavaScript (Vanilla)**: Interatividade e manipulação do DOM
- **JSON**: Gerenciamento de dados de sabores

## 🍨 Sabores Disponíveis

1. **Baunilha Premium** - R$ 12,90
2. **Cookies Cream** - R$ 11,50
3. **Chocolate Belga** - R$ 10,90
4. **Morango Leite Condensado** - R$ 13,50

## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/alefveiga/LP-ICECREAM.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd LP-ICECREAM
   ```

3. Abra o arquivo `index.html` no seu navegador ou use um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

4. Acesse no navegador: `http://localhost:8000`

## 📱 Responsividade

O projeto foi desenvolvido com a abordagem Mobile-First e utiliza media queries para oferecer uma experiência perfeita em:
- Dispositivos móveis (até 768px)
- Tablets (768px a 1024px)
- Desktops (acima de 1024px)

## 🎨 Funcionalidades JavaScript

- Carregamento dinâmico de sabores do arquivo JSON
- Menu hambúrguer responsivo
- Validação e sanitização de HTML para segurança
- Lazy loading de imagens
- Navegação suave entre seções

## 📝 Autor

Desenvolvido por **Alef Veiga** como projeto de portfólio.

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

---

**Visite o repositório:** [GitHub - LP-ICECREAM](https://github.com/alefveiga/LP-ICECREAM)
