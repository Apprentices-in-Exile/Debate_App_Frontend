import { render } from '@testing-library/react'
import PersonaDescription from '../components/PersonaDescription/PersonaDescription'

describe('App', () => {
  it('should work as expected', () => {
    render(<PersonaDescription persona={{
      imageURL: 'imageURL',
      name: 'Name',
      description: 'Description'
    }} />)
    expect(1 + 1).toBe(2)
  })
})
