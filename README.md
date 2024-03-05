Event Management App

This project is a web application built with React and TypeScript, designed as an event management web application. It was developed as part of a frontend test at Pierce Tech. It simulates fetching data and stores it in a global state using Redux. The application allows users to view a list of events, show details, edit, or delete them. Additionally, there is a feature to add new events through a form with field validation.

Getting Started
To test the project, follow these steps:

Clone this repository.
```
git clone https://github.com/denisluft8/frontend-test-pierce-tech.git
```
Install dependencies.
```
cd frontend-test-pierce-tech
npm install
```
Run the development server.
```
npm run dev
```

Project Structure
```
src/
|-- api/                  # Contains functions for fetching mock data
|-- components/           # Reusable components (EventCard, Form, Input)
|-- pages/                # Application pages (HomePage)
|-- redux/                # Global state files with actions to set, add, update, and delete events
|-- types/                # Type definitions
|-- utils/                # Utilities such as date formatting
```

