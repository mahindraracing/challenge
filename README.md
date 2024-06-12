# Sprint Web Dev - Challenge Mahindra 🏎️

## Nomes & RM's

<h2>

<li>RM 555499 - Matheus Montovaneli</li>
<li>RM 554763 - Caio Suzano </li>
<li>RM 555768 - Guilherme Linard </li>
<li>RM 555159 - Lucas Vasquez Silva </li>
<li>RM 555004 - André Nakamatsu Rocha</li>

# Plataforma de Streaming usando JS!

<img src="docs/img/png_readme.png">


## Explicando os <a href="https://github.com/mahindraracing/challenge/tree/main/assets/js">Códigos</a>

## `Chat Livestream usando DOM`

### 1. Captura e Validação do Comentário

```JS
document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const campo = document.getElementById("comment-input").value

    if (campo === "") {
        alert("Preencha o campo de comentário!")
        return;
    }
```

Nesta seção, o código captura o `evento de envio do formulário` de comentário. Em seguida, ele impede o comportamento padrão do formulário, garantindo que a página não seja `recarregada` ao enviar o formulário. Após isso, o código `verifica` se o campo de comentário está vazio. Se estiver vazio, exibe um `alerta e interrompe a execução do código`.



## Objetivo

