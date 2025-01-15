import React from 'react';
import { FaUser, FaMapMarkerAlt, FaCode, FaBook, FaFolder, FaDownload } from 'react-icons/fa';

const SideBar = () => {
  const skills = ['React', 'Next.js', 'JavaScript', 'CSS', 'HTML'];
  const courses = ['Advanced React', 'Frontend Masters', 'CSS Mastery'];
  const projects = [
    { name: 'Portfolio Website', link: '#' },
    { name: 'E-commerce Store', link: '#' },
    { name: 'Blog Platform', link: '#' },
  ];

  return (
    <aside className="w-full min-h-screen bg-slate-900 text-white p-6 space-y-8">
      {/* Profile Section */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-slate-700 rounded-full flex items-center justify-center">
          <FaUser size={40} className="text-slate-300" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">اسمك</h2>
          <p className="text-slate-300 text-sm">مطور واجهات أمامية</p>
          <div className="flex items-center justify-center text-slate-300 text-sm">
            <FaMapMarkerAlt size={14} className="mr-1" />
            <span>موقعك</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaCode size={18} className="text-sky-400" />
          <h3 className="font-semibold text-lg">المهارات</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-800 rounded-full text-sm text-sky-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaBook size={18} className="text-emerald-400" />
          <h3 className="font-semibold text-lg">الدورات</h3>
        </div>
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700 transition-colors"
            >
              {course}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaFolder size={18} className="text-purple-400" />
          <h3 className="font-semibold text-lg">المشاريع</h3>
        </div>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                className="block px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700 transition-colors"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CV Section */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        <a
          href="/path/to/your/cv.pdf" // ضع هنا رابط ملف الـ CV
          download
          className="px-4 py-2 bg-sky-500 rounded-lg text-white flex items-center space-x-2 hover:bg-sky-600 transition-colors"
        >
          <FaDownload size={18} />
          <span>تحميل السيرة الذاتية</span>
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
