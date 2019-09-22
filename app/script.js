$(document).ready(function () {
  var num = 1;
  $.get('api/questions', (data) => {
    data.forEach(e => {
      var card = $('<div class="card">');
      var cardBody = $('<div class="card-body">');
      var question = $('<h4>');
      question.text(e.question);

      var formGroup = $('<div class="form-group">');
      var label = $(`<label for='sel${num}'>`);
      label.text('5 means you feel strongly about this:');
      var select = $(`<select class="form-control" id='sel${num}'>`)
      var option1 = $('<option>');
      option1.text('1');
      var option2 = $('<option>');
      option2.text('2');
      var option3 = $('<option>');
      option3.text('3');
      var option4 = $('<option>');
      option4.text('4');
      var option5 = $('<option>');
      option5.text('5');

      $('.container').append(card);
      card.append(cardBody);
      cardBody.append(question);
      cardBody.append(formGroup);
      formGroup.append(label);
      formGroup.append(select);
      select.append(option1);
      select.append(option2);
      select.append(option3);
      select.append(option4);
      select.append(option5);

      num++;
    });

    var submit = $('<button type="submit" class="btn btn-primary">');
      submit.text('Submit') 
    $('.container').append(submit);
  })
});
