// Función para agregar productos al carrito
function addToCart(productId, productName, productPrice) {
    // Obtener el carrito desde localStorage o inicializarlo si está vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Agregar el producto al carrito
    cart.push({ id: productId, name: productName, price: productPrice });
  
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Mostrar una notificación
    alert(`${productName} se ha agregado al carrito.`);
  
    // Actualizar el contador del carrito
    updateCartCount();
  }
  
  // Función para actualizar el contador del carrito
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
  }
  
  // Asociar el evento a los botones de "Agregar al carrito"
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      const productName = button.getAttribute('data-name');
      const productPrice = button.getAttribute('data-price');
      addToCart(productId, productName, productPrice);
    });
  });
  
  // Actualizar el contador cuando se carga la página
  document.addEventListener('DOMContentLoaded', updateCartCount);
  