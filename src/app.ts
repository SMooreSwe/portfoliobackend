import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { Application } from 'express';
import http from 'http';
import pkg from 'body-parser';
import cors from 'cors';
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
   origin:'*', 
   credentials:true,          
   optionSuccessStatus:200,
}

await server.start();

app.use('/', cors<cors.CorsRequest>(), json(), expressMiddleware(server));

export default app;