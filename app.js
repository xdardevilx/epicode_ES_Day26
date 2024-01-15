let ageUser = [];

class User {
  constructor(_firstname, _lastname, _age, _location) {
    this.firstname = _firstname;
    this.lastname = _lastname;
    this.age = _age;
    this.location = _location;
  }

  ages() {
    ageUser.push(this.age);
    console.log(ageUser);
  }

  comparation(altraEta, nome) {
    if (this.age > altraEta) {
      console.log(
        this.firstname +
          " " +
          this.lastname +
          " " +
          "è più vecchio di" +
          " " +
          nome
      );
    } else {
      console.log(
        this.firstname +
          " " +
          this.lastname +
          " " +
          "è più giovane di" +
          " " +
          nome
      );
    }
  }
}
const user1 = new User("John", "Doe", 25, "Paris");
const user2 = new User("Jane", "Doe", 20, "Paris");
const user3 = new User("pincopallino", "Doe", 87, "marte");
user1.ages(user2);
user2.ages();
user3.ages();
user1.comparation(user2.age, user2.firstname);
user2.comparation(user1.age, user1.firstname);
user3.comparation(user1.age, user1.firstname);

