const container = document.querySelector(".container");
const seats = document.querySelectorAll(" .row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let price = parseInt(movieSelect.value);


updateUI();
function updateMovie(movieIndex,moviePrice){
  localStorage.setItem("selectedMoive",movieIndex);
  localStorage.setItem("moviePrice",moviePrice);

}


function updateUI(){
  const selectedSeat = JSON.parse(localStorage.getItem('selectedSeats'));

  if(selectedSeat !== null && selectedSeat.length > 0)
  {
    seats.forEach((seat,index)=>{
      if(selectedSeat.indexOf(index)> -1){
        seat.classList.add('selected');
      }
    })
  }

  const selectedMoiveIndex = localStorage.getItem('selectedMoive');
  console.log(selectedMoiveIndex)

  if(selectedMoiveIndex!== null){
    movieSelect.selectedIndex = selectedMoiveIndex;
  }
}


function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  
  localStorage.setItem("selectedSeats",JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * price;
}

movieSelect.addEventListener("change", (e) => {
  price = parseInt(e.target.value);
  
  updateMovie(e.target.selectedIndex,e.target.value);
  updateSelectedCount();
});
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();

  }
});

updateSelectedCount();



