// Clases concretas para manejar MySQL
class MySQLConnection {
  connect() {
    console.log("Conectando a MySQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en MySQL: ${query}`);
  }
}

// Clases concretas para manejar PostgreSQL
class PostgreSQLConnection {
  connect() {
    console.log("Conectando a PostgreSQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en PostgreSQL: ${query}`);
  }
}

// Cliente que debe manejar cada tipo de conexión
function runQuery(dbType: string, query: string) {
  if (dbType === "mysql") {
    const mysql = new MySQLConnection();
    mysql.connect();
    mysql.executeQuery(query);
  } else if (dbType === "postgresql") {
    const postgres = new PostgreSQLConnection();
    postgres.connect();
    postgres.executeQuery(query);
  }
}

// Ejemplo de uso sin Abstract Factory
runQuery("mysql", "SELECT * FROM users;");
runQuery("postgresql", "SELECT * FROM customers;");
