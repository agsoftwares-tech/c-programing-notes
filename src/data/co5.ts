import type { CourseOutcome } from "@/types"

export const co5: CourseOutcome = {
  id: "co5",
  title: "CO5: Structures and Unions",
  shortTitle: "CO5",
  description:
    "Declaration, initialization, nested structures, arrays of structures, unions, and real-world case studies in C",
  icon: "Package",
  color: "amber",
  questions: [
    // ────────────────────────────────────────────
    // Q1 – Structure Declaration and Syntax
    // ────────────────────────────────────────────
    {
      id: "co5-q1",
      title:
        "Explain the C syntax of structure declaration with example. Also explain the structure of a C program.",
      source: "Jul 2022 / May 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Structure in C

A **structure** is a user-defined data type that groups together **variables of different (or same) data types** under a single name. It is used to represent a record — for example, a Student has a name (string), roll number (int), and marks (float).

### Syntax of Structure Declaration

\`\`\`c
struct structure_name {
    data_type member1;
    data_type member2;
    ...
    data_type memberN;
};
\`\`\`

### Declaring a Structure Variable

\`\`\`c
/* Method 1: After structure definition */
struct Student s1;

/* Method 2: At the time of definition */
struct Student {
    int rollno;
    char name[30];
    float marks;
} s1, s2;

/* Method 3: Using typedef */
typedef struct {
    int rollno;
    char name[30];
    float marks;
} Student;

Student s1;   /* no need to write 'struct' keyword */
\`\`\`

### Accessing Structure Members

Use the **dot operator ( . )** with a structure variable:

\`\`\`c
s1.rollno = 101;
strcpy(s1.name, "Alice");
s1.marks = 89.5;
\`\`\`

Use the **arrow operator ( -> )** with a structure pointer:

\`\`\`c
struct Student *ptr = &s1;
ptr->rollno = 101;
\`\`\`

---

## Structure of a C Program

Every C program follows a standard structure:

\`\`\`
1. Documentation Section       (comments describing the program)
2. Link / Include Section       (#include <header_files>)
3. Definition Section           (#define constants / macros)
4. Global Declaration           (global variables, structures)
5. main() Function              (entry point of the program)
   └── Declaration Part         (local variables)
   └── Executable Part          (statements, function calls)
6. Sub-program Section          (user-defined functions)
\`\`\`

### Example Skeleton

\`\`\`c
/* 1. Documentation */
/* Program to demonstrate structures */

/* 2. Include */
#include<stdio.h>
#include<string.h>

/* 3. Definition */
#define MAX 100

/* 4. Global Declaration */
struct Student {
    int roll;
    char name[30];
    float marks;
};

/* 5. main() */
void main() {
    struct Student s;          /* local variable */
    s.roll = 1;
    strcpy(s.name, "Alice");
    s.marks = 92.5;
    printf("Roll: %d, Name: %s, Marks: %.1f\\n",
           s.roll, s.name, s.marks);
}
\`\`\``,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q2 – Structure: Point P(x, y)
    // ────────────────────────────────────────────
    {
      id: "co5-q2",
      title:
        "Provide an example demonstrating the declaration and initialization of a structure named 'Point'. Also display the coordinates P(x, y).",
      source: "May 2024",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Structure: Point P(x, y)

In mathematics, a **Point** is defined by two coordinates — **x** (horizontal) and **y** (vertical). We can model this with a C structure.`,
        },
        {
          type: "code",
          language: "c",
          title: "Example – Structure Point",
          content: `#include<stdio.h>
#include<conio.h>

/* Structure declaration */
struct Point {
    int x;
    int y;
};

void main() {
    clrscr();

    /* Declaration and initialization */
    struct Point p1 = {3, 7};
    struct Point p2;

    /* Assign values to p2 */
    p2.x = 10;
    p2.y = -5;

    /* Display coordinates */
    printf("Point P1: P(%d, %d)\\n", p1.x, p1.y);
    printf("Point P2: P(%d, %d)\\n", p2.x, p2.y);

    getch();
}

/*
Output:
Point P1: P(3, 7)
Point P2: P(10, -5)
*/`,
        },
        {
          type: "diagram",
          title: "Coordinate Plane – Points P1 and P2",
          content: `graph LR
    A["Origin (0,0)"] --> B["P1 (3, 7) → x=3, y=7"]
    A --> C["P2 (10, -5) → x=10, y=-5"]
    style A fill:#f59e0b,stroke:#d97706,color:#fff
    style B fill:#10b981,stroke:#059669,color:#fff
    style C fill:#ef4444,stroke:#dc2626,color:#fff`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q3 – Differentiate Structures and Unions
    // ────────────────────────────────────────────
    {
      id: "co5-q3",
      title:
        "Differentiate between structure and union with examples.",
      source: "Jul 2022 / Dec 2022 / May 2023 / Aug 2023 / May 2024 / Jun 2025",
      marks: 5,
      blocks: [
        {
          type: "text",
          content: `## Structure vs Union

Both \`struct\` and \`union\` are user-defined data types that group multiple variables. The key difference lies in **memory allocation**.

### Key Differences

| Feature | Structure (\`struct\`) | Union (\`union\`) |
|---------|----------------------|-----------------|
| **Keyword** | \`struct\` | \`union\` |
| **Memory** | Each member gets its **own** memory | All members **share** the **same** memory |
| **Size** | Sum of sizes of all members (+ padding) | Size of the **largest** member |
| **Access** | All members can be used simultaneously | Only **one** member should be used at a time |
| **Value preservation** | All member values are preserved independently | Changing one member **overwrites** others |
| **Use case** | Storing different attributes of one entity | Saving memory when only one value is needed at a time |
| **Initialization** | All members can be initialized | Only the **first** member can be initialized |

### Memory Layout Example

Suppose: \`int\` = 4 bytes, \`float\` = 4 bytes, \`char\` = 1 byte.

\`\`\`c
struct Demo {      /* Memory: 4 + 4 + 1 = 9 bytes (+ padding) */
    int   i;
    float f;
    char  c;
};

union Demo {       /* Memory: max(4, 4, 1) = 4 bytes only */
    int   i;
    float f;
    char  c;
};
\`\`\``,
        },
        {
          type: "diagram",
          title: "Memory Layout – struct vs union",
          content: `graph TD
    subgraph STRUCT["struct Demo (9+ bytes)"]
        S1["int i — 4 bytes"]
        S2["float f — 4 bytes"]
        S3["char c — 1 byte"]
    end
    subgraph UNION["union Demo (4 bytes)"]
        U1["int i"]
        U2["float f  (same 4 bytes)"]
        U3["char c  (first byte)"]
    end
    style S1 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style S2 fill:#10b981,stroke:#059669,color:#fff
    style S3 fill:#f59e0b,stroke:#d97706,color:#fff
    style U1 fill:#ef4444,stroke:#dc2626,color:#fff
    style U2 fill:#ef4444,stroke:#dc2626,color:#fff
    style U3 fill:#ef4444,stroke:#dc2626,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Comparing struct and union",
          content: `#include<stdio.h>
#include<conio.h>

struct SDemo {
    int   i;
    float f;
    char  c;
};

union UDemo {
    int   i;
    float f;
    char  c;
};

void main() {
    clrscr();

    struct SDemo s;
    union  UDemo u;

    /* Structure: all members independent */
    s.i = 10;
    s.f = 3.14f;
    s.c = 'A';
    printf("--- Structure ---\\n");
    printf("s.i = %d\\n",   s.i);
    printf("s.f = %.2f\\n", s.f);
    printf("s.c = %c\\n",   s.c);
    printf("Size of struct = %d bytes\\n\\n", sizeof(s));

    /* Union: only last assigned member is valid */
    u.i = 10;
    printf("--- Union (after u.i = 10) ---\\n");
    printf("u.i = %d\\n", u.i);

    u.f = 3.14f;
    printf("--- Union (after u.f = 3.14) ---\\n");
    printf("u.f = %.2f\\n", u.f);
    printf("u.i = %d (corrupted!)\\n", u.i);
    printf("Size of union = %d bytes\\n", sizeof(u));

    getch();
}

/*
Output:
--- Structure ---
s.i = 10
s.f = 3.14
s.c = A
Size of struct = 12 bytes (with padding)

--- Union (after u.i = 10) ---
u.i = 10
--- Union (after u.f = 3.14) ---
u.f = 3.14
u.i = 1078523331 (corrupted!)
Size of union = 4 bytes
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q4 – Nested Structure with Example
    // ────────────────────────────────────────────
    {
      id: "co5-q4",
      title:
        "What do you mean by nested structure? Explain the concept with the example: structure product {cost, id, type} and structure delivery {del_date, del_number, del_type}.",
      source: "May 2023 / May 2024",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Nested Structure in C

A **nested structure** is a structure that contains another structure as one of its members. This allows representing complex, hierarchical data.

### Syntax

\`\`\`c
struct Inner {
    /* members */
};

struct Outer {
    struct Inner  member_name;   /* embedded structure */
    /* other members */
};
\`\`\`

### Access Nested Member

\`\`\`c
outer_var.inner_var.member
\`\`\`

---

## Example: Product and Delivery

A **product** has a cost, id, and type. A **delivery** record contains delivery details and embeds the product information.`,
        },
        {
          type: "diagram",
          title: "Nested Structure – delivery contains product",
          content: `graph TD
    D["struct delivery"]
    D --> DN["del_number: int"]
    D --> DT["del_type: char array"]
    D --> DD["del_date: char array"]
    D --> P["struct product  ← nested"]
    P --> PC["cost: float"]
    P --> PI["id: int"]
    P --> PT["type: char array"]
    style D fill:#f59e0b,stroke:#d97706,color:#fff
    style P fill:#0ea5e9,stroke:#0284c7,color:#fff
    style DN fill:#fef3c7,stroke:#d97706,color:#000
    style DT fill:#fef3c7,stroke:#d97706,color:#000
    style DD fill:#fef3c7,stroke:#d97706,color:#000
    style PC fill:#e0f2fe,stroke:#0284c7,color:#000
    style PI fill:#e0f2fe,stroke:#0284c7,color:#000
    style PT fill:#e0f2fe,stroke:#0284c7,color:#000`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Nested Structure: Product inside Delivery",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

/* Inner structure */
struct product {
    int   id;
    float cost;
    char  type[30];
};

/* Outer structure containing nested product */
struct delivery {
    int          del_number;
    char         del_type[20];
    char         del_date[15];
    struct product prod;         /* nested structure */
};

void main() {
    clrscr();

    struct delivery d;

    /* Assign delivery details */
    d.del_number = 1001;
    strcpy(d.del_type, "Express");
    strcpy(d.del_date, "28/05/2025");

    /* Assign nested product details */
    d.prod.id   = 501;
    d.prod.cost = 2500.00f;
    strcpy(d.prod.type, "Electronics");

    /* Display */
    printf("===== Delivery Details =====\\n");
    printf("Delivery Number : %d\\n", d.del_number);
    printf("Delivery Type   : %s\\n", d.del_type);
    printf("Delivery Date   : %s\\n", d.del_date);
    printf("\\n--- Product Info ---\\n");
    printf("Product ID      : %d\\n",   d.prod.id);
    printf("Product Cost    : Rs %.2f\\n", d.prod.cost);
    printf("Product Type    : %s\\n",   d.prod.type);

    getch();
}

/*
Output:
===== Delivery Details =====
Delivery Number : 1001
Delivery Type   : Express
Delivery Date   : 28/05/2025

--- Product Info ---
Product ID      : 501
Product Cost    : Rs 2500.00
Product Type    : Electronics
*/`,
        },
        {
          type: "text",
          content: `### Key Rules of Nested Structures

1. The **inner structure must be declared before** the outer structure.
2. Members of the inner structure are accessed using **two dot operators**: \`outer.inner.member\`.
3. Nesting can be done to **multiple levels** (structure within a structure within a structure).
4. The **size** of the outer structure includes the full size of the nested structure.`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q5 – Cricketer Information Program
    // ────────────────────────────────────────────
    {
      id: "co5-q5",
      title:
        "Write a program using structure to display Cricketer Information: name, total matches, total runs, batting average, total wickets.",
      source: "Jul 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Structure for Cricketer Information

We define a \`struct Cricketer\` with the required fields, then accept data for multiple cricketers and display them in a formatted table.

### Structure Fields

| Field | Data Type | Description |
|-------|-----------|-------------|
| \`name\` | \`char[50]\` | Cricketer's full name |
| \`total_matches\` | \`int\` | Total matches played |
| \`total_runs\` | \`int\` | Total runs scored |
| \`batting_avg\` | \`float\` | Batting average (runs per innings) |
| \`total_wickets\` | \`int\` | Total wickets taken |

### Key Points

- An **array of structures** \`c[MAX]\` stores up to MAX cricketer records.
- \`gets()\` is used to read the name (supports spaces).
- \`getchar()\` is called after each \`scanf()\` to consume the leftover newline before the next \`gets()\`.
- Output is displayed in a **formatted tabular** layout using \`printf\` with width alignment specifiers (\`%-20s\`, \`%8d\`, etc.).`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Cricketer Information",
          content: `#include<stdio.h>
#include<conio.h>

#define MAX 5

struct Cricketer {
    char  name[50];
    int   total_matches;
    int   total_runs;
    float batting_avg;
    int   total_wickets;
};

void main() {
    clrscr();
    struct Cricketer c[MAX];
    int i;

    /* Input */
    for (i = 0; i < MAX; i++) {
        printf("\\nEnter details for Cricketer %d:\\n", i + 1);
        printf("Name           : "); gets(c[i].name);
        printf("Total Matches  : "); scanf("%d",  &c[i].total_matches);
        printf("Total Runs     : "); scanf("%d",  &c[i].total_runs);
        printf("Batting Average: "); scanf("%f",  &c[i].batting_avg);
        printf("Total Wickets  : "); scanf("%d",  &c[i].total_wickets);
        getchar();  /* consume leftover newline */
    }

    /* Display */
    printf("\\n%-20s %8s %8s %8s %8s\\n",
           "Name", "Matches", "Runs", "Avg", "Wickets");
    printf("%-20s %8s %8s %8s %8s\\n",
           "----", "-------", "----", "---", "-------");

    for (i = 0; i < MAX; i++) {
        printf("%-20s %8d %8d %8.2f %8d\\n",
               c[i].name,
               c[i].total_matches,
               c[i].total_runs,
               c[i].batting_avg,
               c[i].total_wickets);
    }

    getch();
}

/*
Sample Output:
Name                  Matches     Runs      Avg  Wickets
----                  -------     ----      ---  -------
Sachin Tendulkar          200    18426    53.78        0
Anil Kumble               132      2506     5.77      619
MS Dhoni                  350     4876    50.57        0
Virat Kohli               274    12898    59.07        4
Rohit Sharma              243    10709    48.96        8
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q6 – Cricket Club Player Data (Tabular Format)
    // ────────────────────────────────────────────
    {
      id: "co5-q6",
      title:
        "A sport club needs to maintain data about cricket players: name, age, matches played, runs, average. Write a program to accept and display data in tabular format.",
      source: "Dec 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Cricket Club Player Data – Tabular Display

We define a \`struct Player\` to store each player's details, accept records, and display them neatly in a formatted table using \`printf\` with width specifiers.

### Structure Fields

| Field | Data Type | Description |
|-------|-----------|-------------|
| \`name\` | \`char[50]\` | Player's full name |
| \`age\` | \`int\` | Player's age |
| \`matches\` | \`int\` | Number of matches played |
| \`runs\` | \`int\` | Total runs scored |
| \`average\` | \`float\` | Batting average |

### Input/Output Approach

- Use an **array of structures** \`p[MAX]\` for multiple players.
- Use \`gets()\` for the name and \`scanf()\` for numeric fields.
- Use \`getchar()\` to flush the newline left by \`scanf()\` before each \`gets()\`.
- Use **%-format** (e.g., \`%-20s\`, \`%5d\`) for column-aligned tabular output.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Cricket Club Player Data",
          content: `#include<stdio.h>
#include<conio.h>

#define MAX 5

struct Player {
    char  name[50];
    int   age;
    int   matches;
    int   runs;
    float average;
};

void main() {
    clrscr();
    struct Player p[MAX];
    int i;

    /* Accept player data */
    for (i = 0; i < MAX; i++) {
        printf("\\nPlayer %d:\\n", i + 1);
        printf("Name    : "); gets(p[i].name);
        printf("Age     : "); scanf("%d", &p[i].age);
        printf("Matches : "); scanf("%d", &p[i].matches);
        printf("Runs    : "); scanf("%d", &p[i].runs);
        printf("Average : "); scanf("%f", &p[i].average);
        getchar();
    }

    /* Display in tabular format */
    printf("\\n");
    printf("%-20s %5s %8s %8s %8s\\n",
           "Player Name", "Age", "Matches", "Runs", "Average");
    printf("%-20s %5s %8s %8s %8s\\n",
           "-----------", "---", "-------", "----", "-------");

    for (i = 0; i < MAX; i++) {
        printf("%-20s %5d %8d %8d %8.2f\\n",
               p[i].name, p[i].age,
               p[i].matches, p[i].runs, p[i].average);
    }

    getch();
}

/*
Sample Output:
Player Name          Age  Matches     Runs  Average
-----------          ---  -------     ----  -------
Virat Kohli           35      274    12898    59.07
Rohit Sharma          36      243    10709    48.96
KL Rahul              31      180     6823    45.82
Shubman Gill          24       89     3562    55.65
Hardik Pandya         30      113     3012    34.22
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q7 – Employer Structure for 5 Employees (Sorted by Code)
    // ────────────────────────────────────────────
    {
      id: "co5-q7",
      title:
        "Define a structure Employer with: employee code, name, salary, designation. Write a program to read data for 5 employees and display records in sorted order of employee code.",
      source: "May 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Employee Structure – Sorted by Employee Code

We define a \`struct Employer\` with four fields, accept 5 employee records, and sort them in **ascending order of employee code** using Bubble Sort.

### Structure Fields

| Field | Data Type | Description |
|-------|-----------|-------------|
| \`code\` | \`int\` | Employee code (sort key) |
| \`name\` | \`char[40]\` | Employee name |
| \`salary\` | \`float\` | Monthly salary (Rs) |
| \`designation\` | \`char[30]\` | Job designation |

### Sorting Logic

- Use **Bubble Sort** comparing \`emp[j].code\` with \`emp[j+1].code\`.
- When a swap is needed, swap the **entire structure** using a temporary \`struct Employer\` variable — this keeps all fields of the record together.

\`\`\`
Example: codes = {105, 101, 108, 103, 112}
After Sort: {101, 103, 105, 108, 112} (ascending)
\`\`\``,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Employee Structure Sorted by Code",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

#define N 5

struct Employer {
    int  code;
    char name[40];
    float salary;
    char designation[30];
};

void main() {
    clrscr();
    struct Employer emp[N], temp;
    int i, j;

    /* Input */
    for (i = 0; i < N; i++) {
        printf("\\nEmployee %d:\\n", i + 1);
        printf("Code        : "); scanf("%d",  &emp[i].code);   getchar();
        printf("Name        : "); gets(emp[i].name);
        printf("Salary      : "); scanf("%f",  &emp[i].salary); getchar();
        printf("Designation : "); gets(emp[i].designation);
    }

    /* Sort by employee code (Bubble Sort) */
    for (i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (emp[j].code > emp[j + 1].code) {
                temp       = emp[j];
                emp[j]     = emp[j + 1];
                emp[j + 1] = temp;
            }
        }
    }

    /* Display sorted records */
    printf("\\nEmployee Records (Sorted by Code):\\n");
    printf("%-6s %-20s %10s %-20s\\n",
           "Code", "Name", "Salary", "Designation");
    printf("%-6s %-20s %10s %-20s\\n",
           "----", "----", "------", "-----------");

    for (i = 0; i < N; i++) {
        printf("%-6d %-20s %10.2f %-20s\\n",
               emp[i].code, emp[i].name,
               emp[i].salary, emp[i].designation);
    }

    getch();
}

/*
Sample Output (sorted by code):
Code   Name                     Salary  Designation
----   ----                     ------  -----------
101    Alice Smith             45000.00 Manager
103    Bob Johnson             38000.00 Developer
105    Carol White             42000.00 Analyst
108    David Brown             35000.00 Tester
112    Eve Davis               50000.00 Director
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q8 – 50 Students Structure Sorted by Percentage (Descending)
    // ────────────────────────────────────────────
    {
      id: "co5-q8",
      title:
        "Write a complete program to implement a structure to store details of 50 students and sort and display information in descending order of their percentage. Details: roll number, student name, percentage.",
      source: "May 2023 / Aug 2023",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Sorting Students by Percentage (Descending)

**Approach:**
1. Define \`struct Student\` with roll, name, and percentage.
2. Accept data for \`n\` students (up to 50).
3. Sort using **Bubble Sort** in **descending** order (swap when \`percentage[j] < percentage[j+1]\`).
4. Display the sorted list.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Student Records Sorted by Percentage (Descending)",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

#define MAX 50

struct Student {
    int   rollno;
    char  name[40];
    float percentage;
};

void main() {
    clrscr();
    struct Student s[MAX], temp;
    int n, i, j;

    printf("Enter number of students (max %d): ", MAX);
    scanf("%d", &n);
    getchar();

    /* Input */
    for (i = 0; i < n; i++) {
        printf("\\nStudent %d:\\n", i + 1);
        printf("Roll No    : "); scanf("%d", &s[i].rollno); getchar();
        printf("Name       : "); gets(s[i].name);
        printf("Percentage : "); scanf("%f", &s[i].percentage); getchar();
    }

    /* Bubble Sort – Descending order of percentage */
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (s[j].percentage < s[j + 1].percentage) {
                temp     = s[j];
                s[j]     = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }

    /* Display */
    printf("\\n%-6s %-25s %12s\\n",
           "Roll", "Name", "Percentage");
    printf("%-6s %-25s %12s\\n",
           "----", "----", "----------");

    for (i = 0; i < n; i++) {
        printf("%-6d %-25s %11.2f%%\\n",
               s[i].rollno, s[i].name, s[i].percentage);
    }

    getch();
}

/*
Sample Output:
Roll   Name                     Percentage
----   ----                     ----------
3      Charlie Brown                 95.50%
1      Alice Smith                   92.30%
5      Eve Davis                     88.75%
2      Bob Johnson                   85.00%
4      David White                   78.40%
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q9 – Hospital Patients – List by Disease
    // ────────────────────────────────────────────
    {
      id: "co5-q9",
      title:
        "A Hospital needs to maintain patient details: first name, surname, date of birth, disease. Write a C program to print the list of all patients with a given disease.",
      source: "Aug 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Hospital Patient Records – Search by Disease

We define a \`struct Patient\` to store patient details and allow listing all patients matching a specific disease name.

### Structure Fields

| Field | Data Type | Description |
|-------|-----------|-------------|
| \`firstname\` | \`char[30]\` | Patient's first name |
| \`surname\` | \`char[30]\` | Patient's surname |
| \`dob\` | \`char[15]\` | Date of birth (DD/MM/YYYY) |
| \`disease\` | \`char[40]\` | Name of the disease |

### Search Logic

1. Accept all patient records into an array of structures.
2. Read the disease name to search from the user.
3. Use \`strcmpi()\` for **case-insensitive** string comparison of disease names (so "diabetes" and "Diabetes" both match).
4. Display all matching patients in a formatted tabular layout.

> **Note:** \`strcmpi()\` is a Turbo C / Borland C function for case-insensitive comparison (equivalent to \`stricmp()\` or \`strcasecmp()\` in other compilers).`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Hospital Patient Records (Filter by Disease)",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

#define MAX 20

struct Patient {
    char firstname[30];
    char surname[30];
    char dob[15];          /* date of birth: DD/MM/YYYY */
    char disease[40];
};

void main() {
    clrscr();
    struct Patient p[MAX];
    char search[40];
    int n, i, found = 0;

    printf("Enter number of patients: ");
    scanf("%d", &n);
    getchar();

    /* Input */
    for (i = 0; i < n; i++) {
        printf("\\nPatient %d:\\n", i + 1);
        printf("First Name : "); gets(p[i].firstname);
        printf("Surname    : "); gets(p[i].surname);
        printf("DOB (DD/MM/YYYY): "); gets(p[i].dob);
        printf("Disease    : "); gets(p[i].disease);
    }

    /* Search by disease */
    printf("\\nEnter disease name to search: ");
    gets(search);

    printf("\\n--- Patients with \\'%s\\' ---\\n", search);
    printf("%-15s %-15s %-15s %-20s\\n",
           "First Name", "Surname", "DOB", "Disease");
    printf("%-15s %-15s %-15s %-20s\\n",
           "----------", "-------", "---", "-------");

    for (i = 0; i < n; i++) {
        /* Case-insensitive comparison */
        if (strcmpi(p[i].disease, search) == 0) {
            printf("%-15s %-15s %-15s %-20s\\n",
                   p[i].firstname, p[i].surname,
                   p[i].dob, p[i].disease);
            found = 1;
        }
    }

    if (!found) {
        printf("No patients found with disease: %s\\n", search);
    }

    getch();
}

/*
Sample Output:
Enter disease to search: Diabetes

--- Patients with 'Diabetes' ---
First Name      Surname         DOB             Disease
----------      -------         ---             -------
Ravi            Kumar           12/03/1975      Diabetes
Sunita          Sharma          05/07/1980      Diabetes
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q10 – Player Structure Sorted by Batting Average (Descending)
    // ────────────────────────────────────────────
    {
      id: "co5-q10",
      title:
        "Define a structure called Player with: player name, team name, batting average. Create an array of structures, store information about players, sort and display in descending order of batting average.",
      source: "Aug 2023 / Aug 2025",
      marks: 10,
      blocks: [
        {
          type: "text",
          content: `## Player Structure – Sorted by Batting Average (Descending)

**Approach:**
1. Define \`struct Player\` with name, team, and batting average.
2. Accept \`n\` player records.
3. Sort using **Bubble Sort** in **descending** order of batting average.
4. Display the ranked list.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Player Structure Sorted by Batting Average",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

#define MAX 20

struct Player {
    char  player_name[40];
    char  team_name[40];
    float batting_avg;
};

void main() {
    clrscr();
    struct Player pl[MAX], temp;
    int n, i, j;

    printf("Enter number of players: ");
    scanf("%d", &n);
    getchar();

    /* Input */
    for (i = 0; i < n; i++) {
        printf("\\nPlayer %d:\\n", i + 1);
        printf("Player Name  : "); gets(pl[i].player_name);
        printf("Team Name    : "); gets(pl[i].team_name);
        printf("Batting Avg  : "); scanf("%f", &pl[i].batting_avg);
        getchar();
    }

    /* Bubble Sort – Descending order of batting_avg */
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (pl[j].batting_avg < pl[j + 1].batting_avg) {
                temp      = pl[j];
                pl[j]     = pl[j + 1];
                pl[j + 1] = temp;
            }
        }
    }

    /* Display ranked list */
    printf("\\n%-5s %-20s %-20s %10s\\n",
           "Rank", "Player", "Team", "Batting Avg");
    printf("%-5s %-20s %-20s %10s\\n",
           "----", "------", "----", "-----------");

    for (i = 0; i < n; i++) {
        printf("%-5d %-20s %-20s %10.2f\\n",
               i + 1,
               pl[i].player_name,
               pl[i].team_name,
               pl[i].batting_avg);
    }

    getch();
}

