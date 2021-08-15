function addUser(){
    player1=document.getElementById("player1_input").value;
    player2=document.getElementById("player2_input").value;

    localStorage.setItem("player 1",player1);
    localStorage.setItem("player 2",player2);

    window.location = "https://hasita-art.github.io/Game-Page/game_page.html";
};