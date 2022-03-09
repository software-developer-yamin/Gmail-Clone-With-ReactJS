import "../styles/SidebarOption.css";

function SidebarOption({Icon,title,number,selected}) {
  return <section className={`sidebarOption ${ selected && "sidebarOption--active"} `} >
    <Icon />
    <h3>{title}</h3>
    <p>{number}</p>
  </section>;
}

export default SidebarOption;
