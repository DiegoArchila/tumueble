const recortarTamanioDeUnArreglo = (arreglo, tamanio) => {
  let arregloModificado = [];
  for (let i = 0; i < tamanio && i < arreglo.length; i++) {
    arregloModificado.push(arreglo[i]);
  }
  return arregloModificado;
};

module.exports = {
  recortarTamanioDeUnArreglo,
};
