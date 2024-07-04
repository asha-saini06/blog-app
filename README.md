# WordSmith - Next.js Blog

Dive into WordSmith, a Next.js blog where creativity meets technology. With server-side authentication, pagination for optimal user experience, and React for interactive UIs, WordSmith empowers you to build and customize your blogging journey effortlessly.

## Technologies Used

- **Next.js**: Server-side rendering and routing.
- **React**: Frontend library for building UI components.
- **Prisma**: ORM for database interaction.
- **MongoDB**: NoSQL database for data storage.
- **Context API**: For state management.
- **JWT**: For token-based authentication.
- **API Security**: Techniques to secure APIs.
- **Pagination**: Implemented to enhance user experience.
- **React-Quill**: Rich text editor for content management.
- **Tailwind CSS**: For responsive and modern styling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/asha-saini06/blog-app.git
   cd blog-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following variables:
     
     ```env
     DATABASE_URL="your_mongodb_connection_string"
     JWT_SECRET="your_jwt_secret"
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view WordSmith.

## Usage

Explore the blog posts and functionality of WordSmith after starting the development server. This project demonstrates:

- Dynamic routing with Next.js.
- Database interactions using Prisma and MongoDB.
- State management with Context API.
- Secure authentication and API endpoints.
- Rich text editing with React-Quill.
- Responsive design with Tailwind CSS.

## Features

- **Dynamic Routing**: Seamlessly navigate between blog posts and pages.
- **Server-side Rendering**: Fast and SEO-friendly page rendering.
- **Markdown Content**: Write and display blog posts in Markdown format.
- **Rich Text Editor**: Create and edit content with React-Quill.
- **Secure Authentication**: Protect routes and API endpoints.
- **Pagination**: Efficiently handle large sets of data.
- **Responsive Design**: Ensure a seamless user experience across devices.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.
