import { GAME_PHASE } from '../constants';

export interface Player {
  socketId: string;
  nickname: string;
  isHost?: boolean;
}

export interface Settings {
  drawingTime: number;
  totalRounds: number;
  maxPlayer: number;
}

export interface GameRoom {
  roomId: string;
  players: Player[];
  phase: Phase;
  currentRound: number;
  settings: Settings;
  promptId?: number;
}

export type Phase = (typeof GAME_PHASE)[keyof typeof GAME_PHASE];
