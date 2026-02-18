export default function Footer() {
 return (
  <footer className="py-8 bg-black border-t border-white/10">
   <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white text-xs">
      UI
     </div>
     <span className="text-white">Designs</span>
    </div>

    <p className="text-gray-500 text-sm">
     © 2024 UI Designs. All rights reserved.
    </p>
   </div>
  </footer>
 );
}
