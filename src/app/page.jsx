"use client"
import React from "react"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { BookOpen, MessageSquareText, GamepadIcon, UserRound, Music, Lock } from "lucide-react"
import FeatureCard from "@/components/FeaturedCard"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  CheckCircle,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react"
import { NavBarMain } from "@/components/Navbar";

export default function HeroParallaxDemo() {

  return (<>
    <NavBarMain />
    <HeroParallax products={products} />
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <section id="features" className=" py-16 px-4">
        <div className="container mx-auto">
          <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl p-10 font-bold text-transparent md:text-7xl ">
              Key Feature <br />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Interactive Learning Modules"
              description="Engaging lessons in math, science, and language through AI-powered activities."
            />
            <FeatureCard
              icon={<MessageSquareText className="h-10 w-10 text-primary" />}
              title="Storytelling with AI"
              description="Personalized bedtime stories and learning adventures."
            />
            <FeatureCard
              icon={<GamepadIcon className="h-10 w-10 text-primary" />}
              title="Fun & Educational Games"
              description="Memory games, puzzles, and quizzes to boost brainpower."
            />
            <FeatureCard
              icon={<UserRound className="h-10 w-10 text-primary" />}
              title="Virtual AI Tutor"
              description="Smart assistant to help kids with homework and questions."
            />
            <FeatureCard
              icon={<Music className="h-10 w-10 text-primary" />}
              title="Music & Rhymes"
              description="Sing-along songs and nursery rhymes to make learning joyful."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-primary" />}
              title="Safe & Kid-Friendly"
              description="No ads, child-safe content, and parental controls."
            />
          </div>
        </div>
      </section>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36454F" fillOpacity="1" d="M0,224L20,218.7C40,213,80,203,120,213.3C160,224,200,256,240,240C280,224,320,160,360,144C400,128,440,160,480,160C520,160,560,128,600,112C640,96,680,96,720,122.7C760,149,800,203,840,197.3C880,192,920,128,960,112C1000,96,1040,128,1080,133.3C1120,139,1160,117,1200,133.3C1240,149,1280,203,1320,202.7C1360,203,1400,149,1420,122.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    <section id="why-choose" className="py-16 px-4 bg-[#36454F]">
      <div className="container mx-auto">
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl p-10 m-5 font-bold text-transparent md:text-7xl ">
          Why Choose Tod AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Brain className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold mb-2">AI-Powered Personalization</h3>
                <p className="text-gray-700">Tailors learning paths based on a child's interests and progress.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GamepadIcon className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold mb-2">Play-Based Learning</h3>
                <p className="text-gray-700">Learning through fun, interactive games and stories.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-black text-xl font-bold mb-2">100% Safe for Kids</h3>
                <p className="text-gray-700">No unwanted distractions, ads, or unsafe content.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold mb-2">Parent Dashboard</h3>
                <p className="text-gray-700">Track progress and set learning goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* How It Works Section */}
    <svg xmlns="http://www.w3.org/2000/svg" style={{ background: "#36454F",marginBottom:"-10px" }} viewBox="0 0 1440 320"><path fill="#ffeb81" fillOpacity="1" d="M0,64L0,160L36.9,160L36.9,64L73.8,64L73.8,192L110.8,192L110.8,288L147.7,288L147.7,256L184.6,256L184.6,64L221.5,64L221.5,320L258.5,320L258.5,32L295.4,32L295.4,192L332.3,192L332.3,192L369.2,192L369.2,224L406.2,224L406.2,64L443.1,64L443.1,160L480,160L480,288L516.9,288L516.9,160L553.8,160L553.8,96L590.8,96L590.8,288L627.7,288L627.7,224L664.6,224L664.6,32L701.5,32L701.5,64L738.5,64L738.5,32L775.4,32L775.4,256L812.3,256L812.3,288L849.2,288L849.2,256L886.2,256L886.2,64L923.1,64L923.1,128L960,128L960,96L996.9,96L996.9,224L1033.8,224L1033.8,256L1070.8,256L1070.8,288L1107.7,288L1107.7,160L1144.6,160L1144.6,96L1181.5,96L1181.5,224L1218.5,224L1218.5,192L1255.4,192L1255.4,128L1292.3,128L1292.3,288L1329.2,288L1329.2,128L1366.2,128L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
    <section id="how-it-works" className="py-16 px-4 bg-[#ffeb81]">
      <div className="container mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">How It Works?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <StepCard number="1" title="Sign Up for Free" description="Create an account for your child." />
          <StepCard
            number="2"
            title="Choose a Learning Path"
            description="Select subjects and activities they love."
          />
          <StepCard number="3" title="Start Learning & Playing" description="AI adapts to their learning style." />
          <StepCard number="4" title="Track Progress" description="Parents can see insights and achievements." />
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <svg width="100%" height="100%" style={{ background: "#ffeb81" }} id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 bg-[gold]"><path d="M 0,600 L 0,150 C 87.38205128205126,151.44102564102565 174.76410256410253,152.8820512820513 256,140 C 337.23589743589747,127.11794871794872 412.32564102564106,99.91282051282053 491,89 C 569.6743589743589,78.08717948717947 651.9333333333334,83.46666666666665 722,93 C 792.0666666666666,102.53333333333335 849.9410256410254,116.2205128205128 939,129 C 1028.0589743589746,141.7794871794872 1148.302564102564,153.65128205128207 1237,157 C 1325.697435897436,160.34871794871793 1382.8487179487179,155.17435897435897 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#ff5500" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 80.56410256410254,307.4948717948718 161.12820512820508,264.9897435897436 232,288 C 302.8717948717949,311.0102564102564 364.0512820512821,399.5358974358975 437,419 C 509.9487179487179,438.4641025641025 594.6666666666665,388.8666666666666 682,380 C 769.3333333333335,371.1333333333334 859.2820512820515,402.99743589743593 948,410 C 1036.7179487179485,417.00256410256407 1124.2051282051282,399.1435897435897 1206,385 C 1287.7948717948718,370.8564102564103 1363.897435897436,360.42820512820515 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#ff5500" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
    <section id="testimonials" className="py-16 px-4 bg-[#ff5500]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="My kid loves Tod AI! The interactive games make learning so much fun!"
            author="Sarah Johnson"
            role="Parent of 7-year-old"
          />
          <TestimonialCard
            quote="Tod AI has improved my child's reading skills with its AI-powered stories!"
            author="Michael Chen"
            role="Parent of 6-year-old"
          />
        </div>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" style={{ background: "#171717" }} viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,192L40,181.3C80,171,160,149,240,154.7C320,160,400,192,480,213.3C560,235,640,245,720,234.7C800,224,880,192,960,154.7C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    {/* Community Section */}
    <section className="py-16 px-4 bg-[#171717] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Tod AI Community!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          "Empowering kids with AI-driven learning—one lesson at a time!"
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button variant="secondary" size="lg">
            Join Our Newsletter
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            Visit Community Forum
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <SocialIcon icon="facebook" />
          <SocialIcon icon="twitter" />
          <SocialIcon icon="instagram" />
          <SocialIcon icon="youtube" />
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            Tod AI <Rocket className="h-5 w-5" />
          </h3>
          <p className="text-gray-400">Making learning fun and engaging for kids through AI-powered education.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="text-gray-400 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#why-choose" className="text-gray-400 hover:text-white">
                Why Tod AI
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-gray-400 hover:text-white">
                How It Works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Tod AI. All rights reserved.</p>
      </div>
    </footer>

  </>);

}
export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail:
      "/assets/images/colors.jpeg"

  },
  {
    title: "owl",
    link: "#",
    thumbnail:
      "/assets/images/animals.jpeg"
  },
  {
    title: "Baloon",
    link: "#",
    thumbnail: "/assets/images/baloon.jpeg"
  },

  {
    title: "Alphabets",
    link: "#",
    thumbnail:
      "/assets/images/abc.jpeg"
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail:
      "/assets/images/shape-matcher.jpeg"
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail:
      "/assets/images/matcher.jpeg"
  },

  {
    title: "Algochurn",
    link: "#",
    thumbnail:
      "/assets/images/time.jpeg"
  },
  {
    title: "Maths UI",
    link: "#",
    thumbnail:
      "/assets/games/a/cute-little.avif"
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail:
      "/assets/games/a/Alpha.avif"
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail:
      "/assets/images/num.jpeg"
  }
]


function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#000] flex items-center justify-center text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col">
          <div className="mb-4 text-primary">
            <CheckCircle className="h-8 w-8" />
          </div>
          <p className="text-lg mb-4 italic">"{quote}"</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
      <span className="sr-only">{icon}</span>
      <div className="w-5 h-5 bg-white rounded-sm"></div>
    </div>
  )
}
