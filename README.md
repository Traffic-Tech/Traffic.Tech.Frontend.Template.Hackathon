# Traffic.Tech.Frontend.Template

# HelloWorld Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## How to run (Windows PowerShell)

1) Check the required Node.js version (use Node 22.18.0):

```powershell
node --version
# expected
v22.18.0
```

2) Install Angular CLI globally (if you don't have it):

```powershell
npm install -g @angular/cli
```

3) Install project dependencies:

```powershell
npm install
```

4) Start the server in the development environment:

```powershell
ng serve --configuration=development
```

Open http://localhost:4200/ in your browser.

### Switch environment

You can switch the environment using the configuration flag:

```powershell
ng serve --configuration=production
ng serve --configuration=test
ng serve --configuration=development
```

These environments are defined in `angular.json`. Here's an excerpt for reference:

```json
"configurations": {
    "production": {
        "budgets": [
            {
                "type": "initial",
                "maximumWarning": "500kB",
                "maximumError": "1MB"
            },
            {
                "type": "anyComponentStyle",
                "maximumWarning": "4kB",
                "maximumError": "8kB"
            }
        ],
        "outputHashing": "all"
    },
    "development": {
        "optimization": false,
        "extractLicenses": false,
        "sourceMap": true,
        "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.development.ts"
            }
        ]
    },
    "test": {
        "optimization": false,
        "extractLicenses": false,
        "sourceMap": true,
        "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.test.ts"
            }
        ]
    }
}
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
