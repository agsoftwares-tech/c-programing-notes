import type { CourseOutcome } from "@/types"

export const co5: CourseOutcome = {
  id: "co5",
  title: "CO5: Structures and Unions",
  shortTitle: "CO5",
  description: "Structure declaration, nested records, unions, and sorting/displaying records using arrays of structures.",
  icon: "Star",
  color: "cyan",
  questions: [
    {
      id: "co5-q1",
      title: "Explain the syntax of structure declaration with an example.",
      source: "Jul 2022 / May 2024",
      marks: 2,
      notes: `**A structure groups related variables of different data types under one name by using the \`struct\` keyword.**

## Basic syntax
\`struct StructureName { data_type member1; data_type member2; };\`

## Access rule
Use the **dot operator** to access members of a structure variable, for example \`p.x\` and \`p.y\`.`,
      blocks: [
        {
          type: "text",
          content: `## Structure Declaration in C

A **structure** is a user-defined data type used to combine variables of **different data types** into one record.

### General Syntax
\`struct tag_name {\`
\`    data_type member1;\`
\`    data_type member2;\`
\`};\`

### Steps
1. Define the structure
2. Declare structure variable
3. Access members using dot operator

### Example Idea
If a point has two coordinates \`x\` and \`y\`, both values can be stored together using one structure variable.

## Difference from Array
| Feature | Array | Structure |
|---|---|---|
| Data types | Same type only | Different types allowed |
| Access | By index | By member name |
| Example use | List of marks | Student record, employee record |`,
        },
        {
          type: "code",
          language: "c",
          title: "Structure declaration and initialization of Point",
          content: `#include<stdio.h>
#include<conio.h>

struct Point {
    int x;
    int y;
};

void main() {
    clrscr();
    struct Point p = {10, 20};

    printf("Point coordinates are P(%d, %d)", p.x, p.y);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Point structure record",
          content: `graph TD
    A["struct Point"] --> B["x = 10"]
    A --> C["y = 20"]
    D["p.x"] --> B
    E["p.y"] --> C`,
        },
      ],
    },
    {
      id: "co5-q2",
      title: "Differentiate between structure and union.",
      source: "Jul 2022 / Dec 2022 / Jun 2025",
      marks: 5,
      notes: `**Structure stores all members separately, but union shares the same memory among all members.**

## One-line memory rule
- **Structure size** is approximately the sum of member sizes.
- **Union size** is the size of its largest member.

## Exam tip
In theory answers, write at least **4 to 5 differences** and one small example.`,
      blocks: [
        {
          type: "text",
          content: `## Structure vs Union in C

Both **structure** and **union** are user-defined data types in C. They allow grouping of related variables of different data types under one name. The key difference is in **how memory is allocated**.

---

### Memory Allocation

- **Structure:** Each member gets its **own separate memory location**. The total size of a structure is (approximately) the **sum of the sizes of all its members** (may include padding bytes added by the compiler for alignment).

- **Union:** All members **share the same memory location**. The total size of a union equals the size of its **largest member**. Only one member can reliably hold a value at a time.

**Example:**
\`\`\`c
struct S { int i;   float f;  char c; }; /* size ≈ 4+4+1 = 9 (+ padding = 12 bytes) */
union  U { int i;   float f;  char c; }; /* size = 4 bytes (largest member = int/float) */
\`\`\`

---

### Comparison Table

| Basis | Structure (\`struct\`) | Union (\`union\`) |
|---|---|---|
| Keyword | \`struct\` | \`union\` |
| Memory allocation | **Separate** memory for every member | **Shared** memory block for all members |
| Total size | Sum of all member sizes (with alignment padding) | Size of the **largest** member |
| Members active at once | **All** members can hold values simultaneously | Only **one** member value is reliable at a time |
| Overwriting | Changing one member does **not** affect others | Assigning to one member **overwrites** the shared memory |
| Typical use | Complete records — student, employee, product | Memory-saving when only one field is used at a time |
| Access | Using dot operator: \`s.member\` | Using dot operator: \`u.member\` |

---

### Example: Writing a New Member in Union Corrupts Others

If \`union U\` has members \`int i\`, \`float f\`, and \`char c\`:
- After \`u.i = 101;\` — the 4-byte block stores the integer 101.
- After \`u.f = 82.5;\` — the same block is overwritten with the float 82.5. The previous integer value is no longer meaningful.
- After \`u.c = 'A';\` — only 1 byte is modified; \`u.i\` and \`u.f\` are now unpredictable.

**In a structure**, all three members exist at different addresses, so changing \`s.f\` never touches \`s.i\`.`,
        },
        {
          type: "code",
          language: "c",
          title: "Structure and union — memory size comparison",
          content: `#include<stdio.h>
#include<conio.h>

struct StudentStruct {
    int   roll;          /* 4 bytes */
    float percentage;    /* 4 bytes */
    char  grade;         /* 1 byte  */
};                       /* total ~ 12 bytes (with alignment padding) */

union StudentUnion {
    int   roll;          /* 4 bytes */
    float percentage;    /* 4 bytes */
    char  grade;         /* 1 byte  */
};                       /* total = 4 bytes (size of largest member) */

void main() {
    clrscr();

    struct StudentStruct s;
    union  StudentUnion  u;

    /* In structure: all members can hold values at the same time */
    s.roll       = 101;
    s.percentage = 82.5;
    s.grade      = 'A';

    printf("=== Structure ===\\n");
    printf("Roll       = %d\\n", s.roll);
    printf("Percentage = %.2f\\n", s.percentage);
    printf("Grade      = %c\\n", s.grade);
    printf("Size of structure = %u bytes\\n\\n", sizeof(s));

    /* In union: only the LAST assigned member is reliable */
    u.roll = 101;
    printf("=== Union (after u.roll = 101) ===\\n");
    printf("u.roll = %d\\n", u.roll);

    u.percentage = 82.5;         /* overwrites the shared memory */
    printf("=== Union (after u.percentage = 82.5) ===\\n");
    printf("u.percentage = %.2f  (reliable)\\n", u.percentage);
    printf("u.roll       = %d    (unreliable -- corrupted)\\n", u.roll);

    printf("\\nSize of union = %u bytes\\n", sizeof(u));

    getch();
}

/*
Output:
=== Structure ===
Roll       = 101
Percentage = 82.50
Grade      = A
Size of structure = 12 bytes

=== Union (after u.roll = 101) ===
u.roll = 101
=== Union (after u.percentage = 82.5) ===
u.percentage = 82.50  (reliable)
u.roll       = 1117745152    (unreliable -- corrupted)

Size of union = 4 bytes
*/`,
        },
        {
          type: "diagram",
          title: "Separate memory (structure) vs shared memory (union)",
          content: `graph TD
    subgraph Structure["Structure — each member has its own block"]
        A1["roll<br/>addr: 1000<br/>4 bytes"]
        A2["percentage<br/>addr: 1004<br/>4 bytes"]
        A3["grade<br/>addr: 1008<br/>1 byte"]
    end
    subgraph Union["Union — all members share ONE block (4 bytes)"]
        B1["Shared 4-byte block<br/>(addr: 2000)"]
        B2["roll  → uses bytes 0-3"]
        B3["percentage → uses bytes 0-3"]
        B4["grade → uses byte 0 only"]
        B1 --> B2
        B1 --> B3
        B1 --> B4
    end
    style A1 fill:#6366f1,color:#fff
    style A2 fill:#8b5cf6,color:#fff
    style A3 fill:#06b6d4,color:#fff
    style B1 fill:#f59e0b,color:#fff`,
        },
      ],
    },
    {
      id: "co5-q3",
      title: "Define a structure called Player with data members player name, team name, batting average. Store information, sort and display players in descending order of batting average.",
      source: "Aug 2023 / Aug 2025",
      marks: 10,
      notes: `**This is an array-of-structures plus sorting question.**

## Required steps
1. Define \`struct Player\`
2. Read records into an array
3. Compare batting averages
4. Swap full records, not just one field
5. Display sorted list in descending order

## Sorting rule
If \`player[i].avg < player[j].avg\`, swap both records so that higher average comes first.`,
      blocks: [
        {
          type: "text",
          content: `## Explanation

Here each player record contains multiple fields, so a **structure** is required. Since there are many players, we use an **array of structures**.

### Structure Used
- \`name\` for player name
- \`team\` for team name
- \`average\` for batting average

### Sorting Method
A simple nested-loop comparison is used:
- Compare batting averages of two players
- If the first average is smaller than the second, swap the complete records
- After all passes, the array becomes sorted in **descending order**

## Data View
| Field | Purpose |
|---|---|
| \`name\` | Stores player name |
| \`team\` | Stores team name |
| \`average\` | Used for sorting |

## Why swap full structures?
Because name, team, and average belong to the same player record. Swapping only the average would corrupt the data.`,
        },
        {
          type: "code",
          language: "c",
          title: "Sort players by batting average in descending order",
          content: `#include<stdio.h>
#include<conio.h>

struct Player {
    char name[50];
    char team[50];
    float average;
};

void main() {
    clrscr();
    struct Player p[10], temp;
    int n, i, j;

    printf("Enter number of players: ");
    scanf("%d", &n);

    for(i = 0; i < n; i++) {
        printf("\nEnter details of player %d\n", i + 1);

        printf("Name: ");
        scanf(" %[^\n]", p[i].name);

        printf("Team: ");
        scanf(" %[^\n]", p[i].team);

        printf("Batting Average: ");
        scanf("%f", &p[i].average);
    }

    for(i = 0; i < n - 1; i++) {
        for(j = i + 1; j < n; j++) {
            if(p[i].average < p[j].average) {
                temp = p[i];
                p[i] = p[j];
                p[j] = temp;
            }
        }
    }

    printf("\n%-5s %-20s %-20s %s\n", "No.", "Player Name", "Team Name", "Average");
    printf("---------------------------------------------------------------\n");
    for(i = 0; i < n; i++) {
        printf("%-5d %-20s %-20s %.2f\n", i + 1, p[i].name, p[i].team, p[i].average);
    }

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Sorting players by batting average",
          content: `graph TD
    A["Read array of Player records"] --> B["Compare averages"]
    B --> C{"p[i].average < p[j].average ?"}
    C -->|Yes| D["Swap complete Player records"]
    C -->|No| E["Keep order"]
    D --> F["Continue comparisons"]
    E --> F
    F --> G["Display descending order list"]`,
        },
      ],
    },
  ],
}
