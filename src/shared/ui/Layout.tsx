import { Container } from "@mui/material"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth={"lg"} sx={{ minHeight: "100vh" }}>
      {children}
    </Container>
  )
}
