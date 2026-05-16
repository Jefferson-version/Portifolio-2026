# 🟢 Portfólio Web — Template

> Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro. Dark theme, cursor 3D customizado, animação de ondas no hero e interações nos cards de tecnologia.

![Preview](https://img.shields.io/badge/status-online-A8FF3E?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-09090B?style=for-the-badge&logo=html5&logoColor=A8FF3E)
![CSS](https://img.shields.io/badge/CSS3-09090B?style=for-the-badge&logo=css3&logoColor=A8FF3E)
![JS](https://img.shields.io/badge/JavaScript-09090B?style=for-the-badge&logo=javascript&logoColor=A8FF3E)

---

## 📁 Estrutura de pastas

```
portifolio-2026/
├── index.html       → estrutura da página
├── css/
│   └── style.css    → todo o visual (cores, fontes, layout)
└── js/
    └── main.js      → cursor, animação de ondas, efeitos de scroll
```

---

## ✏️ Como personalizar

### 1. Seus dados pessoais → `index.html`

**Nome no hero:**
```html
<h1 class="hero-name">
  Seu Nome<br>
  <span class="dim">Sobrenome.</span>   <!-- ← cor acinzentada -->
</h1>
```

**Frase de abertura:**
```html
<p class="hero-tag">// disponível para oportunidades</p>
```

**Descrição curta:**
```html
<p class="hero-sub">
  Escreva aqui uma frase sobre você e o que você faz.
</p>
```

**Localização (canto inferior direito):**
```html
<div class="status">
  <span class="dot"></span>
  Sua Cidade, UF — Brasil
</div>
```

---

### 2. Seção Sobre → `index.html`

**Estatísticas (os 4 cards de números):**
```html
<div class="stat">
  <div class="stat-n">5<em>+</em></div>   <!-- ← número -->
  <div class="stat-l">anos em TI</div>    <!-- ← legenda -->
</div>
```

**Texto sobre você:**
```html
<div class="sobre-body r d1">
  <p>Seu primeiro parágrafo aqui.</p>
  <p>Segundo parágrafo aqui.</p>
  <p>Terceiro parágrafo aqui.</p>
</div>
```

---

### 3. Seus projetos → `index.html`

Cada projeto segue esse bloco. Duplique ou remova conforme necessário:

```html
<div class="proj">
  <span class="proj-n">01</span>          <!-- ← número do projeto -->
  <div class="proj-info">
    <div class="proj-title">Nome do Projeto</div>
    <div class="proj-desc">
      Descrição do que o projeto faz.
    </div>
  </div>
  <div class="tags">
    <span class="tag">Node.js</span>      <!-- ← tecnologias usadas -->
    <span class="tag">React</span>
    <span class="tag">MySQL</span>
  </div>
</div>
```

---

### 4. Stack de tecnologias → `index.html`

Cada card de tecnologia segue esse padrão:

```html
<div class="stack-item r">
  <div class="stack-cat">backend</div>             <!-- ← categoria -->
  <div class="stack-name">Node.js</div>            <!-- ← nome da tech -->
  <div class="stack-detail">Express, REST APIs</div> <!-- ← detalhe -->
  <div class="stack-used">
    <span>usado em →</span> Projeto A · Projeto B  <!-- ← onde usou -->
  </div>
</div>
```

---

### 5. Contato → `index.html`

```html
<a href="mailto:seu@email.com" class="clink">
  <span>seu@email.com</span>
  <span class="arr">↗</span>
</a>
<a href="https://github.com/seu-usuario" class="clink" target="_blank">
  <span>GitHub</span>
  <span class="arr">↗</span>
</a>
<a href="https://linkedin.com/in/seu-usuario" class="clink" target="_blank">
  <span>LinkedIn</span>
  <span class="arr">↗</span>
</a>
```

---

### 6. Rodapé → `index.html`

```html
<p class="fc">© 2025 Seu Nome <em>—</em> Sua Cidade, UF</p>
```

---

## 🎨 Mudando as cores → `css/style.css`

Todas as cores ficam no topo do arquivo em `:root`. Muda só aqui e afeta o site inteiro:

```css
:root {
  --bg:      #09090B;   /* fundo principal (preto) */
  --surface: #111116;   /* fundo dos cards */
  --border:  #1E1E28;   /* bordas */
  --fg:      #F4F4F5;   /* texto principal (branco) */
  --muted:   #71717A;   /* texto secundário (cinza) */
  --subtle:  #3F3F46;   /* texto bem apagado */
  --accent:  #A8FF3E;   /* cor de destaque (verde) ← muda aqui pra outra cor */
}
```

**Exemplos de accent em outras cores:**
| Cor | Código |
|-----|--------|
| 🟢 Verde (padrão) | `#A8FF3E` |
| 🔵 Azul elétrico  | `#3B82F6` |
| 🟣 Roxo           | `#A855F7` |
| 🟡 Amarelo        | `#EAB308` |
| 🔴 Vermelho       | `#EF4444` |

---

## 🔤 Mudando as fontes → `css/style.css`

```css
:root {
  --font-d: 'Space Grotesk'; /* títulos grandes */
  --font-b: 'Inter';         /* texto do corpo */
  --font-m: 'JetBrains Mono'; /* labels e código */
}
```

As fontes vêm do Google Fonts — pra trocar, substitui o nome aqui **e** atualiza o link `<link>` no `index.html`.

---

## 📏 Tamanhos de fonte → `css/style.css`

| Elemento | Classe | Propriedade |
|---|---|---|
| Nome hero | `.hero-name` | `font-size: clamp(3.8rem, 9.5vw, 8.5rem)` |
| Links nav | `nav ul a` | `font-size: .85rem` |
| Logo nav | `.nav-logo` | `font-size: .90rem` |
| Tags de tech | `.tag` | `font-size: .62rem` |
| Texto corpo | `.sobre-body` | `font-size: .95rem` |

---

## ⚡ Ajustando a animação de ondas → `js/main.js`

```js
const STEP  = 28;   // ← espaçamento entre os pontos (maior = mais espaçado)
const DOT_R = 1.4;  // ← tamanho dos pontos
```

Velocidade e intensidade das ondas:
```js
const dy =
  Math.sin(i * 0.38 + wt * 0.036) * 5.5 +   // ← 0.036 = velocidade / 5.5 = amplitude
  Math.sin(i * 0.18 + j * 0.28 + wt * 0.022) * 3.5;
```

---

## 🚀 Como rodar localmente

Não precisa instalar nada. Só abre o `index.html` no browser:

```
Clique duplo no index.html → abre no navegador
```

Ou com VS Code, instala a extensão **Live Server** e clica em **"Go Live"** no rodapé.

---

## 🌐 Como publicar no Netlify (gratuito)

1. Acessa [netlify.com](https://netlify.com) e cria uma conta
2. Clica em **"Add new site" → "Deploy manually"**
3. Arrasta a pasta do projeto inteira
4. Pronto — seu portfólio está no ar com um link público! ✅

Para conectar com GitHub e atualizar automaticamente a cada `git push`:
1. **"Add new site" → "Import an existing project"**
2. Conecta o GitHub e seleciona o repo
3. `Base directory`: deixa vazio (se o `index.html` estiver na raiz)
4. `Build command`: deixa vazio
5. `Publish directory`: deixa vazio ou `.`

---

## 📝 Licença

Livre para uso pessoal. Se usar como base pro seu portfólio, deixa uma ⭐ no repo!
