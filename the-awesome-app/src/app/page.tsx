import { Counter } from "@/components/Counter";
//import { Message } from "@/components/Message";

export default function Home() {
  return (
    <div>
        <h3>React Application</h3>

        {/* <Message text="React" color="blue"/>
        <Message text="Next.js" color="red"/> */}

        <Counter initialCount={5}/>
        {/* <Counter initialCount={10}/> */}
    </div>
  );
}
