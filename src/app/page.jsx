// // // "use client"
// // // import { useState, useEffect, useMemo, useRef } from 'react';
// // // import { Canvas, useFrame } from '@react-three/fiber';
// // // import { OrbitControls, useGLTF, Html, Text } from '@react-three/drei';
// // // import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// // // import styled, { createGlobalStyle } from 'styled-components';

// // // export default function App() {
// // //   return <HomePage />;
// // // }

// // // // Global Styles
// // // const GlobalStyle = createGlobalStyle`
// // //   * {
// // //     margin: 0;
// // //     padding: 0;
// // //     box-sizing: border-box;
// // //     font-family: 'Bubblegum Sans', cursive;
// // //   }

// // //   body {
// // //     background: linear(135deg, #ff9a9e 0%, #fad0c4 100%);
// // //     overflow-x: hidden;
// // //   }
// // // `;

// // // // Styled Components
// // // const Container = styled.div`
// // //   max-width: 1200px;
// // //   margin: 0 auto;
// // //   padding: 2rem;
// // // `;

// // // const Header = styled.header`
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   padding: 1rem 0;
// // // `;

// // // const HeroSection = styled(motion.section)`
// // //   height: 100vh;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   position: relative;
// // // `;

// // // const BubbleButton = styled(motion.button)`
// // //   padding: 1rem 2rem;
// // //   font-size: 1.5rem;
// // //   background: #ff6b6b;
// // //   color: white;
// // //   border: none;
// // //   border-radius: 30px;
// // //   cursor: pointer;
// // //   transform-style: preserve-3d;
// // //   box-shadow: 0 10px 20px rgba(255,107,107,0.3);
// // //   transition: all 0.3s ease;

// // //   &:hover {
// // //     transform: translateY(-3px) scale(1.05);
// // //   }
// // // `;

// // // // Simplified 3D Model
// // // function CartoonRobot() {
// // //   const { scene } = useGLTF('/robot_model.glb');
// // //   const ref = useRef();

// // //   useFrame(({ clock }) => {
// // //     ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
// // //     ref.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
// // //   });

// // //   return (
// // //     <group ref={ref}>
// // //       <primitive
// // //         object={scene}
// // //         scale={[0.8, 0.8, 0.8]}
// // //         position={[0, -1, 0]}
// // //       />
// // //     </group>
// // //   );
// // // }

// // // // Animated Background Elements
// // // function FloatingEmojis() {
// // //   return (
// // //     <>
// // //       {['🎈', '🎉', '✨', '🤖', '🎁'].map((emoji, i) => (
// // //         <Html
// // //           key={i}
// // //           position={[
// // //             Math.cos((i * Math.PI) / 2.5) * 4,
// // //             Math.sin((i * Math.PI) / 2.5) * 4,
// // //             -5
// // //           ]}
// // //           style={{
// // //             fontSize: '3em',
// // //             pointerEvents: 'none',
// // //             transform: 'translate(-50%, -50%)'
// // //           }}
// // //         >
// // //           <motion.div
// // //             animate={{
// // //               y: [0, -20, 0],
// // //               rotate: [0, 360]
// // //             }}
// // //             transition={{
// // //               duration: 3 + i,
// // //               repeat: Infinity,
// // //               ease: "easeInOut"
// // //             }}
// // //           >
// // //             {emoji}
// // //           </motion.div>
// // //         </Html>
// // //       ))}
// // //     </>
// // //   );
// // // }

// // // function HomePage() {
// // //   const { scrollYProgress } = useScroll();
// // //   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
// // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// // //   return (
// // //     <>
// // //       <GlobalStyle />
// // //       <Container>
// // //         <Header>
// // //           <motion.h1
// // //             initial={{ y: -100 }}
// // //             animate={{ y: 0 }}
// // //             style={{ fontSize: '2.5rem', color: '#ff6b6b' }}
// // //           >
// // //             🤖 Tod-AI Kids
// // //           </motion.h1>
// // //           <BubbleButton whileTap={{ scale: 0.95 }}>
// // //             Let's Play!
// // //           </BubbleButton>
// // //         </Header>

