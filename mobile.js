// Member data with real team information
const members = [
    {
        name: "Anand Sharma",
        designation: "General Member",
        image: "./images/Anand Sharma.jpeg",
        roles: "Being one of the members of the VINYASA club I am a great contributor to club's both technical and creative activities. My responsibilities mainly include the designing of the robotics and the developing of the automation projects, providing support to the workshops, and guiding the other club members in the area of new technologies. It is also my job to help in organizing technical sessions, writing project reports, and showing prototypes which are all aimed at improving the learning and collaboration among members of the club.",
        about: "I am a passionate engineering person who enjoys at the same time the fields of robotics, electronics, and automation. I get a nice feeling when I build smart systems, play around with sensors, and invent new devices that help make life more convenient. I am always inquisitive and like to get involved in making a project from an idea and I consider it as a new experience of learning with every build."
    },
    {
        name: "Aryan Kumar",
        designation: "General Member",
        image: "./images/Aryan Kumar.jpg",
        roles: "My role as a General Member is to be an active, reliable contributor to the club's projects and initiatives. Specifically, I intend to take responsibility for executing tasks assigned within project teams, such as coding specific ML models, assisting in robot assembly/testing, or documenting project progress. Beyond technical work, I will ensure high engagement in all workshops, meetings, and hackathons, and will seek out opportunities to learn from senior members to maximize my value to the team.",
        about: "I am a highly motivated and disciplined person with a genuine passion for the convergence of Artificial Intelligence and mechanical systems. I currently possess foundational skills in Python and have introductory experience with libraries like TensorFlow/PyTorch. I am eager to transition from theoretical knowledge to practical application, contribute meaningfully to complex robotics challenges, and develop a strong portfolio through the club's activities."
    },
    {
        name: "Ashwin Shukla",
        designation: "General Member",
        image: "./images/Ashwin Shukla.jpeg",
        roles: "As General Member in Vinyasa, my role is to observe and actively participate in events, projects, discussions & workshops conducted by the club. To contribute in club by giving my ideas & inputs with all research and study. Being general member i will be developing multiple technical and management skills through observation like robotics, programming, team management, execution, etc.",
        about: "I'm first year Btech student in Computer Engineering. Passionate to learn & experience new things and skills. I have prior experience and done few projects related to development, and robotics."
    },
    {
        name: "Ayush Yadav",
        designation: "Social Media",
        image: "./images/Ayush Yadav.jpeg",
        roles: "As a member of the social media team for the robotics club, my primary role is to manage the club's online presence and showcase our projects, events, and achievements to a wider audience. I will be responsible for creating engaging posts, designing visuals or videos, and updating our social media platforms regularly.",
        about: "Hi, I'm Ayush Yadav. I'm passionate about robotics, technology, and creativity. I enjoy exploring how machines work and I'm joining the social media team to combine my interest in robotics with content creation."
    },
    {
        name: "Ekansh Bansal",
        designation: "General Member",
        image: "./images/Ekansh Bansal.png",
        roles: "To improve my knowledge and skills in robotics, I want to take part in the Vinyasa Robotics Club's meetings, workshops, and projects. I aim to help in events, work closely with my team, and support the club's values of innovation, teamwork, and technical excellence.",
        about: "I, Ekansh, love exploring how technology and creativity come together to solve real-world problems. I have always been curious about how machines work and how robotics blends coding and electronics. I enjoy learning through hands-on experiments and understanding how different components interact. Innovation and teamwork inspire me to keep improving and think in new ways. I like taking on challenges that help me grow both technically and personally. Robotics motivates me to apply my knowledge in practical and meaningful ways. My goal is to develop skills that can contribute to future technologies. I believe that consistent learning and collaboration are the keys to success."
    },
    {
        name: "G. Madhumitha",
        designation: "Outreach",
        image: "./images/G. Madhumitha.jpg",
        roles: "Event Coordination Community Engagement",
        about: "A driven and empathetic individual with strong communication skills and a passion for making a positive impact in the community. Proactive in identifying needs and building connections, and thrives in collaborative environments focused on achieving shared goals."
    },
    {
        name: "J.Chaitanya",
        designation: "Tech Team",
        image: "./images/J.Chaitanya.jpg",
        roles: "The tech team in a robotics club is responsible for designing, building, and programming robots by integrating mechanical, electronic, and software components. They develop control systems, interface sensors and actuators, test and troubleshoot robots, and ensure efficient performance. Additionally, they research new technologies, document their work, and guide members through technical training and workshops to enhance the club's overall innovation and skill development",
        about: "I am Chaitanya i am from nmims hyderabad studying in btech 1st year CE i joined this club.I am passionate and have strong intrest robotics and i am a person who enjoys learning about new technologies and solving problems.I am a motivated student having keen intrest in robotics and innovation"
    },
    {
        name: "Mahammed Almas",
        designation: "Outreach",
        image: "./images/Mahammed Almas.jpeg",
        roles: "As part of the outreach team in our robotics club, I help promote the club's activities, build connections with other organizations, and manage communication to increase the club's visibility and engagement.",
        about: "I'm a B.Tech student with a strong interest in technology and innovation. I'm joining the robotics club to learn more about robotics, develop practical skills, and work on creative projects with like-minded people."
    },
    {
        name: "Mahima Choudhari",
        designation: "Designing",
        image: "./images/Mahima Choudhari.jpg",
        roles: "As a designer in the club, my role is to create visual content that represents the club's identity and communicates its ideas effectively. I'm responsible for designing posters, presentations, and social media materials that make our events and activities more engaging and appealing.",
        about: "I'm a creative and dedicated student who enjoys learning new things, working in teams, and exploring design and innovation"
    },
    {
        name: "Neelam Govinda Karthikeya",
        designation: "Technical Team Member",
        image: "./images/Neelam Govinda Karthikeya.jpg",
        roles: "As a Technical Member of Vinyasa, I work on robotics projects involving coding, circuit design, and system integration, while contributing to team collaborations and technical workshops.",
        about: "A tech-driven learner passionate about robotics and programming, constantly exploring how hardware and software can work together to create innovative solutions. Always eager to experiment, collaborate, and turn creative ideas into real working systems."
    },
    {
        name: "Nishad Dave",
        designation: "Designing",
        image: "./images/Nishad Dave.jpg",
        roles: "I am responsible for the design of various elements of the club such as logos, videos and promotional material for the club itself.",
        about: "I am just another student in trying to learn and be better than my previous self."
    },
    {
        name: "Nitin Gupta",
        designation: "Outreach",
        image: "./images/Nitin Gupta.jpg",
        roles: "Having interest in improving my communication skills along side gaining knowledge in the field of Robotics. I will sincerely lead my role in outreach.",
        about: "Being a techsavvy I would like to broaden my horizons in the field of machine learning. I also like to explore new skills and coming across vinyasa i would like to invest my time and pre equipped experience into the same"
    },
    {
        name: "Pranjal Pathak",
        designation: "Executive",
        image: "./images/Pranjal Pathak.jpg",
        roles: "As an Executive of the club, my first and foremost role will be in helping to lead and coordinate with others to ensure that any project or event runs smoothly. I will also contribute by providing my input regarding design and development of robotic systems. Additionally, I help maintain records of club activities and member contributions, working with other executives.",
        about: "I am a curious person who loves tinkering with software projects that either simplify my life or have an effect on a larger group of people. I love exploring new topics as I feel sense of fulfillment after learning and executing something new. I am practically inseparable from my music playlist and someone who loves reading novels in my passtime."
    },
    {
        name: "Purushottam Jha",
        designation: "Technical Team",
        image: "./images/Purushottam Jha.jpg",
        roles: "As a technical member of the robotics club,I contribute to developing control algorithms, working on sensors , and ensuring system integration between hardware and software. I also collaborate with other members to fix technical issues, test prototypes, and document progress.",
        about: "I'm a passionate and curious learner with a strong interest in robotics, automation, and embedded systems.I enjoy working on programming microcontrollers, building circuits, and integrating hardware with software"
    },
    {
        name: "Rangineni Srimani",
        designation: "Tech Team",
        image: "./images/Rangineni Srimani.jpg",
        roles: "Supporting the Club in technical ways which I know, and stepping in for leadership when needed.",
        about: "A tech enthusiast with a keen interest in AI,machine learning and robotics. I believe in learning new things ."
    },
    {
        name: "Rishav Kumar singh",
        designation: "Designing",
        image: "./images/Rishav Kumar singh.jpg",
        roles: "As part of the Design Team in Vinyasa Robotics Club, I help in creating posters, videos, and web designs that visually represent our projects and events. My role is to make our technical work look creative and easy to understand.",
        about: "I am a 1st Computer Engineering student who wants to build designs and poster and is interested in robotics."
    },
    {
        name: "Samridh Shrivastava",
        designation: "Outreach",
        image: "./images/Samridh Shrivastava.jpg",
        roles: "Building and maintaining connections with external organizations, promoting club events and initiatives, managing social media outreach, and collaborating with other clubs or institutions to enhance visibility and engagement.",
        about: "A curious and creative learner who enjoys working with others and exploring new ideas. I like being part of initiatives that bring people together, help the club grow, and make robotics more engaging and accessible for everyone."
    },
    {
        name: "Sanidhya Pandey",
        designation: "Social Media",
        image: "./images/Sanidhya Pandey.jpg",
        roles: "In Vinyasa, as a part of the Social Media Team, my role is to manage and improve the online presence of the club. I contribute by creating and publishing engaging content showcasing our projects, events, and achievements. Showing the innovation and efforts of our team to a wider audience.Promote initiatives in creative and engaging ways to develop a robust digital community.",
        about: "Social Media - Sanidhya Pandey I am a proud and enthusiastic member of the Vinyasa Robotics Club. I've always been fascinated by technology & innovation in that field, and how robotics can solve real-world problems. Being part of this club I'll explore new ideas, collaborate with like-minded peers, and learn more about how robotics interlinks with engineering."
    },
    {
        name: "Sukanya Mulik",
        designation: "Executive",
        image: "./images/Sukanya Mulik.jpg",
        roles: "Supporting the Club Head in all operations, managing internal communications, coordinating team meetings, and handling administrative tasks, and stepping in for leadership when needed.",
        about: "A tech enthusiast with a keen interest in AI and machine learning. I believe in collaborative learning and creating an inclusive environment where everyone can grow together."
    },
    {
        name: "Tanish Tiwari",
        designation: "General Member",
        image: "./images/Tanish Tiwari.png",
        roles: "Assisting in training and skill development.",
        about: "Passionate about educating and empowering others."
    },
    {
        name: "Ved Shrivastava",
        designation: "Tech Team",
        image: "./images/Ved Shrivastava.jpg",
        roles: "As a Tech Team member of the Vinyasa Club, I work on coding, hardware integration, and system optimization. I ensure smooth robot performance through testing, troubleshooting, and innovative technical solutions.",
        about: "I'm a passionate and curious learner with a strong interest in technology, robotics, and problem-solving. I enjoy exploring how things work, collaborating on innovative projects, and continuously improving my technical skills."
    },
    {
        name: "Yaseen Quadry",
        designation: "Executive",
        image: "./images/Yaseen Quadry.jpeg",
        roles: "Managing robotics club activities, representing the club in college events and tech fests,providing updates on ongoing projects and activities.",
        about: "Passionate about designing circuits and electronic systems, engaging in 3D modeling and mechanical design, and exploring applications of AI,automation in robotics. Additionally interested in graphic design and automobile engineering as an enthusiast."
    },
    {
        name: "Geetika Agrawal",
        designation: "General Member",
        image: "./images/Geetika Agrawal.jpg",
        roles: "Supporting club initiatives and community engagement.",
        about: "Dedicated to fostering growth and collaboration in tech."
    },
    {
        name: "Mohammed Areeb Ali Shivji",
        designation: "General Member",
        image: "./images/Mohammed Areeb Ali Shivji.jpg",
        roles: "Assisting in technical projects and workshops.",
        about: "Enthusiastic about learning and applying new technologies."
    },
    {
        name: "Samya Nasir",
        designation: "General Member",
        image: "./images/Samya Nasir.jpg",
        roles: "Contributing to event planning and outreach.",
        about: "Passionate about connecting people through technology."
    },
    {
        name: "Shreyas Modgil",
        designation: "General Member",
        image: "./images/Shreyas Modgil.jpg",
        roles: "Supporting development and innovation efforts.",
        about: "Focused on creating innovative solutions."
    },
    {
        name: "Tejas",
        designation: "General Member",
        image: "./images/Tejas.png",
        roles: "Assisting in operations and team coordination.",
        about: "Committed to efficient and effective team work."
    }
];

