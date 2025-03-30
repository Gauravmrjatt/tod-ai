"use client"
import { useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Text } from '@react-three/drei';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export default function App() {
  return <HomePage />;
}

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bubblegum Sans', cursive;
  }

  body {
    background: linear(135deg, #ff9a9e 0%, #fad0c4 100%);
    overflow-x: hidden;
  }
`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BubbleButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transform-style: preserve-3d;
  box-shadow: 0 10px 20px rgba(255,107,107,0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`;

// Simplified 3D Model
function CartoonRobot() {
  const { scene } = useGLTF('/robot_model.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
  });

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        scale={[0.8, 0.8, 0.8]}
        position={[0, -1, 0]}
      />
    </group>
  );
}

// Animated Background Elements
function FloatingEmojis() {
  return (
    <>
      {['🎈', '🎉', '✨', '🤖', '🎁'].map((emoji, i) => (
        <Html
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2.5) * 4,
            Math.sin((i * Math.PI) / 2.5) * 4,
            -5
          ]}
          style={{
            fontSize: '3em',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {emoji}
          </motion.div>
        </Html>
      ))}
    </>
  );
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            style={{ fontSize: '2.5rem', color: '#ff6b6b' }}
          >
            🤖 Tod-AI Kids
          </motion.h1>
          <BubbleButton whileTap={{ scale: 0.95 }}>
            Let's Play!
          </BubbleButton>
        </Header>

        <HeroSection>
          <motion.div
            style={{ position: 'absolute', left: '10%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 style={{ fontSize: '4rem', color: '#2d3436' }}>
              Learning Made Magical!
            </h1>
            <p style={{ fontSize: '1.8rem', color: '#636e72' }}>
              AI adventures for curious minds 🚀
            </p>
            <BubbleButton
              style={{ marginTop: '2rem' }}
              whileHover={{ scale: 1.1 }}
            >
              Start Adventure!
            </BubbleButton>
          </motion.div>

          <div style={{ width: '50%', height: '100vh' }}>
            <Canvas>
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} color="#ff6b6b" />
              <CartoonRobot />
              <FloatingEmojis />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </HeroSection>

        {/* Feature Section */}
        <motion.section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            margin: '4rem 0'
          }}
        >
          {[
            { emoji: '🎮', title: 'Playful Learning' },
            { emoji: '🧩', title: 'Smart Puzzles' },
            { emoji: '🏆', title: 'Achievements' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ fontSize: '4rem' }}>{feature.emoji}</div>
              <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.section>

        {/* Interactive Chat Bubble */}
        <motion.div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            fontSize: '3rem',
            cursor: 'pointer'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, -20, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          💬
        </motion.div>
      </Container>
    </>
  );
}