// // //         <HeroSection>
// // //           <motion.div
// // //             style={{ position: 'absolute', left: '10%' }}
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //           >
// // //             <h1 style={{ fontSize: '4rem', color: '#2d3436' }}>
// // //               Learning Made Magical!
// // //             </h1>
// // //             <p style={{ fontSize: '1.8rem', color: '#636e72' }}>
// // //               AI adventures for curious minds 🚀
// // //             </p>
// // //             <BubbleButton
// // //               style={{ marginTop: '2rem' }}
// // //               whileHover={{ scale: 1.1 }}
// // //             >
// // //               Start Adventure!
// // //             </BubbleButton>
// // //           </motion.div>

// // //           <div style={{ width: '50%', height: '100vh' }}>
// // //             <Canvas>
// // //               <ambientLight intensity={0.8} />
// // //               <pointLight position={[10, 10, 10]} color="#ff6b6b" />
// // //               <CartoonRobot />
// // //               <FloatingEmojis />
// // //               <OrbitControls enableZoom={false} />
// // //             </Canvas>
// // //           </div>
// // //         </HeroSection>

// // //         {/* Feature Section */}
// // //         <motion.section
// // //           style={{
// // //             display: 'grid',
// // //             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // //             gap: '2rem',
// // //             margin: '4rem 0'
// // //           }}
// // //         >
// // //           {[
// // //             { emoji: '🎮', title: 'Playful Learning' },
// // //             { emoji: '🧩', title: 'Smart Puzzles' },
// // //             { emoji: '🏆', title: 'Achievements' }
// // //           ].map((feature, i) => (
// // //             <motion.div
// // //               key={i}
// // //               style={{
// // //                 background: 'rgba(255,255,255,0.9)',
// // //                 borderRadius: '20px',
// // //                 padding: '2rem',
// // //                 textAlign: 'center'
// // //               }}
// // //               whileHover={{ scale: 1.05 }}
// // //             >
// // //               <div style={{ fontSize: '4rem' }}>{feature.emoji}</div>
// // //               <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>
// // //                 {feature.title}
// // //               </h3>
// // //             </motion.div>
// // //           ))}
// // //         </motion.section>

// // //         {/* Interactive Chat Bubble */}
// // //         <motion.div
// // //           style={{
// // //             position: 'fixed',
// // //             bottom: '2rem',
// // //             right: '2rem',
// // //             fontSize: '3rem',
// // //             cursor: 'pointer'
// // //           }}
// // //           animate={{
// // //             scale: [1, 1.2, 1],
// // //             rotate: [0, 20, -20, 0]
// // //           }}
// // //           transition={{
// // //             duration: 2,
// // //             repeat: Infinity
// // //           }}
// // //         >
// // //           💬
// // //         </motion.div>
// // //       </Container>
// // //     </>
// // //   );
// // // }
// // "use client"
// // import { useState, useMemo, useRef } from 'react';
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { OrbitControls, useGLTF, Html } from '@react-three/drei';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import styled, { createGlobalStyle } from 'styled-components';

// // const GlobalStyle = createGlobalStyle`
// //   * {
// //     margin: 0;
// //     padding: 0;
// //     box-sizing: border-box;
// //     font-family: 'Comic Neue', cursive;
// //   }

// //   body {
// //     background: linear(135deg, #a8edea 0%, #fed6e3 100%);
// //     overflow-x: hidden;
// //   }
// // `;

// // const Container = styled.div`
// //   max-width: 1200px;
// //   margin: 0 auto;
// //   padding: 2rem;
// // `;

// // const HeroSection = styled.section`
// //   height: 100vh;
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   align-items: center;
// //   position: relative;

// //   @media (max-width: 768px) {
// //     grid-template-columns: 1fr;
// //     padding-top: 4rem;
// //   }
// // `;

// // const FeatureGrid = styled(motion.div)`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //   gap: 2rem;
// //   margin: 4rem 0;
// // `;

// // function LearningMascot() {
// //   const { scene } = useGLTF('/robot_model.glb');
// //   const ref = useRef();

// //   useFrame(({ clock }) => {
// //     ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
// //     ref.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
// //   });

