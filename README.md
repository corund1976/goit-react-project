0. Установить Create React App (в текущей папке, которая открыта в VSCode)
   npx create-react-app .

1. Установить Redux Toolkit (ранее назывался "Redux Starter Kit")
   npm install @reduxjs/toolkit или
   yarn add @reduxjs/toolkit

2. Установить redux-persist
   npm i redux-persist
   yarn add redux-persist

3. Установить React Redux для связи React с Redux
   npm i react-redux или
   yarn add react-redux

4. Установить axios
   npm i axios

5. Установить react-router более ранней верси !!!!! ВАЖНО !!!!!
   npm i react-router-dom@5.3.0

6. Установить modern-normalize
   npm i modern-normalize

7. Установить prop-types
   npm i prop-types

Или все 7 одной командой
npm i @reduxjs/toolkit redux-persist react-redux react-router-dom@5.3.0 axios modern-normalize prop-types

8.  Запустить проект локально
    npm start или
    yarn start

xxxxxxxxxxxxxxx....Опционально....xxxxxxxxxxxxxxxxxxxxxxxxxxxx 9. Календарь React-Calendar
npm i react-calendar

10. Индикатор загрузки Loader react-loader-spinner
    npm install react-loader-spinner --save
    yarn add react-loader-spinner

11. Набор иконок react-icons
    npm i react-icons

xxxxxxxxxxxxxxx....Деплой на Netlify....хххххххххххххххххххххх

1. Создать файл netlify.toml

[build]
publish = "build"

[[redirects]]
from = "/\*"
to = "/index.html"
status = 200

2. Установить набор инструментов Netlify
   npm install netlify -cli -g или
   yarn add netlify-cli

3. Подтвердить авторизацию при необходимости
   netlify login
   и в открывшемся браузере нажимаем Authorize

4. В package.json а scripts добавляем 2 строки:
   "predeploy": "npm run build",
   "deploy": "netlify deploy -p"

5. Запустить деплой
   npm run deploy

6. Стрелками на клавиатуре подтверждаем выбор
   2х пунктов последовательно

7. Получаем ссылку на Live URL
   Website URL: https://corund1976-goit-react-project.netlify.app

8. После обновления приложения перед загрузкой на хостинг
   каждый раз запускаем
   npm run deploy

хххххххххххххх....Абсолютные импорты....хххххххххххххххх

https://create-react-app.dev/docs/importing-a-component/#absolute-imports

1. создаем jsconfig.json

2. указываем относительный корень, например "src"
   {
   "compilerOptions": {
   "baseUrl": "src"
   },
   "include": ["src"]
   }

3. Теперь при импортах указываем короткий путь относительно "src"
   Вместо пути src/components/Button.js теперь пишем
   import Button from 'components/Button';
