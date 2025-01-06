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

### Code Quality

This project uses [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for code formatting to maintain code quality and consistency.

**Linting**

To run the linter, use the following command:

```bash
npm run lint
```

(Note: The `--ext .ts` flag is no longer needed and has been removed from the `lint` script in `package.json`.)

**Formatting**

To check if the code is formatted, use the following command:

```bash
npm run format
```

To automatically format the code, use the following command:

```bash
npm run format:fix
```

### Continuous Integration

The project has a basic Continuous Integration (CI) setup using [GitHub Actions](https://github.com/features/actions). On each push to the `main` branch and on each pull request, the CI workflow will:

- Install dependencies.
- Run the linter.
- Check the code formatting.
