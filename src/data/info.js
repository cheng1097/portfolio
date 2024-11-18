import icon_app from '../assets/icon-app.svg';
import icon_design from '../assets/icon-design.svg';
import icon_dev from '../assets/icon-dev.svg';


export const info = {
  name: "Konaté Thionon",
  age: 27,
  email: "thiononkonate@gmail.com",
  phone: "+2250768356482",
  address: "Abidjan Cocody",
  job: "Dévéloppeur Informatique",
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
};
