score=0;
function u(){
    score=score+1;
    document.getElementById("score").innerHTML="score-"+score;
}
function s(){
    localStorage.setItem("score-",score);
}
function n(){
    window.location="secondpage.html";
}