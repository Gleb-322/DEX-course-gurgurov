export const FormCompomemt = () => {
  const submit = (e: any) => {
    alert(e.target.password.value);
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Подформа 1</legend>
          <label htmlFor="hidden">скрытый</label>
          <input name='hidden' type="hidden" />
          <label>пароль<br/>
            <input name="password" type="password" required />
          </label>
          <label htmlFor="readonly">чтение</label>
          <input name='readonly' type="text" value="inn" readOnly />
          <div>
            <label>радио кнопки</label><br/>
            <input type="radio"/>radiBtn1
            <input type="radio"/>radiBtn2
            <input type="radio"/>radiBtn3
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Подформа 2</legend>
          <label htmlFor="disabled">не активное поле</label>
          <input type="text" disabled name='disabled'/>
          <label htmlFor="number">число</label>
          <input name='number' type="number" max='100' min='1' placeholder='1'/>
          <label htmlFor="">поле с ограниченой длиной</label>
          <input type="text" maxLength='9' minLength='3' />
          <label htmlFor="email">email с множественным вводом</label>
          <input type="email" />
          <label htmlFor="hint">поле с подсказкой</label>
          <input type="text" name='hint' placeholder='подсказка'/>
        </fieldset>
        
        <fieldset >
          <legend>Подформа 2</legend>
          <label htmlFor="date">дата</label>
          <input type="date" name='date'/>
          <label htmlFor="tel">телефон</label>
          <input type="tel" name='tel' pattern="2[0-9]{3}-[0-9]{3}"/>
          <label htmlFor="load">загрузка файла</label>
          <input type="file" name='load' />
          <div>
            <label>чекбоксы</label><br/>
            <input type="checkbox" />условие 1
            <input type="checkbox" />условие 2
            <input type="checkbox" />условие 3
          </div>
        </fieldset>
        
        <fieldset disabled>
          <legend>Подформа 4</legend>
          <label htmlFor="hidden">скрытый</label>
          <input name='hidden' type="hidden" />
          <label>пароль<br/>
            <input name="pass" type="password" required />
          </label>
          <label htmlFor="readonly">чтение</label>
          <input name='readonly' type="text" value="inn" readOnly />
          <div>
            <input type="radio"/>radiBtn1
            <input type="radio"/>radiBtn2
            <input type="radio"/>radiBtn3
          </div>
        </fieldset>
        
        <select name="select">
          <option value="value1">Значение 1</option>
          <option value="value2" selected>Значение 2</option>
          <option type='' value="value3" disabled>Значение 3</option>
        </select>
        
        <select s="true" multiple={true} defaultValue={['3']}>
          <option value="" disabled>выбери число</option>
          <option label="1" value="1">число 1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      
        <textarea cols='50' wrap='hard' rows='50' maxLength='50' placeholder='textarea 50 x 50' />
        
        <input type="submit" value='Отправить'/>
        <input type="reset" value='Сбросить'/>
      </form>
      
      
      {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
   По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
      {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

      {/* 3 */}
      {/* 1 группа : скрытое поле, обязательное поле пароля,
       текстовое поля(только для чтения), группа из 3 радиобатаннов */}
      {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
       текстовое поля(с ограничением длины от 3 до 9 символов), 
       поле email с множественным вводом, текстове поле c подсказкой */}
      {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю, 
       группа из 3 checkbox */}
      {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}
    </>
  );
};

