import { render, fireEvent } from '@testing-library/react'
import AddProduct from './AddProduct'

it('checkButton', () => {
    const { queryByTitle } = render(<AddProduct />)
    const btn = queryByTitle("button1")
    expect(btn).toBeTruthy()
})