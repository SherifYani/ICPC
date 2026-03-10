// === WEEKS DATA (completed) ===

export const weeksData = [
  {
    id: 0,
    title: "Orientation Week",
    description: "Get started with competitive programming",
    fullDescription:
      "This week is all about introductions. We'll cover the basics of programming, competitive programming, and setting up the necessary tools.",
    videoCount: 8,
    resourceCount: 9,
    problemCount: 0,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-00-(Orientation-Week)",
  },
  {
    id: 1,
    title: "Fundamentals of C++ ",
    description: "Learn the basics of C++ syntax and data types",
    fullDescription:
      "Explore the essentials of C++ programming. We'll cover key topics such as basic syntax, data types & variables, operators, input/output operations, error handling, and comments.",
    videoCount: 14,
    resourceCount: 15,
    problemCount: 8,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-01-(Fundamentals-of-Cpp-Programming)",
    wikiUrl:
      "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-01-(Fundamentals-of-Cpp-Programming).md",
    additionalSheet: "https://vjudge.net/group/level_0_training_2026",
    lectureSession: "https://www.youtube.com/@ICPCANU",
  },
  {
    id: 2,
    title: "Conditions",
    description: "Master conditional statements and decision-making",
    fullDescription:
      "Learn how to use if-else statements, switch cases, and logical operators to control program flow based on conditions.",
    videoCount: 5,
    resourceCount: 6,
    problemCount: 18,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-02-(Conditions)",
    wikiUrl:
      "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-02-(Conditions).md",
    additionalSheet: "https://vjudge.net/group/level_0_training_2026",
    lectureSession: "https://www.youtube.com/@ICPCANU",
  },
  {
    id: 3,
    title: "Loops",
    description: "Understand loops and iteration",
    fullDescription:
      "Master for loops, while loops, do-while loops, and nested loops. Learn how to use loops to repeat code blocks efficiently.",
    videoCount: 5,
    resourceCount: 6,
    problemCount: 26,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-03-(Loops)",
    wikiUrl:
      "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-03-(Loops).md",
    additionalSheet: "https://vjudge.net/group/level_0_training_2026",
    lectureSession: "https://www.youtube.com/@ICPCANU",
  },
  {
    id: 4,
    title: "Arrays",
    description: "Work with arrays and data structures",
    fullDescription:
      "Learn about single-dimensional and multi-dimensional arrays. Understand how to store, access, and manipulate collections of data.",
    videoCount: 4,
    resourceCount: 5,
    problemCount: 26,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-04-(Arrays)",
    wikiUrl:
      "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-04-(Arrays).md",
    additionalSheet: "https://vjudge.net/group/level_0_training_2026",
    lectureSession: "https://www.youtube.com/@ICPCANU",
  },
  {
    id: 5,
    title: "Strings",
    description: "Master string manipulation",
    fullDescription:
      "Learn to work with strings as a fundamental data structure. Topics include string operations, input/output techniques, and common string algorithms.",
    videoCount: 5,
    resourceCount: 7,
    problemCount: 26,
    resourcesLink:
      "https://github.com/sayedmostaf/ICPC-ANU-Community-Level-0-2025/wiki/Week-05-(Strings)",
    wikiUrl:
      "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-05-(Strings).md",
    additionalSheet: "https://vjudge.net/group/level_0_training_2026",
    lectureSession: "https://www.youtube.com/@ICPCANU",
  },
];

