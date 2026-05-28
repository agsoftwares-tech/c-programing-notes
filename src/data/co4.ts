import type { CourseOutcome } from "@/types"

export const co4: CourseOutcome = {
  id: "co4",
  title: "CO4: Arrays and Strings",
  shortTitle: "CO4",
  description:
    "One-dimensional and two-dimensional arrays, string handling, string library functions, and matrix operations in C",
  icon: "Grid3X3",
  color: "sky",
  questions: [
    // ────────────────────────────────────────────
    // Q1 – Array: Definition, Declaration, Initialization
    // ────────────────────────────────────────────
    {
      id: "co4-q1",
      title:
        "What is an array? Explain declaration and initialization of one-dimensional and two-dimensional arrays with examples. State various ways of array initialization.",
      source: "Jul 2022 / Dec 2022 / May 2023 / Aug 2023 / May 2024",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Array in C

An **array** is a collection of elements of the **same data type** stored in **contiguous memory locations** and accessed using a common name with an index (subscript).

### Key Points
- All elements share the **same data type**.
- Elements are stored in **consecutive memory** locations.
- Each element is accessed via its **index** (starting from **0**).
- The size of an array is **fixed** at declaration.

### Syntax of Array Declaration

\`\`\`
data_type  array_name[size];
\`\`\`

---

## One-Dimensional (1-D) Array

A 1-D array is a linear list of elements.

### Declaration
\`\`\`c
int marks[5];       /* array of 5 integers */
float price[10];    /* array of 10 floats  */
char name[20];      /* array of 20 chars   */
\`\`\`

### Memory Layout (int marks[5])

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| Value | ? | ? | ? | ? | ? |

Each element occupies **2 or 4 bytes** depending on the platform.

### Ways to Initialize a 1-D Array

| Method | Example | Notes |
|--------|---------|-------|
| **At declaration** | \`int a[5] = {10, 20, 30, 40, 50};\` | All elements specified |
| **Partial init** | \`int a[5] = {10, 20};\` | Rest become **0** |
| **Without size** | \`int a[] = {10, 20, 30};\` | Size inferred as 3 |
| **At runtime** | \`scanf("%d", &a[i]);\` | Input by user |
| **Index-based** | \`a[0]=1; a[1]=2;\` | Assign individually |

---

## Two-Dimensional (2-D) Array

A 2-D array is a table of elements arranged in **rows and columns** (like a matrix).

### Declaration
\`\`\`
data_type  array_name[rows][columns];
\`\`\`

\`\`\`c
int matrix[3][3];    /* 3 rows, 3 columns */
float temp[2][4];    /* 2 rows, 4 columns */
\`\`\`

### Memory Layout (int matrix[2][3])

|  | Col 0 | Col 1 | Col 2 |
|--|-------|-------|-------|
| **Row 0** | matrix[0][0] | matrix[0][1] | matrix[0][2] |
| **Row 1** | matrix[1][0] | matrix[1][1] | matrix[1][2] |

Stored in memory as: [0][0] → [0][1] → [0][2] → [1][0] → [1][1] → [1][2]

### Ways to Initialize a 2-D Array

\`\`\`c
/* Method 1: Row-wise initialization */
int mat[2][3] = {1, 2, 3, 4, 5, 6};

/* Method 2: Row-grouped (most readable) */
int mat[2][3] = {{1, 2, 3},
                 {4, 5, 6}};

/* Method 3: Partial initialization (rest = 0) */
int mat[2][3] = {{1, 2}, {4}};

/* Method 4: At runtime using nested loops */
for (i = 0; i < 2; i++)
    for (j = 0; j < 3; j++)
        scanf("%d", &mat[i][j]);
\`\`\``,
        },
        {
          type: "code",
          language: "c",
          title: "Example – 1-D and 2-D Array Declaration & Initialization",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int i, j;

    /* ---- 1-D Array ---- */
    int arr[5] = {10, 20, 30, 40, 50};

    printf("1-D Array elements:\\n");
    for (i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }

    /* ---- 2-D Array ---- */
    int mat[2][3] = {{1, 2, 3},
                     {4, 5, 6}};

    printf("\\n2-D Array elements:\\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\\t", mat[i][j]);
        }
        printf("\\n");
    }

    getch();
}

