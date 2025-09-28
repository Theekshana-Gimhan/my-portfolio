# KPI Dashboard

The KPI Dashboard is a web application designed to track and visualize Key Performance Indicators (KPIs). It provides a user-friendly interface for managing and monitoring various business metrics, with specific modules for Admission and Visa KPIs. The application is built using ASP.NET Core and Entity Framework Core, and it includes features for user authentication, data management, and reporting.

## Features

- **User Authentication:** Secure user registration and login system using ASP.NET Core Identity.
- **KPI Management:** Create, read, update, and delete (CRUD) operations for KPIs.
- **Dashboard:** A comprehensive dashboard to visualize KPIs and track progress against targets.
- **Data Export:** Export KPI data to various formats, such as CSV and PDF.
- **Email Notifications:** Send email notifications for important events and alerts.
- **Role-Based Access Control:** Different levels of access for administrators and regular users.

## Technologies Used

- **ASP.NET Core:** A cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.
- **Entity Framework Core:** A modern object-database mapper for .NET. It supports LINQ queries, change tracking, updates, and schema migrations.
- **SQL Server:** A relational database management system used for data storage.
- **Bootstrap:** A popular CSS framework for developing responsive and mobile-first websites.
- **jQuery:** A fast, small, and feature-rich JavaScript library.
- **Chart.js:** A flexible JavaScript charting library for creating beautiful and interactive charts.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- .NET 9.0 SDK
- SQL Server
- A code editor like Visual Studio or VS Code

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/KPI_Dashboard.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd KPI_Dashboard
   ```
3. **Restore the .NET packages:**
   ```sh
   dotnet restore
   ```
4. **Manage sensitive settings (e.g., database connection strings, email credentials):**
   **DO NOT** hardcode sensitive information directly into `appsettings.json`.
   For development, use **ASP.NET Core User Secrets**.
   For production, use a secure solution like **Azure Key Vault**, **environment variables**, or other secure configuration providers.

   To set up User Secrets for development:
   ```sh
   dotnet user-secrets init
   dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=(localdb)\MSSQLLocalDB;Database=KPI_Dashboard;Trusted_Connection=True;MultipleActiveResultSets=true"
   dotnet user-secrets set "EmailSettings:SenderEmail" "your-email@example.com"
   dotnet user-secrets set "EmailSettings:SmtpServer" "smtp.example.com"
   dotnet user-secrets set "EmailSettings:SmtpPort" "587"
   dotnet user-secrets set "EmailSettings:SmtpPassword" "your-email-password"
   dotnet user-secrets set "EmailSettings:UseSsl" "true"
   ```
   (Replace placeholder values with your actual development credentials.)
5. **Apply the database migrations:**
   ```sh
   dotnet ef database update
   ```
6. **Run the application:**
   ```sh
   dotnet run
   ```

### Running Tests

To execute the project's unit tests and ensure everything is working as expected, navigate to the project root and run:

```sh
dotnet test
```

## Usage

- **Admin User:** The default admin user can be set up through the registration page. The first registered user will have admin privileges.
- **KPIs:** Navigate to the KPI section to add, edit, or view KPIs.
- **Dashboard:** The main dashboard provides an overview of all KPIs and their current status.

## What We Do

The KPI Dashboard is a web application designed to track and visualize Key Performance Indicators (KPIs). It currently provides:

*   **User Authentication:** Secure user registration and login using ASP.NET Core Identity.
*   **KPI Management:** Full CRUD operations for various KPIs.
*   **Dashboard:** A comprehensive dashboard to visualize KPIs and track progress against targets.
*   **Data Export:** Functionality to export KPI data (e.g., CSV, PDF).
*   **Email Notifications:** System for sending email notifications for important events.
*   **Role-Based Access Control:** Different access levels for administrators and regular users.

## Project Status

The project is now feature-complete. All known bugs and build warnings have been resolved, and comprehensive tests have been successfully run, ensuring the application's stability and reliability. A CI/CD pipeline has been set up using GitHub Actions to automate the build, test, and deployment processes.

## Database Migrations

When you need to update the database schema, use the following commands:

1. **Add a new migration:**
   ```sh
   dotnet ef migrations add YourMigrationName
   ```
2. **Apply the migration to the database:**
   ```sh
   dotnet ef database update
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
