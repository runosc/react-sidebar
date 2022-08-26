
import { SidebarData } from '../components/Sidebar/SidebarData'
import SidebarListItem from '../components/Sidebar/SidebarListItem'


export function sidebarUpdate() {
    
    {SidebarData.map((item) => {
        console.log(" çok kritikk",item.title,"  --  ",item.open , typeof(item.open))
        return (
            
          <SidebarListItem
            subNavList={item.subNav}
            key={item.id}
            icon={item.icon}
            title={item.title}
            path={item.path}
            // style={item.open==='true'?{"display":"block"}:{"display":"none"}}
           deneme={item.open}
          />
        )
      })}


}