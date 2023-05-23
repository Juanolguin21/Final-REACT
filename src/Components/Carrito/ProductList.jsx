
import { inventario } from '../../inventario';


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
		
			return setAllProducts([...products]);
		}
	
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
		
	};

	return (
		<div className='container-items'>
			{inventario.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<div className='data1'>
						<p className='price'>💲{product.price}</p>
						<p className='price'>{product.talle}</p>
						</div>
						<button onClick={() => onAddProduct(product) & alert(`PRODUCTO AGREGADO CON EXITO   🏄‍♂️ `)}>
							AÑADIR AL CARRITO
						</button>
					</div>
				</div>
			))}
		</div>
	);
};