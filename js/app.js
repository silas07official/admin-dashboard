const aside = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// open sidebar
menuBtn.addEventListener("click", () => {
  aside.style.display = "block";
});
// close sidebar
closeBtn.addEventListener("click", () => {
  aside.style.display = "none";
});
// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
// orders.forEach((order) => {
//   const tr = document.createElement("tr");
//   const trContent = `
//                 <td>${order.productName}</td>
//                 <td>${order.productNumber}</td>
//                 <td>${order.status}</td>
//                 <td class="${
//                   order.shipping === "Declined"
//                     ? "danger"
//                     : order.shipping === "Pending"
//                     ? "warning"
//                     : "success"
//                 }">${order.shipping}</td>
//                 <td class="primary">Details</td>
//                 `;
//   tr.innerHTML = trContent;
//   document.querySelector("table tbody").appendChild(tr);
// });
