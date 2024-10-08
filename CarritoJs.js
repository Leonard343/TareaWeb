document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', actualizarTotal);
});

function actualizarTotal() {
    const precios = [50, 70, 140]; // Los precios correspondientes
    const cantidad1 = parseInt(document.getElementById('cantidad1').value);
    const cantidad2 = parseInt(document.getElementById('cantidad2').value);
    const cantidad3 = parseInt(document.getElementById('cantidad3').value);
    
    document.getElementById('total1').innerText = `$${cantidad1 * precios[0]}`;
    document.getElementById('total2').innerText = `$${cantidad2 * precios[1]}`;
    document.getElementById('total3').innerText = `$${cantidad3 * precios[2]}`;
}

// Función para comprar productos
function comprar() {
    alert("Compra realizada con éxito");
}

// Función para volver a la tienda
function volver() {
    alert("Regresando a la tienda...");
}

// Lógica para eliminar productos al hacer clic en el botón de eliminar
document.querySelectorAll('.delete').forEach(boton => {
    boton.addEventListener('click', function() {
        const fila = this.closest('tr'); // Encuentra la fila más cercana
        fila.remove(); // Elimina la fila del DOM
        actualizarTotal(); // Actualiza el total después de eliminar
    });
});