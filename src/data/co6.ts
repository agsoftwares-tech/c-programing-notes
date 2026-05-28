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

Arrays and pointers are **closely related** in C. The name of an array acts as a **constant pointer** pointing to its first element.

### Key Relationship

If we declare:
\`int arr[5] = {10, 20, 30, 40, 50};\`

Then:
- \`arr\` is equivalent to \`&arr[0]\` — the address of the first element.
- Each successive element is at an address **4 bytes higher** (for \`int\` on a 32-bit system).

### Equivalence Table

| Array Notation | Pointer Notation | Meaning |
|---|---|---|
| \`arr[0]\` or \`*arr\` | \`*(arr + 0)\` | Value of 1st element = 10 |
| \`arr[1]\` | \`*(arr + 1)\` | Value of 2nd element = 20 |
| \`arr[2]\` | \`*(arr + 2)\` | Value of 3rd element = 30 |
| \`arr[i]\` | \`*(arr + i)\` | Value of (i+1)th element |
| \`&arr[0]\` | \`arr\` | Base address of the array |
| \`&arr[i]\` | \`arr + i\` | Address of ith element |

### Important Notes
1. An array name is a **constant pointer** — you cannot write \`arr = arr + 1;\` (illegal), but you can do \`p = arr;\` and then \`p++;\`.
2. Pointer arithmetic automatically accounts for the element size: \`arr + 1\` moves **4 bytes** ahead (for \`int\`), not just 1 byte.`,
        },
        {
          type: "code",
          language: "c",
          title: "Array and pointer access — both notations",
          content: `#include<stdio.h>
#include<conio.h>

void main() {
    clrscr();
    int arr[5] = {10, 20, 30, 40, 50};
    int *p;
    int i;

    p = arr;   /* p stores the base address of arr */

    printf("Base address of arr = %u\\n\\n", arr);

    printf("Using array notation:\\n");
    for(i = 0; i < 5; i++)
        printf("arr[%d] = %d  (address: %u)\\n", i, arr[i], &arr[i]);

    printf("\\nUsing pointer notation:\\n");
    for(i = 0; i < 5; i++)
        printf("*(p + %d) = %d  (address: %u)\\n", i, *(p + i), p + i);

    getch();
}

/*
Output (addresses are illustrative):
Base address of arr = 65516

Using array notation:
arr[0] = 10  (address: 65516)
arr[1] = 20  (address: 65518)
arr[2] = 30  (address: 65520)
arr[3] = 40  (address: 65522)
arr[4] = 50  (address: 65524)

Using pointer notation:
*(p + 0) = 10  (address: 65516)
*(p + 1) = 20  (address: 65518)
*(p + 2) = 30  (address: 65520)
*(p + 3) = 40  (address: 65522)
*(p + 4) = 50  (address: 65524)
*/`,
        },
        {
          type: "diagram",
          title: "Pointer traversal through array — arr[i] ≡ *(p+i)",
          content: `graph LR
    P["p = arr<br/>(base addr)"] --> A["arr[0]=10<br/>*(p+0)<br/>addr: 1000"]
    A --> B["arr[1]=20<br/>*(p+1)<br/>addr: 1002"]
    B --> C["arr[2]=30<br/>*(p+2)<br/>addr: 1004"]
    C --> D["arr[3]=40<br/>*(p+3)<br/>addr: 1006"]
    D --> E["arr[4]=50<br/>*(p+4)<br/>addr: 1008"]
    style P fill:#6366f1,stroke:#4f46e5,color:#fff
    style A fill:#8b5cf6,color:#fff
    style B fill:#06b6d4,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#f59e0b,color:#fff
    style E fill:#ec4899,color:#fff`,
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
          content: `## Swapping Two Numbers Using Pointers

### Key Pointer Operators

| Operator | Name | Use |
|---|---|---|
| \`&\` | Address-of | Returns the **memory address** of a variable |
| \`*\` | Dereference | Accesses the **value stored** at the given address |

**Example:**
\`\`\`c
int a = 5;
int *p = &a;    /* p holds address of a (e.g., 1000) */
printf("%d", *p);  /* prints 5 — the value at address 1000 */
\`\`\`

---

### Why Use Pointers for Swapping?

C passes arguments to functions **by value** — the function receives a copy of the variable, not the original. So changes made inside the function do **not affect** the original variables.

To modify the original variables, we pass their **addresses** (\`&a\`, \`&b\`) so the function can use the dereference operator \`*\` to directly modify the values at those addresses. This is called **Call by Reference** (pass by address).

---

### Algorithm

1. **Start**
2. Read two numbers \`a\` and \`b\`.
3. Call \`swap(&a, &b)\` — passing addresses.
4. Inside \`swap()\`:
   - \`temp = *p\`  (save first value)
   - \`*p = *q\`    (copy second value to first location)
   - \`*q = temp\`  (copy saved value to second location)
5. Print swapped values.
6. **Stop**

---

### Dry Run (a = 5, b = 10)

| Step | Variable | Address | Value |
|---|---|---|---|
| Before call | a | 1000 | 5 |
| Before call | b | 2000 | 10 |
| p = &a, q = &b | p | — | 1000 |
| | q | — | 2000 |
| temp = *p | temp | — | 5 |
| *p = *q | a (at 1000) | 1000 | **10** |
| *q = temp | b (at 2000) | 2000 | **5** |
| After call | a | 1000 | **10** ✓ |
| After call | b | 2000 | **5** ✓ |`,
        },
        {
          type: "code",
          language: "c",
          title: "Swap two numbers using pointers (call by reference)",
          content: `#include<stdio.h>
#include<conio.h>

/*
 * swap() receives the ADDRESSES of a and b.
 * Using * (dereference), it modifies the original variables.
 */
void swap(int *p, int *q) {
    int temp;
    temp = *p;   /* Step 1: save value at address p   */
    *p   = *q;   /* Step 2: copy value from q into p  */
    *q   = temp; /* Step 3: copy saved value into q   */
}

void main() {
    clrscr();
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("\\nBefore swap: a = %d,  b = %d\\n", a, b);

    swap(&a, &b);   /* pass addresses — call by reference */

    printf("After swap:  a = %d,  b = %d\\n", a, b);

    getch();
}

/*
Sample Run:
Enter two numbers: 5 10

Before swap: a = 5,  b = 10
After swap:  a = 10, b = 5
*/`,
        },
        {
          type: "diagram",
          title: "Memory state before and after swapping via pointers",
          content: `graph TD
    subgraph Before["Before swap(&a, &b)"]
        A1["a = 5<br/>addr: 1000"]
        B1["b = 10<br/>addr: 2000"]
    end
    subgraph Inside["Inside swap(p=1000, q=2000)"]
        T["temp = *p = 5"]
        P["*p = *q → addr 1000 gets 10"]
        Q["*q = temp → addr 2000 gets 5"]
        T --> P --> Q
    end
    subgraph After["After swap returns"]
        A2["a = 10<br/>addr: 1000"]
        B2["b = 5<br/>addr: 2000"]
    end
    Before --> Inside --> After
    style A1 fill:#6366f1,color:#fff
    style B1 fill:#8b5cf6,color:#fff
    style A2 fill:#10b981,color:#fff
    style B2 fill:#10b981,color:#fff`,
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
