const navigation = document.querySelector(".nav");
const navToogle= document.querySelector(".imgmenu");

//  code for hambuger menu

navToogle.addEventListener("click", () => {
    const visibility = navigation.getAttribute('data-visible');
    
    if(visibility=== "false"){
        navigation.setAttribute("data-visible", true);
        navToogle.setAttribute("aria-expanded", true);
    }

    else if (visibility=== "true"){
        navigation.setAttribute("data-visible", false);
        navToogle.setAttribute("aria-expanded", false);
    }
});