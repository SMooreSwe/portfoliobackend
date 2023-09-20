import { Project } from "../../types"

export const projectList : Project[] = [
    {
      heading: '[project Project]',
      blurb: '[project Project] is a mobile-responsive, collaborative project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by a single mob as part of the winter 2023 class from the School of Applied Learning and Technology, aka </Salt>.',
      src: '/projectGIF.gif',
      links: [
        {
          text: 'Visit the site',
          href: 'https://project-project-nine.vercel.app/',
          icon: 'faGlobe',
        },
        {
            text: 'See the Code',
            href: 'https://github.com/SMooreSwe/projectProject',
            icon: 'faCode',
        },
      ]
    }, 
    {
      heading: 'Puppy Picker',
      blurb: 'This mobile-responsive, full stack App consists of a React UI built using NextJS, a RESTful C# API and a Azure SQL database. Pictures for each puppy are obtained from the Unsplash API and relate to the selected dog\'s breed. The UI allows users easy access to CRUD functionality.',
      src: '/puppiesGIF.gif',
      links: [
        {
          text: 'Visit the site',
          href: 'https://puppypicker.vercel.app/',
          icon: 'faGlobe',
        },
        {
          text: 'See the Code',
          href: 'https://github.com/SMooreSwe/puppies-frontend',
          icon: 'faCode',
        }
      ]
    },
    {
      heading: 'Tech Interview Helper',
      blurb: 'This full stack project was built in a day, as part of a Hack-Day event. It uses a RESTful Express API, which communicates with a MongoDB database and a third party API "Techy". The project includes a working system for account creation, user login and saving data to user profiles.',
      src: '/techGif.gif',
      links: [
        {
          text: 'See the Code',
          href: 'https://github.com/SMooreSwe/techInterviewHelper',
          icon: 'faCode',
        }
      ]
    },
    {
      heading: 'Tiny Blog',
      blurb: 'This project was built to work on my TypeScript skills, as well as continue practice of React functionality. I utilised CSS and attribute selectors to target state changes in the displayed topics, to allow for the accordion effect.',
      src: '/blogGif.gif',
      links: [
        {
          text: 'Visit the site',
          href: 'https://tiny-blog-sigma.vercel.app/',
          icon: 'faGlobe',
        },
        {
          text: 'See the Code',
          href: 'https://github.com/SMooreSwe/tiny-blog',
          icon: 'faCode',
        },
      ]
    },
    {
      heading: 'React Gallery',
      blurb: 'A mob-programming exercise. It was built using Create-React-App, with the typescript template. Images are retrieved using the Unsplash API. Routing was done using both React Router and by passing "state" information through the React Router Links, to allow for dynamic page generation.',
      src: '/galleryGIF.gif',
      links: [
        {
          text: 'See the Code',
          href: 'https://github.com/SMooreSwe/react-gallery',
          icon: 'faCode',
        }
      ]
    },
  ]