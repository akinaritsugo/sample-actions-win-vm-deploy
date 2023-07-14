const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  let name = req.query.name || 'World';
  res.send(`Hello ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
