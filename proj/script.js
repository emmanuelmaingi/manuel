// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Validate form inputs
    const customerName = document.getElementById('customerName').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    const orderItem = document.getElementById('orderItem').value.trim();

    if (customerName === '' || customerEmail === '' || orderItem === '') {
        document.getElementById('error-message').textContent = 'Please fill in all fields.';
    } else {
        document.getElementById('error-message').textContent = '';

        // Construct order details table
        const orderDetailsTable = `
            <table>
                <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Ordered Item</th>
                </tr>
                <tr>
                    <td>${customerName}</td>
                    <td>${customerEmail}</td>
                    <td>${orderItem}</td>
                </tr>
            </table>
        `;

        // Display order details
        document.getElementById('orderTable').innerHTML = orderDetailsTable;
        // Reset form
        document.getElementById('orderForm').reset();
    }
}

// Event listener for form submission
document.getElementById('orderForm').addEventListener('submit', handleFormSubmission);