// //   return (
// //     <group ref={ref} position={[2, -1, 0]} scale={[0.8, 0.8, 0.8]}>
// //       <primitive object={scene} />
// //     </group>
// //   );
// // }

// // export default function HomePage() {
// //   const { scrollY } = useScroll();
// //   const yOffset = useTransform(scrollY, [0, 1000], [0, -100]);

// //   return (
// //     <>
// //       <GlobalStyle />
// //       <Container>
// //         {/* Hero Section */}
// //         <HeroSection>
// //           <motion.div style={{ zIndex: 2 }}>
// //             <motion.h1
// //               style={{ fontSize: '4rem', color: '#2d3436' }}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //             >
// //               Smart Learning for Curious Minds! 🌟
// //             </motion.h1>
// //             <motion.p
// //               style={{ fontSize: '1.5rem', margin: '2rem 0' }}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2 }}
// //             >
// //               AI-powered interactive lessons, stories, and games designed to make learning fun!
// //             </motion.p>
// //             <BubbleButton whileTap={{ scale: 0.95 }}>
// //               Get Started Free 🚀
// //             </BubbleButton>
// //           </motion.div>

// //           <div style={{ position: 'relative', height: '60vh' }}>
// //             <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
// //               <ambientLight intensity={0.8} />
// //               <pointLight position={[10, 10, 10]} color="#ff6b6b" />
// //               <LearningMascot />
// //               <OrbitControls enableZoom={false} />
// //             </Canvas>
// //           </div>
// //         </HeroSection>

// //         {/* Key Features */}
// //         <motion.section style={{ y: yOffset }}>
// //           <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Learning Adventures 🎨</h2>
// //           <FeatureGrid>
// //             {FEATURES.map((feature, i) => (
// //               <FeatureCard key={i} whileHover={{ y: -5 }}>
// //                 <div style={{ fontSize: '3rem' }}>{feature.emoji}</div>
// //                 <h3>{feature.title}</h3>
// //                 <p>{feature.description}</p>
// //               </FeatureCard>
// //             ))}
// //           </FeatureGrid>
// //         </motion.section>

// //         {/* Why Choose Us */}
// //         <WhyChooseSection>
// //           <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Why Tod-AI? ✨</h2>
// //           <div className="grid">
// //             {WHY_ITEMS.map((item, i) => (
// //               <motion.div key={i} whileHover={{ scale: 1.02 }}>
// //                 <div className="check">✅</div>
// //                 <h4>{item.title}</h4>
// //                 <p>{item.text}</p>
// //               </motion.div>
// //             ))}8
// //           </div>
// //         </WhyChooseSection>

// //         {/* Testimonials */}
// //         <TestimonialSection>
// //           {TESTIMONIALS.map((testimonial, i) => (
// //             <TestimonialCard key={i}>
// //               <div className="quote">❝</div>
// //               <p>{testimonial.text}</p>
// //               <div className="author">– {testimonial.author}</div>
// //             </TestimonialCard>
// //           ))}
// //         </TestimonialSection>

// //         {/* Community Section */}
// //         <CommunitySection>
// //           <h2>Join Our Learning Community! 🌍</h2>
// //           <SocialGrid>
// //             {['📘', '📸', '🐦', '📺'].map((emoji, i) => (
// //               <motion.div key={i} whileHover={{ scale: 1.1 }}>
// //                 {emoji}
// //               </motion.div>
// //             ))}
// //           </SocialGrid>
// //           <NewsletterForm>
// //             <input placeholder="Enter your email 📧" />
// //             <BubbleButton>Subscribe</BubbleButton>
// //           </NewsletterForm>
// //         </CommunitySection>
// //       </Container>
// //     </>
// //   );
// // }

// // // Data and styled components
// // const FEATURES = [
// //   { emoji: '🎮', title: 'Interactive Lessons', description: 'Math, science & language adventures' },
// //   { emoji: '📖', title: 'AI Stories', description: 'Personalized bedtime stories' },
// //   { emoji: '🧩', title: 'Brain Games', description: 'Puzzles & memory challenges' },
// //   { emoji: '👩🏫', title: 'AI Tutor', description: 'Homework helper & question solver' },
// //   { emoji: '🎶', title: 'Music & Rhymes', description: 'Educational songs & sing-alongs' },
// //   { emoji: '🔒', title: '100% Safe', description: 'Ad-free & parent-controlled' },
// // ];

