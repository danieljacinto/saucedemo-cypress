
# 🧪 SauceDemo Cypress Automation

This project contains a full suite of automated tests for the [SauceDemo](https://www.saucedemo.com/) website using [Cypress](https://www.cypress.io/).  
It was built for learning and portfolio purposes, covering end-to-end test scenarios such as login, inventory, cart, checkout, and complete purchase flow.

---

## 📂 Project Structure

```
cypress/
├── e2e/
│   ├── login.cy.js         # Login functionality tests
│   ├── inventory.cy.js     # Product listing and sorting tests
│   ├── cart.cy.js          # Shopping cart behavior
│   ├── checkout.cy.js      # Checkout process with random data
│   └── flow.cy.js          # Full user journey (login to purchase)
├── support/
│   ├── commands.js         # Custom Cypress commands
│   └── e2e.js              # Loads commands
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/saucedemo-cypress.git
cd saucedemo-cypress
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Cypress tests

#### Open Cypress Test Runner (GUI)

```bash
npx cypress open
```

#### Run in headless mode

```bash
npx cypress run
```

---

## 🛠️ Tech Stack

- [Cypress](https://docs.cypress.io/)
- [@faker-js/faker](https://github.com/faker-js/faker) – used to generate dynamic test data

---

## ✅ Test Coverage

- Login with different user types and credentials
- Error validation for required fields
- Product listing and sorting
- Add/remove items to/from cart
- Checkout with dynamically generated user info
- Full purchase flow simulation

---

## 🤝 Contributing

This is a learning project, but feel free to open issues or submit pull requests if you'd like to collaborate.

---

## 📃 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Created by **Daniel Jacinto**  
[LinkedIn](https://www.linkedin.com/in/daniel-augusto-jacinto/)
