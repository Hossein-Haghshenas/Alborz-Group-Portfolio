// get elements
const progressBar = document.querySelector(".progress-bar");
const body = document.body;

const scrollProgressBar = () => {
  // getBoundingClientRect will changing while scroll, because it's relative to your current view port.
  const scrollDistance = -body.getBoundingClientRect().top;
  // calculate reminded progress then multiplication that with 100
  const progressPercentage = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
  // calculate final value
  const finalValue = Math.floor(progressPercentage);

  progressBar.style.width = finalValue + "%";

  if (finalValue < 0) {
    progressBar.style.width = "0%";
  }
};

window.addEventListener("scroll", scrollProgressBar);