/*
Sample Output:
Rank  Player               Team                 Batting Avg
----  ------               ----                 -----------
1     Steve Smith          Australia                  59.55
2     Virat Kohli          India                      59.07
3     Kane Williamson      New Zealand                54.98
4     Joe Root             England                    51.50
5     Rohit Sharma         India                      48.96
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q11 – Employee Structure Sorted by Name
    // ────────────────────────────────────────────
    {
      id: "co5-q11",
      title:
        "Write a program to create a structure for an employee with members: id, name, salary. Display them in sorted order by name.",
      source: "Jun 2025",
      marks: 10,
      blocks: [
        {
          type: "text",
          content: `## Sorting Employees by Name (Alphabetical Order)

To sort by name we use **\`strcmp()\`** for comparison. If \`strcmp(emp[j].name, emp[j+1].name) > 0\`, it means \`emp[j].name\` comes after \`emp[j+1].name\` alphabetically, so we swap.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Employee Records Sorted by Name",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

#define MAX 20

struct Employee {
    int   id;
    char  name[40];
    float salary;
};

void main() {
    clrscr();
    struct Employee emp[MAX], temp;
    int n, i, j;

    printf("Enter number of employees: ");
    scanf("%d", &n);
    getchar();

    /* Input */
    for (i = 0; i < n; i++) {
        printf("\\nEmployee %d:\\n", i + 1);
        printf("ID     : "); scanf("%d", &emp[i].id); getchar();
        printf("Name   : "); gets(emp[i].name);
        printf("Salary : "); scanf("%f", &emp[i].salary); getchar();
    }

    /* Bubble Sort – Ascending order by name */
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            /* strcmp > 0 means emp[j].name comes after emp[j+1].name */
            if (strcmp(emp[j].name, emp[j + 1].name) > 0) {
                temp       = emp[j];
                emp[j]     = emp[j + 1];
                emp[j + 1] = temp;
            }
        }
    }

    /* Display */
    printf("\\nEmployee Records (Sorted by Name):\\n");
    printf("%-6s %-25s %10s\\n", "ID", "Name", "Salary");
    printf("%-6s %-25s %10s\\n", "--", "----", "------");

    for (i = 0; i < n; i++) {
        printf("%-6d %-25s %10.2f\\n",
               emp[i].id, emp[i].name, emp[i].salary);
    }

    getch();
}

