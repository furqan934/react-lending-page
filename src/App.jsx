function App() {
  return (
    <div className="font-sans">
      {/* nabar */}
      <header className="flex justify-between items-center p-6 bg-blue-600 text-white shadow">
        <h1 className="text-2xl font-bold">Portfolio App</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#Home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="Home" className="py-16 text-center bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Hi 👋, I’m <span className="font-semibold">Muhammad Furqan</span>.
            This is my portfolio site built with React + Tailwind. Explore my
            projects, skills, and more.
          </p>
          <div className="mt-8">
            <a
              href="#features"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="About" className="py-20 px-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            My name is <span className="font-semibold">Muhammad Furqan</span>. I
            am a web developer passionate about creating clean, modern, and fast
            applications. I love working with React, Tailwind CSS, and other
            modern web technologies to build professional solutions. This
            portfolio shows my journey and projects. 🚀
          </p>
        </section>

        {/* Contact */}
        <section id="Contact" className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to reach out to me for collaborations, projects, or just
            to say hello!
          </p>
          <p className="text-gray-700">
            📧 Email:{" "}
            <a
              href="mailto:muhammad.furqan.dev@gmail.com"
              className="text-blue-600 hover:underline"
            >
              muhammad.furqan.dev@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            🌐 GitHub:{" "}
            <a
              href="https://github.com/furqan934"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/furqan934
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Muhammad Furqan. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
