import { AppShell, Group, Button, Text, Container, Title, UnstyledButton, Stack, Switch, Slider, Badge } from '@mantine/core';
import SplitText from './components/Animations/SplitText';
import ShinyText from './components/Animations/ShinyText';
import SpotlightCard from './components/Animations/SpotlightCard';
import DecryptedText from './components/Animations/DecryptedText';
import Aurora from './components/ReactBits/Aurora';
import ScrollStack from './components/ReactBits/ScrollStack';
import CircularGallery from './components/ReactBits/CircularGallery';
import CardNav from './components/ReactBits/CardNav';
import LogoLoop from './components/ReactBits/LogoLoop';
import { motion } from 'framer-motion';

function App() {
  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15 } }
  };

  const galleryItems = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614850523296-62c0af475ad1?q=80&w=400&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=400&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&h=600&auto=format&fit=crop',
  ];

  const navItems = [
    { id: '1', title: 'Performance', icon: '🚀', content: <Stack><Title order={3}>Compute Engine</Title><Text>Advanced neural processing nodes for real-time data analysis.</Text><Slider defaultValue={80} color="indigo" /></Stack> },
    { id: '2', title: 'Security', icon: '🛡️', content: <Stack><Title order={3}>Quantum Shield</Title><Text>End-to-end encrypted tunnels with zero-trust architecture.</Text><Switch defaultChecked label="Active Firewall" /></Stack> },
    { id: '3', title: 'Global', icon: '🌍', content: <Stack><Title order={3}>World CDN</Title><Text>Strategic edge locations for sub-5ms global latency.</Text><Badge size="xl" color="green">ONLINE</Badge></Stack> },
  ];

  const stackItems = [
    <SpotlightCard key="1"><div style={{ padding: '40px', textAlign: 'center' }}><Title order={1}>INNOVATION</Title><Text mt="md">Redefining boundaries of digital interaction.</Text></div></SpotlightCard>,
    <SpotlightCard key="2"><div style={{ padding: '40px', textAlign: 'center' }}><Title order={1}>STABILITY</Title><Text mt="md">Rock-solid infrastructure for critical loads.</Text></div></SpotlightCard>,
    <SpotlightCard key="3"><div style={{ padding: '40px', textAlign: 'center' }}><Title order={1}>EVOLUTION</Title><Text mt="md">Self-healing systems that adapt to your needs.</Text></div></SpotlightCard>,
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      padding="0"
      styles={{
        main: {
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          minHeight: '100vh',
        },
        header: {
          backgroundColor: 'rgba(11, 7, 32, 0.4)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          color: 'var(--text-primary)',
          paddingLeft: '20px',
          paddingRight: '20px',
        }
      }}
    >
      <Aurora speed={0.5} />
      
      <AppShell.Header>
        <Group h="100%" justify="space-between">
          <Group gap="xs">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ backgroundColor: 'var(--accent-primary)', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <div style={{ width: 16, height: 16, backgroundColor: 'white', borderRadius: 2 }} />
            </motion.div>
            <Title order={3} style={{ letterSpacing: '-0.5px' }}>
              <ShinyText text="React Bits Showcase" speed={3} />
            </Title>
          </Group>

          <Group visibleFrom="sm" gap="xl">
            {['Experience', 'Innovation', 'Platform', 'Security'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, type: 'spring', damping: 12 }}
              >
                <UnstyledButton fw={500} c="var(--text-secondary)" style={{ transition: 'color 0.2s' }}>
                  {item}
                </UnstyledButton>
              </motion.div>
            ))}
            <Button radius="md" bg="var(--accent-primary)">Join Console</Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container fluid p="0">
          <LogoLoop logos={['REACT', 'VITE', 'MANTINE', 'FRAMER', 'GSAP', 'DOCKER', 'AZURE']} />
          
          <Container size="xl" py={120}>
            <Stack gap={100}>
              <motion.div variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
                <Title order={1} style={{ fontSize: '4rem', fontWeight: 900 }}>
                  <DecryptedText text="FUTURE OF INTERFACES" speed={150} />
                </Title>
                <Text size="xl" c="var(--text-secondary)" maw={600} mx="auto" mt="md">
                  <SplitText text="A masterclass in modern web motion and structural design patterns." delay={0.02} />
                </Text>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <CardNav items={navItems} />
              </motion.div>

              <motion.div style={{ padding: '80px 0' }}>
                <Title order={2} ta="center" mb={50}>IMMERSIVE PERSPECTIVE</Title>
                <CircularGallery items={galleryItems} />
              </motion.div>

              <div style={{ position: 'relative' }}>
                <Title order={2} ta="center" mb={-50}>STRUCTURAL STACK</Title>
                <ScrollStack items={stackItems} />
              </div>

              <SpotlightCard>
                <div style={{ padding: '60px', textAlign: 'center' }}>
                  <Title order={2} mb="md">Ready to build?</Title>
                  <Text c="var(--text-secondary)" mb="xl">Deploy your next vision with our advanced animation suite.</Text>
                  <Group justify="center">
                    <Button size="lg" bg="var(--accent-primary)">Get Started</Button>
                    <Button size="lg" variant="outline" color="gray" style={{ color: 'white', borderColor: 'var(--border)' }}>Documentation</Button>
                  </Group>
                </div>
              </SpotlightCard>
            </Stack>
          </Container>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

