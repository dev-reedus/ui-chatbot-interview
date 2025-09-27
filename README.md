# UI ChatBot - Assignment

This is a simple FE ChatBot app, with mocked responses. It can handle different response messages:

- Text messages
- Table data messages
- Chart data messages

You can start chat by typing and press enter/send in the center input field, or using the bottom-right corner button.

## 🎯 Features

- Real-time chat interface
- Multiple response types (text, table, chart)
- Error handling
- Responsive design with Tailwind CSS
- Two ways of chat implementation (full screen or lateral dialog)

## 💬 How to Use

To trigger a specific response type, you can use the following commands:

| Command                                                      | Response Type    | Example                     |
|--------------------------------------------------------------|------------------|-----------------------------|
| `elenca gli ultimi utenti` or `show me the last users`       | Table data       | User list with details      |
| `mostrami le vendite mensili` or `show me the monthly sales` | Chart data       | Monthly sales visualization |
| `mostrami un errore` or `show me an error`                   | Error message    | Error handling demo         |
| Any other text                                               | Default response | Standard text reply         |

## 🚀 Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Package Manager: yarn

## 📋 Prerequisites

- Node.js (v.22.17.0 or higher)
- yarn (preferred)
    - if you don't have it, you can use `npm install -g yarn` to install it globally
- git (of course)

## 🛠️ Installation & Setup

1. `git clone https://github.com/dev-reedus/ui-chatbot-interview.git`


2. `cd ui-chatbot-interview`


3. `yarn install`


4. `yarn dev`


5. open your app at http://localhost:3000

## 📁 Project Structure

```
ui-chatbot-interview/
├── src/
│   ├── components/     # React components
│   ├── views/          # Views components
│   ├── hooks/         # Custom hooks
│   ├── consts/        # App constants/mocks
│   ├── services/      # API services
│   └── types/         # TypeScript global types
└── public/            # Static assets
```
