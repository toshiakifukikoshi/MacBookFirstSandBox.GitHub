import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
const ul = document.querySelector(".aaa");

const creatEl = (addtext) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  // pの生成
  const p = document.createElement("p");
  p.innerText = addtext;
  const ul = document.querySelector(".kkk");

  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(p);
  return div;
};

// 完了エリアに表示イベント
const addList = (text) => {
  console.log(text);
  const div = creatEl(text);
  const returnButton = document.createElement("button");
  returnButton.textContent = "戻る";
  div.append(returnButton);

  // 戻るボタンが押された時の処理
  returnButton.addEventListener("click", () => {
    const Target1 = returnButton.parentNode.parentNode;
    const texts = returnButton.previousElementSibling.textContent;

    const element = document.querySelector(".kkk");
    element.removeChild(Target1);

    createIncompleteList(texts);

    // deleteFunc(deleteButton, ul);
  });
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liを生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  // pの生成
  const p = document.createElement("p");
  p.innerText = text;

  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(p);

  //完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  div.append(completeButton);

  // 完了ボタンイベント
  completeButton.addEventListener("click", () => {
    // 要素をなくす

    const addTarget = completeButton.previousElementSibling;

    deleteFunc(deleteButton, ul);
    addList(addTarget.textContent);
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  div.append(deleteButton);

  deleteButton.addEventListener("click", () => {
    deleteFunc(deleteButton, ul);
    // 要素をなくす
  });
};

// 最初の入力画面
const onClickAdd = (text) => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// イベントで未完了リストからの削除関数
const deleteFunc = (deleteButton, ul) => {
  ul.removeChild(deleteButton.parentNode.parentNode);
};
