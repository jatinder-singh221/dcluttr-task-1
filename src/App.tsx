import Aside from "./components/aside"
import Header from "./components/header"
import Graphs from "./components/graphs"
import Table from "./components/table"

export default function App() {

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Aside />
      <section className="flex-1 min-h-screen overflow-y-auto relative">
        <div className='mt-[20px] border-1 border-[#EBEBEB]
           rounded-[10px] mx-[20px] bg-[#FAFAFA] min-h-screen'
        >
          <Header />
          <div className='flex-1 m-[14px] h-full flex flex-col gap-[48px]'>
            <div className='flex flex-col gap-[24px]'>
              <Graphs />
              <Table />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}