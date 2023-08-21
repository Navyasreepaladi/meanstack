we can install nodemonitor and instead of npm start we can load nodemon so that the changes in js file during compilation is reflected and no need to terminate to reflect change
`npm install -g nodemon` will install node monitor globally
Template Engine : process of outputting tokenized variables into another format 
Jade(used in express js now replaced by pug), EJS,Handlebars(similar to angular syntax),Mustache
Middle ware types in express: Application lvl,router lvl,built-in,third - party, error handling
3 builtin in express - static, json and url encoded
app.get('/',function(req,res,next)=>{
    response.write('something');
    next(); // this will direct to next middleware function
});
app.get('/',function(req,res)=>{
    response.end('end');//this will end the cycle here..or else it will be hanging
    
});
app.get('/',function(req,res,next)=>{
    response.write('something');
    next();
},
    function(req,res)=>{
    response.end('end');
   
});// this is called substack
APPLICATION LEVEL: app.use and app methods like get , put,post//  var = app.express();
ROUTER LEVEL:same as app lvl except bound to express router than just express // var router=express.Router(); so router.use,router.get
diff b/w app lvl and router lvl is .. app object can listen to request where as router constructor obj cannot do that it only can respond to the req that is send by app or obj that listen to req.
and router lvl useful for code restructuring
ERROR HANDLING LVL:sameas above but have 4 arguments.. (err,req,res,next)-->err.message,err.status

<!--cancel means do ntg -->
<!--{{ <button type="button" class="btn btn-danger">Delete</button>}}-->
<!--if delete it shld go to providers/delete url-->
API: Application Programming Interface
REST : REpresentational State Transfer 
https://blog.hubspot.com/website/uri-vs-url  --> URI: URN,URL
There are many tools to test API's
katalon,soapUI,Postman,Curl(for command line)
we need to test api's for : security(who,what,how),reliability(does it work,data verification,client side and server side )
Postman:
Postmain is a Chrome's HTTP client for testing APIs, provides automation testing with collection runner,used in REST client
refactored apis to validating i/p data error handlingand sending status codes

Mongo DB 
mongo -humongous (large data)
NoSQL db management sys,unstructured
data stored in BSON (binary rep of JSON-like doc).
document oriented .. one collection can have many docs
each doc need not be of same size and format
mongodb compass is browser based GUI Application for interacting with Mongo DB as opposed to using command line
Mongo:
we can add delete data in mongo compass ,we can update tool too 
everything in mongo is a document 
and it will be in { }
so in filter , project , sort , collation we need to put {}
filter : is like "where" in dbms 
project : is like select to display what you want , if empty selects all 
sort: order by 
skip : how many documents to skip 
limit : how many docs shld be seen 
MAXTIMEMS: max time in milliseconds .. of query 
examples:
FILTER: {first_name: /^c/i, 'age' : {$gte:40}, 'phone.work' :/9/}
so here / is 'like' in sql.. i will filter the names which has first_name starting with c and it is case senstitive by default so we can make it case insensitive by adding i  ',' is like 'and' ..'>' is gte here and '<' is lte .. here phone is a inner document so to access work of the inner doc we need to put it in quotes so this query will return all info with first_name starting with c and age greater than 40 and phone number start with 9
PROJECT:
{first_name:1,_id:0} => 0 is to exclude 1 to include , a query doesnt have both include and exclude statements but id is exception here
{first_name:1,last_name:1,_id:0}=> display only 1st name and last name
{first_name:1,last_name:0,_id:0}=> error because {first_name:1_id:0} this also does same work we need to use this ... both include and exclude cant be in single statement
{first_name:1,last_name:1} => this will display id also so explicitly we need to exclude id
SORT: {age:1} order by age ASC , 1 ASC -1 DESC 

AGGREGATIONS:to write queries in phases and save the code
we can export the code and convert to other language
MONGO SHELL Interface
-> db 
this shows the current db name
-> show collections 
-> show dbs 
shows all folders in the db
-> use demodb 
switches from one db to other 