/*
Sample Output:
Employee Records (Sorted by Name):
ID     Name                     Salary
--     ----                     ------
103    Alice Johnson              38000.00
108    Bob Brown                  35000.00
105    Carol White                42000.00
101    David Smith                45000.00
112    Eve Davis                  50000.00
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q12 – Union in Detail with Example
    // ────────────────────────────────────────────
    {
      id: "co5-q12",
      title:
        "Explain Union in detail with example.",
      source: "Aug 2025",
      marks: 5,
      blocks: [
        {
          type: "text",
          content: `## Union in C

A **union** is a user-defined data type in C in which **all members share the same memory location**. The size of a union is equal to the size of its **largest member**.

### Syntax

\`\`\`c
union union_name {
    data_type member1;
    data_type member2;
    ...
};
\`\`\`

### Key Characteristics

| Property | Description |
|----------|-------------|
| **Memory sharing** | All members occupy the **same** memory address |
| **Size** | Equal to the size of the **largest member** |
| **One at a time** | Only **one member** should be used at a time |
| **Last write wins** | The last member assigned overwrites previous data |

### When to Use Unions

- When only **one** member needs to be active at a time (e.g., a value that can be int or float but not both simultaneously).
- To **save memory** in embedded systems or when storing data in variant format.
- Implementing **type-punning** (interpreting the same bytes as different types).

### Union vs Structure – Memory Comparison

| | \`struct\` | \`union\` |
|--|-----------|---------|
| \`int\` (4 bytes) | 4 bytes own space | ← shared |
| \`float\` (4 bytes) | 4 bytes own space | ← shared |
| \`char\` (1 byte) | 1 byte own space | ← shared |
| **Total** | **9 bytes** (min) | **4 bytes** |`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Union with Detailed Demonstration",
          content: `#include<stdio.h>
#include<conio.h>

union Value {
    int   ival;
    float fval;
    char  cval;
};

void main() {
    clrscr();
    union Value v;

    printf("Size of union Value = %d bytes\\n\\n", sizeof(v));

    /* Only one member is valid at a time */
    v.ival = 65;
    printf("After v.ival = 65:\\n");
    printf("  v.ival  = %d\\n",   v.ival);
    printf("  v.cval  = %c\\n\\n", v.cval);  /* 65 is ASCII 'A' */

    v.fval = 3.14f;
    printf("After v.fval = 3.14:\\n");
    printf("  v.fval  = %.2f\\n", v.fval);
    printf("  v.ival  = %d   (now garbage!)\\n\\n", v.ival);

    v.cval = 'Z';
    printf("After v.cval = 'Z':\\n");
    printf("  v.cval  = %c\\n",   v.cval);
    printf("  v.ival  = %d\\n",   v.ival);   /* only first byte changed */

    getch();
}

/*
Output:
Size of union Value = 4 bytes

After v.ival = 65:
  v.ival  = 65
  v.cval  = A

After v.fval = 3.14:
  v.fval  = 3.14
  v.ival  = 1078523331   (now garbage!)

After v.cval = 'Z':
  v.cval  = Z
  v.ival  = 1078523482
*/`,
        },
        {
          type: "text",
          content: `### Practical Use Case: Sensor Data

A sensor can either report an integer count or a floating-point temperature — never both at once. Using a union saves memory:

\`\`\`c
union SensorData {
    int   count;
    float temperature;
};

struct Sensor {
    int            type;        /* 0 = count, 1 = temperature */
    union SensorData data;
};
\`\`\`

This is a common pattern in **embedded systems** and **protocol parsers**.`,
        },
      ],
    },
  ],
}
