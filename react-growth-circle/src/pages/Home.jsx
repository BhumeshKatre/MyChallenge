import React from "react";
import { Link } from "react-router-dom";

const tasks = [
  {
    title: "Day 1 – UserCard UI",
    route: "/task1",
    desc: "Profile card with image, name, email & Follow button",
  },
  {
    title: "Day 2 – Routing Setup",
    route: "/task2",
    desc: "Home, About, Contact & 404 pages using React Router v6",
  },
  {
    title: "Day 3 – API Fetch",
    route: "/task3",
    desc: "Fetch user data from jsonplaceholder API",
  },
  {
    title: "Day 4 – Theme Toggle",
    route: "/task4",
    desc: "Light/Dark mode toggle using Context API",
  },
  {
    title: "Day 5 – Form Handling",
    route: "/task5",
    desc: "Contact form with validation (react-hook-form)",
  },
  {
    title: "Day 6 – CRUD Todo App",
    route: "/task6",
    desc: "Add/Edit/Delete todos with local state & localStorage",
  },
  {
    title: "Day 7 – Portfolio Page",
    route: "/portfolio",
    desc: "React Dev Portfolio & Deploy",
  },
];

const Home = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">🚀 7-Day React Project Challenge</h2>
      <ul className="space-y-3">
        {tasks.map((task, idx) => (
          <li key={task.route} className="flex items-center gap-2">
            <span className="font-semibold">{task.title}:</span>
            <span className="text-gray-500">{task.desc}</span>
            <Link className="ml-2 text-blue-500 underline" to={task.route}>
              Go
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
