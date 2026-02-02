import { AppShell, Burger, Group, Button, Text, Container, Title, UnstyledButton, ActionIcon, Stack, Switch, Slider, Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SplitText from './components/Animations/SplitText';
import ShinyText from './components/Animations/ShinyText';
import SpotlightCard from './components/Animations/SpotlightCard';
import DecryptedText from './components/Animations/DecryptedText';
import { motion, type Variants } from 'framer-motion';

function App() {
  const [opened, { toggle }] = useDisclosure();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15 } }
  };

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="0"
      styles={{
        main: {
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          minHeight: '100vh',
        },
        header: {
          backgroundColor: 'rgba(11, 7, 32, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          color: 'var(--text-primary)',
          paddingLeft: '20px',
          paddingRight: '20px',
        }
      }}
    >
      <AppShell.Header>
        <Group h="100%" justify="space-between">
          <Group gap="xs">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="var(--text-primary)" />
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ backgroundColor: 'var(--accent-primary)', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <div style={{ width: 16, height: 16, backgroundColor: 'white', borderRadius: 2 }} />
            </motion.div>
            <Title order={3} style={{ letterSpacing: '-0.5px' }}>
              <ShinyText text="System Design" speed={3} />
            </Title>
          </Group>

          <Group visibleFrom="sm" gap="xl">
            {['Dashboard', 'Analytics', 'Components', 'Settings'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, type: 'spring', damping: 12 }}
              >
                <UnstyledButton 
                  fw={500} 
                  c={i === 0 ? "var(--text-primary)" : "var(--text-secondary)"} 
                  component="a" 
                  href="#"
                  style={{ transition: 'color 0.2s' }}
                >
                  {item}
                </UnstyledButton>
              </motion.div>
            ))}
            
            <ActionIcon variant="subtle" color="gray" size="lg">
              <span style={{ fontSize: 18 }}>🔍</span>
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="var(--bg-secondary)" style={{ borderRight: '1px solid var(--border)' }}>
        <Stack gap="md">
          <UnstyledButton c="var(--text-primary)" fw={600}>Dashboard</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">Analytics</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">Components</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">Settings</UnstyledButton>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid p="xl" style={{ maxWidth: '1400px' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Stack gap="xl">
              <motion.div variants={itemVariants}>
                <Group justify="space-between" align="center">
                  <div>
                    <Title order={2} mb={5} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <DecryptedText text="PLATFORM INTERFACE" animateOn="view" speed={100} />
                      <Badge variant="dot" color="indigo" size="lg">v2.0.0</Badge>
                    </Title>
                    <Text c="var(--text-secondary)" size="sm">
                      <SplitText text="Experience structural hierarchy through professional motion." delay={0.03} />
                    </Text>
                  </div>
                </Group>
              </motion.div>

              <Group grow align="stretch">
                {[
                  { title: 'Processing Unit', val: '98.2%', status: 'Optimal', icon: '⚡' },
                  { title: 'Network Latency', val: '12ms', status: 'Low', icon: '🌐' },
                  { title: 'Storage Load', val: '45GB', status: 'Stable', icon: '💾' }
                ].map((stat) => (
                  <motion.div key={stat.title} variants={itemVariants}>
                    <SpotlightCard>
                      <div style={{ padding: '24px' }}>
                        <Group justify="space-between" mb="xs">
                          <Text size="xs" fw={700} c="var(--text-secondary)">{stat.title}</Text>
                          <span style={{ fontSize: '20px' }}>{stat.icon}</span>
                        </Group>
                        <Title order={2} c="var(--text-primary)">{stat.val}</Title>
                        <Text size="xs" c="var(--success)" mt={5}>{stat.status}</Text>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </Group>

              <motion.div variants={itemVariants}>
                <Title order={3} mb="md">COLOR ARCHITECTURE</Title>
                <Stack gap="md">
                  {[
                    { title: 'Accent Primary', desc: 'Main actions and key highlights.', color: 'var(--accent-primary)', hex: '#581CFF', icon: '🎨' },
                    { title: 'Base BG', desc: 'Deep space background for dark mode.', color: '#030014', hex: '#030014', icon: '🌌' },
                    { title: 'Surface Card', desc: 'Secondary layers and card containers.', color: '#0B0720', hex: '#0B0720', icon: '🎴' }
                  ].map((card) => (
                    <SpotlightCard key={card.title} spotlightColor="rgba(88, 28, 255, 0.15)">
                      <div style={{ padding: '24px' }}>
                        <Group justify="space-between">
                          <Group gap="xl">
                            <motion.div 
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              style={{ width: 60, height: 60, backgroundColor: card.color, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: card.color === '#030014' ? '1px solid var(--border)' : 'none' }}>
                              <span style={{ fontSize: 24 }}>{card.icon}</span>
                            </motion.div>
                            <div>
                              <Title order={4}>{card.title}</Title>
                              <Text c="var(--text-secondary)" size="sm">{card.desc}</Text>
                            </div>
                          </Group>
                          <Text fw={700} ff="monospace" c="var(--text-secondary)">{card.hex}</Text>
                        </Group>
                      </div>
                    </SpotlightCard>
                  ))}
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Title order={3} mb="md">CONTROL CENTER</Title>
                <Group grow align='start' gap="xl">
                  <SpotlightCard>
                    <div style={{ padding: '24px' }}>
                      <Text size="sm" fw={700} mb="md">Quick Actions</Text>
                      <Group>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button bg="var(--accent-primary)" radius="md" size="md">Deploy System</Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" color="gray" radius="md" size="md" style={{ borderColor: 'var(--border)', color: 'white' }}>Audit Logs</Button>
                        </motion.div>
                      </Group>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard>
                    <div style={{ padding: '24px' }}>
                      <Text size="sm" fw={700} mb="md">Environment Controls</Text>
                      <Stack gap="md">
                        <Group justify="space-between">
                          <Text size="sm">Advanced Rendering</Text>
                          <Switch color="indigo" defaultChecked />
                        </Group>
                        <Group justify="space-between">
                          <Text size="sm">Simulation Speed</Text>
                          <Slider color="indigo" defaultValue={75} w={150} label={null} styles={{ track: { backgroundColor: 'var(--border)' } }} />
                        </Group>
                      </Stack>
                    </div>
                  </SpotlightCard>
                </Group>
              </motion.div>

            </Stack>
          </motion.div>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

