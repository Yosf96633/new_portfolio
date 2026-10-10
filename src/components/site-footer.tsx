import { YousafWordmark } from "./yousaf-wordmark";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <YousafWordmark />
      <div className="mx-auto flex min-h-32 flex-col justify-center border-x border-edge py-8 sm:min-h-40 sm:py-10 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Original portfolio designed and developed by{" "}
          <a
            href="https://chanhdai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Chánh Đại<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Cloned and modified by{" "}
          <a
            href="https://github.com/Yosf96633"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Yousaf<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
