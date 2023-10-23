
![screenshotr_2023-10-23T20-39-51](https://github.com/mbeps/quizmify/assets/58662575/80104313-9961-4e50-b086-67e3ffdedf65)

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

- **[NextAuth](https://next-auth.js.org/)**: Authentication solution for Next.js applications. Provides various authentication strategies and user session management.

- **[Zod](https://github.com/colinhacks/zod)**: TypeScript schema declaration and validation for type-safe REST API development.

- **[MySQL](https://www.mysql.com/)**: Robust open-source relational database management system.

## **Quiz Generation**

- **[OpenAI](https://openai.com/)**: Leveraging GPT-3.5 for dynamic quiz generation based on user-selected topics.

Each component in this tech stack is vital in ensuring a frictionless and engaging user experience.

# **Running Application Locally**

## 1. **Clone the Project Locally**
Using your terminal, clone the Quizmify project with the command:
```sh
git clone git@github.com:mbeps/quizmify.git
```

## 2. **Install Dependencies**
After navigating to the project's root directory, install necessary dependencies with:
```sh
yarn install
```

## 3. **Set Up Environment Variables**
Duplicate the `.env.example` file and rename the copied file to `.env.local`. Populate the `.env.local` with appropriate secrets.

For obtaining secrets such as `OPENAI_API_KEY`, `DATABASE_URL`, and `NEXT_PUBLIC_APP_URL`, consult the relevant service's documentation or settings. Additionally, you will need to set up the necessary environment variables for the authentication providers you intend to use with NextAuth.

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