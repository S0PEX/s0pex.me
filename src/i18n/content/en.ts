import type { SiteContent } from './types'

export const content: SiteContent = {
  meta: {
    description:
      "Passionate software developer with a master's degree in computer science from the University of Cologne, graduated with honors. " +
      'I enjoy solving complex problems and staying active through badminton, bouldering, and climbing. ' +
      'Discover more about my skills and experiences on my website!',
  },
  timeline: {
    experience: [
      {
        title: 'Software Developer',
        subTitle: 'Infolytics AG',
        dateFrom: 'October 2022',
        dateTo: 'Present',
        bullets: [
          [
            { text: 'Took ownership of a standalone ' },
            { text: 'Spring Boot', italic: true },
            { text: '/' },
            { text: 'Angular', italic: true },
            { text: ' microservice within a larger ' },
            { text: 'public-sector administration platform', link: 'public-sector-platform' },
            { text: ', working directly with the customer from requirements through delivery' },
          ],
          [
            { text: 'Took on full ownership of the ' },
            { text: 'wind-energy sensor data platform', link: 'wind-energy-platform' },
            { text: ': migrated the frontend from legacy ' },
            { text: 'jQuery', italic: true },
            { text: ' to ' },
            { text: 'Angular 21', italic: true },
            { text: ' and the backend from ' },
            { text: 'MaxDB', italic: true },
            { text: ' to ' },
            { text: 'PostgreSQL', italic: true },
            { text: ', and handled the customer\'s ongoing feature requests and bug fixes' },
          ],
          [
            { text: 'Lead frontend developer on ' },
            { text: 'another client project', link: 'logistics-project' },
            { text: ': set up the ' },
            { text: 'Angular', italic: true },
            { text: ' architecture, built reusable base components, and delegated work to a working student and an apprentice' },
          ],
        ],
      },
      {
        title: 'Working Student in Application Development',
        subTitle: 'Infolytics AG',
        dateFrom: 'October 2018',
        dateTo: 'September 2022',
        bullets: [
          [
            { text: 'Primarily worked on the ' },
            { text: 'wind-energy sensor data platform', link: 'wind-energy-platform' },
            { text: ': backend development in ' },
            { text: 'C++', italic: true },
            { text: ' with ' },
            { text: 'Boost.Asio', italic: true },
            { text: ' and ' },
            { text: 'unixODBC', italic: true },
            { text: ', plus ' },
            { text: 'jQuery', italic: true },
            { text: ' frontend feature work and bug fixes' },
          ],
          [
            { text: 'Contributed ' },
            { text: 'Angular', italic: true },
            { text: ' and ' },
            { text: 'Spring Boot', italic: true },
            { text: ' features across other client projects' },
          ],
          [
            { text: 'Optimized a ' },
            { text: 'Java', italic: true },
            { text: ' import pipeline by multi-threading the import and postprocessing of customer entities ingested through an external API' },
          ],
          [
            { text: 'Set up ' },
            { text: 'GitLab CI/CD', italic: true },
            { text: ' pipelines for multiple projects' },
          ],
          [
            { text: 'Provisioned VMs with ' },
            { text: 'Proxmox', italic: true },
            { text: ' and ' },
            { text: 'Ansible', italic: true },
            { text: ', later migrating some local development environments to ' },
            { text: 'Docker', italic: true },
          ],
          [
            {
              text: 'Took on general working-student tasks across the team, including bugfixing and feature requests on additional projects',
            },
          ],
        ],
      },
    ],
    internships: [
      {
        title: 'Bachelor Thesis',
        subTitle: 'Fraunhofer IPT',
        dateFrom: 'March 2022',
        dateTo: 'November 2022',
        bullets: [
          [
            { text: 'Bachelor thesis as part of the ' },
            { text: 'AIxCell project', link: 'bachelor-thesis' },
            { text: ', focusing on the migration of an existing AutoML pipeline to the cloud' },
          ],
          [
            {
              text: 'Migration of an AutoML pipeline to a Kubernetes (K8s) cluster, optimizing scalability and resource management',
            },
          ],
          [
            {
              text: 'Design and implementation of a backend for executing AutoML pipelines, ensuring efficient processing and seamless integration with machine learning models',
            },
          ],
          [
            {
              text: 'Development of a robust RESTful API using NestJS to manage and monitor AutoML pipelines',
            },
          ],
          [
            {
              text: 'Enhancement of a ReactJS based Single Page Application (SPA), optimizing the user interface and integrating AutoML workflows',
            },
          ],
          [
            { text: 'Technologies: ', strong: true },
            { text: 'TypeScript, NestJS, Python, Podman, Argo, Oracle OKE' },
          ],
        ],
      },
      {
        title: 'Internship',
        subTitle: 'Infolytics AG',
        dateFrom: 'July 2018',
        dateTo: 'September 2018',
        bullets: [
          [
            {
              text: 'Internship as part of the training for Information Technology Assistant, gaining practical experience in software development',
            },
          ],
          [
            {
              text: 'Implementation of a Java library for a DFWind-specific network protocol based on TCP',
            },
          ],
          [
            {
              text: 'Development of RESTful services using Spring Boot with JPA and Hibernate',
            },
          ],
          [
            {
              text: 'Microcontroller programming to simulate a measuring station for the DFWind project, contributing to real-time data processing and system testing.',
            },
          ],
        ],
      },
      {
        title: 'International Internship',
        subTitle: 'Erasmus Internship in Marseille, France',
        dateFrom: 'April 2017',
        dateTo: 'April 2017',
        bullets: [
          [
            {
              text: 'Erasmus internship as part of the training for Information Technology Assistant',
            },
          ],
          [
            {
              text: 'Soldering of SMD components, working on hardware assembly and repair',
            },
          ],
          [
            {
              text: 'Provisioning and setup of computers for customer orders, ensuring system functionality and configuration to client specifications',
            },
          ],
        ],
      },
    ],
    education: [
      {
        title: 'Master of Science in Computer Science',
        subTitle: 'University of Cologne',
        dateFrom: 'April 2023',
        dateTo: 'December 2025',
        bullets: [
          [{ text: 'Graduated ' }, { text: 'with honors', strong: true }],
          [
            { text: 'Thesis: ', strong: true },
            {
              text: 'A Unifying Framework for Provisioning and Executing Computational Tools across Heterogeneous Computing Environments',
              link: 'master-thesis',
            },
          ],
          [
            { text: 'Focus Area: ', strong: true },
            {
              text: 'Development of Software-Intensive Systems, with emphasis on scalable architectures and cloud-native applications',
            },
          ],
          [
            { text: 'Supplementary Area: ', strong: true },
            {
              text: 'Scientific and High-Performance Computing, focusing on parallel computing and optimization techniques',
            },
          ],
          [
            {
              text: 'Explored machine learning, specifically computer vision, through coursework and hands-on projects',
            },
          ],
          [
            {
              text: 'Actively participated in a committee responsible for selecting a new faculty member in the Computer Science department',
            },
          ],
        ],
      },
      {
        title: 'Bachelor of Science in Computer Science',
        subTitle: 'RWTH Aachen University',
        dateFrom: 'October 2018',
        dateTo: 'September 2022',
        bullets: [
          [
            { text: 'Thesis: ', strong: true },
            {
              text: 'Development and Deployment of a Cloud-Based System Architecture for Domain-Specific AutoML Systems',
            },
          ],
          [
            {
              text: 'Focused on software development, system design, and advanced internet technologies, i.e., cloud computing, full-stack development, and distributed systems',
            },
          ],
          [
            {
              text: 'Supplementary studies in Business Administration (BWL), covering business processes and management concepts',
            },
          ],
        ],
      },
      {
        title: 'Information Technology Assistant',
        subTitle: 'Georg-Simon-Ohm-Berufskolleg',
        dateFrom: 'August 2015',
        dateTo: 'November 2018',
        bullets: [
          [
            {
              text: 'Develop applications in C# (.NET) and write modular C programs for microcontroller projects',
            },
          ],
          [
            {
              text: 'Program microcontrollers to interface with peripherals using I2C/TWI protocols, managing data transfer and processing',
            },
          ],
          [
            {
              text: 'Plan and set up local networks, configuring VLANs, IP address schemes, subnetting, and managing network traffic with switches, routers, and firewalls',
            },
          ],
          [
            {
              text: 'Design and manage SQL databases, perform data normalization, write advanced queries',
            },
          ],
        ],
      },
      {
        title: 'General University Entrance Qualification',
        subTitle: 'Georg-Simon-Ohm-Berufskolleg',
        dateFrom: 'August 2015',
        dateTo: 'June 2018',
        bullets: [
          [
            { text: 'Major subjects: ', strong: true },
            { text: 'Mathematics and Technical Computer Science' },
          ],
          [{ text: 'Acquired skills in problem-solving and analytical thinking' }],
          [
            {
              text: 'Participated in various technical projects and team collaborations',
            },
          ],
        ],
      },
    ],
  },
  projects: {
    nonCommercial: [
      {
        slug: 'bachelor-thesis',
        heading: "Bachelor's Thesis: AIxCell Project",
        subTitle: 'Fraunhofer IPT',
        dateFrom: 'March 2022',
        dateTo: 'November 2022',
        bullets: [
          [
            { text: 'Migrated an existing AutoML pipeline to ' },
            { text: 'Oracle Cloud Infrastructure (OCI)', italic: true },
            { text: ' using the managed Kubernetes service "Container Engine for Kubernetes" (OKE)' },
          ],
          [
            { text: 'Analyzed the existing local setup and redesigned it to run machine learning pipelines as scheduled ' },
            { text: 'Kubernetes', italic: true },
            { text: ' tasks' },
          ],
          [
            { text: 'Added image upload and integrated image annotation via ' },
            { text: 'Label Studio', italic: true },
            { text: ' into the existing ' },
            { text: 'React', italic: true },
            { text: ' frontend' },
          ],
          [
            { text: 'Built a RESTful service to trigger, monitor, and report ' },
            { text: 'AutoML', italic: true },
            { text: ' pipeline results back to the frontend' },
          ],
        ],
        details: [
          "Bachelor's thesis conducted at Fraunhofer IPT as part of the AIxCell project, migrating an on-premise AutoML pipeline to the cloud to improve scalability and enable broader use across the project.",
        ],
        skills: [
          'AutoML',
          'Oracle Cloud Infrastructure (OCI)',
          'Kubernetes (K8S)',
          'MinIO',
          'Oracle Kubernetes Engine (OKE)',
          'Label Studio',
          'NestJS',
          'ReactJS',
          'TypeScript',
          'RESTful Services',
        ],
      },
      {
        slug: 'master-thesis',
        heading: "Master's Thesis: Unified Tool Execution Framework",
        subTitle: 'German Aerospace Center (DLR), Cologne',
        dateFrom: 'June 2025',
        dateTo: 'November 2025',
        bullets: [
          [
            { text: 'Designed and implemented a framework that lets administrators register arbitrary command-line tools with typed arguments, executable by users through a ' },
            { text: 'RESTful API', italic: true },
          ],
          [
            {
              text: 'Built a backend-agnostic abstraction layer that represents each tool as a single logical unit and translates execution requests into the target backend’s native format',
            },
          ],
          [
            { text: 'Implemented dispatch backends for ' },
            { text: 'Kubernetes', italic: true },
            { text: ', ' },
            { text: 'Slurm', italic: true },
            { text: ', and a custom native runner, so the same tool definition runs unchanged across heterogeneous compute environments' },
          ],
          [
            { text: 'Implemented the framework using ' },
            { text: 'Quarkus/Kotlin', italic: true },
            { text: ' and ' },
            { text: 'Go', italic: true },
            { text: ', deployed on ' },
            { text: 'Kubernetes', italic: true },
          ],
        ],
        details: [
          'Master’s thesis conducted at the German Aerospace Center (DLR) in Cologne: "A Unifying Framework for Provisioning and Executing Computational Tools across Heterogeneous Computing Environments", completed with honors.',
        ],
        skills: ['Quarkus', 'Kotlin', 'Golang', 'Kubernetes', 'Slurm', 'RESTful API'],
      },
    ],
    commercial: [
      {
        slug: 'public-sector-platform',
        heading: 'Public Sector Administration Software',
        subTitle: 'Infolytics AG',
        dateFrom: 'March 2024',
        dateTo: 'Present',
        bullets: [
          [
            { text: 'Owned a self-contained business module within a microservices architecture running on an ' },
            { text: 'OpenShift', italic: true },
            { text: ' cluster' },
          ],
          [
            {
              text: 'Conducted on-site requirements analysis with the client, aligning features directly with domain stakeholders',
            },
          ],
          [
            { text: 'Designed, architected, and implemented the module as a microservice with a ' },
            { text: 'Spring Boot', italic: true },
            { text: ' backend and ' },
            { text: 'Angular', italic: true },
            { text: ' frontend' },
          ],
          [
            {
              text: 'Built reusable base components for Spring Boot and Angular, adopted by other modules in the system',
            },
          ],
          [
            { text: 'Owned CI/CD pipelines and the build/deployment process using ' },
            { text: 'GitLab CI', italic: true },
          ],
          [
            { text: 'Introduced end-to-end testing with ' },
            { text: 'Playwright', italic: true },
            { text: ' to safeguard business functionality' },
          ],
        ],
        details: [
          'Greenfield administration software for the public sector, built and shipped for a government agency.',
        ],
        skills: [
          'OpenShift',
          'Microservices',
          'Spring Boot',
          'Angular',
          'GitLab CI',
          'Playwright',
        ],
      },
      {
        slug: 'wind-energy-platform',
        heading: 'Wind Energy Sensor Data Platform',
        subTitle: 'Infolytics AG · DLR (DFWind)',
        dateFrom: 'October 2018',
        dateTo: 'Present',
        bullets: [
          [
            { text: 'Started as a working student, developing the backend in ' },
            { text: 'C++', italic: true },
            { text: ' with ' },
            { text: 'Boost.Asio', italic: true },
            { text: ' and ' },
            { text: 'unixODBC', italic: true },
            { text: ', plus bugfixing and feature work in the ' },
            { text: 'jQuery', italic: true },
            { text: ' frontend' },
          ],
          [
            {
              text: 'Took over the project, coordinating directly with the client on extensions and architecture decisions',
            },
          ],
          [
            { text: 'Owned the local test infrastructure, including building and operating VMs on ' },
            { text: 'Proxmox', italic: true },
            { text: ' and automating provisioning/maintenance with ' },
            { text: 'Ansible', italic: true },
          ],
          [
            { text: 'Modernized the legacy stack: migrated the database from ' },
            { text: 'MaxDB', italic: true },
            { text: ' to ' },
            { text: 'PostgreSQL', italic: true },
            { text: ' and the frontend from legacy ' },
            { text: 'jQuery', italic: true },
            { text: ' to ' },
            { text: 'Angular 21', italic: true },
          ],
        ],
        details: [
          'Platform for capturing and serving wind-park sensor measurement data, developed in collaboration with the German Aerospace Center (DLR) as part of the DFWind research project.',
        ],
        skills: [
          'C++',
          'Boost.Asio',
          'unixODBC',
          'jQuery',
          'MaxDB',
          'PostgreSQL',
          'Angular 21',
          'Proxmox VE',
          'Ansible',
        ],
      },
      {
        slug: 'logistics-project',
        heading: 'Logistics Document Archive System',
        subTitle: 'Infolytics AG',
        dateFrom: 'March 2022',
        dateTo: 'February 2024',
        bullets: [
          [
            { text: 'Owned the ' },
            { text: 'Angular', italic: true },
            { text: ' frontend, including its overall architecture' },
          ],
          [
            {
              text: 'Mentored a working student and an apprentice, guiding them through development tasks',
            },
          ],
          [
            {
              text: 'Built reusable base components and defined frontend coding standards',
            },
          ],
          [
            { text: 'Automated DTO and service code generation from ' },
            { text: 'Swagger/OpenAPI', italic: true },
          ],
          [
            {
              text: 'Implemented core UI functionality for document management, search, and requests',
            },
          ],
        ],
        details: [
          'Web-based document archive system for storing, managing, and requesting documents on behalf of customers.',
        ],
        skills: ['Angular', 'Swagger/OpenAPI', 'Code Generation'],
      },
    ],
  },
}
