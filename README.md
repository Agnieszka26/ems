# Employee Management System (EMS)

## Overview

The **Employee Management System (EMS)** is an internal tool designed to manage employees and collect feedback within an organization. Built with [Nx](https://nx.dev), the app leverages modern frameworks like **Next.js**, **NestJS**, and **React** for a scalable, feature-rich solution.

---

## Features

### Employee Management
- **CRUD Operations for Employees**:
  - Add, update, view, and delete employees.
  - Maintain an organized and searchable employee database.

### Feedback Management
- **Opinion Submission**: Employees can submit feedback about the organization via the website.
- **Admin Panel for Moderation**:
  - Approve or reject submitted feedback.
  - Control what feedback is displayed on the site.

### Nx Workspace Benefits
- Modular architecture for easy scalability and maintainability.
- Fast builds and test execution using Nx's caching mechanism.
- Support for multiple applications and libraries in a single repository.

---

## Tech Stack

### Backend
- **NestJS**: For creating scalable and maintainable APIs.
- **Airtable**: Lightweight database for managing employee and feedback data.
- **Axios**: Simplified HTTP requests.

### Frontend
- **Next.js**: For server-side rendering and static site generation.
- **React**: Component-based architecture for building dynamic UIs.
- **TailwindCSS + DaisyUI**: For responsive and customizable styling.
- **Framer Motion**: Animations and interactive UI components.

### Utilities
- **Class-Transformer & Class-Validator**: For data validation and transformation.
- **React-Router-DOM**: Efficient routing for admin and feedback views.
- **Vitest & Jest**: Comprehensive testing tools.

---

## Prerequisites
Before you can use this automation, ensure you have the following:

- UiPath Studio installed
- Valid licenses for UiPath Robot and Orchestrator (if deploying the bot)
- Access to both the source and target applications
- Necessary credentials and permissions to interact with both applications
## Installation and Setup

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn
- Nx CLI (`npm install -g nx`)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ems.git
   cd ems

2. Install dependencies:
   ```bash
   npm install

3. Configure environment variables:
- Create a .env file in the root directory.
- Add the required variables:
  ```bash
    DATABASE_URL=your_airtable_url
    NEXTAUTH_SECRET=your_nextauth_secret

4. Run the development server:
    ```bash
      npx nx serve website

5. Access the application:
- Frontend: Navigate to http://localhost:3000.
- Backend API: Available at http://localhost:4000.

## NX Commands
### Development
- Run the development server for the website:
  ```bash
    npx nx serve website

- Run the admin:
  ```bash
    npx nx serve admin
- Run the backend:
  ```bash
    npx nx serve backend

### Building for Production

- Build the website:
  ```bash
   npx nx build website
- Build the backend:
  ```bash
   npx nx build backend
- Build the admin:
  ```bash
   npx nx build admin

### Project Graph
Visualize the dependencies in your Nx workspace:
    ```bash
      npx nx graph
## Folder Structure
      ├── apps/
      │   ├── website/         # Next.js public frontend for EMS
      │   ├── backend/         # NestJS backend for EMS
      |   ├── admin/           # NestJS admin website for EMS
      ├── libs/
      │   ├── common-ui/       # Shared UI components
      ├──.editorconfig         # Editor configuration, see http://editorconfig.org
      ├──.eslintignore
      ├──.gitignore            # ignored files
      ├──.prettierignore       # Add files here to ignore them from prettier formatting
      ├──.prettierrc
      ├── jest.config.ts
      ├── nx.json              # Nx workspace configuration
      ├── project.json         # Project-specific configuration
      ├── package.json         # Dependency and script management
      ├── README.md
      ├── tailwind.config.js   # TailwindCSS configuration
      ├── tsconfig.base.json   # TypeScript base configuration
      ├── vitest.workspace.ts
## Useful Links
- [Nx Documentation](https://nx.dev/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://v2.tailwindcss.com/docs)

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

