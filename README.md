
# Multi-Profile Browser Automation

## Overview

This project allows you to manage multiple browser profiles using Puppeteer, Angular, and MySQL. Each profile operates in an isolated environment with separate cookies, local storage, and cache. It includes features like proxy integration and browser fingerprint management.

## Repository Structure

```
multi-profile-browser/
├── backend/
│   ├── controllers/
│   │   └── profileController.js       # Route handlers for profiles
│   ├── models/
│   │   └── profileModel.js            # Data models for profiles
│   ├── services/
│   │   └── puppeteerService.js        # Puppeteer-related business logic
│   ├── routes/
│   │   └── profileRoutes.js           # Route definitions for profiles
│   ├── utils/
│   │   └── database.js                # Database connection utility
│   ├── config/
│   │   └── default.json               # Configuration files
│   ├── Dockerfile                     # Dockerfile for the backend
│   ├── app.js                         # Entry point for the backend server
│   ├── package.json                   # Backend dependencies and scripts
│   └── README.md                      # Backend specific documentation
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── profile-manager/
│   │   │   │   │   ├── profile-manager.component.html
│   │   │   │   │   ├── profile-manager.component.ts
│   │   │   │   │   ├── profile-manager.component.css
│   │   │   │   ├── proxy-settings/
│   │   │   │   │   ├── proxy-settings.component.html
│   │   │   │   │   ├── proxy-settings.component.ts
│   │   │   │   │   ├── proxy-settings.component.css
│   │   │   │   ├── browser-controls/
│   │   │   │   │   ├── browser-controls.component.html
│   │   │   │   │   ├── browser-controls.component.ts
│   │   │   │   │   ├── browser-controls.component.css
│   │   │   ├── services/
│   │   │   │   ├── profile.service.ts  # Angular service for profile management
│   │   │   │   ├── proxy.service.ts    # Angular service for proxy management
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   ├── assets/
│   │   ├── environments/
│   │   ├── index.html
│   │   ├── main.ts
│   ├── Dockerfile                     # Dockerfile for the frontend
│   ├── angular.json
│   ├── package.json                   # Frontend dependencies and scripts
│   └── README.md                      # Frontend specific documentation
├── .gitignore
├── docker-compose.yml                 # Docker Compose file to orchestrate containers
├── README.md                          # Project documentation
└── LICENSE
```

## Getting Started

### Prerequisites

- Node.js
- Docker
- Docker Compose
- MySQL

### Setting Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/multi-profile-browser.git
   cd multi-profile-browser
   ```

2. **Set up environment variables:**
   Create an `.env` file in the root directory with the following content:
   ```env
   MYSQL_ROOT_PASSWORD=yourpassword
   MYSQL_DATABASE=yourdatabase
   MYSQL_USER=youruser
   MYSQL_PASSWORD=yourpassword
   ```

3. **Build and run containers:**
   ```bash
   docker-compose build
   docker-compose up
   ```

### Backend

The backend is built with Node.js and Puppeteer.

- **Location:** `backend/`
- **Entry Point:** `app.js`

**Commands:**

- **Install dependencies:**
  ```bash
  cd backend
  npm install
  ```

- **Run the server:**
  ```bash
  npm start
  ```

### Frontend

The frontend is built with Angular.

- **Location:** `frontend/`
- **Entry Point:** `src/main.ts`

**Commands:**

- **Install dependencies:**
  ```bash
  cd frontend
  npm install
  ```

- **Run the development server:**
  ```bash
  ng serve
  ```

### Database

The project uses MySQL as the database.

- **Location:** `docker-compose.yml`
- **Service Name:** `db`

### Docker Compose

The `docker-compose.yml` file orchestrates the backend, frontend, and MySQL services.

**Commands:**

- **Build containers:**
  ```bash
  docker-compose build
  ```

- **Start containers:**
  ```bash
  docker-compose up
  ```

- **Stop containers:**
  ```bash
  docker-compose down
  ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the contributors of Puppeteer, Angular, and MySQL for their fantastic tools.
- Inspired by multi-profile management tools like GPMLogin and GenLogin.
