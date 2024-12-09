import { createI18n } from 'vue-i18n';

// Définir les messages de traduction
const messages = {
  en: {
    home: {
      IM: "I'M",
      'short-me': "Recently graduated as a computer engineer through an apprenticeship at Enssat in Lannion, I'm a",
      'long-me': "I am currently seeking employment or freelance opportunities in web and mobile development. Meanwhile, I am working on personal projects to refine my skills and explore new technologies. Among other things, I am developing a mobile application with Flutter that helps users find nearby video game tournaments using a map feature.",
      'discover-work': "READY TO DISCOVER MY WORK",
    },
    'about-me': {
      description: "Front-end developer with solid experience in creating modern and responsive web and mobile interfaces, along with strong back-end skills for complete solutions. With 3 years of experience at Orange, I offer freelance services for front-end development missions, while incorporating my back-end expertise for customized solutions. Available to support you from conception to production, ensuring efficiency and quality.",
      'see-resume': "See my resume",
    },
    projects: {
      description: " Here you can find projects I've worked on. Whether during my studies or outside of them, these projects have allowed me to deepen my skills in web and mobile development, especially on the front end. These examples showcase what your project could look like if you decide to work with me. For more information about these projects and my skills, feel free to contact me or check out my",
      'project-card': {
        'technologies': "Technologies",
        'missions': "Missions",
        'see-project': "See project",
      }
    },
  },
  fr: {
    home: {
      IM: "JE SUIS",
      'short-me': "Jeune diplômé ingénieur par apprentissage en informatique de l'Enssat à Lannion. Je suis un",
      'long-me': "Je suis actuellement en recherche d'emploi ou de missions en freelance dans le développement web et mobile. Je travaille en parallèle sur des projets personnels pour me perfectionner et découvrir de nouvelles technologies. Je développe, entre autres, une application mobile avec Flutter qui permet de trouver des tournois de jeux vidéo autour de chez soi à l'aide d'une carte.",
      'discover-work': "DÉCOUVREZ MON TRAVAIL",
    },
    'about-me': {
      description: "Développeur front-end avec une expérience solide dans la création d’interfaces web et mobiles, modernes et réactives, ainsi qu'une bonne maîtrise du back-end pour des solutions complètes. Fort de 3 ans d’expérience chez Orange, je propose mes services en freelance pour des missions de développement front-end, tout en intégrant mes compétences back-end pour des solutions sur mesure. Disponible pour vous accompagner, de la conception à la mise en production, en garantissant efficacité et qualité.",
      'see-resume': "Voir mon CV",
    },
    projects: {
      description: "Vous pouvez retrouver ici des projets sur lesquels j'ai travaillé. Que ce soit dans le cadre de mes études ou en dehors, ces projets m'ont permis d'approfondir mes compétences dans le développement web et mobile, surtout sur le front-end. Ces exemples montrent à quoi pourrait ressembler votre projet si vous décidez de travailler avec moi. Pour plus d'informations sur ces projets et sur mes compétences, n'hésitez pas à me contacter ou à consulter mon",
      'project-card': {
        'missions': "Missions",
        'technologies': "Technologies",
        'see-project': "Voir le projet",
      }
    },
  },
};

const i18n = createI18n({
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages,
});

export default i18n;