export const resourcesData = [
  // Week 00 - Orientation Week
  {
    weekId: 0,
    topic: "Set up CLion",
    type: "Video",
    description: "Professional IDE (free for students)",
    link: "https://youtu.be/tS4HOYEllUE",
  },
  {
    weekId: 0,
    topic: "Set up VS Code",
    type: "Video",
    description: "Lightweight editor with C++ extensions",
    link: "https://youtu.be/k4I_EUa9CCg",
  },
  {
    weekId: 0,
    topic: "Set up Code::Blocks",
    type: "Video",
    description: "Simple IDE, zero config",
    link: "https://youtu.be/8DRt2CRD6X8",
  },
  {
    weekId: 0,
    topic: "How to use our material",
    type: "Video",
    description: "Navigate GitHub wiki, slides & contests",
    link: "https://youtu.be/zxsYV1W0_V0",
  },
  {
    weekId: 0,
    topic: "Programming Basics",
    type: "Video",
    description: "What is code? Input → Process → Output",
    link: "https://www.youtube.com/watch?v=gHg4FBnT3Fw",
  },
  {
    weekId: 0,
    topic: "Why Competitive Programming?",
    type: "Video",
    description: "Contests, ratings, ICPC, job interviews",
    link: "https://youtu.be/F2_2QMiZbOI",
  },
  {
    weekId: 0,
    topic: "Codeforces Full Tutorial",
    type: "Video",
    description: "Register → Submit → Standings → Gym",
    link: "https://youtu.be/6iFozFo6sc0",
  },
  {
    weekId: 0,
    topic: "VJudge Full Tutorial",
    type: "Video",
    description: "Virtual contests from every OJ",
    link: "https://youtu.be/KBZeSHUxFY0",
  },
  {
    weekId: 0,
    topic: "Programiz Online Compiler",
    type: "Tool",
    description: "Run C++ instantly in browser",
    link: "https://www.programiz.com/cpp-programming/online-compiler/",
  },

  // Week 01 - Fundamentals
  {
    weekId: 1,
    topic: "Introduction to C++",
    type: "Slides",
    description: "Comprehensive slides covering C++ basics",
    link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-1/lecture/week1-slides.html",
  },
  {
    weekId: 1,
    topic: "Preprocessing, Compiling And Linking",
    type: "Video",
    description: "Understanding the C++ compilation process",
    link: "https://youtu.be/1K1sET8dDrI",
  },
  {
    weekId: 1,
    topic: "Program Structure",
    type: "Video",
    description: "Learn the basic structure of C++ programs",
    link: "https://youtu.be/JMGLoVfT21Y",
  },
  {
    weekId: 1,
    topic: "Data Types",
    type: "Video",
    description: "Explore different data types in C++",
    link: "https://youtu.be/Q0G_2YF5gq0",
  },
  {
    weekId: 1,
    topic: "Variables Part 1",
    type: "Video",
    description: "Introduction to variables and declarations",
    link: "https://youtu.be/kpAxP36zaIY",
  },
  {
    weekId: 1,
    topic: "Variables Part 2",
    type: "Video",
    description: "Advanced variable concepts",
    link: "https://youtu.be/phF-0KCIkP4",
  },
  {
    weekId: 1,
    topic: "Variables Part 3",
    type: "Video",
    description: "Variable scope and lifetime",
    link: "https://youtu.be/I1UOijd4sNo",
  },
  {
    weekId: 1,
    topic: "Getting Input (cin)",
    type: "Video",
    description: "How to take user input in C++",
    link: "https://youtu.be/s7B6s2rjn3Q",
  },
  {
    weekId: 1,
    topic: "Arithmetic Operators",
    type: "Video",
    description: "Mastering arithmetic operations",
    link: "https://youtu.be/9JyMTGw_Gpg",
  },
  {
    weekId: 1,
    topic: "Assignment on Operators",
    type: "Video",
    description: "Practice with operators",
    link: "https://youtu.be/4PHjtu_kFKA",
  },
  {
    weekId: 1,
    topic: "Code Tracing Example",
    type: "Video",
    description: "Learn to trace code execution",
    link: "https://youtu.be/rgTGMHxeIfU",
  },
  {
    weekId: 1,
    topic: "Comparison Operators",
    type: "Video",
    description: "Understanding comparison operations",
    link: "https://youtu.be/n1IcMobC9NE",
  },
  {
    weekId: 1,
    topic: "Comments & Practice",
    type: "Video",
    description: "Understanding comments and practical examples",
    link: "https://youtu.be/1q9utIkYdOI?si=7D2utB5zuviHhlPi",
  },
  {
    weekId: 1,
    topic: "Overflow and Type Casting",
    type: "Video",
    description: "Understanding data overflow and type conversions",
    link: "https://youtu.be/DsHN4NWNNvY?si=6rV2aJy-YqoppxL1",
  },
  {
    weekId: 1,
    topic: "Modular Arithmetic",
    type: "Video",
    description: "Mastering modulo operations in programming",
    link: "https://youtu.be/VWK0BOUmdBs?si=G_UEVSh2qoPALFox",
  },

  // Week 02 - Conditions (UPDATED LINKS)
  {
    weekId: 2,
    topic: "If Statement",
    type: "Video",
    description: "Basic conditional execution",
    link: "https://youtu.be/mzD9NIkI0A8?si=o-8eo1FPt735AZB2", // Conditions Part 1
  },
  {
    weekId: 2,
    topic: "Else & Else-If",
    type: "Video",
    description: "Handling multiple branches",
    link: "https://youtu.be/gE4VkkNLlUc?si=HYxlsg7dVynUVxYZ", // Conditions Part 2
  },
  {
    weekId: 2,
    topic: "Nested If",
    type: "Video",
    description: "Conditions inside conditions",
    link: "https://youtu.be/KPjjTfAD3nM?si=rSQIe89LGEwEBtxl", // Nested Conditions
  },
  {
    weekId: 2,
    topic: "Switch Case",
    type: "Video",
    description: "Cleaner alternative for multiple equality checks",
    link: "https://youtu.be/-MTeqw7gZf0?si=KxZ8xzByqj7dke9Y", // Switch-Case Statements
  },
  {
    weekId: 2,
    topic: "Logical Operators",
    type: "Video",
    description: "AND, OR, NOT in depth",
    link: "https://youtu.be/tGnGFR_HMQw?si=l9WvEMOUXDZayAK6", // Logical Operators
  },
  {
    weekId: 2,
    topic: "Conditions Slides",
    type: "Slides",
    description: "Full lecture slides for Week 02",
    link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-2/lecture/week2-slides.html",
  },

  // Week 03 - Loops (UPDATED LINKS)
  {
    weekId: 3,
    topic: "While Loop",
    type: "Video",
    description: "Entry-controlled looping",
    link: "https://youtu.be/9O8u7-0TCfM?si=5tpJYA7RtBPWyvEf", // While loops
  },
  {
    weekId: 3,
    topic: "Do-While Loop",
    type: "Video",
    description: "Exit-controlled looping",
    link: "https://youtu.be/010PbHburKk?si=F2-ke46tutc8RgpL", // do-while loops
  },
  {
    weekId: 3,
    topic: "For Loop",
    type: "Video",
    description: "Count-controlled loops",
    link: "https://youtu.be/Y__kU86xG4c?si=fv-W2-O3v9AghaKi", // For loops
  },
  {
    weekId: 3,
    topic: "Nested Loops",
    type: "Video",
    description: "Loops inside loops with examples",
    link: "https://youtu.be/H_-x8g1TWJs?si=Fa00WdoCAxU7VXxc", // Nested loops
  },
  {
    weekId: 3,
    topic: "Break & Continue",
    type: "Video",
    description: "Controlling loop flow",
    link: "https://youtu.be/ngXQm9LnxTM?si=yjwU1KLvtJPmfgiV", // Continue & break
  },
  {
    weekId: 3,
    topic: "Loops Slides",
    type: "Slides",
    description: "Complete slide deck for loops",
    link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-3/lecture/week3-slides.html",
  },

  // Week 04 - Arrays (UPDATED LINKS)
  {
    weekId: 4,
    topic: "1D Arrays Declaration",
    type: "Video",
    description: "Creating and initializing arrays",
    link: "https://youtu.be/SXhyiLLERsA?si=JIlWxXyBSy83p2UV", // 1D Arrays
  },
  {
    weekId: 4,
    topic: "Array Input/Output",
    type: "Video",
    description: "Reading and printing array elements",
    link: "https://youtu.be/M2bHVI0iBRU?si=__lvVPhSXom4kBFi", // Practice on Arrays (covers I/O)
  },
  {
    weekId: 4,
    topic: "Array Operations",
    type: "Video",
    description: "Sum, max, min, reverse",
    link: "https://youtu.be/M2bHVI0iBRU?si=__lvVPhSXom4kBFi", // Practice on Arrays
  },
  {
    weekId: 4,
    topic: "2D Arrays",
    type: "Video",
    description: "Matrices and multi-dimensional arrays",
    link: "https://youtu.be/OZfue6NBNBk?si=Qikd1QTJUJuF9rug", // 2D Arrays
  },
  {
    weekId: 4,
    topic: "Arrays Slides",
    type: "Slides",
    description: "Full slides covering array concepts",
    link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-4/lecture/week4-slides.html",
  },
  // Week 05 - Strings
  {
    weekId: 5,
    topic: "String Basics",
    type: "Video",
    description: "Introduction to string data type and operations",
    link: "https://www.youtube.com/watch?v=HOB-Ey3tEqY",
  },
  {
    weekId: 5,
    topic: "Char Arrays Fundamentals & String Basics",
    type: "Video",
    description:
      "Char array basics: ASCII values, case conversion, null terminator, escape sequences, and string definitions",
    link: "https://www.youtube.com/watch?v=GoqfS1m1BYo",
  },
  {
    weekId: 5,
    topic: "String Practice: Word Count, Frequency & Mapping",
    type: "Video",
    description:
      "Practice: word counting, string concatenation, letter frequency analysis, and character mapping",
    link: "https://youtu.be/rxKcqvbWkL0?si=GuAFdVF--UJ2GQj2",
  },
  {
    weekId: 5,
    topic: "String Homework Challenges & Applications",
    type: "Video",
    description:
      "Challenges: prefix/suffix/substring/subsequence checks, conversion, grouping, compression, and comparison",
    link: "https://www.youtube.com/watch?v=ZKE4VZHS9IY",
  },
  {
    weekId: 5,
    topic: "Week 5 Live Session Recording",
    type: "Video",
    description: "Full lecture recording with live coding, examples, and Q&A",
    link: "https://www.youtube.com/live/RCz81Q8kDPU?si=WU61IdQg-ZuDTwjQ",
  },
  {
    weekId: 5,
    topic: "C++ String Reference",
    type: "Documentation",
    description:
      "Official cplusplus.com reference for std::string class and methods",
    link: "https://cplusplus.com/reference/string/string/",
  },
  {
    weekId: 5,
    topic: "Strings Slides",
    type: "Slides",
    description: "Complete lecture slides for Week 05",
    link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-5/lecture/week5-slides.html",
  },
  // Week 06 - Functions (UPDATED LINKS)
  // {
  //   weekId: 6,
  //   topic: "Function Introduction",
  //   type: "Video",
  //   description: "Why functions? Code reusability and organization",
  //   link: "https://youtu.be/Gkg8NmfUCjg?si=lOpR6lZR-0ULfiLN",
  // },
  // {
  //   weekId: 6,
  //   topic: "Function Parameters",
  //   type: "Video",
  //   description: "Passing arguments to functions",
  //   link: "https://youtu.be/MBvixzJw2sQ?si=FaiFxsP_g_IBBIbk",
  // },
  // {
  //   weekId: 6,
  //   topic: "Default Parameter Values",
  //   type: "Video",
  //   description: "Optional parameters with default values",
  //   link: "https://youtu.be/qBojueEZxjs?si=dLTXYeOWA25K5lLX",
  // },
  // {
  //   weekId: 6,
  //   topic: "Passing Arrays to Functions",
  //   type: "Video",
  //   description: "How to pass arrays as function parameters",
  //   link: "https://youtu.be/kApYul6wN3A?si=RN36I04NjCtYI68l",
  // },
  // {
  //   weekId: 6,
  //   topic: "Return Statement & Void",
  //   type: "Video",
  //   description: "Returning values and void functions",
  //   link: "https://youtu.be/2NPd8KgneBQ?si=ZC8hK022RRiOpNrw",
  // },
  // {
  //   weekId: 6,
  //   topic: "Function Forward Declaration",
  //   type: "Video",
  //   description: "Declaring functions before definition",
  //   link: "https://youtu.be/ErBDovJ3eTk?si=NmN6m_zWNydmXVtP",
  // },
  // {
  //   weekId: 6,
  //   topic: "Built-In Math Functions",
  //   type: "Video",
  //   description: "Using cmath library functions (pow, sqrt, abs, etc.)",
  //   link: "https://youtu.be/wyFLcNCCaas?si=pmu3zHplw4YijMs1",
  // },
  // {
  //   weekId: 6,
  //   topic: "Function Overloading",
  //   type: "Video",
  //   description: "Multiple functions with same name, different parameters",
  //   link: "https://youtu.be/I_AzDYyhlMU?si=H_st9zSMomaHchLL",
  // },
  // {
  //   weekId: 6,
  //   topic: "Function Recursion",
  //   type: "Video",
  //   description: "Functions calling themselves - base case & recursive case",
  //   link: "https://youtu.be/djgs6PnNl2w?si=pXcwvWfWZPVi67nO",
  // },
  // {
  //   weekId: 6,
  //   topic: "Functions Slides",
  //   type: "Slides",
  //   description: "Complete lecture slides for Week 06",
  //   link: "https://sayedmostaf.github.io/ICPC-ANU-Community-Level-0-2025/week-6/lecture/week6-slides.html",
  // },
];

