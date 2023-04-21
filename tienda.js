function comprar(producto) {
  var linkPago = 'https://tppay.me/lfsqxe90';
  var linkDrive = 'https://drive.google.com/file/d/1YBar8JPfUpeynfnp18Ue5zWRDtxRw_lR/view?usp=sharing';

  var confirmacion = confirm('¿Estás seguro de que deseas comprar este producto?');

  if (confirmacion) {
    // Abre el enlace de pago de Tropipay en una nueva ventana
    window.open(linkPago, '_blank');

    // Inicia el temporizador visible
    var tiempoRestante = 5*60;
    var temporizador = setInterval(() => {
      tiempoRestante--;
      var minutos = Math.floor(tiempoRestante / 60);
      var segundos = tiempoRestante % 60;
      var tiempoRestanteTexto = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
      document.getElementById('temporizador').innerHTML = 'Tiempo restante: ' + tiempoRestanteTexto;
      if (tiempoRestante == 0) {
        clearInterval(temporizador);
        window.location.href = linkDrive;
      }
    }, 1000);
  } else {
    alert('La compra ha sido cancelada.');
  }
}