/*
Output:
1-D Array elements:
arr[0] = 10
arr[1] = 20
arr[2] = 30
arr[3] = 40
arr[4] = 50

2-D Array elements:
1    2    3
4    5    6
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q2 – Array: Properties, Advantages & Disadvantages
    // ────────────────────────────────────────────
    {
      id: "co4-q2",
      title:
        "What are the properties, advantages, and disadvantages of an array?",
      source: "Aug 2023 / May 2024",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Properties of an Array

1. **Homogeneous** – All elements are of the **same data type**.
2. **Fixed size** – Size is determined at compile time and cannot change.
3. **Contiguous memory** – Elements are stored in adjacent memory locations.
4. **Random access** – Any element can be accessed directly using its index in O(1) time.
5. **Zero-indexed** – The first element has index **0**, last has index **n−1**.
6. **Single name** – Multiple values are grouped under one variable name.

---

## Advantages of Arrays

| # | Advantage | Description |
|---|-----------|-------------|
| 1 | **Random Access** | Access any element directly using index — O(1) time |
| 2 | **Memory efficient** | No extra memory for pointers (unlike linked lists) |
| 3 | **Cache friendly** | Contiguous storage improves cache performance |
| 4 | **Easy traversal** | Traverse all elements using a simple loop |
| 5 | **Sorting & searching** | Standard algorithms work efficiently on arrays |
| 6 | **Represents matrix** | 2-D arrays model mathematical matrices naturally |

---

## Disadvantages of Arrays

| # | Disadvantage | Description |
|---|--------------|-------------|
| 1 | **Fixed size** | Cannot grow or shrink at runtime |
| 2 | **Memory waste** | If few elements used, rest of memory is wasted |
| 3 | **Insertion/Deletion costly** | Shifting elements needed — O(n) time |
| 4 | **Single data type** | Cannot store mixed data types in one array |
| 5 | **No bounds checking** | C does not check array index bounds — causes bugs |`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q3 – Sort N integers in ascending order
    // ────────────────────────────────────────────
    {
      id: "co4-q3",
      title:
        "Write an algorithm and develop a C program that reads N integer numbers from an array and arranges them in ascending order (Bubble Sort).",
      source: "Jul 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Algorithm – Bubble Sort (Ascending Order)

**Algorithm: BubbleSort(arr, n)**

1. **Start**
2. Read \`n\` and accept \`n\` integers into array \`arr\`.
3. Repeat for \`i = 0\` to \`n-2\` (outer pass):
   - Repeat for \`j = 0\` to \`n-i-2\` (inner comparison):
     - If \`arr[j] > arr[j+1]\`, swap \`arr[j]\` and \`arr[j+1]\`.
4. Print the sorted array.
5. **Stop**

### How Bubble Sort Works

In each pass through the array, adjacent elements are compared and swapped if they are in the wrong order. The largest unsorted element "bubbles up" to its correct position after each pass.`,
        },
        {
          type: "diagram",
          title: "Flowchart – Bubble Sort",
          content: `graph TD
    S([Start]) --> IN[/Read n and array elements/]
    IN --> OUTER["i = 0"]
    OUTER --> OC{"i < n-1?"}
    OC -->|No| PRINT[/Print sorted array/]
    OC -->|Yes| INNER["j = 0"]
    INNER --> IC{"j < n-i-1?"}
    IC -->|No| OINC["i = i + 1"]
    OINC --> OC
    IC -->|Yes| CMP{"arr[j] > arr[j+1]?"}
    CMP -->|Yes| SWAP["Swap arr[j] and arr[j+1]"]
    CMP -->|No| JINC["j = j + 1"]
    SWAP --> JINC
    JINC --> IC
    PRINT --> E([End])
    style S fill:#0ea5e9,stroke:#0284c7,color:#fff
    style IN fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style OC fill:#f59e0b,stroke:#d97706,color:#fff
    style IC fill:#f59e0b,stroke:#d97706,color:#fff
    style CMP fill:#f59e0b,stroke:#d97706,color:#fff
    style SWAP fill:#10b981,stroke:#059669,color:#fff
    style PRINT fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Bubble Sort (Ascending Order)",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[50], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    /* Bubble Sort */
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                /* Swap */
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("\\nSorted array in ascending order:\\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    getch();
}

/*
Sample Run:
Enter number of elements: 5
Enter 5 elements: 40 10 50 20 30

Sorted array in ascending order:
10 20 30 40 50
*/`,
        },
        {
          type: "text",
          content: `### Dry Run (arr = {40, 10, 50, 20, 30})

