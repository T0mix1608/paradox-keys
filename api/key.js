module.exports = (req, res) => {
    const hwid = req.query.hwid || "unknown";
    const key = "Paradox-" + hwid;
    res.status(200).send(key);
};
