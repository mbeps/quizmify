Welcome to Quizmify! An intuitive platform that leverages the remarkable capabilities of OpenAI's GPT-3.5 for dynamic quiz generation. Users can test their knowledge across a vast range of topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. With immediate feedback on answers and score tracking, users are not only testing but also enhancing their understanding. 

# **Requirements**
To run the project, you need:
- Node 18 LTS
- Next.JS 13+

# **Features**
Delve into an enriched quizzing experience with the following features:

## **Authentication and Account Management**
Easy authentication:
- Users can sign up Google
- Users can log out
- Users can view their past quiz scores and performance metrics

## **Quiz Interaction**
Engage in captivating quizzes:
- Select any topic of interest 
- Choose between multiple choice questions or fill-in-the-gap style quizzes
- Get immediate feedback on answers
- Review scores and correct answers at the end of each quiz

# **Tech Stack**

Quizmify employs an advanced set of technologies ensuring optimal user experience:

## **Frontend**

- **[Next.js](https://nextjs.org/)**: A React framework tailored for SSR and statically generated applications.

- **[Tailwind CSS](https://tailwindcss.com/)**: Fostering responsive and tailor-made design using a utility-first approach.

- **[Shadcn UI](https://ui.shadcn.com/)**: A versatile collection of components designed with Radix UI and Tailwind CSS, simplifying the development process for developers of all levels.

## **Backend**

- **[Node.js](https://nodejs.org/en/)**: JavaScript runtime for server-side execution.

- **[Prisma](https://www.prisma.io/)**: ORM delivering type-safe and efficient querying.

- **[Axios](https://axios-http.com/)**: Promise-oriented HTTP client for managing HTTP requests.

- **[Clerk Auth](https://clerk.com/)**: Comprehensive and secure user authentication and management system.

- **[Zod](https://github.com/colinhacks/zod)**: TypeScript schema declaration and validation for type-safe REST API development.

- **[MySQL](https://www.mysql.com/)**: Robust open-source relational database management system.

## **Quiz Generation**

- **[OpenAI](https://openai.com/)**: Leveraging GPT-3.5 for dynamic quiz generation based on user-selected topics.

Each component in this tech stack is vital in ensuring a frictionless and engaging user experience.

# **Running Application Locally**

## 1. **Clone the Project Locally**
Using your terminal, clone the Quizmify project with the command:
```sh
git clone https://github.com/yourUsername/quizmify.git
```

## 2. **Install Dependencies**
After navigating to the project's root directory, install necessary dependencies with:
```sh
yarn install
```

## 3. **Set Up Environment Variables**
Duplicate the `.env.example` file and rename the copied file to `.env.local`. Populate the `.env.local` with appropriate secrets.

To acquire secrets for `Clerk Auth`:

1. Register on the Clerk website.
2. Initiate a new application.
3. In your app dashboard, find the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` under settings.
4. Incorporate these keys into your `.env.local` environment variables.

Please configure the URLs for Clerk Auth as:
```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

For obtaining `OPENAI_API_KEY`, `DATABASE_URL`, and `NEXT_PUBLIC_APP_URL`, consult the relevant service's documentation or settings.

## 4. **Running Database (Docker)**
If you wish to utilize the provided Docker image, execute this step. Alternatively, a cloud service for MySQL can be used. Remember to adjust the connection string in the `.env` file if opting for an alternative.

To initiate the MySQL container from the project's root, run:
```sh
docker-compose --env-file .env -f docker/docker-compose.yml up db
```

## 5. **Set Up Prisma**
For Prisma setup and database schema push, follow these commands:

Generate Prisma Client:
```sh
yarn prisma generate
```

Migrate schema to the database:
```sh
yarn prisma db push 
```

## 6. **Run Project**
With environment variables and Prisma set up, use the subsequent command to initiate the project:

```sh
yarn dev
```

This action should launch the project on `localhost:3000`.

**Note:** Ensure that the frontend Next.js server is actively running for the application to operate correctly.
