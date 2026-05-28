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

An **array** is a collection of elements of the **same data type** stored in **contiguous (adjacent) memory locations**. Each element is identified by an **index** (subscript) starting from **0**.

**Formal Definition:** An array is a derived data type in C that allows storing multiple values of the same type under a single variable name.

### Declaration Syntax
\`data_type  array_name[size];\`

| Part | Meaning |
|---|---|
| \`data_type\` | Type of all elements (int, float, char, …) |
| \`array_name\` | Name given to the array |
| \`size\` | Maximum number of elements the array can hold |

### Examples of Declaration
\`\`\`c
int   marks[5];      /* array of 5 integers  */
float price[10];     /* array of 10 floats   */
char  city[20];      /* array of 20 chars    */
\`\`\`

---

## Ways to Initialize an Array

### 1. Full Initialization at Declaration Time
All elements are provided in curly braces at the time of declaration.
\`int a[5] = {10, 20, 30, 40, 50};\`
Memory layout: a[0]=10, a[1]=20, a[2]=30, a[3]=40, a[4]=50

### 2. Initialization Without Mentioning Size
The compiler **automatically counts** the number of elements in the initializer list and sets the array size accordingly.
\`int b[] = {1, 2, 3, 4};\`  → compiler creates b[4]

### 3. Partial Initialization
If fewer values are supplied than the declared size, the remaining positions are automatically initialized to **0**.
\`int c[5] = {7, 8};\`  → c[0]=7, c[1]=8, c[2]=0, c[3]=0, c[4]=0

### 4. Character Array (String) Initialization
A string literal can be directly assigned to a character array. The compiler automatically appends the null character \`'\\0'\` at the end.
\`char name[] = "ARRAY";\`  → stores 'A','R','R','A','Y','\\0'

---

## Array Features

| Feature | Explanation |
|---|---|
| Data type | All elements must be of the **same** data type |
| Storage | Elements stored in **contiguous** memory locations |
| Access | Random access using index: \`a[0]\`, \`a[1]\`, … \`a[n-1]\` |
| Size | Fixed at declaration time (static allocation) |
| Index | Starts at **0** and goes up to **size − 1** |
| Use | Storing marks, numbers, matrix rows, text characters |

## Advantages of Arrays
1. **Easy traversal** — use a loop to process all elements.
2. **Fast random access** — any element is accessed in O(1) time using its index.
3. **Compact storage** — one variable name for many values.
4. **Useful for matrices** — 2D arrays represent tabular data.

## Disadvantages
- Size is fixed; cannot grow or shrink at run time.
- Inserting or deleting an element requires shifting of elements.`,
        },
        {
          type: "code",
          language: "c",
          title: "Declaration and initialization of arrays",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();

    int a[5] = {10, 20, 30, 40, 50};     /* full initialization     */
    int b[] = {1, 2, 3, 4};              /* size inferred (b[4])    */
    int c[5] = {7, 8};                   /* partial: rest become 0  */
    char name[] = "ARRAY";              /* character array (string) */
    int i;

    printf("Array a: ");
    for(i = 0; i < 5; i++)
        printf("%d ", a[i]);

    printf("\nArray b: ");
    for(i = 0; i < 4; i++)
        printf("%d ", b[i]);

    printf("\nArray c (partial): ");
    for(i = 0; i < 5; i++)
        printf("%d ", c[i]);

    printf("\nString stored in name = %s", name);

    getch();
}

/*
Output:
Array a: 10 20 30 40 50
Array b: 1 2 3 4
Array c (partial): 7 8 0 0 0
String stored in name = ARRAY
*/`,
        },
        {
          type: "diagram",
          title: "Memory layout of array a[5] = {10,20,30,40,50}",
          content: `graph LR
    A["a[0]<br/>10<br/>addr: 1000"] --> B["a[1]<br/>20<br/>addr: 1004"]
    B --> C["a[2]<br/>30<br/>addr: 1008"]
    C --> D["a[3]<br/>40<br/>addr: 1012"]
    D --> E["a[4]<br/>50<br/>addr: 1016"]
    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style B fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C fill:#06b6d4,stroke:#0891b2,color:#fff
    style D fill:#10b981,stroke:#059669,color:#fff
    style E fill:#f59e0b,stroke:#d97706,color:#fff`,
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
}

