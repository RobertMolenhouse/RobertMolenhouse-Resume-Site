

var welcomeMessage = "Hello, my name is Bob. I am graduating from Hope College in December with a degree in Computer Science. I am a developer in search of a full time developing job.  I originally graduated from Hope four years ago with a degree in Secondary Education.  However, I found my way into programming by experimenting with micro controllers and knew that I wanted to make that my life's work.  I decided to return to Hope College to pursue a degree in Computer Science with a focus in software development.  I have never looked back.  Take a moment and look over my resume, browse some of my side projects, and get to know me a little better.  Thank You!";  

var skills = ["Java", "C#", "C", "Perl", "SQL", "HTML", "CSS", "JavaScript", "JSON", "XML", "Racket", "Android", "Linux"];

 var bio = {
    "name" : "Robert Molenhouse",
    "role" : "Developer",
    "phone" : "(616) 994-2743",
    "email" : "robert.molenhouse@gmail.com",
    "github" : "https://github.com/RobertMolenhouse",
    "headshot" : "images/portrait_headshot_better.jpg",
    "welcome" : welcomeMessage,
    "skills" : skills
};

//education JSON
var education = {
    "schools" : [
        {
            "name" : "Hope College",
            "city" : "Holland, MI",
            "degree" : "BA",
            "major" : ["Computer Science", "Secondary Social Studies Education"],
            "minor" : "History Education",
            "logo" : "images/hope_logo_white.png",
            "years" : ["2009 - 2013" , "2015 - 2017"]
        }
    ]
};

//coursework JSON
var coursework = {
    "classes" : [
        {
            "name" : "Software Design and Implementation,",
            "description" : "An introduction to the techniques and practices of software design and implementation, including top-down design, object-oriented principles, advanced programming concepts, and the use of software development tools. Students will gain substantial experience with the Java programming language."
        },
        {
            "name" : "Data Structures and Software Design,",
            "description" : "An introduction to the fundamental data structures of computer science, the design methodologies of software and the basic algorithms for these. Data structures such as stacks, queues, binary trees and priority queues will be included. Software design and development methods such as object oriented design, design patterns and basic algorithm analysis will also be covered. Projects utilizing these data structures and design methods will be completed. Emphasis will be placed on the partnership between algorithms and data structures."
        },
        {
            "name" : "Progamming Language Paradigms,",
            "description" : "This course provides an introduction to several different programming language paradigms and their approaches to problem solving. This will include a system level language utilizing memory allocation and pointers, a scripting language, a functional language and a declarative language. Students will develop programs in these languages. Languages used in detail: C, Perl, Racket (a functional language based on Lisp)."
        },
        {
            "name" : "Algorithms and Discrete Structures,",
            "description" : "This course studies the design and analysis of algorithms along with some of the discrete mathematical structures that are fundamental to the field of Computer Science.  Algorithm analysis topics include best, worst, and average case analysis of iterative and recursive algorithms; asymptotic notation; and solving recurrence relations. Algorithm design techniques include brute force, greedy, divide-and-conquer, dynamic programming, and space/time tradeoff. Discrete structures topics include propositional logic, proof techniques (especially induction), sets, matrices, sequences and summations, and basic combinatorics."
        },
        {
            "name" : "Computer Organization,",
            "description" : "This course provides an introduction to the organization of computer hardware and the architecture of a computer’s various hardware components. The course will examine hardware from the bottom up, examining gates, circuits, memory and arithmetic/logic unit organization and microprocessor architecture. The course covers the Boolean algebra needed for digital logic design. It also covers assembly language programming using Microsoft Assembly. "
        },
        {
            "name" : "Computer Networks,",
            "description" : "This course provides a study of computer networking architecture and protocols, using the TCP/IP protocol suite as our primary example. We will study application-level protocols such as electronic mail, remote login, and file transfer. We will learn about network management and interconnecting heterogeneous networks. We will study different types of transmission media and media access protocols. Students will gain experience writing client-server applications and network analysis programs.  Many programming projects interacting with different layers of the OSI stack are done in Java and C."
        },
        {
            "name" : "Computer and Network Security,",
            "description" : "This course provides an introduction to computer and network security by examining security issues, policies, and preventative measures. Topics include threats to networks and operating systems, system software vulnerability, network intrusion, and various types of malware, including viruses and worms. Each vulnerability is accompanied by practices to prevent attack.  This course requires extensive use of Linux"
        },
        {
            "name" : "Database Systems,",
            "description" : "This course examines database architecture by examining application design and looking at external, conceptual, and internal levels of databases. Topics include the development of queries through query languages; the design of forms and reports; the design and layout of a database; the design and implementation of front-ends; the relational model; protection issues including recovery, concurrency, security, and integrity; distributed database concepts; optimization strategies; storage structures and access methods; and object-oriented databases.  We did a lot of SQL in Microsoft SQL Server and did a semester long project developing a Video Store database using C# with NHibernate along with the Internet Movie Database."
        },
        {
            "name" : "Senior Design Project",
            "description" : "This course focuses on software developing in the profession world.  For my senior project I was part of a four person team working with the Kruizinga Art Museum to implement a web fron end to their collections database."
        }
    ]
}

