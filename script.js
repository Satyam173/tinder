// get the data

var users = [
    {
        profilepic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        pendingmsg: 4,
        location: "Rourkela, India",
        name: "Satyam",
        age: 21,
        interests: [{
            icon: `<i class="ri-code-s-slash-line"></i>`,
            interest: "coding"
        }, {
            icon: `<i class="ri-user-heart-fill"></i>`,
            interest: "sports"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        pendingmsg: 3,
        location: "Kandhamal, India",
        name: "Snehanjali",
        age: 19,
        interests: [{
            icon: `<i class="ri-pencil-line"></i>`,
            interest: "drawing"
        }, {
            icon: `<i class="ri-restaurant-line"></i>`,
            interest: "food"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        pendingmsg: 4,
        location: "Bangalore, India",
        name: "Harshita",
        age: 25,
        interests: [{
            icon: `<i class="ri-code-s-slash-line"></i>`,
            interest: "coding"
        }, {
            icon: `<i class="ri-restaurant-line"></i>`,
            interest: "food"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
        isFriend: null
    },
];

function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingmsg;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function (interests, icon) {
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interests.icon}<h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[curr].bio;
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;
    setData(curr);
    curr=2;
})();

function imageChange() {
    if(!isAnimating){
        isAnimating=true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating=false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                
                if(curr===users.length) curr=0;
                select(".maincard img").src =users[curr].displayPic;
                curr++;
    
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
    
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:0.7
        },"a")
    
        tl.from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:1
        },"a")
    }
    
};

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .elem",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease:Power4.easeInOut,
        duration:1.2
    })
});

accept.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .elem",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease:Power4.easeInOut,
        duration:1.2
    })
});

function containerCreator(){
    document.querySelectorAll(".elem")
    .forEach(function(elem){
        let div = document.createElement("div");
        div.classList.add(`${elem.classList[1]}container`,'overflow-hidden');
        div.appendChild(elem);
        select(".details").appendChild(div);
    })
};

