var link = document.querySelector(".btn_search");
var popup = document.querySelector(".modal__content");

var dateStart = popup.querySelector("[name=date-start]");
var dateEnd = popup.querySelector("[name=date-end]");
var adults = popup.querySelector(".adult_count");
var kids = popup.querySelector(".kids__count");




  /* показать/закрыть форму кликом по кнопке */
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal__content--show");
  if (popup.classList.contains("modal__content--show")) {
    dateStart.focus()
  }
  else {
    popup.classList.remove("modal__content--error");
  }
})

/* проверка заполнения полей формы */
popup.addEventListener("submit", function(event) {
  var start_date_value = dateStart.value;
  var end_date_value = dateEnd.value;
  var adults_count_value = adults.value;

  if (!start_date_value || !end_date_value || !adults_count_value ||
    adults_count_value == 0) {
    event.preventDefault();
    popup.classList.remove("modal__content--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__content--error");
    if (!start_date_value) {
      dateStart.focus();
      alert("Не заполнено поле 'Дата заезда'");
    }
    else if (!end_date_value) {
        dateEnd.focus();
        alert("Не заполнено поле 'Дата выезда'");
    }
    else if (!adults_count_value || adults_count_value == 0) {
          adults.focus();
          alert("Не указано количество взрослых");
    }
  }
  if (!kids.value)
      kids.value = 0;
});


/* закрытие формы при нажетии esc */
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
      popup.classList.remove("modal__content--error");
    }
  }
});
