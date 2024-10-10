function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       
       document.querySelector('#bestRestaurant > p').textContent = '';
       document.querySelector('#workers > p').textContent = '';

       
       const input = document.querySelector('textarea').value;
       const restaurantsData = JSON.parse(input); 

       const restaurants = {};

       restaurantsData.forEach(data => {
           const [restaurantName, workersData] = data.split(' - ');
           const workers = workersData.split(', ');

           if (!restaurants[restaurantName]) {
               restaurants[restaurantName] = { workers: [], avgSalary: 0, bestSalary: 0 };
           }

           workers.forEach(workerData => {
               const [name, salary] = workerData.split(' ');
               const salaryNum = Number(salary);
               restaurants[restaurantName].workers.push({ name, salary: salaryNum });
           });

           const totalSalaries = restaurants[restaurantName].workers.reduce((sum, worker) => sum + worker.salary, 0);
           restaurants[restaurantName].avgSalary = totalSalaries / restaurants[restaurantName].workers.length;
           restaurants[restaurantName].bestSalary = Math.max(...restaurants[restaurantName].workers.map(worker => worker.salary));
       });

       let bestRestaurantName = '';
       let bestAvgSalary = 0;

       for (const restaurant in restaurants) {
           if (restaurants[restaurant].avgSalary > bestAvgSalary) {
               bestAvgSalary = restaurants[restaurant].avgSalary;
               bestRestaurantName = restaurant;
           }
       }

       const bestRestaurant = restaurants[bestRestaurantName];

       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

       const bestRestaurantText = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
        document.querySelector('#bestRestaurant > p').textContent = bestRestaurantText;

        const workersOutput = bestRestaurant.workers
            .map(worker => `Name: ${worker.name} With Salary: ${Math.floor(worker.salary)}`)
            .join(' ');
        document.querySelector('#workers > p').textContent = workersOutput;

       document.querySelector('textarea').value = '';
   }
}
