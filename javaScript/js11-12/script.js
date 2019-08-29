$(function() {

  $('div.carousel').carousel();

  var html = $('#item_tmpl').html();
  var info = [
      {
        userName: "Sofiia Teplova",
        img: "https://www.shareicon.net/data/512x512/2016/07/05/791380_people_512x512.png",
        shortInfo: "Junior FrontEnd developer, student",
        age: 16,
        reason1: "Web-development is interesting to me",
        reason2: "Highly paid profession",
        reason3: "An oportunity to work from anywhere, whenever I want",
        email: "sofiia.teplova@gmail.com",
        github: "stplva",
        feedback: "I'm ready to learn!",
      },
      {
        userName: "Daniil Teplov",
        img: "https://www.shareicon.net/data/512x512/2016/07/05/791365_man_512x512.png",
        shortInfo: "Junior FrontEnd developer, student",
        age: 14,
        reason1: "It's a modern and interesting sphere",
        reason2: "Flexible working hours",
        reason3: "I like computers",
        email: "danya.teplov2004@gmail.com",
        github: "DanTep0-0",
        feedback: "I love programming!",
      },
      {
        userName: "Igor Teplov",
        img: "https://www.shareicon.net/data/512x512/2016/07/05/791372_man_512x512.png",
        shortInfo: "Senior backend programmer",
        age: 64,
        reason1: "I am experienced and can do a lot ",
        reason2: "This is my ideal proffesion",
        reason3: "I want to self-educate and self-discipline",
        email: "igor32624@gmail.com",
        github: "Vito4ka",
        feedback: "You can study my portfolio",
      },
      {
        userName: "Viktoriia Teplova",
        img: "https://www.shareicon.net/data/512x512/2016/07/05/791404_people_512x512.png",
        shortInfo: "Experienced web-designer, marketologist",
        age: 46,
        reason1: "I am open-minded, I want to learn",
        reason2: "Programming is the future",
        reason3: "I am disciplined worker",
        email: "vito4ka310@ukr.net",
        github: "",
        feedback: "I'm open to knowledge!",
      }
    ];
  var content = tmpl(html, {
    data: info
  });

  $('.templateDiv').append(content);

});
