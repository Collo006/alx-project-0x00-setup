import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () =>{
 return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Button" styles=" rounded-sm "/>
      <Button title="Button-2" styles=" rounded-md " />
      <Button title="Button-3" styles=" rounded-full " />
    </div>
  )
}
export default Landing