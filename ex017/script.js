function tabuada() {
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
if (num.value.length == 0) {
     alert('Por favor informe um número.')
 } else {
     let n = Number(num.value)
     let c = 1
     tab.innerHTML = ''
     while (c <= 10) {
        let item = document.createElement('option')//para criar opções dentro do select
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`//isso aqui serve para destacar a linha
        tab.appendChild(item)
        c++
    }
 }
}