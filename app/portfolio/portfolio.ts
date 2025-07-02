import dayjs from 'dayjs'

function getDurationString(start: string, end?: string): string {
  const startDate = dayjs(start)
  const endDate = end ? dayjs(end) : dayjs()
  const years = endDate.diff(startDate, 'year')
  const months = endDate.diff(startDate.add(years, 'year'), 'month')
  return `${years}년 ${months}개월`
}

export interface Portfolio {
  title: string
  time: string
  duration: string
  image: string[]
  html: string
  fe: string[]
  deployment: string[]
}

export const portfolios = [
  {
    title: '이즐충전소',
    time: '( 24.05 ~ )',
    duration: getDurationString('2024-05'),
    image: ['ezllabs_1.png', 'ezllabs_2.png', 'ezllabs_3.png', 'ezllabs_4.png'],
    html: `
        <p class="mb-2">
          <b class="text-[#FFD600]">MAU 60만 이상의 '모바일이즐'</b>, <b class="text-[#FFD600]">MAU 30만 규모의 '이즐충전소'</b> 서비스를 통합 운영하며 자사 네이티브 SDK 연동 및 UI/UX 표준화에 기여한 프로젝트입니다.
        </p>
        <p class="mb-2">
          이 프로젝트는 캐시비, 로카모빌리티의 후속 브랜드인 '이동의 즐거움'에서 운영하는 주요 앱의 프론트엔드 구조를 통합하고, 다양한 네이티브 기능을 React Native 단에서 일관되게 사용할 수 있도록 정비한 작업이었습니다. 
        <ul class="mb-2">
          <li class="mb-2">1. 플랫폼별로 상이한 네이티브 기능 응답을 통합 처리하는 <b class="text-[#FFD600]">공통 브릿지를 직접 설계</b>하고,</li>
          <li class="mb-2">2. NFC 충전 과정에서의 거래 실패 이슈를 선제적으로 해결하기 위해 프론트엔드 레벨에서 <b class="text-[#FFD600]">LSTEP 처리 로직을 도입</b>했습니다.</li>
          <li class="mb-2">3. <b class="text-[#FFD600]">이벤트 로깅 자동화</b>를 위한 HOC/커스텀 훅 기반 수집 시스템을 직접 설계하여 수작업 로깅의 오류를 줄였고,</li>
          <li class="mb-2">4. Figma Tokens와 Storybook을 활용한 <b class="text-[#FFD600]">디자인 시스템을 구축</b>해 앱 간 UI 일관성을 확보하고 신규 기능 대응 속도를 개선할 수 있었습니다.</li>
        </ul>
        </p>
    `,
    fe: ['React Native', 'Typescript', 'Recoil', 'React Query', 'Figma Tokens', 'Storybook'],
    deployment: ['Fastlane'],
  },
  {
    title: 'GGQ Desktop Web Application',
    time: '( 22.01 ~ 23.06 )',
    duration: getDurationString('2022-01', '2023-06'),
    image: ['ggq_1-1.webp'],
    html: `
          <p class="mb-2">
            게임 통계 분석, 친구 초대, AI 코칭 기능 등을 지원하는 <b class="text-[#FFD600]">Electron 기반 데스크톱 클라이언트 앱</b>입니다.
          </p>
          <ul class="mb-2">
            <li class="mb-2">1. 기존 데스크톱 앱의 <b class="text-[#FFD600]">UI 구조와 Electron 프로세스 구조를 개선</b>하여 메모리 사용량 35% 이상 감소 및 UI 오류 빈도를 60% 이상 줄였습니다.</li>
            <li class="mb-2">2. 특히, 다중 renderer 구조로 인한 복잡성을 <b class="text-[#FFD600]">단일 프로세스로 리팩토링</b>하고, React Query 기반의 데이터 캐싱 구조로 페이지 응답 속도를 높였습니다.</li>
            <li class="mb-2">3. 초기 TTI(Time to Interactive)를 약 6초 → 2.1초로 줄이며 <b class="text-[#FFD600]">UX 품질을 개선</b>했고,</li>
            <li class="mb-2">4. 유지보수성을 높이기 위해 <b class="text-[#FFD600]">Context + 커스텀 훅 기반 상태관리 아키텍처</b>를 설계하여 도메인별 모듈화 구조를 안정화했습니다.</li>
          </ul>
        `,
    fe: ['Electron', 'React', 'Recoil', 'Typescript', 'TailwindCSS'],
    deployment: ['AWS S3', 'AWS Cloudfront'],
  },
  {
    title: 'GGQ Web',
    time: '( 22.01 ~ 23.06 )',
    duration: getDurationString('2022-01', '2023-06'),
    image: ['ggq_2-1.webp', 'ggq_2-2.webp'],
    html: `
          <p class="mb-2">
            전적 기록, 챔피언 분석, 프로 유저 피킹률 등 다양한 게임 데이터를 시각화한 웹 페이지 입니다.
          </p>
          <ul class="mb-2">
            <li class="mb-2">1. 사용자 경험 강화를 위해 전체 트래픽 중 중복 호출이 많던 API 응답을 <b class="text-[#FFD600]">React Query 기반으로 캐싱 처리</b>하여 서버 부하를 28% 감소시켰으며, <b class="text-[#FFD600]">페이지 재진입 시 로딩 시간을 1.4초 → 0.42초</b>로 단축했습니다.</li>
            <li class="mb-2">2. 또한 성능 개선을 위해 <b class="text-[#FFD600]">코드 스플리팅</b>, 이미지 Lazy Loading, preload script 적용을 병행하였고, UI <b class="text-[#FFD600]">초기 렌더링 속도를 25% 이상 향상</b>시켰습니다</li>
          </ul>
        `,
    fe: ['Next.js', 'React', 'Recoil', 'Typescript', 'TailwindCSS'],
    deployment: ['AWS S3', 'AWS Cloudfront', 'AWS Route53'],
  },
  {
    title: 'GGQ PRO Web',
    time: '( 21.01 ~ 21.06 )',
    duration: getDurationString('2021-01', '2021-06'),
    image: ['ggq_3-1.webp', 'ggq_3-2.webp'],
    html: `
          <p class="mb-2">
            플레이 영상 기반의 자동 분석 및 사용자의 플레이 성향을 시각화하여 피드백을 제공하는 웹 페이지 입니다.
          </p>
          <p class="mb-2">
            게임 리플레이를 기반으로 <b class="text-[#FFD600]">자동 분석 결과</b>를 도출하고, 이를 <b class="text-[#FFD600]">시각화하는 대시보드 UI</b>를 설계했습니다. 분석 결과는 전적 API, 타임라인 정보, 포지션 정보 등과 연계됩니다.
          </p>
          <ul class="mb-2">
            <li class="mb-2">1. <b class="text-[#FFD600]">Vue 기반의 구조로 초기 MVP</b>를 구현하고 이후 <b class="text-[#FFD600]">리팩토링을 주도</b>했습니다.</li>
          </ul>
        `,
    fe: ['Vue', 'Vuex', 'Vuetify', 'TypeScript'],
    deployment: ['AWS S3', 'AWS Cloudfront', 'AWS Route53'],
  },
]
