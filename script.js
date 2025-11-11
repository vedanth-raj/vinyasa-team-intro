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
        roles: "Supporting the Club Head in all operations, managing internal communications, coordinating team meetings, handling administrative tasks, and stepping in for leadership when needed.",
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
        name: "Aditya Sinha",
        designation: "General Member",
        image: "./images/Aditya Sinha.jpg",
        roles: "Supporting technical initiatives and community outreach.",
        about: "Enthusiastic about innovation and collaborative projects."
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
        image: "./images/Mohammed Areeb Ali Shivji.png",
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

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeMembers();
    setupModal();
    setupCursor();
});

// Have a trail of sparkles following your mouse cursor

// ─────────────────────────────────────────────────────────────────────────────
//  sparkles.js
//  A self-contained sparkle/dot effect that you can turn on/off by calling
//    sparkle(true)  or  sparkle(false)  or  sparkle() to toggle.
//  No external CSS or other files needed.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
    // ───────────────────────────────────────────────────────────────────────────
    //  CONFIGURATION CONSTANTS
    // ───────────────────────────────────────────────────────────────────────────
    const MAX_SPARKLES = 1000;
    const SPARKLE_LIFETIME = 40;   // Each "star" lives 2× this, then becomes a dot for 2× this
    const SPARKLE_DISTANCE = 10;   // Affects how many spawn along fast mouse movements

    // ───────────────────────────────────────────────────────────────────────────
    //  INTERNAL STATE
    // ───────────────────────────────────────────────────────────────────────────
    let canvas, ctx, docW, docH;
    let isInitialized = false;
    let sparklesEnabled = false;
    let animationRunning = false;
    let lastSpawnTime = 0;

    // Pools: one array for "stars," one for "tinnies" (dots).
    // At index i, either a star or dot (or both) can be active simultaneously.
    const stars = [];
    const tinnies = [];
    for (let i = 0; i < MAX_SPARKLES; i++) {
        stars.push({active: false, x: 0, y: 0, ticksLeft: 0, color: ""});
        tinnies.push({active: false, x: 0, y: 0, ticksLeft: 0, color: ""});
    }

    // Precompute a small pool of random "star" colors so we don't build new strings per spawn
    const COLOR_POOL = [];
    (function buildColorPool() {
        for (let i = 0; i < 512; i++) {
            const c1 = 255;
            const c2 = Math.floor(Math.random() * 256);
            const c3 = Math.floor(Math.random() * (256 - c2 / 2));
            const arr = [c1, c2, c3];
            arr.sort(() => 0.5 - Math.random());
            COLOR_POOL.push(`rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`);
        }
    })();

    // ───────────────────────────────────────────────────────────────────────────
    //  INITIALIZATION (runs once when DOMContentLoaded fires)
    // ───────────────────────────────────────────────────────────────────────────
    function initialize() {
        // Only run once
        if (isInitialized) return;
        isInitialized = true;

        // 1) Create and append a full-screen <canvas>
        canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "999";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");

        // 2) Set initial size and hook up resize listener
        handleResize(); // Call it once to set initial size
        window.addEventListener("resize", handleResize);

        // 3) Hook up mousemove listener
        document.addEventListener("mousemove", onMouseMove);

        // 4) If someone already called sparkle(true) before init, start animating now
        if (sparklesEnabled && !animationRunning) {
            animationRunning = true;
            requestAnimationFrame(animate);
        }
    }

    // When window resizes, update canvas dimensions
    function handleResize() {
        if (!canvas) return;
        // CHANGED: Use viewport dimensions for a 'fixed' canvas
        docW = window.innerWidth;
        docH = window.innerHeight;
        canvas.width = docW;
        canvas.height = docH;
    }

    // ───────────────────────────────────────────────────────────────────────────
    //  SPAWNING LOGIC: place a "star" in the pool (or convert an old one to a dot)
    // ───────────────────────────────────────────────────────────────────────────
    function spawnStar(x, y) {
        // If out of bounds, do nothing
        if (x + 5 >= docW || y + 5 >= docH || x < 0 || y < 0) return; // Added x/y < 0 check

        // Find either an inactive slot or the slot with the smallest ticksLeft
        let chosenIdx = -1;
        let minTicks = SPARKLE_LIFETIME * 2 + 1;
        for (let i = 0; i < MAX_SPARKLES; i++) {
            const s = stars[i];
            if (!s.active) {
                chosenIdx = i;
                minTicks = null;
                break;
            } else if (s.ticksLeft < minTicks) {
                minTicks = s.ticksLeft;
                chosenIdx = i;
            }
        }

        // If that slot had an active star, convert it immediately into a "tiny" first
        if (minTicks !== null) {
            const oldStar = stars[chosenIdx];
            tinnies[chosenIdx].active = true;
            tinnies[chosenIdx].x = oldStar.x;
            tinnies[chosenIdx].y = oldStar.y;
            tinnies[chosenIdx].ticksLeft = SPARKLE_LIFETIME * 2;
            tinnies[chosenIdx].color = oldStar.color;
        }

        // Initialize this slot as a brand-new star
        const newStar = stars[chosenIdx];
        const col = COLOR_POOL[Math.floor(Math.random() * COLOR_POOL.length)];
        newStar.active = true;
        newStar.x = x;
        newStar.y = y;
        newStar.ticksLeft = SPARKLE_LIFETIME * 2;
        newStar.color = col;
    }

    // ───────────────────────────────────────────────────────────────────────────
    //  ANIMATION LOOP: update and draw all active stars and dots each frame
    // ───────────────────────────────────────────────────────────────────────────
    function animate() {
        // Clear entire canvas once per frame
        ctx.clearRect(0, 0, docW, docH);

        let anyAlive = false;

        // --- 1) Update & draw "stars" ---
        for (let i = 0; i < MAX_SPARKLES; i++) {
            const s = stars[i];
            if (!s.active) continue;

            s.ticksLeft--;
            if (s.ticksLeft <= 0) { // Changed to <= 0 for robustness
                // Convert to a "tiny" dot immediately
                tinnies[i].active = true;
                tinnies[i].x = s.x;
                tinnies[i].y = s.y;
                tinnies[i].ticksLeft = SPARKLE_LIFETIME * 2;
                tinnies[i].color = s.color;
                s.active = false;
                anyAlive = true; // Still counts as alive for this frame
                continue;
            }

            // Move the star downward + sideways
            s.y += 1 + 3 * Math.random();
            s.x += (i % 5 - 2) / 5;

            if (s.y + 5 < docH && s.x + 5 < docW && s.x > -5 && s.y > -5) { // Loosened boundary check
                // Draw—either full 5×5 " +" or half‐shrunken 3×3 "+"
                const halfLife = SPARKLE_LIFETIME;
                ctx.strokeStyle = s.color;
                ctx.lineWidth = 1;
                if (s.ticksLeft > halfLife) {
                    // Full 5×5 cross
                    const cx = s.x + 2;
                    const cy = s.y + 2;
                    ctx.beginPath();
                    ctx.moveTo(s.x, cy);
                    ctx.lineTo(s.x + 5, cy);
                    ctx.moveTo(cx, s.y);
                    ctx.lineTo(cx, s.y + 5);
                    ctx.stroke();
                } else {
                    // 3×3 cross
                    const cx = s.x + 1;
                    const cy = s.y + 1;
                    ctx.beginPath();
                    ctx.moveTo(s.x, cy);
                    ctx.lineTo(s.x + 3, cy);
                    ctx.moveTo(cx, s.y);
                    ctx.lineTo(cx, s.y + 3);
                    ctx.stroke();
                }
                anyAlive = true;
            } else {
                // Out of bounds → kill it
                s.active = false;
            }
        }

        // --- 2) Update & draw "tinnies" (dots) ---
        for (let i = 0; i < MAX_SPARKLES; i++) {
            const t = tinnies[i];
            if (!t.active) continue;

            t.ticksLeft--;
            if (t.ticksLeft <= 0) { // Changed to <= 0
                t.active = false;
                continue;
            }

            // Move the dot
            t.y += 1 + 2 * Math.random();
            t.x += (i % 4 - 2) / 4;

            if (t.y + 3 < docH && t.x + 3 < docW && t.x > -3 && t.y > -3) { // Loosened boundary check
                const halfLife = SPARKLE_LIFETIME;
                ctx.fillStyle = t.color;
                if (t.ticksLeft > halfLife) {
                    // 2×2 square
                    ctx.fillRect(t.x, t.y, 2, 2);
                } else {
                    // 1×1 pixel (centered)
                    ctx.fillRect(t.x + 0.5, t.y + 0.5, 1, 1);
                }
                anyAlive = true;
            } else {
                t.active = false;
            }
        }

        // Continue looping if any sparkle is alive OR if sparklesEnabled is still true
        if (anyAlive || sparklesEnabled) {
            animationRunning = true;
            requestAnimationFrame(animate);
        } else {
            animationRunning = false;
            // Clear once more to fully blank the canvas
            ctx.clearRect(0, 0, docW, docH);
        }
    }

    // ───────────────────────────────────────────────────────────────────────────
    //  MOUSEMOVE HANDLER: throttle to ≈60fps, spawn stars along the path
    // ───────────────────────────────────────────────────────────────────────────
    function onMouseMove(e) {
        if (!sparklesEnabled) return;

        const now = performance.now();
        if (now - lastSpawnTime < 16) return; // ≈16ms → ~60fps
        lastSpawnTime = now;

        const dx = e.movementX;
        const dy = e.movementY;
        const dist = Math.hypot(dx, dy);
        if (dist < 0.5) return;

        // CHANGED: Use clientX/Y for viewport-relative coordinates
        let mx = e.clientX;
        let my = e.clientY;

        const prob = dist / SPARKLE_DISTANCE;
        let cum = 0;
        const stepX = (dx * SPARKLE_DISTANCE * 2) / dist;
        const stepY = (dy * SPARKLE_DISTANCE * 2) / dist;

        while (Math.abs(cum) < Math.abs(dx)) {
            if (Math.random() < prob) {
                spawnStar(mx, my);
            }
            const frac = Math.random();
            mx -= stepX * frac;
            my -= stepY * frac;
            cum += stepX * frac;
        }

        // If the animation loop isn't running yet, kick it off now
        if (!animationRunning && isInitialized) {
            animationRunning = true;
            requestAnimationFrame(animate);
        }
    }

    // ───────────────────────────────────────────────────────────────────────────
    //  PUBLIC API: window.sparkle(enable)
    //    - sparkle(true)  → turn ON sparkles
    //    - sparkle(false) → turn OFF immediately (clears all alive particles)
    //    - sparkle()      → toggle on/off
    // ───────────────────────────────────────────────────────────────────────────
    window.sparkle = function (enable = null) {
        // If enable is omitted, toggle
        if (enable === null) {
            sparklesEnabled = !sparklesEnabled;
        } else {
            sparklesEnabled = !!enable;
        }

        // If turning off, clear all active particles
        if (!sparklesEnabled && isInitialized) {
            for (let i = 0; i < MAX_SPARKLES; i++) {
                stars[i].active = false;
                tinnies[i].active = false;
            }
        }

        // If turning on, but not yet initialized, do nothing now. Once DOMContentLoaded fires,
        // initialize() will see sparklesEnabled===true and start the loop.
        if (sparklesEnabled && isInitialized && !animationRunning) {
            animationRunning = true;
            requestAnimationFrame(animate);
        }
    };

    // ───────────────────────────────────────────────────────────────────────────
    //  WAIT FOR DOM TO BE READY, THEN INITIALIZE
    // ───────────────────────────────────────────────────────────────────────────
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // If DOM is already ready (e.g. script placed near end), initialize immediately
        initialize();
    } else {
        // Otherwise, wait for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", initialize);
    }

})();

