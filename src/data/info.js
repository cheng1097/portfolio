import icon_app from '../assets/icon-app.svg';
import icon_design from '../assets/icon-design.svg';
import icon_dev from '../assets/icon-dev.svg';


export const info = {
  name: "Konaté Thionon",
  age: 27,
  email: "thiononkonate@gmail.com",
  phone: "+2250768356482",
  address: "Abidjan Cocody",
  job: "Ingenieure Logiciel",
  nationality: "Ivoirienne",
  social: [
    {
        id: '1sa',
      icon: "logo-linkedin",
      url: "https://www.linkedin.com/in/thionon-konat%C3%A9-652388153",
    },
  ],

  about: `Passionné par l'informatique et animé par la volonté de créer des
          solutions innovantes, je suis spécialisé dans la conception et le
          développement d'applications sur mesure. Curieux, adaptable et orienté
          résultats, j'excelle dans la résolution de défis complexes tout en
          collaborant efficacement au sein d'équipes dynamiques. Mon objectif
          est de transformer les besoins des entreprises en solutions
          informatiques performantes et stratégiques, contribuant ainsi à leur
          croissance et à leur succès. Toujours en quête de perfectionnement, je
          mets mes compétences techniques et ma créativité au service de projets
          ambitieux et novateurs.`,

  competence_g: [
    {
        id: '1aa',
      title: "Web Design",
      description: `Je conçois des designs modernes et réactifs avec Figma, Photoshop et Illustrator,
       alliant esthétique, fonctionnalité et adaptation à tous les appareils.`,
        img: icon_design
    },
    {
        id: '1bb',
      title: "Développement Web",
      description: `Spécialisé en front-end et back-end, j'utilise HTML, CSS, React, et Laravel
       pour créer des sites et applications web rapides, sécurisés, évolutifs et adaptés aux besoins spécifiques.`,
       img: icon_dev
    },
    {
        id: '1cc',
        title: "Développement Mobile",
        description: `Avec Flutter, je développe des applications mobiles multiplateformes (iOS et Android) 
        alliant performances natives, designs modernes et ergonomie, adaptées aux besoins des utilisateurs.`,
         img: icon_app
      },
  ],

  formations:[
    {
        id: 'form1',
        ecole: 'ISTC Polytechnique',
        date: 'Octobre 2024',
        detail: "Thème : Conception et mise en place d'une plateforme de description du langage des signes. (Diplôme obtenu)",
        diplome: 'Master Professionnel 2 en Télécommunications',
    },
    {
        id: 'form33',
        ecole: 'ISTC Polytechnique',
        date: 'Septembre 2022',
        detail: "Thème : Conception d'une application de gestion de stock, cas de LECAT. (Diplôme obtenu)",
        diplome: 'Licence Professionnelle en Télécommunications',
    },
    {
        id: 'form22',
        ecole: 'Lycée Inagohie San-pedro',
        date: 'juillet 2015',
        detail: '',
        diplome: 'Baccalauréat',
    },
  ],

  experiences: [
    {
        id: 'exp11',
        entreprise: 'Visiotech SARL',
        date: 'Janvier 2022 - octobre 2024',
        detail: "Développement, maintenance et déploiement des applications et sites web des clients de l'entreprise",
        role: 'Développeur web',
    },
    {
        id: 'exp22',
        entreprise: 'ISTC Polytechnique',
        date: '2021 - 2024',
        detail: `Développement et déploiement de plusieurs solutions informatiques
         Au sein de l'ISTC Polytechnique pendant les pratiques professionnelles. (caméra intelligente, système de localisation des salles, etc)`,
        role: 'Développeur et chef du service informatique',
    },
    {
        id: 'exp33',
        entreprise: 'United Nations Convention to Combat Desertification',
        date: 'Mai 2022',
        detail:"Aide aux différents participants du congrès et gestion du stock pendant la COP15",
        role: 'Agent IT',
    },
    {
        id: 'exp44',
        entreprise: 'Union Postale Universelle',
        date: 'Août 2021',
        detail: 'Aide aux différents participants du congrès.',
        role: 'Agent IT',
    },

  ],

  techno: [
    {
        id: 'tech1',
        name: 'HTML5 & CSS',
        level: '90%',
    },
    {
        id: 'tech22',
        name: 'Bootstrap & tailwind css',
        level: '80%',
    },
    {
        id: 'tech33',
        name: 'JavaScript',
        level: '75%',
    },
    {
        id: 'tech33885',
        name: 'React js',
        level: '70%',
    },
    {
        id: 'tech44',
        name: 'PHP',
        level: '80%',
    },
    {
        id: 'tech55',
        name: 'Laravel',
        level: '75%',
    },
    {
        id: 'tech99',
        name: 'Flutter',
        level: '50%',
    },
    {
        id: 'tech1221',
        name: 'Mysql & PostgreSQL',
        level: '80%',
    },
    {
        id: 'tech1414',
        name: 'GIT , Github',
        level: '80%',
    },
   
    {
        id: 'tech66',
        name: 'Python',
        level: '60%',
    },
    {
        id: 'tech1515',
        name: 'Java',
        level: '35%',
    },
    {
        id: 'tech1010',
        name: 'Photoshop & Illustrator',
        level: '65%',
    },
    {
        id: 'tech11212',
        name: 'Figma',
        level: '75%',
    },
    {
        id: 'tech1313',
        name: 'Autocad',
        level: '50%',
    },
    {
        id: 'tech77',
        name: 'Flask',
        level: '50%',
    },
    {
        id: 'tech88',
        name: 'Open cv, mediapipe',
        level: '35%',
    },
  ]
};
