import { Mail, Linkedin, Phone } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Nidhaan Dubey</h1>
        <p className="text-lg">Final Year Student At IIIT Sonepat</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <a href="mailto:nidhidubey811@gmail.com" className="flex items-center space-x-1 hover:text-white">
            <Mail className="w-4 h-4" /> <span>nidhaandubey2@gmail.com</span>
          </a>
          <a href="tel:+919003737733" className="flex items-center space-x-1 hover:text-white">
            <Phone className="w-4 h-4" /> <span>+91 8299797855</span>
          </a>
          <a href="https://www.linkedin.com/in/nidhaan-dubey-73a790250/" target="_blank" className="flex items-center space-x-1 hover:text-white" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
A passionate computer science student with a strong foundation in data structures and algorithms, skilled in web and mobile app development. Hands-on experience in building real-world applications and contributing to impactful projects using React Native, React.js, and Node.js.
        </p>
        
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto space-y-8" >
        <h2 className="text-2xl font-semibold text-center">Experience</h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Trainee @ ATH Technology</h3>
          <p className="text-sm text-gray-400">1st July 2025 – 31st July 2025 </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Developed a mobile-based Sales Executive Tracking System using React Native, enabling real-time location monitoring with Google Maps and session tracking.</li>
            <li>Collaborated with senior developers in a hybrid team environment, contributing to frontend and backend modules for a production-ready mobile app.</li>
            <li>Gained hands-on experience in API integration, database handling, and mobile app UI development during a one-month professional training at ATH Technologies.</li>
            
          </ul>
          
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Growth Intern @ Fact-App</h3>
          <p className="text-sm text-gray-400">8st June 2023 – 6st July 2023 </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Implemented and debugged frontend components using JavaScript and BootStrap, resulting in improved UI responsiveness.</li>
            <li>Participated in Agile development cycles, including sprint planning and reviews, and contributing to platform optimization.</li>
            
          </ul>
          
        </div>
        </section>

      {/* Projects */}
        <section className="max-w-5xl mx-auto space-y-8" >
        <h2 className="text-2xl font-semibold text-center">Projects</h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">LinkedIN Scraper Tool</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Built a powerful web scraper using Python for dynamic/static web content extraction and Scraped complex fields like “Overall
Experience” by combining data from various DOM sections programmatically.</li>
            <li>Handled pagination, AJAX content, and implemented retry logic with request throttling for stability and efficiency.</li>
            
          </ul>
          
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Operating System Scheduling Algorithms</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Designed and implemented CPU scheduling algorithms using Object-Oriented Programming principles in C++.</li>
            <li>Implemented FCFS, SJF, SRTF, HRRN, Round-Robin, and Priority Scheduling (Preemptive/Non-Preemptive).</li>
            <li>Analyzed key metrics such as turnaround time, waiting time, and response time to evaluate algorithm efficiency.</li>
          </ul>
          
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Responsive News Website</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Engineered a responsive news website using JavaScript, React.js, Node.js, and Bootstrap, employing RESTful API integration.</li>
            <li>Enhanced user experience with React.js, applying state management and hooks for seamless functionality.</li>
            <li>Integrated a third-party News API for real-time updates and streamlined news categorization.</li>
          </ul>
          
          </div>
        </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <span className="bg-gray-800 p-2 rounded">C/C++</span>
          <span className="bg-gray-800 p-2 rounded">React</span>
          <span className="bg-gray-800 p-2 rounded">React-Native</span>
          <span className="bg-gray-800 p-2 rounded">Object-Oriented Programming(OOPs)</span>
          <span className="bg-gray-800 p-2 rounded">Database Management</span>
          <span className="bg-gray-800 p-2 rounded">SQL</span>
        </div>
      </section>

      

      {/* Education */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">B.Tech in Computer Science and Engineering – Indian Institute Of Information Technology(IIIT),Sonepat  (2022–2026) </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        <p>© {new Date().getFullYear()} Nidhaan Dubey. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}