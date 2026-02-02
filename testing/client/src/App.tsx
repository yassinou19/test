import { AppShell, Burger, Group, Button, Text, Container, Title, Paper, UnstyledButton, ActionIcon, Stack, Switch, Slider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SplitText from './components/Animations/SplitText';
import ShinyText from './components/Animations/ShinyText';
import { motion } from 'framer-motion';

function App() {
  const [opened, { toggle }] = useDisclosure();

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
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          minHeight: '100vh',
        },
        header: {
          backgroundColor: 'var(--bg-secondary)',
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
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundColor: 'var(--accent-primary)', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ width: 16, height: 16, backgroundColor: 'white', borderRadius: 2 }} />
            </motion.div>
            <Title order={3} style={{ letterSpacing: '-0.5px' }}>
              <ShinyText text="Style Guide" speed={3} />
            </Title>
          </Group>

          <Group visibleFrom="sm" gap="xl">
            {['Colors', 'Type', 'UI Kit', 'Settings'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                <UnstyledButton fw={500} c={i === 0 ? "var(--text-primary)" : "var(--text-secondary)"} component="a" href="#">
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
          <UnstyledButton c="var(--text-primary)" fw={600}>Colors</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">Type</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">UI Kit</UnstyledButton>
          <UnstyledButton c="var(--text-secondary)">Settings</UnstyledButton>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid p="xl" style={{ maxWidth: '1400px' }}>
          <Stack gap="xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Group justify="space-between" align="center">
                <div>
                  <Title order={2} mb={5}>
                    <SplitText text="COLOR PALETTE" delay={50} />
                  </Title>
                  <Text c="var(--text-secondary)" size="sm">v1.0.4</Text>
                </div>
              </Group>
            </motion.div>

            <Stack gap="md">
              {[
                { title: 'Accent Primary', desc: 'Main actions and key highlights.', color: 'var(--accent-primary)', hex: '#581CFF', icon: '🎨' },
                { title: 'Base BG', desc: 'Deep space background for dark mode.', color: '#030014', hex: '#030014', icon: '🌌' },
                { title: 'Surface Card', desc: 'Secondary layers and card containers.', color: '#0B0720', hex: '#0B0720', icon: '🎴' }
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
                    <Group justify="space-between">
                      <Group gap="xl">
                        <div style={{ width: 60, height: 60, backgroundColor: card.color, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: card.color === '#030014' ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ fontSize: 24 }}>{card.icon}</span>
                        </div>
                        <div>
                          <Title order={4}>{card.title}</Title>
                          <Text c="var(--text-secondary)" size="sm">{card.desc}</Text>
                        </div>
                      </Group>
                      <Text fw={700} ff="monospace" c="var(--text-secondary)">{card.hex}</Text>
                    </Group>
                  </Paper>
                </motion.div>
              ))}

              <Group grow gap="md">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                  <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)', borderLeft: '4px solid var(--success)' }}>
                    <Group>
                      <div style={{ width: 20, height: 20, backgroundColor: 'var(--success)', borderRadius: 4 }} />
                      <Stack gap={0}>
                        <Text fw={700} size="sm">Success</Text>
                        <Text size="xs" c="var(--text-secondary)">#1BB981</Text>
                      </Stack>
                    </Group>
                  </Paper>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)', borderLeft: '4px solid var(--error)' }}>
                    <Group>
                      <div style={{ width: 20, height: 20, backgroundColor: 'var(--error)', borderRadius: 4 }} />
                      <Stack gap={0}>
                        <Text fw={700} size="sm">Error</Text>
                        <Text size="xs" c="var(--text-secondary)">#EF4444</Text>
                      </Stack>
                    </Group>
                  </Paper>
                </motion.div>
              </Group>
            </Stack>

            <Stack gap="md" mt="xl">
              <Title order={2}>TYPOGRAPHY</Title>
              <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
                <Stack gap="lg">
                  <div>
                    <Text size="xs" fw={700} c="var(--text-secondary)" mb={8}>DISPLAY H1</Text>
                    <Title order={1} style={{ fontSize: '3rem', fontWeight: 900 }}>True Focus</Title>
                  </div>
                  <div>
                    <Text size="xs" fw={700} c="var(--text-secondary)" mb={8}>HEADING H2</Text>
                    <Title order={2}>Refined Experience</Title>
                  </div>
                  <div>
                    <Text size="xs" fw={700} c="var(--text-secondary)" mb={8}>BODY TEXT</Text>
                    <Text c="var(--text-secondary)" style={{ maxWidth: 600 }}>
                      Design systems provide a shared language for teams to build cohesive digital products at scale.
                    </Text>
                  </div>
                </Stack>
              </Paper>
            </Stack>

            <Stack gap="md" mt="xl">
              <Title order={2}>INTERACTIVE ELEMENTS</Title>
              
              <Group grow align='start' gap="xl">
                <Stack gap="md">
                  <Text size="sm" fw={700}>Buttons</Text>
                  <Group>
                    <Button bg="var(--accent-primary)" radius="md" size="md" px="xl">Primary Action</Button>
                    <Button variant="outline" color="gray" radius="md" size="md" px="xl" style={{ borderColor: 'var(--border)', color: 'white' }}>Ghost</Button>
                  </Group>
                  <Button variant="light" color="green" radius="md" size="md" fullWidth style={{ backgroundColor: 'rgba(27, 185, 129, 0.1)', color: 'var(--success)', border: '1px solid var(--success)' }}>
                    Confirmed
                  </Button>
                </Stack>

                <Stack gap="md">
                  <Text size="sm" fw={700}>Controls</Text>
                  <Paper p="md" radius="md" bg="var(--bg-primary)" style={{ border: '1px solid var(--border)' }}>
                    <Stack gap="md">
                      <Group justify="space-between">
                        <Text size="sm">Hover Effects</Text>
                        <Switch color="indigo" defaultChecked />
                      </Group>
                      <Group justify="space-between">
                        <Text size="sm">Blur Amount</Text>
                        <Text size="sm" c="var(--accent-primary)">8px</Text>
                      </Group>
                      <Slider color="indigo" defaultValue={40} label={null} styles={{ track: { backgroundColor: 'var(--border)' } }} />
                    </Stack>
                  </Paper>
                </Stack>
              </Group>

              <Stack gap="md" mt="md">
                <Text size="sm" fw={700}>Card States</Text>
                <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                  <Group justify="space-between">
                    <Group gap="md">
                      <div style={{ width: 40, height: 40, backgroundColor: 'rgba(88, 28, 255, 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 18 }}>✨</span>
                      </div>
                      <div>
                        <Title order={4}>Premium Layout</Title>
                        <Text c="var(--text-secondary)" size="sm">Includes 20+ components</Text>
                      </div>
                    </Group>
                    <UnstyledButton c="var(--accent-primary)" fw={700} size="sm">Learn More →</UnstyledButton>
                  </Group>
                </Paper>
              </Stack>
            </Stack>

            <Paper p="xl" radius="lg" bg="rgba(88, 28, 255, 0.05)" style={{ border: '1px solid var(--accent-primary)' }} mt="xl">
               <Group align="start" gap="md">
                  <div style={{ width: 24, height: 24, backgroundColor: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>i</div>
                  <Stack gap="xs">
                    <Title order={4}>Usage Guidelines</Title>
                    <Text c="var(--text-secondary)" size="sm">
                      Ensure all interactive states maintain a minimum contrast ratio of 4.5:1. Primary colors should be used for call-to-actions, while surfaces handle information hierarchy.
                    </Text>
                  </Stack>
               </Group>
            </Paper>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

