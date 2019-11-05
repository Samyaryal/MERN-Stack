const app= express();
const port  = process.env.PORT || 5000;

app.use(cors()); // middleware
app.use(express.json()); // this allows to parsse the json

const uri = process.env.ATLAS_URI;
mangoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});


const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("Successfull");
})

const exerisesRouter= require('./routes.exercises');
const usersRouter = require('./routes/users');

app.use('exercise', exerisesRouter);
app.use('users', usersRouter);

app.listen(port, () => {
   console.log(`server is running on port : ${port}`);
});