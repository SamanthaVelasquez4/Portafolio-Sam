import type {Project} from '../../interfaces/Interface';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Juego OSHI en C++',
        description: 'OSHI es un juego de mesa por turnos inspirado en el sumo japonés, desarrollado en C++. Implementa un sistema de empuje jerárquico sobre un tablero bidimensional, con interfaz de consola optimizada y reglas personalizadas. El proyecto destaca el uso de programación estructurada, modularización y control de estado del juego.',
        technologies: ["C++"],
        icon: "fas fa-chess",
        gradient: "from-blue-500 to-purple-600",
        mdx:"oshi-c"
    },
    {
        id: 2,
        title: "Sistema de inventario para tienda de artículos deportivos ",
        description: "Sistema de Inventario para Tienda Deportiva, desarrollado en Java con Swing GUI Designer. La aplicación permite gestionar productos, ventas, compras, empleados, proveedores y facturación.",
        technologies: ["Java", "Swing GUI"],
        icon: "fas fa-shop",
        gradient: "from-green-500 to-teal-600",
        mdx:"inventory-java"
    },
    {
        id: 3,
        title: "Speed Sport ",
        description: "plataforma web de delivery especializada en ropa deportiva, similar a Yuuju!, que conecta tiendas como Nike o Adidas con clientes finales mediante un sistema de pedidos y entregas a domicilio.",
        technologies: ["Node.js", "TypeScript", "HTML", "CSS", "JavaScript", "MongoDB"],
        icon: "fas fa-shopping-cart",
        gradient: "from-orange-500 to-red-600",
        mdx:"speed-sport"
    },
    {
        id: 4,
        title: "Lightdriving (simulación de Uber)",
        description: "Sistema de Transporte tipo Uber que permite a los usuarios solicitar viajes, gestionar pagos y monitorear rutas en tiempo real. El backend incluye documentación de APIs con Swagger y una arquitectura modular que facilita la escalabilidad y mantenimiento del sistema.",
        technologies: ["Laravel", "Spring Boot"],
        icon: "fas fa-car",
        gradient: "from-cyan-500 to-blue-600",
        mdx:"lightdriving"
    },
    {
        id: 5,
        title: "Modelado base de datos Amazon ",
        description: "El sistema simula la estructura central de un e-commerce, incluyendo gestión de usuarios (compradores y vendedores), catálogo de productos, métodos de pago y procesamiento de compras.",
        technologies: ["Oracle", "Node.js"],
        icon: "fas fa-database",
        gradient: "from-purple-500 to-pink-600",
        mdx:"amazon-db"
    },
    {
        id: 6,
        title: "Datawarehouse Oracle",
        description: "El sistema consolida información de distintas fuentes para facilitar el análisis estratégico. Implementamos un proceso ETL completo, donde me encargué de la extracción y transformación de datos semiestructurados desde MongoDB hacia Oracle, garantizando su calidad y consistencia.",
        technologies: ["Oracle", "Node.js", "SQL Server", "SQL Developer"],
        icon: "fas fa-chart-line",
        gradient: "from-indigo-500 to-purple-600",
        mdx:"datawarehouse-oracle"
    },
    {
        id: 7,
        title: "Sistema de registro para universidad ",
        description: "Sistema Académico tipo UNAH, desarrollado en PHP con arquitectura monolítica, orientado a gestionar procesos clave de una universidad: planificación académica, asignación de secciones, matrícula y gestión de solicitudes estudiantiles.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
        icon: "fas fa-graduation-cap",
        gradient: "from-teal-500 to-green-600",
        mdx:"university-registration"
    },
    {
        id: 8,
        title: "Infraestructura Cloud para E-Commerce",
        description: "Diseño e implementación de una arquitectura escalable en Azure para una plataforma de ventas en línea. Se utilizó procesamiento asíncrono y separación modular de la infraestructura con Terraform.",
        technologies: ["Azure","Terraform","SendGrid","GitHub"],
        icon: "fas fa-cloud-upload-alt",
        gradient: "from-pink-500 to-rose-600",
        mdx: "infraestructure-ecommerce"
    },
    {
        id: 9,
        title: "Creación de un Pipeline de Datos y API con Caché Inteligente",
        description: "Solución integral de backend con capacidad de migrar datos a gran escala, exponerlos a través de una API segura y optimizada desplegada en un entorno de nube productivo. Además incluye la implementación de un sistema de monitoreo y una estrategia de caché con invalidación automática.",
        technologies: ["Azure","Terraform","FastApi"],
        icon: "fas fa-cubes",
        gradient: "from-emerald-500 to-teal-600",
        mdx: "api-redis-cache"
    },
    {
        id: 10,
        title: "Evolución del Generador de Reportes V1",
        description: "Aplicación web que genera reportes CSV desde la PokeAPI, integrando Azure Functions, Blob Storage y SQL Database. Implementación de eliminación segura de reportes, enriquecimiento de datos (estadísticas de Pokémon) y muestreo aleatorio.",
        technologies: ["Azure","Terraform","FastApi", "Next.js", "Python"],
        icon: "fas fa-globe",
        gradient: "from-violet-500 to-purple-600",
        mdx: "poke-queue"
    }
]