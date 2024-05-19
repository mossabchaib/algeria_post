'use client'
import 

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};
  return (
 <nav className={styles.nav}>
           <div className={styles.Sid} ><NavbarMobil/></div>
      <Link className={styles.Logo} href='/' style={{zIndex:'0',fontSize:'18px'}} >Acam Store</Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={`${styles.a } ${path=='/product'?styles.satr:''}`} href="/product">Products</Link>
        </li>
        <li className={styles.li}>
        <div className={styles.a }
       
     style={{position:'relative'}} onClick={toggleSidebar}>Category
{isOpen ? <svg width="30px" height="30px" color='#fff' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" transform="rotate(90)">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> 
  <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
  </g></svg> :<svg width="30px" height="30px" color='#fff' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" >
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> 
  <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
  </g></svg>}
 <ul  className={`${isOpen ? styles.ul2 : styles.ul2none}`}>
    <Menu data={info.data}/>
       </ul>
       </div>
        </li>
        <li className={styles.li}>
        
     <Link className={`${styles.a } ${path=='/Login'?styles.satr:''}`} href="/Login">Login</Link>
        </li>
      </ul>
      <ul className={styles.ul}>
     
        <li className={styles.li}>
          <div className={styles.Cart}  ><CartNav/></div>
        </li>
      </ul>
    </nav>)
    }
  export default Navbar;
