let toastBox = document.getElementById("toastBox");
let sucessMessage = `<i class="fa-solid fa-circle-check"></i> Successfully submitted!`;
let errorMessage = `<i class="fa-solid fa-circle-xmark"></i>Error Occured`;
let invalidMessage = `<i class="fa-solid fa-circle-exclamation"></i>Invalid input, please try again`;

// Function to show toast notification
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