// work experiences JSON
var work = {
    "jobs" : [
        
        {
            "name" : "Hope College Science Camps",
            "position" : "Primary Teacher",
            "roles" : [
                "Create and teach various science and engineering camps to younger learners",
                "Taught Lego robotics, video game making, and building virtual worlds"
            ],
            "years" : "Feburary 2012 - July 2013"
        },
        {
            "name" :"Mike Evenhouse Yacht Restoration",
            "position" : "Yacht Restoration",
            "roles" : [
                "Repair, restore, and maintain yachts",
                "Specialize in wood restoration and brightwork"
            ],
            "years" : "January 2015 - present"
        },
        {
            "name" : "Hudsonville High School",
            "position" : "Student Teacher",
            "roles" : [
                "Responsible for full time control over a 10th grade History classroom",
                "Plan and implement lessons everyday with extensive use of computers and technology",
                "Responsible for maintaining classroom management"
            ],
            "years" : "Fall 2013"
        },
        {
            "name" : "Professional Education Services Group",
            "position" : "Substitute Teacher",
            "roles" : [
                "Substitute teach in many school districts in Ottawa and Kent counties",
                "Implement lesson plans and maintain a positive learning environment in classrooms"
            ],
            "years" : "January 2014 - December 2014"
        },
        {
            "name" : "Hope College Transportation Garage",
            "position" : "Technicians Assitant",
            "roles" : [
                "Inspect and repair vehicles operated by Hope College",
                "Order parts through various retailers and keep detailed records",
                "Oversaw student workers and provided them with training and mentoring"
            ],
            "years" : "June 2009 - December 2014"
        },
        {
            "name" : "Von Holt Farms",
            "position" : "Equipment Operator",
            "roles" : [
                "Operate farm equipment (Tractors, Forklifts, Large trucks)",
                "Maintain quality control of fruit"
            ],
            "years" : "June 2000 - October 2014"
        },
        {
            "name" : "Hope College Transportation Department",
            "position" : "Shuttle Driver",
            "roles" : [
                "Drive the Hope College shuttle to transport students safely around campus",
                "Maintain a set route and be observant for students needing safe transportation"
            ],
            "years" : "January 2014 - present"
        },
        {
            "name" : "Holland Warriors Lacrosse Club",
            "position" : "Head Coach",
            "roles" : [
                "Prepare and oversee young players during practice and games",
                "Provide feedback and help implement new techniques to young players"
            ],
            "years" : "Spring 2012"
        }
    ]
};

// side projects JSON
var projects = {
    "projects" : [
        {
            "name" : "Kruizinga Art Museum Online Exhbition - Link to Website",
            "description" : "The Hope College Art Museum wanted a way to display their collection online.  I am part of a team of four seniors working to create a website to allow the entire collection to be acessable online.  We worked with the Collective Access open source platform to create a database and website for the museums collection.  It should be noted that this site is still under active development and may be unavailable or unfinished.",
            "image" : "images/kam.png",
            "url" : "http://providence.hope.edu/media/pawtucket/index.php/Browse/objects/facet/occurrence_facet_107/id/6/view/images/key/e7ea7a9363bf62768d1a37a4a0c78efa"
        },
        {
            "name" : "Race Dash",
            "description" : "I created a digital dash board that is optimized for use in a race car.  A friend of mine is an amature racing driver and wanted a more racing friendly dash without spending thousands of dollars on comercially available products.  I created a dash for him powered by a raspberry pi running a custom Java application that reads live data from a cars OBD II port. Video below shows the more stripped down UI version running on a Raspberry Pi.  The picture to the right is of the full javaFX desktop version on my laptop.  More gagues can be added to both",
            "image" : "images/raceDash.png",
            "url" : "#"
        },
        {
            "name" : "Fleet Command: Android App - Link to Google Play Store",
            "description" : "I created a basic Android application that is on the play store.  The application allows users to keep track of the score of deck building card games.",
            "image" : "images/featureG.png",
            "url" : "https://play.google.com/store/apps/details?id=com.bobmolenhouse.scorerealms&hl=en"
        }
    ]
};

//about me section
var about = {
    "brief" : "&nbsp;&nbsp;&nbsp;&nbsp; I'm from Holland, MI. I am 27 years old.  I have a lovely wife, Elyse, and two beautiful kids, Margaret and John.  I am a passionate developer and all-around tech nerd.  When I'm not with my kids chasing our dogs around the yard, I'm probably in my \"office\" programming a Raspberry Pi to turn my smart light bulbs red.  I love this line of work and I cannot wait to discuss it more with you.",
    "full" : "&nbsp;&nbsp;&nbsp;&nbspI have been trying to grow up in Holland my entire life.  I went to Holland Christian schools for my k-12.  I met my wife, Elyse, there.  After Graduating high school in 2009 I attended Hope College.  Freshman year at Hope I spent studying Civil Engineering.  After deciding that engineering was not for my I switched into Education.  I love teaching and sharing my passions with others.  I graduated in 2013 with my bachelor's in Social Studies Secondary Education.  I still love teaching and sharing my passions with students, but being a career educator never meshed with my life well.<br> &nbsp;&nbsp;&nbsp;&nbsp I had loved building computers and exploring technology since childhood.  I was first introduced to programming in my Intro to Engineering class at Hope my freshman year.  We programmed Arduino's in C for a project.  After college I began experimenting with coding and, started my unnatural love affair with raspberry pi's.  I was hooked immediately and knew what I had to do. <br>&nbsp;&nbsp;&nbsp;&nbsp I decided to return to Hope and pursue a degree in Computer Science focusing on software development.  Programming combines the technical challenges that I loved from engineering, with a more human and creative approach that I was drawn to by Social Studies.",
};