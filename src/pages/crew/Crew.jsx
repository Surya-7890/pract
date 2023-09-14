import { For, Show, createResource, createSignal } from "solid-js"

const fetchData = async () => {
  const res = await fetch('http://localhost:7000/crew');
  return await res.json()
}

function Crew() {
  const [data] = createResource(fetchData);
  const [active, setActive] = createSignal(0)
  return (
    <div class="h-[100vh] flex items-end overflow-hidden w-[100vw] bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover">
      <div class="h-[80%] w-[50%] text-white">
        <div class="font-extrabold text-3xl text-center">MEET YOUR CREW</div>
          <Show when={data()}>
            <For each={data()}>
              {(item, index) => (
                <Show when={index() === active()}>
                  <div class="h-[80%]">
                    <div class="text-center w-[80%] text-3xl">{item.role}</div>
                    <div class="text-center w-[80%] text-3xl font-extrabold">{item.name}</div>
                    <div class="text-center w-[80%]">{item.bio}</div>
                  </div>
                </Show>
              )}
            </For>
            <div class="h-[10%] flex justify-center space-x-5">
              <For each={data()}>
                {(item,index)=><div onClick={() => setActive(index())} class='h-full aspect-square rounded-full bg-white'></div>}
              </For>
            </div>
          </Show>
      </div>
      <div></div>
    </div>
  )
}

export default Crew