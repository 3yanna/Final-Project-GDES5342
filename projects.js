// src/data/projects.js

// import images for main project visuals
import threadImg from "@/assets/thread.jpg";
import filipinoImg from "@/assets/filipino.png";
import kicadImg from "@/assets/kicad.png";
import ambassadorsImg from "@/assets/ambassadors.jpg";
import sweImg from "@/assets/swe.jpg";

// import extra gallery images
import kicadSchematic from "@/assets/kicad.png";
import electronicsSetup from "@/assets/electronics.jpg";
import skeletonFrame from "@/assets/skeleton.jpg";
import appetizerImg from "@/assets/appetizer.png";
import entreeImg from "@/assets/Entree.png";
import dessertImg from "@/assets/dessert.png";
import directoriesImg from "@/assets/directories.png";

import roboticsIcon from "@/assets/icons/robotics.svg";
import webIcon from "@/assets/icons/web.svg";
import electronicsIcon from "@/assets/icons/electronics.svg";
import leadershipIcon from "@/assets/icons/leadership.svg";
import extracurricularIcon from "@/assets/icons/extracurricular.svg";

// export array of projects
export const projects = [
    {
        id: 1,
        title: "Automatic Thread Twisting Robot", // project name
        category: "Robotics", // category type
        description: "A computer-controlled machine that twists thread into bracelets using Arduino.", // short description
        technologies: ["Arduino", "PVC", "Motor Driver", "Embedded C"], // tools used
        year: 2024, // year done
        image: threadImg, // main image
        gallery: [kicadSchematic, electronicsSetup, skeletonFrame, threadImg], // extra images
        outcome: "Delivered reliable, repeatable performance meeting design constraints for size, power, and safety.", // result
        icon: roboticsIcon // category icon
    },
    {
        id: 2,
        title: "Filipino Recipes Website",
        category: "Web Development",
        description: "Responsive website showcasing traditional Filipino recipes.",
        technologies: ["HTML", "CSS", "JavaScript"],
        year: 2025,
        image: filipinoImg,
        gallery: [appetizerImg, entreeImg, dessertImg, directoriesImg],
        outcome: "Created engaging user experience with custom styles and mock-up graphics.",
        icon: webIcon
    },
    {
        id: 3,
        title: "KiCad Circuit Design",
        category: "Electronics",
        description: "Designed schematics and PCB layouts for robot motor control.",
        technologies: ["KiCad", "Microcontrollers", "PCB Design"],
        year: 2024,
        image: kicadImg,
        gallery: [electronicsSetup],
        outcome: "Enabled precise motor control and reliable circuit integration.",
        icon: electronicsIcon
    },
    {
        id: 4,
        title: "Mechanical Engineering Ambassador Program",
        category: "Leadership",
        description: "Led recruitment and mentoring efforts for engineering students.",
        technologies: ["Public Speaking", "Mentorship", "Event Planning"],
        year: 2024,
        image: ambassadorsImg,
        gallery: [],
        outcome: "Strengthened departmental outreach and peer engagement.",
        icon: leadershipIcon
    },
    {
        id: 5,
        title: "Society of Women Engineers Involvement",
        category: "Extracurricular",
        description: "Active member contributing to events and professional development.",
        technologies: ["Networking", "Teamwork", "Professional Development"],
        year: 2023,
        image: sweImg,
        gallery: [],
        outcome: "Expanded professional network and supported outreach initiatives.",
        icon: extracurricularIcon
    }
];
