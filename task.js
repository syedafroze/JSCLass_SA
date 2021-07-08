let users=[{
    name:"syed",
    id:9,
    age:23
},
{
    name:"Afzal",
    id:10,
    age:23
},
{
    name:"Shyam",
    id:19,
    age:23
}]

//[[syed,9],[Afzal,10],[Shyam,19]]

let res=[];

for(i=0;i<users.length;i++){
    res.push([users[i].name,users[i].id]);
}
console.log(res);

let res2 = users.map((obj)=>[obj.name,obj.id])
console.log(res2);


