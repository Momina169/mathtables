var input = document.getElementById("no");
input.addEventListener("keypress", function(event){
    if(event.key==='Enter'){
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

function clearScreen(){
    document.getElementById("display").innerHTML = "";
}
function calc(){
var n = document.getElementById("no").value;
for(i=1; i<=10; i++){
    document.getElementById("display").innerHTML += `${n} * ${i} = ${n*i} <br>`;
    
};
} 