let cl = console.log;

//Tupels
//  Roll-No, Roll-Name, Can_see_other-cand, Can_see-Comp

//Candidate >> 1, candidate, false, true
//Admin>> 2 , Admin,true, false
//recruiter >> 3 , Recruiter, true, true

let p :{
    fname : string,
    lname: string,
    age: number,
    hobbies : (string | number)[],
    child : {
        fname : string,
    lname: string,
    age: number,
    }
    role : [number,string, boolean, boolean]
    
}

 p = {
    fname : 'jhon',
    lname: 'doe',
    age: 45,
    hobbies : ['reading', 'writing', 123],
    child : {
        fname : 'jen',
    lname: 'doe',
    age: 18,
    },
    role : [1, 'candidate', false, true]
}



// p.role.push('can read')
// p.role.unshift('can read');
// p.role.shift();

// p.role[0] = 4;
cl(p.role);

// ENUMS

enum Role{Admin, Read_Only_User,  Recruiter}
// enum Role{Admin = 100, Read_Only_User =200,  Recruiter}
let cand1 = {
    fname : 'jhon',
    lname : 'doe',
    email : 'jhon@gmail.com',
    usertype : Role.Read_Only_User,
    userId :Role.Read_Only_User
}

if(cand1.usertype === Role.Read_Only_User){
    cl('You can log in')
}

cl('usertype', cand1.usertype);
cl('user No', cand1.userId);

cl(Role.Admin)

let cand2 = {
    fname : 'jen',
    lname : 'doe',
    email : 'jendoe@gmail.com',
    usertype : Role.Admin,
    userNo : 2
};

if(cand2.usertype === Role.Admin){
    cl('please login correctly')
}else{
    throw(Error('correct'))
}

cl(cand2.usertype)