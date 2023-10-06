import "./styles.css";

const onClickAdd = () => {
  //追加するテキスト
  const addText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncomplete(addText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addIncomplete = (todo) => {
  //追加するdiv
  const div = document.createElement("div");
  div.className = "list-row";

  //追加するli
  const li = document.createElement("li");
  li.innerText = todo;

  //追加する完了ボタン
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    //削除対象を決定
    deleteIncomplete(completebutton.parentNode);
    //完了に移すdiv
    const addTarget = completebutton.parentNode;
    //完了に移すテキスト
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    //完了に加えるli
    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタン
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //削除対象を決定
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //未完了に加えるテキスト
      const text = backbutton.parentNode.firstElementChild.innerText;
      addIncomplete(text);
    });

    //divに要素設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了のulにdivを設定
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //追加する削除ボタン
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //削除対象を決定
    deleteIncomplete(deletebutton.parentNode);
  });

  //divにliとbuttonを設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //ulにdivを設定
  document.getElementById("incomplete-list").appendChild(div);
};
