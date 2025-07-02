import dayjs from 'dayjs'

function getDurationString(start: string, end?: string): string {
  const startDate = dayjs(start)
  const endDate = end ? dayjs(end) : dayjs()
  const years = endDate.diff(startDate, 'year')
  const months = endDate.diff(startDate.add(years, 'year'), 'month')
  return `${years}년 ${months}개월`
}

export interface Careers {
  title: string
  time: string
  duration: string
  image: string
  descriptions: string[]
  skills: string[]
  dos: {
    project: string
    role: string
    problem: string
    solve: string
    effect: string
  }[]
  etcs: string[]
}

export const careers = [
  {
    title: '이즐랩스',
    time: '24.05 ~ ',
    duration: getDurationString('2024-05'),
    image: '/images/ezllabs.jpeg',
    skills: [
      'React Native',
      'TypeScript',
      'React Query',
      'Recoil',
      'AWS',
      'Git/Github',
      'Jira',
      'Slack',
      'Figma',
      'Storybook',
      'Confluence',
    ],
    descriptions: [
      '이동의 즐거움(전 캐시비·로카모빌리티)의 자회사로, MAU 60만 규모의 ‘모바일이즐’과 MAU 30만 규모의 ‘이즐충전소’ 등 자사 모빌리티 플랫폼 서비스 제공',
    ],
    dos: [
      {
        project: '이동의 즐거움(캐시비) 공통 브릿지 모듈 개발',
        role: 'React Native 브릿지 구조 설계 및 구현 주도, Android/iOS 네이티브 개발자와 연동 프로세스 정립',
        problem:
          'iOS/Android 네이티브 SDK 사용 방식이 상이하여, React Native에서 플랫폼별로 별도 구현이 필요 → 코드 중복 및 유지보수 복잡성 증가',
        solve:
          '각 플랫폼의 응답값을 표준화한 공통 Bridge 모듈을 직접 설계/구현하고, 네이티브 연동 가이드를 문서화하여 RN 단에서 단일 API 형태로 추상화 → 코드 중복 제거 및 네이티브 기능의 일관된 사용 방식 확보',
        effect: '연동 관련 개발/테스트 비용 약 40% 감소, 신규 기능 대응 속도 향상',
      },
      {
        project: '캐시비 NFC 거래 실패 대응 기능 개선',
        role: 'LSTEP 처리 로직 기획 및 프론트 도입 주도, QA/기획팀과 이슈 패턴 정의 및 공통 처리 로직 설계',
        problem:
          'NFC 기반 카드 충전 과정에서 중복 충전, 미충전 등 미완료 거래 발생 → 사용자 금전 피해 및 고객센터 문의 증가',
        solve:
          'LSTEP 거래 처리 로직을 프론트 단에 도입하여 문제 상황을 자동 감지하고 즉시 사용자에게 안내 처리',
        effect: '주요 금전 이슈 자동 해결 → 관련 CS 인입 약 70% 이상 감소, 사용자 불만 감소',
      },
      {
        project: '이벤트 수집 시스템 표준화 및 자동화',
        role: '이벤트 구조 설계 및 공통 훅/HOC 구현 주도, 기존 로깅 패턴 분석 및 전사 가이드 작성',
        problem:
          '기능별 이벤트 수집이 수작업으로 처리되어 이벤트 누락, 중복, 오타 등 휴먼 에러 발생률 높음',
        solve:
          'HOC/커스텀 훅 기반의 추상화된 이벤트 수집 시스템을 구축하여 표준화된 로깅 구조 도입',
        effect:
          '이벤트 등록 정확도 향상 및 코드 재사용성 개선 → 휴먼 에러 약 50% 이상 감소, 신규 기능 이벤트 적용 시간 단축',
      },
      {
        project: '전사 디자인 시스템 및 공통 UI 라이브러리 개발',
        role: 'Figma Tokens 기반 디자인 토큰 시스템 정의 및 Storybook 환경 구성, 팀 내 컴포넌트 구조 표준화',
        problem:
          '앱마다 UI 컴포넌트 구현 방식이 상이하여 유지보수 어려움 및 기획 변경 대응 시간 증가',
        solve:
          'Figma Tokens 기반의 디자인 시스템을 정의하고, Storybook 기반의 컴포넌트 라이브러리를 구축하여 사내 전 앱에 공통 적용',
        effect:
          '디자인 변경 대응 시간 약 50% 단축, 컴포넌트 재사용률 향상 → 신규 UI 개발 속도 약 30% 개선',
      },
    ],
    etcs: [],
  },
  {
    title: '지지큐컴퍼니',
    time: '20.01 ~ 23.06',
    duration: getDurationString('2020-01', '2023-06'),
    image: '/images/ggq.jpeg',
    descriptions: [
      '리그오브레전드 게임 편의 기능 및 AI 코칭 서비스를 제공하며, MAU 100만 규모의 데스크톱 앱을 자체 개발·운영한 스타트업',
    ],
    skills: [
      'React',
      'Next',
      'Electron',
      'Recoil',
      'React Query',
      'Javascript',
      'Typescript',
      'HTML/CSS',
      'AWS',
      'Git/Github',
      'Jira',
      'Slack',
      'Figma',
      'Zeplin',
    ],
    dos: [
      {
        project: 'UI 구조 개선 및 Electron 렌더링 병목 해소',
        role: '복수 렌더러 구조 분석 및 상태관리 개선안 제안, 리팩토링 직접 수행',
        problem:
          'UI 구조상 우측·하단 renderer process를 별도로 운용하며 상태관리 복잡도 증가, 메모리 과다 사용 및 UI 동기화 오류 발생',
        solve: '모든 화면을 단일 renderer process로 통합, 상태관리 단순화 및 프로세스 통신 최소화',
        effect: '메모리 사용률 35% 감소, 화면 전환 오류 발생 빈도 60% 이상 감소',
      },
      {
        project: '전적 검색 기능 성능 최적화',
        role: 'UX 지표 분석 후 캐싱 전략 수립 및 적용',
        problem: '전체 호출 중 30% 이상이 동일 API를 반복 호출 → 서버 부하 및 UX 저하',
        solve: 'React Query의 캐싱 전략을 활용하여 동일 조건 요청을 캐시 처리',
        effect: '서버 API 호출 수 28% 감소, 페이지 재진입 시 응답 시간 약 1.4초 → 0.4초로 단축',
      },
      {
        project: 'Electron 초기 구동 퍼포먼스 최적화',
        role: '성능 분석 및 코드 스플리팅 전략 수립, 도입 전후 성능 지표 비교',
        problem: '초기 로딩 시 Time to Interactive가 6초 이상 발생 → 사용자 이탈 증가',
        solve:
          'React.lazy + Suspense로 코드 스플리팅 적용, 이미지 lazy loading 및 preload script 최적화 수행',
        effect: 'TTI 6.1초 → 2.1초 단축, 초기 이탈률 25% → 8%로 감소',
      },
      {
        project: '전역 상태관리 아키텍처 개선',
        role: '기존 Redux 기반 구조 분석, Context 기반 아키텍처 직접 설계 및 도입',
        problem:
          '프로젝트 규모 확대에 따라 Redux 기반 전역 상태가 복잡해지고 컴포넌트 간 의존성 증가',
        solve:
          'Redux 탈피 후, 비즈니스 도메인 단위로 Context + custom hook 분리 설계. memoization 적용',
        effect: '렌더링 성능 개선(FPS 20% 향상), 신규 기능 도입 시 상태 설계 시간 40% 감',
      },
    ],
    etcs: [
      '프로젝트 기획 및 제안으로 회사 메인 프로덕트로 전환',
      '전국 피시방 점유율 45% 피카플레이 피시방에 프로그램 설치 진행 담당 (현재 MAU 100만)',
    ],
  },
]
