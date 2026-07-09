import { motion } from 'motion/react';
import { Leaf, Award, Heart, ShieldAlert, BookOpen } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-[#FDFBF7] text-[#1E110A] px-4 md:px-8 relative overflow-hidden">
      {/* Small floating design accents */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#C89D7C]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stats & Accents */}
          <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-[#1E110A] text-[#EFE3C3] p-6 rounded-2xl border border-[#3D2516] flex flex-col items-start text-left shadow-lg">
              <span className="text-3xl font-sans font-black text-white">4.5★</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] mt-1.5">Average Rating</span>
              <p className="text-[11px] text-gray-400 mt-2 leading-normal">
                Rated by over 300 devoted regulars on U Street and beyond.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#2D1B10]/5 p-6 rounded-2xl border border-gray-200 flex flex-col items-start text-left">
              <span className="text-3xl font-sans font-black text-[#2D1B10]">La Colombe</span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1.5">Coffee</span>
              <p className="text-[11px] text-gray-600 mt-2 leading-normal">
                Every cup starts with beans from this trusted national roaster.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#2D1B10]/5 p-6 rounded-2xl border border-gray-200 flex flex-col items-start text-left">
              <span className="text-3xl font-sans font-black text-[#2D1B10]">U Street</span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1.5">Our Home</span>
              <p className="text-[11px] text-gray-600 mt-2 leading-normal">
                Right across from the U Street Metro, surrounded by local murals.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#1E110A] text-[#EFE3C3] p-6 rounded-2xl border border-[#3D2516] flex flex-col items-start text-left shadow-lg">
              <span className="text-3xl font-sans font-black text-white">Local</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] mt-1.5">Bagels & Sweets</span>
              <p className="text-[11px] text-gray-400 mt-2 leading-normal">
                Bagels from Bullfrog Bagels, sweets from Sweets by Sam DC.
              </p>
            </div>

          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] font-semibold flex items-center gap-1.5 mb-2">
              <BookOpen size={13} /> The Cafe U Story
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#1E110A] mb-6">
              A Cozy Corner of U Street
            </h2>
            <div className="h-1 w-20 bg-[#C89D7C] rounded-full mb-8" />

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                Right across from the U Street Metro, <span className="font-bold text-gray-900">Cafe U</span> has become a neighborhood staple — a small, welcoming spot surrounded by local murals and plants, known for treating every customer like a regular.
              </p>

              <p>
                We brew <span className="font-semibold text-gray-900">La Colombe coffee</span> for our espresso drinks, drip coffee, and cold brew, and partner with <span className="font-semibold text-[#C89D7C]">Bullfrog Bagels</span> for our sandwiches and <span className="font-semibold text-[#C89D7C]">Sweets by Sam DC</span> for our baked goods — bringing together some of DC's best local food makers under one roof.
              </p>

              <p>
                With outdoor seating perfect for people-watching and a menu that ranges from a classic lox bagel to fresh-pressed juice, Cafe U is the kind of spot where a quick coffee run turns into catching up with a friend.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-5 rounded-2xl bg-[#EFE3C3]/30 border-l-4 border-[#C89D7C] text-left">
              <p className="text-xs italic text-gray-700 font-sans leading-relaxed">
                Small space, big heart — that's the Cafe U promise, one cup at a time.
              </p>
              <span className="block text-[10px] font-mono uppercase text-gray-500 mt-3 font-bold">
                — The Cafe U Team
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
