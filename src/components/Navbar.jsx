import { createSignal } from "solid-js"
import styles from "./Navbar.module.css"
import { useNavigate } from "@solidjs/router";

function Navbar() {
  const [position, setPosition] = createSignal('left-0');
  const navigate = useNavigate();
  return (
    <div class="h-[15vh] py-4 pl-10 w-screen absolute top-0 flex text-white justify-between items-center">
      <div class="h-[90%] aspect-square bg-[url('/assets/shared/logo.svg')] bg-center bg-cover"></div>
      <div class="h-[0.5px] w-[42%] absolute left-[15%] bg-white bg-opacity-60"></div>
      
      <div class="flex w-[45%] h-full bg-white bg-opacity-[0.13] items-center justify-around relative">
        <div onClick={() => {
          setPosition('left-0')
          navigate('/')
        }} class={styles.nav_item}><span class="font-bold pr-1 text-orange-500">00</span>Home</div>
        <div onClick={() => {
          setPosition('left-[25%]')
          navigate('/destination')
        }} class={styles.nav_item}><span class="font-bold pr-1 text-orange-500">01</span>Destination</div>
        <div onClick={() => {
          setPosition('left-[50%]')
          navigate('/crew')
        }} class={styles.nav_item}><span class="font-bold pr-1 text-orange-500">02</span>Crew</div>
        <div onClick={() => {
          setPosition('left-[75%]')
          navigate('/technology')
        }} class={styles.nav_item}><span class="font-bold pr-1 text-orange-500">03</span>Technology</div>
        <div class={`absolute transition-[left] duration-500 ease-out h-[2px] w-1/4 ${position()} bottom-0 bg-white`}></div>
      </div>
    
    </div>
  )
}

export default Navbar