now we have db nam demodb and collections named demo
-> db.demo.count()
this prints no of records in db i.e., 100
-> db.demo.find({},{}).count() returns 1
in find 1st we need to pass object filter then second is projection
-> db.demo.find({},{}) this returns whole data 
-> db.demo.find({},{}).pretty => for json format
-> db.demo.find({},{}).toArray() => to return all 100 at once
-> db.demo.find({age:30},{}).toArray() => to return all records who has age 30
-> db.demo.find({age:{$gte:30}},{}).count()
-> db.demo.find({age:{$gte:30}},{first_name:1,last_name:1,age:1}).limit(2).toArray() =>second field is what column u want to display,1 value is show if not mentioned they r 0
-> db.demo.insertOne({}) => to insert one record with info in bracket.. now inserts empty record with creating own id
-> db.demo.find().skip(100) => it will show the record after skipping 100 so it will show from 101
-> db.demo.insertMany([{age:13},{age:55,score:100},{location:'usa'}]) => to insert many
-> db.demo.deleteOne({}) => if empty deletes 1st record
-> db.demo.deleteOne({age:13}) => delete that record 
-> db.demo.deleteMany({age:13}) => all records of that age delete 
-> db.demo.deleteMany({}) =>deletes everything 
-> db.demo.drop() =>to drop collections
-> object data model called mongoose or ODM(Original Design Manufacturer) Programm
-> we can create schema models that will work flawlessly with mongo as aync env
-> utility script call nodemon to monitor changes in code so need not restart server everytym
-> npm install mongoose mongodb  => to install
CREATING SCHEMAS & MODELS 
SCHEMAS: Rep the shape of our doc 
MODEL: rep document in collection 
1st create schema then model then document 
ex: const schemaname= new mongoose.Schema({field:type});
const Model= mongoose.model('Collection',schemaname);
const Model.create({....});
    CRUD OPERATIONS 
    create docs using create() 
    reading docs using find() 
    updating docs using findOneAndUpdate() 
    Deleting docs using findOneAndDelete() and remove() 

find() 
    Model.find(query, projection) 
    Model.find({field:<value>},{field1:<boolean>[,field2:<boolean>,...]}) 
    query : filter 
    projection : fields to return 
    boolean : 1 or true, 0 or false 
    find() returns : array of docs 
    examples: 
    Model.find({}) ~ SELECT * FROM [db].[dbo].[TableName]
    Model.find({id:123}) ~ SELECT * FROM [db][dbo].[TableName] WHERE id=123 
    Model.find({id:123},{projection:{name:1,email:1}}) ~ SELECT name,email FROM [db][dbo].[TableName] WHERE id=123
    Model.find({name: /^nav/i},{projection:{name:1,email:1}}) ~ SELECT name,email FROM [db][dbo].[TableName] WHERE name LIKE 'nav%'
CREATE()
    Model.create(document) 
    Model.create({field:<value>,field2:<value>[,field3:<value>,...]}) 
    document :JSON object
    create() returns: new document
    Model.create({id:123}) ~ INSERT INTO [db].[dbo].[TableName](id) VALUES(123)
    Model.create({id:123,name:'navya',email:'nav@123.com'}) ~ INSERT INTO [db].[dbo].[TableName](id,name,email) 
    VALUES(123,'navya','nav@123.com')
findOneAndUpdate()
    Model.findOneAndUpdate(filter,update,options)
    Model.findOneUpdate(
        {field:<value>},{field1:<value>[,field2:<value>,...]},
        {new:<boolean>}
    )
    returns original or updated doc
    Model.findOneAndUpdate(
        {id:123},{name:'navya',age:30},
        {new:true}
        ~ 
        UPDATE [db].[dbo].[TableName]
        SET name='navya' age =30
        WHERE id =123
    )
findOneAndDelete()
    Model.findOneAndDelete(filter,options)
    Model.findOneAndDelete({field:<value>},{projection,sort,maxTimesMS,session})
    filter: query
    options: document of options(optional)
    findOneAndDelete() returns: deleted document 
deleteMany()
    Model.deleteMany(filter,options)
    Model.deleteMany({field:<value>},{single:true})
    returns: three properties : {ok,deletedCount,n}
    Model.findOneAndDelete({id:123})
    Model.remove({id:123},{single:true})  ~ DELETE FROM [db].[dbo].[TableName] WHERE id=123
    Model.remove({}) ~ DELETE FROM [db].[dbo].[TableName]
ANGULAR 
    created by google
    ANGULARJS v1 = 2010
    ANGULAR 2 = 2016 in TypeScript 
    ANGULAR 9 = latest 
    it has root module in that child components , child modules , router , HttpClient, services ,DI system
    every component is view angular view 
    Angular view model has module it has 2 things component(source) and template (view) 
    these 2 talk with metadata by data binding
    from source to view it is property binding 
    view to source is event binding 
    injector : inject services into components 
    Directives: 2 types Atrribute and Structural 
    ngIf , ngFor, ngModel, ngClass 
    to perform some really simple expressions or decision making and template view as we cannot write source code in template 
Install the Angular CLI 
CLI commands 
    Installing Angular CLI :npm install -g @angular/cli 
    creating a new Angular app: ng new my-app 
    Creating a new Angular application : ng serve -o 
    