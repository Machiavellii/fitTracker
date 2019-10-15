//  The distance of one step is 0.762m
//  One step lasts 0.5 seconds
//  One step burns 0.05 calories

export const showtime = num => {
  let steps = num;
  let totalTime = steps / 2;
  let totalMin = Math.floor(totalTime / 60);
  let total = totalMin / 60;
  let hour = Math.floor(total);
  let minutes = (total - hour) * 60;
  let minute = Math.round(minutes);

  return `${hour}h ${minute}m`;
};

export const totalKm = steps => {
  const totalKm = Math.floor(steps / 0.762) / 1000;
  const kmlength = totalKm.toString().length;
  const newNum = kmlength > 3 ? totalKm.toString().slice(0, -1) : totalKm;

  return newNum;
};

export const caloriesBurned = calories => {
  return Math.floor(calories * 0.05);
};
