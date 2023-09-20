import { projectList } from "./MockData/ProjectList.js";
import { Project } from "./Models/Project.js";

export const typeDefs = `#graphql

type Project {
    heading: String,
    blurb: String,
    deployed: String,
    github: String,
    src: String,
}

type Query{
    projects: [Project]
}
`;

export const resolvers = {
    Query: {
        projects: async () => await Project.findAll(),
    },
};