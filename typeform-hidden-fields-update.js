document.addEventListener("DOMContentLoaded", function() {
       const gclid = "gclid";
       const gClientId = "test_ga_client_id";
       const gMedium = "test_ga_medium";
       const gSource = "test_ga_source";
       const landingPage = "https://www.mescoursparticuliers.fr/";	
       const cookieString = `gclid=${gclid},ga_client_id=${gClientId},ga_medium=${gMedium},ga_source=${gSource},landing_page_url=${landingPage}`

       const typeform = document.getElementById("js-typeform-update");
       typeform.removeAttribute("data-tf-hidden");
       console.log(typeform.getAttribute("data-tf-hidden"), cookieString)
       typeform.setAttribute("data-tf-hidden", cookieString);
});