// === PROBLEMS DATA Week 01 (Fundamentals of Cpp Programming) ===
export const problemsDataWeek1 = [
  {
    id: "A",
    name: "Say Hello With C++",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/A",
  },
  {
    id: "B",
    name: "Basic Data Types",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/B",
  },
  {
    id: "C",
    name: "Simple Calculator",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/C",
  },
  {
    id: "D",
    name: "Difference",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/D",
  },
  {
    id: "E",
    name: "Area of a Circle",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/E",
  },
  {
    id: "F",
    name: "Digits Summation",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/F",
  },
  {
    id: "G",
    name: "Summation from 1 to N",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G",
  },
  {
    id: "H",
    name: "Two Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/H",
  },
];

// === PROBLEMS DATA (Week 02 - Conditions) ===
export const problemsDataWeek2 = [
  {
    id: "I",
    name: "Welcome for you with Conditions",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/I",
  },
  {
    id: "J",
    name: "Multiples",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J",
  },
  {
    id: "K",
    name: "Max and Min",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K",
  },
  {
    id: "L",
    name: "The Brothers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/L",
  },
  {
    id: "M",
    name: "Capital or Small or Digit",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/M",
  },
  {
    id: "N",
    name: "Char",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/N",
  },
  {
    id: "O",
    name: "Calculator",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/O",
  },
  {
    id: "P",
    name: "First digit !",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P",
  },
  {
    id: "Q",
    name: "Coordinates of a Point",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Q",
  },
  {
    id: "R",
    name: "Age in Days",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R",
  },
  {
    id: "S",
    name: "Interval",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/S",
  },
  {
    id: "T",
    name: "Sort Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/T",
  },
  {
    id: "U",
    name: "Float or int",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/U",
  },
  {
    id: "V",
    name: "Comparison",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/V",
  },
  {
    id: "W",
    name: "Mathematical Expression",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W",
  },
  {
    id: "X",
    name: "Two intervals",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/X",
  },
  {
    id: "Y",
    name: "The last 2 digits",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Y",
  },
  {
    id: "Z",
    name: "Hard Compare",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Z",
  },
];

