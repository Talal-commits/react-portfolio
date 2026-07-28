import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import CV from "./assets/CV.pdf"

function Resume({ onClose }) {
    return (
        <div className="window">
            <TitleBar title={"About Me.txt - Notepad"} onClose={onClose} />
            <MenuBar />

            <div className="window-content">
                <div className="notepad-content">
                    <pre>{`TALAL MUNIR
Software Engineer · Graphic Designer · Calligrapher

Rawalpindi, Pakistan
Email: real.talal2025@gmail.com
Phone: +92 346 9764850
Portfolio | GitHub | LinkedIn

------------------------------------------------------------

SUMMARY

A result-driven Software Engineer and Graphic Designer with
hands-on experience in calligraphy, graphic design, UI/UX
and web development. Passionate about crafting clean,
modern, and user-focused digital experiences that merge
strong technical skills with a keen eye for design.

------------------------------------------------------------

EDUCATION

Bachelor of Science in Software Engineering
COMSATS University Islamabad
2024 – 2028

Coursework:
- Python
- C++
- Java
- Web Development
- Database Systems
- OOP
- UI/UX

------------------------------------------------------------

WORK EXPERIENCE

Freelance Graphic Designer & Calligrapher
Fiverr
June 2022 – Present

- Delivered 120+ custom calligraphy and branding designs
  for international clients, boosting repeat business by 30%.

- Managed end-to-end client communication and project
  scoping, securing a 95% client-retention rate.

- Maintained consistent 5-star service quality across
  100+ projects.

------------------------------------------------------------

TECHNICAL SKILLS

Languages
- Java
- C++
- Python
- JavaScript
- HTML5
- CSS3
- MongoDB

Frameworks & Tools
- React
- Firebase Authentication
- Git
- GitHub

Design Tools
- Figma
- Inkscape
- GIMP
- Canva

Other Skills
- UI/UX Design
- Prototyping
- Brand Identity
- Typography
- Calligraphy
- Illustration

------------------------------------------------------------

PROJECTS

Pet Selling Platform
Tech: HTML · CSS · JavaScript · Firebase Authentication

Weather App
Tech: HTML · CSS · JavaScript · Weather API Integration

To-Do List App
Tech: HTML · CSS · JavaScript

Color Switcher
Tech: HTML · CSS · JavaScript

BMI Calculator
Tech: HTML · CSS · JavaScript

Digital Clock
Tech: HTML · CSS · JavaScript

Guess The Number Game
Tech: HTML · CSS · JavaScript

Background Color Changer
Tech: HTML · CSS · JavaScript

Key Detector
Tech: HTML · CSS · JavaScript

Portfolio Website (UI/UX)

https://www.figma.com/design/dnYhX7QsOE6ppHIL8jjS7P/
Untitled?node-id=0-1&p=f

Tech: Figma · Inkscape · UI/UX

Tracker App (UI/UX)

Mobile app interface design for a fitness tracking
application with modern aesthetics and intuitive navigation.

https://www.figma.com/design/GzlBr2GohiDcaGowWoc2D9/
Untitled?node-id=0-1&p=f

Tech: Figma · Inkscape · UI/UX

------------------------------------------------------------

ACHIEVEMENTS & CERTIFICATIONS

- Canva Program Certification held at CanvaFluxx in
  collaboration with Fluxxion and Google Developers Group.

- Recommendation Letter from Google Developers Group.

------------------------------------------------------------

LANGUAGES

- English — Fluent
- Urdu — Native

------------------------------------------------------------

`}</pre>

                    <a
                        href={CV}
                        download="Talal Munir - CV.pdf"
                        className="download-link"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;