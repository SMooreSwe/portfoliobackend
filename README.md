# GraphQL Backend for Portfolio

This is a working GraphQL backend built in TypeScript and connecting to a PostgresQL database. The basis has been built in half a day, with connection from database to frontend established and working. 

## The Purpose

This project is used to create a backend to my already deployed [tailwind portfolio](https://next-portfolio-cyan-nine.vercel.app/). The code for which can be seen [here](https://github.com/SMooreSwe/TailwindPortfolio). The current implementation of the frontend code working with this project is on the "GraphQL" branch and will be refactored during further implementation. 

At present, the portfolio displays projects held as local data. This is an expansion of that project.

## Progress

This project uses Express, Apollo Server and Sequelize to create a GraphQL backend for my portfolio. It is currently able to display all projects in the correct way to allow them to be used in the current implementation of my portfolio. The database is hosted and deployed on supabase.

## Next Steps

As I develop this project, I intend to implement Mutations, allowing for additional projects to be added, or older projects deleted via the API. I also intend to tighten the CORS policy and only authorise amendments via my portfolio.

I am currently considering how such calls would be made by the frontend, ie. would it be via an private Admin page or some other call. 

I intend to deploy this backend and am currently considering hosting options.