const express = require('express');
const path = require('path');
const app = express();

const reviewsRouter = express.Router();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('/api/reviews', reviewsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
});

