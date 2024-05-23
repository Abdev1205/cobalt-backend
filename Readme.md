# Backend Project

This is the backend for the Coablt Task that include Slack messaging and google auth feature. The project is built using Node.js and Express, and it connects to MongoDB for data storage.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (You can use a local instance or a cloud service like MongoDB Atlas)

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-backend-repo-name.git
cd your-backend-repo-name
```

### Install Dependencies

Install the project dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### Setup Environment Variables

Create a `.env` file in the root directory of the project and add the following lines with your own values:

```
MONGO_URL=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=/api/auth/google/callback
JWT_SECRET_KEY=your-jwt-secret-key
SLACK_TOKEN=your-slack-token
SESSION_SECRET=your-session-secret
FRONTEND_URL=http://localhost:3000
SLACK_SIGNING_SECRET=your-slack-signing-secret
SLACK_BOT_TOKEN=your-slack-bot-token
SLACK_CHANNEL=your-slack-channel
PORT=4000
```

### Running the Project

To run the project in development mode, use the following command:

```bash
node server.js
```

or

```bash
nodemon server.js
```

This will start the Express server and your application will be available at `http://localhost:4000`.

### Project Structure

- `controllers/`: Contains the controller functions.
- `models/`: Contains the database models.
- `routes/`: Contains the route definitions.
- `middlewares/`: Contains middleware functions.
- `utils/`: Contains utility functions.
- `config/`: Contains configuration files.
- `.env`: Environment variables file.

### Demo

https://www.loom.com/share/8ffd88984f24439eba6161bf94d6ce4c?sid=60e4602c-8405-46ff-8448-add265d92c98
