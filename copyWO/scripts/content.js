let woNumber = "";
let isBtn = false;

const btn = document.createElement("button");
btn.id = "copybtn";
btn.innerText = "Copy WO";
btn.style.padding = "0.3rem";
btn.style.cursor = "pointer";
btn.style.marginLeft = "1rem";

const snack = document.createElement("div");
snack.id = "snack";

document.body.appendChild(snack);

function showSnack(text) {
  snack.innerText = `Copied ${text}`;
  snack.className = "show";
  setTimeout(function () {
    snack.className = snack.className.replace("show", "");
  }, 1500);
}

btn.addEventListener("click", () => {
  navigator.clipboard.writeText(woNumber);
  showSnack(woNumber);
  console.log(woNumber);
});

const observer = new MutationObserver((rec) => {
  const comments = document.querySelectorAll(".plain-text-display");

  if (comments == null) return;

  for (let e of comments) {
    if (
      e.innerText.includes(
        "Work order is created for this ticket with EAM(APM) work order number:"
      )
    ) {
      if (!isBtn) {
        e.parentNode.appendChild(btn);
        e.parentNode.style.display = "flex";
        e.parentNode.style.alignItems = "center";
        isBtn = true;
      } else isBtn = false;

      let array = e.innerHTML.split(" ");
      woNumber = array.pop();
    }
  }
});

window.addEventListener("beforeunload", (event) => {
  if (observer) observer.disconnect();
});

observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true,
});
