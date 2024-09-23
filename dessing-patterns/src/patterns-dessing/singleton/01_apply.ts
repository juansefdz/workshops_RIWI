

class Logger {

    private static instance: Logger;


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


    static  getInstance(){
        if(!Logger.instance){
            return new Logger();
        }
        return Logger.instance;
    }
  }

  //CASO DE USO SINGLETON
  
    const logger= Logger.getInstance();

    logger.log("Ocurrio un error")
    logger.log("ocurrio un segundo error")

    logger.printLogs()
    

