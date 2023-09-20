export const typeDefs = `#graphql

type Button {
    text: String,
    href: String,
    icon: String,
}

type Project {
    heading: String,
    blurb: String,
    links: [Button]
    src: String,
}

type Query{
    projects: [Project]
}
`;