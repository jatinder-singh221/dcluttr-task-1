import React from 'react';
import * as Assets from '../assets'


const tableContext = {
    "headers": [
        { label: "Sales" },
        { label: "Out of Stock" },
        { label: "Total Inventory", withRightBorder: true },
        { label: "Avg. Rank" },
        { label: "Est. Traffic" },
        { label: "Est. Impressions" },
    ]
}

const renderDataCell = (text: string, extraClasses = "", isGreen = false) => (
    <td className={`px-[12px] text-center text-[14px] leading-[16px] tracking-[-0.02px] align-middle ${extraClasses} ${isGreen ? "text-[#1D874F]" : "text-[#4E5E5A]"}`}>
        {text}
    </td>
)

const TableContent = () => {

    return (
        <div className="overflow-x-auto rounded-xl shadow-[0_1px_4px_0px_rgba(0,0,0,0.05)]">
            <table className="min-w-full table-auto">
                <thead className="bg-white gap-1">
                    <tr>
                        <th className="border-r border-[#F1F1F1]" rowSpan={2}>
                            <div className="flex items-center justify-center gap-[4px]">
                                <img src={Assets.chartline} alt="chart" className="w-[20px] h-[20px]" />
                                SKU Name
                            </div>
                        </th>
                        <th className="text-center border-b border-r border-[#F1F1F1] h-[48px] font-[700] text-[15px] leading-[18px] tracking-[-0.02px] align-middle text-[#013025]" colSpan={3}>
                            Availability
                        </th>
                        <th className="text-center border-b border-[#F1F1F1] h-[48px] font-[700] text-[15px] leading-[18px] tracking-[-0.02px] align-middle text-[#013025]" colSpan={3}>
                            Visibility
                        </th>
                    </tr>
                    <tr className="bg-white h-[48px] text-[15px] font-semibold leading-[16px] tracking-[-0.02px] align-middle text-[#013025]">
                        {tableContext.headers.map(({ label, withRightBorder }, index) => (
                            <th key={index} className={withRightBorder ? "border-r border-[#F1F1F1]" : ""}>
                                <div className="flex justify-center items-center gap-1">
                                    {label}
                                    <img src={Assets.caretDown} alt="" className="w-[12px] h-[12px]" />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* SKU 1 */}
                    <tr className="border-t border-[#F1F1F1] h-[48px]">
                        <td className="flex items-center gap-[8px] px-[12px] h-[48px] border-r border-[#F1F1F1]">
                            <input type="checkbox" checked className="accent-[#027056] w-[18px] h-[18px] rounded-[3px]" />
                            <p className="font-semibold text-[15px] leading-[16px] underline">Protein Bar 100g</p>
                        </td>
                        {["₹93,132.12", "1.68%", "931.9", "3.2", "12,303", "25,005"].map((text, i) =>
                            renderDataCell(text, i === 2 ? "border-r border-[#F1F1F1]" : "")
                        )}
                    </tr>

                    {/* SKU 2 */}
                    <tr className="border-t border-[#F1F1F1]">
                        <td rowSpan={3} className="px-[12px] border-r border-[#F1F1F1] align-middle">
                            <div className="flex items-center gap-[8px] h-full">
                                <input type="checkbox" checked className="accent-[#027056] w-[18px] h-[18px] rounded-[3px]" />
                                <p className="font-semibold text-[15px] leading-[16px] underline">Choco Bar 100g</p>
                            </div>
                        </td>
                        {["₹8,526.32", "6.79%", "679", "7", "3005", "4231"].map((text, i) =>
                            renderDataCell(text, "pt-[16px]" + (i === 2 ? " border-r border-[#F1F1F1]" : ""))
                        )}
                    </tr>
                    <tr>
                        {["₹7,012.72", "3.28%", "328", "4", "2960", "3657"].map((text, i) =>
                            renderDataCell(text, "py-[10px]" + (i === 2 ? " border-r border-[#F1F1F1]" : ""))
                        )}
                    </tr>
                    <tr className="text-[#1D874F]">
                        {["2.4%", "2.4%", "_", "2.4%", "2.4%", "2.4%"].map((text, i) => (
                            <td key={i} className={`pb-[16px] px-[12px] text-center font-[500] text-[14px] leading-[16px] tracking-[-0.02px] ${i === 2 ? "border-r border-[#F1F1F1]" : ""}`}>
                                <div className="flex items-center justify-center gap-[4px]">
                                    {text !== "_" && <img src={Assets.arrowUp} className="w-[14px] h-[14px]" />}
                                    {text}
                                </div>
                            </td>
                        ))}
                    </tr>

                    {/* SKU 3 */}
                    <tr className="border-t border-[#F1F1F1] h-[48px]">
                        <td className="flex items-center gap-[8px] px-[12px] h-[48px] border-r border-[#F1F1F1]">
                            <input type="checkbox" className="accent-[#027056] w-[18px] h-[18px] rounded-[3px]" />
                            <p className="font-semibold text-[15px] leading-[16px] underline">SKU 3</p>
                        </td>
                        {["₹9313", "1.68%", "9319.9", "11", "931.9", "931.9"].map((text, i) =>
                            renderDataCell(text, i === 2 ? "border-r border-[#F1F1F1]" : "")
                        )}
                    </tr>

                    {/* SKU 4 */}
                    <tr className="border-t border-[#F1F1F1] h-[48px]">
                        <td className="flex items-center gap-[8px] px-[12px] h-[48px] border-r border-[#F1F1F1]">
                            <input type="checkbox" className="accent-[#027056] w-[18px] h-[18px] rounded-[3px]" />
                            <p className="font-semibold text-[15px] leading-[16px] underline">SKU 4</p>
                        </td>
                        {["₹0", "0", "0", "0", "₹0", "₹0"].map((text, i) =>
                            renderDataCell(text, i === 2 ? "border-r border-[#F1F1F1]" : "")
                        )}
                    </tr>
                </tbody>


                <tfoot className="border-t border-[#F1F1F1]  h-[48px] bg-[#FCFCFC]">
                    <tr className='font-[700] text-[15px] leading-[16px] tracking-[-0.02px] align-middle'>
                        <td className=' px-[12px] border-r border-[#F1F1F1]'>Total</td>
                        <td className=' px-[12px] text-center'>₹2,93,132.12</td>
                        <td className=' px-[12px] text-center'>16%</td>
                        <td className=' px-[12px] text-center border-r border-[#F1F1F1]'>2931</td>
                        <td className=' px-[12px] text-center'>8.3</td>
                        <td className=' px-[12px] text-center'>61,985</td>
                        <td className=' px-[12px] text-center'>2,61,768</td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}


export default function Table() {
    return Array(2).fill(null).map((_, index) => (
        <React.Fragment key={index}>
            <div className="w-full min-h-[49px] flex flex-row items-start justify-between">
                <div className='flex flex-col gap-[4px]'>
                    <h2 className="text-[20px] leading-[24px] [-tracking-[3%]] align-middle text-[#031B15] font-[700]">{index == 0 ? 'SKU' : 'City'} level data</h2>
                    <p className='font-[400] text-[14px] leading-[18px] align-middle text-[#4F4D55]'>Analytics for all your {index == 0 ? 'SKUs' : 'Cities'}</p>
                </div>
                <button className='min-w-[109px] min-h-[40px] px-[12px] py-[10px] border-1
                    rounded-[10px] border-[#D9D9D9] bg-[#027056] text-[14px] font-[500] leading-[20px]
                    shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-row items-center gap-[6px] text-white'
                >
                    Filters(1)
                    <img src={Assets.chevrondownwhite} alt="chevron-down text-white" className='w-[20px] h-[20px]' />
                </button>
            </div>
            <TableContent />
        </React.Fragment>
    ))
}
