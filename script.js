 const detailsContent = document.getElementById("detailsContent");

  detailsContent.style.display = 'none';

  function getSelectedValue(){
  
    var selectedValue = document.getElementById("referredby").value;
    
    if(selectedValue == "magic" || selectedValue == "other" )
    {
        detailsContent.style.display = 'block';  

    }else{
        
        detailsContent.style.display = 'none';

    }
  }
  



