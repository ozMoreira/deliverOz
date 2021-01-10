import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import { toast } from 'react-toastify';
import './styles.css';


function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice =selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
 
    useEffect(() => {
        fetchProducts()
          .then(response => setProducts(response.data))
          .catch(error => {
            toast.warning('Erro ao listar produtos');
          })
    }, []);

    const handleSelectProduct = (product: Product) => {
      const isAlreadySelected = checkIsSelected(selectedProducts, product);
    
      if (isAlreadySelected) {
        const selected = selectedProducts.filter(item => item.id !== product.id);
        setSelectedProducts(selected);
      } else {
        setSelectedProducts(previous => [...previous, product]);
      }
    }
    
    const handleSubmit = () => {
      const productsIds = selectedProducts.map(({ id }) => ({ id }));
      const payload = {
        ...orderLocation!,
        products: productsIds
      }
     
      saveOrder(payload)
        .then((response) => {
          toast.error(`Pedido Código # ${response.data.id} enviado com sucesso! Tenha uma Excelente Refeição!`);
          setSelectedProducts([]);
      })
        .catch(() => {
          toast.warning('Erro ao enviar pedido. Voce precisa seguir todas as etapas sequencialmente!');
        })
    }
    return (
      <>
        <div className="orders-container">
            <StepsHeader/> 
            <ProductsList 
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts = {selectedProducts}
            />
            <OrderLocation 
            onChangeLocation={location => setOrderLocation(location)} 
            />
            <OrderSummary
            amount={selectedProducts.length}
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
            />
        </div>
        <Footer/>
      </>
    )
}

export default Orders;