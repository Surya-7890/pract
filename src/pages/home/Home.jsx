function Home() {
  return (
    <div class="h-[100vh] w-[100vw] bg-[url('/assets/home/background-home-desktop.jpg')] bg-center bg-cover">
      <div class="h-[70%] w-full absolute bottom-0 flex text-white">
        <div class="h-full w-[60%] flex flex-col justify-evenly items-start px-20">
          <div class="text-[25px] font-extralight w-1/2">SO, YOU WANT TO TRAVEL TO</div>
          <div class="text-[100px] w-1/2">SPACE</div>
          <div class="w-1/2">
             Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this world experience! Explore
          </div>
        </div>
        <div class="h-full w-[40%] flex justify-center items-center">
          <div class="h-[55%] aspect-square rounded-full bg-white text-black flex justify-center items-center text-3xl">EXPLORE</div>
        </div>
      </div>
    </div>
  )
}

export default Home