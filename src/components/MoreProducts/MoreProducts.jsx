import React, { useState } from 'react';
import "./MoreProducts.css";
import Counter from "./Counter";
import PriceSlider from './PriceSlider';
import FilterSection from './FilterSection';
import { Box, Typography, Card, CardContent, CardMedia, Button, Stack, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import HandCream from "../../assets/handCream.webp";
import HerbalTea from "../../assets/HerbalTea.webp";
import Strawberry from "../../assets/strawberry.webp";
import Avocado from "../../assets/avocado.webp";
import Meat from "../../assets/meat.webp";
import Tuna from "../../assets/tuna.webp";
import Corn from "../../assets/cornFlakes.webp";
import Shampoo from "../../assets/shampoo.webp";
import Cola from "../../assets/freshCola.webp";
import Powder from "../../assets/bodyPowder.webp";
import OliveOil from "../../assets/oliveOil.webp";
import Tea from "../../assets/chamomileTea.webp";
import Cucumber from "../../assets/cucumber.webp";
import Banana from "../../assets/bananaBunch.webp";
import Orange from "../../assets/orange.webp";
import Sausage from "../../assets/sausage.webp";
import BeefFillet from "../../assets/beefFillet.webp";
import Shrimps from "../../assets/shrimps.webp";
import Milk from "../../assets/milk.webp";
import Cheese from "../../assets/creamCheese.webp";
import Yogurt from "../../assets/greekYogurt.webp";
import Baquette from "../../assets/baguette.webp";
import Pasta from "../../assets/pasta.webp";
import WhiteTea from "../../assets/whiteTea.webp";
import Colombian from "../../assets/colombian.webp";
import BlondBeer from "../../assets/blondeBeer.webp";
import Cabernet from "../../assets/cabernetWine.webp";
import Glass from "../../assets/glassBowl.webp";
import Liquid from "../../assets/liquid.webp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useWindowDimensions from "../../utils/WindowDimension";

const productImages = {
  'Hand Cream': HandCream,
  'Herbal Tea 16ct.': HerbalTea,
  'Strawberries - 1lb': Strawberry,
  'Hass Avbocados Ready-to-Eat - 1lb': Avocado,
  'Boneless Chicken Thigs - 1lb': Meat,
  'Tuna Steak Fillet- 1lb': Tuna,
  "Corn Flakes Cereal 14.5 oz.": Corn,
  "Shampoo, Normal Hair 30 oz.": Shampoo,
  "Cola Flavor soda": Cola,
  "Baby Body Powder": Powder,
  "Olive Oil": OliveOil,
  "Chamomile Tea 16 ct.": Tea,
  "Greenhouse Cucumber - 1lb.": Cucumber,
  "Banana Bunch - 1lb": Banana,
  "Navel Orange - 1lb": Orange,
  "Italian Chicken Sausage - 1lb": Sausage,
  "Beef Fillet - 1lb.": BeefFillet,
  "Wild Domestic Shrimps - 1lb": Shrimps,
  "Whole Milk Gallon, 64 oz.": Milk,
  "Cream Cheese Spread 8 oz.": Cheese,
  "Greek Yogurt, Strawberry on the Bottom": Yogurt,
  "Fresh Plain Baguette 12 oz.": Baquette,
  "Tagliatelle Rigati Pasta 350 gr.": Pasta,
  "White Tea 16 ct.": WhiteTea,
  "Colombian, Ground Coffee": Colombian,
  "Blonde Ale Glass Bottle 16 oz.": BlondBeer,
  "Cabernet Sauvignon 750 ml.": Cabernet,
  "Glass Bowl": Glass,
  "Floor Liquid Cleaner": Liquid
};

const productsData = [
  { name: "Hand Cream", categories: ["Deals", "Personal Hygiene"], firstprice: null, price: 2.99, bestDeal: "Best Deal" },
  { name: 'Herbal Tea 16ct.', categories: ["Deals", "Tea"], firstprice: null, price: 3.99, bestDeal: "Best Deal" },
  { name: 'Strawberries - 1lb', categories: ["Deals", "Fruit"], firstprice: 4.99, price: 4.49, bestDeal: "Best Deal" },
  { name: 'Hass Avbocados Ready-to-Eat - 1lb', categories: ["Deals", "Vegetables"], firstprice: 2.99, price: 2.69, bestDeal: "Best Deal" },
  { name: 'Boneless Chicken Thigs - 1lb', categories: ["Deals", "Meat & Poultry"], firstprice: 4.49, price: 4.04, bestDeal: "Best Deal" },
  { name: 'Tuna Steak Fillet- 1lb', categories: ["Deals", "Fish & Seafood"], firstprice: 29.99, price: 26.99, bestDeal: "Best Deal" },
  { name: "Corn Flakes Cereal 14.5 oz.", categories: ["Most Popular", "Cereals & Snacks"], firstprice: null, price: "5.99", bestDeal: "Most Popular" },
  { name: "Shampoo, Normal Hair 30 oz.", categories: ["Most Popular", "Personal Hygiene"], firstprice: null, price: "3.99", bestDeal: "Most Popular" },
  { name: "Cola Flavor soda", categories: ["Most Popular", "Soft Drinks"], firstprice: null, price: "6.99", bestDeal: "Most Popular" },
  { name: "Baby Body Powder", categories: ["Most Popular", "Babies"], firstprice: null, price: "4.99", bestDeal: "Most Popular" },
  { name: "Olive Oil", categories: ["Most Popular", "Home & Kitchen"], firstprice: null, price: "4.99", bestDeal: "Most Popular" },
  { name: "Chamomile Tea 16 ct.", categories: ["Most Popular", "Tea"], firstprice: null, price: "3.99", bestDeal: "Most Popular" },
  { name: "Banana Bunch - 1lb", categories: ["Fruits"], firstprice: null, price: "1.89", bestDeal: "" },
  { name: "Navel Orange - 1lb", categories: ["Fruits", "Most Popular"], firstprice: null, price: "1.59", bestDeal: "Most Popular" },
  { name: "Italian Chicken Sausage - 1lb", categories: ["Meat & Poultry", "Most Popular"], firstprice: null, price: "6.99", bestDeal: "Most Popular" },
  { name: "Beef Fillet - 1lb.", categories: ["Meat & Poultry"], firstprice: null, price: "9.99", bestDeal: "" },
  { name: "Wild Domestic Shrimps - 1lb", categories: ["Fish & Seafood"], firstprice: null, price: "26.99", bestDeal: "" },
  { name: "Whole Milk Gallon, 64 oz.", categories: ["Dairy & Eggs"], firstprice: null, price: "2.69", bestDeal: "" },
  { name: "Cream Cheese Spread 8 oz.", categories: ["Best Deal", "Dairy & Eggs"], firstprice: "3.99", price: "3.59", bestDeal: "" },
  { name: "Greek Yogurt, Strawberry on the Bottom", categories: ["Most Popular", "Dairy & Eggs"], firstprice: null, price: "1.49", bestDeal: "Most Popular" },
  { name: "Greenhouse Cucumber - 1lb.", categories: ["Vegetables"], firstprice: null, price: "0.99", bestDeal: "" },
  { name: "Fresh Plain Baguette 12 oz.", categories: ["Bakery"], firstprice: null, price: "3.99", bestDeal: "" },
  { name: "Tagliatelle Rigati Pasta 350 gr.", categories: ["Pastas & Grains"], firstprice: null, price: "4.99", bestDeal: "" },
  { name: "White Tea 16 ct.", categories: ["Tea"], firstprice: null, price: "3.99", bestDeal: "" },
  { name: "Colombian, Ground Coffee", categories: ["Coffee"], firstprice: null, price: "11.99", bestDeal: "" },
  { name: "Blonde Ale Glass Bottle 16 oz.", categories: ["Beer"], firstprice: null, price: "8.99", bestDeal: "" },
  { name: "Cabernet Sauvignon 750 ml.", categories: ["Wine"], firstprice: null, price: "14.99", bestDeal: "" },
  { name: "Glass Bowl", categories: ["Home & Kitchen"], firstprice: null, price: "15.99", bestDeal: "" },
  { name: "Floor Liquid Cleaner", categories: ["Cleaning Supplies"], firstprice: null, price: "5.99", bestDeal: "" },
];

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  overflowY: 'auto',
  padding: theme.spacing(2),
  outline: 'none',
}));

