//1. se crea la interfaz
interface Notification {
  sendNotification(message: string): void;
}
//2. se crean las clases que implementan la interfaz
class EmailNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por correo: ${message}`);
  }
}

class SMSNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}
//3. se crea la clase abstracta que se encarga de crear las instancias

abstract class NotificationFactory {
  abstract createNotification(): Notification;

//4. se crea el método que se encarga de enviar la notificación
  sendNotification(message: string): void {
    const notification = this.createNotification();
    //5. se envía la notificación
    notification.sendNotification(message);
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}
class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}
//USO DE LA CLASE FACTORY

const message = "Tu pedido ha sido procesado.";

//1. se crea la clase que se encarga de crear las instancias
const emailNotificationFactory = new EmailNotificationFactory();
const smsNotificationFactory = new SMSNotificationFactory();

emailNotificationFactory.sendNotification(message);
smsNotificationFactory.sendNotification(message);
