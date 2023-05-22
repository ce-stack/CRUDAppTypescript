import express , {Application} from 'express';

import mongoose from 'mongoose';

import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';

dotenv.config();

const app: Application = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/api/users' , userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONOGODB_URL as string , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
.catch((err) => console.log(err));