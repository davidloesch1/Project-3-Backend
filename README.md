

# Project Overview - Backend
# Project Description
The project we have chosen is a Photo Sharing app with two components (vote up button and comments button). The main feature is our picture on upload to each particular card. We are the new Instagram.

# Technologies Used:
The technologies we used were as followed:

1. Mongdb
2. Mongoose
3. Express.JS
4. Multer.JS (Images)
5. Heroku cluster (deployed server api)
6. Git
7. Github
8. Testing:  Supertest, chai, mocha

# Process of Development
The approach we used were to separate the backend to the frontend and starting developing separatly each of the files. Also, were to add some testing to our code.

1. first step was to get our connection to the port 8080 after we imported all of our dependencies within Express.js.
2. making our connection using mongoose to our localhost db.
3. we created our two schema utilizing our pre-planning worksheet within our planning folders.
4. after setting up our schemas we were able to create our routes within the controllers folder based upon the schema (key : values pairs) we chose.
5. We added our access route files into the index.js file to see if you can access any uploads.
6. In order to access files from #5 we used postman to test uploads, delete, findbyId, post, get, get by title, etc
7. next, we tested some of the routes on backend within test folder. we used the following to test (mocha, supertest, chai)  
8. We configured the heroku links to add to our site within the config folder. 
9. we consistently tested our uploads images folder with pictures. 
10. deployed site to heroku.  


![picture](/images/rd.png)
![picture](/images/rd2.png)

# Features 

We created a simple backend server with two schemas and a few routes that would give us and MVP of our photo sharing app. All of it worked like a charm. The following is a list of features:

1. Comments fill in section / connected to schema
2. genre section for multiple pick using array on schema
3. Up tick btn with ability of user to give the picture an up vote to move it up. 

# Installation Instructions

The installation of photo sharing app to heroku, we followed the 18 step process from within github and it deployed with no problems.  

Link: https://git.generalassemb.ly/seir-1118/heroku-atlas-deployment



# Unsolved Problems 

I issue was the post comments section code with connecting both image and comments components.  We could not get it to work correctly.  We may have some of the words switched around.  We debugged several hours on it. 

![picture](/images/rd3.png)

# Outside Resources utilized

Git: https://git.generalassemb.ly/seir-1118/heroku-atlas-deployment
Youtube: https://www.youtube.com/watch?v=srPXMt1Q0nY
Site: https://daveceddia.com/deploy-react-express-app-heroku/

