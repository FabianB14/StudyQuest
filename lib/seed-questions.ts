import { Question } from "./types";

/**
 * Seed pack used as a fallback when no Anthropic key is set, when the API errors,
 * or for the demo "Try a CS warm-up" button. Topic: C++ / CSC 2430-style basics
 * — picked to match the founding study session.
 */
export const SEED_CS_QUESTIONS: Question[] = [
  {
    id: "seed-trace-1",
    type: "trace",
    difficulty: "easy",
    prompt: "What does this program print?",
    snippet:
      'int x = 5;\nint y = x++;\nstd::cout << x << " " << y;',
    answer: "6 5",
    acceptable: ["6 5", "6, 5"],
    explanation:
      "Post-increment assigns y = 5 first, then increments x to 6. So output is `6 5`.",
    tag: "operators",
  },
  {
    id: "seed-fill-1",
    type: "fill",
    difficulty: "easy",
    prompt:
      "Which header do you need to include to use std::string in C++?",
    answer: "<string>",
    acceptable: ["<string>", "string", "#include <string>"],
    explanation:
      "`#include <string>` brings in the std::string class. <iostream> is for I/O, not strings.",
    tag: "headers",
  },
  {
    id: "seed-recall-1",
    type: "recall",
    difficulty: "medium",
    prompt:
      "What is the Rule of Three in C++? (one short sentence is fine)",
    answer:
      "if a class needs a custom destructor, copy constructor, or copy assignment, it almost certainly needs all three",
    acceptable: [
      "destructor copy constructor copy assignment",
      "if you define one of destructor copy constructor copy assignment you should define all three",
    ],
    explanation:
      "If your class manages a resource (heap memory, file handle, etc.) and needs a custom destructor, it almost certainly also needs a custom copy constructor and copy assignment operator. Otherwise default copies will alias the resource and double-free or leak.",
    tag: "rule-of-three",
  },
  {
    id: "seed-bug-1",
    type: "bug",
    difficulty: "medium",
    prompt:
      "This loop is supposed to print 0 through 9. What's the bug?",
    snippet: "for (int i = 0; i <= 10; i++) {\n  std::cout << i << ' ';\n}",
    answer: "off-by-one",
    acceptable: [
      "off by one",
      "off-by-one",
      "<= should be <",
      "should be i < 10",
      "<= 10 prints 11 numbers",
    ],
    explanation:
      "The condition `i <= 10` runs from 0..10 (eleven iterations). It should be `i < 10` to print 0..9.",
    tag: "loops",
  },
  {
    id: "seed-trace-2",
    type: "trace",
    difficulty: "medium",
    prompt: "What does this print?",
    snippet:
      'std::string s = "abcdef";\nstd::cout << s.substr(2, 3);',
    answer: "cde",
    acceptable: ["cde"],
    explanation:
      "substr(pos, len) — start at index 2, take 3 chars: c, d, e.",
    tag: "strings",
  },
  {
    id: "seed-fill-2",
    type: "fill",
    difficulty: "easy",
    prompt:
      "What keyword do you use to prevent a member function from modifying the object?",
    answer: "const",
    acceptable: ["const"],
    explanation:
      "Marking a member function `const` (e.g. `int size() const;`) tells the compiler it won't mutate the object, and lets it be called on const instances.",
    tag: "const-correctness",
  },
  {
    id: "seed-recall-2",
    type: "recall",
    difficulty: "easy",
    prompt:
      "What's the difference between `\\n` and `std::endl`?",
    answer: "endl flushes the buffer",
    acceptable: [
      "endl flushes",
      "std::endl flushes the buffer",
      "endl is newline plus flush",
      "endl flushes the output buffer",
    ],
    explanation:
      "Both insert a newline. `std::endl` ALSO flushes the output buffer, which is slower in tight loops. Prefer `\\n` unless you need the flush.",
    tag: "io",
  },
  {
    id: "seed-trace-3",
    type: "trace",
    difficulty: "hard",
    prompt: "What does this print?",
    snippet:
      'int arr[] = {10, 20, 30, 40};\nint *p = arr + 1;\nstd::cout << *(p + 2);',
    answer: "40",
    acceptable: ["40"],
    explanation:
      "p points at arr[1] (=20). p+2 points at arr[3] (=40). Dereferencing gives 40.",
    tag: "pointers",
  },
  {
    id: "seed-bug-2",
    type: "bug",
    difficulty: "hard",
    prompt: "Why is this dangerous?",
    snippet:
      "char* greet() {\n  char msg[] = \"hello\";\n  return msg;\n}",
    answer: "returns pointer to local",
    acceptable: [
      "returning a pointer to a local variable",
      "dangling pointer",
      "msg is on the stack",
      "returns address of stack memory",
      "returning local stack memory",
    ],
    explanation:
      "`msg` lives on the stack and is destroyed when the function returns. The caller gets a dangling pointer — undefined behavior.",
    tag: "memory",
  },
  {
    id: "seed-boss-1",
    type: "trace",
    difficulty: "boss",
    prompt:
      "BOSS FIGHT: trace this carefully. What does it print?",
    snippet:
      'std::string s = "hello";\nfor (int i = 0; i < (int)s.size(); i++) {\n  s[i] = s[i] - \'a\' + \'A\';\n}\nstd::cout << s;',
    answer: "HELLO",
    acceptable: ["HELLO"],
    explanation:
      "For each char, subtract 'a' (97) to get 0..25, then add 'A' (65) to get the uppercase code. 'h'->'H', 'e'->'E', etc. Result: HELLO.",
    tag: "strings",
  },
];
