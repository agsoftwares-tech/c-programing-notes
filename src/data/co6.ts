import type { CourseOutcome } from "@/types"

export const co6: CourseOutcome = {
  id: "co6",
  title: "CO6: Pointers, File Handling, and Memory Management",
  shortTitle: "CO6",
  description:
    "Pointer fundamentals, pointer arithmetic, arrays and pointers, dynamic memory allocation, and file handling in C",
  icon: "Database",
  color: "rose",
  questions: [
    // ────────────────────────────────────────────
    // Q1 – Pointer Output Trace
    // ────────────────────────────────────────────
    {
      id: "co6-q1",
      title:
        "Write the output of the following program:\nint x=10, y, *ip;\nip = &x;\ny = (*ip)++;\nprintf(\"%d\\n\", y);\nprintf(\"%d\\n\", *ip);",
      source: "Dec 2022",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Pointer Output Trace

### Code Under Analysis

\`\`\`c
int x = 10, y, *ip;
ip = &x;          /* ip now points to x */
y  = (*ip)++;     /* post-increment: y gets current *ip, then *ip (x) increments */
printf("%d\\n", y);
printf("%d\\n", *ip);
\`\`\`

### Step-by-Step Trace

| Step | Statement | Memory State | Explanation |
|------|-----------|--------------|-------------|
| 1 | \`int x=10\` | x = 10 | x is initialized to 10 |
| 2 | \`ip = &x\` | ip → x | ip holds the address of x |
| 3 | \`y = (*ip)++\` | y = 10, x = 11 | **Post-increment**: y gets the current value of *ip (which is x = 10), then x is incremented to 11 |
| 4 | \`printf y\` | prints **10** | y was assigned before the increment |
| 5 | \`printf *ip\` | prints **11** | *ip still refers to x, which is now 11 |

### Key Concept: Post-increment vs Pre-increment

| Expression | Meaning |
|------------|---------|
| \`y = (*ip)++\` | Assign *ip to y **first**, then increment *ip → y = old value |
| \`y = ++(*ip)\` | Increment *ip **first**, then assign to y → y = new value |

### Output

\`\`\`
10
11
\`\`\``,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q2 – What is `int *ptr`?
    // ────────────────────────────────────────────
    {
      id: "co6-q2",
      title:
        "What is the meaning of the following statement in C: `int *ptr;`?  Explain pointer basics.",
      source: "Dec 2022",
      marks: 2,
      blocks: [
        {
          type: "text",
          content: `## Pointers in C

### Statement: \`int *ptr;\`

This declares **\`ptr\`** as a **pointer to an integer**. It means:
- \`ptr\` is a variable that can store the **memory address** of an \`int\` variable.
- The \`*\` is the **indirection** (dereference) operator in a declaration.

### Memory Representation

\`\`\`
int x = 42;
int *ptr = &x;

Memory:
  Address   Value
  [2000]    42      ← x
  [3000]    2000    ← ptr (stores address of x)
\`\`\`

### Key Operators

| Operator | Name | Meaning | Example |
|----------|------|---------|---------|
| \`&\` | Address-of | Returns the memory address of a variable | \`ptr = &x;\` |
| \`*\` | Dereference | Accesses the value at the address stored in pointer | \`val = *ptr;\` |

### Pointer Declarations

\`\`\`c
int   *iptr;    /* pointer to int    */
float *fptr;    /* pointer to float  */
char  *cptr;    /* pointer to char   */
void  *vptr;    /* generic pointer   */
\`\`\`

### Example

\`\`\`c
int x = 42;
int *ptr;

ptr = &x;              /* ptr now holds address of x */

printf("%d",  x);      /* 42  — value of x */
printf("%p",  ptr);    /* address of x, e.g. 0x7ffd... */
printf("%d", *ptr);    /* 42  — value at the address (same as x) */

*ptr = 100;            /* changes x to 100 through the pointer */
printf("%d", x);       /* 100 */
\`\`\``,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q3 – Relation Between Arrays and Pointers
    // ────────────────────────────────────────────
    {
      id: "co6-q3",
      title:
        "What is the relation between arrays and pointers? Explain with an example.",
      source: "Dec 2022",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Relation Between Arrays and Pointers

In C, **the name of an array is a pointer to its first element**. This is the fundamental relationship between arrays and pointers.

### Key Rules

| Rule | Description |
|------|-------------|
| \`arr\` == \`&arr[0]\` | Array name = address of first element |
| \`arr + i\` == \`&arr[i]\` | Pointer arithmetic gives address of i-th element |
| \`*(arr + i)\` == \`arr[i]\` | Dereferencing gives the value at index i |
| Pointer to array | \`int *ptr = arr;\` — ptr and arr are equivalent |

### Memory Layout

\`\`\`
int arr[4] = {10, 20, 30, 40};

Address:  1000   1004   1008   1012
Value:     10     20     30     40
           ↑
         arr (and &arr[0])

arr+1 = 1004   →   *(arr+1) = 20
arr+2 = 1008   →   *(arr+2) = 30
arr+3 = 1012   →   *(arr+3) = 40
\`\`\`

### Pointer Arithmetic

When you add an integer \`i\` to a pointer \`ptr\` of type \`T*\`, it advances by \`i × sizeof(T)\` bytes.

\`\`\`c
int arr[3] = {5, 10, 15};
int *p = arr;

printf("%d", *(p));       /* 5  */
printf("%d", *(p + 1));   /* 10 */
printf("%d", *(p + 2));   /* 15 */

p++;                      /* p now points to arr[1] */
printf("%d", *p);         /* 10 */
\`\`\``,
        },
        {
          type: "diagram",
          title: "Array-Pointer Relationship",
          content: `graph LR
    PTR["ptr = arr = &arr[0]<br/>Address: 1000"]
    PTR --> A0["arr[0] = 10<br/>*(ptr+0) = 10<br/>Addr: 1000"]
    PTR --> A1["arr[1] = 20<br/>*(ptr+1) = 20<br/>Addr: 1004"]
    PTR --> A2["arr[2] = 30<br/>*(ptr+2) = 30<br/>Addr: 1008"]
    PTR --> A3["arr[3] = 40<br/>*(ptr+3) = 40<br/>Addr: 1012"]
    style PTR fill:#f59e0b,stroke:#d97706,color:#fff
    style A0 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style A1 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style A2 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style A3 fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Array Access Using Pointer",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;    /* ptr points to arr[0] */
    int i;

    printf("Array access using index and pointer:\\n");
    printf("%-5s %-10s %-10s %-10s\\n",
           "i", "arr[i]", "*(ptr+i)", "Address");
    printf("%-5s %-10s %-10s %-10s\\n",
           "---", "------", "--------", "-------");

    for (i = 0; i < 5; i++) {
        printf("%-5d %-10d %-10d %p\\n",
               i, arr[i], *(ptr + i), (ptr + i));
    }

    getch();
}

/*
Output:
i     arr[i]     *(ptr+i)   Address
---   ------     --------   -------
0     10         10         0x...00
1     20         20         0x...04
2     30         30         0x...08
3     40         40         0x...0c
4     50         50         0x...10
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q4 – Swap Two Numbers Using Pointers
    // ────────────────────────────────────────────
    {
      id: "co6-q4",
      title: "Write a program to swap two numbers using pointers.",
      source: "Dec 2022",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Swapping Using Pointers (Call by Reference)

When we pass **addresses** of variables to a function, any changes made through the pointers inside the function affect the **original variables** — this is called **Call by Reference**.

### Why Pointers for Swap?

Without pointers (call by value), a swap function works on copies — the original variables remain unchanged. With pointers, we work on the actual memory locations.

### Algorithm

1. Accept two numbers \`a\` and \`b\`.
2. Call \`swap(&a, &b)\` — pass addresses.
3. Inside swap: use a temp variable to interchange the values at the pointer addresses.
4. Print the swapped values.`,
        },
        {
          type: "diagram",
          title: "Swap Using Pointers – Memory View",
          content: `graph LR
    subgraph Before["Before Swap"]
        A1["a = 10<br/>addr: 1000"]
        B1["b = 20<br/>addr: 2000"]
    end
    subgraph Pointers["Inside swap(p, q)"]
        P["*p → 1000 (value=10)"]
        Q["*q → 2000 (value=20)"]
        T["temp = *p = 10"]
        P2["*p = *q → 20"]
        Q2["*q = temp → 10"]
    end
    subgraph After["After Swap"]
        A2["a = 20<br/>addr: 1000"]
        B2["b = 10<br/>addr: 2000"]
    end
    Before --> Pointers --> After
    style A1 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style B1 fill:#10b981,stroke:#059669,color:#fff
    style A2 fill:#10b981,stroke:#059669,color:#fff
    style B2 fill:#0ea5e9,stroke:#0284c7,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Swap Two Numbers Using Pointers",
          content: `#include<stdio.h>
#include<conio.h>

/* Function to swap using pointers (call by reference) */
void swap(int *p, int *q) {
    int temp;
    temp = *p;    /* temp = value at p (a) */
    *p   = *q;    /* value at p = value at q */
    *q   = temp;  /* value at q = temp (original a) */
}

void main() {
    clrscr();
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&a, &b);   /* pass addresses */

    printf("After  swap: a = %d, b = %d\\n", a, b);

    getch();
}

/*
Sample Run:
Enter two numbers: 10 20
Before swap: a = 10, b = 20
After  swap: a = 20, b = 10
*/`,
        },
        {
          type: "text",
          content: `### Call by Value vs Call by Reference

| Feature | Call by Value | Call by Reference (Pointers) |
|---------|---------------|------------------------------|
| What is passed | **Copy** of the value | **Address** of the variable |
| Original variable | **Unchanged** | **Modified** |
| Memory | Separate copy in function | Same memory location |
| Use case | When original should not change | When function must modify original |

> **Note:** C does not have true "call by reference" — it simulates it by passing pointers.`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q5 – Types of Pointers
    // ────────────────────────────────────────────
    {
      id: "co6-q5",
      title:
        "Identify and explain the different types of pointers in C with examples.",
      source: "Dec 2022 / May 2023",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Types of Pointers in C

| Type | Description | Example |
|------|-------------|---------|
| **NULL Pointer** | Pointer that points to nothing (address 0) | \`int *p = NULL;\` |
| **Void Pointer** | Generic pointer — can point to any data type | \`void *vp;\` |
| **Wild Pointer** | Uninitialized pointer — holds garbage address | \`int *p;\` (not initialized) |
| **Dangling Pointer** | Points to freed/deallocated memory | After \`free(ptr)\`, ptr is dangling |
| **Function Pointer** | Points to a function | \`int (*fp)(int, int);\` |
| **Pointer to Pointer** | Stores address of another pointer | \`int **pp;\` |
| **Constant Pointer** | Pointer value (address) cannot change | \`int * const p = &x;\` |
| **Pointer to Constant** | Value at address cannot change through pointer | \`const int *p = &x;\` |

---

### 1. NULL Pointer

A NULL pointer explicitly points to **nothing**. It's safe to check before dereferencing.

\`\`\`c
int *p = NULL;
if (p == NULL) {
    printf("Pointer is NULL — not pointing to any variable\\n");
}
\`\`\`

> **Good practice:** Always initialize pointers to NULL if not immediately assigned.

---

### 2. Void Pointer (Generic Pointer)

Can hold the address of **any** data type. Must be **cast** before dereferencing.

\`\`\`c
int   x = 10;
float f = 3.14f;
void *vp;

vp = &x;
printf("%d\\n", *(int *)vp);    /* cast to int* before dereferencing */

vp = &f;
printf("%.2f\\n", *(float *)vp);
\`\`\`

Used heavily in \`malloc()\`, \`memcpy()\`, etc.

---

### 3. Wild Pointer

An **uninitialized** pointer that contains a garbage address. Dereferencing causes **undefined behavior**.

\`\`\`c
int *p;          /* wild pointer — p has garbage address */
*p = 10;         /* DANGEROUS! Can crash the program */
\`\`\`

**Fix:** Always initialize: \`int *p = NULL;\`

---

### 4. Dangling Pointer

A pointer that refers to **memory that has been freed** or a variable that has gone out of scope.

\`\`\`c
int *p = (int *)malloc(sizeof(int));
*p = 42;
free(p);         /* memory freed */
printf("%d", *p); /* DANGLING — undefined behavior */

/* Fix: set to NULL after free */
p = NULL;
\`\`\`

---

### 5. Pointer to Pointer (Double Pointer)

Stores the address of another pointer.

\`\`\`c
int  x  = 100;
int  *p = &x;    /* p  → x */
int **pp = &p;   /* pp → p → x */

printf("%d", **pp);   /* 100 */
\`\`\``,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q6 – Dynamic Memory Allocation
    // ────────────────────────────────────────────
    {
      id: "co6-q6",
      title:
        "Explain dynamic memory allocation in C with malloc(), calloc(), realloc(), and free().",
      source: "May 2023 / May 2024",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Dynamic Memory Allocation in C

**Static memory allocation** (arrays) allocates memory at **compile time** — the size is fixed. **Dynamic memory allocation** lets you allocate memory at **runtime**, exactly as much as needed.

All dynamic memory functions are in **\`<stdlib.h>\`** and return a **void pointer**.

---

### Functions Summary

| Function | Purpose | Syntax |
|----------|---------|--------|
| \`malloc()\` | Allocates memory block (uninitialized) | \`malloc(size)\` |
| \`calloc()\` | Allocates and **zeros** memory for n elements | \`calloc(n, size)\` |
| \`realloc()\` | Resizes a previously allocated block | \`realloc(ptr, new_size)\` |
| \`free()\` | Releases allocated memory | \`free(ptr)\` |

---

### 1. \`malloc()\` – Memory Allocate

Allocates \`size\` bytes. Memory is **uninitialized** (contains garbage).

\`\`\`c
int *p = (int *) malloc(5 * sizeof(int));
/* allocates space for 5 ints = 5 × 4 = 20 bytes */

if (p == NULL) {
    printf("Memory allocation failed!\\n");
    exit(1);
}
\`\`\`

---

### 2. \`calloc()\` – Contiguous Allocate

Allocates memory for \`n\` elements of \`size\` bytes each. All bytes are initialized to **zero**.

\`\`\`c
int *p = (int *) calloc(5, sizeof(int));
/* allocates 5 ints, all initialized to 0 */
\`\`\`

---

### 3. \`realloc()\` – Re-Allocate

Resizes a previously allocated block. The original content is preserved up to the smaller of the old/new sizes.

\`\`\`c
p = (int *) realloc(p, 10 * sizeof(int));
/* expands block from 5 to 10 ints */
\`\`\`

---

### 4. \`free()\` – Free Memory

Releases dynamically allocated memory back to the heap. **Always** free what you allocate to avoid memory leaks.

\`\`\`c
free(p);
p = NULL;   /* good practice: avoid dangling pointer */
\`\`\`

---

### Heap Memory Diagram

\`\`\`
Stack:  | p (pointer) |   →   Heap: | 10 | 20 | 30 | 40 | 50 |
         (local variable)           (dynamically allocated)
\`\`\``,
        },
        {
          type: "diagram",
          title: "Dynamic Memory Allocation Flow",
          content: `graph TD
    REQ[Program needs memory] --> MALLOC["malloc / calloc"]
    MALLOC --> CHECK{"NULL returned?"}
    CHECK -->|Yes| ERR[Print error and exit]
    CHECK -->|No| USE["Use memory via pointer"]
    USE --> REALLOC{"Need more/less?"}
    REALLOC -->|Yes| RL["realloc()"]
    RL --> USE
    REALLOC -->|No| FREE["free() — release memory"]
    FREE --> NULL["Set pointer = NULL"]
    style REQ fill:#f59e0b,stroke:#d97706,color:#fff
    style MALLOC fill:#0ea5e9,stroke:#0284c7,color:#fff
    style CHECK fill:#f59e0b,stroke:#d97706,color:#fff
    style ERR fill:#ef4444,stroke:#dc2626,color:#fff
    style USE fill:#10b981,stroke:#059669,color:#fff
    style FREE fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style NULL fill:#6366f1,stroke:#4f46e5,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Dynamic Array Using malloc() and free()",
          content: `#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

void main() {
    clrscr();
    int *arr, n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    /* Dynamically allocate memory for n integers */
    arr = (int *) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        exit(1);
    }

    /* Input elements */
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    /* Display elements */
    printf("\\nElements: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    /* Free memory */
    free(arr);
    arr = NULL;
    printf("Memory freed successfully.\\n");

    getch();
}

/*
Sample Run:
Enter number of elements: 4
Enter 4 elements: 10 20 30 40

Elements: 10 20 30 40
Memory freed successfully.
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q7 – File Handling in C
    // ────────────────────────────────────────────
    {
      id: "co6-q7",
      title:
        "Explain file handling in C. Describe file operations: fopen(), fclose(), fprintf(), fscanf(), fgets(), fputs(), feof().",
      source: "May 2023 / May 2024 / Jun 2025",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## File Handling in C

**File handling** allows a C program to **read from** and **write to** files stored on disk, enabling **persistent data storage** beyond the program's lifetime.

All file handling functions use the \`FILE\` pointer and are available via **\`<stdio.h>\`**.

---

## File Modes

| Mode | String | Description |
|------|--------|-------------|
| Read | \`"r"\` | Open existing file for reading; fails if file doesn't exist |
| Write | \`"w"\` | Create new or overwrite existing file for writing |
| Append | \`"a"\` | Open or create file; write at the end (preserve existing content) |
| Read+Write | \`"r+"\` | Open existing file for both reading and writing |
| Write+Read | \`"w+"\` | Create/overwrite; both reading and writing |

---

## Key File Functions

| Function | Purpose |
|----------|---------|
| \`fopen(name, mode)\` | Opens a file; returns \`FILE*\` or NULL on failure |
| \`fclose(fp)\` | Closes a file and flushes the buffer |
| \`fprintf(fp, fmt, ...)\` | Writes formatted output to file |
| \`fscanf(fp, fmt, ...)\` | Reads formatted input from file |
| \`fgets(str, n, fp)\` | Reads a line (up to n-1 chars) from file |
| \`fputs(str, fp)\` | Writes a string to file |
| \`feof(fp)\` | Returns non-zero if end-of-file reached |
| \`fgetc(fp)\` | Reads one character from file |
| \`fputc(ch, fp)\` | Writes one character to file |
| \`rewind(fp)\` | Resets file position to beginning |

---

## File Handling Workflow

\`\`\`
1. Declare FILE pointer:   FILE *fp;
2. Open file:              fp = fopen("filename.txt", "mode");
3. Check for NULL:         if (fp == NULL) { error; }
4. Read / Write data
5. Close file:             fclose(fp);
\`\`\``,
        },
        {
          type: "diagram",
          title: "File Handling Flow in C",
          content: `graph TD
    S([Start]) --> D["FILE *fp;"]
    D --> O["fp = fopen('data.txt', 'w')"]
    O --> N{"fp == NULL?"}
    N -->|Yes| ERR[/Print Error/]
    N -->|No| RW["Read / Write using fprintf / fscanf"]
    RW --> C["fclose(fp)"]
    C --> E([End])
    ERR --> E
    style S fill:#f43f5e,stroke:#e11d48,color:#fff
    style O fill:#0ea5e9,stroke:#0284c7,color:#fff
    style N fill:#f59e0b,stroke:#d97706,color:#fff
    style ERR fill:#ef4444,stroke:#dc2626,color:#fff
    style RW fill:#10b981,stroke:#059669,color:#fff
    style C fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#f43f5e,stroke:#e11d48,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Write to and Read from a File",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    FILE *fp;
    int i, n, rollno;
    char name[40];
    float marks;

    /* ---- WRITE ---- */
    fp = fopen("students.txt", "w");
    if (fp == NULL) {
        printf("Error: Cannot open file for writing!\\n");
        getch();
        return;
    }

    printf("Enter number of students: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Roll No, Name, Marks: ");
        scanf("%d %s %f", &rollno, name, &marks);
        fprintf(fp, "%d %s %.2f\\n", rollno, name, marks);
    }

    fclose(fp);
    printf("Data written to file successfully.\\n\\n");

    /* ---- READ ---- */
    fp = fopen("students.txt", "r");
    if (fp == NULL) {
        printf("Error: Cannot open file for reading!\\n");
        getch();
        return;
    }

    printf("--- Contents of students.txt ---\\n");
    printf("%-8s %-20s %8s\\n", "Roll No", "Name", "Marks");
    printf("%-8s %-20s %8s\\n", "-------", "----", "-----");

    while (fscanf(fp, "%d %s %f", &rollno, name, &marks) != EOF) {
        printf("%-8d %-20s %8.2f\\n", rollno, name, marks);
    }

    fclose(fp);

    getch();
}

/*
Sample Run:
Enter number of students: 3
101 Alice 92.5
102 Bob 85.0
103 Carol 78.5
Data written to file successfully.

--- Contents of students.txt ---
Roll No  Name                    Marks
-------  ----                    -----
101      Alice                   92.50
102      Bob                     85.00
103      Carol                   78.50
*/`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – fgets() and fputs() for Line-by-Line I/O",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    FILE *fp;
    char line[100];

    /* Write lines using fputs */
    fp = fopen("notes.txt", "w");
    if (fp == NULL) { printf("Error!\\n"); return; }

    fputs("C Programming is powerful.\\n", fp);
    fputs("File handling stores data permanently.\\n", fp);
    fputs("Always close files after use.\\n", fp);
    fclose(fp);

    /* Read lines using fgets */
    fp = fopen("notes.txt", "r");
    if (fp == NULL) { printf("Error!\\n"); return; }

    printf("Contents of notes.txt:\\n");
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);
    }
    fclose(fp);

    getch();
}

/*
Output:
Contents of notes.txt:
C Programming is powerful.
File handling stores data permanently.
Always close files after use.
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q8 – Pointer Arithmetic
    // ────────────────────────────────────────────
    {
      id: "co6-q8",
      title:
        "Explain pointer arithmetic in C with examples.",
      source: "May 2023 / May 2024",
      marks: 4,
      blocks: [
        {
          type: "text",
          content: `## Pointer Arithmetic in C

**Pointer arithmetic** refers to performing arithmetic operations on pointer variables. Unlike regular integers, pointer arithmetic is scaled by the **size of the pointed-to data type**.

### Allowed Operations on Pointers

| Operation | Meaning | Example |
|-----------|---------|---------|
| **Increment** (\`++\`) | Move pointer to next element | \`ptr++\` |
| **Decrement** (\`--\`) | Move pointer to previous element | \`ptr--\` |
| **Add integer** (\`ptr+n\`) | Move forward by n elements | \`ptr + 3\` |
| **Subtract integer** (\`ptr-n\`) | Move backward by n elements | \`ptr - 2\` |
| **Subtract two pointers** | Distance between elements | \`ptr2 - ptr1\` |
| **Compare pointers** | Compare positions | \`ptr1 < ptr2\` |

### Scale Factor

When you write \`ptr + 1\`, the actual byte increment is \`1 × sizeof(*ptr)\`:

| Pointer Type | sizeof | \`ptr + 1\` advances by |
|-------------|--------|------------------------|
| \`char *\` | 1 byte | **1 byte** |
| \`int *\` | 4 bytes | **4 bytes** |
| \`float *\` | 4 bytes | **4 bytes** |
| \`double *\` | 8 bytes | **8 bytes** |

### Example Memory Trace

\`\`\`
int arr[] = {10, 20, 30, 40, 50};
int *p = arr;

p      → address 1000, value 10
p + 1  → address 1004, value 20   (not 1001!)
p + 2  → address 1008, value 30
p + 3  → address 1012, value 40
p + 4  → address 1016, value 50
\`\`\``,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Pointer Arithmetic Demonstration",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    int *start, *end;
    int i;

    printf("Pointer Arithmetic (int array, sizeof int = %d bytes):\\n\\n",
           sizeof(int));

    for (i = 0; i < 5; i++) {
        printf("p + %d = %p  |  *(p+%d) = %d\\n",
               i, (p + i), i, *(p + i));
    }

    printf("\\nSubtracting two pointers:\\n");
    start = &arr[0];
    end   = &arr[4];
    printf("&arr[4] - &arr[0] = %d (elements apart)\\n",
           (int)(end - start));

    /* Traversal using pointer increment */
    printf("\\nUsing p++ to traverse:\\n");
    p = arr;
    while (p <= &arr[4]) {
        printf("%d ", *p);
        p++;   /* advances by sizeof(int) = 4 bytes */
    }
    printf("\\n");

    getch();
}

/*
Output:
Pointer Arithmetic (int array, sizeof int = 4 bytes):

p + 0 = 0x...00  |  *(p+0) = 10
p + 1 = 0x...04  |  *(p+1) = 20
p + 2 = 0x...08  |  *(p+2) = 30
p + 3 = 0x...0c  |  *(p+3) = 40
p + 4 = 0x...10  |  *(p+4) = 50

Subtracting two pointers:
&arr[4] - &arr[0] = 4 (elements apart)

Using p++ to traverse:
10 20 30 40 50
*/`,
        },
      ],
    },

    // ────────────────────────────────────────────
    // Q9 – Call by Value vs Call by Reference
    // ────────────────────────────────────────────
    {
      id: "co6-q9",
      title:
        "Explain call by reference. Develop a C program to swap the values of two variables using call by reference.",
      source: "May 2023",
      marks: 8,
      blocks: [
        {
          type: "text",
          content: `## Call by Value vs Call by Reference

### Call by Value

- A **copy** of the argument is passed to the function.
- Changes inside the function do **NOT** affect the original variable.
- Default parameter passing in C.

\`\`\`c
void addTen(int x) {
    x = x + 10;         /* modifies local copy only */
}
int a = 5;
addTen(a);
printf("%d", a);        /* still prints 5 */
\`\`\`

---

### Call by Reference (Using Pointers)

- The **address** of the argument is passed to the function.
- The function works on the **original variable** through the pointer.
- Changes inside the function **DO** affect the original variable.

\`\`\`c
void addTen(int *x) {
    *x = *x + 10;       /* modifies original variable */
}
int a = 5;
addTen(&a);             /* pass address */
printf("%d", a);        /* prints 15 */
\`\`\`

---

### Comparison Table

| Feature | Call by Value | Call by Reference |
|---------|---------------|-------------------|
| Passed | Copy of value | Address of variable |
| Original | Unchanged | Modified |
| Function accesses | Local copy | Original location |
| Syntax | \`f(a)\` | \`f(&a)\` in call; \`*ptr\` in function |
| Multiple return | Not possible | Yes (modify multiple vars) |`,
        },
        {
          type: "diagram",
          title: "Call by Value vs Call by Reference",
          content: `graph TD
    subgraph CBV["Call by Value"]
        V1["main: a=10"] --> V2["copy: x=10 (local)"]
        V2 --> V3["x = x+5 → x=15"]
        V3 --> V4["main: a=10 (unchanged)"]
    end
    subgraph CBR["Call by Reference"]
        R1["main: a=10 (addr=1000)"] --> R2["ptr = 1000"]
        R2 --> R3["*ptr = *ptr+5 → mem[1000]=15"]
        R3 --> R4["main: a=15 (changed!)"]
    end
    style V1 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style V4 fill:#0ea5e9,stroke:#0284c7,color:#fff
    style R1 fill:#f43f5e,stroke:#e11d48,color:#fff
    style R4 fill:#10b981,stroke:#059669,color:#fff`,
        },
        {
          type: "code",
          language: "c",
          title: "Program – Swap Using Call by Reference (Full Example)",
          content: `#include<stdio.h>
#include<conio.h>

/* Call by Reference — operates on original variables via pointers */
void swap(int *a, int *b) {
    int temp;
    temp = *a;    /* save value at address a */
    *a   = *b;    /* put value at b into address a */
    *b   = temp;  /* put saved value into address b */
}

/* Call by Value — cannot swap original variables */
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    /* changes are local; original a, b unaffected */
}

void main() {
    clrscr();
    int x = 10, y = 20;

    printf("Original: x = %d, y = %d\\n", x, y);

    /* Call by Value (won't change x, y) */
    swapByValue(x, y);
    printf("After swapByValue:     x = %d, y = %d  (NO change)\\n", x, y);

    /* Call by Reference (will change x, y) */
    swap(&x, &y);
    printf("After swap (by ref):   x = %d, y = %d  (SWAPPED)\\n", x, y);

    getch();
}

/*
Output:
Original: x = 10, y = 20
After swapByValue:     x = 10, y = 20  (NO change)
After swap (by ref):   x = 20, y = 10  (SWAPPED)
*/`,
        },
      ],
    },
  ],
}
