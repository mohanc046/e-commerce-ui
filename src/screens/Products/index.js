import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageHeader } from '../../components/PageHeader';
import { ProductFilter } from '../../components/ProductFilter';
import './products.css';

export const Products = () => {
    return (
        <>
            <Header />
            <PageHeader title='Shop' activeItem='Products' />
            <ProductFilter />
            <Footer />
        </>
    )
}