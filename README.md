# @davinci-opensource/shared

Da Vinci 프로젝트를 위한 공유 상수, 타입, UI 컴포넌트 패키지입니다.

## 설치

```bash
pnpm add @davinci-opensource/shared
# 또는
npm install @davinci-opensource/shared
```

## 사용법

### Constants (상수)

```typescript
import {
  SERVER_EVENTS,
  CLIENT_EVENTS,
  GAME_PHASE,
  PROMPT_TIME,
  DRAWING_END_DELAY,
  ROUND_END_TIME,
  GAME_END_TIME,
} from '@davinci-opensource/shared/constants';

// Socket 이벤트 사용 예시
socket.emit(SERVER_EVENTS.USER_JOIN, { roomId, nickname });
socket.on(CLIENT_EVENTS.ROOM_METADATA, (data) => {});

// 게임 페이즈 사용 예시
if (phase === GAME_PHASE.DRAWING) {
  // ...
}
```

### Types (타입)

```typescript
import type {
  Player,
  Settings,
  GameRoom,
  Phase,
  Stroke,
  PlayerResult,
  RoundResultEntry,
  GameResultEntry,
} from '@davinci-opensource/shared/types';

const player: Player = {
  socketId: 'abc123',
  nickname: '플레이어1',
  isHost: true,
};
```

### UI Components (React 컴포넌트)

> **Note:** UI 컴포넌트는 Tailwind CSS를 사용합니다. 프로젝트에서 Tailwind를 설정해야 합니다.

```typescript
import {
  CommonBtn,
  BaseModal,
  Input,
  Title,
  DecorateTitle,
  SunDoodle,
  ScribbleDoodle,
  StarDoodle,
  BrushDoodle,
  PaletteDoodle,
  NickDoodle,
} from '@davinci-opensource/shared/ui';

// 버튼 사용 예시
<CommonBtn
  icon="play_arrow"
  text="게임 시작"
  variant="scribble"
  onClick={() => startGame()}
/>

// 모달 사용 예시
<BaseModal
  isOpen={isOpen}
  onClose={handleClose}
  title="닉네임 입력"
  onConfirm={handleConfirm}
>
  <Input value={nickname} onChange={setNickname} placeholder="닉네임" />
</BaseModal>
```

#### Tailwind 설정

패키지의 UI 컴포넌트를 사용하려면 `tailwind.config.js`에 다음을 추가하세요:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@davinci-opensource/shared/dist/**/*.{js,mjs}',
  ],
  // ...
};
```

## 패키지 구조

```
@davinci-opensource/shared
├── /constants  # 공통 상수 (소켓 이벤트, 게임 페이즈, 시간 설정)
├── /types      # 공통 타입 (Player, GameRoom, Stroke 등)
└── /ui         # React 컴포넌트 (CommonBtn, BaseModal, Input 등)
```

## 개발

```bash
# 의존성 설치
pnpm install

# 빌드
pnpm build

# 개발 모드 (watch)
pnpm dev

# 타입 체크
pnpm typecheck
```

## Storybook

UI 컴포넌트들을 Storybook에서 확인할 수 있습니다.

```bash
# Storybook 실행 (localhost:6006)
pnpm storybook

# Storybook 빌드
pnpm build-storybook
```

### 컴포넌트 목록

| 컴포넌트 | 설명 |
|---------|------|
| `CommonBtn` | 다양한 스타일의 버튼 (scribble, radius) |
| `BaseModal` | 기본 모달 컴포넌트 |
| `Input` | 텍스트 입력 필드 |
| `Title` | 손글씨 스타일 타이틀 |
| `DecorateTitle` | 물결 장식 라인 |
| `SunDoodle` | 태양 SVG 장식 |
| `ScribbleDoodle` | 낙서 SVG 장식 |
| `StarDoodle` | 별 SVG 장식 |
| `BrushDoodle` | 붓 SVG 장식 |
| `PaletteDoodle` | 팔레트 SVG 장식 |
| `NickDoodle` | 닉네임 SVG 장식 |

## 라이선스

MIT