**Pass 1 (i=0):** Compare adjacent pairs → result: {10, 40, 20, 30, **50**}
**Pass 2 (i=1):** → {10, 20, 30, **40**, 50}
**Pass 3 (i=2):** → {10, 20, **30**, 40, 50}
**Pass 4 (i=3):** → {**10**, **20**, 30, 40, 50}

Final sorted array: **10 20 30 40 50**`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q4 – Diagonal and Non-Diagonal Sum of Matrix
    // ────────────────────────────────────────────
    {
      id: "co4-q4",
      title:
        "WAP to display sum of diagonal and non-diagonal elements of a matrix.",
      source: "Jul 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Diagonal vs Non-Diagonal Elements of a Matrix

For an **n × n** (square) matrix:

- **Main diagonal** elements: positions where **row index == column index** → \`mat[i][i]\`
- **Non-diagonal** elements: all other positions where **row index ≠ column index**

### Example: 3 × 3 Matrix

|  | C0 | C1 | C2 |
|--|----|----|-----|
| **R0** | **1** (diagonal) | 2 | 3 |
| **R1** | 4 | **5** (diagonal) | 6 |
| **R2** | 7 | 8 | **9** (diagonal) |

- **Diagonal sum** = 1 + 5 + 9 = **15**
- **Non-diagonal sum** = 2 + 3 + 4 + 6 + 7 + 8 = **30**`,
        },
        {
          type: "diagram",
          title: "Flowchart – Diagonal and Non-Diagonal Sum",
          content: `graph TD
    S([Start]) --> IN[/Read n and matrix elements/]
    IN --> INIT["i = 0, diag = 0, non_diag = 0"]
    INIT --> OL{"i < n?"}
    OL -->|No| PRINT[/Print diag_sum and non_diag_sum/]
    OL -->|Yes| IL["j = 0"]
    IL --> IC{"j < n?"}
    IC -->|No| OINC["i++"]
    OINC --> OL
    IC -->|Yes| CHK{"i == j?"}
    CHK -->|Yes| DS["diag_sum += mat[i][j]"]
    CHK -->|No| NDS["non_diag_sum += mat[i][j]"]
    DS --> JINC["j++"]
    NDS --> JINC
    JINC --> IC
    PRINT --> E([End])
    style S fill:#0ea5e9,stroke:#0284c7,color:#fff
    style IN fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style INIT fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style OL fill:#f59e0b,stroke:#d97706,color:#fff
    style IC fill:#f59e0b,stroke:#d97706,color:#fff
    style CHK fill:#f59e0b,stroke:#d97706,color:#fff
    style DS fill:#10b981,stroke:#059669,color:#fff
    style NDS fill:#ef4444,stroke:#dc2626,color:#fff
    style PRINT fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Sum of Diagonal and Non-Diagonal Elements",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int mat[10][10], n, i, j;
    int diag_sum = 0, non_diag_sum = 0;

    printf("Enter size of square matrix (n x n): ");
    scanf("%d", &n);

    printf("Enter elements of the matrix:\\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            scanf("%d", &mat[i][j]);
        }
    }

    /* Calculate sums */
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i == j) {
                diag_sum += mat[i][j];        /* diagonal element */
            } else {
                non_diag_sum += mat[i][j];    /* non-diagonal element */
            }
        }
    }

    printf("\\nMatrix entered:\\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            printf("%4d", mat[i][j]);
        }
        printf("\\n");
    }

    printf("\\nSum of Diagonal elements     = %d\\n", diag_sum);
    printf("Sum of Non-Diagonal elements = %d\\n", non_diag_sum);

    getch();
}

/*
Sample Run:
Enter size: 3
Enter elements:
1 2 3
4 5 6
7 8 9

Matrix:
   1   2   3
   4   5   6
   7   8   9

Sum of Diagonal elements     = 15
Sum of Non-Diagonal elements = 30
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q5 – Reverse a String Without Library Function
    // ────────────────────────────────────────────
    {
      id: "co4-q5",
      title:
        "Write a program to find the reverse of a string without using a standard library function.",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Reversing a String Without Library Functions

**Logic:**
1. Find the length of the string manually (count until \`'\\0'\`).
2. Use two pointers — one at the start (\`left\`) and one at the end (\`right\`).
3. Swap characters at \`left\` and \`right\`, move towards the centre.
4. Repeat until \`left >= right\`.

**Example:**
\`\`\`
Original: H E L L O \\0
Index:    0 1 2 3 4

Step 1: Swap index 0 and 4 → O E L L H
Step 2: Swap index 1 and 3 → O L L E H
Step 3: Middle (index 2) stays
Reversed: O L L E H → "OLLEH"
\`\`\``,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Reverse a String (Without Library Function)",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[100];
    int len = 0, left, right;
    char temp;

    printf("Enter a string: ");
    gets(str);

    /* Find length manually */
    while (str[len] != '\\0') {
        len++;
    }

    /* Reverse using two-pointer swap */
    left  = 0;
    right = len - 1;

    while (left < right) {
        temp       = str[left];
        str[left]  = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    printf("Reversed string: %s\\n", str);

    getch();
}

/*
Sample Run:
Enter a string: HELLO
Reversed string: OLLEH

Sample Run 2:
Enter a string: computer
Reversed string: retupmoc
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q6 – Search Element in an Array (Linear Search)
    // ────────────────────────────────────────────
    {
      id: "co4-q6",
      title: "Write a program to search an element in an array (Linear Search).",
      source: "Dec 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Linear Search

**Linear Search** (Sequential Search) scans each element of the array one by one from the beginning until the desired element is found or the array ends.

### Algorithm: LinearSearch(arr, n, key)

1. **Start**
2. Read array \`arr\` of \`n\` elements and the search key.
3. Set \`found = 0\`.
4. For \`i = 0\` to \`n-1\`:
   - If \`arr[i] == key\`:
     - Print "Element found at position i+1".
     - Set \`found = 1\`, break.
5. If \`found == 0\`, print "Element not found".
6. **Stop**

### Complexity

| Case | Time Complexity |
|------|----------------|
| Best Case | O(1) — element at first position |
| Worst Case | O(n) — element at last or not present |
| Average Case | O(n/2) ≈ O(n) |`,
        },
        {
          type: "diagram",
          title: "Flowchart – Linear Search",
          content: `graph TD
    S([Start]) --> IN[/Read n, arr, key/]
    IN --> INIT["i = 0, found = 0"]
    INIT --> CHECK{"i < n?"}
    CHECK -->|No| NOTFOUND{"found == 0?"}
    CHECK -->|Yes| CMP{"arr[i] == key?"}
    CMP -->|Yes| FOUND[/Print Found at i+1/]
    CMP -->|No| INC["i = i + 1"]
    INC --> CHECK
    FOUND --> E([End])
    NOTFOUND -->|Yes| NF[/Print Not Found/]
    NOTFOUND -->|No| E
    NF --> E
    style S fill:#0ea5e9,stroke:#0284c7,color:#fff
    style IN fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style CMP fill:#f59e0b,stroke:#d97706,color:#fff
    style FOUND fill:#10b981,stroke:#059669,color:#fff
    style NF fill:#ef4444,stroke:#dc2626,color:#fff
    style E fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Linear Search",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[50], n, key, i, found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    /* Linear search */
    for (i = 0; i < n; i++) {
        if (arr[i] == key) {
            printf("Element %d found at position %d\\n", key, i + 1);
            found = 1;
            break;
        }
    }

    if (found == 0) {
        printf("Element %d not found in the array\\n", key);
    }

    getch();
}

