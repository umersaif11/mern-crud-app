# MERN Stack User Management System (CRUD)

A full-stack web application built to demonstrate fundamental Create, Read, Update, and Delete operations using the MERN stack. This project serves as a practical implementation of RESTful APIs, database management, and dynamic frontend state management.

## 🚀 Tech Stack

**Frontend:**
* React.js (Single Page Application)
* React Router DOM (Client-side routing)
* Axios (HTTP client for API requests)
* Bootstrap / Custom CSS (Styling)

**Backend:**
* Node.js & Express.js (REST API framework)
* MongoDB (NoSQL Database)
* Mongoose (Object Data Modeling)
* CORS (Cross-Origin Resource Sharing)

## ✨ Features

* **Create:** Add new users to the database via a dedicated React form.
* **Read:** Fetch and display a dynamic table of all existing users on the home page.
* **Update:** Select a specific user, pull their existing data into a form, and save edits to the database.
* **Delete:** Instantly remove a user from the database and update the frontend UI without reloading the page.

## 🛠️ Prerequisites

Before running this project locally, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Running locally on port 27017)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (Optional, for visual database management)

## 💻 Local Setup & Installation

This project is split into two directories: `client` (Frontend) and `server` (Backend). You will need to run two separate terminal windows to start both servers.

### 1. Backend Setup
Open a terminal, navigate to the `server` directory, and run:

```bash
# Install dependencies
npm install

# Start the Express server (Runs on http://localhost:3001)
npm start 
# or 'nodemon index.js' if you have nodemon installed
   ```

a. Navigate to the project directory
```bash
   cd react-tour-travel-app.git
```    
b. Start the development server
```bash
   npm run dev
```  

### 2. Frontend Setup
Open a second terminal, navigate to the client directory, and run:

```bash
# Install dependencies
npm install

# Start the React development server (Runs on http://localhost:5173)
npm run dev
   ```

   