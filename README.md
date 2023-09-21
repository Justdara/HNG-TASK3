# React Firebase Image Gallery with Authentication

This project is a drag-and-drop image gallery application built with React, Firebase, React-Dnd and Material-UI (MUI). It allows users to securely authenticate and rearrange images using a simple drag-and-drop interface. This README file will guide you through setting up and running the application.

Live Demo: [Image Gallery App](http://localhost:3000)

- [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Contributing](#contributing)

## Features

- User authentication using Firebase Authentication.
- Drag-and-drop images
- Responsive design
- Search function for image tags

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your local development machine.
- Firebase account and a Firebase project created.
- Firebase Authentication enabled with at least one authentication provider (e.g., email/password, Google, etc.).

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/Justdara/HNG-TASK3.git

2. Change into the project directory:

   cd react-firebase-image-gallery

3. Install project dependencies:

   npm install

## Configuration

1. Create a Firebase project if you haven't already: Firebase Console.

2. In the Firebase project settings, navigate to the "Project settings" and find your Firebase SDK configuration object. It will look something like this:

   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID"
   };

3. Copy this configuration object.

4. Enable Firebase Authentication providers (e.g., Email/Password, Google, etc.) as per your requirements in the Firebase Console.

## Usage

1. Start the development server:

   npm start

2. Register and authenticate with your Firebase authentication provider.

3. Organize and reorder images within albums using drag-and-drop.

## Deployment

To deploy this application to a production environment, you can use services like Firebase Hosting, Vercel, Netlify, or GitHub Pages. Make sure to configure the deployment settings according to your chosen platform.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

3. git checkout -b feature/your-feature-name

4. Make your changes and commit them with descriptive messages.

5. Push your branch to your fork:

   git push origin feature/your-feature-name

6. Create a pull request against the main repository's main branch.

Happy coding! 🚀
