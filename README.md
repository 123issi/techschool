# East African Girls in Tech

A comprehensive web platform for East African Girls in Tech, providing free technology education and career opportunities across East Africa.

## Features

- **Course Catalog**: 15+ technology courses including Software Development, Cybersecurity, Digital Marketing, and more
- **Multi-Country Support**: Serving 9 East African countries with headquarters in South Africa
- **Student Application System**: Comprehensive application form with Firebase backend
- **Live Chat Support**: Real-time chat support for students
- **Responsive Design**: Modern, mobile-first design with beautiful UI
- **Firebase Integration**: Authentication and data storage

## Firebase Setup

To fully activate the application form and authentication features, you'll need to set up Firebase:

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup steps
   - Choose a project name (e.g., "east-african-girls-tech")

2. **Configure Authentication**:
   - In Firebase Console, go to "Authentication" > "Sign-in method"
   - Enable "Email/Password" authentication
   - Configure authorized domains if needed

3. **Set up Firestore Database**:
   - Go to "Firestore Database" and create a database
   - Start in test mode for development
   - Set up security rules as needed

4. **Get Configuration**:
   - Go to Project Settings > General > Your apps
   - Add a web app and get your Firebase config
   - Replace the config in `src/firebase.ts` with your actual values

5. **Update Firebase Config**:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

## Email Notifications Setup

To receive email notifications when students submit applications:

1. **Firebase Functions** (Recommended):
   - Set up Firebase Functions to trigger on new documents in the `applications` collection
   - Use a service like SendGrid or Nodemailer to send emails
   - Configure email templates for application notifications

2. **Third-party Integration**:
   - Use services like Zapier to connect Firestore to email
   - Set up webhooks to trigger email notifications

## Course Structure

All courses include:
- Detailed descriptions and learning objectives
- Duration and time commitment information
- Prerequisites and skill levels
- Certification information
- Free access for all students

## Countries Served

- Democratic Republic of Congo
- Tanzania
- Rwanda
- Burundi
- Kenya
- Uganda
- South Sudan
- Somalia
- South Africa (Headquarters)

## Contact Information

- **CEO**: Hakizimana
- **Phone**: WhatsApp: +27 78 057 0803
- **Headquarters**: Johannesburg, South Africa
- **Email**: info@eastafricangirls.tech

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Contributing

This project aims to empower young women across East Africa through technology education. Contributions are welcome to help improve the platform and reach more students.