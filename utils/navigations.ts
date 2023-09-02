import {MdOutlinePersonOutline} from 'react-icons/md'
import {RxDashboard} from 'react-icons/rx'
import {AiOutlineHeart} from 'react-icons/ai'
import {RiMessage2Line,RiCustomerService2Line} from 'react-icons/ri'
import {SlPeople} from 'react-icons/sl' 
import {CiMobile1} from 'react-icons/ci'
import {LuSettings} from 'react-icons/lu'
import user from '@/assets/user.png'
export const navs = {
    menu:[
        {
            text:"Profile",
            icon:MdOutlinePersonOutline,
            link:"/profile"
        },
        {
            text:"Dashboard",
            icon:RxDashboard,
            link:"/"
        },
        {
            text:"Favourite",
            icon:AiOutlineHeart,
            link:"/favourite"
        },
        {
            text:"Live Chat",
            icon:RiMessage2Line,
            link:"/chat"
        },
        {
            text:"Friends",
            icon:SlPeople,
            link:"/friends"
        },
        {
            text:"Mobile App",
            icon:CiMobile1,
            link:"/app"
        }
    ],
    help:[
        {
            text:"Settings",
            icon:LuSettings,
            link:"/settings"
        },
        {
            text:"FAQs",
            icon:RiCustomerService2Line,
            link:"/faqs"
        },
    ]
}
    
