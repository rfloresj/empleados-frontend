# Employee and Area Management Frontend

This project is a **frontend application** built with **Angular 19** that provides an interface for managing employees and areas within an organization. It is designed to integrate seamlessly with the **Employee and Area Management API** developed in **Node.js, Express, and Sequelize**.

---

## 🔥 Main Features

- 🎨 **Modern UI**: Built using Angular with a structured component-based architecture.
- 🛠 **Employee and Area Management**: Create, Read, Update, and Delete (CRUD) operations.
- 🏢 **Entity Relationships**: Employees are linked to specific areas.
- 📡 **REST API Integration**: Communicates with a backend API to fetch and modify data.
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
 ┃ ┃ ┃ ┣ 📂 nav-bar        # Navigation bar component
 ┃ ┃ ┃ ┗ 📂 app-menu       # Sidebar menu component
 ┃ ┃ ┣ 📂 services        # Services for API interaction
 ┃ ┃ ┃ ┣ 📜 employee.service.ts
 ┃ ┃ ┃ ┗ 📜 area.service.ts
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

### 🔹 Employees

- View the list of employees.
- Create a new employee.
- Edit existing employees.
- Delete employees.

### 🔹 Areas

- View all areas.
- Create a new area.
- Edit an area.
- Delete an area.

---

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## 🔗 Related Projects

This frontend is designed to work with the **Employee and Area Management API**, built with **Node.js, Express, and Sequelize**.
You can find the backend repository here: [empleados-backend](https://github.com/rfloresj/empleados-backend)

---

This frontend is designed to provide an **intuitive and efficient** user experience for managing employees and areas within an organization. 🚀

