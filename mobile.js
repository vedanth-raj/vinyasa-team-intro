// Member data with real team information
const members = [
    {
        name: "Anand Sharma",
        designation: "Core Member",
        image: "./images/Anand Sharma.jpeg",
        roles: "Leading technical initiatives and mentoring junior members.",
        about: "Enthusiastic about coding and innovative solutions."
    },
    {
        name: "Aryan Kumar",
        designation: "Core Member",
        image: "./images/Aryan Kumar.jpg",
        roles: "Handling project development and team coordination.",
        about: "Passionate about software development and learning new technologies."
    },
    {
        name: "Ashwin Shukla",
        designation: "Core Member",
        image: "./images/Ashwin Shukla.jpeg",
        roles: "Contributing to technical projects and workshops.",
        about: "Dedicated to advancing tech skills and collaboration."
    },
    {
        name: "Ayush Yadav",
        designation: "Core Member",
        image: "./images/Ayush Yadav.jpeg",
        roles: "Supporting event organization and community engagement.",
        about: "Focused on creating impactful tech experiences."
    },
    {
        name: "Ekansh Bansal",
        designation: "Core Member",
        image: "./images/Ekansh Bansal.png",
        roles: "Managing design and creative content.",
        about: "Creative mind passionate about visual storytelling."
    },
    {
        name: "G. Madhumitha",
        designation: "Core Member",
        image: "./images/G. Madhumitha.jpg",
        roles: "Assisting in outreach and partnerships.",
        about: "Building connections and promoting tech initiatives."
    },
    {
        name: "J.Chaitanya",
        designation: "Core Member",
        image: "./images/J.Chaitanya.jpg",
        roles: "Contributing to development and coding projects.",
        about: "Eager to solve problems through technology."
    },
    {
        name: "Mahammed Almas",
        designation: "Core Member",
        image: "./images/Mahammed Almas.jpeg",
        roles: "Supporting technical operations and maintenance.",
        about: "Committed to reliable and efficient tech solutions."
    },
    {
        name: "Mahima Choudhari",
        designation: "Core Member",
        image: "./images/Mahima Choudhari.jpg",
        roles: "Handling content creation and communication.",
        about: "Storyteller bridging technology and community."
    },
    {
        name: "Neelam Govinda Karthikeya",
        designation: "Core Member",
        image: "./images/Neelam Govinda Karthikeya.jpg",
        roles: "Assisting in research and innovation projects.",
        about: "Exploring cutting-edge technologies and ideas."
    },
    {
        name: "Nishad Dave",
        designation: "Core Member",
        image: "./images/Nishad Dave.jpg",
        roles: "Managing logistics and event coordination.",
        about: "Ensuring smooth execution of club activities."
    },
    {
        name: "Nitin Gupta",
        designation: "Core Member",
        image: "./images/Nitin Gupta.jpg",
        roles: "Supporting marketing and promotion efforts.",
        about: "Driving visibility and engagement for the club."
    },
    {
        name: "Pranjal Pathak",
        designation: "Core Member",
        image: "./images/Pranjal Pathak.jpg",
        roles: "Contributing to finance and budget management.",
        about: "Analytical thinker focused on sustainable growth."
    },
    {
        name: "Purushottam Jha",
        designation: "Core Member",
        image: "./images/Purushottam Jha.jpg",
        roles: "Assisting in networking and partnerships.",
        about: "Connecting opportunities and fostering collaborations."
    },
    {
        name: "Rangineni Srimani",
        designation: "Core Member",
        image: "./images/Rangineni Srimani.jpg",
        roles: "Supporting HR and team management.",
        about: "Dedicated to creating a positive team environment."
    },
    {
        name: "Rishav Kumar singh",
        designation: "Core Member",
        image: "./images/Rishav Kumar singh.jpg",
        roles: "Contributing to operations and daily activities.",
        about: "Ensuring efficient club operations."
    },
    {
        name: "Samridh Shrivastava",
        designation: "Core Member",
        image: "./images/Samridh Shrivastava.jpg",
        roles: "Assisting in security and data protection.",
        about: "Focused on safe and secure tech practices."
    },
    {
        name: "Sanidhya Pandey",
        designation: "Core Member",
        image: "./images/Sanidhya Pandey.jpg",
        roles: "Supporting analytics and data insights.",
        about: "Turning data into actionable knowledge."
    },
    {
        name: "Sukanya Mulik",
        designation: "Core Member",
        image: "./images/Sukanya Mulik.jpg",
        roles: "Contributing to innovation and new projects.",
        about: "Brainstorming ideas for future tech advancements."
    },
    {
        name: "Sukanya",
        designation: "Co-Head",
        image: "./images/Sukanya.jpg",
        roles: "Supporting leadership and managing communications.",
        about: "Tech enthusiast promoting inclusive learning."
    },
    {
        name: "Tanish Tiwari",
        designation: "Core Member",
        image: "./images/Tanish Tiwari.HEIC",
        roles: "Assisting in training and skill development.",
        about: "Passionate about educating and empowering others."
    },
    {
        name: "Ved Shrivastava",
        designation: "Core Member",
        image: "./images/Ved Shrivastava.jpg",
        roles: "Supporting events and community outreach.",
        about: "Creating memorable experiences for all."
    },
    {
        name: "Yaseen Quadry",
        designation: "Core Member",
        image: "./images/Yaseen Quadry.jpeg",
        roles: "Contributing to media and social relations.",
        about: "Crafting narratives that inspire and engage."
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
