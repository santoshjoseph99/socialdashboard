import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-end px-4">
        <ModeToggle />
      </div>
    </header>
  );
}
