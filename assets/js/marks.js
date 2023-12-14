function goQ(){
    var perc = document.getElementById("perc").value;
    var name = document.getElementById("name33").value;
    var disab = document.getElementById("disab").value;
    localStorage.setItem("marks",perc);
    localStorage.setItem("name",name);
    localStorage.setItem("disab",disab);
    window.location = "questions.html";
}