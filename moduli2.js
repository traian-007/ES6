const $btn2 = document.getElementById('btn2')
$btn2.addEventListener("click", e => {
    e.preventDefault();

    import('/moduli1.js')
      .then(module => {
        module.default(); 
      })
      .catch(err => {
        console.log(err.message);
      });
     
});
