export default function handler(req, res) {
  const hwid = req.query.hwid || "unknown";
  const key = "ParadoxHub-" + hwid;
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(key);
}
