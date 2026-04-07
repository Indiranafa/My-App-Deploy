import { render } from '@testing-library/react';
import ProdukDetail from '../../pages/produk/[produk]';

describe('Produk Detail Page', () => {
  it('renders without crashing', () => {
    render(<ProdukDetail />);
  });
});