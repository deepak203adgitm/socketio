let chatInput = document.querySelector(".chat-message");
let chatWindow =  document.querySelector(".chat-list");
let myName = document.querySelector(".me .user-name");
let username = prompt("Enter Your Name ");
if(username)
myName.textContent = username;
else { username = prompt("Enter Your Name ");
myName.textContent = username;
}



chatInput.addEventListener("keypress" , function(e){
    console.log(e);
    if(e.key == "Enter"){
        console.log("inside key enter");
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.textContent = username+ " : " +chatInput.value;
        chatWindow.append(chatDiv);
        // emit chat message and your name
        socket.emit("chat" , {username , chat:chatInput.value})
        chatInput.value = "";


        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
})