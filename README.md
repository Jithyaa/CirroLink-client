# Client - E-commerce Cart System

This is the **Frontend** of the E-commerce Cart System, built with React.js. It provides a user-friendly interface for customers to browse products, manage their cart, and place orders.

---

## **Features**
- Displays products in a card layout.
- Add products to the cart (handles duplicates by adjusting quantities).
- View and manage the cart.
- Process payments.
- View the order history.

---

## **Technologies Used**
- **Frontend Framework:** React.js (with Vite)
- **Styling:** SCSS, Material-UI
- **State Management:** Redux
- **API Communication:** Axios

---

## **Setup Instructions**

### Prerequisites
- Node.js installed on your machine.

---

### Steps to Run the Frontend
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
2. **Navigate to the Frontend Folder**:
   ```bash
   cd cirrolink-client
3. **Install Dependencies**:
   ```bash
    npm install
4. **Environment Variables: Create a .env file in the frontend folder with the following content**:
   ```bash
   VITE_API_URL = http://localhost:5000
   PORT = 5173
5. **Start the Frontend Server**:
   ```bash
   npm run dev
6. **Access the Application**:
   visit: http://localhost:5173