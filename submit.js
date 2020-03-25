/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

const ACCESS_MAP = {
  "amlkm2lkm": {
    "name": "First event",
    "email": "email@email.com",
    "eventName": "",
    "location": "",
    "startDate": "",
    "endDate": "",
    "bannerURL": "",
    "eventDescription": "",
    "questions": ""
  }
}

const formFields = [
  "name",
  "email",
  "eventName",
  "location",
  "startDate",
  "startTime",
  "endDate",
  "endTime",
  "bannerURL",
  "eventDescription",
  "questions"
];

function checkAccessCode(searchKey) {
  if(!searchKey) {
    searchKey = $('#accessCode').val();
  }
  let accessData = (ACCESS_MAP[searchKey]) ? ACCESS_MAP[searchKey]: null;
  if(!accessData) {
    return;
  }
  Object.keys(accessData).forEach((el) => {
    $(`#${el}`).val(accessData[el]);
  });
}

$(document).ready(() => {
  $("#searchAccess").on("click", (e) => {
    e.preventDefault();
    checkAccessCode(null);
  })
})




