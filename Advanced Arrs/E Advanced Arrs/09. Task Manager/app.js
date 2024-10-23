function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add');
    const openSection = document.querySelectorAll('section')[1].querySelector('div:nth-of-type(2)');
    const inProgressSection = document.getElementById('in-progress');
    const completeSection = document.querySelectorAll('section')[3].querySelector('div:nth-of-type(2)');
  
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      const task = taskInput.value.trim();
      const description = descriptionInput.value.trim();
      const date = dateInput.value.trim();
  
      if (!task || !description || !date) {
        return;
      }
  
      const article = createArticle(task, description, date);
      openSection.appendChild(article);
  
      taskInput.value = '';
      descriptionInput.value = '';
      dateInput.value = '';
    });
  
    function createArticle(task, description, date) {
      const article = document.createElement('article');
  
      const h3 = document.createElement('h3');
      h3.textContent = task;
  
      const pDescription = document.createElement('p');
      pDescription.textContent = `Description: ${description}`;
  
      const pDate = document.createElement('p');
      pDate.textContent = `Due Date: ${date}`;
  
      const divButtons = document.createElement('div');
      divButtons.className = 'flex';
  
      const startButton = document.createElement('button');
      startButton.className = 'green';
      startButton.textContent = 'Start';
      startButton.addEventListener('click', () => startTask(article));
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'red';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => article.remove());
  
      divButtons.appendChild(startButton);
      divButtons.appendChild(deleteButton);
  
      article.appendChild(h3);
      article.appendChild(pDescription);
      article.appendChild(pDate);
      article.appendChild(divButtons);
  
      return article;
    }
  
    function startTask(article) {
      const finishButton = document.createElement('button');
      finishButton.className = 'orange';
      finishButton.textContent = 'Finish';
      finishButton.addEventListener('click', () => finishTask(article));
  
      const buttonContainer = article.querySelector('.flex');
      buttonContainer.innerHTML = '';
      buttonContainer.appendChild(finishButton);
  
      inProgressSection.appendChild(article);
    }
  
    function finishTask(article) {
      const buttonContainer = article.querySelector('.flex');
      if (buttonContainer) {
        buttonContainer.remove();
      }
  
      completeSection.appendChild(article);
    }
  }
  