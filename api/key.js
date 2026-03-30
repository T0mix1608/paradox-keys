let keysDB = {};

module.exports = (req, res) => {
    const hwid = req.query.hwid;
    if (!hwid) return res.status(400).send("No HWID provided");
    if (keysDB[hwid]) return res.status(200).send(keysDB[hwid]);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "PARADOX-";
    for (let i = 0; i < 12; i++) key += chars.charAt(Math.floor(Math.random() * chars.length));
    keysDB[hwid] = key;

    res.status(200).send(key);
};
