// Procesador de pagos con tarjeta usando Stripe
class StripePaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con tarjeta vía Stripe`);
  }
}

// Procesador de pagos con PayPal
class PayPalPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con PayPal`);
  }
}

// Función cliente que decide el método de pago
function processPayment(method: string, amount: number) {
  if (method === "stripe") {
    const stripe = new StripePaymentProcessor();
    stripe.processPayment(amount);
  } else if (method === "paypal") {
    const paypal = new PayPalPaymentProcessor();
    paypal.processPayment(amount);
  }
}

// Uso del código sin Abstract Factory
processPayment("stripe", 100); // Procesando pago con Stripe
processPayment("paypal", 50); // Procesando pago con PayPal
