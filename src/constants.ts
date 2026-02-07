export const DISCIPLINES = {
  PHYSICS: { name: 'Physics', color: '#0099FF' },
  CHEMISTRY: { name: 'Chemistry', color: '#FF6B9D' },
  BIOLOGY: { name: 'Biology', color: '#00C884' },
  HISTORY: { name: 'History', color: '#FFD700' },
  ASTRONOMY: { name: 'Astronomy', color: '#9D4EDD' },
  METAPHYSICS: { name: 'Metaphysics', color: '#FF006E' },
  GEOGRAPHY: { name: 'Geography', color: '#00D9FF' },
  ELECTRONICS: { name: 'Electronics', color: '#FFB703' },
  LINGUISTICS: { name: 'Linguistics', color: '#FB5607' }
};

export const TIME_PERIODS = {
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future'
};

export const WARP_STATES = {
  IDLE: 'idle',
  WARPING: 'warping',
  ARRIVED: 'arrived'
};

export const NETWORK_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  CONNECTING: 'connecting'
};

export const DEFAULT_YEAR = new Date().getFullYear();
export const MIN_YEAR = 1;
export const MAX_YEAR = 3000;