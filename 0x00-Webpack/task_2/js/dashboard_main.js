import $ from "jquery";

$(document).ready(() => {
  $('body').append("<p id='logo'></p>");
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  const button = $('<button>Click here to get started</button>');
  $('body').append(button);
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  function updateCounter(){
    const count = 0;
    count += 1;
        $('#count').text(`${count} clicks on the button`); 
  }

  button.on('click', debounce(updateCounter, 300));

});