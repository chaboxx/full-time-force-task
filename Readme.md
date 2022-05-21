This is a project based on NODEJS 18.0.1 (https://nodejs.org/en).

## Start the project:

First, clone the repository:

```bash
git clone https://github.com/chaboxx/full-time-force-task
cd full-time-force-task
```

Second, install the dependencies:

```bash
npm install
```

Third , configure .env variables:

GitHub OAuth Apps : [https://github.com/settings/developers](https://github.com/settings/developers) .
Create a new OAuth GitHub App.
Then...
Create a new .env file in the root directory.
Fill it like this:
```bash
PORT=4000
GITHUB_CLIENT_ID="YOUR CLIENT GITHUB ID"
GITHUB_CLIENT_SECRET="YOUR CLIENT SECRET"
```

Finally , run the server (PORT 4000 !):

```bash
npm start
```


MAKE SURE THAT UR GITHUB API RATE LIMIT WAS NOT EXCEDED

Now open in your browser : [http://localhost:4000](http://localhost:4000) .


If you want to run in development:

```bash
npm i -D nodemon
# then
npm run dev
```