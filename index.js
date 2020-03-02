const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `%c
 --------------------------------------------------------------
 |       ___                                                   |
 |      (^o^) <Server is running on http://localhost:${PORT}      |
 |     ((___))                                                 |
 |       ^ ^                                                   |
 --------------------------------------------------------------
        `,
    "font-family:monospace; color: green"
  );
});