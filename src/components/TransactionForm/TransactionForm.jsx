import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "react-use-size";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import CalendarTableForm from "components/CalendarTableForm";
import { transactionOperations } from "redux/transactions";
import {
  getExpenseCategories,
  getIncomeCategories,
} from "redux/categories/categoriesSelectors";

import s from "./TransactionForm.module.css";

function TransactionForm() {
  const [date, setDate] = useState(""); //Инпут Дата Календаря
  const [description, setDescription] = useState(""); //Инпут Описание товара/дохода
  const [amount, setAmount] = useState(""); //Инпут Сумма транзакции
  const [category, setCategory] = useState(""); //Список категорий для Селекта

  const { width } = useWindowSize();

  const dispatch = useDispatch();
  // Определяем тип обабатываемых транзакций в форме по ключевому слову в адресной строке
  const { pathname } = useLocation();
  const transtype = pathname.slice(1); // income или expense
  // Записываем значения возможные инпута Селектора, основываясь на данных сервера
  const incomeCategories = useSelector(getIncomeCategories);
  const expenseCategories = useSelector(getExpenseCategories);
  // Формируем объект для записи РАЗНЫХ значений заголовков формы
  const formTitleData = {
    descriptionTitle: "",
    categoryTitle: "",
    categoriesList: [],
  };
  // Наполняем этот объект в зависимости от типа обрабатываемых транзакций
  if (transtype === "income") {
    formTitleData.descriptionTitle = "Описание дохода";
    formTitleData.categoryTitle = "Категория дохода";
    formTitleData.categoriesList = incomeCategories;
  } else {
    formTitleData.descriptionTitle = "Описание товара";
    formTitleData.categoryTitle = "Категория товара";
    formTitleData.categoriesList = expenseCategories;
  }
  // Хендлер инпута Календарь и преобразователь к формату даты сервера
  const dateHandle = (date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    setDate(`${year}-${month}-${day}`);
  };
  // Хендлер 2х инпутов "Описание товара" и "Сумма"
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "product":
        return setDescription(value);

      case "price":
        return setAmount(Number(value));

      default:
        throw new Error(`there is no such name as ${name}`);
    }
  };
  //Хендлер инпута селекта "Категории"
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  // Хендлер кнопки "Ввод"
  const handleSubmit = (e) => {
    e.preventDefault();
    // Формируем объект ТРАНЗАКЦИЯ для передачи на сервер
    const transaction = { date, description, category, amount };
    // Отправляем объект в ОПЕРАЦИИ в зависимости от типа транзакции
    transtype === "income"
      ? dispatch(transactionOperations.handlePostIncome(transaction))
      : dispatch(transactionOperations.handlePostExpense(transaction));
    handleBtnClear();
  };
  // Хендлер кнопки "Очистить"
  const handleBtnClear = () => {
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className={s.tabletFormPosition}>
      {width < 768 && <CalendarTableForm dateHandle={dateHandle} />}
      {width > 767 && (
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.dataInput}>
            {/* К А Л Е Н Д А Р Ь */}
            <CalendarTableForm dateHandle={dateHandle} />

            {/* О П И С А Н И Е */}
            <input
              type="text"
              name="product"
              onChange={handleInputChange}
              value={description}
              className={s.inputDescribe}
              placeholder={formTitleData.descriptionTitle}
              autoFocus="off"
            />

            {/* К А Т Е Г О Р И Я */}
            <Box sx={{ minWidth: 120 }} className={s.box}>
              <FormControl fullWidth className={s.form}>
                <InputLabel
                  id="demo-simple-select-label"
                  className={s.dropdownInput}
                >
                  {formTitleData.categoryTitle}
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  value={category}
                  onChange={handleChange}
                >
                  {formTitleData.categoriesList.map((category) => (
                    <MenuItem value={category} key={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* С У М М А */}
            <div className={s.inputWrapper}>
              <input
                type="number"
                name="price"
                onChange={handleInputChange}
                value={amount}
                className={s.priceInput}
                placeholder="0.00"
                autoFocus="off"
              />
            </div>
          </div>

          <div className={s.btnWrapper}>
            {/* В В О Д */}
            <button type="submit" className={s.btn}>
              Ввод
            </button>

            {/* О Ч И С Т И Т Ь */}
            <button type="button" className={s.btn} onClick={handleBtnClear}>
              Очистить
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TransactionForm;
