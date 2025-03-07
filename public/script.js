// Sample data to be rendered (you can replace this with an API call)
const data = [
    { id: 1, name: "Google", type: "Search Engine", website: "https://www.google.com" },
    { id: 2, name: "Facebook", type: "Social Media", website: "https://www.facebook.com" },
    { id: 3, name: "Twitter", type: "Social Media", website: "https://www.twitter.com" },
    { id: 4, name: "GitHub", type: "Development Platform", website: "https://www.github.com" }
];

// Function to render data into the table
function renderTable(data) {
    const tbody = document.getElementById("result");
    tbody.innerHTML = ""; // Clear any existing content

    data.forEach(item => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = item.type;
        row.appendChild(typeCell);

        const websiteCell = document.createElement("td");
        const websiteLink = document.createElement("a");
        websiteLink.href = item.website;
        websiteLink.textContent = item.website;
        websiteLink.target = "_blank"; // Open link in a new tab
        websiteCell.appendChild(websiteLink);
        row.appendChild(websiteCell);

        tbody.appendChild(row);
    });
}

// Call the render function with the sample data
renderTable(data);