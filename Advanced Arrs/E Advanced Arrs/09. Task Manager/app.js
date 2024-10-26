window.onload = function () {
  // Selecting required elements with more specific selectors
  const taskInput = document.getElementById('task');
  const descriptionInput = document.getElementById('description');
  const dateInput = document.getElementById('date');
  const addButton = document.getElementById('add');
  const openSection = document.querySelector("#open-section");  // Updated to use an ID for clarity
  const inProgressSection = document.getElementById('in-progress');
  const completeSection = document.querySelector("#complete-section"); // Updated to use an ID for clarity

  // Verify that all necessary elements are present in the DOM
  if (!taskInput || !descriptionInput || !dateInput || !addButton || !openSection || !inProgressSection || !completeSection) {
      console.error("One or more required elements couldn't be found. Please check the HTML structure.");
      return;
  }

  // Add event listener for the "Add" button
  addButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Validate inputs
      const task = taskInput.value.trim();
      const description = descriptionInput.value.trim();
      const date = dateInput.value.trim();

      if (!task || !description || !date) return;

      // Create the task article and append it to the "Open" section
      const article = createArticle(task, description, date);
      openSection.appendChild(article);

      // Clear input fields after adding the task
      taskInput.value = '';
      descriptionInput.value = '';
      dateInput.value = '';
  });

  // Function to create and return the article element
  function createArticle(task, description, date) {
      const article = document.createElement('article');
      article.innerHTML = `
          <h3>${task}</h3>
          <p>Description: ${description}</p>
          <p>Due Date: ${date}</p>
      `;

      // Create buttons container div
      const divButtons = document.createElement('div');
      divButtons.className = 'flex';

      // Start Button
      const startButton = document.createElement('button');
      startButton.className = 'green';
      startButton.textContent = 'Start';
      startButton.addEventListener('click', () => startTask(article));

      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.className = 'red';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => article.remove());

      // Append buttons to the container
      divButtons.appendChild(startButton);
      divButtons.appendChild(deleteButton);
      article.appendChild(divButtons);

      return article;
  }

  // Function to move the article to the 'In Progress' section
  function startTask(article) {
      const finishButton = document.createElement('button');
      finishButton.className = 'orange';
      finishButton.textContent = 'Finish';

      // Add event listener for the "Finish" button
      finishButton.addEventListener('click', () => finishTask(article));

      // Replace "Start" button with "Finish" button in the button container
      const buttonContainer = article.querySelector('.flex');
      if (buttonContainer) {
          buttonContainer.innerHTML = '';
          buttonContainer.appendChild(finishButton);
          inProgressSection.appendChild(article); // Move article to 'In Progress' section
      } else {
          console.error("Button container not found in the article.");
      }
  }

  // Function to move the article to the 'Complete' section
  function finishTask(article) {
      const buttonContainer = article.querySelector('.flex');
      if (buttonContainer) {
          buttonContainer.remove(); // Remove button container
          completeSection.appendChild(article); // Move article to 'Complete' section
      } else {
          console.error("Button container not found in the article.");
      }
  }
};
