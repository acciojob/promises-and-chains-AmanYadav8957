//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevent the default form submission  

    const name = document.getElementById("name").value.trim();  
    const age = parseInt(document.getElementById("age").value.trim(), 10);  

    // Validate input fields  
    if (!name || isNaN(age)) {  
        alert("Please fill out both fields.");  
        return;  
    }  

    // Create a promise to handle the age check  
    const ageCheckPromise = new Promise((resolve, reject) => {  
        // Simulate asynchronous operation with setTimeout  
        setTimeout(() => {  
            if (age >= 18) {  
                resolve(name); // Resolve if age is 18 or older  
            } else {  
                reject(name); // Reject if age is under 18  
            }  
        }, 4000); // Wait 4 seconds  
    });  

    // Handle the promise resolution  
    ageCheckPromise  
        .then((name) => {  
            alert(`Welcome, ${name}. You can vote.`);  
        })  
        .catch((name) => {  
            alert(`Oh sorry ${name}. You aren't old enough.`);  
        });  
});