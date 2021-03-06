require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'producion',
  port: process.env.PORT || 3000,
};

module.exports = { config };
