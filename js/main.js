let cont1 = document.getElementById('cont1'),
  cont2 = document.getElementById('cont2'),
  cont3 = document.getElementById('cont3')
let cant1 = 0,
  cant2 = 0,
  cant3 = 0,
  tiem = 40

let tiempo1 = setInterval(() => {
  cont1.textContent = cant1 += 1

  if (cant1 === 80) {
    clearInterval(tiempo1)
  }

}, 40)

let tiempo2 = setInterval(() => {
  cont2.textContent = cant2 += 1

  if (cant2 === 803) {
    clearInterval(tiempo2)
  }

}, 10)

let tiempo3 = setInterval(() => {
  cont3.textContent = cant3 += 1

  if (cant3 === 4) {
    clearInterval(tiempo3)
  }

}, 150)