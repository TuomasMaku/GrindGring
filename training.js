import { DAYS, CHALLENGES, RANKS } from './data.js';

export const training = {
  getCurDayIdx(cycleStart, cycleOffset) { /* ta fonction getCurDayIdx */ },
  isCurrentWorkoutDone(progState, curDayIdx) { /* ta fonction isCurrentWorkoutDone */ },
  saveToHistory(dailyState, historyData) { /* ta fonction saveToHistory */ },
  checkLevelUp(streakData, rankState) { /* ta fonction checkLevelUp */ },
  getRank(streak) { /* ta fonction getRank */ },
  toggleHardcore(hardcoreMode) { return !hardcoreMode; },
  triggerHardcoreFail(hardcoreMode, streakData) { /* ta fonction triggerHardcoreFail */ }
};