// Create and position floating members
function initializeMembers() {
    const container = document.getElementById('membersContainer');
    const containerRect = container.getBoundingClientRect();
    const allMembers = [];

    // Shuffle the members array for random sequence
    const shuffledMembers = [...members].sort(() => Math.random() - 0.5);

    shuffledMembers.forEach((member, index) => {
        const memberElement = createMemberElement(member, index);
        container.appendChild(memberElement);

        // Set random initial position with collision detection
        const memberData = {
            element: memberElement,
            x: 0,
            y: 0,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: 80 // Half of 160px width
        };

        const randomPosition = getRandomPosition(containerRect, index, allMembers);
        memberData.x = randomPosition.x;
        memberData.y = randomPosition.y;
        
        memberElement.style.left = randomPosition.x + 'px';
        memberElement.style.top = randomPosition.y + 'px';

        allMembers.push(memberData);
    });

    // Start single animation loop for all members
    animateAllMembers(allMembers, containerRect);
}

// Create member DOM element
function createMemberElement(member, index) {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'member';
    memberDiv.style.animationDelay = `${index * 0.1}s`;
    memberDiv.dataset.index = index;
    
    memberDiv.innerHTML = `
        <div class="member-image-wrapper">
            <img src="${member.image}" alt="${member.name}" class="member-image">
        </div>
        <div class="member-label">${member.name}</div>
    `;
    
    memberDiv.addEventListener('click', () => openModal(member));
    
    return memberDiv;
}

