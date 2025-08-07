# My React App

This is a simple web application built with React and TypeScript. The application consists of four main pages: a Landing/Home Page, an Application Page, a Confirmation Page, and a Status Page.

## Project Structure

```
my-react-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   └── Header.tsx      # Header component
│   ├── pages
│   │   ├── Home.tsx        # Landing/Home Page
│   │   ├── Application.tsx  # Application Page
│   │   ├── Confirmation.tsx  # Confirmation Page
│   │   └── Status.tsx      # Status Page
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       └── main.css        # CSS styles for the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate through the application using the header component.
- Fill out the forms on the Application Page and submit to see the Confirmation Page.
- Check the Status Page for the current status of your application or submission.

## License

This project is licensed under the MIT License.