// // const WHY_ITEMS = [
// //   { title: 'Smart Personalization', text: 'Adapts to your child\'s learning style' },
// //   { title: 'Play-Based Learning', text: 'Master skills through fun games' },
// //   { title: 'Child-Safe Environment', text: 'No ads or unwanted content' },
// //   { title: 'Parent Dashboard', text: 'Track progress & set goals' },
// // ];

// // const TESTIMONIALS = [
// //   { text: 'My kid loves the interactive games! Learning has never been this fun!', author: 'Sarah Mom' },
// //   { text: 'Improved reading skills dramatically with AI stories!', author: 'John Dad' },
// // ];

// // const BubbleButton = styled(motion.button)`
// //   padding: 1rem 2rem;
// //   font-size: 1.2rem;
// //   background: #ff6b6b;
// //   color: white;
// //   border: none;
// //   border-radius: 30px;
// //   cursor: pointer;
// //   transform-style: preserve-3d;
// //   transition: all 0.3s ease;
// // `;

// // const FeatureCard = styled(motion.div)`
// //   background: rgba(255,255,255,0.9);
// //   padding: 2rem;
// //   border-radius: 20px;
// //   text-align: center;
// //   box-shadow: 0 8px 16px rgba(0,0,0,0.1);
// // `;

// // const WhyChooseSection = styled.section`
// //   .grid {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //     gap: 2rem;
// //     margin: 3rem 0;

// //     > div {
// //       padding: 2rem;
// //       background: white;
// //       border-radius: 15px;
// //       text-align: center;
// //     }
// //   }

// //   .check { font-size: 2rem; }
// // `;

// // const TestimonialSection = styled.section`
// //   display: grid;
// //   gap: 2rem;
// //   margin: 4rem 0;

// //   @media (min-width: 768px) {
// //     grid-template-columns: repeat(2, 1fr);
// //   }
// // `;

// // const TestimonialCard = styled.div`
// //   background: white;
// //   padding: 2rem;
// //   border-radius: 20px;
// //   position: relative;

// //   .quote {
// //     font-size: 4rem;
// //     position: absolute;
// //     top: -1rem;
// //     left: 1rem;
// //     opacity: 0.2;
// //   }
// // `;

// // const CommunitySection = styled.section`
// //   text-align: center;
// //   padding: 4rem 0;
// //   background: rgba(255,255,255,0.9);
// //   border-radius: 30px;
// //   margin: 4rem 0;
// // `;

// // const SocialGrid = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   gap: 2rem;
// //   margin: 2rem 0;
// //   font-size: 2.5rem;
// // `;

// // const NewsletterForm = styled.div`
// //   display: flex;
// //   gap: 1rem;
// //   justify-content: center;
// //   margin-top: 2rem;

// //   input {
// //     padding: 1rem;
// //     border-radius: 20px;
// //     border: 2px solid #ff6b6b;
// //     min-width: 300px;
// //   }
// // `;
// "use client"
// import React from "react";
"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { OrbitControls, Stars, Box, Sphere, Plane, useGLTF } from "@react-three/drei";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { FaBook, FaGamepad, FaRobot, FaMusic, FaChild } from "react-icons/fa";
// import Link from "next/link"
// export default function LandingPage() {
//   return (
//     <div className="bg-gradient-to-b from-purple-600 to-black min-h-screen text-white text-center p-6 relative">
//       {/* Three.js Background */}
//       <Canvas className="absolute inset-0 z-0">
//         <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>

//       {/* Background Images */}
//       <img src="https://tse1.mm.bing.net/th?id=OIP.CX-Fb06oXTRB5a9AFOrD2wHaEK&pid=Api&P=0&h=180" alt="Avengers" className="absolute top-0 left-0 w-full opacity-50" />

