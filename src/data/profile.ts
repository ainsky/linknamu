import type { LinkItem, Profile } from '@/lib/types';

export const profile: Profile = {
  name: '홍길동',           // TODO: 실제 이름으로 교체
  bio: '풀스택 개발자 · 커피 없이는 못 살아요', // TODO: 실제 소개로 교체
  // avatar: '/profile.jpg',  // TODO: public/ 폴더에 사진 추가 후 주석 해제
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
