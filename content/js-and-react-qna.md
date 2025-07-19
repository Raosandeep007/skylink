---
title: "JavaScript and React Interview Prep Checklist"
publishedAt: "2025-01-27"
summary: "A comprehensive checklist covering core JavaScript concepts, React fundamentals, advanced topics, and practical problem-solving challenges for frontend developers."
---
---
#### JavaScript Basics
- [ ] Understand **Promise**, **async/await**, and their usage.
- [ ] Recognise and handle **callback hell**.
- [ ] Explain the **event loop** mechanism.
- [ ] Use **setTimeout** effectively.
- [ ] Use **setInterval** effectively.
- [ ] Understand the **placement of script tags** and their effect on the **Critical Rendering Path (CRP)**.
- [ ] Understand **block scoping** in JavaScript.
- [ ] Explain the concept of the **Temporal Dead Zone (TDZ)**.
- [ ] Understand **closures** and their practical use cases.
- [ ] Embrace **functional programming** principles.

#### Advanced JavaScript Concepts

- [ ] Write a **polyfill** for standard JavaScript methods.
- [ ] Understand what a **pure function** is and its characteristics.
- [ ] Explain the behaviour of **this** keyword.
- [ ] Use **call**, **apply**, and **bind** effectively.
- [ ] Differentiate between **debounce** and **throttle**, and implement both.
- [ ] Implement **event delegation**.

#### Storage and Data Handling

- [ ] Store data in the browser using [Storage APIs](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
  - [ ] **Cookies**
  - [ ] **Web Storage**
    - [ ] **localStorage**
    - [ ] **sessionStorage**
  - [ ] Use **IndexedDB** for storing large amounts of structured data.
  - [ ] Understand the **Cache API** and its use cases.
  - [ ] **Origin Private File System (OPFS)**

#### Custom Implementations

- [ ] Implement **setInterval** using **setTimeout**.
- [ ] Call an API after multiple button clicks, using the latest updated page.

#### React Basics and Advanced Topics

- [ ] Differentiate between an **event listener** and **onEvent** in React.
- [ ] Use **React Hooks** effectively.
- [ ] Understand **React lifecycle methods**.
- [ ] Implement **lazy loading** in React.
- [ ] Explain the **Virtual DOM**:
  - [ ] Understand **reconciliation**.
  - [ ] Understand **React Fiber**.
- [ ] Differentiate between **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)**.
- [ ] Implement **routing** in React, including **protected routes**.
- [ ] Understand and use **Higher-Order Components (HOC)**.

---

#### Core JavaScript

- [ ] **Closures**: Implement a `createCounter` function using closures.
- [ ] **Memoization**: Write a `memoize` function to cache expensive function results.
- [ ] **Polyfills**: Implement a polyfill for `Array.prototype.map`, `Array.prototype.reduce`, and `Function.prototype.bind`.
- [ ] **Asynchronous Programming**: Write a `fetchWithRetry` function with retries on failure.
- [ ] **PromiseAll**: Implement a `promiseAll` function similar to `Promise.all`.
- [ ] **Debounce**: Implement a debounce function for optimizing input-heavy UI elements.
- [ ] **Event Loop**: Explain and simulate the output of a given event loop scenario.

#### Arrays

- [ ] **Array Rotation**: Rotate an array by `k` positions.
- [ ] **Max Subarray Sum**: Find the maximum sum of a subarray using Kadane’s Algorithm.
- [ ] **Two-Pointer**: Find all pairs in an array that sum up to a specific target.
- [ ] **Sort 0s, 1s, 2s**: Sort an array of 0s, 1s, and 2s without extra space.
- [ ] **Sliding Window**: Find the longest substring without repeating characters.
- [ ] **Max Subarray Sum (k)**: Find the maximum sum of a subarray of size `k`.

#### Strings

- [ ] **Anagram Check**: Check if a string is a valid anagram of another string.
- [ ] **First Non-Repeating Character**: Find the first non-repeating character in a string.
- [ ] **Longest Palindromic Substring**: Find the longest palindromic substring.
- [ ] **Rearranged Palindrome**: Check if a string can be rearranged into a palindrome.

#### Objects

- [ ] **Deep Cloning**: Implement a deep clone function for a nested object.
- [ ] **Flattening Objects**: Flatten a deeply nested object into a single-level object.
- [ ] **Frequency Count**: Count the frequency of characters or elements in an array or string.

#### Practical Applications

- [ ] **Pagination**: Write a function to paginate an array based on page number and size.
- [ ] **Debouncing**: Implement a debounce function to optimize search inputs.
- [ ] **Throttling**: Implement a throttle function to limit API calls.

#### Miscellaneous

- [ ] **DOM Serialization**: Serialize and deserialize a DOM tree structure.
- [ ] **Event Delegation**: Handle clicks on dynamically added list items using event delegation.
- [ ] **LRU Cache**: Implement an LRU (Least Recently Used) Cache using JavaScript `Map`.
- [ ] **Custom Promise**: Create a custom Promise class with `then`, `catch`, and `resolve`.
- [ ] **Module Bundler**: Write a dependency graph resolver for JavaScript modules.
---- 