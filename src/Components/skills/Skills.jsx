import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';

const COLS_DESKTOP = 6;
const COLS_TABLET = 5;
const COLS_MOBILE = 4;
const COLS_SMALL = 3;

// Order: languages → frameworks → tools → concepts → ai (no category headings shown)
const SKILLS_ORDER = [
  'languages',
  'frameworks',
  'tools',
  'concepts',
  'ai',
];

const skillsData = {
  languages: [
    'C++',
    'JavaScript',
    'TypeScript',
    'Python',
    'SQL',
    'HTML/CSS',
  ],
  frameworks: [
    'React.js',
    'Node.js',
    'Express',
    'FastAPI',
    'Redux',
    'Next.js',
    'Firebase',
    'MongoDB',
  ],
  tools: [
    'Docker',
    'GitHub Actions',
    'Redis',
    'PostgreSQL',
    'Cloudinary',
    'VS Code',
    'MCP',
    'Selenium',
    'Playwright',
    'Beautiful Soup',
  ],
  concepts: [
    'REST APIs',
    'WebRTC',
    'Authentication',
    'RBAC',
    'Distributed Systems',
  ],
  ai: [
    'LangChain',
    'Transformers',
  ],
};

const WAVE_DELAY_PER_LINK = 0.06;
const WAVE_DURATION = 0.5;
const ENTRANCE_STAGGER = 0.04;

// Flatten in learning order, no category labels
const getOrderedSkills = () => {
  const list = [];
  SKILLS_ORDER.forEach((key) => {
    (skillsData[key] || []).forEach((skill) => list.push(skill));
  });
  return list;
};

// Inverted S: row 0 left→right, row 1 right→left, row 2 left→right...
const getGridPosition = (index, cols) => {
  const row = Math.floor(index / cols);
  const col =
    row % 2 === 0
      ? index % cols
      : cols - 1 - (index % cols);
  return { row: row + 1, col: col + 1 };
};

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: 'spring', stiffness: 120 },
  },
};

const getCols = () => {
  if (typeof window === 'undefined') return COLS_DESKTOP;
  const w = window.innerWidth;
  if (w <= 400) return COLS_SMALL;
  if (w <= 738) return COLS_MOBILE;
  if (w <= 1000) return COLS_TABLET;
  return COLS_DESKTOP;
};

const Skills = () => {
  const skills = useMemo(() => getOrderedSkills(), []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cols, setCols] = useState(COLS_DESKTOP);
  const resetTimeoutRef = useRef(null);

  useEffect(() => {
    const update = () => setCols(getCols());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleMouseEnter = useCallback(
    (index) => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      // Update wave origin (continuous: if wave was running, it now continues from new hover)
      setHoveredIndex(index);
      const maxDelay = (skills.length - 1) * WAVE_DELAY_PER_LINK;
      resetTimeoutRef.current = setTimeout(() => {
        setHoveredIndex(null);
        resetTimeoutRef.current = null;
      }, (maxDelay + WAVE_DURATION) * 1000);
    },
    [skills.length]
  );

  const handleMouseLeave = useCallback(() => {
    // Wave keeps running until timeout; no flash or reset
  }, []);

  return (
    <div className="skills">
      <div className="skillsWrapper">
        <motion.h1
          variants={titleVariants}
          initial="initial"
          animate="animate"
          className="skillsTitle"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Skills
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="ampersand"
          >
            &
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Technologies
          </motion.span>
        </motion.h1>

        <div className="chainWaveContainer">
          <motion.div
            className="chainWaveGrid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
            }}
          >
            {skills.map((skill, index) => {
              const { row, col } = getGridPosition(index, cols);
              const isWaveActive = hoveredIndex !== null;
              const waveDelay =
                isWaveActive
                  ? Math.abs(index - hoveredIndex) * WAVE_DELAY_PER_LINK
                  : 0;

              return (
                <motion.div
                  key={`${skill}-${index}`}
                  className="chainLink"
                  style={{
                    gridRow: row,
                    gridColumn: col,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: isWaveActive ? [1, 1.14, 1] : 1,
                    y: isWaveActive ? [0, -12, 0] : 0,
                  }}
                  transition={
                    isWaveActive
                      ? {
                          opacity: { duration: 0.3 },
                          scale: {
                            duration: WAVE_DURATION,
                            delay: waveDelay,
                            ease: [0.33, 0.5, 0.35, 0.94],
                          },
                          y: {
                            duration: WAVE_DURATION,
                            delay: waveDelay,
                            ease: [0.33, 0.5, 0.35, 0.94],
                          },
                        }
                      : {
                          opacity: {
                            duration: 0.4,
                            delay: index * ENTRANCE_STAGGER,
                          },
                          scale: {
                            duration: 0.4,
                            delay: index * ENTRANCE_STAGGER,
                          },
                        }
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={
                    !isWaveActive
                      ? {
                          scale: 1.08,
                          y: -4,
                          boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)',
                          transition: { duration: 0.2 },
                        }
                      : undefined
                  }
                >
                  <span className="chainLinkText">{skill}</span>
                  <motion.div
                    className="skillGlow"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="backgroundText"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 0.03,
          x: [0, 50, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          x: {
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          },
        }}
      >
        SKILLS TECHNOLOGIES EXPERTISE
      </motion.div>

      {[...Array(6)].map((_, i) => {
        const randomX =
          typeof window !== 'undefined'
            ? Math.random() * window.innerWidth
            : Math.random() * 1366;
        const randomY =
          typeof window !== 'undefined'
            ? Math.random() * window.innerHeight
            : Math.random() * 800;
        return (
          <motion.div
            key={i}
            className="floatingParticle"
            initial={{ x: randomX, y: randomY, opacity: 0 }}
            animate={{
              y: [null, randomY - 200 - Math.random() * 200],
              x: [null, randomX + (Math.random() - 0.5) * 400],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default Skills;
