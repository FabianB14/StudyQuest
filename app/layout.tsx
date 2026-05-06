import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyQuest — turn any study guide into a game",
  description:
    "Upload your study guide. AI turns it into a game. Earn XP, build streaks, actually remember things. ADHD-first study app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-display antialiased">
        {children}
      </body>
    </html>
  );
}