// Get random position ensuring no overlap
function getRandomPosition(containerRect, index, existingMembers = []) {
    const margin = 100;
    const maxWidth = containerRect.width - margin * 2;
    const maxHeight = containerRect.height - margin * 2;
    const minDistance = 180; // Minimum distance between centers (160px + 20px gap)

    let attempts = 0;
    let position;

    do {
        // Create a grid-like distribution with randomness
        const cols = Math.ceil(Math.sqrt(members.length));
        const rows = Math.ceil(members.length / cols);
        const cellWidth = maxWidth / cols;
        const cellHeight = maxHeight / rows;

        const col = index % cols;
        const row = Math.floor(index / cols);

        const baseX = col * cellWidth + margin;
        const baseY = row * cellHeight + margin;

        // Add randomness to avoid exact grid
        const randomX = baseX + (Math.random() - 0.5) * cellWidth * 0.4;
        const randomY = baseY + (Math.random() - 0.5) * cellHeight * 0.4;

        position = {
            x: Math.max(margin, Math.min(randomX, maxWidth)),
            y: Math.max(margin, Math.min(randomY, maxHeight))
        };

        attempts++;
    } while (attempts < 100 && existingMembers.some(member => {
        const dx = member.x - position.x;
        const dy = member.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < minDistance;
    }));

    return position;
}

