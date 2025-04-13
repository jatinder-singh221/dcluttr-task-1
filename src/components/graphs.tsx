import * as Assets from '../assets'
import Chart from 'react-apexcharts'

const graphContext = {
    cities: [
        { name: 'New Delhi', value: '26.2L', percent: '1.2%', up: true, color: '#6C4FED', upPercent: '35%' },
        { name: 'Mumbai', value: '24.6L', percent: '3.3%', up: false, color: '#EA6153', upPercent: '23%' },
        { name: 'West Bengal', value: '24.2L', percent: '2.3%', up: false, color: '#F7C245', upPercent: '21%' },
        { name: 'Others', value: '24.3L', percent: '1.0%', up: true, color: '#D9D9D9', upPercent: '9%' },
    ],
    series: [
        {
            name: 'Current',
            type: 'area',
            data: [1.5, 2.7, 2.3, 4.0, 2.6, 5.2, 3.0, 6.0,],
        },
        {
            name: 'Previous',
            type: 'line',
            data: [2.8, 1.8, 3.5, 3.1, 4.0, 2.8, 3.8, 4.0,],
        },
    ],
    options: {
        chart: {
            id: 'comparison-chart',
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        fontSize: '12px',
        legend: { show: false },
        stroke: {
            colors: ['#1D874F', '#E25D33'],
            width: [2, 2],
            dashArray: [0, 4],
        },

        fill: {
            type: 'solid',
            colors: ['#2eb76e14'],
        },

        xaxis: {
            axisTicks: { show: false },
            categories: ['', '09', '10', '11', '12', '13', '14', '15'],
            labels: {
                offsetX: -3,
                style: {
                    fontFamily: 'Mulish',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '-0.26px',
                    color: '#8C9198'
                },
            },
        },
        yaxis: {
            min: 1.5, max: 6, tickAmount: 3,
            labels: {
                style: {
                    fontFamily: 'Mulish',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '-0.26px',
                    color: '#8C9198'
                },
            },
        },
        grid: {
            border: 1,
            borderColor: '#EDEDED',
        },
    },

    donotChartOptions: {
        chart: {
            type: 'donut',
            sparkline: { enabled: true },
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                donut: {
                    size: '65%',

                },
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                        height: '200px',
                    },
                },
            },
        ],
    }
}



export default function Graphs() {

    const donotSeries = graphContext.cities.map(city => parseFloat(city.value))
    const donotLabels = graphContext.cities.map(city => city.name)
    const donotColors = graphContext.cities.map(city => city.color)
    return (
        <div className="grid grid-cols-3 gap-[8px]">
            {[1, 2].map((_, index) => (
                <div className="rounded-[12px] border-1 bg-white border-[#F1F1F1] shadow-[0px_1px_0px_0px_#0000001F] overflow-hidden" key={index}>
                    <div className='p-[12px] border-b-1 border-[#F1F1F1] flex flex-row items-center justify-between'>
                        <h3 className="font-[600] text-[14px] leading-[20px] tracking-[-0.26px] text-[#515153]">
                            {index == 0 ? 'Sales (MRP)' : 'Total Quantity Sold'}
                        </h3>
                        <img src={Assets.help} alt="" className='w-[16px] h-[16px]' />
                    </div>
                    <div className="flex items-center justify-between p-[12px] gap-[12px]">
                        <p className="font-[700] text-[24px] leading-[32px] tracking-[-0.02px] align-middle">125.49</p>
                        <div className='space-y-[4px]'>
                            <div className="flex items-center gap-[3px] justify-end font-[700] text-[15px] leading-[16px] tracking-[-0.26px] align-middle text-[#1D874F]">
                                <img src={Assets.arrowUp} alt="" className='w-[14px] h-[14px]' />
                                2.4%
                            </div>
                            <p className="font-[400] text-[13px] leading-[16px] tracking-[-0.02px] align-middle text-[#031B1599]">vs 119.60 last month</p>
                        </div>
                    </div>
                    <div className='h-[136px] w-full'>
                        <Chart height='136px' options={graphContext.options} series={graphContext.series} type='line' />
                    </div>
                    <div className="border-t-1 bg-white border-[#F1F1F1] min-h-[40px] px-[12px] flex items-center gap-[10px] overflow-hidden">
                        <div className='flex items-center gap-[6px] font-[400] text-[13px] leading-[16px] tracking-[-0.26px] align-middle text-[#7D7D7E]'>
                            <div className='w-[6px] h-[6px] rounded-[10px] bg-[#1D874F]'></div>
                            This Month
                        </div>
                        <div className='flex items-center gap-[6px] font-[400] text-[13px] leading-[16px] tracking-[-0.26px] align-middle text-[#7D7D7E]'>
                            <div className='w-[6px] h-[6px] rounded-[10px] bg-[#E25D33]'></div>
                            Last Month
                        </div>
                    </div>
                </div>
            ))}

            <div className="rounded-[12px] border-1 bg-white border-[#F1F1F1] shadow-[0px_1px_0px_0px_#0000001F] overflow-hidden">
                <div className='p-[12px] border-b-1 border-[#F1F1F1] flex flex-row items-center justify-between'>
                    <h3 className="font-[600] text-[14px] leading-[20px] tracking-[-0.26px] text-[#515153]">
                        Top Cities
                    </h3>
                    <img src={Assets.help} alt="" className='w-[16px] h-[16px]' />
                </div>
                <div className='h-[104px] relative'>
                    <div className='absolute min-h-[60px] w-[57px] bottom-0 left-1/2 -translate-x-[50%]'>
                        <div className="flex flex-col gap-[4px] items-center">
                            <p className='font-[400] text-[13px] leading-[16px] tracking-[-0.26px] text-[#7D7D7E]'>Total</p>
                            <p className='font-[700] text-[18px] leading-[20px] tracking-[-0.26px] text-black'>₹68.2L</p>
                            <div className="flex items-center justify-center gap-[3px]  text-[#1D874F] font-[500] text-[13px] leading-[16px] tracking-[-0.26px]">
                                <img src={Assets.arrowUp} className="w-[14px] h-[14px]" />
                                2.2%
                            </div>
                        </div>
                    </div>
                    <Chart height={'190px'} options={{
                        ...graphContext.donotChartOptions,
                        labels: donotLabels,
                        colors: donotColors
                    }} series={donotSeries} type="donut"

                    />
                </div>
                <div className='px-[12px] flex flex-col gap-y-[10px]'>
                    {graphContext.cities.map((city, index) => (
                        <div key={index} className='flex items-center gap-[6px] font-[400] text-[13px] leading-[16px] tracking-[-0.26px] align-middle text-[#7D7D7E]'>
                            <div className={`w-[6px] h-[6px] rounded-[10px] `} style={{ backgroundColor: city.color }}></div>
                            <p className='flex-1'>{city.name}</p>
                            <p className='font-[700] align-middle text-black'>₹{city.value}</p>
                            <p className="min-w-[36px] min-h-[20px] rounded-[2px] bg-[#F7F7F7] text-center flex items-center justify-center">
                                {city.upPercent}
                            </p>
                            <div className="flex items-center justify-center gap-[3px] "
                                style={{ color: city.up ? '#1D874F' : '#F31D1D' }}
                            >
                                {city.up ? <img src={Assets.arrowUp} className="w-[14px] h-[14px]" /> : <img src={Assets.arrowDown} className="w-[14px] h-[14px]" />}
                                {city.percent}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
