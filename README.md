# Random Users Generator

A React application that generates random user profiles using the [Random User Generator API](https://randomuser.me/). The app allows users to specify the number of random user profiles they want to display and shows their basic information including name, picture, location, and email.

## Features

- Generate random user profiles with customizable quantity
- Display user information including:
  - Full name
  - Profile picture
  - Country and nationality
  - State and city
  - Email address
- Loading state handling
- Error handling with user-friendly messages
- Responsive design

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Usage

1. The application loads with 3 random user profiles by default
2. Use the number input field to specify how many user profiles you want to generate
3. Click the "Submit >" button to fetch and display new random user profiles
4. The app will show a loading state while fetching data
5. If any errors occur during the fetch operation, they will be displayed to the user

## Dependencies

- React
- React Hooks (useState, useEffect)
- Random User Generator API
- lucide-react
- types/node. TypeScript definitions for react.
- 
## API Information

This application uses the Random User Generator API:
- Base URL: `https://randomuser.me/api/`
- Query Parameters:
  - `results`: Number of user profiles to generate

## Error Handling

The application includes robust error handling for:
- Network errors
- Invalid API responses
- HTTP error status codes

## Attribution

- Random user data provided by [Random User Generator](https://randomuser.me)
- Profile pictures sourced from [UI Faces](http://uifaces.com)

## License

Please note that all randomly generated photos were selected from the authorized section of UI Faces. For information about usage rights and restrictions, please refer to the [UI Faces FAQ](https://web.archive.org/web/20160811185628/http://uifaces.com/faq).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.