import ProfileCard from '@/components/ProfileCard';
import LinkCard from '@/components/LinkCard';
import { profile, links } from '@/data/profile';

export default function Home() {
  return (
    <main className="max-w-[480px] mx-auto w-full px-4 py-14 flex flex-col items-center">
      <ProfileCard profile={profile} />
      <div className="w-full flex flex-col gap-[10px]">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
      <footer className="mt-14 text-xs text-[var(--muted)]">
        <a href="/" className="text-[var(--accent)] font-medium hover:underline">
          링크나무
        </a>
        로 만들었어요
      </footer>
    </main>
  );
}
