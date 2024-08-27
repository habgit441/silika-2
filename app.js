async function fetchAndDisplayData() {
  console.log("initializing");
  try {
    console.log("initializing try");

    const response = await fetch("https://dummyjson.com/users"); // Added 'https:' and corrected the endpoint
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Log the fetched data to see its structure
    displayData(data.users); // Pass the correct data structure to display
  } catch (error) {
    console.log("There has been a problem with your fetch operation", error);
  }
}

// Function to display data on the page
function displayData(users) {
  const container = document.getElementById("user-container");
  container.innerHTML = ""; // Clear any existing content

  users.forEach((user) => {
    // Iterate over the correct data structure
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
                    <h2>${user.firstName} ${user.lastName}</h2>
                    <p>Email: ${user.email}</p>
                `;
    container.appendChild(userCard);
  });
}

// Fetch and display data when the page loads
window.onload = fetchAndDisplayData;
