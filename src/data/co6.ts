import type { CourseOutcome } from "@/types"

export const co6: CourseOutcome = {
  id: "co6",
  title: "CO6: Pointers, File Handling, and Memory Management",
  shortTitle: "CO6",
  description: "Pointer basics, pointer arithmetic, swapping through pointers, and array-pointer relationships in C.",
  icon: "Repeat",
  color: "emerald",
  questions: [
    {
      id: "co6-q1",
      title: "What is the relation between arrays and pointers? Explain with an example.",
      source: "Dec 2022",
      marks: 4,
      notes: `**Array name represents the base address of the first element, so pointers can be used to access array elements.**

## Key identities
- \`arr\` gives the base address of the array
- \`arr + i\` points to the i-th element
- \`*(arr + i)\` is the same as \`arr[i]\`

## Important note
An array name behaves like a constant pointer to the first element, so you can assign \`p = arr\`, but you cannot do \`arr = p\`.`,
      blocks: [
        {
          type: "text",
          content: `## Relation Between Arrays and Pointers

Arrays and pointers are closely related in C.

If we declare:
\`int arr[5] = {10, 20, 30, 40, 50};\`

then:
- \`arr\` represents the address of the first element
- \`arr[0]\` is same as \`*arr\`
- \`arr[1]\` is same as \`*(arr + 1)\`
- \`arr[i]\` is same as \`*(arr + i)\`

A pointer can be used to traverse an array because the elements are stored in contiguous memory locations.

## Example Table
| Expression | Meaning |
|---|---|
| \`arr\` | base address of first element |
| \`arr + 1\` | address of second element |
| \`*arr\` | value of first element |
| \`*(arr + 2)\` | value of third element |`,
        },
        {
          type: "code",
          language: "c",
          title: "Array and pointer access demonstration",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[5] = {10, 20, 30, 40, 50};
    int *p;
    int i;

    p = arr;   // p stores base address of arr

    printf("Using array notation:\n");
    for(i = 0; i < 5; i++)
        printf("arr[%d] = %d\n", i, arr[i]);

    printf("\nUsing pointer notation:\n");
    for(i = 0; i < 5; i++)
        printf("*(p + %d) = %d\n", i, *(p + i));

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Pointer moving through array",
          content: `graph LR
    P["p = arr"] --> A["arr[0]<br/>10"]
    A --> B["arr[1]<br/>20"]
    B --> C["arr[2]<br/>30"]
    C --> D["arr[3]<br/>40"]
    D --> E["arr[4]<br/>50"]
    F["*(p + 2) = 30"] --> C`,
        },
      ],
    },
    {
      id: "co6-q2",
      title: "Write a program to swap two numbers using pointers.",
      source: "Dec 2022",
      marks: 8,
      notes: `**Swapping through pointers changes the original variables because addresses are passed to the function.**

## Pointer operators used
| Operator | Use |
|---|---|
| \`&\` | gives address of a variable |
| \`*\` | accesses value stored at an address |

## Exam tip
When writing call-by-reference programs, remember:
- Function definition uses pointer parameters
- Function call passes addresses such as \`swap(&a, &b);\``,
      blocks: [
        {
          type: "text",
          content: `## Idea of Swapping Using Pointers

C normally passes arguments by value. Therefore, if we want to modify the original variables, we pass their **addresses** to a function.

Inside the function:
- \`*p\` accesses the value of the first variable
- \`*q\` accesses the value of the second variable
- A temporary variable is used to exchange the values safely

## Step-by-step Logic
1. Read two numbers
2. Pass their addresses to \`swap()\`
3. Store first value in \`temp\`
4. Assign second value to first location
5. Assign \`temp\` to second location
6. Print swapped values`,
        },
        {
          type: "code",
          language: "c",
          title: "Swap two numbers using pointers",
          content: `#include<stdio.h>
#include<conio.h>

void swap(int *p, int *q) {
    int temp;
    temp = *p;
    *p = *q;
    *q = temp;
}

void main() {
    clrscr();
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Before swap: a = %d, b = %d\n", a, b);

    swap(&a, &b);

    printf("After swap:  a = %d, b = %d\n", a, b);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Address-based swapping",
          content: `graph TD
    A["a = 5"] --> B["swap(&a, &b)"]
    C["b = 10"] --> B
    B --> D["p points to a"]
    B --> E["q points to b"]
    D --> F["temp = *p"]
    E --> G["*p = *q"]
    F --> H["*q = temp"]
    G --> I["a = 10"]
    H --> J["b = 5"]`,
        },
      ],
    },
    {
      id: "co6-q3",
      title: `Write the output of the following program: int x = 10, y, *ip; ip = &x; y = (*ip)++; printf("%d", y); printf("%d", x);`,
      source: "Dec 2022",
      marks: 2,
      notes: `**Post-increment returns the old value first and increments later.**

For \`y = (*ip)++;\`
- \`*ip\` currently refers to \`x\`
- Old value \`10\` is assigned to \`y\`
- Then \`x\` becomes \`11\`

So the output values are **10** and **11**.`,
      blocks: [
        {
          type: "text",
          content: `## Step-by-step Evaluation

Given statements:

1. \`int x = 10, y, *ip;\`
2. \`ip = &x;\`
3. \`y = (*ip)++;\`

After statement 2, pointer \`ip\` stores the address of \`x\`.

In statement 3, \`(*ip)++\` means **use the current value first, then increment it**.
So:
- Current value pointed by \`ip\` = 10
- \`y\` gets 10
- Then \`x\` becomes 11

## Trace Table
| Step | x | y | *ip |
|---|---|---|---|
| Initial | 10 | garbage | not assigned |
| After \`ip = &x\` | 10 | garbage | 10 |
| After \`y = (*ip)++\` | 11 | 10 | 11 |

## Final Output
- First \`printf\` prints **10**
- Second \`printf\` prints **11**`,
        },
        {
          type: "code",
          language: "c",
          title: "Pointer post-increment example",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int x = 10, y, *ip;

    ip = &x;
    y = (*ip)++;

    printf("y = %d\n", y);
    printf("x = %d\n", x);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "What happens during (*ip)++",
          content: `graph LR
    A["x = 10"] --> B["ip points to x"]
    B --> C["y gets old value 10"]
    C --> D["x is incremented to 11"]`,
        },
      ],
    },
  ],
}
