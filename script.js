document.getElementById("saveButton").addEventListener("click", function () {
    // Сбор данных из формы
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
  
    // Сбор числовых атрибутов
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
  
    // Создание объекта
    const formData = {
      name,
      surname,
      email,
      phone,
      address,
      numericAttributes: [num1, num2, num3, num4, num5]
    };
  
    // Вывод объекта в консоль
    console.log("Form Data:", formData);
  
    // Вычисление среднего значения числовых атрибутов
    const sum = formData.numericAttributes.reduce((acc, value) => acc + value, 0);
    const average = (sum / formData.numericAttributes.length).toFixed(2);
    console.log(`${formData.name} ${formData.surname} (${formData.email}): ${average}`);
  
    // Скрытие формы после сохранения
    document.getElementById("contactForm").style.display = "none";
  });
  