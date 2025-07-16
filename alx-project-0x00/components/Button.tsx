import { ButtonProps } from "@/interfaces";
const Button: React.FC <ButtonProps>= ({title,styles}) =>{
return(
   <div>
            <p className=" text-sm ">{title}</p>
            <p className=" text-m ">{title}</p>
            <p className=" text-l ">{title}</p>

   </div>
)
}
export default Button;