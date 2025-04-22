const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const database=require('./database');
const { getInstitutesList } = require('./controllers/institutes');
const { geteductionBoardList } = require('./controllers/eductionboard');
const { getMediumList } = require('./controllers/medium');
const { getClassCategoryList } = require('./controllers/classCategory');
const { getStandardList } = require('./controllers/standard');
const { getSubjectList } = require('./controllers/subject');
const { addUser } = require('./controllers/register');
database();
const port =process.env.PORT|| 8080;

// For getting  list of institutes
app.get('/getinstitutes',getInstitutesList);

// This will only called for school
app.get('/educationboard',geteductionBoardList);

// This will only called for school
app.get('/medium',getMediumList);


// This will only called for school
app.get('/classcategory',getClassCategoryList)

// This will only called for school
app.get('/standard',getStandardList);


// This will only called for school
app.get('/subject',getSubjectList);

//post student details
app.post('/register',addUser);

app.listen(port,()=>{console.log("App running at port 8080")})