/*
Sample Run 1:
Enter number of elements: 5
Enter 5 elements: 10 25 30 45 60
Enter element to search: 30
Element 30 found at position 3

Sample Run 2:
Enter number of elements: 4
Enter 4 elements: 5 15 25 35
Enter element to search: 20
Element 20 not found in the array
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q7 – Count Upper Case and Lower Case Characters
    // ────────────────────────────────────────────
    {
      id: "co4-q7",
      title:
        "Write a C program to count the number of Upper Case and Lower Case characters from a given sentence (using a function).",
      source: "May 2023 / Aug 2023",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Counting Upper Case and Lower Case Characters

### Logic

- An **uppercase** letter has ASCII values between **65 ('A')** and **90 ('Z')**.
- A **lowercase** letter has ASCII values between **97 ('a')** and **122 ('z')**.
- We can check using: \`ch >= 'A' && ch <= 'Z'\` or the \`isupper()\`/\`islower()\` functions from \`<ctype.h>\`.

### ASCII Reference

| Character | ASCII Range |
|-----------|-------------|
| 'A' – 'Z' | 65 – 90 (Uppercase) |
| 'a' – 'z' | 97 – 122 (Lowercase) |
| '0' – '9' | 48 – 57 (Digits) |`,
        },
        {
          type: "diagram",
          title: "Flowchart – Count Upper and Lower Case Characters",
          content: `graph TD
    S([Start]) --> IN[/Read sentence/]
    IN --> INIT["i = 0, upper = 0, lower = 0"]
    INIT --> CHECK{"str[i] != '\\\\0'?"}
    CHECK -->|No| PRINT[/Print upper and lower counts/]
    CHECK -->|Yes| CMP1{"str[i] >= 'A' AND <= 'Z'?"}
    CMP1 -->|Yes| IU["upper++"]
    CMP1 -->|No| CMP2{"str[i] >= 'a' AND <= 'z'?"}
    CMP2 -->|Yes| IL["lower++"]
    CMP2 -->|No| SKIP["skip (digit/space)"]
    IU --> INC["i++"]
    IL --> INC
    SKIP --> INC
    INC --> CHECK
    PRINT --> E([End])
    style S fill:#0ea5e9,stroke:#0284c7,color:#fff
    style IN fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style INIT fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style CMP1 fill:#f59e0b,stroke:#d97706,color:#fff
    style CMP2 fill:#f59e0b,stroke:#d97706,color:#fff
    style IU fill:#10b981,stroke:#059669,color:#fff
    style IL fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style PRINT fill:#6366f1,stroke:#4f46e5,color:#fff
    style E fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Count Upper and Lower Case (Using Function)",
          content: `#include<stdio.h>
#include<conio.h>

/* Function to count upper and lower case characters */
void countCase(char str[], int *upper, int *lower) {
    int i = 0;
    *upper = 0;
    *lower = 0;

    while (str[i] != '\\0') {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            (*upper)++;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            (*lower)++;
        }
        i++;
    }
}

