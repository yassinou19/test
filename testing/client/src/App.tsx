import { AppShell, Burger, Group, Button, Menu, Text, Container, Title, Paper, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      styles={{
        main: {
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
        },
        header: {
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          color: 'var(--text-primary)',
        }
      }}
    >
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="var(--text-primary)" />
              <Title order={3} c="var(--text-primary)">Mon App</Title>
            </Group>

            <Group visibleFrom="sm" gap="xl">
              <UnstyledButton c="var(--text-secondary)" component="a" href="#">Accueil</UnstyledButton>
              <UnstyledButton c="var(--text-secondary)" component="a" href="#">Services</UnstyledButton>
              <UnstyledButton c="var(--text-secondary)" component="a" href="#">À propos</UnstyledButton>
              
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button variant="outline" color="gray" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                    Paramètres
                  </Button>
                </Menu.Target>

                <Menu.Dropdown bg="var(--bg-secondary)" style={{ borderColor: 'var(--border)' }}>
                  <Menu.Label c="var(--text-muted)">Configuration</Menu.Label>
                  <Menu.Item c="var(--text-primary)" bg="transparent">Profil</Menu.Item>
                  <Menu.Item c="var(--text-primary)" bg="transparent">Sécurité</Menu.Item>
                  <Menu.Divider style={{ borderColor: 'var(--border)' }} />
                  <Menu.Item color="red">Déconnexion</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="var(--bg-secondary)">
        <Group>
          <UnstyledButton c="var(--text-primary)" mb="xs">Accueil</UnstyledButton>
          <UnstyledButton c="var(--text-primary)" mb="xs">Services</UnstyledButton>
          <UnstyledButton c="var(--text-primary)" mb="xs">À propos</UnstyledButton>
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="lg" mt="xl">
          <Paper p="xl" radius="md" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
            <Title order={1} mb="md" c="var(--text-primary)">Tableau de Bord</Title>
            <Text size="lg" c="var(--text-secondary)" mb="xl">
              Bienvenue sur votre nouvelle interface MantineUI en mode sombre. 
              Les couleurs utilisées correspondent exactement à votre demande.
            </Text>

            <Group>
              <Button bg="var(--info)" c="black">Informations</Button>
              <Button bg="var(--success)" c="black">Confirmer</Button>
              <Button variant="outline" color="red" style={{ borderColor: 'var(--error)', color: 'var(--error)' }}>
                Erreur
              </Button>
            </Group>
          </Paper>

          <Group mt="xl" grow>
            <Paper p="md" radius="md" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
              <Text fw={700} c="var(--warning)">Attention</Text>
              <Text size="sm" c="var(--text-muted)">Une action est requise sur votre compte.</Text>
            </Paper>
            <Paper p="md" radius="md" bg="var(--bg-secondary)" style={{ border: '1px solid var(--border)' }}>
              <Text fw={700} c="var(--success)">Succès</Text>
              <Text size="sm" c="var(--text-muted)">Toutes les opérations sont terminées.</Text>
            </Paper>
          </Group>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

