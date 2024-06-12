# React Context TS Setup

Welcome to the React Context TS Setup repository! This repository provides a boilerplate setup for using React Context API with TypeScript, streamlining state management in your React applications. This setup helps you to quickly integrate and manage global state in your React projects with the type safety of TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The React Context API is a powerful feature for managing global state in React applications without prop drilling. Combining it with TypeScript enhances the development experience by providing type safety, which helps catch errors early in the development process.

This repository offers a ready-to-use setup for integrating React Context API with TypeScript. It includes essential configurations, structure, and examples to help you get started quickly.

## Features

- **TypeScript Integration**: Ensures type safety and better code quality.
- **Context and Reducer Setup**: Pre-configured Context and Reducer for state management.
- **Custom Hooks**: Includes custom hooks for using the context easily.
- **Modular Structure**: Organized folder structure for scalability.
- **Example Code**: Demonstrates how to use the context in a React component.

## Installation

To get started with this setup, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/sameervaghela2121/React-Context-Ts-Setup.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd React-Context-Ts-Setup
    ```

3. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install
    ```

## Usage

### Running the Project

To start the development server, run:
```sh
npm start
# or
yarn start

### Creating a Context
To create a new context, follow the pattern shown in the src/context directory. Define your state, actions, and reducer in a TypeScript file, and use the provided utility functions to create and provide the context.

Example:
// src/context/ExampleContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface State {
    // Define your state structure
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: State = {
    // Initialize your state
};

const reducer = (state: State, action: Action): State => {
    // Define your reducer logic
    switch (action.type) {
        default:
            return state;
    }
};

const ExampleContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const ExampleProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <ExampleContext.Provider value={{ state, dispatch }}>{children}</ExampleContext.Provider>;
};

const useExampleContext = () => {
    const context = useContext(ExampleContext);
    if (context === undefined) {
        throw new Error('useExampleContext must be used within a ExampleProvider');
    }
    return context;
};

export { ExampleProvider, useExampleContext };

### Using the Context in Components
Wrap your application with the context provider in src/index.tsx or wherever you initialize your app.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ExampleProvider } from './context/ExampleContext';

ReactDOM.render(
    <ExampleProvider>
        <App />
    </ExampleProvider>,
    document.getElementById('root')
);

### Use the context in your components:

import React from 'react';
import { useExampleContext } from './context/ExampleContext';

const ExampleComponent: React.FC = () => {
    const { state, dispatch } = useExampleContext();

    // Use state and dispatch as needed
    return <div>{/* Your component code */}</div>;
};

export default ExampleComponent;


### Folder Structure
Here's a brief overview of the folder structure in this repository:

src/
├── components/      # React components
├── context/         # Context and Reducer setup
│   └── ExampleContext.tsx
├── App.tsx          # Main App component
├── index.tsx        # Entry point
├── react-app-env.d.ts # TypeScript environment definitions
└── ...

Contributing
Contributions are welcome! If you have any improvements or suggestions, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