// Initialize the mobile page
document.addEventListener('DOMContentLoaded', function() {
    setupCursor();
    initializeMembers();
    setupModal();
});

// Enhanced cursor interactions with drone and trail
function setupCursor() {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isMoving = false;
    let trailParticles = [];

    // Smooth cursor following
    function updateCursor() {
        const prevX = cursorX;
        const prevY = cursorY;

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX - 20 + 'px';
        cursor.style.top = cursorY - 20 + 'px';

        // Check if moving
        const moved = Math.abs(cursorX - prevX) > 0.1 || Math.abs(cursorY - prevY) > 0.1;
        if (moved && !isMoving) {
            cursor.classList.add('moving');
            isMoving = true;
        } else if (!moved && isMoving) {
            cursor.classList.remove('moving');
            isMoving = false;
        }

        // Create trail particles when moving
        if (isMoving) {
            createTrailParticle(cursorX, cursorY);
        }

        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // Mouse move tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Create trail particle
    function createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'trail-particle';
        particle.style.left = x - 2 + 'px';
        particle.style.top = y - 2 + 'px';
        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }

    // Hover effects
    const hoverElements = document.querySelectorAll('.member, .close-btn, button, a, .modal-content');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Click effects
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });

    // Hide cursor on page leave
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

// Create floating member elements for mobile view
function initializeMembers() {
    const container = document.getElementById('membersContainer');
    const containerRect = container.getBoundingClientRect();

    members.forEach((member, index) => {
        const memberElement = createMemberElement(member, index);
        container.appendChild(memberElement);

        // Start floating animation
        animateFloat(memberElement, index);
    });
}

