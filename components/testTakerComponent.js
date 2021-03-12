const getItemData = (data, fields) => {
  let itemData = [];
  fields.map(field => {
    let item = document.createElement("span");
    item.textContent = data[field];
    itemData.push(item);
  })
  return itemData;
}

const getList = (htmlParent, data, dataFields) => {
  data.map(item => {
    let listItem = document.createElement("div");
    getItemData(item, dataFields).map(item => {
      listItem.appendChild(item);
    })
    htmlParent.appendChild(listItem);
  })
}

export { getList };
