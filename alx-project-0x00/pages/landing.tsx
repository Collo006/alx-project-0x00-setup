import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () =>{
 return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Button" styles=" rounded-sm "/>
      <Button title="Button" styles=" rounded-md " />
      <Button title="Button" styles=" rounded-lg " />
    </div>
  )
}
export default Landing