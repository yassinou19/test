import { AppShell, Burger, Group, Button, Text, Container, Title, Paper, UnstyledButton, ActionIcon, Stack, Switch, Slider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
      padding="0" // Remove default padding for full control
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
            <div style={{ backgroundColor: 'var(--accent-primary)', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 16, height: 16, backgroundColor: 'white', borderRadius: 2 }} />
            </div>
            <Title order={3} style={{ letterSpacing: '-0.5px' }}>Style Guide</Title>
          </Group>

          <Group visibleFrom="sm" gap="xl">
            <UnstyledButton fw={500} c="var(--text-primary)" component="a" href="#">Colors</UnstyledButton>
            <UnstyledButton fw={500} c="var(--text-secondary)" component="a" href="#">Type</UnstyledButton>
            <UnstyledButton fw={500} c="var(--text-secondary)" component="a" href="#">UI Kit</UnstyledButton>
            <UnstyledButton fw={500} c="var(--text-secondary)" component="a" href="#">Settings</UnstyledButton>
            
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
            <Group justify="space-between" align="center">
              <div>
                <Title order={2} mb={5}>COLOR PALETTE</Title>
                <Text c="var(--text-secondary)" size="sm">v1.0.4</Text>
              </div>
            </Group>

            <Stack gap="md">
              <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
                <Group justify="space-between">
                  <Group gap="xl">
                    <div style={{ width: 60, height: 60, backgroundColor: 'var(--accent-primary)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 24 }}>🎨</span>
                    </div>
                    <div>
                      <Title order={4}>Accent Primary</Title>
                      <Text c="var(--text-secondary)" size="sm">Main actions and key highlights.</Text>
                    </div>
                  </Group>
                  <Text fw={700} ff="monospace" c="var(--text-secondary)">#581CFF</Text>
                </Group>
              </Paper>

              <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
                <Group justify="space-between">
                  <Group gap="xl">
                    <div style={{ width: 60, height: 60, backgroundColor: '#030014', borderRadius: 12, border: '1px solid var(--border)' }} />
                    <div>
                      <Title order={4}>Base BG</Title>
                      <Text c="var(--text-secondary)" size="sm">Deep space background for dark mode.</Text>
                    </div>
                  </Group>
                  <Text fw={700} ff="monospace" c="var(--text-secondary)">#030014</Text>
                </Group>
              </Paper>

              <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
                <Group justify="space-between">
                  <Group gap="xl">
                    <div style={{ width: 60, height: 60, backgroundColor: '#0B0720', borderRadius: 12, border: '1px solid var(--border)' }} />
                    <div>
                      <Title order={4}>Surface Card</Title>
                      <Text c="var(--text-secondary)" size="sm">Secondary layers and card containers.</Text>
                    </div>
                  </Group>
                  <Text fw={700} ff="monospace" c="var(--text-secondary)">#0B0720</Text>
                </Group>
              </Paper>

              <Group grow gap="md">
                <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)', borderLeft: '4px solid var(--success)' }}>
                  <Group>
                    <div style={{ width: 20, height: 20, backgroundColor: 'var(--success)', borderRadius: 4 }} />
                    <Stack gap={0}>
                      <Text fw={700} size="sm">Success</Text>
                      <Text size="xs" c="var(--text-secondary)">#1BB981</Text>
                    </Stack>
                  </Group>
                </Paper>
                <Paper p="xl" radius="lg" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)', borderLeft: '4px solid var(--error)' }}>
                  <Group>
                    <div style={{ width: 20, height: 20, backgroundColor: 'var(--error)', borderRadius: 4 }} />
                    <Stack gap={0}>
                      <Text fw={700} size="sm">Error</Text>
                      <Text size="xs" c="var(--text-secondary)">#EF4444</Text>
                    </Stack>
                  </Group>
                </Paper>
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

