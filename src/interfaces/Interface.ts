export interface NavItems {
    href: string,
    name: string
}

export interface Home {
    acronym: string,
    name: string,
    profession: string,
    githubLink: string,
    lnlink: string,
    email: string,
    phone: string,
    location:string
}

export interface Skill {
    name: string,
    percentage: number,
    color: string
}

export interface Project {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    icon: string,
    gradient: string,
    mdx: string
}

export interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  achievements: string[];
  skills: string[];
}
