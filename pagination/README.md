# Pagination

## 📌 What is Pagination?

**Pagination** is a technique used to divide a large list of data into **smaller parts (pages)**.

Instead of showing all data at once, we show:
- Page 1 → first few items
- Page 2 → next few items
- Page 3 → next few items

Pagination is widely used in:
- Websites (search results, posts, comments)
- APIs
- Databases
- Backend systems

---

## 📌 Why Do We Need Pagination?

Pagination helps to:
- Improve performance
- Reduce memory usage
- Make data easier to read
- Avoid loading huge lists at once

**Example:**
- 10,000 users in a database
- Show only 20 users per page

---

## 📌 Page and Page Size

Pagination usually uses two parameters:

### `page`
- Page number
- **Starts from 1**
- Page 1 is the first page

### `page_size`
- Number of items per page
- Example: 10 items per page

---

## 📌 Indexes in Python Lists

Python lists are **0-indexed**:

