import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 sm:px-8">
      <div>
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 text-muted-foreground">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-8">
          <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 px-4")}>
            Back to the portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
