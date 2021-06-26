const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db');
const usersRouter = require('./routes/api/users')
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors())


const PORT = process.env.PORT || 5000;

app.use('/users', usersRouter)

app.use((req, res, next) => {
  res.status(404).send('Not Found')
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
