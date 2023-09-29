# GraphQL Backend for Portfolio

This is a working GraphQL backend built in TypeScript and connecting to a PostgresQL database. The basis has been built in half a day, with connection from database to frontend established and working. This server is now hosted on render.com.

## The Purpose

This project is used to create a backend to my already deployed [tailwind portfolio](https://next-portfolio-cyan-nine.vercel.app/). The code for which can be seen [here](https://github.com/SMooreSwe/TailwindPortfolio). 

The original implementation of the frontend code displayed projects held as local data. This backend expanded that project and now connects to a database of projects, via a GraphQL server.

## Progress

This project uses Express, Apollo Server and Sequelize to create a GraphQL backend for my portfolio. It is currently able to display all projects in the correct way to allow them to be used in the current implementation of my portfolio. The database is hosted and deployed on supabase.

## Next Steps

As I develop this project, I intend to implement Mutations, allowing for additional projects to be added, or older projects deleted via the API. At present, the images are contained as local files and the database points to those files. In the future, I intend on hosting the images in a storage bucket and serving them as well. 

I am currently considering how such calls would be made by the frontend, ie. would it be via an private Admin page or some other call. 
