# PathPlot - Travel Planner

A modern travel planning application built with Next.js that helps you plot and organize your travel itineraries with interactive maps and globe visualization.

## Features

- 🗺️ Interactive map integration for location plotting
- 🌍 3D globe visualization for travel destinations
- 📅 Trip planning and itinerary management
- 🔐 GitHub OAuth authentication
- 📱 Responsive design with modern UI
- 🎯 Drag-and-drop itinerary reordering
- 📸 File upload capabilities

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with GitHub provider
- **UI**: Tailwind CSS with Radix UI components
- **Maps**: Google Maps API integration
- **3D Visualization**: React Globe.gl
- **File Uploads**: UploadThing
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- GitHub OAuth app credentials
- Google Maps API key (optional for maps)

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/pathplot"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Upload Thing (optional)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChetanAnandaReddyKukutla/PathPlot-TravelPlanner.git
   cd PathPlot-TravelPlanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

### Vercel Deployment

This application is optimized for Vercel deployment with the following configurations:

1. **Database Setup**: Ensure you have a PostgreSQL database (recommended: Vercel Postgres, Supabase, or Neon)

2. **Environment Variables**: Set up the required environment variables in your Vercel project settings

3. **Deploy**: 
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and use the proper build settings
   - The `vercel.json` and `postinstall` script ensure Prisma client is properly generated

### Important Notes for Deployment

- The application uses Prisma with binary targets configured for Vercel (`rhel-openssl-1.0.x`)
- Database migrations are applied automatically during build
- Ensure your `DATABASE_URL` points to a production PostgreSQL database

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── globe/             # 3D globe visualization
│   ├── trips/             # Trip management pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio for database management
- `npx prisma generate` - Generate Prisma client

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, Prisma, and modern web technologies.
