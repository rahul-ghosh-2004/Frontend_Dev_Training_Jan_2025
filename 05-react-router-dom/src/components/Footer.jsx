import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="font-sans tracking-wide bg-[#213343] pt-12 pb-4 px-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Quick Links</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Our Story</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Newsroom</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Careers</a>
            </li>
            <li>
              <Link to={"blog"}>Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Services</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Web Development</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Testing Automation</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">AWS Development Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Mobile App Development</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Platforms</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Hubspot</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketo Integration Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketing Glossary</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">UIPath</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Accessibility</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Learn more</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p class="text-gray-300 text-[15px]">
          © ReadymadeUI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
