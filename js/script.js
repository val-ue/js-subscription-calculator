var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number("1");


subTypeElement.addEventListener("change", function(e) {
    subtype = e.target.value;
    updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function(e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
});

var updateSubscriptionDiv = function (){
    var monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subtype === "premium") {
        monthlyCost = 10;
    }
    
    var total = subDuration * monthlyCost;

    result.innerText = `You have chosen the ${subDuration}
     month ${subType} plan for $${total}.`;
};