void main() {
    clrscr();
    char sentence[200];
    int upper = 0, lower = 0;

    printf("Enter a sentence: ");
    gets(sentence);

    countCase(sentence, &upper, &lower);

    printf("\\nUpper Case letters: %d\\n", upper);
    printf("Lower Case letters: %d\\n", lower);

    getch();
}

/*
Sample Run:
Enter a sentence: Hello World from C Programming

Upper Case letters: 3
Lower Case letters: 22
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q8 – String Library Functions
    // ────────────────────────────────────────────
    {
      id: "co4-q8",
      title:
        "Describe the string library functions: strcat(), strlwr(), strlen(), strcpy(), strcmp(). Explain with syntax and examples.",
      source: "Jul 2022 / May 2023 / Aug 2023 / Jun 2025",
      marks: 10,
      blocks: [
        {
          type: "text",
          content: `## String Library Functions in C

C provides a rich set of string handling functions in the **\`<string.h>\`** header file. These functions operate on **null-terminated character arrays** (C-strings).

> **Note:** All string functions require \`#include <string.h>\`

---

### 1. \`strlen()\` – String Length

**Syntax:** \`int strlen(const char *str);\`

Returns the **number of characters** in the string, **excluding** the null terminator (\`'\\0'\`).

\`\`\`c
char s[] = "Hello";
printf("%d", strlen(s));   /* Output: 5 */
\`\`\`

---

### 2. \`strcpy()\` – String Copy

**Syntax:** \`char *strcpy(char *dest, const char *src);\`

Copies the string \`src\` (including \`'\\0'\`) into \`dest\`. The destination array must be large enough.

\`\`\`c
char src[] = "World";
char dest[20];
strcpy(dest, src);
printf("%s", dest);   /* Output: World */
\`\`\`

---

### 3. \`strcat()\` – String Concatenation

**Syntax:** \`char *strcat(char *dest, const char *src);\`

**Appends** (concatenates) \`src\` to the end of \`dest\`. The null terminator of \`dest\` is overwritten.

\`\`\`c
char s1[30] = "Hello ";
char s2[]   = "World";
strcat(s1, s2);
printf("%s", s1);   /* Output: Hello World */
\`\`\`

---

### 4. \`strcmp()\` – String Comparison

**Syntax:** \`int strcmp(const char *s1, const char *s2);\`

Compares two strings **lexicographically** (character by character based on ASCII values).

| Return Value | Meaning |
|:------------:|---------|
| **0** | Strings are **equal** |
| **< 0** | \`s1\` comes **before** \`s2\` |
| **> 0** | \`s1\` comes **after** \`s2\` |

\`\`\`c
strcmp("apple", "apple");   /* returns  0 */
strcmp("apple", "banana");  /* returns < 0 */
strcmp("mango", "apple");   /* returns > 0 */
\`\`\`

---

### 5. \`strlwr()\` – Convert to Lowercase

**Syntax:** \`char *strlwr(char *str);\`

Converts all **uppercase** characters in \`str\` to **lowercase**. *(Note: non-standard; available in Turbo C)*

\`\`\`c
char s[] = "HELLO WORLD";
strlwr(s);
printf("%s", s);   /* Output: hello world */
\`\`\`

---

### Quick Reference Table

| Function | Purpose | Header |
|----------|---------|--------|
| \`strlen(s)\` | Returns length of string | \`<string.h>\` |
| \`strcpy(d, s)\` | Copies string s to d | \`<string.h>\` |
| \`strcat(d, s)\` | Appends s to d | \`<string.h>\` |
| \`strcmp(s1,s2)\` | Compares two strings | \`<string.h>\` |
| \`strlwr(s)\` | Converts to lowercase | \`<string.h>\` |
| \`strupr(s)\` | Converts to uppercase | \`<string.h>\` |
| \`strrev(s)\` | Reverses the string | \`<string.h>\` |
| \`strchr(s, c)\` | Finds first occurrence of char c | \`<string.h>\` |`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Demonstrating All Five String Functions",
          content: `#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
    clrscr();
    char s1[50] = "Hello";
    char s2[50] = "World";
    char s3[50];
    int len, cmp;

    /* 1. strlen */
    len = strlen(s1);
    printf("strlen(\\"Hello\\") = %d\\n", len);

    /* 2. strcpy */
    strcpy(s3, s1);
    printf("strcpy: s3 = %s\\n", s3);

    /* 3. strcat */
    strcat(s1, " World");
    printf("strcat: s1 = %s\\n", s1);

    /* 4. strcmp */
    cmp = strcmp("apple", "banana");
    if (cmp == 0)
        printf("strcmp: Strings are equal\\n");
    else if (cmp < 0)
        printf("strcmp: \\"apple\\" < \\"banana\\"\\n");
    else
        printf("strcmp: \\"apple\\" > \\"banana\\"\\n");

    /* 5. strlwr */
    char upper[] = "PROGRAMMING";
    strlwr(upper);
    printf("strlwr: %s\\n", upper);

    getch();
}

/*
Output:
strlen("Hello") = 5
strcpy: s3 = Hello
strcat: s1 = Hello World
strcmp: "apple" < "banana"
strlwr: programming
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q9 – Transpose of a Matrix
    // ────────────────────────────────────────────
    {
      id: "co4-q9",
      title:
        "Develop a program to find the transpose of a matrix of size m×n.",
      source: "May 2023",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Transpose of a Matrix

The **transpose** of a matrix is obtained by **interchanging its rows and columns**.

If \`A\` is an **m × n** matrix, its transpose \`A^T\` is an **n × m** matrix where:

\`\`\`
A^T[j][i] = A[i][j]
\`\`\`

### Example

**Original Matrix A (3 × 2):**

| | C0 | C1 |
|--|----|----|
| R0 | 1 | 2 |
| R1 | 3 | 4 |
| R2 | 5 | 6 |

**Transpose A^T (2 × 3):**

| | C0 | C1 | C2 |
|--|----|----|-----|
| R0 | 1 | 3 | 5 |
| R1 | 2 | 4 | 6 |`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Transpose of a Matrix (m × n)",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int a[10][10], trans[10][10];
    int m, n, i, j;

    printf("Enter number of rows (m): ");
    scanf("%d", &m);
    printf("Enter number of columns (n): ");
    scanf("%d", &n);

    printf("Enter elements of matrix (%d x %d):\\n", m, n);
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    /* Compute transpose: trans[j][i] = a[i][j] */
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            trans[j][i] = a[i][j];
        }
    }

    printf("\\nOriginal Matrix (%d x %d):\\n", m, n);
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("%4d", a[i][j]);
        }
        printf("\\n");
    }

    printf("\\nTranspose Matrix (%d x %d):\\n", n, m);
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            printf("%4d", trans[i][j]);
        }
        printf("\\n");
    }

    getch();
}

