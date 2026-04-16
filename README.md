# Qrati Connect — Astro Example

An [Astro](https://astro.build) example that embeds the **Qrati Connect** web component from the CDN and wraps it in a lightweight branded host page.

The current demo includes:

- A host-side light/dark mode toggle that updates the `theme` prop on `<qrati-connect>`
- External links to the example source and web editor
- Footer marketing links
- Support for both standard Qrati auth and host-provided custom auth

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Open **http://localhost:4321** to view the demo.

## Environment Variables

Create a local `.env` file from `.env.example` and configure:

```bash
PUBLIC_EXAMPLE_ORG_ID=your_organization_id
PUBLIC_QRATI_SCRIPT_URL=https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect/element/web.es.js
```

| Variable | Required | Description |
| --- | --- | --- |
| `PUBLIC_EXAMPLE_ORG_ID` | Yes | The Qrati organization ID to initialize the widget with |
| `PUBLIC_QRATI_SCRIPT_URL` | Yes | CDN URL for the Qrati Connect web component bundle |

## How It Works

### 1. Read config from Astro env

The example pulls the organization ID and CDN script URL from public environment variables:

```astro
---
const EXAMPLE_ORG_ID = import.meta.env.PUBLIC_EXAMPLE_ORG_ID;
const QRATI_SCRIPT_URL = import.meta.env.PUBLIC_QRATI_SCRIPT_URL;
const QRATI_STYLE_URL = QRATI_SCRIPT_URL?.replace(/\/web\.es\.js$/, '/styles.css');
---
```

### 2. Load the widget bundle on the client

The web component is registered in a client-side inline script:

```astro
<script is:inline define:vars={{ QRATI_SCRIPT_URL }}>
  import(QRATI_SCRIPT_URL);
</script>
```

If the CDN exposes a stylesheet, the page also includes it in the document head.

### 3. Render the custom element

```astro
<qrati-connect
  id="qrati-widget"
  organization-id={EXAMPLE_ORG_ID}
  theme="light"
  router="hash"
/>
```

Astro renders the page statically, and the custom element hydrates itself in the browser once the CDN bundle loads.

### 4. Control theme from the host page

The example includes a top-right toggle button on the Astro page. That button updates the host page theme and also syncs the widget theme by changing the `theme` attribute between `light` and `dark`.

## Props

### Core Props

Use these for every integration.

| Prop | Required | Default | Description |
| --- | --- | --- | --- |
| `organization-id` | Yes | — | Your Qrati organization ID |
| `theme` | No | `light` | Visual theme for the widget: `light` or `dark` |
| `router` | No | `memory` | Navigation mode: `memory` or `hash` |

### Custom Auth Props

Use these **only** when the target Qrati organization is configured for custom auth.

| Prop | Required in Custom Auth Mode | Description |
| --- | --- | --- |
| `uid` | Yes | Stable user ID from your host application |
| `fname` | Yes | User first name |
| `lname` | Yes | User last name |

When custom auth is enabled, the host application is responsible for supplying the user identity. In that mode, pass all three props together.

```astro
<qrati-connect
  organization-id={EXAMPLE_ORG_ID}
  uid="user_123"
  fname="Ada"
  lname="Lovelace"
  theme="dark"
  router="hash"
/>
```

If custom auth is enabled and `uid`, `fname`, or `lname` is missing, the widget will treat the configuration as invalid.

## Authentication Modes

### Standard Qrati Auth

If you only pass `organization-id` and optional UI props like `theme` and `router`, Qrati Connect manages its built-in authentication flow internally.

### Custom Auth

If your organization is configured for custom auth, the host app must pass `uid`, `fname`, and `lname`. Qrati Connect then uses that host-provided identity instead of relying on the built-in login flow.

## Tech Stack

- **Astro 6**
- **Tailwind CSS 4**
- **Qrati Connect web component** loaded from CDN
- **Cloudflare adapter** for deployment

## Learn More

- [Qrati Connect on npm](https://www.npmjs.com/package/@qratilabs/qrati-connect)
- [Astro Documentation](https://docs.astro.build)
- [Astro client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/)

---

### Open It In

[View on GitHub](https://github.com/qrati-labs/qrati-connect-astro-example)

[Open in VS Code](https://vscode.dev/github/qrati-labs/qrati-connect-astro-example)

---

### About Qrati

**Qrati** is a community engagement platform that helps organizations manage suer generated content effortlessly. Qrati Connect lets you embed the same experience into your own website so your traffic never leaves your site.
