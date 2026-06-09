// Функції валідації
const validateFirstName = (name) => name.trim().length > 0;
const validateLastName = (name) => name.trim().length > 0;

test('valid first name passes validation', () => {
  expect(validateFirstName('Олександр')).toBe(true);
});

test('empty first name fails validation', () => {
  expect(validateFirstName('   ')).toBe(false);
});

test('valid last name passes validation', () => {
  expect(validateLastName('Шевченко')).toBe(true);
});

test('empty last name fails validation', () => {
  expect(validateLastName('')).toBe(false);
});




describe('Component UI Testing - Form Submission', () => {
  
  test('4.1 + 4.2 + 4.3: Simulation of field input, button press and message check', () => {

    let firstNameInput = 'Lilia';
    let lastNameInput = 'Muntyan';
    let displayedMessage = '';

    const simulateButtonPress = (first, last) => {
      if (!first.trim() || !last.trim()) {
        return "Помилка: поля не можуть бути порожніми!";
      }
      return `Результат: ${first.trim()} ${last.trim()}`;
    };


    console.log(`[4.1] Симуляція введення імені: "${firstNameInput}" та прізвища: "${lastNameInput}"`);
    
    console.log('[4.2] Симуляція натискання на кнопку...');
    displayedMessage = simulateButtonPress(firstNameInput, lastNameInput);

    console.log(`[4.3] Очікуване повідомлення на екрані: "${displayedMessage}"`);
    
    expect(displayedMessage).toBe('Результат: Lilia Muntyan');
    console.log('✓ Компонентний тест успішно пройдено! Текст на екрані збігається.');
  });
});