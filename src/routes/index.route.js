module.exports = {
  method: 'get',
  path: '/some-route',
  name: 'some-route',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res) => {
    return { ok: true }
  }
}
