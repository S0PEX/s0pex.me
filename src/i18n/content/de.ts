import type { SiteContent } from './types'

export const content: SiteContent = {
  meta: {
    description:
      'Leidenschaftlicher Softwareentwickler mit einem mit Auszeichnung abgeschlossenen Master in Informatik von der Universität zu Köln. ' +
      'Ich löse gerne komplexe Probleme und bleibe aktiv beim Badminton, Bouldern und Klettern. ' +
      'Entdecke mehr über meine Fähigkeiten und Erfahrungen auf meiner Website!',
  },
  timeline: {
    experience: [
      {
        title: 'Softwareentwickler',
        subTitle: 'Infolytics AG',
        dateFrom: 'Oktober 2022',
        dateTo: 'Heute',
        bullets: [
          [
            { text: 'Verantwortung für einen eigenständigen ' },
            { text: 'Spring Boot', italic: true },
            { text: '/' },
            { text: 'Angular', italic: true },
            { text: '-Microservice innerhalb einer größeren ' },
            { text: 'Verwaltungsplattform für den öffentlichen Dienst', link: 'public-sector-platform' },
            { text: ': direkte Abstimmung mit dem Kunden von der Anforderungsaufnahme bis zur Umsetzung' },
          ],
          [
            { text: 'Volle Verantwortung für die ' },
            { text: 'Sensordatenplattform für Windenergie', link: 'wind-energy-platform' },
            { text: ': Migration des Frontends von Legacy-' },
            { text: 'jQuery', italic: true },
            { text: ' auf ' },
            { text: 'Angular 21', italic: true },
            { text: ' und des Backends von ' },
            { text: 'MaxDB', italic: true },
            { text: ' auf ' },
            { text: 'PostgreSQL', italic: true },
            { text: ', sowie Bearbeitung laufender Feature-Anfragen und Bugfixes des Kunden' },
          ],
          [
            { text: 'Lead Frontend Developer in ' },
            { text: 'einem weiteren Kundenprojekt', link: 'logistics-project' },
            { text: ': Aufbau der ' },
            { text: 'Angular', italic: true },
            { text: '-Architektur, Entwicklung wiederverwendbarer Basis-Komponenten und Aufgabenverteilung an einen Werkstudenten und einen Auszubildenden' },
          ],
        ],
      },
      {
        title: 'Werkstudent in der Anwendungsentwicklung',
        subTitle: 'Infolytics AG',
        dateFrom: 'Oktober 2018',
        dateTo: 'September 2022',
        bullets: [
          [
            { text: 'Hauptsächlich tätig auf der ' },
            { text: 'Sensordatenplattform für Windenergie', link: 'wind-energy-platform' },
            { text: ': Backend-Entwicklung in ' },
            { text: 'C++', italic: true },
            { text: ' mit ' },
            { text: 'Boost.Asio', italic: true },
            { text: ' und ' },
            { text: 'unixODBC', italic: true },
            { text: ', sowie Feature-Entwicklung und Bugfixing im ' },
            { text: 'jQuery', italic: true },
            { text: '-Frontend' },
          ],
          [
            { text: 'Umsetzung von ' },
            { text: 'Angular', italic: true },
            { text: '- und ' },
            { text: 'Spring Boot', italic: true },
            { text: '-Features in weiteren Kundenprojekten' },
          ],
          [
            { text: 'Optimierung einer ' },
            { text: 'Java', italic: true },
            { text: '-Importpipeline durch Multithreading des Imports und der Nachbearbeitung von Kundenentitäten aus einer externen API' },
          ],
          [
            { text: 'Aufbau von ' },
            { text: 'GitLab CI/CD', italic: true },
            { text: '-Pipelines für mehrere Projekte' },
          ],
          [
            { text: 'Bereitstellung von VMs mit ' },
            { text: 'Proxmox', italic: true },
            { text: ' und ' },
            { text: 'Ansible', italic: true },
            { text: ', später Migration einzelner lokaler Entwicklungsumgebungen zu ' },
            { text: 'Docker', italic: true },
          ],
          [
            {
              text: 'Übernahme allgemeiner Werkstudententätigkeiten im Team, u. a. Bugfixing und Feature-Umsetzung in weiteren Projekten',
            },
          ],
        ],
      },
    ],
    internships: [
      {
        title: 'Bachelorarbeit',
        subTitle: 'Fraunhofer IPT',
        dateFrom: 'März 2022',
        dateTo: 'November 2022',
        bullets: [
          [
            { text: 'Bachelorarbeit im Rahmen des ' },
            { text: 'AIxCell-Projekts', link: 'bachelor-thesis' },
            { text: ' mit Fokus auf die Migration einer bestehenden AutoML-Pipeline in die Cloud' },
          ],
          [
            {
              text: 'Migration einer AutoML-Pipeline auf einen Kubernetes (K8s)-Cluster zur Optimierung von Skalierbarkeit und Ressourcenmanagement',
            },
          ],
          [
            {
              text: 'Konzeption und Implementierung eines Backends zur Ausführung von AutoML-Pipelines mit effizienter Verarbeitung und nahtloser Integration von Machine-Learning-Modellen',
            },
          ],
          [
            {
              text: 'Entwicklung einer robusten RESTful-API mit NestJS zur Verwaltung und Überwachung von AutoML-Pipelines',
            },
          ],
          [
            {
              text: 'Erweiterung einer auf ReactJS basierenden Single-Page-Application (SPA), Optimierung der Benutzeroberfläche und Integration von AutoML-Workflows',
            },
          ],
          [
            { text: 'Technologien: ', strong: true },
            { text: 'TypeScript, NestJS, Python, Podman, Argo, Oracle OKE' },
          ],
        ],
      },
      {
        title: 'Praktikum',
        subTitle: 'Infolytics AG',
        dateFrom: 'Juli 2018',
        dateTo: 'September 2018',
        bullets: [
          [
            {
              text: 'Praktikum im Rahmen der Ausbildung zum IT-Assistenten mit praktischer Erfahrung in der Softwareentwicklung',
            },
          ],
          [
            {
              text: 'Implementierung einer Java-Bibliothek für ein DFWind-spezifisches Netzwerkprotokoll auf TCP-Basis',
            },
          ],
          [
            {
              text: 'Entwicklung von RESTful-Diensten mit Spring Boot, JPA und Hibernate',
            },
          ],
          [
            {
              text: 'Mikrocontroller-Programmierung zur Simulation einer Messstation für das DFWind-Projekt, mit Beitrag zur Echtzeit-Datenverarbeitung und zu Systemtests',
            },
          ],
        ],
      },
      {
        title: 'Internationales Praktikum',
        subTitle: 'Erasmus-Praktikum in Marseille, Frankreich',
        dateFrom: 'April 2017',
        dateTo: 'April 2017',
        bullets: [
          [
            {
              text: 'Erasmus-Praktikum im Rahmen der Ausbildung zum IT-Assistenten',
            },
          ],
          [
            {
              text: 'Löten von SMD-Bauteilen sowie Hardwaremontage und -reparatur',
            },
          ],
          [
            {
              text: 'Bereitstellung und Einrichtung von Computern für Kundenaufträge unter Sicherstellung der Systemfunktionalität und kundenspezifischen Konfiguration',
            },
          ],
        ],
      },
    ],
    education: [
      {
        title: 'Master of Science in Informatik',
        subTitle: 'Universität zu Köln',
        dateFrom: 'April 2023',
        dateTo: 'Dezember 2025',
        bullets: [
          [{ text: 'Abschluss ' }, { text: 'mit Auszeichnung', strong: true }],
          [
            { text: 'Abschlussarbeit: ', strong: true },
            {
              text: 'A Unifying Framework for Provisioning and Executing Computational Tools across Heterogeneous Computing Environments',
              link: 'master-thesis',
            },
          ],
          [
            { text: 'Schwerpunkt: ', strong: true },
            {
              text: 'Entwicklung softwareintensiver Systeme mit Fokus auf skalierbare Architekturen und Cloud-native Anwendungen',
            },
          ],
          [
            { text: 'Ergänzungsbereich: ', strong: true },
            {
              text: 'Wissenschaftliches Rechnen und Hochleistungsrechnen mit Fokus auf paralleles Rechnen und Optimierungstechniken',
            },
          ],
          [
            {
              text: 'Vertiefung im Bereich maschinelles Lernen, insbesondere Computer Vision, durch Lehrveranstaltungen und praktische Projekte',
            },
          ],
          [
            {
              text: 'Aktive Mitwirkung in einer Berufungskommission zur Besetzung einer neuen Professur im Fachbereich Informatik',
            },
          ],
        ],
      },
      {
        title: 'Bachelor of Science in Informatik',
        subTitle: 'RWTH Aachen',
        dateFrom: 'Oktober 2018',
        dateTo: 'September 2022',
        bullets: [
          [
            { text: 'Abschlussarbeit: ', strong: true },
            {
              text: 'Development and Deployment of a Cloud-Based System Architecture for Domain-Specific AutoML Systems',
            },
          ],
          [
            {
              text: 'Schwerpunkte in Softwareentwicklung, Systemdesign und fortgeschrittenen Internettechnologien, u. a. Cloud Computing, Full-Stack-Entwicklung und verteilte Systeme',
            },
          ],
          [
            {
              text: 'Ergänzungsstudium Betriebswirtschaftslehre (BWL) mit Fokus auf Geschäftsprozesse und Managementkonzepte',
            },
          ],
        ],
      },
      {
        title: 'Fachinformatiker (IT-Assistent)',
        subTitle: 'Georg-Simon-Ohm-Berufskolleg',
        dateFrom: 'August 2015',
        dateTo: 'November 2018',
        bullets: [
          [
            {
              text: 'Entwicklung von Anwendungen in C# (.NET) sowie modularen C-Programmen für Mikrocontroller-Projekte',
            },
          ],
          [
            {
              text: 'Programmierung von Mikrocontrollern zur Anbindung von Peripheriegeräten über I2C/TWI-Protokolle, einschließlich Datenübertragung und -verarbeitung',
            },
          ],
          [
            {
              text: 'Planung und Einrichtung lokaler Netzwerke, Konfiguration von VLANs, IP-Adressschemata und Subnetting sowie Verwaltung des Netzwerkverkehrs mit Switches, Routern und Firewalls',
            },
          ],
          [
            {
              text: 'Design und Verwaltung von SQL-Datenbanken, Datennormalisierung und Erstellung komplexer Abfragen',
            },
          ],
        ],
      },
      {
        title: 'Allgemeine Hochschulreife',
        subTitle: 'Georg-Simon-Ohm-Berufskolleg',
        dateFrom: 'August 2015',
        dateTo: 'Juni 2018',
        bullets: [
          [
            { text: 'Leistungskurse: ', strong: true },
            { text: 'Mathematik und Technische Informatik' },
          ],
          [{ text: 'Erwerb von Problemlösungs- und analytischen Fähigkeiten' }],
          [
            {
              text: 'Teilnahme an verschiedenen technischen Projekten und Teamarbeit',
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
        heading: 'Bachelorarbeit: AIxCell-Projekt',
        subTitle: 'Fraunhofer IPT',
        dateFrom: 'März 2022',
        dateTo: 'November 2022',
        bullets: [
          [
            { text: 'Migration einer bestehenden AutoML-Pipeline in die ' },
            { text: 'Oracle Cloud Infrastructure (OCI)', italic: true },
            { text: ' unter Nutzung des verwalteten Kubernetes-Dienstes „Container Engine for Kubernetes" (OKE)' },
          ],
          [
            { text: 'Analyse der bestehenden lokalen Umgebung und Neukonzeption zur Ausführung von ML-Pipelines als geplante ' },
            { text: 'Kubernetes', italic: true },
            { text: '-Tasks' },
          ],
          [
            { text: 'Ergänzung um Bild-Upload und Integration der Bildannotation via ' },
            { text: 'Label Studio', italic: true },
            { text: ' in die bestehende ' },
            { text: 'React', italic: true },
            { text: '-Anwendung' },
          ],
          [
            { text: 'Entwicklung eines RESTful-Service zum Auslösen, Überwachen und Zurückmelden von ' },
            { text: 'AutoML', italic: true },
            { text: '-Pipeline-Ergebnissen an das Frontend' },
          ],
        ],
        details: [
          'Bachelorarbeit am Fraunhofer IPT im Rahmen des AIxCell-Projekts: Migration einer On-Premise-AutoML-Pipeline in die Cloud zur Verbesserung der Skalierbarkeit und breiteren Nutzung im Projekt.',
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
        heading: 'Masterarbeit: Einheitliches Tool-Ausführungsframework',
        subTitle: 'Deutsches Zentrum für Luft- und Raumfahrt (DLR), Köln',
        dateFrom: 'Juni 2025',
        dateTo: 'November 2025',
        bullets: [
          [
            { text: 'Konzeption und Implementierung eines Frameworks, mit dem Administratoren beliebige Kommandozeilen-Tools mit typisierten Argumenten registrieren können, die Nutzer über eine ' },
            { text: 'RESTful-API', italic: true },
            { text: ' ausführen' },
          ],
          [
            {
              text: 'Entwicklung einer backend-unabhängigen Abstraktionsschicht, die jedes Tool als einheitliche logische Einheit abbildet und Ausführungsanfragen in das native Format des jeweiligen Backends übersetzt',
            },
          ],
          [
            { text: 'Implementierung von Dispatch-Backends für ' },
            { text: 'Kubernetes', italic: true },
            { text: ', ' },
            { text: 'Slurm', italic: true },
            { text: ' und einen eigenen nativen Runner, sodass dieselbe Tool-Definition unverändert in heterogenen Compute-Umgebungen läuft' },
          ],
          [
            { text: 'Umsetzung des Frameworks mit ' },
            { text: 'Quarkus/Kotlin', italic: true },
            { text: ' und ' },
            { text: 'Go', italic: true },
            { text: ', Betrieb auf ' },
            { text: 'Kubernetes', italic: true },
          ],
        ],
        details: [
          'Masterarbeit am Deutschen Zentrum für Luft- und Raumfahrt (DLR) in Köln: „A Unifying Framework for Provisioning and Executing Computational Tools across Heterogeneous Computing Environments", mit Auszeichnung abgeschlossen.',
        ],
        skills: ['Quarkus', 'Kotlin', 'Golang', 'Kubernetes', 'Slurm', 'RESTful API'],
      },
    ],
    commercial: [
      {
        slug: 'public-sector-platform',
        heading: 'Verwaltungssoftware für den öffentlichen Dienst',
        subTitle: 'Infolytics AG',
        dateFrom: 'März 2024',
        dateTo: 'Heute',
        bullets: [
          [
            { text: 'Technische Verantwortung für ein eigenständiges Fachmodul innerhalb einer Microservice-Architektur in einem ' },
            { text: 'OpenShift', italic: true },
            { text: '-Cluster' },
          ],
          [
            {
              text: 'Vor-Ort-Analyse der Fachdomäne beim Kunden, Ableitung und Abstimmung von Anforderungen direkt mit den Fachbereichen',
            },
          ],
          [
            { text: 'Konzeption, Architektur und Implementierung des Fachmoduls als Microservice mit ' },
            { text: 'Spring Boot', italic: true },
            { text: ' (Backend) und ' },
            { text: 'Angular', italic: true },
            { text: ' (Frontend)' },
          ],
          [
            {
              text: 'Entwicklung wiederverwendbarer Basis-Komponenten für Spring Boot und Angular zur Unterstützung weiterer Module',
            },
          ],
          [
            { text: 'Verantwortung für CI/CD-Pipelines sowie Build- und Deployment-Prozesse mit ' },
            { text: 'GitLab CI', italic: true },
          ],
          [
            { text: 'Einführung von End-to-End-Tests mit ' },
            { text: 'Playwright', italic: true },
            { text: ' zur Absicherung der fachlichen Funktionalität' },
          ],
        ],
        details: [
          'Neuentwicklung einer Verwaltungssoftware für den öffentlichen Dienst, produktiv im Einsatz bei einer Behörde.',
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
        heading: 'Sensordatenplattform für Windenergie',
        subTitle: 'Infolytics AG · DLR (DFWind)',
        dateFrom: 'Oktober 2018',
        dateTo: 'Heute',
        bullets: [
          [
            { text: 'Einstieg als Werkstudent: Backend-Entwicklung in ' },
            { text: 'C++', italic: true },
            { text: ' mit ' },
            { text: 'Boost.Asio', italic: true },
            { text: ' und ' },
            { text: 'unixODBC', italic: true },
            { text: ', sowie Bugfixing und Feature-Entwicklung im ' },
            { text: 'jQuery', italic: true },
            { text: '-Frontend' },
          ],
          [
            {
              text: 'Übernahme des Projekts und direkte technische Abstimmung mit dem Kunden zu Erweiterungen und Architekturentscheidungen',
            },
          ],
          [
            { text: 'Verantwortung für die lokale Testinfrastruktur, inkl. Aufbau und Betrieb von VMs in ' },
            { text: 'Proxmox', italic: true },
            { text: ' sowie Automatisierung von Provisionierung und Wartung mit ' },
            { text: 'Ansible', italic: true },
          ],
          [
            { text: 'Modernisierung der Legacy-Systemlandschaft: Migration der Datenbank von ' },
            { text: 'MaxDB', italic: true },
            { text: ' auf ' },
            { text: 'PostgreSQL', italic: true },
            { text: ' und des Frontends von Legacy-' },
            { text: 'jQuery', italic: true },
            { text: ' auf ' },
            { text: 'Angular 21', italic: true },
          ],
        ],
        details: [
          'Plattform zur Erfassung und Bereitstellung von Sensormessdaten eines Windparks, entwickelt in Zusammenarbeit mit dem DLR im Rahmen des DFWind-Forschungsprojekts.',
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
        heading: 'Dokumentenarchivsystem (Logistik)',
        subTitle: 'Infolytics AG',
        dateFrom: 'März 2022',
        dateTo: 'Februar 2024',
        bullets: [
          [
            { text: 'Technische Verantwortung für das ' },
            { text: 'Angular', italic: true },
            { text: '-Frontend, inklusive Aufbau der Frontend-Architektur' },
          ],
          [
            {
              text: 'Fachliche Betreuung eines Werkstudierenden und eines Auszubildenden bei der Umsetzung von Entwicklungsaufgaben',
            },
          ],
          [
            {
              text: 'Entwicklung wiederverwendbarer Basis-Komponenten und Definition von Coding-Standards für das Frontend',
            },
          ],
          [
            { text: 'Automatisierte Code-Generierung für DTOs und Services auf Basis von ' },
            { text: 'Swagger/OpenAPI', italic: true },
          ],
          [
            {
              text: 'Umsetzung zentraler UI-Funktionalitäten für Dokumentenverwaltung, -suche und -anforderung',
            },
          ],
        ],
        details: [
          'Web-basiertes Dokumentenarchivsystem zur Einlagerung, Verwaltung und Anforderung von Dokumenten durch Kunden.',
        ],
        skills: ['Angular', 'Swagger/OpenAPI', 'Code Generation'],
      },
    ],
  },
}
