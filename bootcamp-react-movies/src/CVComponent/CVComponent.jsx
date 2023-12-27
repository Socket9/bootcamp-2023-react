import DatosPersonalesComponent from "./DatosPersonalesComponent/DatosPersonalesComponent";
import IdiomasComponent from "./IdiomasComponent/IdiomasComponent";
import FotoComponent from "./FotoComponent/FotoComponent";
import ContactoComponent from "./ContactoComponent/ContactoComponent";
import EducacionComponent from "./EducacionComponent/EducacionComponent";
import ExperienciaLaboralComponent from "./ExperienciaLaboralComponent/ExperienciaLaboralComponent";
import './CVComponent.css';

const CVComponent = () => {
    const personData = {
        fullName: "Rafael Sosa",
        job: "Programador Java Full-Stack",
        description: `Apasionado por la resolución de desafíos en programación, me
				mantengo al día con las últimas tecnologías. Contribuyo
				activamente en comunidades de desarrollo y proyectos de código
				abierto, siempre buscando aprender y evolucionar en el mundo
				tecnológico.`,
        phone: "+54 11 2345 6789",
        email: "rafael.sosa@gmail.com",
        linkedin: "linkedin.com/rafael.sosa",
        img: "/img/img-cv2.jpeg",
        languages: {
            español: "nativo",
            ingles: "intermedio",
            portugues: "basico",
            italiano: "basico",
        },
        education: {
            secondary: {
                intitution: "Nombre de la institución",
                description: "Nombre del título obtenido",
                year: "2014 - 2019",
            },
            tertiary: {
                intitution: "Nombre de la institución",
                description: "Nombre del título obtenido",
                year: "2020 - 2021",
            },
            university: {
                intitution: "Nombre de la institución",
                description: "Nombre del título obtenido",
                year: "2022 - ACTUALIDAD",
            },
        },
        workExperience: {
            item1: {
                company: "NOMBRE EMPRESA",
                job: "Software Engineer",
                year: "2020 - 2021",
                description: ` Mi labor incluia el diseño de la arquitectura de software,
                        la resolución de desafíos técnicos, la optimización del rendimiento y la colaboración
                        activa en equipos ágiles.`,
            },
            item2: {
                company: "NOMBRE EMPRESA",
                job: "DevOps Engineer",
                year: "2021 - ACTUALIDAD",
                description: `Mi labor consistia en la integración fluida entre el desarrollo y las operaciones,
                        asegurando la entrega continua y confiable de software de alta calidad.`,
            },
        },
    };

    return (
        <section className="cv-container">
            <aside className="aside-container">
                <FotoComponent url={personData.img} />
                <DatosPersonalesComponent
                    fullName={personData.fullName}
                    job={personData.job}
                    description={personData.description}
                />
                <IdiomasComponent languages={personData.languages} />
                <ContactoComponent
                    phone={personData.phone}
                    email={personData.email}
                    linkedin={personData.linkedin}
                />
            </aside>
            <main>
                <EducacionComponent education={personData.education} />
                <ExperienciaLaboralComponent workExperience={personData.workExperience} />
            </main>
        </section>
    );
};

export default CVComponent;
