# 🧠 Conversor px → rem para arquivos CSS

Este script Node.js automatiza a conversão de valores `px` para `rem` em arquivos `.css`, tornando seu código mais responsivo e seguindo boas práticas de desenvolvimento front-end.

## 📌 Por que usar?

Ao trabalhar com projetos que utilizam unidades fixas como `px`, converter manualmente grandes volumes de código para `rem` pode ser demorado. Este script resolve esse problema automaticamente, economizando tempo e garantindo consistência na conversão.

---

## ⚙️ Tecnologias utilizadas

- **Node.js**
  → Plataforma que permite executar JavaScript fora do navegador. Usei para criar o script de automação no terminal.

- **`fs` (File System)**
  → Módulo nativo do Node.js usado para ler e escrever arquivos do sistema de forma assíncrona.

- **`path`**
  → Módulo nativo do Node.js utilizado para manipular caminhos de arquivos de forma segura e multiplataforma.

- **JavaScript**
  → Linguagem principal do script, utilizada para controlar o fluxo da aplicação, percorrer arquivos e fazer as substituições de unidades.

---

## 🚀 Funcionalidades

- 📁 Lê todos os arquivos `.css` de uma pasta
- 🔁 Converte valores `px` para `rem` (somente se ≥ 10px, para preservar bordas, sombras etc)
- 🧮 Base de conversão: `1rem = 10px`
- 💾 Sobrescreve os arquivos com o novo conteúdo
- 📦 Adaptável para outras unidades, se necessário

---

## 📂 Estrutura do projeto

```
├─ convert.js          # Script principal
├─ layout.css          # Exemplo de CSS com px
└─ components.css      # Outro exemplo de CSS com px
```

> 📌 **Observação:**
> Os arquivos `.css` e o script `convert.js` devem estar **na mesma pasta**.
> Ao executar o script, ele irá procurar por todos os arquivos `.css` **dentro da pasta onde está localizado**, ignorando a si mesmo.

---

## 💻 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/islaianeribeiro/px-to-rem-convert.git
```

### 2. Acesse a pasta do projeto:

```bash
cd px-to-rem-convert
```

### 3. Instale o Node.js (se ainda não tiver)

[Baixe o Node.js aqui](https://nodejs.org/)

### 4. Execute o script

```bash
node convert.js
```

> O script irá converter todos os arquivos `.css` da pasta atual (exceto ele mesmo) de `px` para `rem`.

---

## 🧪 Exemplo antes/depois

### Antes (`layout.css`)

```css
.container {
  width: 1200px;
  padding: 40px 20px;
}
```

### Depois

```css
.container {
  width: 120rem;
  padding: 4rem 2rem;
}
```

### Exemplo de classe com valores pequenos (não convertido)

```css
.card {
  width: 30rem;
  padding: 2rem;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

---

## ✏️ Adaptação

### Para adaptar:

- Altere a variável `baseRem` no topo do arquivo (`1rem = Xpx`).
- Ou modifique a função para converter para `em`, `%`, `vw` etc.

---

## 🧠 Conclusão

Este projeto surgiu de uma necessidade real: automatizar uma tarefa repetitiva em arquivos grandes. Como desenvolvedora, acredito que nossa missão é resolver problemas de forma eficiente, e automatizar é uma das melhores ferramentas para isso.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Sinta-se livre para usar, adaptar e compartilhar.

---

## 🌐 Conecte-se

Feito com 💻 por **Islaiane Ribeiro**

🔗[https://www.linkedin.com/in/islaianeribeiro](https://www.linkedin.com/in/islaianeribeiro)
