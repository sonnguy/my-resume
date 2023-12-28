export interface IUser {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
  address: string;
  position: string;
  resume: {
    summary: string;
    education: {
      institution: string;
      degree: string;
      startDate: string;
      endDate: string;
    }[];
    experience: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    skills: string[];
    projects: {
      title: string;
      description: string;
      url: string;
    }[];
  };
  authentication?: {
    password: string;
    salt: string;
    sessionToken: string;
  };
}
