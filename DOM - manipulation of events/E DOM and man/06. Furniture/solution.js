function solve() {
  const initialFurnitureCheckboxEl = document.querySelector('input[type=checkbox]');
  initialFurnitureCheckboxEl.disabled = false;
 
  const buttonElements = document.querySelectorAll('button');
 
  for (const curButton of buttonElements) {
    curButton.addEventListener('click', function (e) {
      const textareaElement = e.currentTarget.previousElementSibling
 
      if (e.currentTarget.textContent === 'Generate' && textareaElement.value){
        const TbodyElement = document.querySelector('tbody');
        const furnitureInputObj = JSON.parse(textareaElement.value);
    
        const newTrElement = document.createElement('tr');
    
        const furnitureImageTdElement = document.createElement('td');
        const furnitureNameTdElement = document.createElement('td');
        const furniturePriceTdElement = document.createElement('td');
        const furnitureDecorationFactorTdElement = document.createElement('td');
        const furnitureMarkTdElement = document.createElement('td');
  
          for (const [key, value] of Object.entries(furnitureInputObj[0])) {
            const newParagraphElement = document.createElement('p');
      
            switch (key) {
              case 'name': 
                newParagraphElement.textContent = value;
                furnitureNameTdElement.appendChild(newParagraphElement);
                break;
      
              case 'price':
                newParagraphElement.textContent = Number(value);
                furniturePriceTdElement.appendChild(newParagraphElement);
                break;
      
              case 'decFactor':
                newParagraphElement.textContent = Number(value);
                furnitureDecorationFactorTdElement.appendChild(newParagraphElement);
                break;
      
              case 'img':
              const newImgElement = document.createElement('img');
                newImgElement.setAttribute('src', value);
                furnitureImageTdElement.appendChild(newImgElement);
                break;
            }
          }
        const newInputElement = document.createElement('input');
        newInputElement.setAttribute('type', 'checkbox');
        furnitureMarkTdElement.appendChild(newInputElement);
    
        newTrElement.appendChild(furnitureImageTdElement);
        newTrElement.appendChild(furnitureNameTdElement);
        newTrElement.appendChild(furniturePriceTdElement);
        newTrElement.appendChild(furnitureDecorationFactorTdElement);
        newTrElement.appendChild(furnitureMarkTdElement);
    
        TbodyElement.appendChild(newTrElement);
      } else if (e.currentTarget.textContent === 'Buy'){
        const furnitureTrElements = document.querySelectorAll('tbody tr');
 
        const boughtFurnitureArr = [];
        let totalPrice = 0;
        let totalDecorFactor = 0;
        let avgDecorFactor = 0;
 
        for (const curFurnitureTrElement of furnitureTrElements) {
          const checkboxElement = curFurnitureTrElement.querySelector('input[type=checkbox]');
 
          if (checkboxElement.checked) {
            const name = curFurnitureTrElement.querySelector('td:nth-of-type(2) p').textContent;
            const price = curFurnitureTrElement.querySelector('td:nth-of-type(3) p').textContent;
            const decorFactor = curFurnitureTrElement.querySelector('td:nth-of-type(4) p').textContent;            
 
            boughtFurnitureArr.push(name);
            totalPrice += Number(price);
            totalDecorFactor += Number(decorFactor);
          }
        }
 
        avgDecorFactor = totalDecorFactor / boughtFurnitureArr.length;
 
        const output = `Bought furniture: ${boughtFurnitureArr.join(', ')}\n` + `Total price: ${totalPrice.toFixed(2)}\n` + `Average decoration factor: ${avgDecorFactor}`;
 
        textareaElement.value = output;
      }
    })
  }
}