// Unified animation loop for all members with proper collision detection
function animateAllMembers(allMembers, containerRect) {
    const margin = 100;
    
    function animate() {
        // Update positions
        allMembers.forEach(member => {
            member.x += member.vx;
            member.y += member.vy;
        });

        // Check collisions between members
        for (let i = 0; i < allMembers.length; i++) {
            for (let j = i + 1; j < allMembers.length; j++) {
                const m1 = allMembers[i];
                const m2 = allMembers[j];

                const dx = m2.x - m1.x;
                const dy = m2.y - m1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = m1.radius + m2.radius;

                if (distance < minDistance) {
                    // Collision detected - calculate bounce
                    const angle = Math.atan2(dy, dx);
                    const sin = Math.sin(angle);
                    const cos = Math.cos(angle);

                    // Rotate velocities
                    const vx1 = m1.vx * cos + m1.vy * sin;
                    const vy1 = m1.vy * cos - m1.vx * sin;
                    const vx2 = m2.vx * cos + m2.vy * sin;
                    const vy2 = m2.vy * cos - m2.vx * sin;

                    // Swap velocities (elastic collision)
                    const temp = vx1;
                    const newVx1 = vx2;
                    const newVx2 = temp;

                    // Rotate back
                    m1.vx = newVx1 * cos - vy1 * sin;
                    m1.vy = vy1 * cos + newVx1 * sin;
                    m2.vx = newVx2 * cos - vy2 * sin;
                    m2.vy = vy2 * cos + newVx2 * sin;

                    // Separate overlapping members
                    const overlap = minDistance - distance;
                    const separationX = (dx / distance) * overlap * 0.5;
                    const separationY = (dy / distance) * overlap * 0.5;

                    m1.x -= separationX;
                    m1.y -= separationY;
                    m2.x += separationX;
                    m2.y += separationY;

                    // Add slight damping to prevent infinite bouncing
                    m1.vx *= 0.98;
                    m1.vy *= 0.98;
                    m2.vx *= 0.98;
                    m2.vy *= 0.98;
                }
            }
        }

        // Check wall collisions and update DOM
        allMembers.forEach(member => {
            // Bounce off edges
            if (member.x - member.radius <= margin) {
                member.x = margin + member.radius;
                member.vx = Math.abs(member.vx);
            } else if (member.x + member.radius >= containerRect.width - margin) {
                member.x = containerRect.width - margin - member.radius;
                member.vx = -Math.abs(member.vx);
            }

            if (member.y - member.radius <= margin) {
                member.y = margin + member.radius;
                member.vy = Math.abs(member.vy);
            } else if (member.y + member.radius >= containerRect.height - margin) {
                member.y = containerRect.height - margin - member.radius;
                member.vy = -Math.abs(member.vy);
            }

            // Limit velocity
            const maxSpeed = 0.5;
            const speed = Math.sqrt(member.vx * member.vx + member.vy * member.vy);
            if (speed > maxSpeed) {
                member.vx = (member.vx / speed) * maxSpeed;
                member.vy = (member.vy / speed) * maxSpeed;
            }

            // Apply minimum velocity to prevent stopping
            if (speed < 0.1) {
                const angle = Math.random() * Math.PI * 2;
                member.vx = Math.cos(angle) * 0.2;
                member.vy = Math.sin(angle) * 0.2;
            }

            // Update DOM position
            member.element.style.left = (member.x - member.radius) + 'px';
            member.element.style.top = (member.y - member.radius) + 'px';
        });

        requestAnimationFrame(animate);
    }

    animate();
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

// Enhanced cursor interactions with drone and trail
function setupCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        console.error('Cursor element not found');
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isMoving = false;
    let movingTimeout = null;
    let frameCount = 0;

    // Smooth cursor following
    function updateCursor() {
        const prevX = cursorX;
        const prevY = cursorY;

        // Smooth interpolation
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Check if moving
        const moved = Math.abs(cursorX - prevX) > 0.5 || Math.abs(cursorY - prevY) > 0.5;
        
        if (moved) {
            if (!isMoving) {
                cursor.classList.add('moving');
                isMoving = true;
            }
            
            // Clear existing timeout
            clearTimeout(movingTimeout);
            
            // Set new timeout to remove moving class
            movingTimeout = setTimeout(() => {
                cursor.classList.remove('moving');
                isMoving = false;
            }, 100);

            // Create trail particles (throttled)
            frameCount++;
            if (frameCount % 2 === 0) {
                createTrailParticle(cursorX, cursorY);
            }
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
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }

    // Hover effects - use event delegation for better performance
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.member, .close-btn, button, a')) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.member, .close-btn, button, a')) {
            cursor.classList.remove('hover');
        }
    });

    // Click effects
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
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


// Handle window resize - reinitialize everything
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Clear and reinitialize
        const container = document.getElementById('membersContainer');
        container.innerHTML = '';
        initializeMembers();
    }, 500);
});