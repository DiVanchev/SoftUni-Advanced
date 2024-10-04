function search() {
   const townsListEl = document.querySelector('#towns');
   const searchfieldEl = document.querySelector('#searchText');
   const resultEl = document.querySelector('#result');

   const searchStr = searchfieldEl.value.toLowerCase();

   if(searchStr == '') return;

   const townsArr = Array.from(townsListEl.children);
   const towns = townsArr.map((el) => el.textContent.toLowerCase());

   townsArr.forEach((el) => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   })

   let result = [];
   
   for (let i = 0; i < towns.length; i++) {
      if(towns[i].indexOf(searchStr) >= 0)
         result.push(i)
   }

   result.forEach((position, index) => {
      townsListEl.children[position].style.fontWeight = 'bold';
      townsListEl.children[position].style.textDecoration = 'underline';
   })
   
   resultEl.textContent = `${result.length} matches found`;

  searchfieldEl.value = '';
}
