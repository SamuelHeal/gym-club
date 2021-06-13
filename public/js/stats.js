// const { max, update } = require("../../models/User");

// Prevent page refresh 
const updateStatsHandler = async (event) => {
    event.preventDefault();
// grabs by id from editStats.handlebars
    const age = document.querySelector('#Age').value.trim();
    const description = document.querySelector('#Description').value.trim();
    const height = document.querySelector('#Height').value.trim();
    const weight = document.querySelector('#Weight').value.trim();
    const max_bench = document.querySelector('#Max-Bench-Press').value.trim();
    const max_deadlift = document.querySelector('#Max-Deadlift').value.trim();
    const max_squat = document.querySelector('#Max-Squat').value.trim();
    const id = document.querySelector('#update-stats-button').getAttribute("data-post-id")
// converts to json and runs the update in statsRoutes
    if ( age || description || height || weight || max_bench || max_deadlift || max_squat || id) {
        const response = await fetch('/api/stats/update/'+id, {
            method: 'PUT',
            body: JSON.stringify({ age, description, height, weight, max_bench, max_deadlift, max_squat }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace(`/user/${id}`);
        } else {
            alert(response.statusText);
        }
    }
};

const age = document.getElementById("Age");
const height = document.getElementById("Height");
const weight = document.getElementById("Weight");
const deadlift = document.getElementById("Max-Deadlift");
const bench = document.getElementById("Max-Bench-Press");
const squat = document.getElementById("Max-Squat");
const invalidChars = [
  "-",
  "+",
  "e",
];

if (age) {
    age.addEventListener("keydown", function(event) {
        if (invalidChars.includes(event.key)) {
          event.preventDefault();
        }
      });
      
      height.addEventListener("keydown", function(event) {
          if (invalidChars.includes(event.key)) {
            event.preventDefault();
          }
        });
      
      weight.addEventListener("keydown", function(event) {
          if (invalidChars.includes(event.key)) {
          event.preventDefault();
          }
      });
      
      deadlift.addEventListener("keydown", function(event) {
          if (invalidChars.includes(event.key)) {
          event.preventDefault();
          }
      });
      
      bench.addEventListener("keydown", function(event) {
          if (invalidChars.includes(event.key)) {
          event.preventDefault();
          }
      });
      
      squat.addEventListener("keydown", function(event) {
          if (invalidChars.includes(event.key)) {
          event.preventDefault();
          }
      });
}



// event listner on submit button, will run the updateStatsHandler 
if (document.querySelector('#update-stats-button')) {
    document
        .querySelector('#update-stats-button')
        .addEventListener('click', updateStatsHandler)
}