import React from 'react';
 function task8(){
const isLoggedIn=true;
return (
<div>
{isLoggedIn ?(
    <h1>Welcome back!</h1>
) : (
    <h1> please log in.</h1>
)}
</div>
);
}

 export default task8;