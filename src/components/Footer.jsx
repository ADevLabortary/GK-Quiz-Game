import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-sm">© 2023 GK Quiz. All rights reserved.</div>
    <ul className="flex">
      <li className="mr-6"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
      <li className="mr-6"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
      <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
    </ul>
  </div>
</footer>

  )
}

export default Footer