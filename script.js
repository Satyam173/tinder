// get the data

var users = [
    {profilepic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" , 
    displayPic:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" ,
    pendingmsg:4, 
    location:"Rourkela, India", 
    name:"Satyam" , 
    age:21 , 
    interests:["coding","sports"],
    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
    isFriend:null
    },
    {profilepic:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
    displayPic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" ,
    pendingmsg:3, 
    location:"Kandhamal, India", 
    name:"Snehanjali" , 
    age:19 , 
    interests:["music","dance"],
    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
    isFriend:null
    },
    {profilepic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
    displayPic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" ,
    pendingmsg:4, 
    location:"Bangalore, India", 
    name:"Harshita" , 
    age:25 , 
    interests:["music","coding","sports"],
    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit? Rem aspernatur molestiae temporibus nobis!",
    isFriend:null
    },
];

var curr = 0;

function select(){
    
}

(function setInitial(){
    document.querySelector(".maincard img").src = users[curr].displayPic;
    document.querySelector(".incomingcard img").src = users[curr+1].displayPic;
})();