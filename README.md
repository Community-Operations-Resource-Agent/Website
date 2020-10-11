![CI](https://github.com/Community-Operations-Resource-Agent/Website/workflows/CI/badge.svg?branch=master)

Corabot Website
==================

## Getting Started for Developers

### Local Development

#### Using Visual Studio
1. Download and install [Visual Studio 2019](https://visualstudio.microsoft.com/vs/) with the following components:
   * .NET desktop development (Workload)
   * ASP.NET and web development (Workload)
   * .NET Core SDK  (Individual Component)
2. Install [Node](https://nodejs.org/en/) LTS or Current version whichever you prefer. Make sure to select the option to add it to your Path!
3. Clone this [repo](https://ProjectCora@dev.azure.com/ProjectCora/ProjectTIRA/_git/ProjectTIRA) and open the **CORAbot.sln** solution file found in the Website directory in Visual Studio
4. Build and run the project
5. You should now be able to view the site in your default browser.

### Using VS Code 
1. Download and install [VS Code](https://code.visualstudio.com/) then install the following:
   * [.NET Core SDK](https://dotnet.microsoft.com/download). The SDK also includes the Runtime.
   * The [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the VS Code Marketplace.
2. Install [Node](https://nodejs.org/en/) LTS or Current version whichever you prefer. Make sure to select the option to add it to your Path!
3. Clone this [repo](https://ProjectCora@dev.azure.com/ProjectCora/ProjectTIRA/_git/ProjectTIRA) and open the **Website** directory in VS Code.
4. In the debug tab click on  **create a launch.json file** then select the **.Net Core** option
4. Start a debug session
5. You should now be able to view the site in your default browser.

### Front-End Dev
The Front-end of the site is set up in React. If you want to only to only contribute towards that part of the project then you can follow these steps to get started: 
1. Install [Node](https://nodejs.org/en/) LTS or Current version whichever you prefer. Make sure to select the option to add it to your Path!
2. Clone this [repo](https://ProjectCora@dev.azure.com/ProjectCora/ProjectTIRA/_git/ProjectTIRA) and open the **ClientApp**  directory found in the Website folder in your favorite text editor.
3. Open a terminal in that directory and run: ``` npm start ```
4. You should now be able to view the site in your default browser.
