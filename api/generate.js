let keysDB = {};

module.exports = (req, res) => {
    const hwid = req.query.hwid;
    const verified = req.query.verified;

    if (!hwid) return res.status(400).send("Missing HWID");
    if (verified !== "true") return res.status(403).send("You must complete Work.ink first");

    if (keysDB[hwid]) return res.status(200).send(keysDB[hwid]);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "PARADOX-";
    for (let i = 0; i < 12; i++) key += chars.charAt(Math.floor(Math.random() * chars.length));

    keysDB[hwid] = key;
    res.status(200).send(key);
};
