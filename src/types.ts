export interface Link {
  name: string
  url: string
}

export interface LocalizedExperienceContent {
  title: string;
  company: string;
  address: string;
  description: string;
}

export interface Experience {
  type: string;
  startYear: number;
  endYear: number;
  en: LocalizedExperienceContent;
  fr: LocalizedExperienceContent;
}

export interface LocalizedProjectDetails {
  description: string;
  missions: string[];
  seeProject: string;
}

export interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate?: Date;
  image: string; // Chemin ou URL de l'image
  technologies: string[];
  seeProjectLinks: Link[];
  details: {
    en: LocalizedProjectDetails;
    fr: LocalizedProjectDetails;
  };
}