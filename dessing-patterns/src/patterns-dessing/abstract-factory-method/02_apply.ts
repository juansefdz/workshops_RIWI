//1. creación interfaz para los pagos

interface PaymentMethod {
    doPayment(): void;
}

//2. creación de las clases concretas para los pagos

class PayPalPayment implements PaymentMethod {
    doPayment() {
        console.log("Pagando con PayPal...");
    }
}

class StripePaypal implements PaymentMethod {
    doPayment() {
        console.log("Pagando con Stripe...");
    }
}

//3. creación de la Abstract Factory Global

interface PaymentFactory{
    createPayment(): PaymentMethod;
}

//4. creación de las clases concretas para los pagos

class PaypalFactory implements PaymentFactory{
    createPayment(): PaymentMethod{
        return new PayPalPayment();
    }   
}

class StripeFactory implements PaymentFactory{
    createPayment(): PaymentMethod{
        return new StripePaypal();
    }
}

//5. creación del cliente que debe manejar cada tipo de pago

class PaymentCLient{
    private payment:PaymentMethod;

    constructor(factory: PaymentFactory){
        this.payment = factory.createPayment();
    }
    
    public proccessPayment(amount: number){
        this.payment.doPayment();
    }

}

const PayPalPay = new PaymentCLient(new PaypalFactory());
const StripePay = new PaymentCLient(new StripeFactory());

PayPalPay.proccessPayment(100);
StripePay.proccessPayment(200);