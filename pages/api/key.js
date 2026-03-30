export default function handler(req, res) {
  const { hwid } = req.query
  const key = "Paradox-" + hwid
  res.status(200).send(key)
}
