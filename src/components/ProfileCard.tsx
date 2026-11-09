import Image from 'next/image';
import type { Profile } from '@/lib/types';

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-11 w-full text-center">
      <div className="w-[96px] h-[96px] rounded-full overflow-hidden mb-1 shadow-[0_0_0_4px_rgba(255,255,255,0.88),0_8px_28px_rgba(140,100,60,0.18)]">
        {profile.avatar ? (
          <Image src={profile.avatar} alt={profile.name} width={96} height={96} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-[var(--accent-soft)] flex items-center justify-center text-4xl">🌳</div>
        )}
      </div>
      <h1 className="text-[22px] font-bold tracking-tight m-0">{profile.name}</h1>
      <p className="text-sm text-[var(--muted)] m-0 leading-relaxed">{profile.bio}</p>
    </div>
  );
}
