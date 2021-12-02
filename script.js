function clicked(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function cleared(){
    document.getElementById("screen").value=""
}


// Easy calculation using built in method

function clickedEqual(){
    var text = document.getElementById("screen").value
    var res= eval(text)
    document.getElementById("screen").value=res
}