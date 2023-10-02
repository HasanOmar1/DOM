
const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];


    //1. Loop over the array with the forEach method - V
    // dynamically create an ordered list - V
    //  of the first and last names of the objects.

    const ol = document.createElement("ol")
    users.forEach((user) => {
        const li = document.createElement("li")
        li.innerText = user.firstName + " " + user.lastName;

        //Create a custom data attribute called “data-id” and attach the id value to each li.
        //create new attribute
        const dataId = document.createAttribute("data-id")
        dataId.value = Math.floor(Math.random() * 1000)
        li.setAttribute("data-id", dataId.value)
        ol.append(li)
    })

    const body = document.body;
    body.appendChild(ol)

//remove the numbers from the list
ol.style.listStyleType = "none"







