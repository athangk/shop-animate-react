import { Grid, Button, Slider, Box, Container, Typography } from "@mui/material"
import React, { useState } from "react"
import { Literals } from "../../utilities/literals"
import { useDispatch, useSelector } from "react-redux"
import { updateFilters } from "./FiltersSlice"
import { FilterData } from "../../models/IModelsData"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { selectFilters } from "./FiltersSlice"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CommonWrapper } from "../components/styled"

const Filters = () => {
  const dispatch = useDispatch()
  const filtersState = useSelector(selectFilters)
  const [order, setOrder] = useState<string>(filtersState.order)
  const [range, setRange] = React.useState<number[]>([filtersState.rangeMin, filtersState.rangeMax])
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[])
  }

  const handleSliderChangeCommitted = () => {
    let filterData: FilterData = {
      order,
      rangeMin: range[0],
      rangeMax: range[1],
    }
    dispatch(updateFilters(filterData))
  }

  const handleSortChange = (type: string) => {
    let filterData: FilterData = {
      order: type,
      rangeMin: range[0],
      rangeMax: range[1],
    }
    setOrder(type)
    dispatch(updateFilters(filterData))
  }

  const sortByPrice = (type: string) => {
    let filterData = { order: type, rangeMin: 0, rangeMax: 1000 }
    setOrder(type)
    dispatch(updateFilters(filterData))
  }

  function valuetext(value: number) {
    return `${value}°E`
  }

  return (
    <CommonWrapper>
      <Grid container mb={2} direction={mobile ? "column" : "row"}>
        <Grid item md={6} sm={12}>
          <Box ml={2}>
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={4} color="secondary">
                Range:
              </Typography>
              <Slider
                value={range}
                onChange={handleSliderChange}
                onChangeCommitted={handleSliderChangeCommitted}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={0}
                max={1000}
                color="secondary"
              />
            </Container>
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid container justifyContent={mobile ? "center" : "end"} alignItems="center" spacing={2}>
            <Grid item md={2}>
              <Typography color="secondary">Order:</Typography>
            </Grid>
            <Grid item md={2}>
              <Button
                color="secondary"
                fullWidth
                variant={order === "asc" ? "contained" : "outlined"}
                onClick={() => handleSortChange("asc")}
              >
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button
                fullWidth
                color="secondary"
                variant={order === "desc" ? "contained" : "outlined"}
                onClick={() => handleSortChange("desc")}
              >
                <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CommonWrapper>
  )
}

export default Filters
