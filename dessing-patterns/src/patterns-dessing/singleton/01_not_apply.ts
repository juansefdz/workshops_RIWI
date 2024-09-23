class Logger {
  private logs: string[] = [];

  // Método para agregar un log
  public log(message: string): void {
    this.logs.push(message);
    console.log(`Log añadido: ${message}`);
  }

  // Método para mostrar los logs
  public printLogs(): void {
    console.log(this.logs);
  }
}

// Uso del logger sin Singleton

// Creamos dos instancias de Logger
const logger1 = new Logger();
logger1.log("Primera operación desde logger1");

const logger2 = new Logger();
logger2.log("Primera operación desde logger2");

// Ambos tienen logs independientes
logger1.printLogs(); // ["Primera operación desde logger1"]
logger2.printLogs(); // ["Primera operación desde logger2"]

// No comparten los logs porque son dos instancias diferentes
console.log(logger1 === logger2); // false
