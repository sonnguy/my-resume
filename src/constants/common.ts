import { IUser } from "@/types/interfaces/user";

export const user: IUser = {
  username: "sonnguy",
  email: "sonnguy92@gmail.com",
  firstName: "Son",
  lastName: "Nguy",
  position: "Senior Front End Developer",
  image:
    "https://media.licdn.com/dms/image/C5103AQEGkj1ARGEzYA/profile-displayphoto-shrink_800_800/0/1523506912311?e=1709164800&v=beta&t=1xmhfjbn-07OHc10PUX4KUgZmKZLwvMMCmdF43ZnVzM",
  resume: {
    summary:
      "With 7 years of experience in C# .NET and JavaScript, and over 6 years of experience in React, React Native, Vue, and Angular, I have a solid foundation as a software developer. I have also gained 1 year of experience as a Team Leader, where I was responsible for analyzing customer requirements, breaking down tasks, managing projects, programming, and supporting team members. My expertise extends to building web applications using React Native and AngularJS, as well as developing hybrid mobile applications using the Ionic framework. Additionally, I have worked on a cloud-computing project hosted on Microsoft Azure, which involved creating a digital workplace for employees.",
    education: [
      {
        institution: "Van Lang University",
        degree: "Bachelor’s Degree",
        startDate: "2010",
        endDate: "2014",
      },
    ],
    experience: [
      {
        company: "Prophet Exchange",
        position: "Senior Front End Developer",
        startDate: "2021",
        endDate: "2023",
        description:
          "Prophet Exchange is a peer-to-peer sports betting exchange where users can set prices for others to bet on, or place bets on the prices already available. This gives users the best odds and separates us from traditional sportsbooks. In this project, I am responsible for the UI implementation using React Native and Vue 2, API integration (focus on payment gateways such as Paypal, Trustly, WorldPay, PayNearMe), and integration of various analytics tools such as Segment, Appsflyer, Mixpanel, and Braze.",
      },
    ],
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Nuxt Js",
      "Segment",
      "Braze",
      "Mixpanel",
      "AppsFlyer",
      "Cypress",
      "Tailwind CSS",
      "Vue Js",
      "React Native",
    ],
    projects: [],
  },
  phone: "+84 392309915",
  address: "Phan Rang City",
};
