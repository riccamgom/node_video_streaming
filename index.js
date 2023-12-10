const express = require('express');
const mainRouter = require('./controllers/main');
const userRouter = require('./controllers/user');
const videoRouter = require('./controllers/video');
const app = express();
const port = 3000;

// Use the routers
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

