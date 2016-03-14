"use strict"

var testObj = {
	createWrapper : function () {
		var div = document.createElement('div');
		div.classList.add('wrapper');
		div.innerHTML = "<div id='question_answers'>";
		var body = document.querySelector('body');
		body.appendChild(div);
	},
   
	createHeader : function () {
   	var header = document.createElement('header');
		header.classList.add('header');
		header.innerHTML = 'Тест по программированию';
		
		var div = document.querySelector('div');
		div.appendChild(header);
	},
   
	createForm : function () {
		var form = document.createElement('form');
		var div = document.querySelector('div');
		div.appendChild(form);
	},
     
	createQuestions : function (a) {
		var questions = ['1. Вопрос № 1', '2. Вопрос № 2', '3. Вопрос № 3'];
 
		var pForm = document.createElement('p');
		var form = document.querySelector('form');
		pForm.innerHTML = questions[a];
		form.appendChild(pForm);
	},

	createAnswers : function () {
		var answers = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

		for (var i = 0; i < answers.length; i++) {
		var ans = document.createElement('div');
		ans.className = 'answer';
		var id = "ans" + i;
		ans.innerHTML = '<input type="checkbox" id="' + id + '" name="ans"/>';
		ans.innerHTML += '<label for="' + id + '">' + answers[i] + '</label>';
		document.getElementById('question_answers').appendChild(ans);
		var form = document.querySelector('form');
		form.appendChild(ans);
		}
	},
   
	createSubmit : function () {
		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('value','Проверить мои результаты');
		var div = document.querySelector('div');
		div.appendChild(submit);
	},	
   
	createConstructor : function() {
        this.createWrapper();
        this.createHeader();
        this.createForm();
		
        for (var i = 0; i<3; i++){
            this.createQuestions(i);
            this.createAnswers();
			
        }
        this.createSubmit ();
    }
}

testObj.createConstructor ();