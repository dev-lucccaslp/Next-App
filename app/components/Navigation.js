// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// export function Navigation({ navLinks }) {
//   const pathName = usePathname();
//   //console.log(pathName)

// const router = useRouter();

//   return (
//     <nav className="bg-orange-700">
//       <ul>
//         {navLinks.map((link) => {
//           const isActive = pathName.startsWith(link.href)
//           return (
//             // <li key={link.name} className={isActive ? "bg-red-600" : "bg-slate-500"} >
//             //   <Link className="red" href={link.href}>{link.name}  {isActive ? 'X'  : ''}</Link>
//             // </li>
//             <li key={link.name} className={isActive ? "bg-red-600" : "bg-slate-500"}>
//               <button type="button" onClick={() => router.push(link.href)}>{link.name}</button> 
//             </li>
//             )
//         })}
//       </ul>
//     </nav>
//   )
// }

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Navigation({ navLinks }) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="bg-orange-700">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathName === link.href; // Verifica se o caminho atual é igual ao href do link
          
          return (
            <li key={link.name} className={isActive ? "bg-red-600" : "bg-slate-500"}>
              <button type="button" onClick={() => router.push(link.href)}>
                {link.name} 
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}