/*
Sample Run (3x3 matrix):
Enter order of square matrix: 3
Enter matrix elements:
1 2 3
4 5 6
7 8 9

Matrix is:
   1   2   3
   4   5   6
   7   8   9

Sum of diagonal elements = 15
Sum of non-diagonal elements = 30

Explanation of diagonal (i==j): (0,0)=1, (1,1)=5, (2,2)=9  → 1+5+9 = 15
Non-diagonal: all others          → 2+3+4+6+7+8 = 30
*/`,
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

A **string** in C is a character array terminated by the null character \`'\\0'\`. All string manipulation functions are declared in the header file **\`<string.h>\`**.

---

### 1. \`strlen(str)\` — String Length
**Syntax:** \`int strlen(char *str);\`

Returns the number of characters in the string, **excluding** the terminating null character \`'\\0'\`.

**Example:** \`strlen("HELLO")\` returns **5**.

---

### 2. \`strcpy(dest, src)\` — String Copy
**Syntax:** \`char *strcpy(char *dest, const char *src);\`

Copies the entire source string (including \`'\\0'\`) into the destination array. The destination must be large enough to hold the source.

**Example:** After \`strcpy(a, "RAM");\`, array \`a\` contains \`"RAM"\`.

---

### 3. \`strcat(dest, src)\` — String Concatenation
**Syntax:** \`char *strcat(char *dest, const char *src);\`

Appends the source string to the **end** of the destination string. The \`'\\0'\` of \`dest\` is removed and the source is joined.

**Example:** \`strcat("Hello", "World")\` gives \`"HelloWorld"\`.

---

### 4. \`strcmp(str1, str2)\` — String Comparison
**Syntax:** \`int strcmp(const char *str1, const char *str2);\`

Compares two strings character by character (ASCII values):
| Return Value | Meaning |
|---|---|
| **0** | Both strings are equal |
| **Negative** | str1 comes before str2 alphabetically |
| **Positive** | str1 comes after str2 alphabetically |

**Example:** \`strcmp("abc", "abc")\` returns **0**.

---

### 5. \`strlwr(str)\` — Convert to Lowercase
**Syntax:** \`char *strlwr(char *str);\`

Converts all uppercase letters in the string to lowercase. It is available in **Turbo C / Borland C** compilers (not part of ANSI C standard).

**Example:** \`strlwr("HELLO")\` returns \`"hello"\`.

---

### 6. \`strupr(str)\` — Convert to Uppercase
**Syntax:** \`char *strupr(char *str);\`

Converts all lowercase letters in the string to uppercase. Also available in Turbo C.

**Example:** \`strupr("hello")\` returns \`"HELLO"\`.

---

### 7. \`strrev(str)\` — Reverse a String
**Syntax:** \`char *strrev(char *str);\`

Reverses the characters of the string in place (Turbo C extension).

**Example:** \`strrev("HELLO")\` returns \`"OLLEH"\`.

---

### 8. \`strstr(haystack, needle)\` — Find Substring
**Syntax:** \`char *strstr(const char *haystack, const char *needle);\`

Searches for the **first occurrence** of the substring \`needle\` inside \`haystack\`. Returns a pointer to the match or \`NULL\` if not found.

**Example:** \`strstr("Hello World", "World")\` returns pointer to \`"World"\`.

---

## Summary Table

| Function | Purpose | Return Value |
|---|---|---|
| \`strlen(s)\` | Length of string | Integer (number of chars) |
| \`strcpy(d, s)\` | Copy string s into d | Pointer to d |
| \`strcat(d, s)\` | Append s to end of d | Pointer to d |
| \`strcmp(s1,s2)\` | Compare two strings | 0 / negative / positive |
| \`strlwr(s)\` | Convert to lowercase | Pointer to modified s |
| \`strupr(s)\` | Convert to uppercase | Pointer to modified s |
| \`strrev(s)\` | Reverse the string | Pointer to reversed s |
| \`strstr(h, n)\` | Find substring in string | Pointer to match or NULL |`,
        },
        {
          type: "code",
          language: "c",
          title: "Demonstration of all major string functions",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
    clrscr();
    char s1[50] = "Hello";
    char s2[50] = "World";
    char copy[50];
    char str[50] = "C Programming";
    int result;

    /* 1. strlen */
    printf("1. strlen(\\"Hello\\") = %d\\n", strlen(s1));

    /* 2. strcpy */
    strcpy(copy, s1);
    printf("2. After strcpy, copy = %s\\n", copy);

    /* 3. strcat */
    strcat(s1, s2);
    printf("3. After strcat, s1 = %s\\n", s1);

    /* 4. strcmp */
    result = strcmp("abc", "abc");
    printf("4. strcmp(\\"abc\\",\\"abc\\") = %d\\n", result);

    result = strcmp("abc", "xyz");
    printf("   strcmp(\\"abc\\",\\"xyz\\") = %d (negative)\\n", result);

    /* 5. strlwr */
    strcpy(str, "HELLO");
    printf("5. strlwr(\\"HELLO\\") = %s\\n", strlwr(str));

    /* 6. strupr */
    strcpy(str, "hello");
    printf("6. strupr(\\"hello\\") = %s\\n", strupr(str));

    /* 7. strrev */
    strcpy(str, "HELLO");
    printf("7. strrev(\\"HELLO\\") = %s\\n", strrev(str));

    /* 8. strstr */
    char *pos = strstr("C Programming", "gram");
    printf("8. strstr found: %s\\n", pos);

    getch();
}

/*
Output:
1. strlen("Hello") = 5
2. After strcpy, copy = Hello
3. After strcat, s1 = HelloWorld
4. strcmp("abc","abc") = 0
   strcmp("abc","xyz") = -23 (negative)
5. strlwr("HELLO") = hello
6. strupr("hello") = HELLO
7. strrev("HELLO") = OLLEH
8. strstr found: gramming
*/`,
        },
        {
          type: "diagram",
          title: "Effect of each string function at a glance",
          content: `graph LR
    A["Input String"] --> B["strlen → 5"]
    A --> C["strcpy → new copy"]
    A --> D["strcat → HelloWorld"]
    A --> E["strcmp → 0 / ±n"]
    A --> F["strlwr → hello"]
    A --> G["strupr → HELLO"]
    A --> H["strrev → OLLEH"]
    A --> I["strstr → pointer to match"]
    style A fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
      ],
    },
  ],
}
