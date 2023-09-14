import { createResource } from "solid-js"

const fetchData = async () => {
  const res = await fetch('http://localhost:7000/destination');
  return res.json();
}

function Destination() {
  const [data] = createResource();
  return (
    <div class="h-[100vh] w-[100vw] bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover">
      <div class="h-[75%] w-full absolute bottom-0 text-white">
        <div class="h-full w-[50%] flex flex-col items-center space-y-10">
          <div class="text-2xl"><span class="text-orange-500 mr-5">01</span>PICK YOUR DESTINATION</div>
          <div class="h-[80%] aspect-square bg-white rounded-full"></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Destination