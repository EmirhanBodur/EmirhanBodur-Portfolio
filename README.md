# emirhanbodur.com

Welcome to the repository of my personal portfolio. This project represents a significant milestone in my development journey, transitioning from static web pages to a scalable, data-driven web application.

Built with **Next.js 14 (App Router)** and **Clean Architecture** principles, this portfolio is not just a showcase of my work, but a demonstration of my ability to build modular, maintainable, and high-performance software.

To ensure the content remains dynamic and easy to manage, I have integrated a robust ecosystem of APIs:

- **GitHub REST API:** Automatically fetches and displays my latest repositories.
- **Contentful (Headless CMS):** Manages my biography, experience, and education data in real-time.
- **Nodemailer:** Handles secure, server-side email delivery for the contact form.

## 📂 Architecture & Directory Structure

The project structure is meticulously organized to separate concerns, ensuring that the **Presentation Layer** (UI) remains decoupled from the **Logic Layer** (Data).

```text
src/
├── app/          # Application Layer (Routing & Pages)
├── components/   # Presentation Layer (UI Components)
├── hooks/        # Client-Side Logic Layer
└── lib/          # Server-Side Logic & Configuration Layer
```
