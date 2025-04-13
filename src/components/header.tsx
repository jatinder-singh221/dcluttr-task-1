import * as Assets from '../assets'

export default function Header() {
    return (
        <>
            <div className="w-full min-h-[64px] justify-between py-[12px] px-[24px] border-b border-[#EBEBEB] flex flex-row items-center">
                <h2 className="font-[500] text-[14px] leading-[18px] [-tracking-[0.03px]] align-middle text-[#031B15]">Quick Commerce</h2>
                <div className="min-h-[40px] min-w-[358px] flex flex-row items-center justify-end gap-[8px]">
                    <button className="min-w-[80px] h-[40px] border-1 rounded-[10px] flex flex-row gap-[8px] items-center justify-center border-[#D9D9D9] px-[16px]">
                        <img src={Assets.chartline} alt="chart-logo" className="w-[20px] h-[20px]" />
                        <img src={Assets.bi_toogle} alt="chart-logo" className="w-[20px] h-[20px]" />
                    </button>
                    <button className="min-w-[207px] h-[40px] border-1 rounded-[10px] flex flex-row gap-[8px] border-[#D9D9D9] items-center px-[16px]">
                        <img src={Assets.calender} alt="calander" className="w-[20px] h-[20px]" />
                        <p className="font-[500] text-[14px] capitalize leading-[20px] text-[#031B15]">Aug 01, 024 - Aug 03, 2024</p>
                        <img src={Assets.caretDown} alt="chevron-down" className="w-[20px] h-[20px]" />
                    </button>
                </div>
            </div>

            <div className="w-full min-h-[64px] border-b border-[#EBEBEB] flex items-center py-[12px] px-[16px]">
                <div className="min-h-[40px] w-auto flex flex-row items-center gap-[16px] border-[0.5px] rounded-[12px] p-[4px] border-[#031B151A]">
                    <div className="min-h-[32px] min-w-[91px] rounded-[10px] py-[6px] px-[14px] flex flex-row gap-[6px] bg-[#DFEAE8]">
                        <img src={Assets.blinkit} alt="blinkit" />
                        <p className="font-[500] text-[14px] leading-[20px] align-middle [-tracking-[0.05px]] text-[#027056]">Blinkit</p>
                    </div>
                    <div className="flex flex-row items-center opacity-[0.3] gap-[6px] px-[8px] py-[6px] rounded-[4px]">
                        <img src={Assets.zepto} alt="zepto" />
                        <p className="font-[500] text-[14px] leading-[20px] align-middle [-tracking-[0.05px]]">Zepto</p>
                    </div>
                    <div className="flex flex-row items-center opacity-[0.3] gap-[6px] px-[8px] py-[6px] rounded-[4px]">
                        <img src={Assets.instamart} alt="instamart" />
                        <p className="font-[500] text-[14px] leading-[20px] align-middle [-tracking-[0.05px]]">Instamart</p>
                    </div>
                </div>
            </div>
        </>
    )
}
