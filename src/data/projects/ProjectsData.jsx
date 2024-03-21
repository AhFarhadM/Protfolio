import healthcareIcon from "../../assets/projects/healthcare-logo.jpeg";
import healthcarePicture from "../../assets/projects/healthcare-picture.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Healthcare",
    icon: healthcareIcon,
    caption: "Booking Appointment Web Application",
    liveLink: "https://healthcare-app-frontend.vercel.app/",
    image: healthcarePicture,
    overview:
      "The Healthcare App is a comprehensive full-stack solution tailored for managing doctor appointments effectively. This cohesive platform integrates both front-end and back-end components seamlessly, providing users with a streamlined experience from start to finish.<br />At the forefront is an intuitive user interface that empowers users to navigate effortlessly through the booking system. From logging in with personalized credentials to browsing an extensive list of practitioners, accessing detailed profiles, and securing appointments, the Healthcare App ensures a user-friendly journey every step of the way. Whether accessed via desktop or mobile devices, the responsive design guarantees a consistent and accessible experience for all users.<br />Driving the backend operations is a robust Rails API, engineered to handle critical functionalities with precision. From user authentication to doctor management, appointment scheduling, and database operations, the backend orchestrates seamless interactions between users and data. Leveraging PostgreSQL, the database system upholds data integrity and security, ensuring reliable storage and retrieval of vital information. With a suite of endpoints catering to user authentication, doctor listings, appointment reservations, and more, the API offers a solid foundation for the application's operations. Additionally, it features advanced capabilities such as doctor status management and comprehensive documentation for effortless integration with the front-end.<br />In essence, the Healthcare App epitomizes efficiency and reliability, delivering a feature-rich solution for managing doctor appointments with ease. Whether for practitioners or patients, this all-encompassing platform serves as a trusted companion in navigating the intricacies of healthcare scheduling.",
    tecknologies: ["React, API, Rails, Tailwind CSS, JWT, Authentication"],
  },
];
