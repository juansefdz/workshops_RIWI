class EmailNotification {
    sendNotification(message: string) {
      console.log(`Enviando notificación por correo: ${message}`);
    }
  }
  
  class SMSNotification {
    sendNotification(message: string) {
      console.log(`Enviando notificación por SMS: ${message}`);
    }
  }
  
  // Aquí está el código cliente que envía notificaciones.
  export function sendNotification(type: string, message: string) {
    if (type === "email") {
      const emailNotification = new EmailNotification();
      emailNotification.sendNotification(message);
    } else if (type === "sms") {
      const smsNotification = new SMSNotification();
      smsNotification.sendNotification(message);
    }
  }
  
  const message = "Tu pedido ha sido procesado.";
  sendNotification("email", message);
  sendNotification("sms", message);
  
  // Supongamos que ahora queremos agregar "Push Notification"
  
  // Clase Push Notification
  class PushNotification {
    sendNotification(message: string) {
      console.log(`Enviando notificación por Push: ${message}`);
    }
  }
  
  // Ahora tenemos que modificar la función sendNotification para incluir Push
  function sendNotification2(type: string, message: string) {
    if (type === "email") {
      const emailNotification = new EmailNotification();
      emailNotification.sendNotification(message);
    } else if (type === "sms") {
      const smsNotification = new SMSNotification();
      smsNotification.sendNotification(message);
    } else if (type === "push") {
      const pushNotification = new PushNotification();
      pushNotification.sendNotification(message);
    }
  }
  
   sendNotification("push", "Tienes una nueva actualización.");