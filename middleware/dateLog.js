const dateLog = (req, res, next) => {
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const formattedDate = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} -`;
  console.log(`[${formattedDate}] Route called: ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = dateLog;