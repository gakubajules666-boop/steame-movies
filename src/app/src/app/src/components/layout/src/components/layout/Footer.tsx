export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StreamFlix. All rights reserved.</p>
        <p>Built with Next.js, Supabase, Prisma, Stripe and HLS.js.</p>
      </div>
    </footer>
  );
}
