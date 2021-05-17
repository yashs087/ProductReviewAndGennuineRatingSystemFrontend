import { render, fireEvent } from '@testing-library/react'
import AddProduct from './Components/AddProduct'

it('checkButton', () => {
    const { queryByTitle } = render(<AddProduct />)
    const btn = queryByTitle("button1")
    expect(btn).toBeTruthy()
})

describe('clickButton', () => {
  it('onClick', () => {
    const {queryByTitle} = render(<AddProduct />)
    const btn = queryByTitle("button1")
    fireEvent.click(btn)
  })
})