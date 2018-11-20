# Looking Back
​A social media app for memorializing and connecting over lost loved ones.  Registered users can create and contribute to public tribute pages.
​
## Local setup
1. Clone repo.

2. Create "keys_dev.js" file in config folder and add:
​
  ```
  module.exports = {
  mongoURI: "YOUR MongoDB URL",
  secretOrKey: "SECRET PASSPHRASE"
  };
  ``` 
 
3. Open root directory and run:
  ```
  npm install

  cd client

  yarn install

  cd ..
  ```

4. Start app by running ```npm run dev``` from root directory.
​​
​
## Technologies used
- MongoDB
- Express
- React/Redux
- Node.js