//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-3xl mx-auto relative z-10"
//       >
//         <h1 className="text-5xl font-extrabold mb-4 text-yellow-300">🌟 Tod AI - Learning Like a Superhero! 🌟</h1>
//         <p className="text-lg mb-6">AI-powered interactive lessons, stories, and games designed to make learning fun and adventurous for kids.</p>
//         <Link href="/app">
//           <Button className="bg-yellow-400 text-black text-lg px-6 py-3 rounded-full shadow-lg">Get Started for Free!</Button>

//         </Link></motion.div>

//       {/* Features Section */}
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-white text-black rounded-2xl shadow-lg flex flex-col items-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <feature.icon className="text-5xl text-purple-600 mb-3" />
//             <h3 className="text-xl font-bold">{feature.title}</h3>
//             <p className="text-sm mt-2">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         className="mt-12 bg-yellow-400 text-black p-6 rounded-xl shadow-lg relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold">Join the Tod AI Super Squad Today! 🚀</h2>
//         <p className="mt-2">Empowering kids with AI-driven learning—one adventure at a time!</p>
//         <Button className="bg-purple-600 text-white mt-4 px-6 py-3 rounded-full shadow-lg">Start Now</Button>
//       </motion.div>
//     </div>
//   );
// }

// const features = [
//   { icon: FaBook, title: "Superhero Learning", description: "Engaging lessons in math, science, and language." },
//   { icon: FaGamepad, title: "Fun & Action-Packed Games", description: "Educational puzzles and memory games to boost brainpower." },
//   { icon: FaRobot, title: "AI Sidekick Tutor", description: "Smart assistant helps kids with homework and questions." },
//   { icon: FaMusic, title: "Songs & Rhymes", description: "Sing-along nursery rhymes for joyful learning." },
//   { icon: FaChild, title: "Kid-Safe Zone", description: "Safe, ad-free, and designed for children." }
// ];


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Brain,
  CheckCircle,
  GamepadIcon,
  Lock,
  MessageSquareText,
  Music,
  Rocket,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react"
import Link from "next/link"

