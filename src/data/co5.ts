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
          content: `## Structure vs Union

Both structure and union are user-defined data types in C, but they differ in **memory allocation** and **usage**.

| Basis | Structure | Union |
|---|---|---|
| Keyword | \`struct\` | \`union\` |
| Memory allocation | Separate memory for every member | Common memory shared by all members |
| Size | Sum of member sizes (plus padding if any) | Size of the largest member |
| Simultaneous values | All members can hold values together | Only one member value is reliable at a time |
| Modification effect | Changing one member does not affect others | Changing one member affects the shared memory |
| Use | Complete records such as student, employee | Memory-saving situations |

### Example Meaning
If a structure has \`int\`, \`float\`, and \`char\`, all three members can store values together.

In a union, the same memory block is reused, so writing a new member overwrites the previous stored representation.`,
        },
        {
          type: "code",
          language: "c",
          title: "Structure and union comparison example",
          content: `#include<stdio.h>
#include<conio.h>

struct StudentStruct {
    int roll;
    float percentage;
    char grade;
};

union StudentUnion {
    int roll;
    float percentage;
    char grade;
};

void main() {
    clrscr();
    struct StudentStruct s = {101, 82.5, 'A'};
    union StudentUnion u;

    u.roll = 101;
    u.percentage = 82.5;
    u.grade = 'A';

    printf("Structure values: %d %.2f %c\n", s.roll, s.percentage, s.grade);
    printf("Size of structure = %u\n", sizeof(s));
    printf("Size of union = %u\n", sizeof(u));
    printf("In union, only the last assigned member is safely meaningful: %c\n", u.grade);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Separate memory vs shared memory",
          content: `graph TD
    subgraph Structure
        A1["roll"]
        A2["percentage"]
        A3["grade"]
    end
    subgraph Union
        B1["Shared memory block"]
        B2["roll / percentage / grade use the same block"]
    end`,
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