/*
Sample Run:
Enter rows: 2, columns: 3
Enter elements:
1 2 3
4 5 6

Original Matrix (2 x 3):
   1   2   3
   4   5   6

Transpose Matrix (3 x 2):
   1   4
   2   5
   3   6
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q10 – Count Blank Spaces, Digits, Vowels
    // ────────────────────────────────────────────
    {
      id: "co4-q10",
      title:
        "WAP to count blank spaces, digits, and vowels in a string.",
      source: "May 2023",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Counting Characters in a String

### Logic

| Category | Condition |
|----------|-----------|
| **Vowels** | ch == 'a','e','i','o','u' (upper or lower) |
| **Digits** | ch >= '0' && ch <= '9' |
| **Spaces** | ch == ' ' |`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Count Spaces, Digits, and Vowels",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[200];
    int i = 0, spaces = 0, digits = 0, vowels = 0;
    char ch;

    printf("Enter a string: ");
    gets(str);

    while (str[i] != '\\0') {
        ch = str[i];

        /* Check for vowel (upper or lower) */
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||
            ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U') {
            vowels++;
        }
        /* Check for digit */
        else if (ch >= '0' && ch <= '9') {
            digits++;
        }
        /* Check for blank space */
        else if (ch == ' ') {
            spaces++;
        }

        i++;
    }

    printf("\\nBlanks : %d\\n", spaces);
    printf("Digits : %d\\n", digits);
    printf("Vowels : %d\\n", vowels);

    getch();
}

