https://www.figma.com/file/IHc8T3LE4yfMVp6c2CL1aP/%D0%A3%D1%87%D0%B5%D1%82-%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2?node-id=0%3A1

https://kapusta-backend.goit.global/api-docs/

https://trello.com/b/s8tBTdQx/bc-11-online-kapustagroup1

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

8. Индикатор загрузки Loader react-loader-spinner
   npm install react-loader-spinner --save
   yarn add react-loader-spinner

9. Библиотека стилей инпутов формы (Алексей) @mui/material
   npm i @mui/material или
   yarn add @mui/material @emotion/react @emotion/styled

10. Библиотека календаря (Алексей) для инпута формы react-datepicker
    npm i react-datepicker

11. Библиотека для работы с таблицами react-tabs
    npm install --save react-tabs или
    yarn add react-tabs

12. Библиотека для работы с графиками @nivo/bar
    npm i @nivo/bar

13. A collection of hooks to measure things in React
    npm i react-use-size или
    yarn add react-use-size

14. Запустить проект локально
    npm start или
    yarn start

xxxxxxxxxxxxxxx....Опционально....xxxxxxxxxxxxxxxxxxxxxxxxxxxx

1. Календарь React-Calendar
   npm i react-calendar

2. Набор иконок react-icons
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
   Вместо пути src/components/Button.js теперь пишем, например:
   import Button from 'components/Button';