// === PROBLEMS DATA (Week 03 - Loops) ===
export const problemsDataWeek3 = [
  {
    id: "A",
    name: "1 to N",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/A",
  },
  {
    id: "B",
    name: "Even Numbers",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B",
  },
  {
    id: "C",
    name: "Even, Odd, Positive and Negative",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/C",
  },
  {
    id: "D",
    name: "Fixed Password",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/D",
  },
  {
    id: "E",
    name: "Max",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/E",
  },
  {
    id: "F",
    name: "Multiplication table",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/F",
  },
  {
    id: "G",
    name: "Factorial",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/G",
  },
  {
    id: "H",
    name: "One Prime",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/H",
  },
  {
    id: "I",
    name: "Palindrome",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/I",
  },
  {
    id: "J",
    name: "Primes from 1 to n",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/J",
  },
  {
    id: "K",
    name: "Divisors",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/K",
  },
  {
    id: "L",
    name: "GCD",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/L",
  },
  {
    id: "M",
    name: "Lucky Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M",
  },
  {
    id: "N",
    name: "Numbers Histogram",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/N",
  },
  {
    id: "O",
    name: "Pyramid",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/O",
  },
  {
    id: "P",
    name: "Shape1",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/P",
  },
  {
    id: "Q",
    name: "Digits",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Q",
  },
  {
    id: "R",
    name: "Sequence of Numbers and Sum",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/R",
  },
  {
    id: "S",
    name: "Sum of Consecutive Odd Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/S",
  },
  {
    id: "T",
    name: "Shape2",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/T",
  },
  {
    id: "U",
    name: "Some Sums",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/U",
  },
  {
    id: "V",
    name: "PUM",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/V",
  },
  {
    id: "W",
    name: "Shape3",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/W",
  },
  {
    id: "X",
    name: "Convert To Decimal 2",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/X",
  },
  {
    id: "Y",
    name: "Easy Fibonacci",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Y",
  },
  {
    id: "Z",
    name: "Three Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Z",
  },
];

