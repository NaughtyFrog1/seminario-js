function imprimirFecha(date1, date2) {
  console.log(
    date1.toLocaleDateString("es-AR"),
    date1.toLocaleTimeString("es-AR")
  );
}

function cambiarFechas(date1, date2) {
  dia2.setFullYear(dia1.getFullYear())
  dia1.setMonth(dia2.getMonth())
}

function restarFechas(date1, date2) {
  return new Date(date1 - date2)
}

const dia1 = new Date()
const dia2 = new Date(1575978300000)

imprimirFecha(dia1)
imprimirFecha(dia2)

imprimirFecha(restarFechas(dia1, dia2))

cambiarFechas(dia1, dia2)
imprimirFecha(dia1)
imprimirFecha(dia2)