function MoreProducts() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {width, height} = useWindowDimensions();
  const minDistance = 0.75;
  let min = 2.24;
  let max = 26.99
  const [value1, setValue1] = useState([min, max]);

  const toggleFilterModal = () => {
    setModalOpen(!modalOpen);
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePriceChange = (event, newValue, activeThumb) => {
    let result = null;
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      const newMinValue = Math.min(newValue[0], value1[1] - minDistance);
      result = [newMinValue, value1[1]];
    } else {
      const newMaxValue = Math.max(newValue[1], value1[0] + minDistance);
      result =[value1[0], newMaxValue];
    }
        const newFilteredProducts = [...productsData].filter(product => {
      return +product.price >= result[0] && +product.price <= result[1];
    });

    setValue1(result);
    setFilteredProducts(newFilteredProducts);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const newFilteredProducts = category === null ? productsData : productsData.filter(product => product.categories.includes(category));
    setFilteredProducts(newFilteredProducts);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.name);
  };

  const handleClearFilters = () => {
    setActiveCategory(null);
    setFilteredProducts(productsData);
  };

  const handleApplyFilters = () => {
    setModalOpen(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    width: 200,
    borderRadius: 20,
    marginTop: 10,
    textTransform: "capitalize",
  }));

  const BestDealBox = styled(Box)({
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    color: 'white',
    padding: '4px 8px',
    borderRadius: 15
  });
  if (width < 1200){
      return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" padding={2} borderBottom="1px solid black">
        <Typography variant="h6" color="black" sx={{ margin: '0px 4px', cursor: 'pointer' }} onClick={toggleFilterModal}>
          <Box sx={{ border: '1px solid black', padding: '2px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            Filter
            {isFilterOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
        </Typography>
      </Box>
      <Box className="card" padding={2}>
        {filteredProducts.map((product, index) => (
          <Card key={index} className="productCard">
            {product.bestDeal && <BestDealBox>{product.bestDeal}</BestDealBox>}
            <CardMedia
              component="img"
              height="265"
              image={productImages[product.name]}
              alt={product.name}
              style={{ marginTop: "30px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontSize={14} height={37.38}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="red" fontSize={20} marginBottom={1}>
                {product.firstprice && <span style={{ textDecoration: "line-through" }}>${product.firstprice}</span>} ${product.price}
              </Typography>
              <Box className="counter">
                <Counter index={index} />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
                <ColorButton className='button'
                  variant="contained"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </ColorButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <StyledModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalContent>
          <FilterSection title="Category">
            <Stack spacing={1}>
              {['All', 'Deals', 'Most Popular', 'Vegetables', 'Fruit', 'Meat & Poultry', 'Fish & Seafood', 'Dairy & Eggs', 'Bakery', 'Pastas & Grains', 'Cereals & Snacks', 'Tea', 'Coffee', 'Soft Drinks', 'Beer', 'Wine', 'Home & Kitchen', 'Cleaning Supplies', 'Personal Hygiene', 'Babies'].map((category) => (
                <Button className='all'
                  key={category}
                  onClick={() => handleCategoryClick(category === 'All' ? null : category)}
                  style={{
                    fontWeight: (activeCategory === category || (activeCategory === null && category === 'All')) ? '600' : 'normal',
                    color: activeCategory === category ? 'black' : 'inherit',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    display: "flex",
                    textTransform: "capitalize",
                    justifyContent: "flex-start",
                    padding: '0',
                    margin: '0',
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </FilterSection>
          <FilterSection title="Price">
            <PriceSlider onChange={handlePriceChange} min={min} max={max} value1 = {value1} />
          </FilterSection>
          <Box display="flex" justifyContent="space-between" padding={2}>
            <Button onClick={handleClearFilters} style={{ color: 'black', border: '1px solid black' }}>Clear Filters</Button>
            <Button variant="contained" onClick={handleApplyFilters} style={{ backgroundColor: 'black' }}>Apply</Button>
          </Box>
        </ModalContent>
      </StyledModal>
    </Box>
  );
  }else if (width > 1200){
    return (
      <Box display="flex">
        <Box width="40%" padding={2}>
          <Typography className='filter' variant="h5" marginBottom={2} color="black">Filter By</Typography>
          <FilterSection title="Category">
            <Stack spacing={1}>
              {['All', 'Deals', 'Most Popular', 'Vegetables', 'Fruit', 'Meat & Poultry', 'Fish & Seafood', 'Dairy & Eggs', 'Bakery', 'Pastas & Grains', 'Cereals & Snacks', 'Tea', 'Coffee', 'Soft Drinks', 'Beer', 'Wine', 'Home & Kitchen', 'Cleaning Supplies', 'Personal Hygiene', 'Babies'].map((category) => (
                <Button className='all'
                  key={category}
                  onClick={() => handleCategoryClick(category === 'All' ? null : category)}
                  style={{
                    fontWeight: (activeCategory === category || (activeCategory === null && category === 'All')) ? '600' : 'normal', 
                    color: activeCategory === category ? 'black' : 'inherit',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    display: "flex",
                    textTransform: "capitalize",
                    justifyContent: "flex-start",
                    padding: '0',
                    margin: '0',
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </FilterSection>
          <FilterSection title="Price">
          <PriceSlider onChange={handlePriceChange} min={min} max={max} value1 = {value1} />
          </FilterSection>
        </Box>
        <Box className="card" marginTop={6} padding={2} display="flex" flexDirection="row" flexWrap="wrap" width="calc(60% + 2000px)">
          {filteredProducts.map((product, index) => (
            <Card key={index} className="productCard">
              {product.bestDeal && <BestDealBox>{product.bestDeal}</BestDealBox>}
              <CardMedia
                component="img"
                height="265"
                image={productImages[product.name]}
                alt={product.name}
                style={{ marginTop: "30px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontSize={14} height={37.38}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="red" fontSize={20} marginBottom={1}>
                  {product.firstprice && <span style={{ textDecoration: "line-through" }}>${product.firstprice}</span>} ${product.price}
                </Typography>
                <Box className="counter">
                  <Counter index={index} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
                  <ColorButton className='button'
                    variant="contained"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </ColorButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    );  
  }

}

export default MoreProducts;
