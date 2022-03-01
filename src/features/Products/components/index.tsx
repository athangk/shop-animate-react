import { CardHeader, Container } from "@mui/material"
import { styled } from "@mui/system"

export const CardHeaderTitle = styled(CardHeader)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.secondary.main : theme.palette.secondary.main,
}))

export const ContainerLoader = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
}))
