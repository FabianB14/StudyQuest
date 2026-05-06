import { GameSession } from "@/components/GameSession";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <GameSession />
      <footer className="mt-10 text-center text-xs text-sq-muted">
        StudyQuest V0 prototype · built for ADHD brains · made with Claude
      </footer>
    </main>
  );
}
