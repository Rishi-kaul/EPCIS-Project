"use client";
import { useEffect, useState } from "react";

export default function ResumePage() {
  // Temporary resume data
  const tempResume = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    summary: "Experienced software engineer with 5+ years of expertise in full-stack development. Specialized in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and leading development teams.",
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "2020 - Present",
        description: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines reducing deployment time by 40%."
      },
      {
        position: "Software Developer",
        company: "Digital Innovations Ltd",
        duration: "2018 - 2020",
        description: "Developed and maintained multiple client-facing applications using React and Node.js. Improved application performance by 60%."
      },
      {
        position: "Junior Developer",
        company: "StartUp Hub",
        duration: "2016 - 2018",
        description: "Contributed to front-end development using React and Redux. Collaborated with UX team to implement responsive designs."
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Tech University",
        year: "2016"
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "State University",
        year: "2014"
      }
    ],
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "Agile",
      "MongoDB",
      "PostgreSQL"
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        year: "2021"
      },
      {
        name: "Google Cloud Professional Developer",
        year: "2020"
      }
    ]
  };

  const [resume, setResume] = useState(null);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setResume(tempResume);
    }, 1000);
  }, []);

  if (!resume) return <p className="text-center p-6">Loading resume...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{resume.name}</h1>
        <div className="text-gray-300 space-x-4">
          <span>{resume.email}</span>
          <span>•</span>
          <span>{resume.phone}</span>
          <span>•</span>
          <span>{resume.location}</span>
        </div>
      </div>

      <hr className="border-gray-600 my-6" />
      
      {/* Summary Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Summary</h2>
        <p className="text-gray-300">{resume.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Experience</h2>
        {resume.experience.map((job, index) => (
          <div key={index} className="mb-4 border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <div className="text-gray-300 mb-2">
              <span className="font-medium">{job.company}</span>
              <span className="mx-2">•</span>
              <span>{job.duration}</span>
            </div>
            <p className="text-gray-400">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-4 border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <div className="text-gray-300">
              <span>{edu.institution}</span>
              <span className="mx-2">•</span>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Certifications</h2>
        {resume.certifications.map((cert, index) => (
          <div key={index} className="mb-2 border-l-4 border-yellow-500 pl-4">
            <h3 className="text-lg font-semibold">{cert.name}</h3>
            <p className="text-gray-300">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
