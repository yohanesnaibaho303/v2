# Yohanes Pratama Naibaho — Portfolio

Personal portfolio of [Yohanes Pratama Naibaho](https://yohanesnaibaho.com/), showcasing his profile, work experience, selected projects, and technical skills.

## Features

- Six languages: English, Indonesian, Chinese, Korean, Japanese, and Arabic
- Light and dark themes persisted in the browser
- Responsive layout for desktop and mobile devices
- Accessible navigation and `prefers-reduced-motion` support
- SEO metadata, sitemap, robots.txt, and structured data
- Direct access to a PDF resume

## Tech stack

- React 19
- Vite 8
- CSS
- Bun

## Performance

Lighthouse 13.4.1 results captured on September 2, 2026, using an emulated desktop with custom throttling:

| Performance | Accessibility | Best Practices | SEO |
| ---: | ---: | ---: | ---: |
| 100 | 100 | 100 | 100 |

| FCP | LCP | Speed Index | TBT | CLS |
| ---: | ---: | ---: | ---: | ---: |
| 0.4 s | 0.8 s | 0.6 s | 0 ms | 0 |

These are synthetic test results and may vary by device, network, and deployment.
Run Lighthouse against `bun run build && bun run preview`; the development server includes React and Vite diagnostics that distort performance results.

## Run locally

Install [Bun](https://bun.sh/), then run:

```bash
bun install
bun run dev
```

Open the address displayed by Vite in the terminal.

## Production build

```bash
bun run build
bun run preview
```

The build output is available in the `dist` directory.

## Project structure

```text
src/App.jsx       Portfolio content and components
src/index.css     Styles, themes, and responsive layout
public/           Font, favicon, resume, sitemap, and robots.txt
index.html        Metadata and application entry point
```

## Customization

- Edit the profile, experience, projects, skills, and translations in `src/App.jsx`.
- Edit colors, typography, and layout in `src/index.css`.
- Replace the resume at `public/Yohanes-Pratama-Naibaho-resume.pdf`.
- Update metadata and site URLs in `index.html`, `public/sitemap.xml`, and `public/robots.txt`.

## License

This project is licensed under the [MIT License](LICENSE). You may copy, use, modify, and distribute it as long as the copyright and license notices are retained.
