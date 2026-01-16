// Time-related constants
export const REDIS_TTL = 3600;
export const PROMPT_TIME = 5;
export const DRAWING_END_DELAY = 1800; // 그림 그리기 종료 후 대기 시간 (ms)
export const ROUND_END_TIME = 15; // 라운드 결과 표시 시간 (초)
export const GAME_END_TIME = 30; // 게임 종료 화면 표시 시간 (초)

// Socket events: Client -> Server
export const SERVER_EVENTS = {
  USER_JOIN: 'user:join',
  USER_SCORE: 'user:score',
  USER_DRAWING: 'user:drawing',
  ROOM_SETTINGS: 'room:settings',
  ROOM_START: 'room:start',
  ROOM_RESTART: 'room:restart',
} as const;

// Socket events: Server -> Client
export const CLIENT_EVENTS = {
  USER_WAITLIST: 'user:waitlist',
  ROOM_METADATA: 'room:metadata',
  ROOM_LEADERBOARD: 'room:leaderboard',
  ROOM_TIMER: 'room:timer',
  ROOM_ROUND_END: 'room:round_end',
  ROOM_GAME_END: 'room:game_end',
  ROOM_PROMPT: 'room:prompt',
  ERROR: 'error',
} as const;

// Game phase constants
export const GAME_PHASE = {
  WAITING: 'WAITING',
  PROMPT: 'PROMPT',
  DRAWING: 'DRAWING',
  ROUND_END: 'ROUND_END',
  GAME_END: 'GAME_END',
} as const;

// Type exports for events
export type ServerEvent = (typeof SERVER_EVENTS)[keyof typeof SERVER_EVENTS];
export type ClientEvent = (typeof CLIENT_EVENTS)[keyof typeof CLIENT_EVENTS];
