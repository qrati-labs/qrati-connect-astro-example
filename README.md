# Qrati Connect — Astro Example

A minimal [Astro](https://astro.build) application that embeds the **Qrati Connect** widget using the web-component CDN.

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:4321** and you will see the Qrati Connect widget rendered on the page.

## How It Works

### 1. Define your Organisation ID

In the page frontmatter:

```astro
---
const EXAMPLE_ORG_ID = 'YOUR_ORGANIZATION_ID';
---
```

Replace `YOUR_ORGANIZATION_ID` with the ID from your [Qrati Dashboard](https://qrati.com).

### 2. Load the widget

The CDN script is loaded via a client-side `<script>` tag inside the Astro page:

```astro
<script>
  import('https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect@latest/element/web.es.js');
</script>
```

### 3. Render the element

```astro
<qrati-connect
  organization-id={EXAMPLE_ORG_ID}
  theme="light"
  router="hash"
></qrati-connect>
```

> **Note:** Astro renders pages statically by default. The `<script>` tag runs on the client and registers the `<qrati-connect>` custom element. No "client directive" is needed — web components hydrate themselves.

## Available Attributes

| Attribute           | Required | Default    | Description                          |
| ------------------- | -------- | ---------- | ------------------------------------ |
| `organization-id`   | Yes      | —          | Your Qrati organisation ID           |
| `theme`             | No       | `light`    | `light` or `dark`                    |
| `router`            | No       | `memory`   | `memory` or `hash`                   |
| `uid`               | No       | —          | Logged-in user ID for personalisation |
| `fname`             | No       | —          | User's first name                    |
| `lname`             | No       | —          | User's last name                     |

## Tech Stack

- **Astro 5** — The web framework for content-driven websites
- **Scoped CSS** — Astro's built-in component-scoped styles

## Learn More

- [Qrati Connect Documentation](https://qrati.com/docs)
- [Astro Documentation](https://docs.astro.build)
- [Astro + Custom Elements](https://docs.astro.build/en/guides/client-side-scripts/)

---

### Open it in

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/qrati-labs/qrati-connect-astro-example)
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/qrati-labs/qrati-connect-astro-example)
[![Open in VS Code](https://img.shields.io/badge/Open_in-VS_Code-blue?logo=visualstudiocode)](https://vscode.dev/github/qrati-labs/qrati-connect-astro-example)

---

### About Qrati

**Qrati** is a community engagement platform that helps organisations collect feedback, run Q&A sessions, and build knowledge bases — all embeddable directly into any website or app. [Learn more at qrati.com](https://qrati.com)