function LearningMascot() {
  const { scene } = useGLTF('/robot_model.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
  });

  return (
    <group ref={ref} position={[2, -1, 0]} scale={[0.8, 0.8, 0.8]}>
      <primitive object={scene} />
    </group>
  );
}
export default function Home() {
  return (

    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">Tod AI</span>
          <Rocket className="text-primary h-6 w-6" />
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="#features" className="text-primary hover:text-primary/80 z-5">
            Features
          </Link>
          <Link href="#why-choose" className="text-primary hover:text-primary/80 z-5">
            Why Tod AI
          </Link>
          <Link href="#how-it-works" className="text-primary hover:text-primary/80 z-5">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-primary hover:text-primary/80 z-5">
            Testimonials
          </Link>
        </div>
        <div className="flex gap-2 z-5">
          <Link href="/app">
            <Button variant="outline" className="hidden md:inline-flex">
              Log In
            </Button>
          </Link>
          <Link href="/app">
            <Button>Sign Up Free</Button>
          </Link>
        </div>
      </nav>
      <div className="absolute top-0 inset-0 ">
        <Canvas className="absolute inset-0 z-0">
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-indigo-500 h-[100vh] flex flex-col md:flex-row items-center gap-8 px-4 py-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-black">
            Smart Learning for <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Curious Minds!</span>
          </h1>
          <p className="text-lg md:text-xl text-[#242e3d]">
            AI-powered interactive lessons, stories, and games designed to make learning fun and engaging for kids.
          </p>
          <div className="flex gap-4 z-5">
            <Link href="/app" className="z-5">
              <Button size="lg" className="text-lg z-50" >
                Get Started!
              </Button>
            </Link>
            <Link href="/app" className="z-5">
              <Button size="lg" variant="outline" className="text-lg z-50">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-70 animate-pulse delay-300"></div> */}
            <div className="relative z-10  ">
              <img
                src="/assets/images/home.webp"
                alt="AI mascot with kids exploring a digital world"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className=" bg-gradient-to-t from-purple-500 to-indigo-500 py-16 px-4">
        {/* <div className="w-screen h-screen fixed top-0 left-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} color="#ff6b6b" />
            <LearningMascot />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div> */}
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Key Features</h2>
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ad46ff" fill-opacity="1" d="M0,32L34.3,64C68.6,96,137,160,206,170.7C274.3,181,343,139,411,112C480,85,549,75,617,90.7C685.7,107,754,149,823,186.7C891.4,224,960,256,1029,266.7C1097.1,277,1166,267,1234,234.7C1302.9,203,1371,149,1406,122.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,224L20,218.7C40,213,80,203,120,213.3C160,224,200,256,240,240C280,224,320,160,360,144C400,128,440,160,480,160C520,160,560,128,600,112C640,96,680,96,720,122.7C760,149,800,203,840,197.3C880,192,920,128,960,112C1000,96,1040,128,1080,133.3C1120,139,1160,117,1200,133.3C1240,149,1280,203,1320,202.7C1360,203,1400,149,1420,122.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
      <section id="why-choose" className="py-16 px-4 bg-gradient-to-b from-[#e7008a] to-while">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Why Choose Tod AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Personalization</h3>
                  <p className="text-gray-700">Tailors learning paths based on a child's interests and progress.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GamepadIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Play-Based Learning</h3>
                  <p className="text-gray-700">Learning through fun, interactive games and stories.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">100% Safe for Kids</h3>
                  <p className="text-gray-700">No unwanted distractions, ads, or unsafe content.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Parent Dashboard</h3>
                  <p className="text-gray-700">Track progress and set learning goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,64L0,160L36.9,160L36.9,64L73.8,64L73.8,192L110.8,192L110.8,288L147.7,288L147.7,256L184.6,256L184.6,64L221.5,64L221.5,320L258.5,320L258.5,32L295.4,32L295.4,192L332.3,192L332.3,192L369.2,192L369.2,224L406.2,224L406.2,64L443.1,64L443.1,160L480,160L480,288L516.9,288L516.9,160L553.8,160L553.8,96L590.8,96L590.8,288L627.7,288L627.7,224L664.6,224L664.6,32L701.5,32L701.5,64L738.5,64L738.5,32L775.4,32L775.4,256L812.3,256L812.3,288L849.2,288L849.2,256L886.2,256L886.2,64L923.1,64L923.1,128L960,128L960,96L996.9,96L996.9,224L1033.8,224L1033.8,256L1070.8,256L1070.8,288L1107.7,288L1107.7,160L1144.6,160L1144.6,96L1181.5,96L1181.5,224L1218.5,224L1218.5,192L1255.4,192L1255.4,128L1292.3,128L1292.3,288L1329.2,288L1329.2,128L1366.2,128L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
      <section id="how-it-works" className="py-16 px-4 bg-[#ffd700]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">How It Works?</h2>
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
      <svg style={{ background: "#ff5500 " }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,96L0,288L36.9,288L36.9,160L73.8,160L73.8,128L110.8,128L110.8,256L147.7,256L147.7,64L184.6,64L184.6,96L221.5,96L221.5,32L258.5,32L258.5,0L295.4,0L295.4,128L332.3,128L332.3,224L369.2,224L369.2,192L406.2,192L406.2,32L443.1,32L443.1,192L480,192L480,96L516.9,96L516.9,128L553.8,128L553.8,256L590.8,256L590.8,256L627.7,256L627.7,64L664.6,64L664.6,256L701.5,256L701.5,96L738.5,96L738.5,64L775.4,64L775.4,288L812.3,288L812.3,0L849.2,0L849.2,224L886.2,224L886.2,64L923.1,64L923.1,64L960,64L960,32L996.9,32L996.9,224L1033.8,224L1033.8,160L1070.8,160L1070.8,192L1107.7,192L1107.7,32L1144.6,32L1144.6,32L1181.5,32L1181.5,96L1218.5,96L1218.5,288L1255.4,288L1255.4,96L1292.3,96L1292.3,64L1329.2,64L1329.2,256L1366.2,256L1366.2,160L1403.1,160L1403.1,128L1440,128L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"></path></svg>
      {/* Testimonials Section */}
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,154.7C320,160,400,192,480,213.3C560,235,640,245,720,234.7C800,224,880,192,960,154.7C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      {/* Community Section */}
      <section className="py-16 px-4 bg-primary text-white">
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
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-primary/10 p-4 rounded-full">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
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

