import Image from "next/image";


export default function AppBar() {
  return (
    <header className="flex flex-col">
        <div className="bg-foreground ">
            <Image src='/images/logoo.png' width={100} height={40}></Image>
        <input className=""></input>
        </div>

      <nav></nav>
    </header>
  )
}