// Create a member element
function createMemberElement(member, index) {
    const element = document.createElement('div');
    element.className = 'member';
    element.style.left = '50%';
    element.style.top = '50%';

    element.innerHTML = `
        <div class="member-image-wrapper">
            <img src="${member.image}" alt="${member.name}" class="member-image" onerror="this.src='./images/placeholder.png'">
        </div>
        <div class="member-label">${member.name}</div>
    `;

    // Add click event to open modal
    element.addEventListener('click', () => openModal(member));

    return element;
}

// Floating animation with collision detection
function animateFloat(element, index) {
    const container = document.getElementById('membersContainer');
    const containerRect = container.getBoundingClientRect();
    const collisionRadius = 70; // Minimum distance between members

    let currentX = containerRect.width / 2;
    let currentY = containerRect.height / 2;
    let velocityX = (Math.random() - 0.5) * 2;
    let velocityY = (Math.random() - 0.5) * 2;

    // Initial random position
    const initialPosition = getRandomPosition(containerRect, collisionRadius);
    currentX = initialPosition.x;
    currentY = initialPosition.y;

    element.style.left = currentX - 50 + 'px';
    element.style.top = currentY - 50 + 'px';

    function animate() {
        // Update position
        currentX += velocityX;
        currentY += velocityY;

        // Bounce off container edges
        if (currentX <= collisionRadius || currentX >= containerRect.width - collisionRadius) {
            velocityX *= -1;
            currentX = Math.max(collisionRadius, Math.min(containerRect.width - collisionRadius, currentX));
        }
        if (currentY <= collisionRadius || currentY >= containerRect.height - collisionRadius) {
            velocityY *= -1;
            currentY = Math.max(collisionRadius, Math.min(containerRect.height - collisionRadius, currentY));
        }

        // Get all current member positions
        const allPositions = Array.from(document.querySelectorAll('.member')).map(el => {
            const rect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            return {
                x: rect.left - containerRect.left + rect.width / 2,
                y: rect.top - containerRect.top + rect.height / 2
            };
        });

        const initialPosition = allPositions[index];

        // Check collisions with other members and prevent overlap
        allPositions.forEach(pos => {
            if (pos !== initialPosition) {
                const dx = currentX - pos.x;
                const dy = currentY - pos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < collisionRadius && distance > 0) {
                    // Collision detected - separate immediately and bounce away
                    const overlap = collisionRadius - distance;
                    const separationX = (dx / distance) * overlap * 0.5;
                    const separationY = (dy / distance) * overlap * 0.5;

                    currentX += separationX;
                    currentY += separationY;

                    // Update velocity for bounce effect
                    const angle = Math.atan2(dy, dx);
                    velocityX += Math.cos(angle) * 0.2;
                    velocityY += Math.sin(angle) * 0.2;

                    // Limit velocity
                    const maxSpeed = 0.5;
                    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
                    if (speed > maxSpeed) {
                        velocityX = (velocityX / speed) * maxSpeed;
                        velocityY = (velocityY / speed) * maxSpeed;
                    }
                }
            }
        });

        element.style.left = currentX - 50 + 'px';
        element.style.top = currentY - 50 + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

// Get random position avoiding overlaps
function getRandomPosition(containerRect, minDistance) {
    let attempts = 0;
    let position;

    do {
        position = {
            x: minDistance + Math.random() * (containerRect.width - 2 * minDistance),
            y: minDistance + Math.random() * (containerRect.height - 2 * minDistance)
        };
        attempts++;
    } while (attempts < 50 && isOverlapping(position, minDistance));

    return position;
}

// Check if position overlaps with existing members
function isOverlapping(position, minDistance) {
    const existingMembers = document.querySelectorAll('.member');
    for (let member of existingMembers) {
        const rect = member.getBoundingClientRect();
        const containerRect = document.getElementById('membersContainer').getBoundingClientRect();
        const memberX = rect.left - containerRect.left + rect.width / 2;
        const memberY = rect.top - containerRect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(position.x - memberX, 2) + Math.pow(position.y - memberY, 2)
        );

        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(member) {
    const modal = document.getElementById('modal');

    // Populate modal content
    document.getElementById('modalImage').src = member.image;
    document.getElementById('modalImage').alt = member.name;
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalDesignation').textContent = member.designation;
    document.getElementById('modalRoles').textContent = member.roles;
    document.getElementById('modalAbout').textContent = member.about;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
