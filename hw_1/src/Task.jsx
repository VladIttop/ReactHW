// Створіть новий проєкт React із використанням create-react-app або будь-якого іншого інструменту для швидкого створення проєкту. У головному компоненті App.js створіть змінну з текстом свого імені.✅
// Виведіть цей текст у елементі h1, використовуючи JSX розмітку та фігурні дужки для вставки змінної з іменем.✅
// Додайте ще один елемент p з текстом "Ласкаво просимо до нашого сайту!".✅
// Виведіть зображення з довільним URL та описом у елементі img, використовуючи атрибути src та alt через фігурні дужки.✅
// Створіть об'єкт з даними посилання на ваш улюблений сайт, наприклад: {назва_сайту: "Google", url: "https://www.google.com/"}.✅
// Виведіть це посилання у елементі a, використовуючи значення з об'єкта через фігурні дужки.✅
// Створіть дві змінні з числами та обчисліть їх суму. Виведіть результат у елементі p.✅
// Створіть масив з назвами кольорів, наприклад: ["Червоний", "Синій", "Зелений"].
// За допомогою map виведіть ці кольори у списку ul з елементами li.

export default function Task() {
  const name = "Vlad";
  const imgUrl =
    "https://images.unsplash.com/photo-1552053831-71594a27632d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww";
  const imgAlt = "Two yellow labrador retriever puppies";
  const website = { name: "Google", url: "https://www.google.com/" };
  const num1 = 5;
  const num2 = 7;
  const colors = ["Червоний", "Синій", "Зелений"];
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgUrl} alt={imgAlt} width={200} height={300} />
      <a href={website.url}>{website.name}</a>
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </>
  );
}
