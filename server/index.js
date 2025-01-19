const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const dishRouter = require("./routers/dish.route");
const itemRouter = require("./routers/item.route");
const userRouter = require("./routers/user.route");
const authRouter = require("./routers/auth.route");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 204
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/dishes/", dishRouter);
app.use("/api/items/", itemRouter);
app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

// Placeholder route for testing
app.get('/', (req, res) => {
    res.send('QR Food Calorie Backend!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