// === PROBLEMS DATA (Week 04 - Arrays) ===
export const problemsDataWeek4 = [
  {
    id: "A",
    name: "Summation",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/A",
  },
  {
    id: "B",
    name: "Searching",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/B",
  },
  {
    id: "C",
    name: "Replacement",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/C",
  },
  {
    id: "D",
    name: "Positions in array",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/D",
  },
  {
    id: "E",
    name: "Lowest Number",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/E",
  },
  {
    id: "F",
    name: "Reversing",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/F",
  },
  {
    id: "G",
    name: "Palindrome Array",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/G",
  },
  {
    id: "H",
    name: "Sorting",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/H",
  },
  {
    id: "I",
    name: "Smallest Pair",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/I",
  },
  {
    id: "J",
    name: "Lucky Array",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/J",
  },
  {
    id: "K",
    name: "Sum Digits",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/K",
  },
  {
    id: "L",
    name: "Max Subarray",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/L",
  },
  {
    id: "M",
    name: "Replace MinMax",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/M",
  },
  {
    id: "N",
    name: "Check Code",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/N",
  },
  {
    id: "O",
    name: "Fibonacci",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/O",
  },
  {
    id: "P",
    name: "Minimize Number",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/P",
  },
  {
    id: "Q",
    name: "Count Subarrays",
    difficulty: 4,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/Q",
  },
  {
    id: "R",
    name: "Permutation with arrays",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/R",
  },
  {
    id: "S",
    name: "Search In Matrix",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/S",
  },
  {
    id: "T",
    name: "Matrix",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/T",
  },
  {
    id: "U",
    name: "Is B a subsequence of A ?",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/U",
  },
  {
    id: "V",
    name: "Frequency Array",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/V",
  },
  {
    id: "W",
    name: "Mirror Array",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/W",
  },
  {
    id: "X",
    name: "8 Neighbors",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/X",
  },
  {
    id: "Y",
    name: "Range sum query",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/Y",
  },
  {
    id: "Z",
    name: "Binary Search",
    difficulty: 4,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/Z",
  },
];
// === PROBLEMS DATA (Week 05 - Strings) ===
export const problemsDataWeek5 = [
  // Source: https://codeforces.com/group/MWSDmqGsZm/contest/219856
  {
    id: "A",
    name: "Create A New String",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/A",
  },
  {
    id: "B",
    name: "Let's use Getline",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/B",
  },
  {
    id: "C",
    name: "Compare",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/C",
  },
  {
    id: "D",
    name: "Strings",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/D",
  },
  {
    id: "E",
    name: "Count",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/E",
  },
  {
    id: "F",
    name: "Way Too Long Words",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/F",
  },
  {
    id: "G",
    name: "Conversion",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/G",
  },
  {
    id: "H",
    name: "Good or Bad",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/H",
  },
  {
    id: "I",
    name: "Palindrome",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/I",
  },
  {
    id: "J",
    name: "Count Letters",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/J",
  },
  {
    id: "K",
    name: "I Love strings",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/K",
  },
  {
    id: "L",
    name: "String Functions",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/L",
  },
  {
    id: "M",
    name: "Subsequence String",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/M",
  },
  {
    id: "N",
    name: "Max Subsequence",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/N",
  },
  {
    id: "O",
    name: "Sort String",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/O",
  },
  {
    id: "P",
    name: "Count Words",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/P",
  },
  {
    id: "Q",
    name: "Reverse Words",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/Q",
  },
  {
    id: "R",
    name: "String Score",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/R",
  },
  {
    id: "S",
    name: "Max Split",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/S",
  },
  {
    id: "T",
    name: "URL",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/T",
  },
  {
    id: "U",
    name: "New Words",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/U",
  },
  {
    id: "V",
    name: "Replace Word",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/V",
  },
  {
    id: "W",
    name: "Encrypt & Decrypt Message",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/W",
  },
  {
    id: "X",
    name: "Comparison",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/X",
  },
  {
    id: "Y",
    name: "Min Cost String",
    difficulty: 4,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/Y",
  },
  {
    id: "Z",
    name: "Clean Code",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/Z",
  },
];

