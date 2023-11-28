# Cymorg Chat UI Application

This project was bootstrapped with [Create React App].

## Introduction

The Chat Application is a React-based web application designed for real-time conversations. The app features a modern and responsive user interface built using styled components.

## Features

- **Conversation Container:**

  - Conversation Header
  - Conversation Search
  - Conversation User List
    - Filter users by entering their username in the search bar
    - Delete a specific conversation user, removing both user and chat history

- **Chat Container:**

  - Chat Header
    - Display user details (image, name, status)
  - Chat Section
    - Display entire chat history for the selected user
  - Message Input
    - Type and send messages
    - Press Enter or click Send button to send messages

- **Automated Reply:**
  - Application provides an automated reply for every message sent, triggered after a 1-second delay.

## Installation

1. Clone the repository: `git clone https://github.com/fyrozhaneefa/chatui.git`
2. Change directory: `cd chatui`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Project Structure

├── public
├── src
│ ├── assets
│ ├── components
│ ├── dummyData
│ ├── slices
│ ├── store
│ ├── styles
│ ├── App.js
│ ├── index.js
├── package.json
└── README.md

## Usage

1. Access the application through a web browser.
2. Use the Conversation Container to filter users and manage conversations.
3. Click on a user in the Conversation User List to view details and chat history in the Chat Container.
4. Send messages using the Message Input in the Chat Container.

## Application Flow

1. User interacts with the Conversation Container.
2. User selects a conversation user.
3. User details and chat history are displayed in the Chat Container.
4. User sends messages through the Message Input.
5. Automated reply is generated after a 1-second delay.

## Technologies Used

- React
- Styled Components
- Redux (with slices for state management)

## Dummy Data

The application utilizes dummy data for user information and chat history.

## State Management

Redux is employed for state management, utilizing slices to organize and manage different parts of the application's state.

## Automated Reply

An automated reply feature is implemented, providing a response for every message sent, triggered with a 1-second delay.

## Conclusion

The Chat Application aims to provide a seamless and responsive chat experience, with easy user interaction.

## Future Enhancements

- Real-time messaging using WebSockets.
- Integration with a backend server for persistent data storage.
- Improved user authentication and authorization features.
