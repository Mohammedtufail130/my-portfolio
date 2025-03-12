import React from 'react';

const Resume: React.FC = () => {
  return (
    <article className="bg-[#1e1e1f] border border-[#333] rounded-[20px] p-4 md:p-8 mb-20">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#f5c45a] after:to-[#f5a63a] after:rounded-md">
          Resume
        </h2>
      </header>
      
      {/* Education Section */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl text-white">Education</h3>
        </div>
        
        <ol className="ml-12 relative border-l border-[#333]">
          {[
            {
              title: "PA College of Engineering, Mangalore",
              years: "2021 — 2024",
              description: "Awarded First Prize at 'KAUSHAL-24' for innovative solutions in Electronics and Communication engineering and recognized as the Best Outgoing Student for academic excellence and leadership."
            },
            {
              title: "S.J.V.P Polytechnic, Harihar",
              years: "2016 — 2020",
              description: "Completed a Diploma in Electronics and Communication Engineering from S.J.V.P Polytechnic, Harihar, gaining a strong foundation in electronic systems, communication technologies, and practical applications."
            },
            {
              title: "Maria Nivas High School, Harihar",
              years: "2015 — 2016",
              description: "Completed primary and secondary education from Maria Nivas High School, Harihar, building a strong academic foundation from Grade 1 to 10."
            }
          ].map((edu, index) => (
            <li key={index} className="mb-6 ml-6 relative">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full -left-[22px] top-2 border-4 border-[#222]"></div>
              <h4 className="text-white text-lg mb-1">{edu.title}</h4>
              <span className="text-[#f5c45a] text-sm block mb-2">{edu.years}</span>
              <p className="text-[#aaa] text-sm">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
      
      {/* Experience Section */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl text-white">Experience</h3>
        </div>
        
        <ol className="ml-12 relative border-l border-[#333]">
          {[
            {
              title: "Web Designer",
              years: "2025 — Present",
              description: "Developing responsive and interactive web applications using React.js, JavaScript, HTML, and CSS, while integrating backend services with Spring Boot and REST APIs to enhance functionality and user experience."
            },
            {
              title: "Embedded Systems and IoT Intern",
              years: "2022",
              description: "Completed an internship in embedded systems, where I gained hands-on experience in utilizing IoT modules to design and build projects with IoT devices. "
            },
            
          ].map((exp, index) => (
            <li key={index} className="mb-6 ml-6 relative">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full -left-[22px] top-2 border-4 border-[#222]"></div>
              <h4 className="text-white text-lg mb-1">{exp.title}</h4>
              <span className="text-[#f5c45a] text-sm block mb-2">{exp.years}</span>
              <p className="text-[#aaa] text-sm">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>
      
      {/* Skills Section */}
      <section>
        <h3 className="text-xl md:text-2xl text-white mb-6">My skills</h3>
        
        <div className="bg-gradient-to-br from-[#404042] to-[#313133] p-5 rounded-[14px]">
          <ul className="space-y-4">
            {[
              { name: "java", value: 80 },
              { name: "javascript, HTML & CSS", value: 80 },
              { name: "react.js", value: 70 },
              { name: "Git/Github", value: 90 }
            ].map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-2">
                  <h5 className="text-white">{skill.name}</h5>
                  <span className="text-white">{skill.value}%</span>
                </div>
                <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#f5c45a] to-[#f5a63a] rounded-full" 
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Resume;
