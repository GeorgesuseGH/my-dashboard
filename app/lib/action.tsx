'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
  import { neon } from '@neondatabase/serverless';
import { User } from './definitions';
import z from 'zod';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

 const sql=neon(`${process.env.DATABASE_URL}`)


 export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}






export async function addNewUser(prevState: string | undefined,data:FormData){
try{
  const rawFormData={
    email:data.get("email"),
    password:data.get("password"),
    firstName:data.get("firstName"),
    lastName:data.get("lastName")

  }
  
  const FormScheme=z.object({
email:z.string().min(6),
password:z.string().min(6),
firstName:z.string().min(2),
lastName:z.string().min(2)
})
const result=FormScheme.safeParse(
rawFormData)
 if(result.success){
  const {email,password,firstName,lastName}=result.data
 const checkEmail =await sql`SELECT * FROM users WHERE email=${email}`;
  if(checkEmail.length>0){

return "Email already exist !"
} 

const hashedPass=await bcrypt.hash(password,10)
if(hashedPass.length>0){
  const addUser=await sql`INSERT INTO users(email,password,firstName,lastName) VALUES(${email},${hashedPass},${firstName},${lastName}) RETURNING id`;
if(addUser.length>0){ 
 
  const addOnBoarding=await sql`INSERT INTO onBoardings(user_id) VALUES(${addUser[0].id}) RETURNING id`

if(addOnBoarding.length>0){

  
}
else{
  throw new Error
}
}
else{
  throw new Error
}

}
 

}}
catch(err){
  throw new Error(`${err}`)
}

revalidatePath('/signup')
 redirect('/login');
}





export async function fetchEveryBusiness(){
  try{
const getBusiness=await sql `SELECT * FROM business`
if(getBusiness.length>0)
{console.log(getBusiness.length)
  return getBusiness.map(b=>({name:b.name,lastrevenue:b.lastrevenue,overview:b.overview,id:b.b_id}))
}
else{
  throw new Error('')
}
  }
  catch(err){
throw new Error('Something mightve happend , please reload the page')
  }
}





export async function fetchAllBusinessChartData(){
try{ const getChartData=await sql`SELECT * FROM businessChartData `
  if(getChartData.length>0){
    return getChartData.map(data=>({b_id:data.b_id,revenues:data.revenues}))
  }
  else{
    throw new Error()
  }
}
catch(err){
  throw new Error()
}
}