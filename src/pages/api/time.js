export default async function handler(req, res) {
  const date = new Date();
  return res.json({
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth(),
    currentTime: Date.now(),
  });
}
