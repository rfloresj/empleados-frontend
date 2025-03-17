# Employee and Area Management Frontend

This project is a **frontend application** built with **Angular 19** that provides an interface for managing employees and areas within an organization. It is designed to integrate seamlessly with the **Employee and Area Management API** developed in **Node.js, Express, and Sequelize**.

---

## 🔥 Main Features

- 🎨 **Modern UI**: Built using Angular with a structured component-based architecture.
- 🛠 **Employee and Area Management**: Create, Read, Update, and Delete (CRUD) operations.
- 🏢 **Entity Relationships**: Employees are linked to specific areas.
- 📡 **REST API Integration**: Communicates with a backend API to fetch and modify data.
- 🔐 **JWT Authentication**: Secure login system with protected routes.
- 🌐 **Routing**: Uses Angular Router for navigation.
- 🎨 **Styling with TailwindCSS**: Responsive design and clean UI.
- 🔔 **Notifications**: Uses **Toastify.js** for alerts and success messages.
- 📂 **Organized Project Structure**: Maintains a clean architecture for scalability and maintainability.

---

## 📂 Project Structure

```bash
📦 empleados-frontend
 ┣ 📂 public               # Static assets
 ┃ ┗ 📂 assets             # Icons and images
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 components       # UI Components
 ┃ ┃ ┃ ┣ 📂 employees      # Employee-related components
 ┃ ┃ ┃ ┣ 📂 areas          # Area-related components
 ┃ ┃ ┃ ┣ 📂 login         # Login component
 ┃ ┃ ┃ ┣ 📂 nav-bar       # Navigation bar component
 ┃ ┃ ┃ ┗ 📂 app-menu      # Sidebar menu component
 ┃ ┃ ┣ 📂 services        # Services for API interaction
 ┃ ┃ ┃ ┣ 📜 employee.service.ts
 ┃ ┃ ┃ ┣ 📜 area.service.ts
 ┃ ┃ ┃ ┗ 📜 auth.service.ts  # Authentication service
 ┃ ┃ ┣ 📂 guards          # Route guards for authentication
 ┃ ┃ ┃ ┗ 📜 auth.guard.ts
 ┃ ┃ ┣ 📂 interceptors    # JWT token interceptor
 ┃ ┃ ┃ ┗ 📜 jwt.interceptor.ts
 ┃ ┃ ┣ 📜 app.component.ts  # Root component
 ┃ ┃ ┣ 📜 app.routes.ts     # Application routes
 ┃ ┃ ┗ 📜 app.config.ts     # Angular app configuration
 ┃ ┣ 📂 environments       # API Environment Configurations
 ┃ ┣ 📜 main.ts            # Main entry point
 ┃ ┗ 📜 styles.css         # Global styles
 ┣ 📜 angular.json         # Angular configuration
 ┣ 📜 package.json         # Dependencies and scripts
 ┣ 📜 tsconfig.json        # TypeScript configuration
 ┗ 📜 README.md            # Documentation
```

---

## 🚀 Technologies Used

- **Angular 19** - Frontend framework
- **TailwindCSS** - Modern styling framework
- **RxJS** - Reactive programming for handling API responses
- **JWT Authentication** - Secure user authentication and route protection
- **Toastify.js** - For user notifications
- **TypeScript** - Strongly typed JavaScript
- **Zone.js** - Execution context management

---

## 🛠 Installation & Setup

### Clone the repository:

```sh
git clone https://github.com/your-repo/empleados-frontend.git
cd empleados-frontend
```

### Install dependencies:

```sh
npm install
```

### Configure the API URL in `src/environments/environment.ts`

```ts
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
```

### To start a local development server, run:

```sh
ng serve
```

The application will be available at: **[http://localhost:4200](http://localhost:4200)**

---

## 📌 Available Features

### 🔹 Authentication (`/api/auth`)

- **POST** `/login` - Authenticate and obtain a JWT token.
  
  **Note:** The authentication in this project is currently hardcoded for testing purposes. To log in, use the following credentials:
  
  ```sh
  Email: user@test.com
  Password: password123
  ```
  
  In a real application, user credentials should be validated against a database, and passwords should be securely hashed.

### 🔹 Employees

- View the list of employees (**Requires Authentication**).
- Create a new employee (**Requires Authentication**).
- Edit existing employees (**Requires Authentication**).
- Delete employees (**Requires Authentication**).

### 🔹 Areas

- View all areas (**Requires Authentication**).
- Create a new area (**Requires Authentication**).
- Edit an area (**Requires Authentication**).
- Delete an area (**Requires Authentication**).

---

## 🔑 Authentication Mechanism

- Users authenticate by sending a **POST** request to `/api/auth/login` with valid credentials.
- If authenticated successfully, the server returns a **JWT token**.
- The frontend stores the JWT token in **localStorage**.
- To access protected routes, the **Auth Guard (`auth.guard.ts`)** ensures authentication.
- All API requests include the **JWT token** in the headers via an **HTTP Interceptor (`jwt.interceptor.ts`)**.

---

## 🔗 Related Projects

This frontend is designed to work with the **Employee and Area Management API**, built with **Node.js, Express, and Sequelize**.
You can find the backend repository here: [empleados-backend](https://github.com/rfloresj/empleados-backend)

---

This frontend is designed to provide an **intuitive and efficient** user experience for managing employees and areas within an organization. 🚀

