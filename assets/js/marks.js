function goQ(){
    var perc = document.getElementById("perc").value;
    var name = document.getElementById("name33").value;
    var disab = document.getElementById("disab").value;
    var dob = document.getElementById("msg_subject").value;
    var y = (dob).slice(0,4);
    var m = (dob).slice(5,7);
    var d = (dob).slice(8,10);
    if(parseInt(perc) > 100 || parseInt(perc) < 0 || parseInt(y) < 1990 || parseInt(y) > 2020 || parseInt(m) > 12 || parseInt(m) < 1 || parseInt(d) > 31 || parseInt(d) < 1){
        swal("Error", "Don't Leave Any Field Empty And Enter Datas Correctly !", "error");
    }
    else {
    localStorage.setItem("marks",perc);
    localStorage.setItem("name",name);
    localStorage.setItem("disab",disab);
    window.location = "questions.html";
    }
}