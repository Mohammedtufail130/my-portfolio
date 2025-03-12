import React from 'react';

const About: React.FC = () => {
  return (
    <article className="bg-[#1e1e1f] border border-[#333] rounded-[20px] p-4 md:p-8 mb-20">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#f5c45a] after:to-[#f5a63a] after:rounded-md">
          About me
        </h2>
      </header>
      
      <section className="text-[#aaa] text-sm md:text-base leading-relaxed mb-8">
        <p className="mb-4">
        I'm a passionate web developer dedicated to delivering responsive and engaging digital experiences. I focus on crafting intuitive user interfaces and robust web solutions that simplify complex challenges. My work emphasizes clean code, thoughtful design, and seamless performance to meet the evolving demands of modern web applications.
        </p>
        <p>
        I continuously adopt the latest technologies to enhance every project. Leveraging tools like React.js, JavaScript, Java, Spring Boot, RESTful APIs, I stay ahead of emerging trends and best practices. By integrating innovative approaches and adapting cutting-edge frameworks, I ensure my solutions are both effective today and ready for the future.
        </p>
      </section>
       {/* Services Section */}
       <section className="mb-8">
        <h3 className="text-xl md:text-2xl text-white mb-6">What I'm doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Web design",
              description: "The most modern and high-quality design made at a professional level.",
              icon: "https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/master/assets/images/icon-design.svg"
            },
            {
              title: "Web development",
              description: "High-quality development of websites at a professional level.",
              icon: "https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/master/assets/images/icon-dev.svg"
            },
            {
                title: "Video Editing",
                description: "Expert editing to transform footage into polished videos.",
                icon: "https://img.icons8.com/fluency/48/000000/video-editing.png"
              },
              
              {
                title: "Photo Editing",
                description: "Expertly retouching and enhancing images for a polished, professional look.",
                icon: "https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/master/assets/images/icon-photo.svg"
              }
              
          ].map((service, index) => (
            <div key={index} className="relative bg-gradient-to-br from-[#404042] to-[#313133] p-5 rounded-[14px] flex flex-col md:flex-row items-center gap-4">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white text-lg mb-2">{service.title}</h4>
                <p className="text-[#aaa] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;
