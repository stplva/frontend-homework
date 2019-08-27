var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var object = {};

var testName = document.createElement('div');
testName.classList.add('testName');
testName.innerHTML = 'Тест по программированию';
object["testName"] = testName.innerHTML;
wrapper.appendChild(testName);


for (var i = 1; i <= 3; i++) {
  var ul = document.createElement('ul');
  ul.classList.add('ul');
  wrapper.appendChild(ul);

  var p = document.createElement('p');
  p.innerHTML = i + ". Вопрос №" + i;
  ul.appendChild(p);

  object["ul" + i] = p.innerHTML;


  for (var k = 1; k <= 3; k++) {
    var li = document.createElement('li');
    li.classList.add('li');

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + i + k;

    var label = document.createElement('label');
    label.setAttribute("for", "checkbox" + i + k);
    label.innerHTML = "Вариант ответа №" + k;

    object["li" + k] = label.innerHTML;

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
  };
};

var submit = document.createElement('input');
submit.type = 'submit';
submit.classList.add('btn');
submit.classList.add('btn-primary');
submit.value = "Проверить мои результаты";

object["submit"] = submit.value;

wrapper.appendChild(submit);

console.log(object);
