let height = 0
let base1 = 0
let base2 = 0
let product = 0

document.getElementById('calculate').addEventListener('click', area)

function area () {
  height = document.getElementById('height').value
  base1 = document.getElementById('base1').value
  base2 = document.getElementById('base2').value
  product = (base1 / 2 + base2 / 2) * height
  alert(product)
}
