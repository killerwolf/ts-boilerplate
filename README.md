# TypeScript Boilerplate

A basic TypeScript project setup.

## Getting Started

These instructions will help you get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository.
2. Navigate to the project directory: `cd ts-boilerplate`
3. Install the dependencies: `npm install`

### Building the project

To build the TypeScript project and compile it into JavaScript, run the following command:

```bash
npm run build
```

This will create a `dist` directory containing the compiled JavaScript files.

### Running the project

To run the compiled JavaScript code, use the following command:

```bash
npm start
```

This will execute the `index.js` file located in the `dist` directory and you should see "Hello John Doe!" printed in the console.

### Development Mode

For a better development experience, you can run the project without building it first using the following command:

```bash
npm run dev
```

This uses `ts-node` to execute the TypeScript code directly, which is useful during development as it reflects changes immediately without the need to build the project each time.
