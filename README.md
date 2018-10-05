# lookingBack
​
A way to memorialize your loved ones. Created for the purpose of preserving your lasting memories with those that have passed on. lookingBack gives users a way to create Tribute pages for those that are no longer with us. It gives family members and friends a way to reminisce about the memories created over a life time. Now all family members will have access to photo albums, stories, comments, and anything else to remember those that mean the most to us.
​
## Break down:
​
In order to get the project to function properly, follow this guideline:
​
1. Clone this repo to your computer.

2. Create a file in the config folder, called "keys_dev.js".

3. Inside of your keys_dev.js file, add this code snippet:
​
```
module.exports = {
 mongoURI:
  "PLACE YOUR mLAB LINK HERE",
 secretOrKey: "PUT IN A SECRET PASSPHRASE HERE"
};
``` 
 
4. Open the lookingBack root directory in Terminal.

5. While in the root directory, run 'npm install'.

6. Cd into the client directory.

7. While in the client directory, run 'yarn install'.

8. Cd back to the root directory, run 'npm run dev'.
​
## Deployment:
​
https://lookingback.herokuapp.com/
​
### NPM Dependencies:
- "bcryptjs"
- "body-parser"
- "concurrently"
- "express"
- "gravatar"
- "jsonwebtoken"
- "mongoose"
- "passport"
- "passport-jwt"
- "validator"
​
### DEV Dependency:
- "nodemon"
​
### YARN Dependencies:
- "@fortawesome/fontawesome-svg-core"
- "@fortawesome/free-solid-svg-icons"
- "@fortawesome/react-fontawesome"
- "axios"
- "classnames"
- "cloudinary"
- "cloudinary-core"
- "cloudinary-react"
- "jwt-decode"
- "path"
- "react"
- "react-dom"
- "react-parallax"
- "react-redux"
- "react-router-dom"
- "react-scripts"
- "redux"
- "redux-thunk"
- "webpack"
​
## Built With:
```
- Mongodb
- Express
- React
- Node
- Javascript
- Redux
- React Parallax
- React Bootstrap
- Font Awesome
- Cloudinary
- Passport
```
