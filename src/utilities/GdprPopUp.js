export function showHideGdpr(){
  var gdpr = document.getElementById("gdpr");
  if(gdpr.style.display === "none"){
    gdpr.style.display = "block"
  }
  else{
    gdpr.style.display = "none"
  };
};