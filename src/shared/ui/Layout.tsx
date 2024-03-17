import { Container, SxProps } from "@mui/material";

const styles: SxProps = { minHeight: "100vh", display: "flex" };

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg" sx={styles}>
      {children}
    </Container>
  );
}
