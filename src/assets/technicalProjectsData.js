import { faLinux, faJs } from '@fortawesome/free-brands-svg-icons';
import { faTools, faServer, faHardHat } from '@fortawesome/free-solid-svg-icons';

export const technicalProjects = [
  {
    title: "Linux Server Setup",
    description: "Configured a Linux-based file sharing server for a local network, including user permissions and troubleshooting connectivity issues.",
    technologies: [faLinux, faServer],
    icon: faServer,
  },
  {
    title: "Automation Script",
    description: "Developed a JavaScript script to automate repetitive data entry tasks, improving efficiency and reducing manual errors for internal operations.",
    technologies: [faJs, faTools],
    icon: faTools,
  },
  {
    title: "PC Troubleshooting Guide",
    description: "Created a step-by-step troubleshooting manual for common PC issues (OS errors, connectivity, hardware replacements) to empower end-users and reduce help desk tickets.",
    technologies: [faTools, faHardHat],
    icon: faHardHat,
  },
];