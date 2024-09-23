//1. se crea una interfaz para las BD

interface DBConnection{
    connect(): void;
    executeQuery(query: string): void;
}

// 2. se crean las clases concretas para manejar las DB
class MySQLConnection implements DBConnection {
    connect() {
      console.log("Conectando a MySQL...");
    }
  
    executeQuery(query: string) {
      console.log(`Ejecutando query en MySQL: ${query}`);
    }
  }
  
  // Clases concretas para manejar PostgreSQL
  class PostgreSQLConnection implements DBConnection {
    connect() {
      console.log("Conectando a PostgreSQL...");
    }
  
    executeQuery(query: string) {
      console.log(`Ejecutando query en PostgreSQL: ${query}`);
    }
  }


//3. se crea la Abstract Factory Global

interface DBFactory{
    createConnection(): DBConnection;

}

//4. se crean las clases concretas para manejar las DB

class MySQLFactory implements DBFactory{
    createConnection(): DBConnection{
        return new MySQLConnection();
    }
}
class PostgreSQLFactory implements DBFactory{
    createConnection(): DBConnection{
        return new PostgreSQLConnection();
    }
}
//5. se crea el cliente que debe manejar cada tipo de conexión
class DataBaseClient{
    private connection: DBConnection;

    constructor(factory: DBFactory){
        this.connection = factory.createConnection();
    }
    runQuery(query: string){
        this.connection.connect();
        this.connection.executeQuery(query);
    }
}


//USO DE ABSTRACT FACTORY

const mysql = new DataBaseClient(new MySQLFactory());
const postgres = new DataBaseClient(new PostgreSQLFactory());
mysql.runQuery("SELECT * FROM users");
postgres.runQuery("SELECT * FROM customers");
