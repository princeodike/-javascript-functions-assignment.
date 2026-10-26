
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((users) => {

            // Filter users whose website ends in .org
            const filteredUsers = users.filter((user) => {
                return user.website.endsWith(".org");
            });

            // Get only the names and emails
            const selectedUsers = filteredUsers.map((user) => {
                return {
                    name: user.name,
                    email: user.email
                };
            });

            // Display each selected user
            selectedUsers.forEach((user) => {
                console.log(`Name: ${user.name}`);
                console.log(`Email: ${user.email}`);
                console.log("-------------------");
            });

        })
        .catch((error) => {
            console.log("Error fetching users:", error);
        });
}

getUsers();
