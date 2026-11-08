import Image from 'next/image';
import type { Profile } from '@/lib/types';

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-10 w-full text-center">
      <div className="w-[88px] h-[88px] rounded-full bg-[var(--accent-soft)] border-[2.5px] border-[var(--accent)] flex items-center justify-center text-4xl overflow-hidden mb-1">
        {profile.avatar ? (
          <Image src={profile.avatar} alt={profile.name} width={88} height={88} className="object-cover w-full h-full" />
        ) : (
          <span>🌳</span>
        )}
      </div>
      <h1 className="text-[20px] font-bold tracking-tight m-0">{profile.name}</h1>
      <p className="text-sm text-[var(--muted)] m-0">{profile.bio}</p>
    </div>
  );
}
