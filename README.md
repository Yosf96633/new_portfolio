# Muhammad Yousaf — Portfolio

Personal portfolio for [Muhammad Yousaf](https://github.com/Yosf96633), a full stack developer working across web applications, Linux systems, and agentic AI.

**Live site:** [yousaf-dev18.vercel.app](https://yousaf-dev18.vercel.app/) · **Source:** [Yosf96633/new_portfolio](https://github.com/Yosf96633/new_portfolio)

## What is here

- A responsive profile homepage with an introduction, experience, projects, social links, and downloadable CV.
- Inside the Build pages for myShell, DocsAI, and Auto Hunt, plus a decision log explaining engineering tradeoffs.
- Interactive retrieval and shell trace labs with sample questions and commands selected through shadcn Dropdown Menu controls.
- A technology icon grid ordered by programming languages, frontend, backend, databases and ORMs, AI, development tools, and security.
- A GitHub contribution graph and light/dark theme support.
- A contact form using React Hook Form, Zod, and EmailJS.

The portfolio itself uses **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Technologies shown in the icon grid describe my broader experience; they are not all dependencies of this site.

The lab menus reuse the site's themed, Radix-based component, with the [official shadcn/ui Dropdown Menu source](https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/dropdown-menu.tsx) as the reference. They support keyboard navigation and mark the current selection.

## Pages and labs

| Route              | Content                                             |
| ------------------ | --------------------------------------------------- |
| `/`                | Profile and links to builds, decisions, and labs    |
| `/builds/myshell`  | Shell implementation walkthrough                    |
| `/builds/docsai`   | Document retrieval walkthrough                      |
| `/builds/autohunt` | Auto Hunt architecture walkthrough                  |
| `/decisions`       | Engineering decisions and their tradeoffs           |
| `/labs`            | Lab index                                           |
| `/labs/retrieval`  | Compare dense, sparse, hybrid, and reranked results |
| `/labs/shell`      | Step through a simulated shell pipeline             |

Both labs run in the browser without API keys. Retrieval uses synthetic passages and curated scores, with rank fusion computed locally. Shell Trace is a simulation and does not execute commands.

## Run locally

Install Node.js and [pnpm](https://pnpm.io/). The repository declares pnpm `10.10.0` as its package manager.

```bash
git clone https://github.com/Yosf96633/new_portfolio.git
cd new_portfolio
pnpm install
pnpm dev
```

Open [http://localhost:1408](http://localhost:1408). To check a production build, run `pnpm build` and then `pnpm start`.

## Environment variables

Create `.env.local` in the project root if you want the contact form to send messages:

```dotenv
APP_URL=http://localhost:1408
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure the service, template, and public key in [EmailJS](https://www.emailjs.com/). The contact form calls EmailJS from the browser. `APP_URL` sets the site URL in `src/config/site.ts`; set it to your deployed URL in production.

The repository also has a separate `POST /api/send-message` endpoint using Gmail SMTP. If you use that endpoint, set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `MY_EMAIL` in the server environment. The visible contact form does not call this endpoint.

## Edit the portfolio

| Content                                | File                                                                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name, bio, avatar, and contact details | [`src/features/profile/data/user.ts`](src/features/profile/data/user.ts)                                                                         |
| Projects                               | [`src/features/profile/data/projects.ts`](src/features/profile/data/projects.ts)                                                                 |
| Experience                             | [`src/features/profile/data/experiences.ts`](src/features/profile/data/experiences.ts)                                                           |
| Technology icons and their order       | [`src/features/profile/data/tech-stack.ts`](src/features/profile/data/tech-stack.ts)                                                             |
| Social links and CV link               | [`src/features/profile/data/social-links.ts`](src/features/profile/data/social-links.ts)                                                         |
| Site URL and GitHub username           | [`src/config/site.ts`](src/config/site.ts)                                                                                                       |
| Contact form                           | [`src/features/profile/components/form.tsx`](src/features/profile/components/form.tsx)                                                           |
| Build walkthroughs                     | [`src/features/profile/data/builds.ts`](src/features/profile/data/builds.ts), [`autohunt-build.ts`](src/features/profile/data/autohunt-build.ts) |
| Decision log                           | [`src/features/profile/data/decisions.ts`](src/features/profile/data/decisions.ts)                                                               |
| Lab examples and simulation data       | [`src/features/labs/data`](src/features/labs/data)                                                                                               |
| Shared lab dropdown                    | [`src/features/labs/components/lab-selector.tsx`](src/features/labs/components/lab-selector.tsx)                                                 |

Most technology assets are stored in [`public/tech-icons/github-profile`](public/tech-icons/github-profile). Their sources and licenses are recorded in [`SOURCES.md`](public/tech-icons/github-profile/SOURCES.md). The GitHub contribution graph fetches public activity from `github-contributions-api.jogruber.de`.

## Checks

```bash
pnpm check-types
pnpm lint
pnpm build
node --import tsx --test src/features/labs/data/*.test.ts
```

## License

This project is distributed under the [MIT License](LICENSE). The license file retains the original copyright notice for Chánh Đại. Third-party logos remain the property of their respective owners; see the icon source notes above.

The original portfolio was designed and developed by [Chánh Đại](https://github.com/ncdai/chanhdai.com), then cloned and modified by Muhammad Yousaf. The footer retains this attribution.
