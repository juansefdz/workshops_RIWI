interface UserType {
  accessUser(message: string): void;
}
class Admin implements UserType {
  accessUser(message: string) {
    console.log(`Accediendo como administrador: ${message}`);
  }
}
class User implements UserType {
  accessUser(message: string) {
    console.log(`Accediendo como usuario: ${message}`);
  }
}

abstract class UserFactory {
  abstract userAccess(): UserType;

  access(message: string): void {
    const notification = this.userAccess();
    notification.accessUser(message);
  }
}

class AdminAccessFactory extends UserFactory {
  userAccess(): UserType {
    return new Admin();
  }
}
class UserAccessFactory extends UserFactory {
  userAccess(): UserType {
    return new User();
  }
}

//USO DE LA CLASE FACTORY
const adminLoginFactory = new AdminAccessFactory();
const userLoginFactory = new UserAccessFactory();

adminLoginFactory.userAccess();
userLoginFactory.userAccess();
