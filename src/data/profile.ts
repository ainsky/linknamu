import type { LinkItem, Profile } from '@/lib/types';

export const profile: Profile = {
  name: '최코딩',
  bio: '풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요',
  avatar: '/profile.jpg',
};

export const links: LinkItem[] = [
  {
    id: '1',
    title: 'GitHub',
    sub: 'github.com/username',   // TODO: 실제 GitHub 주소로 교체
    icon: '💻',
    url: 'https://github.com',
  },
  {
    id: '2',
    title: 'LinkedIn',
    sub: 'linkedin.com/in/username', // TODO: 실제 LinkedIn 주소로 교체
    icon: '💼',
    url: 'https://linkedin.com',
  },
  {
    id: '3',
    title: '블로그',
    sub: 'myblog.dev',              // TODO: 실제 블로그 주소로 교체
    icon: '✍️',
    url: 'https://myblog.dev',
  },
];
