import * as Assets from '../assets'


const asideContext = {
    middleAsideImages: [
        Assets.mama,
        Assets.mid
    ],
    topDropDown: [
        {
            label: 'Overview',
            icon: Assets.home,
            href: '#',
        },
        {
            label: 'Channels',
            icon: Assets.default,
            href: '#',
            submenu: [
                {
                    label: 'Meta Ads',
                    href: '#',
                },
                {
                    label: 'Google Ads',
                    href: '#',
                },
                {
                    label: 'Quick Commerce',
                    href: '#',
                    active: true,
                },
            ],
            chevron: Assets.caretDown,
        },
        {
            label: 'Creatives',
            icon: Assets.creative,
            href: '#',
        },
    ],
    bottomDropDown: [
        {
            label: 'Help',
            icon: Assets.help,
            href: '#',
        },
        {
            label: 'Settings',
            icon: Assets.setting,
            href: '#',
        },
    ]
}

export default function Aside() {
    return (
        <aside
            className='w-[288px] h-full left-[-0.49px] flex flex-col'
        >
            <div className='w-full min-h-[80px] gap-[16px] pt-[20px] pr-[13.5px] pb-[20px] pl-[5px] flex flex-row items-center'>

                {/* top view */}
                <div className='w-[40px] h-[40px] rounded-[12px] overflow-hidden'>
                    <img src={Assets.perfora} alt="pefora" className='w-full h-full' />
                </div>
                <button
                    className="w-[180.875px] min-h-[36px] flex flex-row justify-between
                        border-1 rounded-[12px] p-[6px] border-[#0000001F]  items-center
                        bg-[#FDFDFD]
                    "
                >
                    <div className="min-w-[106px] min-h-[24px] gap-[8px] flex flex-row items-center">
                        <div className="min-w-[24px] min-h-[24px] gap-[10px] rounded-[7px] p-[5px] bg-[#309E96]">
                            <p className="text-white font-semibold !text-[11px] leading-[100%] tracking-[0%]">SS</p>
                        </div>
                        <p className="font-semibold leading-[100%] text-center text-[14px] tracking-[0%] text-[#031B15]">Test_brand</p>
                    </div>
                    <img src={Assets.caretUpDown} alt='caret' className='w-[16px] h-[16px]' />
                </button>
                <button>
                    <img src={Assets.chevronDouble} alt="chevron-left" className="w-[16.63px] h-[16.63px]" />
                </button>
            </div>
            {/* top view end */}

            {/* middle view */}
            <div className='min-w-[288px] bg-[#F8F8F8] h-full flex flex-row'>
                {/* middleleft view */}
                <div className='w-[51px] h-full bg-white gap-[10px] flex flex-col pb-[24px]'>
                    {asideContext.middleAsideImages.map((image, index) => (
                        <button key={index}
                            className='w-[50px] min-h-[52px]'
                        >
                            <img src={image} alt={`image ${index + 1}`} className='w-[40px] h-[40px] rounded-[12px] mx-auto' />
                        </button>
                    ))}
                    <button className='border-[0.5px] rounded-[12px] w-[40px] 
                        h-[40px] flex items-center justify-center 
                        border-[#B4BBB9] mx-auto'
                    >
                        <img src={Assets.plus} alt="plus-sign" className='w-[20px] h-[20px]' />
                    </button>

                    <div className="flex-1"></div>

                    {/* bottom view */}

                    <div className='min-w-[28px] gap-[18px] flex flex-col items-center'>
                        <button>
                            <img src={Assets.users} alt="users-icon" className='w-[20px] h-[20px]' />
                        </button>
                        <button className='w-[28px] h-[28px] border-1 rounded-[32px] 
                            font-semibold leading-[100%] text-center tracking-[0%] !text-[12px]
                            border-[#FFFFFF1A] bg-[#9106FF] text-white'
                        >
                            SS
                        </button>
                    </div>
                    {/* bottom view end */}
                </div>
                {/* middleleft view end */}


                {/* middlemain view */}
                <div className='w-[237px] h-full flex flex-col justify-between py-[24px] px-[16px]'>
                    {/* middle view */}
                    <div className='w-[205] h-full flex flex-col'>
                        {asideContext.topDropDown.map((item, index) => (
                            <div key={index}>
                                <a
                                    href={item.href}
                                    className='w-full min-h-[36px] flex flex-row 
                                        items-center gap-[12px] px-[12px]
                                        py-[8px] font-[500] text-[14px] leading-[20px] 
                                        text-center text-[#031B15]
                                    '
                                >
                                    <img src={item.icon} alt={`${item.label}-icon`} className='w-[20px] h-[20px]' />
                                    {item.label}
                                    {item.chevron && (
                                        <img src={item.chevron} alt="chevron-down" className='w-[14px] h-[14px] ml-auto' />
                                    )}
                                </a>
                                {item.submenu && (
                                    <div className='w-[189px] flex flex-col gap-[4px] ml-[16px] justify-start'>
                                        {item.submenu.map((sub, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href={sub.href}
                                                className={`w-full min-h-[32px] 
                                                    py-[6px] px-[16px] rounded-[10px] 
                                                    font-[400] text-[14px] 
                                                    leading-[20px] text-[#031B15CC]
                                                    ${sub.active ? 'text-[#027056] bg-[#DFEAE8]' : 'text-[#031B15CC]'}`}
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex-1"></div>
                        {asideContext.bottomDropDown.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className='w-full h-[36px] flex flex-row items-center 
                                gap-[12px] px-[12px] py-[8px] font-[500] 
                                text-[14px] leading-[20px] text-center 
                                text-[#031B15]'
                            >
                                <img src={item.icon} alt={`${item.label}-icon`} className='w-[20px] h-[20px]' />
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* middlemain view end */}
            </div>
            {/* middle view end */}

        </aside>
    )
}
