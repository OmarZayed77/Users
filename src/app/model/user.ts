export default interface User
{
    id? : string;
    fName? : string;
    lName? : string;
    email? : string;
    address? : string;
    city?: string;
    state? : string;
    gender? : Gender;
} 