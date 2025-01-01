# Email Collector Waitlist

A modern waitlist signup page built with Next.js and Tailwind CSS that allows potential users to register their interest in an upcoming product or service.

## Features

- 🎨 Modern, responsive design with dark mode
- 📝 Email validation and storage
- 🔒 MongoDB integration for data persistence
- 🌐 Grid background with gradient effect
- ⚡ Fast page loads with Next.js
- 📱 Mobile-friendly interface

## Prerequisites
- Node.js 18 or later
- MongoDB account
- npm or yarn

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/email-collector.git
cd email-collector
```
2. Install dependencies
```
npm install
 or
yarn install
```
3. Configure environment:
```
# Create .env.local and add:
MONGODB_URI=your_mongodb_connection_string
```

4. Start development server:
```
npm run dev
```

5. Open http://localhost:3000

## Project Structure 

```
src/
├── app/
│   ├── api/
│   │   └── waitlist/    # API endpoints
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Landing page
├── lib/
│   └── mongodb.js      # Database connection
└── models/
    └── Email.js        # Email schema
```

## Development
```
# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

## Production Deployment
Production Deployment
    1. Set up MongoDB Atlas cluster
    2. Configure environment variables
    3. Deploy to Vercel:
    ```
    npm i -g vercel
    vercel
    ```