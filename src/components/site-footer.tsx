export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Developed by Yousaf with{" "}
          <span className="hidden dark:block">🤍 & ☕</span>
          <span className="block dark:hidden">🖤 & ☕</span>
        </p>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