// === PROBLEMS DATA (Week 06 - Functions) ===
export const problemsDataWeek6 = [
  // Source: https://codeforces.com/group/MWSDmqGsZm/contest/223205
  {
    id: "A",
    name: "Add",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/A",
  },
  {
    id: "B",
    name: "Print",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/B",
  },
  {
    id: "C",
    name: "Wonderful Number",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/C",
  },
  {
    id: "D",
    name: "Prime Function",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/D",
  },
  {
    id: "E",
    name: "Swap",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/E",
  },
  {
    id: "F",
    name: "Equation",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/F",
  },
  {
    id: "G",
    name: "Max and MIN",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/G",
  },
  {
    id: "H",
    name: "N Times",
    difficulty: 1,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/H",
  },
  {
    id: "I",
    name: "Swapping With Matrix",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/I",
  },
  {
    id: "J",
    name: "Average",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/J",
  },
  {
    id: "K",
    name: "Shift Right",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/K",
  },
  {
    id: "L",
    name: "New Array",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/L",
  },
  {
    id: "M",
    name: "Distinct Numbers",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/M",
  },
  {
    id: "N",
    name: "Shift Zeros",
    difficulty: 2,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/N",
  },
  {
    id: "O",
    name: "Five in One",
    difficulty: 3,
    link: "https://codeforces.com/group/MWSDmqGsZm/contest/223205/problem/O",
  },
];
