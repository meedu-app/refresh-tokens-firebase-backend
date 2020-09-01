
# local deploy

install the dependecies using `npm install`

after create the `.env` and define yours vars
```
PORT=8080
MONGO_URI=
```
Now you need add your firebase credentials as a json file, got yo your **firebase console** and download your file as `service-account.json` and add it to your root project dir. Finally run `npm run dev`