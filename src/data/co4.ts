import type { CourseOutcome } from "@/types"

export const co4: CourseOutcome = {
  id: "co4",
  title: "CO4: Arrays and Strings",
  shortTitle: "CO4",
  description: "Array declaration, initialization, matrix operations, searching, sorting, and string handling in C.",
  icon: "Layers",
  color: "violet",
  questions: [
    {
      id: "co4-q1",
      title: "What is an array? Explain the various ways to initialize array using example.",
      source: "May 2024 / Aug 2023 / May 2023",
      marks: 8,
      notes: `**Array = same-type elements stored in contiguous memory locations and accessed using an index.**

## Quick points to remember
- Index of first element is **0**.
- Array size is fixed at declaration time.
- All elements must be of the **same data type**.
- Because memory is contiguous, traversal using loops is easy and efficient.

## Common initialization styles
| Method | Example | Meaning |
|---|---|---|
| Full initialization | \`int a[5] = {1, 2, 3, 4, 5};\` | All values supplied |
| Size omitted | \`int a[] = {10, 20, 30};\` | Compiler counts elements |
| Partial initialization | \`int a[5] = {1, 2};\` | Remaining elements become 0 |
| Character array as string | \`char name[] = "C Programming";\` | Compiler adds terminating null character |

## Exam tip
If the question asks for **declaration and initialization**, write both syntax and one worked example.`,
      blocks: [
        {
          type: "text",
          content: `## Definition of Array

An **array** is a collection of elements of the **same data type** stored in **contiguous memory locations**. Each element is identified by an **index**.

### Declaration Syntax
\`data_type array_name[size];\`

### Examples of Declaration
- \`int marks[5];\`
- \`float price[10];\`
- \`char city[20];\`

## Ways to Initialize an Array

### 1. Full Initialization
All elements are supplied when the array is declared.

### 2. Initialization Without Mentioning Size
The compiler automatically counts the number of elements.

### 3. Partial Initialization
If fewer values are supplied, the remaining elements are initialized to **0**.

### 4. Character Array Initialization
A string can be stored inside a character array and it ends with the null character \`'\\0'\`.

## Array Features
| Feature | Explanation |
|---|---|
| Data type | Same type for all elements |
| Storage | Contiguous memory |
| Access | By index such as \`a[0]\`, \`a[1]\` |
| Size | Fixed when declared |
| Use | Storing marks, numbers, matrix rows, characters |

## Advantages
- Easy processing using loops
- Fast random access using index
- Useful for lists, tables, and matrices`,
        },
        {
          type: "code",
          language: "c",
          title: "Declaration and initialization of arrays",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();

    int a[5] = {10, 20, 30, 40, 50};     // full initialization
    int b[] = {1, 2, 3, 4};              // size inferred by compiler
    int c[5] = {7, 8};                   // partial initialization
    char name[] = "ARRAY";              // character array (string)
    int i;

    printf("Array a: ");
    for(i = 0; i < 5; i++)
        printf("%d ", a[i]);

    printf("\nArray b: ");
    for(i = 0; i < 4; i++)
        printf("%d ", b[i]);

    printf("\nArray c: ");
    for(i = 0; i < 5; i++)
        printf("%d ", c[i]);

    printf("\nString stored in name = %s", name);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Memory layout of a one-dimensional array",
          content: `graph LR
    A["a[0]<br/>10"] --> B["a[1]<br/>20"]
    B --> C["a[2]<br/>30"]
    C --> D["a[3]<br/>40"]
    D --> E["a[4]<br/>50"]
    F["Contiguous memory"] --> A`,
        },
      ],
    },
    {
      id: "co4-q2",
      title: "Write a C program to display sum of diagonal and non-diagonal elements of a matrix.",
      source: "Jul 2022",
      marks: 8,
      notes: `**Main diagonal elements satisfy \`i == j\`; all remaining elements are non-diagonal.**

## Logic
1. Read matrix order and elements.
2. Traverse every element using nested loops.
3. If row index equals column index, add to diagonal sum.
4. Otherwise, add to non-diagonal sum.

## Dry run for 3 x 3 matrix
| Element | Position | Type |
|---|---|---|
| 1 | (0,0) | Diagonal |
| 5 | (1,1) | Diagonal |
| 9 | (2,2) | Diagonal |
| Remaining | others | Non-diagonal |

## Important note
This program is meant for a **square matrix** because a diagonal is defined when number of rows equals number of columns.`,
      blocks: [
        {
          type: "text",
          content: `## Matrix Diagonal Concept

In a square matrix, the elements from the **top-left corner to the bottom-right corner** form the **main diagonal**.

For a matrix \`a[i][j]\`:
- If \`i == j\` → diagonal element
- If \`i != j\` → non-diagonal element

### Example Matrix
| 1 | 2 | 3 |
|---|---|---|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

Diagonal sum = \`1 + 5 + 9 = 15\`

Non-diagonal sum = \`2 + 3 + 4 + 6 + 7 + 8 = 30\`

## Algorithm
1. Start
2. Read order \`n\` of matrix
3. Read all matrix elements
4. Initialize \`diagSum = 0\` and \`nonDiagSum = 0\`
5. Use nested loops to visit each element
6. If \`i == j\`, add element to \`diagSum\`
7. Else add element to \`nonDiagSum\`
8. Display both sums
9. Stop`,
        },
        {
          type: "code",
          language: "c",
          title: "Sum of diagonal and non-diagonal elements",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int a[10][10], i, j, n;
    int diagSum = 0, nonDiagSum = 0;

    printf("Enter order of square matrix: ");
    scanf("%d", &n);

    printf("Enter matrix elements:\n");
    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    printf("\nMatrix is:\n");
    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            printf("%4d", a[i][j]);
        }
        printf("\n");
    }

    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            if(i == j)
                diagSum = diagSum + a[i][j];
            else
                nonDiagSum = nonDiagSum + a[i][j];
        }
    }

    printf("\nSum of diagonal elements = %d", diagSum);
    printf("\nSum of non-diagonal elements = %d", nonDiagSum);

    getch();
}`,
        },
        {
          type: "diagram",
          title: "How matrix elements are classified",
          content: `graph TD
    A["Read matrix"] --> B{"Is i == j ?"}
    B -->|Yes| C["Add element to diagonal sum"]
    B -->|No| D["Add element to non-diagonal sum"]
    C --> E["Move to next element"]
    D --> E
    E --> B`,
        },
      ],
    },
    {
      id: "co4-q3",
      title: "Explain various string functions in C programming with suitable examples.",
      source: "May 2023 / Jun 2025",
      marks: 10,
      notes: `**String functions are declared in \`<string.h>\` and operate on character arrays ending with \`'\\0'\`.**

## Most asked functions
| Function | Purpose |
|---|---|
| \`strlen()\` | Finds length of string |
| \`strcpy()\` | Copies one string into another |
| \`strcat()\` | Concatenates two strings |
| \`strcmp()\` | Compares two strings |
| \`strlwr()\` | Converts string to lowercase (compiler-specific) |

## Important caution
- Destination array in \`strcpy()\` and \`strcat()\` must have enough space.
- \`strcmp()\` returns **0** when strings are equal.
- \`strlwr()\` is common in Turbo C but is **not part of the ANSI C standard**.`,
      blocks: [
        {
          type: "text",
          content: `## String Functions in C

A **string** in C is a character array terminated by the null character \`'\\0'\`. String manipulation functions are available in the header file \`<string.h>\`.

### 1. \`strlen(str)\`
Returns the number of characters in the string excluding the null character.

### 2. \`strcpy(dest, src)\`
Copies the source string into the destination string.

### 3. \`strcat(dest, src)\`
Appends the source string to the end of the destination string.

### 4. \`strcmp(str1, str2)\`
Compares two strings lexicographically.
- Returns 0 if both strings are equal
- Returns negative or positive value otherwise

### 5. \`strlwr(str)\`
Converts all uppercase letters to lowercase. It is commonly available in older compilers such as Turbo C.

## Summary Table
| Function | Syntax | Example Result |
|---|---|---|
| \`strlen()\` | \`strlen(name)\` | \`"RAM"\` gives 3 |
| \`strcpy()\` | \`strcpy(a, b)\` | copies \`b\` into \`a\` |
| \`strcat()\` | \`strcat(a, b)\` | joins both strings |
| \`strcmp()\` | \`strcmp(a, b)\` | 0 if equal |
| \`strlwr()\` | \`strlwr(name)\` | converts to lowercase |`,
        },
        {
          type: "code",
          language: "c",
          title: "Demonstration of common string functions",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
    clrscr();
    char s1[50] = "Hello";
    char s2[50] = "World";
    char copy[50];
    int result;

    printf("Length of s1 = %d\n", strlen(s1));

    strcpy(copy, s1);
    printf("After strcpy, copy = %s\n", copy);

    strcat(s1, s2);
    printf("After strcat, s1 = %s\n", s1);

    result = strcmp("abc", "abc");
    printf("Result of strcmp(abc, abc) = %d\n", result);

    printf("Lowercase of WORLD = %s\n", strlwr(s2));

    getch();
}`,
        },
        {
          type: "diagram",
          title: "Effect of selected string functions",
          content: `graph LR
    A["s1 = Hello"] --> B["strlen(s1) = 5"]
    A --> C["strcpy(copy, s1) -> copy = Hello"]
    A --> D["strcat(s1, World) -> HelloWorld"]
    E["abc and abc"] --> F["strcmp() = 0"]
    G["WORLD"] --> H["strlwr() -> world"]`,
        },
      ],
    },
  ],
}
