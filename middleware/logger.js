const logger = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip;
    const logEntry = {
        waktu: new Date().toLocaleString("id-ID"),
        ip: ip,
        metode: req.method,
        endpoint: req.originalUrl,
        status: "PENDING"
    };
    
    // Simpan ke memori global agar bisa dibaca oleh Dashboard UI
    if (global.requestLogs) {
        global.requestLogs.push(logEntry);
    }
    
    console.log(`[LOG] ${logEntry.waktu} | IP: ${logEntry.ip} | ${logEntry.metode} -> ${logEntry.endpoint}`);
    next();
};

module.exports = logger;