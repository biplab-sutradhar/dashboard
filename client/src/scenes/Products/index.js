import { useTheme } from '@emotion/react'
import { Box, Card, CardActions, CardContent, Rating, Typography, useMediaQuery, Button, Collapse } from '@mui/material'
import Header from 'component/Header'
import React from 'react'
import { useGetProductsQuery } from 'state/api'


const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card sx={{
      backgroundImage: "none",
      backgroundColor: theme.palette.background.alt,
      marginLeft: isExpanded ? '240px' : '0',

    }}>

      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )

}


const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  // if (isLoading) return <div>Loading...</div>
  // console.log('data', data);
  return (
    <Box m=" 1.5rem 2.5rem">
      <Header title="Products" subtile="List of Products" />
      {
        data || !isLoading ? (
          <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumnEnd: isNonMobile ? "auto" : "span 4",
            },
          }}
        >
            {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}

          </Box>) : <>Loading....</>
      }
    </Box>
  )
}

export default Products