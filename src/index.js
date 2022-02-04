import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liを生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);

  // pの生成
  const p = document.createElement("p");
  p.innerText = inputText;
  li.appendChild(p);

  // ul.appendChild(li);
  const el = document.querySelector(".aaa");
  console.log(el);
  el.appendChild(li);

  // div配下にpタグを生成

  // 未完了のリストに追加
  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
