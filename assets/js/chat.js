document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const campo = document.getElementById("comment-input").value

    if (campo === "") {
        alert("Preencha o campo de comentário!")
        return;
    }

    const commentValue = document.getElementById("comment-input").value;

    const newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("chat-containers");

    const newIconImg = document.createElement("img");

    newIconImg.src = "assets/img/noicon.jpg"; 
    newIconImg.alt = "Ícone";
    newIconImg.style.width = "25px";
    newIconImg.style.height = "25px";
    newIconImg.style.float = "left";
    newIconImg.style.marginRight = "10px";

    const newCommentPara = document.createElement("p");
    newCommentPara.classList.add("coment");
    newCommentPara.textContent = commentValue;

    newCommentDiv.appendChild(newIconImg);
    newCommentDiv.appendChild(newCommentPara);

    const inputContainer = document.querySelector(".input_chat_mahindra");

    inputContainer.parentNode.insertBefore(newCommentDiv, inputContainer);

    document.getElementById("comment-input").value = "";
});