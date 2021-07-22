export const logProfilerData = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  console.log(`---------------------------
  ${id}'s ${phase} phase: 
  Actual/Base time: ${actualTime}/${baseTime}
  Start time: ${startTime} Commit time: ${commitTime}
---------------------------`);
}