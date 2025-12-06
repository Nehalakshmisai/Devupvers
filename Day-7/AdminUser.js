const readline = require('readline');

//  interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = "User";
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
    }
}

// AdminUser class
class AdminUser extends User {
    constructor(name, email, permissions) {
        super(name, email);
        this.role = "Admin";
        this.permissions = permissions;
    }

    getPermissions() {
        return `Admin Permissions: ${this.permissions.join(", ")}`;
    }
}

rl.question("Enter name: ", (name) => {
    rl.question("Enter email: ", (email) => {
        rl.question("Enter role (User/Admin): ", (role) => {
            if (role.toLowerCase() === "admin") {
                rl.question("Enter permissions (comma-separated): ", (permInput) => {
                    const permissions = permInput.split(",").map(p => p.trim());
                    const admin = new AdminUser(name, email, permissions);
                    console.log(admin.getInfo());
                    console.log(admin.getPermissions());
                    rl.close();
                });
            } else {
                const user = new User(name, email);
                console.log(user.getInfo());
                rl.close();
            }
        });
    });
});
