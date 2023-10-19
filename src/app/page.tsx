import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-6 p-10 md:p-12 lg:p-24">
      <h1 className="text-4xl font-bold">
        Welcome to nextjs-typescript & tailwind CSS starter project!
      </h1>
      <h2 className="text-left text-3xl text-red-400">Project features:</h2>
      <ul className="border p-4">
        <li> ⚡️ Next.js 13</li>
        <li>🆕 app router</li>
        <li>⚛ Folder structure by Atomic Design System</li>
        <li>⚛️ React 18</li>
        <li>☑️ TypeScript</li>
        <li>
          🪡 Tailwind CSS 3 — Configured with the official Tailwind Plugins
        </li>
        <li>
          📈 Absolute Import and Path Alias — Import components using @/ prefix
        </li>
        <li>📏 ESLint — Find and fix problems in your code.</li>
        <li>💖 Prettier — Format your code consistently</li>
        <li>
          🐶 Husky & Lint Staged — Run scripts on your staged files before they
          are committed
        </li>
      </ul>

      <section className="py-4 ">
        <h2 className="py-2 text-left text-3xl leading-none">
          You can connect with me:
        </h2>
        <ul className="flex gap-3 ">
          <li>
            <Link className="text-blue-500" href={"https://jsdojo.dev"}>
              🌎 My Website
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500"
              href={"https://www.linkedin.com/in/baqirnekfar123/"}
            >
              🗒️ LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500"
              href={"https://www.youtube.com/channel/UCttmLaFgHTa2W9qTvb-YTpA"}
            >
              📀 YouTube
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500"
              href={"https://www.instagram.com/baqirnekfar/"}
            >
              📸 Instagram
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
