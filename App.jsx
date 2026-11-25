

import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CourseCard from "./components/CourseCard";
import "./App.css";

function App() {

    const [selectedCategory, setSelectedCategory] =
        useState("All Courses");

    const [courses,setCourses] = useState([
        {
            id: 1,
            title: "React & UI Styling Masterclass",
            instructor: "Ya Yu Eol",
            category: "Frontend Web",
            duration: "3 Weeks",
            seatsLeft: 0
        },
        {
            id: 2,
            title: "Tailwind CSS Rapid Prototyping",
            instructor: "Sann Sophar",
            category: "Frontend Web",
            duration: "2 Weeks",
            seatsLeft: 4
        },
        {
            id: 3,
            title: "Python Data Science & Visualization",
            instructor: "Dr. Kim Dara",
            category: "Data Science",
            duration: "4 Weeks",
            seatsLeft: 12
        },
        {
            id: 4,
            title: "AWS Cloud Fundamentals & Docker",
            instructor: "Chhean Sokha",
            category: "Cloud & DevOps",
            duration: "3 Weeks",
            seatsLeft: 2
        },
        {
            id: 5,
            title: "Ethical Hacking & Web Security",
            instructor: "Heng Vanna",
            category: "Cybersecurity",
            duration: "5 Weeks",
            seatsLeft: 8
        },
        {
            id: 6,
            title: "Advanced Styled Components & Design Systems",
            instructor: "Ya Yu Eol",
            category: "Frontend Web",
            duration: "2 Weeks",
            seatsLeft: 15
        }
    ]);
        const handleEnroll = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id && course.seatsLeft > 0
                    ? {
                        ...course,
                        seatsLeft: course.seatsLeft - 1
                    }
                    : course
            )
        );
    };
    const filteredCourses =
        selectedCategory === "All Courses"
            ? courses
            : courses.filter(
                (course) =>
                    course.category === selectedCategory
            );

    return (
        <div className="app">

            <Navbar />

            <div className="page-layout">

                <Sidebar
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <main className="content-area">

                    <h1>Upcoming Tech Workshops</h1>

                    <p className="description">
                        Browse verified professional workshops
                        and reserve seats in real time.
                    </p>

                    <div className="course-container">

                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onEnroll={handleEnroll}
                            />
                        ))}

                    </div>

                </main>

            </div>

        </div>
    );
}

export default App;
