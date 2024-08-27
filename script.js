function verificarTipo(){
    event.preventDefault();
    let radio = document.getElementsByName("tipo");
    if(radio[1].checked){
        mostrarHidden();
        alterarTotal(2);
        alterarParcelas();
    } else {
        esconderHidden();
        alterarTotal(1);
    }
}
function mostrarHidden(){
    document.getElementById("divparcelas").classList.remove("hidden");
}
function esconderHidden(){
    document.getElementById("divparcelas").classList.add("hidden");
}
function alterarTotal(tipo){
    let valor = document.getElementById("valor").value;
    let quantidade = document.getElementById("quantidade").value;
    if(tipo == 1){
        document.getElementById("total").innerHTML = "Total: R$" + (valor*quantidade).toFixed(2);
    }
    if(tipo == 2){
        document.getElementById("total").innerHTML = "Total: R$" + ((valor*quantidade)*1.05).toFixed(2);
    }
}
function alterarParcelas(){
    let valor = document.getElementById("valor").value;
    let quantidade = document.getElementById("quantidade").value;
    document.getElementById("parcelastexto").innerHTML = "1x: R$" + ((valor*quantidade)*1.05).toFixed(2) + "<br>"
    + "2x: R$" + (((valor*quantidade)*1.05)/2).toFixed(2);
}
function calcular(){
    event.preventDefault();
    let radio = document.getElementsByName("tipo");
    let valor = document.getElementById("valor").value;
    let quantidade = document.getElementById("quantidade").value;
    if(radio[1].checked){
        let select = document.querySelector("#parcelas");
        let valorselect = select.options[select.selectedIndex].value;
        if(valorselect == 1){
            alert("Compra realizada no Cartão em 1 parcela de: R$"+ ((valor*quantidade)*1.05).toFixed(2));
        } else if(valorselect == 2) {
            alert("Compra realizada no Cartão em 2 parcelas de: R$" + (((valor*quantidade)*1.05)/2).toFixed(2));
        }
    } else {
        alert("Compra realizada no Pix no valor de: R$" + (valor*quantidade).toFixed(2));
    }
}