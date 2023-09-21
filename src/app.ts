import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { Application } from 'express';
import http from 'http';
import pkg from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import { resolvers, typeDefs } from './schemas.js';

const {json} = pkg;
const app: Application = express();
export const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const corsOptions ={
   origin:process.env.FE_ORIGIN.split(' '), 
   preflightContine: false,
   credentials:true,          
   optionSuccessStatus:200,
}

await server.start();

const optionsHandler = ((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
 if (req.method == "OPTIONS") {
   res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
   return res.status(200).json({});
 }

 next();
});
app.use('/', cors<cors.CorsRequest>(corsOptions), optionsHandler, json(), expressMiddleware(server));

export default app;