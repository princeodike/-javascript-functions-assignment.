function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            console.log(`Name: ${users[0].name}`);
            console.log(`Email: ${users[0].email}`);
        })
        .catch((error) => {
            console.log("Error fetching users:", error);
        });
}


getUsers();