# lookingBack
​
A way to memorialize your loved ones. Created for the purpose of preserving your lasting memories with those that have passed on. lookingBack gives users a way to create Tribute pages for those that are no longer with us. It gives family members and friends a way to reminisce about the memories created over a lifetime.
​
## Local setup:

1. Clone repo.

2. Create "keys_dev.js" file in config folder with the following:
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

4. `npm run dev`
​​
​
## Technologies used:
- Node.js
- React/Redux
- Express
- MongoDB

