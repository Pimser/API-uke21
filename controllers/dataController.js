let data = [
    { id: 1, value: "First item" },
    { id: 2, value: "Second item"}
]

module.exports.getAll = (req, res) => {
  res.json(data);
};

module.exports.getOne = (req, res) => {
  const item = data.find(d => d.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
};

module.exports.create = (req, res) => {
  const { value } = req.body;
  if (!value) return res.status(400).json({ error: "Value is required" });
  const newItem = { id: Date.now(), value };
  data.push(newItem);
  res.status(201).json(newItem);
};

module.exports.remove = (req, res) => {
  const index = data.findIndex(d => d.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Item not found" });
  const deleted = data.splice(index, 1);
  res.json(deleted[0]);
};