/*
Sample Run:
Enter a string: Hello World 2025

Blanks : 2
Digits : 4
Vowels : 3
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q11 – Reverse of an Array Using a Function
    // ────────────────────────────────────────────
    {
      id: "co4-q11",
      title:
        "WAP to find and display the reverse of an array using a function.",
      source: "May 2023",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Reversing an Array Using a Function

**Logic:** Pass the array and its size to a function. Swap elements from both ends moving towards the centre.

\`\`\`
Original: 10  20  30  40  50
           ↑                ↑
          swap index 0 and 4  → 50  20  30  40  10
          swap index 1 and 3  → 50  40  30  20  10
          index 2 stays (middle)

Reversed: 50  40  30  20  10
\`\`\``,
        },
        {
          type: "diagram",
          title: "Flowchart – Reverse Array Using Function",
          content: `graph TD
    S([Start]) --> IN[/Read n and array elements/]
    IN --> INIT["left = 0, right = n - 1"]
    INIT --> CALL["Call reverseArray(arr, n)"]
    CALL --> CHECK{"left < right?"}
    CHECK -->|No| RET["Return to main"]
    CHECK -->|Yes| SWAP["temp = arr[left]\\narr[left] = arr[right]\\narr[right] = temp"]
    SWAP --> MOVE["left++, right--"]
    MOVE --> CHECK
    RET --> PRINT[/Print reversed array/]
    PRINT --> E([End])
    style S fill:#0ea5e9,stroke:#0284c7,color:#fff
    style IN fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style INIT fill:#38bdf8,stroke:#0ea5e9,color:#fff
    style CALL fill:#6366f1,stroke:#4f46e5,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style SWAP fill:#10b981,stroke:#059669,color:#fff
    style MOVE fill:#10b981,stroke:#059669,color:#fff
    style PRINT fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Reverse Array Using Function",
          content: `#include<stdio.h>
#include<conio.h>

/* Function to reverse the array in place */
void reverseArray(int arr[], int n) {
    int left = 0, right = n - 1, temp;

    while (left < right) {
        temp       = arr[left];
        arr[left]  = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

void main() {
    clrscr();
    int arr[50], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("\\nOriginal array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    reverseArray(arr, n);

    printf("\\nReversed array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    getch();
}

/*
Sample Run:
Enter number of elements: 5
Enter 5 elements: 10 20 30 40 50

Original array: 10 20 30 40 50
Reversed array: 50 40 30 20 10
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q12 – Differentiation: String vs Character Array
    // ────────────────────────────────────────────
    {
      id: "co4-q12",
      title:
        "Discover 4 differentiations between String and Character (Character Array).",
      source: "May 2024",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Difference Between String and Character (Character Array)

| # | Feature | String | Single Character |
|---|---------|--------|------------------|
| 1 | **Definition** | A sequence of characters terminated by \`'\\0'\` | A single character value stored in a \`char\` variable |
| 2 | **Declaration** | \`char str[10] = "Hello";\` | \`char ch = 'A';\` |
| 3 | **Memory** | Occupies multiple bytes (one per character + null) | Occupies exactly **1 byte** |
| 4 | **Format specifier** | \`%s\` (for \`printf\`/\`scanf\`) | \`%c\` (for \`printf\`/\`scanf\`) |
| 5 | **Null terminator** | Must end with \`'\\0'\` | Not applicable |
| 6 | **Functions** | Handled by \`strlen\`, \`strcpy\`, etc. | Handled by \`isalpha\`, \`toupper\`, etc. |

### Examples

\`\`\`c
/* Single Character */
char ch = 'A';
printf("%c", ch);    /* prints: A */
printf("%d", ch);    /* prints: 65 (ASCII value) */

/* String */
char str[] = "Hello";
printf("%s", str);             /* prints: Hello */
printf("%d", strlen(str));     /* prints: 5 */
\`\`\`

> **Key point:** A string literal like \`"A"\` occupies **2 bytes** (the character 'A' + '\\0'), whereas the character \`'A'\` occupies **1 byte**.`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q13 – Find Minimum and Maximum in an Array
    // ────────────────────────────────────────────
    {
      id: "co4-q13",
      title:
        "Write a program to read and store n integers in an array (where the user decides n). Find the minimum and maximum numbers from the array.",
      source: "Jun 2025",
      marks: 5,
      blocks: [
        {
          type: "text",
          content: `## Finding Minimum and Maximum in an Array

**Algorithm:**
1. Read \`n\` elements into the array.
2. Assume the first element is both the minimum and maximum.
3. Traverse the remaining elements:
   - If current element < minimum → update minimum.
   - If current element > maximum → update maximum.
4. Print the minimum and maximum.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Minimum and Maximum Element",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[100], n, i;
    int min_val, max_val;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    /* Initialize min and max with first element */
    min_val = arr[0];
    max_val = arr[0];

    /* Traverse remaining elements */
    for (i = 1; i < n; i++) {
        if (arr[i] < min_val) {
            min_val = arr[i];
        }
        if (arr[i] > max_val) {
            max_val = arr[i];
        }
    }

    printf("\\nMinimum element = %d\\n", min_val);
    printf("Maximum element = %d\\n", max_val);

    getch();
}

/*
Sample Run:
Enter the number of elements: 6
Enter 6 elements: 45 12 78 3 99 56

Minimum element = 3
Maximum element = 99
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q14 – Operations on Strings / Count Digits, Alphabets, Special Chars
    // ────────────────────────────────────────────
    {
      id: "co4-q14",
      title:
        "Explain operations that can be performed on strings (at least 5). Write a program to count the number of digits, alphabets, and special characters in an input string.",
      source: "Aug 2025",
      marks: 10,
      blocks: [
        {
          type: "text",
          content: `## Operations on Strings in C

Strings in C support the following operations (using \`<string.h>\`):

| # | Operation | Function | Description |
|---|-----------|----------|-------------|
| 1 | **Finding Length** | \`strlen(s)\` | Returns number of characters in string |
| 2 | **Copying** | \`strcpy(d, s)\` | Copies string s into d |
| 3 | **Concatenation** | \`strcat(d, s)\` | Appends s to the end of d |
| 4 | **Comparison** | \`strcmp(s1, s2)\` | Compares two strings lexicographically |
| 5 | **Reversal** | \`strrev(s)\` | Reverses the string in place |
| 6 | **Searching** | \`strchr(s, c)\` | Finds first occurrence of character c |
| 7 | **Lowercase** | \`strlwr(s)\` | Converts to lowercase |
| 8 | **Uppercase** | \`strupr(s)\` | Converts to uppercase |
| 9 | **Substring** | \`strstr(s1, s2)\` | Finds first occurrence of s2 in s1 |
| 10 | **Token splitting** | \`strtok(s, delim)\` | Splits string by delimiter |

### Key Notes
- Strings in C are **null-terminated** (\`'\\0'\` at end).
- All string functions are in **\`<string.h>\`**.
- Use \`gets()\` to read a string with spaces, \`scanf("%s")\` stops at whitespace.`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Count Digits, Alphabets, and Special Characters",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    char str[200];
    int i = 0;
    int alpha = 0, digit = 0, special = 0;
    char ch;

    printf("Enter a string: ");
    gets(str);

    while (str[i] != '\\0') {
        ch = str[i];

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            alpha++;            /* alphabet */
        } else if (ch >= '0' && ch <= '9') {
            digit++;            /* digit */
        } else {
            special++;          /* special character (includes spaces) */
        }

        i++;
    }

    printf("\\nAlphabets        : %d\\n", alpha);
    printf("Digits           : %d\\n", digit);
    printf("Special Chars    : %d\\n", special);

    getch();
}

/*
Sample Run:
Enter a string: Hello, World! 2025

Alphabets        : 10
Digits           : 4
Special Chars    : 4   (comma, space, space, exclamation)
*/`,
        },
      ],
    },
  ],
}
